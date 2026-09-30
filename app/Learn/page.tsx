"use client";

import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

const CATEGORIES = [
  "All",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Learn = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState("All");
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [product, setProduct] = useState<Product | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error(`خطای سرور (${res.status})`);
        return res.json();
      })
      .then((body) => setProducts(body))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false)),
      5000;
  }, []);
  useEffect(() => {
    if (selectedProductId === null) return;

    let ignore = false;
    setDetailLoading(true);
    setDetailError(null);
    setProduct(null);

    fetch(`https://fakestoreapi.com/products/${selectedProductId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`خطای سرور (${res.status})`);
        return res.json();
      })
      .then((body) => {
        if (!ignore) setProduct(body);
      })
      .catch((err) => {
        if (!ignore) setDetailError(err.message);
      })
      .finally(() => {
        if (!ignore) setDetailLoading(false), 5000;
      });

    return () => {
      ignore = true;
    };
  }, [selectedProductId]);

  if (loading)
    return (
      <p className="p-10 text-center text-lg">
        <Spinner className="size-6">LOADING...</Spinner>
      </p>
    );
  if (error)
    return (
      <p className="p-10 text-center text-lg text-red-600">خطا: {error}</p>
    );
  const visibleProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);
  function closeDetail() {
    setSelectedProductId(null);
    setProduct(null);
    setDetailError(null);
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="mb-6 flex items-center gap-2">
        <label htmlFor="category">دسته‌بندی:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-gray-900"
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((p) => (
          <article
            onClick={() => setSelectedProductId(p.id)}
            key={p.id}
            className="flex cursor-pointer flex-col gap-1.5 rounded-xl border border-gray-200 bg-white p-4 text-gray-900"
          >
            <img src={p.image} alt={p.title} className="h-40 object-contain" />
            <h3 className="line-clamp-2 text-sm font-medium">{p.title}</h3>
            <p className="font-bold">${p.price}</p>
            <p className="text-sm text-gray-600">{p.category}</p>
            <p className="text-sm text-gray-600">
              ⭐ {p.rating.rate} ({p.rating.count} نظر)
            </p>
          </article>
        ))}
        {selectedProductId !== null && (
          <div
            onClick={closeDetail}
            className="fixed inset-0 flex items-center justify-center bg-black/50 p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-xl bg-white p-6 text-gray-900"
            >
              <button
                onClick={closeDetail}
                aria-label="بستن"
                className="absolute right-3 top-3 text-xl text-gray-500 hover:text-gray-900"
              >
                ✕
              </button>

              {detailLoading && (
                <p className="p-10 text-center text-lg">
                  <Spinner className="size-6">LOADING...</Spinner>
                </p>
              )}
              {detailError && (
                <p className="p-10 text-center text-lg text-red-600">
                  خطا: {detailError}
                </p>
              )}

              {product && (
                <div className="grid items-start gap-6 sm:grid-cols-[220px_1fr]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-64 w-full object-contain"
                  />
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">{product.title}</h2>
                    <p className="text-lg font-bold">${product.price}</p>
                    <p className="text-sm text-gray-600">{product.category}</p>
                    <p className="text-sm text-gray-600">
                      ⭐ {product.rating.rate} ({product.rating.count} نظر)
                    </p>
                    <p className="leading-relaxed">{product.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
