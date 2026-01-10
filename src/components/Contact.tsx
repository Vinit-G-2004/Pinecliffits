import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="contact"  ref={sectionRef} className="py-24 bg-[#F8F9FB]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#333231] mb-6">
            Let’s Build Something Great
          </h2>
          <p className="text-xl text-[#818FB2] max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our team today.
          </p>
        </div>

        {/* Content */}
        <div className=" lg:grid-cols-2 gap-12">
          {/* Left Info Card */}
          <div
            className={`bg-gradient-to-br from-[#2F5DAA] to-[#818FB2] rounded-3xl p-10 text-white transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-3xl font-bold mb-10">Get In Touch</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm text-white/80">Email Us</p>
                  <p className="text-lg font-semibold">
                    contact@pinecliffits.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-sm text-white/80">Call Us</p>
                  <p className="text-lg font-semibold">+91 9860141434</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm text-white/80">Visit Us</p>
                  <p className="text-lg font-semibold">Office No.3, Ishwari Building, D Mart, Lane Number 5, behind Baner, Laxman Nagar, Baner, Pune, Maharashtra 411045</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
