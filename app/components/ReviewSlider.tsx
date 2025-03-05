import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import review01 from "@/app/assets/images/review01.jpg";
import review02 from "@/app/assets/images/review02.jpg";

const ReviewSlider = () => {
  const settings = {
    dots: false, // 페이지 네비게이션 점
    infinite: true, // 무한 루프
    speed: 500, // 슬라이드 속도 (밀리초)
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 개수
    autoplay: true, // 자동 슬라이드
    autoplaySpeed: 4000, // 자동 슬라이드 속도 (밀리초)
    arrows: false, // 좌우 화살표 숨기기
  };

  return (
    <div className="w-full h-full mx-auto bg-teal-50">
      <Slider {...settings} className="h-full p-2">
        <div className="!inline-flex justify-center items-center relative my-auto h-full">
          <Image
            src={review01} // 실제 경로에 맞게 수정하세요
            alt="Slide 1"
            className="object-cover rounded-sm"
          />
        </div>
        <div className="!inline-flex justify-center items-center relative my-auto h-full">
          <Image
            src={review02} // 실제 경로에 맞게 수정하세요
            alt="Slide 2"
            className="object-cover rounded-sm"
          />
        </div>
        <div className="!inline-flex justify-center items-center relative my-auto h-full">
          <Image
            src={review01} // 실제 경로에 맞게 수정하세요
            alt="Slide 3"
            className="object-cover rounded-sm"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ReviewSlider;
