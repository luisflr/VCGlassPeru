function ChooseView() {
  return (
    <section className='w-full flex flex-col justify-center items-center py-16 px-20'>
      <h1 className='text-5xl text-cyan-950 font-bold mb-24'>¿Por qué elegirnos?</h1>

      <div className='w-full grid grid-cols-1 gap-y-12 lg:gap-y-8 md:grid-cols-2 xl:grid-cols-4 md:gap-12 xl:gap-x-56'>
        <div>
          <p className='text-center text-3xl text-cyan-800 font-semibold mb-2 xl:mb-7'>Financiamiento accesible</p>
          <p className='text-center'> Párrafo. Haz clic aquí para agregar tu propio texto</p>
        </div>
        <div>
          <p className='text-center text-3xl text-cyan-800 font-semibold mb-2 xl:mb-7'>Consultas gratis</p>
          <p className='text-center'> Párrafo. Haz clic aquí para agregar tu propio texto</p>
        </div>
        <div>
          <p className='text-center text-3xl text-cyan-800 font-semibold mb-2 xl:mb-7'>Servicio profesional</p>
          <p className='text-center'> Párrafo. Haz clic aquí para agregar tu propio texto</p>
        </div>
        <div>
          <p className='text-center text-3xl text-cyan-800 font-semibold mb-2 xl:mb-7'>Seguridad garantizada</p>
          <p className='text-center'> Párrafo. Haz clic aquí para agregar tu propio texto</p>
        </div>
      </div>
    </section>
  )
}

export default ChooseView