import Counter from "@/components/Counter";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>This is the home</h2>
      <Navbar />
      <Header />
      <Counter />
    </div>
  );
}
