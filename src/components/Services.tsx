import { useEffect, useRef, useState } from 'react';
import {
  Cloud,
  Lock,
  Network,
  Server,
  Database,
  Code,
  Smartphone,
  BarChart,
} from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and migration services tailored to your business needs',
      color: '#2F5DAA',
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description:
        'Comprehensive security solutions protecting your organization from evolving threats',
      color: '#2F5DAA',
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description:
        'Design, implementation, and management of robust enterprise network systems',
      color: '#2F5DAA',
    },
    {
      icon: Server,
      title: 'Managed IT Services',
      description:
        'Proactive monitoring, maintenance, and support for your entire IT infrastructure',
      color: '#2F5DAA',
    },
    {
      icon: Database,
      title: 'Data Management',
      description:
        'Advanced database solutions ensuring data integrity, availability, and performance',
      color: '#2F5DAA',
    },
    {
      icon: Code,
      title: 'Custom Development',
      description:
        'Bespoke software solutions designed to solve your unique business challenges',
      color: '#2F5DAA',
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description:
        'Native and cross-platform mobile applications for iOS and Android',
      color: '#2F5DAA',
    },
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description:
        'Data analytics and visualization tools to drive informed decision-making',
      color: '#2F5DAA',
    },
  ];

  return (
    <section   id="services" ref={sectionRef} className="py-24 bg-[#CACDD6]/30">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#333231] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-[#818FB2] max-w-3xl mx-auto">
            Comprehensive IT solutions designed to drive innovation and efficiency across your entire organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                }}
              ></div>

              <div className="relative z-10">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon
                    size={28}
                    style={{ color: service.color }}
                    className="group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#333231] mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#818FB2] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
