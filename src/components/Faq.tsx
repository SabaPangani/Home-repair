import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownSvg from "./svgs/ArrowDownSvg";

export default function () {
  return (
    <div
      className="w-full mx-auto flex flex-col gap-y-3 px-3 text-white py-20"
      style={{
        background:
          "url('https://fixup.onlywebcoding.com.ua/images/bg-blocks.png')",
        backgroundColor: "rgba(0, 0, 0, 0.70)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "70%",
        backgroundBlendMode: "darken",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-[40px] font-medium text-center text mb-3">
        Frequently Asked Questions
      </h1>
      <div className="w-full max-w-[1380px] mx-auto">
        <Accordion>
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
            className="text-xl font-medium"
            expandIcon={<ArrowDownSvg fill="white" size={20} />}
          >
            Lorem ipsum dolor sit amet.
          </AccordionSummary>
          <AccordionDetails className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel2-content"
            id="panel2-header"
            className="text-xl font-medium"
            expandIcon={<ArrowDownSvg fill="white" size={20} />}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse.
          </AccordionSummary>
          <AccordionDetails className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel2-content"
            id="panel2-header"
            className="text-lg font-medium"
            expandIcon={<ArrowDownSvg fill="white" size={20} />}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            inventore saepe blanditiis vitae.
          </AccordionSummary>
          <AccordionDetails className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel2-content"
            id="panel2-header"
            className="text-xl font-medium"
            expandIcon={<ArrowDownSvg fill="white" size={20} />}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </AccordionSummary>
          <AccordionDetails className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
