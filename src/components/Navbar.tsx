import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('root')}>
             {/* If we click logo, go top */}
            <span className="font-serif text-2xl text-emerald-950 tracking-wider">dhrubotara</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Story', 'Products'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="text-stone-600 hover:text-emerald-900 transition-colors font-sans text-sm tracking-wide uppercase bg-transparent border-none cursor-pointer"
              >
                {item}
              </button>
            ))}
             <button
                onClick={() => handleNavClick('contact')}
                className="text-stone-600 hover:text-emerald-900 transition-colors font-sans text-sm tracking-wide uppercase bg-transparent border-none cursor-pointer"
              >
                Contact
              </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-emerald-900 text-stone-50 px-6 py-2 rounded-sm font-sans text-sm tracking-wide hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              Order Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-800 hover:text-emerald-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden overflow-hidden bg-stone-50 border-b border-stone-200"
      >
        <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col items-center">
          {['Story', 'Products', 'Contact'].map((item) => (
             <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className="text-stone-600 hover:text-emerald-900 block px-6 py-3 text-lg font-medium w-full text-center active:bg-stone-100 rounded-sm bg-transparent border-none"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full bg-emerald-900 text-stone-50 px-6 py-4 mt-6 rounded-sm font-sans text-base tracking-wide active:bg-emerald-800 text-center block"
          >
            Order Now
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
