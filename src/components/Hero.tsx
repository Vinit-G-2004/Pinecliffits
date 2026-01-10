import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[var(--primary)] to-[var(--secondary)]
">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#818FB2] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Empowering Your
            <br />
            <span className="text-[#CACDD6]">Digital Future</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Innovative IT solutions designed to transform your business, enhance security, and drive sustainable growth
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Services Button */}
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-white text-[#4A5573] rounded-lg font-semibold text-lg hover:bg-[#CACDD6] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Explore Our Services
            </button>

            {/* Contact Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-[#4A5573] transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:scale-110 transition-transform"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
