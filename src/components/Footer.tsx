import FacebookSvg from "./svgs/FacebookSvg";
import InSvg from "./svgs/InSvg";
import TwitterSvg from "./svgs/TwitterSvg";

export default function Footer() {
  return (
    // <div className="bg-[#3e4636] flex flex-row justify-center items-start gap-x-20 pt-7 pb-10  text-white">
    //   <h1 className="text-2xl">LOGO</h1>
    //   <div>
    //     <p className="text-2xl">Find us in social media</p>
    //     <ul className="flex flex-row justify-between mt-3">
    //       <li>
    //         <TwitterSvg />
    //       </li>
    //       <li>
    //         <InSvg />
    //       </li>
    //       <li>
    //         <FacebookSvg />
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="flex flex-row gap-x-20">
    //     <ul className="flex flex-col text-[15px]">
    //       <h1 className="text-2xl">COMMUNITY</h1>
    //       <div className="flex flex-col gap-y-1 underline font-light mt-1">
    //         <li>Blog</li>
    //         <li>Community</li>
    //         <li>Ideas</li>
    //       </div>
    //     </ul>
    //     <ul className="flex flex-col text-[15px]">
    //       <h1 className="text-2xl">COMPANY</h1>
    //       <div className="flex flex-col gap-y-1 underline font-light mt-1">
    //         <li>About us</li>
    //         <li>Team</li>
    //         <li>Partners</li>
    //         <li>Where to buy</li>
    //         <li>Location</li>
    //       </div>
    //     </ul>
    //     <ul className="flex flex-col text-[15px]">
    //       <h1 className="text-2xl">USEFUL LINKS</h1>
    //       <div className="flex flex-col gap-y-1 underline font-light mt-1">
    //         <li>Terms of use</li>
    //         <li>Warranty</li>
    //         <li>Privacy policy</li>
    //         <li>Cookie policy</li>
    //         <li>Cookie settings</li>
    //       </div>
    //     </ul>
    //   </div>
    // </div>
    <div className="flex flex-col justify-between items-center bg-[#131313] pt-20 pb-2">
      <img
        src="https://livedemo00.template-help.com/wt_prod-12465/images/logo-footer.png"
        alt=""
        className="w-[198px] h-[62px] hover:scale-105 scale-100 cursor-pointer transition-all"
      />
      <div className="flex flex-col items-center mt-10">
        <ul className="flex flex-row gap-x-5 mb-3">
          <li>
            <TwitterSvg />
          </li>
          <li>
            <FacebookSvg />
          </li>
          <li>
            <InSvg />
          </li>
        </ul>
        <p className="text-[#ffffff8a] text-sm">
          Copyright ©2024{" "}
          <span className="text-white">Green Tech, Inc</span> All
          rights reserved. Green Tech and GT are trademarks of Green Tech, Inc.
        </p>
      </div>
    </div>
  );
}
