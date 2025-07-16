import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, MapPin, Clock, Star, Award, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const electricianCandidates = [
  {
    id: 1,
    name: "Rajesh Kumar Yadav",
    location: "Kathmandu, Nepal",
    experience: "7+ years",
    rating: "4.9/5",
    availability: "Immediate",
    skills: [
      "Expert in residential and commercial electrical installations",
      "Skilled in wiring, circuit installation, and electrical repairs",
      "Proficient in electrical panel installation and maintenance",
      "Strong knowledge of electrical codes and safety standards",
      "Experience with modern electrical systems and smart home technology",
      "Excellent troubleshooting and problem-solving abilities",
      "Trained in electrical safety and emergency procedures",
      "Professional and reliable with attention to detail",
    ],
    certifications: [
      "Electrical License",
      "Safety Training",
      "Smart Home Systems",
    ],
    languages: ["Nepali", "English", "Hindi"],
  },
  {
    id: 2,
    name: "Amit Singh Thapa",
    location: "Pokhara, Nepal",
    experience: "9+ years",
    rating: "4.8/5",
    availability: "1 week notice",
    skills: [
      "Specialized in industrial electrical systems and machinery",
      "Expert in high-voltage electrical installations and maintenance",
      "Proficient in motor control systems and automation",
      "Strong knowledge of industrial safety protocols and regulations",
      "Experience with electrical testing and diagnostic equipment",
      "Excellent project management and team coordination skills",
      "Trained in emergency electrical repairs and maintenance",
      "Reliable and experienced with complex electrical systems",
    ],
    certifications: ["Industrial Electrical", "High Voltage", "Motor Control"],
    languages: ["Nepali", "English"],
  },
  {
    id: 3,
    name: "Bikash Gurung",
    location: "Chitwan, Nepal",
    experience: "5+ years",
    rating: "4.7/5",
    availability: "Immediate",
    skills: [
      "Experienced in new construction electrical work",
      "Skilled in electrical blueprint reading and interpretation",
      "Proficient in conduit installation and cable management",
      "Strong knowledge of electrical grounding and bonding",
      "Experience with lighting systems and fixture installation",
      "Excellent quality control and inspection skills",
      "Trained in electrical safety and compliance standards",
      "Good communication and customer service skills",
    ],
    certifications: [
      "Construction Electrical",
      "Blueprint Reading",
      "Safety Compliance",
    ],
    languages: ["Nepali", "English", "Hindi"],
  },
  {
    id: 4,
    name: "Kiran Tamang",
    location: "Dharan, Nepal",
    experience: "6+ years",
    rating: "4.6/5",
    availability: "2 weeks notice",
    skills: [
      "Specialized in electrical maintenance and repair services",
      "Expert in troubleshooting electrical faults and issues",
      "Proficient in electrical equipment installation and servicing",
      "Strong knowledge of electrical systems diagnostics",
      "Experience with emergency electrical repairs and callouts",
      "Excellent problem-solving and technical skills",
      "Trained in electrical safety and emergency procedures",
      "Professional and punctual with strong work ethic",
    ],
    certifications: [
      "Maintenance Electrical",
      "Troubleshooting",
      "Emergency Repair",
    ],
    languages: ["Nepali", "English"],
  },
  {
    id: 5,
    name: "Suresh Shrestha",
    location: "Biratnagar, Nepal",
    experience: "8+ years",
    rating: "4.8/5",
    availability: "1 week notice",
    skills: [
      "Expert in renewable energy and solar electrical systems",
      "Specialized in solar panel installation and maintenance",
      "Proficient in battery systems and energy storage solutions",
      "Strong knowledge of sustainable electrical practices",
      "Experience with grid-tied and off-grid electrical systems",
      "Excellent technical expertise in green energy solutions",
      "Trained in solar electrical safety and regulations",
      "Innovative and environmentally conscious approach",
    ],
    certifications: ["Solar Electrical", "Renewable Energy", "Battery Systems"],
    languages: ["Nepali", "English", "Hindi"],
  },
];

const ElectricianCandidates = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ips-neutral-900 mb-4">
              Available Electricians
            </h1>
            <p className="text-lg text-ips-neutral-600 max-w-2xl mx-auto">
              Licensed and certified electricians ready for your electrical
              projects. All candidates are safety-trained and experienced.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electricianCandidates.map((candidate) => (
              <div
                key={candidate.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-ips-blue to-ips-blue/80 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{candidate.name}</h2>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <MapPin className="w-4 h-4" />
                        <span>{candidate.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-ips-blue mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">Experience</span>
                      </div>
                      <p className="text-lg font-bold text-ips-neutral-900">
                        {candidate.experience}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-ips-blue mb-1">
                        <Star className="w-4 h-4" />
                        <span className="text-sm font-medium">Rating</span>
                      </div>
                      <p className="text-lg font-bold text-ips-neutral-900">
                        {candidate.rating}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-ips-blue mb-1">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-medium">Available</span>
                      </div>
                      <p className="text-sm font-bold text-ips-neutral-900">
                        {candidate.availability}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-ips-neutral-900 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-ips-blue" />
                      Skills & Expertise
                    </h3>
                    <ul className="space-y-2">
                      {candidate.skills.map((skill, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-ips-neutral-700"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-ips-blue mt-2 flex-shrink-0"></div>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Certifications & Languages */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-ips-neutral-900 mb-2">
                        Certifications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {candidate.certifications.map((cert, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-ips-blue/10 text-ips-blue text-xs font-medium rounded-full"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-ips-neutral-900 mb-2">
                        Languages
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {candidate.languages.map((lang, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-ips-neutral-700 text-xs font-medium rounded-full"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <button
                    onClick={handleContactClick}
                    className="w-full bg-ips-blue text-white py-2 px-4 rounded-lg font-medium hover:bg-ips-blue/90 transition-colors duration-200"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ElectricianCandidates;
