import bghome from '../../assets/Portada-Home.webp'

function ServicesView() {
  return (
    <section
      className='w-full h-screen flex justify-center items-center p-24'
    >
      <div className="flex justify-around w-full h-full items-center border border-[#E8E8E8]">
        <div className='w-1/2 flex justify-center items-center border-r border-[#E8E8E8] h-full'>
          <img src={bghome} ></img>
        </div>
        <div className='w-1/2 pl-2 lg:pl-64'>
          <p className='text-3xl font-semibold'>SERVICIOS</p>
          <ul className='list-disc p-5 text-xl'>
            <li>Servicio ejemplo </li>
            <li>Servicio otro </li>
            <li>Servicio nuevo </li>
            <li>Servicio instalación </li>
            <li>Servicio remodelaciones</li>
          </ul>
        </div>
      </div>
      
    </section>
  )
}
export default ServicesView