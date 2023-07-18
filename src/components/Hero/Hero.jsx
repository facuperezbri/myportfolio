import React from "react";
import { Link } from "react-router-dom";
import Button from "../ComponentsUI/Button";
import memoji from "../../assets/memoji.png";

const Hero = () => (
  <section
    id="hero"
    className="h-[100%] w-[100vw] max-w-full flex flex-col justify-around ss:justify-between text-center gap-10 xxs:gap-16 xs:gap-12 md:gap-10"
  >
    <div>
      <p className="text-[40px]">👋🏼</p>
      <p className="font-thin sm:text-[20px]">my name is Facu and I'm a</p>
      <h1 className="inline font-bold text-[38px] ss:text-[50px] md:text-[70px] xl:text-[100px] m-1 tracking-tight duration-500 fullstack animate__animated animate__pulse">
        Fullstack Developer
      </h1>
      <h1 className="inline font-bold text-[38px] ss:text-[50px] md:text-[70px] xl:text-[100px] m-1 tracking-tight strokeme duration-500 hover:text-black animate__animated animate__pulse animate__delay-1s">
        <br />& UX/UI Designer
      </h1>
      <p className="font-thin mt-3 sm:text-[20px]">
        currently based in Mendoza, Argentina.
      </p>
      <div className="flex gap-3 justify-center mt-10 md:mt-3">
        <Link to={"#projects"}>
          <Button className={"bg-black text-white"}>My projects</Button>
        </Link>
        <Button>
          <a href="mailto:facundo.perez.brizuela@gmail.com">Contact Me</a>
        </Button>
      </div>
    </div>
    <img
      src={memoji}
      alt="Facu Perez Brizuela"
      className="h-[100%] max-h-[250px] xl:max-h-[300px] object-contain grad"
    />
  </section>
);

export default Hero;
