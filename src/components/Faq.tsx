import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownSvg from "./svgs/ArrowDownSvg";

export default function () {
  return (
    <div className="w-full max-w-[1380px] mx-auto flex flex-col gap-y-3 px-3">
      <h1 className="text-[40px] font-medium text-center mb-3">
        Frequently Asked Questions
      </h1>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-md font-medium"
          expandIcon={<ArrowDownSvg fill="black" />}
        >
          Lorem ipsum dolor sit amet.
        </AccordionSummary>
        <AccordionDetails className="text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-md font-medium"
          expandIcon={<ArrowDownSvg fill="black" />}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse.
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-md font-medium"
          expandIcon={<ArrowDownSvg fill="black" />}
        >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore saepe blanditiis vitae.
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-md font-medium"
          expandIcon={<ArrowDownSvg fill="black" />}
        >
         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
