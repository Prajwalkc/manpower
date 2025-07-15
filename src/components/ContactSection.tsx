import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="py-20 bg-ips-neutral">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions or ready to explore opportunities? Reach out to our
            team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4">
                    <Phone className="text-ips-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ips-neutral-900 mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+977981885955"
                      className="text-ips-neutral-800 hover:text-ips-blue transition-colors"
                    >
                      +977 9849300184
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4">
                    <Mail className="text-ips-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ips-neutral-900 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:ipservices424@gmail.com"
                      className="text-ips-neutral-800 hover:text-ips-blue transition-colors"
                    >
                      ipservices424@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-ips-blue/10 flex items-center justify-center mr-4">
                    <MapPin className="text-ips-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-ips-neutral-900 mb-1">
                      Location
                    </h3>
                    <address className="text-ips-neutral-800 not-italic">
                      Kathmandu, Nepal
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-xl font-medium text-ips-neutral-900 mb-4">
                Business Hours
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-ips-neutral-800">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-ips-neutral-800">Saturday</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-ips-neutral-800">Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-2xl font-medium text-ips-neutral-900 mb-6">
              Send Us a Message
            </h3>
            <ContactForm />
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-ips-neutral-800 mb-4">
            Looking for comprehensive details about our services?
          </p>
          <Link to="/contact" className="btn-primary">
            Visit Our Contact Page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
