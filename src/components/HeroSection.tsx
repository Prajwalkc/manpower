
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-ips-neutral to-ips-neutral-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col animate-fade-up">
            <span className="inline-block px-3 py-1 rounded-full bg-ips-blue-light text-ips-blue-dark text-sm font-medium mb-6">
              Over 20 Years of Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-ips-neutral-900 leading-tight mb-6">
              Connecting <span className="text-ips-blue">Talent</span> with <span className="text-ips-blue">Opportunity</span>
            </h1>
            <p className="text-lg md:text-xl text-ips-neutral-800/80 mb-8 max-w-2xl">
              IPS Manpower is one of Nepal's premier manpower agencies, formed through the merger of 5 leading agencies to provide unparalleled recruitment services worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary flex items-center justify-center">
                Get in Touch
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/services" className="btn-secondary flex items-center justify-center">
                Our Services
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 shadow-elegant-lg animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Professional meeting" 
                  className="rounded-lg w-full h-auto object-cover"
                />
                
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-elegant">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-ips-neutral-900 font-medium">20+ Years Experience</span>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-elegant">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-ips-blue rounded-full"></div>
                    <span className="text-ips-neutral-900 font-medium">Top Rated Agency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-ips-neutral-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-ips-neutral-900">20+</h3>
              <p className="text-ips-neutral-800/80">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-ips-neutral-900">5000+</h3>
              <p className="text-ips-neutral-800/80">Professionals Placed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-ips-neutral-900">25+</h3>
              <p className="text-ips-neutral-800/80">Countries Served</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-ips-neutral-900">100+</h3>
              <p className="text-ips-neutral-800/80">Corporate Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
