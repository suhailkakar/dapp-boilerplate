import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex dark:bg-[#0e1217] h-screen justify-center items-center">
        <img
          src="https://i.ibb.co/QX9gjKy/079121589f09daaa0542d269bfab95c9-removebg-preview-1.png"
          className="h-40 sm:h-40 animate-spin-slow	"
          alt="Dapp logo"
        />
      </div>
    </div>
  );
}
