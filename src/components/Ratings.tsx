export default function Ratings() {
  return (
    <div className="bg-[#0d1720] py-10 flex flex-col justify-center items-center gap-y-5">
      <h1 className="text-3xl text-white">
        Top Rated Window Repair Service in Chicago, IL
      </h1>
      <ul className="uppercase flex flex-row justify-between w-[1180px]">
        <li className="flex flex-col text-white border border-white rounded-xl pl-5 pr-16 py-2">
          <p className="text-sm">happy clients</p>
          <p className="text-[40px]">11 283</p>
        </li>
        <li className="flex flex-col text-white border border-white rounded-xl pl-5 pr-16 py-2">
          <p className="text-sm">jobs completed</p>
          <p className="text-[40px]">11 283</p>
        </li>
        <li className="flex flex-col text-white border border-white rounded-xl pl-5 pr-16 py-2">
          <p className="text-sm">average ratings</p>
          <p className="text-[40px]">11 283</p>
        </li>
        <li className="flex flex-col text-white border border-white rounded-xl pl-5 pr-16 py-2">
          <p className="text-sm">average ratings</p>
          <p className="text-[40px]">11 283</p>
        </li>
      </ul>
    </div>
  );
}
