import Image from "next/image";
import profileImage from "@/app/assets/images/profile-picture.jpg";

export default function Home() {
  return (
    <section className="pt-[4vh] h-[96vh] mx-40 box-border min-h-fit">
      <div className="flex h-100 w-100 overflow-hidden rounded-full mx-auto">
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
  );
}
