import Header from "../../Components/Header"

function FrontView() {
  return (
    <section
      className='w-full h-screen relative bg-[url("assets/Portada-VCGlass.webp")] bg-fixed'
    >
      <div className="absolute w-full h-full bg-black opacity-40 z-0">
      </div>
      <Header className="z-30"/>
      <div className="absolute h-full bg-transparent flex flex-col justify-center items-center z-10 w-full">
        <p className="text-white text-7xl">VCGlass PERU</p>
        <p className="text-white text-2xl max-w-[700px] text-center"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quam minima tempora culpa modi, nobis sequi impedit, cum ipsam distinctio </p>
      </div>
    </section>
  )
}

export default FrontView