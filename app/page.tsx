"use client";
import Image from "next/image";
import profileImage from "@/app/assets/images/profile-picture.jpg";
import { useEffect, useState } from "react";

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
          <div className="flex h-100 w-100 overflow-hidden rounded-full my-auto">
            <Image
              src={profileImage}
              alt="Dasol Jung Profile picture"
              sizes="100"
              className="flex justify-center gap-20 h-[80vh]"
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
                value="Download CV"
              ></input>
            </div>
          </div>
        </section>
      </div>
      <section className="relative">
        <p>상세소개</p>
        <h1 className="title">About me</h1>
      </section>
    </>
  );
}
