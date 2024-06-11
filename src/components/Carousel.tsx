import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Testimonials() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      className="bg-[#f8f8f8] w-full max-w-[1200px] h-[300px] rounded-sm flex justify-center items-center px-3 py-3"
    > 
      <SwiperSlide>
        <div className="flex justify-center items-center h-full max-w-full flex-col">
          <p className="text-[#676576] w-full max-w-[600px] text-lg opacity-80 font-medium text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            molestias laudantium sequi eos accusantium. Reprehenderit quas nisi
            ratione cumque, aliquid laboriosam.
          </p>
          <p className="font-medium mt-3">John Doe</p>
          <p className="font-light">Marketer</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center h-full w-full flex-col">
          <p className="text-[#676576] w-full max-w-[600px] text-lg opacity-80 font-medium text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            molestias laudantium sequi eos accusantium. Reprehenderit quas nisi
            ratione cumque, aliquid laboriosam.
          </p>
          <p className="font-medium mt-3">Sarah Doe</p>
          <p className="font-light">Marketer</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center h-full w-full flex-col">
          <p className="text-[#676576] w-full max-w-[600px] text-lg opacity-80 font-medium text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            molestias laudantium sequi eos accusantium. Reprehenderit quas nisi
            ratione cumque, aliquid laboriosam.
          </p>
          <p className="font-medium mt-3">Blad Doe</p>
          <p className="font-light">Marketer</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center items-center h-full w-full flex-col">
          <p className="text-[#676576] w-full max-w-[600px] text-lg opacity-80 font-medium text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            molestias laudantium sequi eos accusantium. Reprehenderit quas nisi
            ratione cumque, aliquid laboriosam.
          </p>
          <p className="font-medium mt-3">Dogi Doe</p>
          <p className="font-light">Marketer</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Testimonials;
