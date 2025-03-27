
import { UserCheck, Globe, FileText, Building, Briefcase, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: <UserCheck size={32} className="text-white" />,
      title: 'Recruitment & Selection',
      description: 'We identify and select the best candidates through our rigorous screening process.',
    },
    {
      icon: <Globe size={32} className="text-white" />,
      title: 'International Placement',
      description: 'We connect Nepalese talent with employment opportunities worldwide.',
    },
    {
      icon: <FileText size={32} className="text-white" />,
      title: 'Documentation Support',
      description: 'Complete assistance with visa processing and legal documentation.',
    },
    {
      icon: <Building size={32} className="text-white" />,
      title: 'Corporate Staffing',
      description: 'Customized staffing solutions for businesses of all sizes.',
    },
    {
      icon: <Briefcase size={32} className="text-white" />,
      title: 'Skills Training',
      description: 'Pre-departure training to prepare candidates for international work environments.',
    },
    {
      icon: <Shield size={32} className="text-white" />,
      title: 'Ethical Recruitment',
      description: 'We adhere to the highest ethical standards in all our recruitment practices.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-ips-neutral to-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-ips-blue-light text-ips-blue-dark text-sm font-medium mb-3">
            Our Expertise
          </span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive manpower solutions tailored to meet the needs of both job seekers and employers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl transition-all duration-300 group hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ips-blue to-ips-blue-dark rounded-xl transform transition-transform duration-500 group-hover:scale-105 -z-10"></div>
              <div className="glass-card backdrop-blur-lg bg-white/10 border border-white/30 p-8 rounded-xl h-full flex flex-col relative z-10">
                <div className="h-16 w-16 rounded-xl bg-ips-blue flex items-center justify-center mb-6 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-ips-neutral-900 mb-3">{service.title}</h3>
                <p className="text-ips-neutral-800 mb-4 flex-grow">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/services" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
