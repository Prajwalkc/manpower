import {
  UserCheck,
  Globe,
  FileText,
  Building,
  Briefcase,
  Shield,
  Users,
  Award,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const serviceCategories = [
    {
      id: "recruitment",
      title: "Recruitment & Selection",
      icon: <UserCheck size={32} className="text-ips-blue" />,
      description:
        "Our comprehensive recruitment and selection services ensure that employers find the best talent while job seekers secure positions that match their skills and career goals.",
      services: [
        "Resume screening and shortlisting",
        "Skill assessment and testing",
        "Background verification",
        "Candidate interviews",
        "Reference checks",
        "Final selection and placement",
      ],
    },
    {
      id: "international",
      title: "International Placement",
      icon: <Globe size={32} className="text-ips-blue" />,
      description:
        "We connect skilled Nepalese professionals with employment opportunities worldwide, facilitating placements in over 25 countries across various industries.",
      services: [
        "Global job market analysis",
        "Country-specific recruitment",
        "Cultural orientation and preparation",
        "Foreign employer liaison",
        "International employment contracts",
        "Pre-departure briefings",
      ],
    },
    {
      id: "documentation",
      title: "Documentation Support",
      icon: <FileText size={32} className="text-ips-blue" />,
      description:
        "Our documentation support services ensure smooth processing of all necessary paperwork for both job seekers and employers, minimizing delays and complications.",
      services: [
        "Visa application assistance",
        "Work permit processing",
        "Medical examination coordination",
        "Travel document verification",
        "Employment contract preparation",
        "Legal attestation services",
      ],
    },
    {
      id: "corporate",
      title: "Corporate Staffing",
      icon: <Building size={32} className="text-ips-blue" />,
      description:
        "We provide tailored staffing solutions for businesses of all sizes, helping them build skilled teams that drive growth and success.",
      services: [
        "Workforce planning and analysis",
        "Job description development",
        "Bulk recruitment campaigns",
        "Executive search",
        "Project-based staffing",
        "Temporary and permanent placements",
      ],
    },
    {
      id: "training",
      title: "Skills Training",
      icon: <Briefcase size={32} className="text-ips-blue" />,
      description:
        "Our skills training programs prepare candidates for international work environments, enhancing their employability and ensuring they meet the requirements of prospective employers.",
      services: [
        "Technical skills development",
        "Language proficiency training",
        "Cross-cultural communication",
        "Professional etiquette",
        "Industry-specific training",
        "Soft skills enhancement",
      ],
    },
    {
      id: "ethical",
      title: "Ethical Recruitment",
      icon: <Shield size={32} className="text-ips-blue" />,
      description:
        "We adhere to the highest ethical standards in all our recruitment practices, ensuring transparency, fairness, and respect for the rights and dignity of all job seekers.",
      services: [
        "No-fee recruitment policy",
        "Transparent process explanation",
        "Clear contract terms",
        "Anti-discrimination practices",
        "Fair treatment assurance",
        "Grievance redressal mechanism",
      ],
    },
  ];

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
                  Our <span className="text-ips-blue">Services</span>
                </h1>
                <p className="text-lg text-ips-neutral-800/80 mb-8 max-w-2xl">
                  Comprehensive manpower solutions tailored to meet the needs of
                  both job seekers and employers across various industries and
                  regions.
                </p>
                <Link to="/contact" className="btn-primary">
                  Get Started Today
                </Link>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Professional meeting"
                  className="rounded-lg shadow-elegant animate-fade-in"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="section-title">Comprehensive Solutions</h2>
              <p className="section-subtitle">
                Explore our range of specialized services designed to meet the
                diverse needs of our clients
              </p>
            </div>

            <div className="space-y-20">
              {serviceCategories.map((category, index) => (
                <div
                  key={category.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                    <div className="glass-card p-8 rounded-lg shadow-elegant">
                      <div className="h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-display font-medium text-ips-neutral-900 mb-4">
                        {category.title}
                      </h3>
                      <p className="text-ips-neutral-800/80 mb-6">
                        {category.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="text-lg font-medium text-ips-neutral-900 mb-2">
                          Key Services:
                        </h4>
                        <ul className="space-y-2">
                          {category.services.map((service, idx) => (
                            <li key={idx} className="flex items-start">
                              <ChevronRight
                                size={18}
                                className="text-ips-blue mr-2 mt-1 flex-shrink-0"
                              />
                              <span className="text-ips-neutral-800">
                                {service}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 !== 0 ? "lg:col-start-1" : ""}>
                    <img
                      src={`https://images.unsplash.com/photo-15${
                        550 + index * 10
                      }-${1000 + index * 100}-${
                        index * 1000
                      }?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`}
                      alt={category.title}
                      className="rounded-lg shadow-elegant h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-ips-neutral">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="section-title">Industries We Serve</h2>
              <p className="section-subtitle">
                Our expertise spans across multiple sectors, providing
                specialized manpower solutions for diverse industry needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">
                  Healthcare & Medical
                </h3>
                <p className="text-ips-neutral-800/80">
                  Nurses, doctors, lab technicians, medical assistants, and
                  other healthcare professionals.
                </p>
              </div>

              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">
                  Construction & Engineering
                </h3>
                <p className="text-ips-neutral-800/80">
                  Civil engineers, architects, electricians, welders,
                  carpenters, and construction workers.
                </p>
              </div>

              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">
                  Hospitality & Tourism
                </h3>
                <p className="text-ips-neutral-800/80">
                  Chefs, hotel staff, waiters, housekeeping personnel, and
                  tourism professionals.
                </p>
              </div>

              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">
                  IT & Technology
                </h3>
                <p className="text-ips-neutral-800/80">
                  Software developers, network engineers, cybersecurity experts,
                  and IT support staff.
                </p>
              </div>

              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">
                  Manufacturing & Production
                </h3>
                <p className="text-ips-neutral-800/80">
                  Machine operators, quality control inspectors, production
                  supervisors, and technicians.
                </p>
              </div>

              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">
                  Oil & Gas
                </h3>
                <p className="text-ips-neutral-800/80">
                  Engineers, technicians, operators, and support staff for the
                  petroleum industry.
                </p>
              </div>

              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">
                  Security Services
                </h3>
                <p className="text-ips-neutral-800/80">
                  Security guards, officers, and personnel for various security
                  requirements.
                </p>
              </div>

              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">
                  Retail & Sales
                </h3>
                <p className="text-ips-neutral-800/80">
                  Retail staff, sales executives, store managers, and customer
                  service representatives.
                </p>
              </div>

              <div className="glass-card p-8 rounded-lg transition-all duration-300 hover:shadow-elegant-lg">
                <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">
                  Agriculture & Farming
                </h3>
                <p className="text-ips-neutral-800/80">
                  Farm workers, agricultural engineers, and specialists in
                  various farming operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="glass-card p-12 rounded-lg bg-gradient-to-r from-ips-blue-light/30 to-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-display font-medium text-ips-neutral-900 mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-lg text-ips-neutral-800/80 mb-6">
                    Whether you're a job seeker looking for opportunities or an
                    employer seeking qualified professionals, we're here to
                    help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="btn-primary">
                      Contact Us Today
                    </Link>
                    <a href="tel:+9779849300184" className="btn-secondary">
                      Call Us Directly
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="glass-card p-6 rounded-lg animate-fade-in">
                    <div className="flex items-center">
                      <div className="h-14 w-14 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4">
                        <Users size={28} className="text-ips-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-ips-neutral-900">
                          Personalized Service
                        </h3>
                        <p className="text-ips-neutral-800/80">
                          Tailored to your specific needs
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="glass-card p-6 rounded-lg mt-6 ml-8 animate-fade-in"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="flex items-center">
                      <div className="h-14 w-14 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4">
                        <Award size={28} className="text-ips-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-ips-neutral-900">
                          Quality Assured
                        </h3>
                        <p className="text-ips-neutral-800/80">
                          Highest standards maintained
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="glass-card p-6 rounded-lg mt-6 animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <div className="flex items-center">
                      <div className="h-14 w-14 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4">
                        <Shield size={28} className="text-ips-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-ips-neutral-900">
                          Ethical Process
                        </h3>
                        <p className="text-ips-neutral-800/80">
                          Transparent and fair practices
                        </p>
                      </div>
                    </div>
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

export default ServicesPage;
