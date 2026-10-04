import Dialogform from "../Dialogform";
import { EmptyDemo } from "../Emptyform";
import Formname from "../Formname";
import { MarkerDemo } from "../MarkerDemo";
import { RadioGroupChoiceCard } from "../Radioform";
import { SheetDemo } from "../Sheetform";
import CommandDemo from "../commendmenu";

export default function Form() {
  return (
    <nav  >
      <div className="flex items-start gap-10 mx-10">
        <CommandDemo></CommandDemo>
        <div className="flex flex-col items-center justify-center">
          <Dialogform></Dialogform>
          <EmptyDemo></EmptyDemo>
        </div>
        <div className="flex flex-col gap-10" >
          
          <RadioGroupChoiceCard></RadioGroupChoiceCard>
          <SheetDemo></SheetDemo>
        </div>
      </div>
      <div>
        <Formname></Formname>
      </div>
    </nav>
  );
}
