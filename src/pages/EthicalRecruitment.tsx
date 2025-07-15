import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  "No-fee recruitment policy",
  "Transparent process explanation",
  "Clear contract terms",
  "Anti-discrimination practices",
  "Fair treatment assurance",
  "Grievance redressal mechanism",
];

const EthicalRecruitment = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 md:px-8 bg-gradient-to-r from-ips-blue/10 to-ips-neutral-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center mb-4">
              <Shield className="w-10 h-10 text-ips-blue mr-3" />
              <span className="text-2xl font-semibold text-ips-blue">
                Ethical Recruitment
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-ips-neutral-900 mb-4">
              Recruitment with Integrity
            </h1>
            <p className="text-lg text-ips-neutral-700 mb-6 max-w-xl">
              We adhere to the highest ethical standards in all our recruitment
              practices, ensuring transparency, fairness, and respect for the
              rights and dignity of all job seekers.
            </p>
            <Link to="/contact">
              <Button size="lg" className="px-8">
                Request Ethical Recruitment
              </Button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
              alt="Ethical Recruitment"
              className="rounded-xl shadow-elegant w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-ips-blue/5 rounded-lg p-6 mb-8 shadow-card">
            <h2 className="text-2xl font-semibold text-ips-blue mb-2">
              Why Ethical Recruitment Matters
            </h2>
            <p className="text-ips-neutral-700">
              Ethical recruitment protects the rights of candidates and builds
              trust with employers. Our transparent, fair, and responsible
              approach benefits everyone involved.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-ips-neutral-900 mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <ChevronRight className="text-ips-blue mt-1 mr-2" size={20} />
                  <span className="text-ips-neutral-800">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 md:px-8 bg-ips-neutral-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-ips-neutral-900 mb-4">
            Ready for Ethical Hiring?
          </h2>
          <p className="text-lg text-ips-neutral-700 mb-8 max-w-2xl mx-auto">
            Choose a recruitment partner you can trust. Contact us to learn more
            about our ethical recruitment practices and how we can help you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default EthicalRecruitment;
