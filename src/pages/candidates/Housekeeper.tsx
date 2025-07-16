import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, MapPin, Clock, Star, Award, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const housekeeperCandidates = [
  {
    id: 1,
    name: "Lakshmi Devi",
    location: "Kathmandu, Nepal",
    experience: "6+ years",
    rating: "4.9/5",
    availability: "Immediate",
    skills: [
      "Expert in residential and commercial housekeeping",
      "Skilled in deep cleaning and maintenance services",
      "Proficient in laundry, ironing, and fabric care",
      "Strong knowledge of cleaning products and techniques",
      "Experience with kitchen organization and meal preparation",
      "Excellent attention to detail and quality standards",
      "Trained in safety protocols and chemical handling",
      "Reliable and trustworthy with strong work ethic",
    ],
    certifications: ["Housekeeping", "Safety Training", "Chemical Handling"],
    languages: ["Nepali", "English", "Hindi"],
  },
  {
    id: 2,
    name: "Sita Thapa",
    location: "Pokhara, Nepal",
    experience: "8+ years",
    rating: "4.8/5",
    availability: "1 week notice",
    skills: [
      "Specialized in luxury home and hotel housekeeping",
      "Expert in high-end cleaning and maintenance services",
      "Proficient in organizing and decluttering spaces",
      "Strong knowledge of premium cleaning products and methods",
      "Experience with fine fabric care and preservation",
      "Excellent customer service and communication skills",
      "Trained in hospitality standards and etiquette",
      "Professional and discreet with attention to detail",
    ],
    certifications: ["Luxury Housekeeping", "Hospitality", "Fabric Care"],
    languages: ["Nepali", "English"],
  },
  {
    id: 3,
    name: "Anita Gurung",
    location: "Chitwan, Nepal",
    experience: "5+ years",
    rating: "4.7/5",
    availability: "Immediate",
    skills: [
      "Experienced in family home maintenance and care",
      "Skilled in daily cleaning routines and organization",
      "Proficient in child-safe cleaning and household management",
      "Strong knowledge of eco-friendly cleaning products",
      "Experience with pet-friendly cleaning and care",
      "Excellent time management and multitasking abilities",
      "Trained in family safety and emergency procedures",
      "Caring and patient with family-oriented approach",
    ],
    certifications: ["Family Housekeeping", "Child Safety", "Eco Cleaning"],
    languages: ["Nepali", "English", "Hindi"],
  },
  {
    id: 4,
    name: "Bina Tamang",
    location: "Dharan, Nepal",
    experience: "4+ years",
    rating: "4.6/5",
    availability: "2 weeks notice",
    skills: [
      "Specialized in elderly care and assisted living support",
      "Expert in gentle cleaning and maintenance services",
      "Proficient in medication reminders and basic care",
      "Strong knowledge of accessibility and safety requirements",
      "Experience with mobility assistance and companionship",
      "Excellent patience and compassionate care skills",
      "Trained in elderly care protocols and emergency response",
      "Kind and understanding with elderly care experience",
    ],
    certifications: ["Elderly Care", "Assisted Living", "Safety Training"],
    languages: ["Nepali", "English"],
  },
  {
    id: 5,
    name: "Rita Shrestha",
    location: "Biratnagar, Nepal",
    experience: "7+ years",
    rating: "4.8/5",
    availability: "1 week notice",
    skills: [
      "Expert in commercial and office cleaning services",
      "Specialized in industrial cleaning and maintenance",
      "Proficient in specialized equipment and cleaning systems",
      "Strong knowledge of commercial cleaning protocols",
      "Experience with large-scale cleaning projects",
      "Excellent efficiency and time management skills",
      "Trained in commercial safety and equipment operation",
      "Professional and reliable with commercial experience",
    ],
    certifications: [
      "Commercial Cleaning",
      "Industrial Cleaning",
      "Equipment Operation",
    ],
    languages: ["Nepali", "English", "Hindi"],
  },
];

const HousekeeperCandidates = () => {
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
              Available Housekeepers
            </h1>
            <p className="text-lg text-ips-neutral-600 max-w-2xl mx-auto">
              Professional and experienced housekeeping staff ready to maintain
              your home or business. All candidates are trained and
              background-checked.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {housekeeperCandidates.map((candidate) => (
              <div
                key={candidate.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-ips-blue to-ips-blue/80 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                      <Home className="w-8 h-8 text-white" />
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

export default HousekeeperCandidates;
