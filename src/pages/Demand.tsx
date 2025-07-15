import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Stethoscope,
  UtensilsCrossed,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const demandCategories = [
  {
    title: "Construction",
    description:
      "Skilled construction workers, laborers, and site supervisors for various construction projects.",
    icon: Building2,
    requirements: [
      "Minimum 2-5 years of experience",
      "Physical fitness and stamina",
      "Knowledge of safety protocols",
      "Ability to work in teams",
    ],
    positions: [
      "Mason",
      "Carpenter",
      "Electrician",
      "Plumber",
      "Heavy Equipment Operator",
    ],
  },
  {
    title: "Hospitality",
    description:
      "Professional staff for hotels, restaurants, and hospitality establishments.",
    icon: UtensilsCrossed,
    requirements: [
      "Customer service experience",
      "English language proficiency",
      "Flexible work hours",
      "Professional appearance",
    ],
    positions: [
      "Chef",
      "Waiter/Waitress",
      "Hotel Staff",
      "Restaurant Manager",
      "Housekeeping",
    ],
  },
  {
    title: "Healthcare",
    description:
      "Medical professionals and healthcare workers for hospitals and care facilities.",
    icon: Stethoscope,
    requirements: [
      "Valid medical certification",
      "Healthcare experience",
      "Strong communication skills",
      "Emergency response ability",
    ],
    positions: [
      "Nurse",
      "Caregiver",
      "Medical Assistant",
      "Healthcare Administrator",
      "Pharmacy Assistant",
    ],
  },
  {
    title: "Domestic",
    description:
      "Reliable household staff and domestic workers for residential settings.",
    icon: Home,
    requirements: [
      "Previous domestic work experience",
      "Basic communication skills",
      "Trustworthy and reliable",
      "Clean background check",
    ],
    positions: ["Housekeeper", "Cook", "Nanny", "Driver", "Gardener"],
  },
];

const Demand = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-ips-neutral-900 mb-6">
                Current Job Demands
              </h1>
              <p className="text-lg text-ips-neutral-600 mb-8">
                Explore our latest job opportunities across various sectors. We
                connect skilled professionals with reputable employers
                worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Demand Categories */}
        <section className="py-16 px-4 md:px-8 bg-ips-neutral-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {demandCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-ips-blue/10 rounded-lg">
                          <Icon className="w-6 h-6 text-ips-blue" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-ips-neutral-900 mb-3">
                            {category.title}
                          </h3>
                          <p className="text-ips-neutral-600 mb-4">
                            {category.description}
                          </p>

                          <div className="mb-4">
                            <h4 className="font-medium text-ips-neutral-800 mb-2">
                              Key Requirements:
                            </h4>
                            <ul className="list-disc list-inside text-ips-neutral-600">
                              {category.requirements.map((req, i) => (
                                <li key={i} className="mb-1">
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-medium text-ips-neutral-800 mb-2">
                              Available Positions:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {category.positions.map((position, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-ips-blue/5 text-ips-blue rounded-full text-sm"
                                >
                                  {position}
                                </span>
                              ))}
                            </div>
                          </div>

                          <Link to="/contact">
                            <Button className="w-full group">
                              Apply Now
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-ips-neutral-900 mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-ips-neutral-600 mb-8">
                Contact us today to learn more about our current job
                opportunities and how we can help you find the perfect position.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="px-8">
                    Contact Us
                  </Button>
                </Link>
                <a href="tel:+977981885955">
                  <Button size="lg" variant="outline" className="px-8">
                    Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Demand;
