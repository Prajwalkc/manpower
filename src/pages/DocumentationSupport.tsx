import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  "Visa application assistance",
  "Work permit processing",
  "Medical examination coordination",
  "Travel document verification",
  "Employment contract preparation",
  "Legal attestation services",
];

const DocumentationSupport = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 md:px-8 bg-gradient-to-r from-ips-blue/10 to-ips-neutral-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center mb-4">
              <FileText className="w-10 h-10 text-ips-blue mr-3" />
              <span className="text-2xl font-semibold text-ips-blue">
                Documentation Support
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-ips-neutral-900 mb-4">
              Smooth, Hassle-Free Paperwork
            </h1>
            <p className="text-lg text-ips-neutral-700 mb-6 max-w-xl">
              Our documentation support services ensure smooth processing of all
              necessary paperwork for both job seekers and employers, minimizing
              delays and complications.
            </p>
            <Link to="/contact">
              <Button size="lg" className="px-8">
                Request Support
              </Button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
              alt="Documentation Support"
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
              Why Use Our Documentation Support?
            </h2>
            <p className="text-ips-neutral-700">
              We handle the complexities of documentation so you can focus on
              your goals. Our team ensures accuracy, compliance, and timely
              processing for all required paperwork.
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
            Need Help With Paperwork?
          </h2>
          <p className="text-lg text-ips-neutral-700 mb-8 max-w-2xl mx-auto">
            Let us take care of your documentation needs. Contact our team for
            fast, reliable, and professional support.
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

export default DocumentationSupport;
