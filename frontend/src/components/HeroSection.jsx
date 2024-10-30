import demo_man from "../assets/demo_man.avif"

const HeroSection = () => {
  return (
    <div className="w-full h-[30rem]  rounded-bl-[130px] rounded-br-[130px] bg-Nwhite " >
      {/* MAIN HERO TEXT */}
      <div className="flex flex-col items-center justify-center px-12 ">
        <h1 className="text-center text-4xl pt-10">Hey👋,I'm <span className="font-semibold">PRAKASH KUMAR</span> a <span className="font-semibold">MERN Stack Developer</span> </h1>
        <h1 className="text-center text-4xl pt-2.5"> based in India</h1>
      </div>

      {/* IMAGE WITH BACKGROUND */}
      <div className="relative w-[35rem] h-[17.9rem] bg-bgYellow mx-auto mt-16 rounded-t-full">
        <img src={demo_man} alt="" className="mx-auto -translate-y-[4.6rem]  " />

        {/* Buttons */}
        <div className="absolute -mt-40 rounded-full left-14 w-[28rem] h-[4rem] bg-Nwhite ">

        </div>
      </div>
    </div >
  )
}

export default HeroSection
