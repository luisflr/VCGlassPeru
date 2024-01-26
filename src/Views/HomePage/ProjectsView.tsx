function ProjectsView() {
  return (
    <section className='w-full flex flex-col justify-center items-center py-20'>
      <h1 className='text-5xl text-cyan-950 font-bold mb-16'> Nuestros Productos </h1>
      <div className='w-full px-20 grid grid-cols-3 gap-8'>
        <button className='w-full relative h-[700px]  bg-[url("assets/vitrina-70-a.jpg")] bg-cover'>
          <div className="absolute w-full h-full bg-black opacity-40 z-0 top-0">
          </div>
          <p className='absolute z-20 text-2xl font-bold text-white text-center w-full'>Carpinteria en aluminio</p>
        </button>
        <button className='w-full relative h-[700px]  bg-[url("assets/muro-cortina.jpg")] bg-cover'>
          <div className="absolute w-full h-full bg-black opacity-40 z-0 top-0">
          </div>
          <p className='absolute z-20 text-2xl font-bold text-white text-center w-full'>Muro Cortina</p>
        </button>
        <button className='w-full relative h-[700px]  bg-[url("assets/ventana.jpg")] bg-cover'>
          <div className="absolute w-full h-full bg-black opacity-40 z-0 top-0">
          </div>
          <p className='absolute z-20 text-2xl font-bold text-white text-center w-full'>Sistema Moduglass</p>
        </button>
      </div>
    </section>
  )
}

export default ProjectsView