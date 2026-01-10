import { useEffect, useRef, useState } from 'react';
import { Shield, Target, Users, Zap } from 'lucide-react';

export default function About() {
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

  const features = [
    { icon: Shield, title: 'Security First', description: 'Enterprise-grade security protecting your digital assets' },
    { icon: Target, title: 'Goal Oriented', description: 'Strategic solutions aligned with your business objectives' },
    { icon: Users, title: 'Expert Team', description: 'Certified professionals with decades of combined experience' },
    { icon: Zap, title: 'Fast Delivery', description: 'Rapid deployment without compromising quality' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-[#333231] mb-6">About Pinecliff IT Services</h2>
          <p className="text-xl text-[#818FB2] max-w-4xl mx-auto leading-relaxed">
            Founded on principles of excellence and innovation, Pinecliff IT Services delivers cutting-edge technology solutions that empower businesses to thrive in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className={`text-center p-8 rounded-2xl bg-[#CACDD6]/20 hover:bg-[#2F5DAA] hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2F5DAA] text-white mb-6 group-hover:bg-white group-hover:text-[#4A5573] transition-all duration-300">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#333231] mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
              <p className="text-[#818FB2] group-hover:text-white/90 transition-colors">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}