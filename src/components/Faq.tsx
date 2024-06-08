import { AccordionActions, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownSvg from "./svgs/ArrowDownSvg";

export default function () {
  return (
    <div className="w-[1380px] mx-auto flex flex-col gap-y-3">
      <Accordion>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header" className="text-md font-medium">
          Lorem ipsum dolor sit amet.
        </AccordionSummary>
        <AccordionDetails className="text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header" className="text-md font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse.
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
