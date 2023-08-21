import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { About } from "./components/About/About";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}
