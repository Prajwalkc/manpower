
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-ips-neutral">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">About IPS Manpower</h2>
          <p className="section-subtitle">
            A merger of 5 leading agencies creating Nepal's premier manpower solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="IPS Manpower team" 
                className="rounded-lg shadow-elegant object-cover w-full h-auto"
              />
            </div>
            <div className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4 w-1/2 h-1/2 bg-ips-blue/10 rounded-lg -z-10"></div>
            <div className="absolute top-0 left-0 transform -translate-y-1/4 -translate-x-1/4 w-1/2 h-1/2 bg-ips-blue-light/20 rounded-lg -z-10"></div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-ips-neutral-900">
              More than two decades of excellence in manpower solutions
            </h3>
            <p className="text-ips-neutral-800/80">
              Established over 20 years ago, IPS Manpower has grown to become one of Nepal's most trusted and respected manpower agencies. Our unique strength comes from the merger of 5 leading agencies, combining their expertise, networks, and resources to provide unparalleled service.
            </p>
            <p className="text-ips-neutral-800/80">
              We specialize in connecting skilled Nepalese professionals with employers around the globe, ensuring the perfect match between talent and opportunity.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ips-blue/10 flex items-center justify-center mr-3 mt-0.5">
                  <Check size={16} className="text-ips-blue" />
                </div>
                <p className="text-ips-neutral-800">Formed through the merger of 5 leading manpower agencies</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ips-blue/10 flex items-center justify-center mr-3 mt-0.5">
                  <Check size={16} className="text-ips-blue" />
                </div>
                <p className="text-ips-neutral-800">Over 20 years of industry experience</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ips-blue/10 flex items-center justify-center mr-3 mt-0.5">
                  <Check size={16} className="text-ips-blue" />
                </div>
                <p className="text-ips-neutral-800">Extensive global network of employers and partners</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ips-blue/10 flex items-center justify-center mr-3 mt-0.5">
                  <Check size={16} className="text-ips-blue" />
                </div>
                <p className="text-ips-neutral-800">Rigorous selection and training process</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Link to="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
