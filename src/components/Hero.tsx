export default function Hero() {
  return (
    // <div
    //   className="relative w-screen h-[700px] bg-black overflow-hidden flex justify-center items-center"
    // style={{
    //   background:
    //     "url('https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--bb442390-63e0-4f1a-8575-be6143ba0a17/ey-male-carpenter-using-tape-measure-piece-of-wood-in-wood-processing-plants.jpg?preferwebp=true&quality=85')",
    //   backgroundBlendMode: "darken",
    //   backgroundColor: "rgba(0, 0, 0, 0.53)",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   backgroundPositionY: "-250px",
    // }}
    // >
    //   <div className="w-[1380px] mb-24 flex flex-col">
    //     <h1 className="text-white text-[52px]">
    //       Fluid-Aire Dynamics: The Leading Compressed Air Solutions Company
    //     </h1>
    //     <p className="text-[#d7dfcf] text-lg">
    //       Specializing in compressed air services in Chicago, Milwaukee,
    //       Minneapolis, Detroit, Philadelphia. System design, equipment,
    //       installation, parts, supplies, maintenance, and repair of industrial
    //       and commercial rotary screw air compressors. Call or click now for
    //       Fluid-Aire Dynamics’ outstanding customer support.
    //     </p>
    //     <div className="mt-10">
    //       <button className="text-white bg-[#9caf88] py-3 px-32 rounded-sm border border-black text-lg">
    //         Button 1
    //       </button>
    //       <button className="text-[#9caf88] bg-[rgba(1000,1000,1000)] py-3 px-32 rounded-sm border border-black text-lg ml-5">
    //         Button 2
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div
      className="relative w-screen h-[800px] bg-[rgb(25,92,146)] overflow-hidden flex justify-center items-center px-3"
      style={{
        background: "url('https://ngetemplates.com/rinovim/img/intro.png')",
        backgroundColor: "rgb(25,92,146)",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "80%",
        backgroundPositionY: "100%",
        backgroundSize: "500px"
      }}
    >
      <div className="w-[1380px] flex flex-col">
        <h1 className="text-white text-[52px] md:text-[35px]">
          Fluid-Aire Dynamics: The Leading Compressed Air Solutions Company
        </h1>
        <p className="text-[#d7dfcf] text-lg md:text-[14px]">
          Specializing in compressed air services in Chicago, Milwaukee,
          Minneapolis, Detroit, Philadelphia. System design, equipment,
          installation, parts, supplies, maintenance, and repair of industrial
          and commercial rotary screw air compressors. Call or click now for
          Fluid-Aire Dynamics’ outstanding customer support.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 sm:justify-center">
          <button className="text-white bg-[#9caf88] py-3 w-full max-w-[350px] rounded-sm border border-black text-lg">
            Button 1
          </button>
          <button className="text-[#9caf88] bg-[rgba(1000,1000,1000)] py-3 w-full max-w-[350px] rounded-sm border border-black text-lg">
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
}
