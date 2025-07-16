import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, MapPin, Clock, Star, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const masonCandidates = [
  {
    id: 1,
    name: "Ram Kumar Yadav",
    location: "Biratnagar, Nepal",
    experience: "5+ years",
    rating: "4.8/5",
    availability: "Immediate",
    skills: [
      "Expert in residential and commercial masonry",
      "Skilled in bricklaying, stonework, and concrete finishing",
      "Proficient in tile setting and decorative stonework",
      "Strong knowledge of building codes and safety standards",
      "Experience with both traditional and modern construction techniques",
      "Excellent attention to detail and quality control",
      "Reliable and hardworking with strong work ethic",
      "Team player with good communication skills",
    ],
    certifications: ["Safety Training", "Quality Control"],
    languages: ["Nepali", "English", "Hindi", "Maithili"],
  },
  {
    id: 2,
    name: "Suresh Kumar Thakur",
    location: "Janakpur, Nepal",
    experience: "8+ years",
    rating: "4.9/5",
    availability: "2 weeks notice",
    skills: [
      "Specialized in luxury residential projects",
      "Expert in tile setting and decorative stonework",
      "Advanced skills in marble and granite installation",
      "Proficient in creating custom stone features",
      "Strong focus on precision and craftsmanship",
      "Experience with high-end finishes and detailing",
      "Excellent project management skills",
      "Safety compliance and quality assurance",
    ],
    certifications: ["Advanced Masonry", "Safety Management"],
    languages: ["Nepali", "English", "Maithili"],
  },
  {
    id: 3,
    name: "Bikash Kumar Sah",
    location: "Bharatpur, Nepal",
    experience: "6+ years",
    rating: "4.7/5",
    availability: "1 week notice",
    skills: [
      "Specializes in large-scale construction projects",
      "Expert in structural masonry and foundation work",
      "Strong leadership and team management skills",
      "Experience with commercial and industrial projects",
      "Proficient in reading blueprints and technical drawings",
      "Excellent problem-solving and troubleshooting abilities",
      "Quality control and project coordination",
      "Safety training and compliance",
    ],
    certifications: ["Project Management", "Structural Masonry"],
    languages: ["Nepali", "English", "Hindi", "Bhojpuri"],
  },
  {
    id: 4,
    name: "Kiran Kumar Mandal",
    location: "Birgunj, Nepal",
    experience: "4+ years",
    rating: "4.6/5",
    availability: "Immediate",
    skills: [
      "Experienced in new builds and renovations",
      "Skilled in both traditional and modern masonry",
      "Proficient in concrete work and finishing",
      "Strong attention to detail and quality standards",
      "Excellent time management and punctuality",
      "Good communication and customer service skills",
      "Reliable and trustworthy worker",
      "Adaptable to different work environments",
    ],
    certifications: ["Basic Masonry", "Safety Training"],
    languages: ["Nepali", "English", "Bhojpuri"],
  },
  {
    id: 5,
    name: "Rajesh Kumar Singh",
    location: "Nepalgunj, Nepal",
    experience: "7+ years",
    rating: "4.8/5",
    availability: "3 weeks notice",
    skills: [
      "Expert in restoration and heritage masonry",
      "Specialized in stone carving and decorative work",
      "Experience with historical building preservation",
      "Advanced skills in traditional masonry techniques",
      "Proficient in modern construction methods",
      "Strong artistic and creative abilities",
      "Excellent craftsmanship and attention to detail",
      "Project planning and execution skills",
    ],
    certifications: ["Heritage Masonry", "Stone Carving"],
    languages: ["Nepali", "English", "Hindi", "Awadhi"],
  },
];

const MasonCandidates = () => {
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
              Available Masons
            </h1>
            <p className="text-lg text-ips-neutral-600 max-w-2xl mx-auto">
              Skilled and experienced masons ready for your construction
              projects. All candidates are pre-screened and certified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masonCandidates.map((candidate) => (
              <div
                key={candidate.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-ips-blue to-ips-blue/80 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                      <User className="w-8 h-8 text-white" />
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

export default MasonCandidates;
