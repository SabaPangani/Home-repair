import TelephoneSvg from "./svgs/TelephoneSvg";
import EnvelopeSvg from "./svgs/EnvelopeSvg";
import LocationSvg from "./svgs/LocationSvg";

export default function ContactUs() {
  return (
    <div
      className="w-screen flex justify-center items-center flex-col text-white mb-10 h-[600px]"
      style={{
        background:
          "url('https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--bb442390-63e0-4f1a-8575-be6143ba0a17/ey-male-carpenter-using-tape-measure-piece-of-wood-in-wood-processing-plants.jpg?preferwebp=true&quality=85')",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0, 0, 0, 0.53)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "-250px",
      }}
    >
      <h1 className="text-[50px] text-[#9caf88]">Contact Us</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
        repudiandae unde corporis voluptatem accusantium ut? Voluptates magnam
        cumque enim consequuntur!
      </p>

      <div className="flex flex-row justify-between items-center w-[980px] mt-10">
        <ul className="flex flex-col gap-y-10">
          <li className="flex flex-ro items-center gap-x-10">
            <div className="bg-white w-16 h-16 rounded-full px-5 py-5 relative">
              <LocationSvg />
            </div>
            <div>
              <p className="text-[#9caf88] text-3xl font-medium">Address</p>
              <p>Lorem ipsum dolor sit amet dolor sit amet.</p>
            </div>
          </li>
          <li className="flex flex-row items-center gap-x-10">
            <div className="bg-white w-16 h-16 rounded-full px-5 py-5 relative">
              <EnvelopeSvg />
            </div>
            <div>
              <p className="text-[#9caf88] text-3xl font-medium">Email</p>
              <p>Lorem ipsum dolor sit amet dolor sit amet.</p>
            </div>
          </li>
          <li className="flex flex-row items-center gap-x-10">
            <div className="bg-white w-16 h-16 rounded-full px-5 py-5 relative">
              <TelephoneSvg />
            </div>
            <div>
              <p className="text-[#9caf88] text-3xl font-medium">Phone</p>
              <p>+123 456 789</p>
            </div>
          </li>
        </ul>

        <form className="bg-white rounded-sm w-full pt-5 pb-10 gap-y-4 max-w-[400px] flex justify-center items-center flex-col px-10">
          <h1 className="text-3xl text-[#9caf88] mt-3 mr-auto">Send Message</h1>
          <div className="flex flex-col gap-y-5 w-full">
            <label htmlFor="" className="flex flex-col">
              <span className="text-black opacity-90">Full Name</span>
              <input
                type="text"
                className="border-b-2 border-black border-opacity-90 py-2 px-1 text-black outline-none placeholder:font-light"
                placeholder="e.g John Doe"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span className="text-black opacity-90">Email</span>
              <input
                type="text"
                className="border-b-2 border-black border-opacity-90 py-2 px-1 text-black outline-none placeholder:font-light"
                placeholder="e.g example@gmail.com"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span className="text-black opacity-90">
                Type your message...
              </span>
              <input
                type="text"
                className="border-b-2 border-black border-opacity-90 py-2 px-1 text-black outline-none placeholder:font-light"
                placeholder="I was wondering..."
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#9caf88] py-2 px-5 rounded-sm ml-auto hover:bg-[#b5c99f] transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
