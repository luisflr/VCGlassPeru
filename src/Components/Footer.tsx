import logo from '../assets/logoGlassPeru_1.png';

function Footer() {
  return (
    <footer className='w-full absolute bg-cyan-950 flex justify-around items-center py-20'>
      <a href="#" >
        <img className="h-32 w-fit" src={logo} alt="" />
      </a>
      <div className='-ml-40'>
        <h3 className='text-white text-xl mb-2'>Dirección</h3>
        <p className='text-[#b9b9b9]'>Av. 2 de mayo Cercado</p>
        <p className='text-[#b9b9b9]'>Horario: </p>
        <p className='text-[#b9b9b9]'>8a.m. - 6p.m. Hrs.</p>
      </div>
      <div>
        <h3 className='text-white text-xl mb-2'>Contacto</h3>
        <p className='text-[#b9b9b9]'>Email: vamcor@gmail.com</p>
        <p className='text-[#b9b9b9]'>Teléfono: 9192947283</p>
      </div>
      
    </footer>
  )
}

export default Footer