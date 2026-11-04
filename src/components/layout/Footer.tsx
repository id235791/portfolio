import { profile } from "@/data/profile";

// 사이트 맨 아래 한 줄. 저작권과 제작 도구만 적는다.
export default function Footer() {
  return (
    <footer className="bg-ink text-sm text-on-ink">
      <div className="wrap flex flex-col justify-between gap-2 py-6 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with Next.js, Tailwind CSS</p>
      </div>
    </footer>
  );
}
