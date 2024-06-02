export default function Footer() {
  return (
    <div className="bg-[#3e4636] flex flex-row justify-center items-start gap-x-20 pt-5 pb-20">
      <h1 className="text-[30px]">LOGO</h1>
      <div>
        <p>Find us in social media</p>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className="flex flex-row gap-x-20">
        <ul className="flex flex-col text-sm">
          <h1 className="text-xl mb-1">COMMUNITY</h1>
          <div className="flex flex-col gap-y-1">
            <li>Blog</li>
            <li>Community</li>
            <li>Ideas</li>
          </div>
        </ul>
        <ul className="flex flex-col text-sm">
          <h1 className="text-xl mb-1">COMPANY</h1>
          <div className="flex flex-col gap-y-1">
            <li>About us</li>
            <li>Team</li>
            <li>Where to buy</li>
            <li>Location</li>
          </div>
        </ul>
        <ul className="flex flex-col text-sm">
          <h1 className="text-xl mb-1">USEFUL LINKS</h1>
          <div className="flex flex-col gap-y-1">
            {" "}
            <li>Terms of use</li>
            <li>Warranty</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
            <li>Cookie settings</li>
          </div>
        </ul>
      </div>
    </div>
  );
}
