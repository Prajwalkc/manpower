
import { ArrowRight, Users, Award, Building, UserCheck, Globe, Medal } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-ips-neutral to-ips-neutral-100">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-display font-semibold text-ips-neutral-900 leading-tight mb-6">
                  About <span className="text-ips-blue">IPS Manpower</span>
                </h1>
                <p className="text-lg text-ips-neutral-800/80 mb-8 max-w-2xl">
                  Learn about our journey, our values, and what makes us one of Nepal's leading manpower agencies with over 20 years of excellence.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Professional team" 
                  className="rounded-lg shadow-elegant animate-fade-in"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="section-title">Our Story</h2>
              <p className="section-subtitle">
                From humble beginnings to becoming one of Nepal's premier manpower agencies
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Office building" 
                  className="rounded-lg shadow-elegant h-auto"
                />
              </div>
              
              <div className="order-1 lg:order-2 space-y-6">
                <p className="text-ips-neutral-800/80">
                  IPS Manpower was formed through the strategic merger of 5 leading manpower agencies in Nepal, bringing together decades of combined experience and expertise in the recruitment industry.
                </p>
                <p className="text-ips-neutral-800/80">
                  This unique collaboration has allowed us to pool our resources, networks, and knowledge to create a powerhouse in the manpower sector, capable of providing unparalleled services to both job seekers and employers.
                </p>
                <p className="text-ips-neutral-800/80">
                  Over the past 20+ years, we have evolved and grown, adapting to the changing dynamics of the global labor market while maintaining our commitment to ethical recruitment practices and excellence in service delivery.
                </p>
                <p className="text-ips-neutral-800/80">
                  Today, IPS Manpower stands as a testament to what can be achieved through collaboration, dedication, and a steadfast focus on connecting the right talent with the right opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-20 bg-ips-neutral">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="section-title">Our Values</h2>
              <p className="section-subtitle">
                The principles that guide our operations and define our approach
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <div className="h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6">
                  <Users size={32} className="text-ips-blue" />
                </div>
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">Integrity</h3>
                <p className="text-ips-neutral-800/80">
                  We conduct our business with honesty, transparency, and ethical practices at every step of the recruitment process.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <div className="h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6">
                  <Award size={32} className="text-ips-blue" />
                </div>
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">Excellence</h3>
                <p className="text-ips-neutral-800/80">
                  We strive for excellence in all our services, maintaining the highest standards of quality and professionalism.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <div className="h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6">
                  <UserCheck size={32} className="text-ips-blue" />
                </div>
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">Respect</h3>
                <p className="text-ips-neutral-800/80">
                  We treat all individuals—candidates, clients, and colleagues—with dignity, fairness, and respect.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <div className="h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6">
                  <Globe size={32} className="text-ips-blue" />
                </div>
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">Global Perspective</h3>
                <p className="text-ips-neutral-800/80">
                  We embrace a global mindset, understanding diverse cultures and market needs across different regions.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <div className="h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6">
                  <Medal size={32} className="text-ips-blue" />
                </div>
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">Quality</h3>
                <p className="text-ips-neutral-800/80">
                  We are committed to providing high-quality service and maintaining rigorous standards in our selection process.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <div className="h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6">
                  <Building size={32} className="text-ips-blue" />
                </div>
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">Innovation</h3>
                <p className="text-ips-neutral-800/80">
                  We continuously evolve our practices and adopt new technologies to enhance our service delivery.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-subtitle">
                What sets IPS Manpower apart from other agencies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4">
                    <ArrowRight size={20} className="text-ips-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ips-neutral-900 mb-2">Combined Experience</h3>
                    <p className="text-ips-neutral-800/80">
                      Our unique formation through the merger of 5 leading agencies gives us unparalleled combined experience and expertise.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4">
                    <ArrowRight size={20} className="text-ips-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ips-neutral-900 mb-2">Extensive Network</h3>
                    <p className="text-ips-neutral-800/80">
                      We have established connections with employers in over 25 countries, opening up global opportunities for job seekers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4">
                    <ArrowRight size={20} className="text-ips-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ips-neutral-900 mb-2">Comprehensive Services</h3>
                    <p className="text-ips-neutral-800/80">
                      We offer end-to-end recruitment solutions, from initial selection to pre-departure preparation and ongoing support.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4">
                    <ArrowRight size={20} className="text-ips-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ips-neutral-900 mb-2">Legal Compliance</h3>
                    <p className="text-ips-neutral-800/80">
                      We ensure strict adherence to all legal requirements and regulations in both Nepal and destination countries.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4">
                    <ArrowRight size={20} className="text-ips-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ips-neutral-900 mb-2">Personalized Approach</h3>
                    <p className="text-ips-neutral-800/80">
                      We take the time to understand the unique needs of both job seekers and employers to ensure perfect matches.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4">
                    <ArrowRight size={20} className="text-ips-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ips-neutral-900 mb-2">Post-Placement Support</h3>
                    <p className="text-ips-neutral-800/80">
                      Our commitment doesn't end with placement; we provide ongoing assistance to ensure long-term success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
