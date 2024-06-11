import TelephoneSvg from "./svgs/TelephoneSvg";
import EnvelopeSvg from "./svgs/EnvelopeSvg";
import LocationSvg from "./svgs/LocationSvg";
import Testimonials from "./Carousel";

export default function ContactUs() {
  return (
    // <div
    //   className="w-screen flex justify-center items-center flex-col mb-10 text-white h-[600px]"
    //   style={{
    //     background:
    //       "url('https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--bb442390-63e0-4f1a-8575-be6143ba0a17/ey-male-carpenter-using-tape-measure-piece-of-wood-in-wood-processing-plants.jpg?preferwebp=true&quality=85')",
    //     backgroundBlendMode: "darken",
    //     backgroundColor: "rgba(0, 0, 0, 0.53)",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     backgroundPositionY: "-250px",
    //   }}
    // >
    //   <h1 className="text-[50px] text-white">Contact Us</h1>
    //   <p>
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
    //     repudiandae unde corporis voluptatem accusantium ut? Voluptates magnam
    //     cumque enim consequuntur!
    //   </p>

    //   <div className="flex flex-row justify-between items-center w-[980px] mt-10">
    // <ul className="flex flex-col gap-y-10">
    //   <li className="flex flex-ro items-center gap-x-10">
    //     <div className="bg-white w-16 h-16 rounded-full px-5 py-5 relative">
    //       <LocationSvg />
    //     </div>
    //     <div>
    //       <p className="text-white text-3xl font-medium">Address</p>
    //       <p className="">Lorem ipsum dolor sit amet dolor sit amet.</p>
    //     </div>
    //   </li>
    //   <li className="flex flex-row items-center gap-x-10">
    //     <div className="bg-white w-16 h-16 rounded-full px-5 py-5 relative">
    //       <EnvelopeSvg />
    //     </div>
    //     <div>
    //       <p className="text-white text-3xl font-medium">Email</p>
    //       <p className="">Lorem ipsum dolor sit amet dolor sit amet.</p>
    //     </div>
    //   </li>
    //   <li className="flex flex-row items-center gap-x-10">
    //     <div className="bg-white w-16 h-16 rounded-full px-5 py-5 relative">
    //       <TelephoneSvg />
    //     </div>
    //     <div>
    //       <p className="text-white text-3xl font-medium">Phone</p>
    //       <p className="">+123 456 789</p>
    //     </div>
    //   </li>
    // </ul>

    //     <form className="bg-white rounded-sm w-full pt-5 pb-10 gap-y-4 max-w-[400px] flex justify-center items-center flex-col px-10">
    //       <h1 className="text-3xl text-[#000000] opacity-80 mt-3 mr-auto">Send Message</h1>
    //       <div className="flex flex-col gap-y-5 w-full">
    //         <label htmlFor="" className="flex flex-col">
    //           <span className="text-black opacity-90">Full Name</span>
    //           <input
    //             type="text"
    //             className="border-b-2 border-black border-opacity-90 py-2 px-1 text-black outline-none placeholder:font-light"
    //             placeholder="e.g John Doe"
    //           />
    //         </label>
    //         <label htmlFor="" className="flex flex-col">
    //           <span className="text-black opacity-90">Email</span>
    //           <input
    //             type="text"
    //             className="border-b-2 border-black border-opacity-90 py-2 px-1 text-black outline-none placeholder:font-light"
    //             placeholder="e.g example@gmail.com"
    //           />
    //         </label>
    //         <label htmlFor="" className="flex flex-col">
    //           <span className="text-black opacity-90">
    //             Type your message...
    //           </span>
    //           <input
    //             type="text"
    //             className="border-b-2 border-black border-opacity-90 py-2 px-1 text-black outline-none placeholder:font-light"
    //             placeholder="I was wondering..."
    //           />
    //         </label>
    //       </div>
    //       <button
    //         type="submit"
    //         className="bg-[#9caf88] py-2 px-5 rounded-sm ml-auto hover:bg-[#b5c99f] transition-all"
    //       >
    //         Send
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="flex flex-col justify-center items-center bg-[#195c92] py-28 gap-10 relative mt-[300px]">
      {/* <div className="w-[1380px] bg-[#f8f8f8] p-20 flex justify-center items-center flex-col rounded-sm absolute -top-[210px]">
        <p className="text-black w-1/2 text-center text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          cupiditate reiciendis qui eius harum exercitationem fuga id temporibus
          modi esse odio eum voluptate quam dolor delectus, natus fugiat,
          facilis maiores?
        </p>
        <div className="mt-5 text-center">
          <p className="text-lg">John Doe</p>
          <p className="text-[#878787] text-sm font-light">Marketer</p>
        </div>
      </div> */}
      <div className="absolute -top-[200px] cursor-grab w-full px-3">
        <Testimonials />
      </div>
      <ul className="flex text-center w-full justify-center mt-10 md:flex-col md:items-center gap-y-12">
        <li className="flex flex-col justify-center items-center gap-x-10 gap-y-2 w-1/3">
          <div className="bg-[#f26522] w-15 h-15 rounded-full px-3 py-3 relative">
            <LocationSvg />
          </div>
          <div>
            <p className="text-white text-3xl md:text-2xl">Address</p>
            <p className="text-white opacity-90 font-light mt-1 w-full">
              121 King Street, Victoria 3000
            </p>
          </div>
        </li>
        <div className="flex flex-col items-center gap-y-3">
          <h1 className="text-[52px] text-white font-medium mb-4 md:hidden">
            Contact us
          </h1>
          <li className="flex flex-col justify-center items-center gap-x-10 gap-y-2 w-1/3">
            <div className="bg-[#f26522] w-15 h-15 rounded-full px-3 py-3 relative">
              <EnvelopeSvg />
            </div>
            <div>
              <p className="text-white text-3xl md:text-2xl">Email</p>
              <p className="text-white opacity-90 font-light mt-1">
                info@yourmail.com
              </p>
            </div>
          </li>
        </div>
        <li className="flex flex-col justify-center items-center gap-x-10 gap-y-2 w-1/3">
          <div className="bg-[#f26522] w-15 h-15 rounded-full px-3 py-3 relative">
            <TelephoneSvg />
          </div>
          <div>
            <p className="text-white text-3xl md:text-2xl">Phone</p>
            <p className="text-white opacity-90 font-light mt-1">
              +123 456 789
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
