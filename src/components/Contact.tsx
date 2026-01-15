import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/pinecliff-logo.png';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FB]"
    >
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#333231] mb-4 sm:mb-6">
            Let’s Build Something Great
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#818FB2] max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our team today.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT: Contact Info */}
          <div
            className={`bg-gradient-to-br from-[#2F5DAA] to-[#4B6FB8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
              Get In Touch
            </h3>

            <div className="space-y-6 sm:space-y-8">

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-white/20 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-white/80">Email Us</p>
                  <p className="text-base sm:text-lg font-semibold break-all">
                    contact@pinecliffits.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-white/20 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-white/80">Call Us</p>
                  <p className="text-base sm:text-lg font-semibold">
                    +91 9860141434
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-white/20 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-white/80">Visit Us</p>
                  <p className="text-sm sm:text-base font-semibold leading-relaxed">
                    Office No.3, Ishwari Building, D Mart Lane No.5, Laxman Nagar,
                    Baner, Pune, Maharashtra 411045
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Brand Message Block */}
          <div
            className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-center shadow-lg transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img
              src={logo}
              alt="Pinecliff IT Services"
              className="h-14 sm:h-16 lg:h-20 mb-6 object-contain"
            />

            <p className="text-sm sm:text-base lg:text-lg text-[#333231] leading-relaxed max-w-md">
              Reach out to us anytime and let’s create a better future for all
              technology users together, forever. We are open to all types of
              collaboration offers and much more.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
