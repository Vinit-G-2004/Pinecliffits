import { useEffect, useRef, useState } from 'react';
import { Award, Clock, ThumbsUp, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0,
  });

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

  useEffect(() => {
    if (isVisible) {
      const targets = { projects: 500, clients: 200, years: 15, satisfaction: 98 };
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounts({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          years: Math.floor(targets.years * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const reasons = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description:
        'Award-winning solutions recognized by leading technology organizations and industry bodies',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description:
        'Round-the-clock technical support ensuring your systems run smoothly at all times',
    },
    {
      icon: ThumbsUp,
      title: 'Proven Track Record',
      description:
        'Hundreds of successful projects delivered on time and within budget',
    },
    {
      icon: TrendingUp,
      title: 'Future-Ready Solutions',
      description:
        'Innovative technologies that scale with your business and adapt to market changes',
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: counts.projects, suffix: '+' },
    { label: 'Happy Clients', value: counts.clients, suffix: '+' },
    { label: 'Years Experience', value: counts.years, suffix: '+' },
    { label: 'Client Satisfaction', value: counts.satisfaction, suffix: '%' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#333231] mb-6">
            Why Choose Pinecliff
          </h2>
          <p className="text-xl text-[#818FB2] max-w-3xl mx-auto">
            Partner with a team that combines technical excellence with business acumen
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl bg-gradient-to-br from-[#2F5DAA] to-[#818FB2] text-white transition-all duration-1000 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl font-bold mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-white/80 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex gap-6 p-8 rounded-2xl bg-[#CACDD6]/20 hover:bg-[#2F5DAA] hover:text-white transition-all duration-500 group hover:scale-105 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-[#2F5DAA] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#4A5573] transition-all duration-300">
                  <reason.icon size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#333231] mb-3 group-hover:text-white transition-colors">
                  {reason.title}
                </h3>
                <p className="text-[#818FB2] leading-relaxed group-hover:text-white/90 transition-colors">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
