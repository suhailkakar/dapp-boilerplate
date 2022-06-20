import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <img
        src="https://c.tenor.com/gON6g6pAbsgAAAAC/ethereum.gif"
        alt="logo"
        width={200}
        height={200}
      />
    </div>
  );
}
