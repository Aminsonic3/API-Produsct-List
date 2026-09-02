import { Bubble, BubbleContent, BubbleReactions } from "@/components/ui/bubble";

function Textchat() {
  return (
    <div className="ml-40 mt-4">
      <Bubble >
        <BubbleContent className="text-shadow-amber-100">
          I checked the registry output and removed the stale route.
        </BubbleContent>
        <BubbleReactions>
          <span>👍</span>
        </BubbleReactions>
      </Bubble>
    </div>
  );
}
export default Textchat;
