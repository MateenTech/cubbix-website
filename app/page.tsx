import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { About } from "./components/About/About";
import { Services } from "./components/Services/Services";
import { Portfolio } from "./components/Portfolio/Portfolio";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </div>
  )
}
