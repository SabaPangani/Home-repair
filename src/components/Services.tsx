import building from "../components/svgs/home.png";
import painting from "../components/svgs/paint-palette.png";
import installation from "../components/svgs/installation.png";
import sofa from "../components/svgs/sofa.png";
import planning from "../components/svgs/planning.png";
import sketch from "../components/svgs/sketch.png";
export default function Services() {
  return (
    // <div className="flex flex-col items-center justify-center mx-auto bg-[#f2f2f2]">
    //   <div className="flex flex-row items-center justify-between my-10 w-[1380px]">
    //     <div className="flex flex-col uppercase">
    //       <h1 className="text-[60px] text-[#9caf88] font-medium h-16">
    //         Our Home{" "}
    //       </h1>
    //       <h1 className="text-[60px] text-[#6d7a5f] font-medium h-16">
    //         Repair Services
    //       </h1>
    //     </div>
    //     <p className="w-full max-w-[500px] text-lg font-light">
    //       At Apex Windows Werks, we specialize in repairing all types of windows
    //       – big or small, interior or exterior. We’ll get your broken windows
    //       fixed quickly and efficiently.
    //     </p>
    //   </div>

    //   <div className="flex flex-row gap-x-10 my-10 w-[1380px] justify-between">
    //     <div className="w-full max-w-[393px] h-[520px] rounded-lg border-2 flex justify-center items-center flex-col hover:scale-105 transition-all cursor-pointer">
    //       <img
    //         src="https://apexwindowwerks.com/app/uploads/2023/03/IMG_4535-768x512.webp"
    //         alt=""
    //         className="rounded-lg rounded-b-none h-[300px] shadow-xl"
    //       />
    //       {/* <div className="w-[353px] h-1/3 absolute top-[150px] bg-custom-gradient"></div> */}
    //       <div className="bg-[#9caf8819] px-3 h-full pt-3 rounded-b-lg">
    //         <h1 className="text-[30px] text-[#9caf88] uppercase font-medium">
    //           Window Maintenance
    //         </h1>
    //         <p className="font-light">
    //           Whether replacing a broken window or repairing a damaged one, our
    //           team's skill and know-how can tackle any challenge, no matter how
    //           complex. With years of experience and many successful projects,
    //           we're a reliable partner you can count on for efficiency,
    //           professional craftsmanship, and exceptional customer service.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="w-full max-w-[393px] h-[520px] rounded-lg border-2 flex justify-center items-center flex-col hover:scale-105 transition-all cursor-pointer">
    //       <img
    //         src="https://apexwindowwerks.com/app/uploads/2023/03/IMG_4535-768x512.webp"
    //         alt=""
    //         className="rounded-lg rounded-b-none h-[300px] shadow-xl"
    //       />
    //       {/* <div className="w-[353px] h-1/3 absolute top-[150px] bg-custom-gradient"></div> */}
    //       <div className="bg-[#9caf8819] px-3 h-full pt-3 rounded-b-lg">
    //         <h1 className="text-[30px] text-[#9caf88] uppercase font-medium">
    //           Window Maintenance
    //         </h1>
    //         <p className="font-light">
    //           Whether replacing a broken window or repairing a damaged one, our
    //           team's skill and know-how can tackle any challenge, no matter how
    //           complex. With years of experience and many successful projects,
    //           we're a reliable partner you can count on for efficiency,
    //           professional craftsmanship, and exceptional customer service.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="w-full max-w-[393px] h-[520px] rounded-lg border-2 flex justify-center items-center flex-col hover:scale-105 transition-all cursor-pointer">
    //       <img
    //         src="https://apexwindowwerks.com/app/uploads/2023/03/IMG_4535-768x512.webp"
    //         alt=""
    //         className="rounded-lg rounded-b-none h-[300px] shadow-xl"
    //       />
    //       {/* <div className="w-[353px] h-1/3 absolute top-[150px] bg-custom-gradient"></div> */}
    //       <div className="bg-[#9caf8819] px-3 h-full pt-3 rounded-b-lg">
    //         <h1 className="text-[30px] text-[#9caf88] uppercase font-medium">
    //           Window Maintenance
    //         </h1>
    //         <p className="font-light">
    //           Whether replacing a broken window or repairing a damaged one, our
    //           team's skill and know-how can tackle any challenge, no matter how
    //           complex. With years of experience and many successful projects,
    //           we're a reliable partner you can count on for efficiency,
    //           professional craftsmanship, and exceptional customer service.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-betweeen gap-x-20 items-center w-full max-w-[1380px] mx-auto my-44 mb-20 px-3 xl:flex-col gap-y-5 h-[550px]">
      <div className="bg-[#f8f8f8] w-full max-w-[300px] p-[50px] xl:max-w-full h-[550px]">
        <p className="text-[#797979] text-sm font-medium">OUR SERVICES</p>
        <h1 className="text-[40px] text-[#000000] font-medium">SERVICES </h1>
        <p className="mb-3 text-[#797979] font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          reprehenderit corrupti commodi iusto eum quam culpa odio itaque
          explicabo doloribus, sint magnam aliquid alias? Odio.
        </p>
        <p className="text-[#797979] font-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          quod sequi alias magnam maxime ut excepturi nemo, odio incidunt,
          sapiente nam accusamus. Mollitia, fugit itaque.
        </p>
      </div>
      <ul className="flex max-[645px]:flex-row flex-wrap justify-between gap-y-10 text-center sm:flex-col w-full h-full">
        <li className="flex justify-center flex-col items-center bg-[#f8f8f8] py-10 px-5 gap-y-2 sm:w-full w-[calc(33.3333%-20px)]">
          <img src={painting} alt="" className="w-14 h-14" />
          <h2 className="text-[20px] opacity-90">PAINTING</h2>
          <p className="text-[#797979] text-sm">
            Lorem ipsum dolor sit amet consectetur consectetur
          </p>
        </li>
        <li className="flex justify-center flex-col items-center bg-[#f8f8f8] py-10 px-5 gap-y-2 sm:w-full w-[calc(33.3333%-20px)]">
          <img src={installation} alt="" className="w-14 h-14" />
          <h2 className="text-[20px] opacity-90">INSTALLING</h2>
          <p className="text-[#797979] text-sm">
            Lorem ipsum dolor sit amet consectetur consectetur
          </p>
        </li>
        <li className="flex justify-center flex-col items-center bg-[#f8f8f8] py-10 px-5 gap-y-2 sm:w-full w-[calc(33.3333%-20px)]">
          <img src={building} alt="" className="w-14 h-14" />
          <h2 className="text-[20px] opacity-90">BUILDING</h2>
          <p className="text-[#797979] text-sm">
            Lorem ipsum dolor sit amet consectetur consectetur
          </p>
        </li>
        <li className="flex justify-center flex-col items-center bg-[#f8f8f8] py-10 px-5 gap-y-2 sm:w-full w-[calc(33.3333%-20px)]">
          <img src={sketch} alt="" className="w-14 h-14" />
          <h2 className="text-[20px] opacity-90">DESIGN</h2>
          <p className="text-[#797979] text-sm">
            Lorem ipsum dolor sit amet consectetur consectetur
          </p>
        </li>
        <li className="flex justify-center flex-col items-center bg-[#f8f8f8] py-10 px-5 gap-y-2 sm:w-full w-[calc(33.3333%-20px)]">
          <img src={planning} alt="" className="w-14 h-14" />
          <h2 className="text-[20px] opacity-90">PLANNING</h2>
          <p className="text-[#797979] text-sm">
            Lorem ipsum dolor sit amet consectetur consectetur
          </p>
        </li>
        <li className="flex justify-center flex-col items-center bg-[#f8f8f8] py-10 px-5 gap-y-2 sm:w-full w-[calc(33.3333%-20px)]">
          <img src={sofa} alt="" className="w-14 h-14" />

          <h2 className="text-[20px] opacity-90">FURNISHINGS</h2>
          <p className="text-[#797979] text-sm">
            Lorem ipsum dolor sit amet consectetur consectetur
          </p>
        </li>
      </ul>
    </div>
  );
}

{
  /* <div className="w-full max-w-[393px] py-3 px-6 rounded-md border-2  flex justify-center items-center flex-col hover:scale-105 transition-all cursor-pointer">
          <img
            src="https://apexwindowwerks.com/app/uploads/2023/05/IMG_4148.webp"
            alt=""
            className="rounded-lg h-[300px] shadow-xl my-2"
          />
          <h1 className="text-[30px] text-[#9caf88] uppercase font-medium">
            Window Restoration
          </h1>
          <p className="font-light">
            Whether replacing a broken window or repairing a damaged one, our
            team's skill and know-how can tackle any challenge, no matter how
            complex. With years of experience and many successful projects,
            we're a reliable partner you can count on for efficiency,
            professional craftsmanship, and exceptional customer service.
          </p>
        </div> */
}
