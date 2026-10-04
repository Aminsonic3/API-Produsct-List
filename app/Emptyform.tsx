import { ArrowUpRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        
        <EmptyTitle className="mt-4 text-4xl">No user Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any Account yet. Get started by creating
          your first Account.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>First User Log In</Button>
        <Button variant="outline">Sing up</Button>
      </EmptyContent>
      <Button
        variant="link"
        className="text-muted-foreground"
        size="sm"
        nativeButton={false}
        render={
          <a href="#">
            Learn More <ArrowUpRightIcon />
          </a>
        }
      />
    </Empty>
  );
}
