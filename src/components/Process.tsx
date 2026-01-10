import { useEffect, useRef, useState } from 'react';
import { Search, Lightbulb, Code2, Rocket } from 'lucide-react';

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null as HTMLDivElement | null)
 ;

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

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Discovery & Analysis',
      description:
        'We begin by thoroughly understanding your business goals, challenges, and technical requirements through detailed consultations',
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Strategy & Planning',
      description:
        'Our experts develop a comprehensive roadmap with clear milestones, deliverables, and success metrics',
    },
    {
      icon: Code2,
      number: '03',
      title: 'Development & Implementation',
      description:
        'Using agile methodologies, we build and deploy solutions with continuous feedback and iterative improvements',
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Launch & Support',
      description:
        'We ensure smooth deployment and provide ongoing maintenance, monitoring, and optimization services',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-[#2F5DAA] to-[#818FB2] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#CACDD6] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Process</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A proven methodology that delivers results consistently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[#2F5DAA] text-white flex items-center justify-center group-hover:bg-[#818FB2] transition-colors duration-300">
                    <step.icon size={32} />
                  </div>
                  <span className="text-6xl font-bold text-[#CACDD6] group-hover:text-[#2F5DAA] transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#333231] mb-4">{step.title}</h3>
                <p className="text-[#818FB2] leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-0.5 bg-white/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
