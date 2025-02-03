import Vitrina from "../../assets/vitrina-70-a.jpg"
import MuroCortina from "../../assets/muro-cortina.jpg"
import Moduglass from "../../assets/ventana.jpg"

function ProjectsView() {
  return (
    <section className='w-full flex flex-col justify-center items-center py-20'>
      <h1 className='text-5xl text-cyan-950 font-bold mb-16'> Nuestros Productos </h1>
      <div className='w-full px-20 grid grid-cols-3 gap-8'>
        <button className='group w-full relative h-[700px] overflow-hidden bg-black'>
          <img 
            src={Vitrina}
            className="absolute top-0 object-cover w-full h-full opacity-25 group-hover:scale-110 group-hover:opacity-65 transition-all duration-500 ease-in-out"
          />
          <p className='absolute z-20 text-2xl font-bold text-white text-center w-full group-hover:scale-110 transition transform duration-1000'>Carpinteria en aluminio</p>
        </button>
        <button className='group w-full relative h-[700px] overflow-hidden bg-black'>
          <img 
            src={MuroCortina}
            className="absolute top-0 object-cover w-full h-full opacity-25 group-hover:scale-110 group-hover:opacity-65 transition-all duration-500 ease-in-out"
          />
          <p className='absolute z-20 text-2xl font-bold text-white text-center w-full group-hover:scale-110 transition transform duration-1000'>Muro Cortina</p>
        </button>
        <button className='group w-full relative h-[700px] overflow-hidden bg-black'>
          <img 
            src={Moduglass}
            className="absolute top-0 object-cover w-full h-full opacity-25 group-hover:scale-110 group-hover:opacity-65 transition-all duration-500 ease-in-out"
          />
          <p className='absolute z-20 text-2xl font-bold text-white text-center w-full group-hover:scale-110 transition transform duration-1000'>Sistema Moduglass</p>
        </button>
      </div>
    </section>
  )
}

export default ProjectsView