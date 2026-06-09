import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-gray-900">
              ai<span className="text-purple-600">pm</span>pro
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#programa" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
              Programa
            </a>
            <a href="#instructores" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
              Instructores
            </a>
            <a href="#testimonios" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5"
            >
              <a href="#contacto">Reserva tu plaza</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <a href="#programa" className="block text-sm font-medium text-gray-700" onClick={() => setOpen(false)}>Programa</a>
          <a href="#instructores" className="block text-sm font-medium text-gray-700" onClick={() => setOpen(false)}>Instructores</a>
          <a href="#testimonios" className="block text-sm font-medium text-gray-700" onClick={() => setOpen(false)}>Testimonios</a>
          <a href="#contacto" className="block text-sm font-medium text-gray-700" onClick={() => setOpen(false)}>Contacto</a>
          <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold">
            <a href="#contacto" onClick={() => setOpen(false)}>Reserva tu plaza</a>
          </Button>
        </div>
      )}
    </header>
  );
}
