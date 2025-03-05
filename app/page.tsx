"use client";
import Image from "next/image";
import profileImage from "@/app/assets/images/profile-picture.jpg";
import studyIcon from "@/app/assets/images/study-icon.png";
import workIcon from "@/app/assets/images/work-icon.png";
import checkIcon from "@/app/assets/images/check-icon.png";
import leftArrowIcon from "@/app/assets/images/left-arrow-icon.png";
import { useEffect, useState } from "react";
import ReviewSlider from "./components/ReviewSlider";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
  }, []);
  return (
    <>
      <div
        className={`overflow-hidden ${animate ? "animate-slideToRight" : ""}`}
      >
        <section className={`flex justify-center gap-20 h-[80vh] relative`}>
          <div className="flex h-100 w-100 overflow-hidden rounded-full my-auto relative">
            <Image
              src={profileImage}
              alt="Dasol Jung Profile picture"
              className="flex justify-center gap-20 w-full"
              placeholder="blur"
            ></Image>
          </div>
          <div className="self-center text-center">
            <p className="font-semibold text-center text-3xl mb-4">
              Hello I&apos;m
            </p>
            <h1 className="text-center text-5xl">Dasol Jung</h1>
            <p className="font-semibold ">Instructor for Training Developers</p>
            <div className="flex justify-center mt-4 gap-4">
              <input
                type="button"
                className="btn btn-1"
                value="Download CV"
              ></input>
              <input
                type="button"
                className="btn btn-2"
                value="Contact Info"
              ></input>
            </div>
          </div>
        </section>
      </div>
      <section className="relative">
        <h1 className="text-5xl text-center font-semibold mb-4">About me</h1>
        <div className="h-[80vh] flex">
          <div className="w-full flex flex-col px-24">
            <div className="mt-8 flex gap-8 pb-0">
              <div className="about-box">
                <h2>
                  <Image
                    alt="study icon"
                    src={studyIcon}
                    width={30}
                    className="inline mr-1"
                  ></Image>
                  학력
                </h2>
                <div className="flex-1">
                  <ul className="flex flex-col justify-around h-full">
                    <li>
                      <div>
                        <div>선린인터넷고등학교</div>
                        <div>졸업(2012)</div>
                      </div>
                      <div className="text-gray-300 text-xs ml-4">
                        정보통신과
                      </div>
                    </li>
                    <li>
                      <div>
                        <div>한양대학교 ERICA</div>
                        <div>중퇴(2학년 수료)</div>
                      </div>
                      <div className="text-gray-300 text-xs ml-4">
                        기계공학과
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="about-box">
                <h2>
                  <Image
                    alt="work icon"
                    src={workIcon}
                    width={30}
                    className="inline mr-1"
                  ></Image>
                  경력
                </h2>
                <div className="flex-1">
                  <ul className="flex flex-col justify-around h-full">
                    <li>
                      <div>
                        <div>케이에이치정보교육원</div>
                        <div>전임강사(1년 9개월)</div>
                      </div>
                      <div className="text-gray-300 text-xs ml-4">
                        공공데이터 융합 자바개발자 양성과정 강의
                      </div>
                    </li>
                    <li>
                      <div>
                        <div>코리아정보보안아이티아카데미</div>
                        <div>전임강사(2년 7개월)</div>
                      </div>
                      <div className="text-gray-300 text-xs ml-4">
                        기초과목, 심화과목, 백엔드, 프론트엔드, 풀스택 강의
                      </div>
                    </li>
                    <li>
                      <div>
                        <div>코리아정보보안아이티아카데미</div>
                        <div>조교(9개월)</div>
                      </div>
                      <div className="text-gray-300 text-xs ml-4">
                        수강생 보습, 개인교습, 1:1과외
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full h-[34vh] mt-6 text-gray-600 flex gap-8 pb-2">
              <div className="w-5/12 break-keep text-left text-sm">
                <p>
                  주로 담당해서 강의했던 과정은 Spring Boot와 React.js를 이용한
                  풀 스택 개발자 양성과정입니다. 강단에 서 있던 기간은 5년차에
                  접어들었지만, 여전히 신입 개발자라는 겸손한 마음으로 성실하고
                  유능한 개발자가 되겠습니다.
                </p>
                <ul className="flex gap-4 mt-6">
                  <li className="grow flex justify-center items-center p-2 rounded-4xl shadow-teal-400 shadow-sm">
                    열정
                    <Image
                      alt="check icon"
                      src={checkIcon}
                      className="inline w-6"
                    ></Image>
                  </li>
                  <li className="grow flex justify-center items-center p-2 rounded-4xl shadow-teal-400 shadow-sm">
                    긍정
                    <Image
                      alt="check icon"
                      src={checkIcon}
                      className="inline w-6"
                    ></Image>
                  </li>
                  <li className="grow flex justify-center items-center p-2 rounded-4xl shadow-teal-400 shadow-sm">
                    협동심
                    <Image
                      alt="check icon"
                      src={checkIcon}
                      className="inline w-6"
                    ></Image>
                  </li>
                  <li className="grow flex justify-center items-center p-2 rounded-4xl shadow-teal-400 shadow-sm">
                    인내심
                    <Image
                      alt="check icon"
                      src={checkIcon}
                      className="inline w-6"
                    ></Image>
                  </li>
                </ul>
              </div>
              <div className="w-7/12 h-full flex flex-col gap-2">
                <div className="flex grow justify-center items-center">
                  <input
                    type="button"
                    className="btn btn-2 font-bold hover:scale-110 cursor-pointer"
                    value="후기 보러가기"
                    onClick={() => {
                      window.open(
                        "https://www.koreaisacademy.com/community/post.asp"
                      );
                    }}
                  />
                  <span className="text-gray-600 text-xs ml-4 animate-pulse">
                    <Image
                      alt="left arrow icon"
                      src={leftArrowIcon}
                      width={12}
                      className="inline"
                    ></Image>
                    이름을 검색해보세요
                  </span>
                </div>
                <div className="w-full h-full flex grow overflow-hidden justify-center items-center">
                  <ReviewSlider></ReviewSlider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
