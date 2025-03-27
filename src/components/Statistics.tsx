
import { useRef, useState, useEffect } from 'react';
import { Users, Globe, Building, Award } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const Statistics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2, once: true });
  
  const stats = [
    {
      icon: <Award className="w-10 h-10 text-ips-blue" />,
      value: 20,
      suffix: "+",
      label: "Years Experience",
      delay: "delay-100"
    },
    {
      icon: <Users className="w-10 h-10 text-ips-blue" />,
      value: 5000,
      suffix: "+",
      label: "Professionals Placed",
      delay: "delay-200"
    },
    {
      icon: <Globe className="w-10 h-10 text-ips-blue" />,
      value: 25,
      suffix: "+",
      label: "Countries Served",
      delay: "delay-300"
    },
    {
      icon: <Building className="w-10 h-10 text-ips-blue" />,
      value: 100,
      suffix: "+",
      label: "Corporate Clients",
      delay: "delay-400"
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-ips-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay: string;
  isVisible: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, suffix = "", label, delay, isVisible }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // Animation duration in ms
      const interval = 16; // Update interval in ms
      const steps = duration / interval;
      const increment = value / steps;
      
      let currentValue = 0;
      let timer: NodeJS.Timeout;
      
      const updateValue = () => {
        currentValue += increment;
        if (currentValue > value) {
          currentValue = value;
          clearInterval(timer);
        }
        setDisplayValue(Math.floor(currentValue));
      };
      
      timer = setInterval(updateValue, interval);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div className={`flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-elegant transform transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant-lg ${
      isVisible ? `animate-scale-up ${delay}` : 'opacity-0'
    }`}>
      <div className="mb-4 bg-ips-blue/10 p-3 rounded-full transform transition-all duration-300 hover:rotate-12">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-display font-bold text-ips-neutral-900">
        {displayValue}{suffix}
      </h3>
      <p className="text-ips-neutral-800/80 text-center mt-1">{label}</p>
    </div>
  );
};

export default Statistics;
