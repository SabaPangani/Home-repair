export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto bg-[#f2f2f2]">
      <div className="flex flex-row items-center justify-between my-10 w-[1180px]">
        <div className="flex flex-col uppercase">
          <h1 className="text-[60px] text-[#2b49c3] font-medium h-16">Our Home </h1>
          <h1 className="text-[60px] text-[#0a2281] font-medium h-16">Repair Services</h1>
        </div>
        <p className="w-full max-w-[500px] text-lg font-light">
          At Apex Windows Werks, we specialize in repairing all types of windows
          – big or small, interior or exterior. We’ll get your broken windows
          fixed quickly and efficiently.
        </p>
      </div>

      <div className="flex flex-row">
        <div className="w-full max-w-[400px] py-3 px-6 rounded-md relative">
          <img
            src="https://apexwindowwerks.com/app/uploads/2023/03/IMG_4535-768x512.webp"
            alt=""
            className="rounded-t-[232px] rounded-r-[232px] rounded-b-md w-[300px] h-[300px]"
          />
          {/* <div className="w-[353px] h-1/3 absolute top-[150px] bg-custom-gradient"></div> */}
          <div className="absolute bottom-10 left-14 w-[300px]">
            <h1 className="text-[30px]">Window Repair</h1>
            <p className="text-[#808080] font-light">
              Whether replacing a broken window or repairing a damaged one, our
              team's skill and know-how can tackle any challenge, no matter how
              complex. With years of experience and many successful projects,
              we're a reliable partner you can count on for efficiency,
              professional craftsmanship, and exceptional customer service.
            </p>
          </div>
        </div>
        <div className="w-full max-w-[400px] py-3 px-6 rounded-md">
          <img
            src="https://apexwindowwerks.com/app/uploads/2023/05/IMG_4148.webp"
            alt=""
            className="rounded-t-[232px] rounded-r-[232px] rounded-b-md w-[300px] h-[300px]"
          />
          <h1 className="text-[30px]">Window Restoration</h1>
          <p className="text-[#808080] font-light">
            Whether replacing a broken window or repairing a damaged one, our
            team's skill and know-how can tackle any challenge, no matter how
            complex. With years of experience and many successful projects,
            we're a reliable partner you can count on for efficiency,
            professional craftsmanship, and exceptional customer service.
          </p>
        </div>
        <div className="w-full max-w-[400px] py-3 px-6 rounded-md">
          <img
            src="https://apexwindowwerks.com/app/uploads/2023/03/IMG_4187-1-768x512.webp"
            alt=""
            className="rounded-t-[232px] rounded-r-[232px] rounded-b-md w-[300px] h-[300px]"
          />
          <h1 className="text-[30px]">Window Maintenance</h1>
          <p className="text-[#808080] font-light">
            Whether replacing a broken window or repairing a damaged one, our
            team's skill and know-how can tackle any challenge, no matter how
            complex. With years of experience and many successful projects,
            we're a reliable partner you can count on for efficiency,
            professional craftsmanship, and exceptional customer service.
          </p>
        </div>
        <div className="w-full max-w-[400px] py-3 px-6 rounded-md">
          <img
            src="https://apexwindowwerks.com/app/uploads/2023/03/IMG_4187-1-768x512.webp"
            alt=""
            className="rounded-t-[232px] rounded-r-[232px] rounded-b-md w-[300px] h-[300px]"
          />
          <h1 className="text-[30px]">Window Maintenance</h1>
          <p className="text-[#808080] font-light">
            Whether replacing a broken window or repairing a damaged one, our
            team's skill and know-how can tackle any challenge, no matter how
            complex. With years of experience and many successful projects,
            we're a reliable partner you can count on for efficiency,
            professional craftsmanship, and exceptional customer service.
          </p>
        </div>
      </div>
    </div>
  );
}
