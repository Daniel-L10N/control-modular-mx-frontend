export default function LogoCloud() {
  return (
    <div className="bg-white border-t border-gray-100">
      <div className="mx-auto lg:mx-12 max-w-full py-16 px-4 sm:px-6 lg:px-8">
        
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500 mb-8">
          Tecnología operando en el ecosistema de líderes industriales
        </p>
        
        {/* Grid responsivo para los logos/nombres */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-5 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
          
          {/* Logo 1: MFS Ingeniería (Tu socio) */}
          <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-black text-slate-800 tracking-tighter">MFS Ingeniería</h3>
          </div>
          
          {/* Logo 2: Bizerba (Maquinaria) */}
          <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold text-slate-400">BIZERBA</h3>
          </div>
          
          {/* Logo 3: Grupo Bafar */}
          <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
             <h3 className="text-xl font-bold text-slate-400 uppercase">Grupo Bafar</h3>
          </div>
          
          {/* Logo 4: CarneMart */}
          <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold text-red-800/60 uppercase tracking-widest">CarneMart</h3>
          </div>
          
          {/* Logo 5: Soriana */}
          <div className="col-span-2 flex justify-center md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold text-green-600/60 uppercase">Soriana</h3>
          </div>

        </div>
      </div>
    </div>
  )
}