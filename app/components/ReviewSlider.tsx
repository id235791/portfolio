import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import review01 from "@/app/assets/images/review01.jpg";
import review02 from "@/app/assets/images/review02.jpg";
import review03 from "@/app/assets/images/review03.jpg";

const ReviewSlider = () => {
  // const [viewPosition, setViewPosition] = useState({ left: 0, top: 0 });

  const imageRef = useRef<HTMLImageElement[]>([]);
  const imageRects = useRef<DOMRect[]>([]);

  //현재 보고 있는 이미지
  const [imageRect, setImageRect] = useState<DOMRect | null>(null);

  //슬라이더 컨테이너(이미지가 슬라이더 컨테이너보다 큰 경우 이용)
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderRect = useRef<DOMRect | null>(null);

  // Scanner Ref, Scanner 크기, Scanner 위치
  // const scannerRef = useRef<HTMLSpanElement | null>(null);
  // const scannerWidth = 20;
  // const scannerHeight = 20;
  // const [scannerPosition, setScannerPosition] = useState({
  //   left: 0,
  //   top: 0,
  // });

  //확대판
  // const zoomPanel = useRef<HTMLDivElement | null>(null);
  // const [isOnPanel, setOnPanel] = useState<boolean>(false);
  // const [imgSrc, setImgSrc] = useState<StaticImageData>(review01);

  //슬라이더 설정
  const settings = {
    dots: false, // 페이지 네비게이션 점
    infinite: true, // 무한 루프
    speed: 500, // 슬라이드 속도 (밀리초)
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 개수
    autoplay: true, // 자동 슬라이드
    autoplaySpeed: 4000, // 자동 슬라이드 속도 (밀리초)
    arrows: false, // 좌우 화살표 숨기기
    // afterChange: (index: number) => {
    //   setImageRect(imageRef.current[index].getBoundingClientRect());
    // },
  };

  //마우스 들어갔을 때(이미지Rect 설정, 스캐너 작동, 보고 있는 상황에서의 sliderRect 설정)
  const onMouseEnter = (
    event: React.MouseEvent<HTMLImageElement>,
    imgSrc: StaticImageData
  ) => {
    // //보고있는 이미지의 Rect
    const imageRect = event.currentTarget.getBoundingClientRect();
    setImageRect(imageRect);
    // // 부모 슬라이더의 정보(스크롤에 따라 변함)
    if (sliderRef.current) {
      sliderRect.current = sliderRef.current.getBoundingClientRect();
    }
    // //스캐너 작동
    // if (scannerRef.current) {
    //   scannerRef.current.classList.add("opacity-100");
    //   scannerRef.current.classList.remove("opacity-0");
    // }
    // setImgSrc(imgSrc);
  };

  const onMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    // const scanner = scannerRef.current;
    // const boundary = { top: 0, bottom: 0 };
    // let flag = false;
    // if (imageRect && sliderRect.current) {
    //   //이미지가 컨테이너보다 큰 경우(컨테이너가 바운더리)
    //   if (imageRect.height > sliderRect.current.height) {
    //     boundary.top = 0;
    //     boundary.bottom = sliderRect.current.height - scannerHeight - 2;
    //     flag = false;
    //   } else {
    //     boundary.top = (sliderRect.current.height - imageRect.height) / 2;
    //     boundary.bottom =
    //       (sliderRect.current.height + imageRect.height) / 2 -
    //       scannerHeight -
    //       2;
    //     flag = true;
    //   }
    //   // 마우스 커서 Scanner 가운데에 위치하도록 설정
    //   let scannerPosLeft = event.clientX;
    //   let scannerPosTop = event.clientY;
    //   if (scanner) {
    //     if (scanner.parentElement) {
    //       scannerPosLeft =
    //         event.clientX -
    //         scanner.parentElement?.getBoundingClientRect().x -
    //         scannerWidth / 2;
    //       scannerPosTop =
    //         event.clientY -
    //         scanner.parentElement?.getBoundingClientRect().y -
    //         scannerHeight / 2;
    //     }
    //   }
    //   if (scannerPosLeft < 0) {
    //     scannerPosLeft = 0;
    //   } else if (scannerPosLeft > imageRect.width - scannerWidth) {
    //     scannerPosLeft = imageRect.width - scannerWidth;
    //   }
    //   if (scannerPosTop < boundary.top) {
    //     scannerPosTop = boundary.top;
    //   } else if (scannerPosTop > boundary.bottom) {
    //     scannerPosTop = boundary.bottom;
    //   }
    //   if (zoomPanel.current) {
    //     if (!isOnPanel) {
    //       //확대판 on
    //       zoomPanel.current.classList.add("opacity-100");
    //       zoomPanel.current.classList.remove("opacity-0");
    //       // zoomPanel.current.style.left = `0px`;
    //       // zoomPanel.current.style.top = boundary.top + `px`;
    //       zoomPanel.current.style.width = "200px";
    //       zoomPanel.current.style.height = "200px";
    //       zoomPanel.current.style.top = "0px";
    //       zoomPanel.current.style.left = "-200px";
    //       // console.log(scannerPosTop - boundary.top);
    //       setOnPanel(!isOnPanel);
    //     } else {
    //     }
    //     zoomPanel.current.style.background = `url(${imgSrc.src}) no-repeat`;
    //     zoomPanel.current.style.backgroundSize = "2400%";
    //     zoomPanel.current.style.backgroundPositionX =
    //       -scannerPosLeft * 9.8 + "px";
    //     zoomPanel.current.style.backgroundPositionY =
    //       -scannerPosTop + boundary.top + "px";
    //   }
    //   setScannerPosition({
    //     left: scannerPosLeft,
    //     top: scannerPosTop,
    //   });
    // }
  };
  const onMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    // if (zoomPanel.current) {
    //   zoomPanel.current.classList.remove("opacity-100");
    //   zoomPanel.current.classList.add("opacity-0");
    // }
    // if (scannerRef.current) {
    //   scannerRef.current.classList.add("opacity-0");
    //   scannerRef.current.classList.remove("opacity-100");
    // }
    // setOnPanel(!isOnPanel);
  };
  return (
    <>
      <div
        className="w-full h-full mx-auto relative"
        ref={(el) => {
          if (el) {
            sliderRef.current = el;
            sliderRect.current = el.getBoundingClientRect();
          }
        }}
      >
        <Slider {...settings} className="h-full">
          {[review01, review02, review03].map((imgSrc, index) => (
            <div
              className={`!inline-flex ${
                imageRects.current[index] &&
                sliderRect.current &&
                imageRects.current[index].height > sliderRect.current.height
                  ? "items-start"
                  : "items-center"
              } justify-center w-full h-full`}
            >
              <div className="relative w-fit h-fit">
                <Image
                  src={imgSrc} // 실제 경로에 맞게 수정하세요
                  alt="Slide 1"
                  className="rounded-sm cursor-pointer"
                  ref={(el) => {
                    if (el) {
                      imageRef.current[index] = el;
                      imageRects.current[index] = el.getBoundingClientRect();
                    }
                  }}
                  onMouseEnter={(event) => {
                    onMouseEnter(event, imgSrc);
                  }}
                  onMouseMove={onMouseMove}
                  onMouseLeave={onMouseLeave}
                  onClick={() => {
                    if (imageRect) {
                      const test = window.open(
                        imgSrc.src,
                        "test",
                        `width=900, height=450`
                      );
                      if (test) {
                        setTimeout(() => {
                          test.document
                            .getElementsByTagName("img")[0]
                            .addEventListener("click", () => {
                              test.close();
                            });
                        }, 300);
                      }
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
        <span
          className="absolute w-5 h-5 z-100 border-[1px] border-solid border-border-gray opacity-0 transition-opacity pointer-events-none box-content"
          style={
            {
              // top: `${scannerPosition.top}px`,
              // left: `${scannerPosition.left}px`,
            }
          }
          // ref={scannerRef}
        />
        {/*imageRect && viewPosition && (
          <div
            className={`absolute pointer-events-none z-100 w-9 h-9 opacity-0 transition-all`}
            style={{
              top: `${isOnPanel ? 0 : scannerPosition.top}px`,
              left: `${isOnPanel ? -200 : scannerPosition.left}px`,
            }}
            ref={zoomPanel}
          />
        )*/}
      </div>
    </>
  );
};

export default ReviewSlider;
