"use client"
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll"
import RotatingShape from "./RotatingShape";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white">


      <Header />

      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center  xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
            <span className="text-accent">I build And</span> Design Powerful&nbsp;
            <TypeAnimation preRenderFirstString={true}
              sequence={["Websites", 2000, "Apps", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4" />
          </h1>

          <p className="lead max-w-[476px] mb-7">
            Delivering Powerful, custom websites that blend aesthetics with performance
          </p>
          <ScrollLink to="contact" smooth>
            <button className="btn btn-accent mb-8">Contact Me</button>
          </ScrollLink>

          <div>stats</div>
        </div>
      </div>

      <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
        <div className="absolute w-[558px] h-[642px] bottom-0 z-40 left-[6.5vw]">
          <Image alt="image" src="/assets/hero/dev.png" fill quality="100" priority className="object-contain" />
        </div>

        <div className="hidden xl:flex absolute top-48 left-[4vw]">
          <Image src="/assets/hero/arrow.svg" width={160} height={160} alt="arrow" />
        </div>

        <div className="absolute top-[600px] left-[3vw]">
          <RotatingShape direction="left" duration={6} content={<Image src="/assets/hero/shape-1.svg" width={38} height={38} alt="shape" />} />
        </div>

        <div className="absolute top-[240px] xl:left-[30vw]">
          <RotatingShape direction="right" duration={5} content={<Image src="/assets/hero/shape-2.svg" width={34} height={34} alt="shape" />} />
        </div>

        <div className="absolute top-[480px] xl:left-[40vw]">
          <RotatingShape direction="left" duration={7} content={<Image src="/assets/hero/shape-3.svg" width={36} height={36} alt="shape" />} />
        </div>
      </div>

    </section>
  )
}

export default Hero