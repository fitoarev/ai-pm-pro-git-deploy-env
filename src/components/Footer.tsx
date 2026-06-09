export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <span className="text-xl font-black tracking-tight text-white">
              ai<span className="text-purple-500">pm</span>pro
            </span>
            <p className="mt-3 text-sm leading-relaxed">
              La escuela de referencia para Product Managers que quieren liderar en la era de la inteligencia artificial.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Programa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#programa" className="hover:text-purple-400 transition-colors">Plan de estudios</a></li>
              <li><a href="#instructores" className="hover:text-purple-400 transition-colors">Instructores</a></li>
              <li><a href="#testimonios" className="hover:text-purple-400 transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-purple-400 transition-colors">Precios y matrícula</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>hola@theherocamp.com</li>
              <li>+34 600 000 000</li>
              <li className="pt-2">
                <a href="#contacto" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                  → Agenda una llamada
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs">© 2024 The Hero Camp. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-purple-400 transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Aviso legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
