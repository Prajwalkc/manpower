import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/ContactCard";
import { useInView } from "@/hooks/useInView";

const ContactPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { threshold: 0.1, once: true });
  const cardsInView = useInView(cardsRef, { threshold: 0.1, once: true });
  const formInView = useInView(formRef, { threshold: 0.1, once: true });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className={`py-20 bg-gradient-to-r from-ips-neutral to-ips-neutral-100 transition-all duration-700 ease-out ${
            heroInView ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-display font-semibold text-ips-neutral-900 leading-tight mb-6">
                  Contact <span className="text-ips-blue">Us</span>
                </h1>
                <p className="text-lg text-ips-neutral-800/80 mb-8 max-w-2xl">
                  Have questions or ready to explore opportunities? Reach out to
                  our team today and let us help you take the next step in your
                  journey.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Contact us"
                  className="rounded-lg shadow-elegant transform transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ips-blue/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section ref={cardsRef} className="py-20 bg-white">
          <div className="section-container">
            <div
              className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ease-out ${
                cardsInView ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-subtitle">
                We're here to answer any questions you might have about our
                services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Phone size={32} className="text-ips-blue" />,
                  title: "Phone",
                  description:
                    "Feel free to call us directly with any questions or inquiries",
                  content: (
                    <a
                      href="tel:+977981885955"
                      className="text-ips-blue hover:text-ips-blue-dark font-medium transition-colors"
                    >
                      +977 9849300184
                    </a>
                  ),
                  delay: "delay-100",
                },
                {
                  icon: <Mail size={32} className="text-ips-blue" />,
                  title: "Email",
                  description:
                    "Send us an email and we'll get back to you as soon as possible",
                  content: (
                    <a
                      href="mailto:ipservices424@gmail.com"
                      className="text-ips-blue hover:text-ips-blue-dark font-medium transition-colors"
                    >
                      ipservices424@gmail.com
                    </a>
                  ),
                  delay: "delay-200",
                },
                {
                  icon: <MapPin size={32} className="text-ips-blue" />,
                  title: "Location",
                  description:
                    "Visit our office for in-person discussions and consultations",
                  content: (
                    <address className="text-ips-neutral-800 not-italic">
                      Kathmandu, Nepal
                    </address>
                  ),
                  delay: "delay-300",
                },
                {
                  icon: <Clock size={32} className="text-ips-blue" />,
                  title: "Business Hours",
                  content: (
                    <ul className="space-y-2 text-ips-neutral-800/80">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">9:00 AM - 2:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </li>
                    </ul>
                  ),
                  delay: "delay-400",
                },
                {
                  icon: <Globe size={32} className="text-ips-blue" />,
                  title: "Global Reach",
                  description:
                    "Operating internationally with placements in over 25 countries worldwide, including:",
                  content: (
                    <ul className="mt-4 grid grid-cols-2 gap-2 text-ips-neutral-800">
                      <li>UAE</li>
                      <li>Qatar</li>
                      <li>Saudi Arabia</li>
                      <li>Malaysia</li>
                      <li>Japan</li>
                      <li>South Korea</li>
                    </ul>
                  ),
                  delay: "delay-500",
                },
                {
                  icon: <Mail size={32} className="text-ips-blue" />,
                  title: "Quick Response",
                  description:
                    "We aim to respond to all inquiries within 24 hours during business days",
                  content: (
                    <p className="text-ips-neutral-800/80">
                      For urgent matters, please call us directly for immediate
                      assistance
                    </p>
                  ),
                  delay: "delay-500",
                },
              ].map((item, index) => (
                <ContactCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  content={item.content}
                  delayClass={item.delay}
                  isVisible={cardsInView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          ref={formRef}
          className={`py-20 bg-ips-neutral transition-all duration-700 ease-out ${
            formInView ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-medium text-ips-neutral-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-ips-neutral-800/80 mb-8">
                  Whether you're a job seeker looking for opportunities, an
                  employer seeking qualified professionals, or simply have
                  questions about our services, we'd love to hear from you.
                </p>
                <div className="glass-card p-8 rounded-lg hover-lift">
                  <ContactForm />
                </div>
              </div>

              <div>
                <div className="sticky top-24">
                  <h2 className="text-3xl md:text-4xl font-display font-medium text-ips-neutral-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        question: "What services does IPS Manpower offer?",
                        answer:
                          "We provide a comprehensive range of manpower solutions including recruitment, international placement, documentation support, corporate staffing, skills training, and ethical recruitment services.",
                      },
                      {
                        question: "Which countries do you place workers in?",
                        answer:
                          "We have established connections with employers in over 25 countries including the UAE, Qatar, Saudi Arabia, Malaysia, Japan, South Korea, and many others.",
                      },
                      {
                        question: "How long does the recruitment process take?",
                        answer:
                          "The timeline varies depending on the position and destination country. Typically, the process can take anywhere from 2 to 6 months from initial application to deployment.",
                      },
                      {
                        question:
                          "What makes IPS Manpower different from other agencies?",
                        answer:
                          "Our unique formation through the merger of 5 leading agencies gives us unparalleled combined experience and expertise. We also maintain the highest ethical standards and provide comprehensive support throughout the entire process.",
                      },
                    ].map((faq, index) => (
                      <div
                        key={index}
                        className={`glass-card p-6 rounded-lg transition-all duration-500 hover:shadow-elegant-lg transform hover:-translate-y-1 ${
                          formInView
                            ? "animate-fade-in-up delay-" + (index + 1) + "00"
                            : "opacity-0"
                        }`}
                      >
                        <h3 className="text-lg font-medium text-ips-neutral-900 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-ips-neutral-800/80">{faq.answer}</p>
                      </div>
                    ))}
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

export default ContactPage;
