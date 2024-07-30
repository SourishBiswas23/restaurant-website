import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import StyleGuide from "@/components/StyleGuide";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), { ssr: false });
const Header = dynamic(() => import("../components/Header"), { ssr: false });

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      {/* <StyleGuide></StyleGuide> */}
      <Header></Header>
      <Hero></Hero>
      <Menu></Menu>
      <Reservation></Reservation>
      <About></About>
      <Map></Map>
      <Footer></Footer>
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
