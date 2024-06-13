
export default function ContactUs() {
  return (
    // <div className="flex flex-col justify-center items-center bg-[#195c92] py-28 gap-10 relative mt-32">
    //   <ul className="flex text-center w-full justify-center mt-10 md:flex-col md:items-center gap-y-12">
    //     <li className="flex flex-col justify-center items-center gap-x-10 gap-y-2 w-1/3">
    //       <div className="bg-[#f26522] w-15 h-15 rounded-full px-3 py-3 relative">
    //         <LocationSvg />
    //       </div>
    //       <div>
    //         <p className="text-white text-3xl md:text-2xl">Address</p>
    //         <p className="text-white opacity-90 font-light mt-1 w-full">
    //           121 King Street, Victoria 3000
    //         </p>
    //       </div>
    //     </li>
    //     <div className="flex flex-col items-center gap-y-3">
    //       <h1 className="text-[52px] text-white font-medium mb-4 md:hidden">
    //         Contact us
    //       </h1>
    //       <li className="flex flex-col justify-center items-center gap-x-10 gap-y-2 w-1/3">
    //         <div className="bg-[#f26522] w-15 h-15 rounded-full px-3 py-3 relative">
    //           <EnvelopeSvg />
    //         </div>
    //         <div>
    //           <p className="text-white text-3xl md:text-2xl">Email</p>
    //           <p className="text-white opacity-90 font-light mt-1">
    //             info@yourmail.com
    //           </p>
    //         </div>
    //       </li>
    //     </div>
    //     <li className="flex flex-col justify-center items-center gap-x-10 gap-y-2 w-1/3">
    //       <div className="bg-[#f26522] w-15 h-15 rounded-full px-3 py-3 relative">
    //         <TelephoneSvg />
    //       </div>
    //       <div>
    //         <p className="text-white text-3xl md:text-2xl">Phone</p>
    //         <p className="text-white opacity-90 font-light mt-1">
    //           +123 456 789
    //         </p>
    //       </div>
    //     </li>
    //   </ul>
    // </div>
    <div
      className="w-full bg-[rgb(25,92,146)] text-white flex flex-col items-center gap-y-5 py-24"
    >
      <div className="w-full max-w-[1220px] text-start">
        <span className="opacity-90 before:w-12 before:h-[2px] before:bg-white before:opacity-70 before:absolute before:-right-[56px] before:top-1/2 relative">
          ADDRESS
        </span>
        <h1 className="text-[50px] font-bold mb-10 ">Contacts</h1>
      </div>
      <div className="flex flex-row max-w-[1180px] w-full justify-between tracking-wider">
        <div className="flex flex-col">
          <h3 className="text-3xl mb-2 font-semibold">OUR LOCATION</h3>
          <p>2900 Lapeer Rd, Port Hurons, MI 49070</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-3xl mb-2 font-semibold">WORKING HOURS</h3>
          <p>Monday - Friday 8AM - 6PM</p>
          <p>Monday - Friday 8AM - 6PM</p>
        </div>
        <div className="flex flex-col font-semibold">
          <h3 className="text-3xl mb-2">OFFICE PHONE</h3>
          <p>+1 (800) 478-42-51</p>
          <p>+1 (800) 478-42-51</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-3xl mb-2 font-semibold">EMAIL</h3>
          <p>info@companyname.com</p>
          <p>info@companyname.com</p>
        </div>
      </div>
    </div>
  );
}
