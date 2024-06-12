import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/element";

import { Pagination } from "swiper/modules";
import { register } from "swiper/element/bundle";
register();
function Testimonials() {
  return (
    <div className="w-full max-w-[1200px] min-h-[500px] rounded-sm flex flex-col justify-center items-center px-3 py-8 mx-auto mb-5">
      <div className="text-center mb-7 flex flex-col">
        <span className="text-[#797979] text-lg">TESTIMONIALS</span>
        <h1 className="text-[50px] text-black font-bold">WHAT CLIENTS SAY</h1>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className="w-full h-[300px]"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        wrapperTag="ul"
      >
        <SwiperSlide key={1} tag="li">
          <div className="flex justify-start items-center h-full max-w-full flex-col">
            <img
              src="https://fixup.onlywebcoding.com.ua/images/author3.jpg"
              alt="Client picture"
              className="w-20 h-20 rounded-full mb-3"
            />
            <p className="text-[#676576] w-full max-w-[800px] text-xl opacity-80 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              molestias laudantium sequi eos accusantium. Reprehenderit quas
              nisi ratione cumque, aliquid laboriosam.
            </p>
            <p className="font-bold mt-3 text-lg">John Doe</p>
            <p className="font-light text-md">Marketer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={2} tag="li">
          <div className="flex justify-start items-center h-full w-full flex-col">
            <img
              src="https://fixup.onlywebcoding.com.ua/images/author3.jpg"
              alt="Client picture"
              className="w-20 h-20 rounded-full mb-3"
            />
            <p className="text-[#676576] w-full max-w-[800px] text-xl opacity-80 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              molestias laudantium sequi eos accusantium. Reprehenderit quas
              nisi ratione cumque, aliquid laboriosam.
            </p>
            <p className="font-bold mt-3 text-lg">Sarah Doe</p>
            <p className="font-light text-md">Marketer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={3} tag="li">
          <div className="flex justify-start items-center h-full w-full flex-col">
            <img
              src="https://fixup.onlywebcoding.com.ua/images/author3.jpg"
              alt="Client picture"
              className="w-20 h-20 rounded-full mb-3"
            />
            <p className="text-[#676576] w-full max-w-[800px] text-xl opacity-80 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              molestias laudantium sequi eos accusantium. Reprehenderit quas
              nisi ratione cumque, aliquid laboriosam.
            </p>
            <p className="font-bold mt-3 text-lg">Blad Doe</p>
            <p className="font-light text-md">Marketer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide key={4} tag="li">
          <div className="flex justify-start items-center h-full w-full flex-col">
            <img
              src="https://fixup.onlywebcoding.com.ua/images/author3.jpg"
              alt="Client picture"
              className="w-20 h-20 rounded-full mb-3"
            />
            <p className="text-[#676576] w-full max-w-[800px] text-xl opacity-80 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              molestias laudantium sequi eos accusantium. Reprehenderit quas
              nisi ratione cumque, aliquid laboriosam.
            </p>
            <p className="font-bold mt-3 text-lg">Dogi Doe</p>
            <p className="font-light text-md">Marketer</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonials;
