import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, HardHat, Shield, Wrench, Briefcase, Home } from "lucide-react";
import { Link } from "react-router-dom";

const candidateCategories = [
  {
    id: "mason",
    title: "Mason",
    icon: HardHat,
    count: 18,
    description:
      "Experienced masons available for construction and building projects.",
    link: "/candidates/mason",
  },
  {
    id: "security-guard",
    title: "Security Guard",
    icon: Shield,
    count: 25,
    description:
      "Trained security personnel for commercial and residential needs.",
    link: "/candidates/security-guard",
  },
  {
    id: "electrician",
    title: "Electrician",
    icon: Wrench,
    count: 12,
    description: "Certified electricians for industrial and domestic work.",
    link: "/candidates/electrician",
  },
  {
    id: "office-staff",
    title: "Office Staff",
    icon: Briefcase,
    count: 10,
    description:
      "Qualified office staff for administrative and clerical roles.",
    link: "/candidates/office-staff",
  },
  {
    id: "housekeeper",
    title: "Housekeeper",
    icon: Home,
    count: 15,
    description: "Reliable housekeepers for homes, hotels, and institutions.",
    link: "/candidates/housekeeper",
  },
  // Add more categories as needed
];

const Candidates = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow pt-32 pb-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-ips-neutral-900 mb-6">
          Available Candidates
        </h1>
        <p className="text-lg text-ips-neutral-600 mb-10 max-w-2xl">
          Explore our pool of skilled candidates ready for immediate
          outsourcing. Below is a summary of available talent by category. For
          more details or to request candidates, please contact us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {candidateCategories.map((cat) => {
            const Icon = cat.icon;
            const CardContent = (
              <div className="glass-card p-6 rounded-lg shadow-elegant flex flex-col items-start hover:shadow-elegant-lg transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-ips-blue/10 rounded-lg mr-3">
                    <Icon className="w-6 h-6 text-ips-blue" />
                  </div>
                  <h2 className="text-xl font-semibold text-ips-neutral-900">
                    {cat.title}
                  </h2>
                </div>
                <p className="text-ips-neutral-600 mb-4 flex-1">
                  {cat.description}
                </p>
                <div className="text-3xl font-bold text-ips-blue mb-2">
                  {cat.count}
                </div>
                <div className="text-sm text-ips-neutral-500">
                  candidates available
                </div>
              </div>
            );
            return cat.link ? (
              <Link to={cat.link} key={cat.id} className="block">
                {CardContent}
              </Link>
            ) : (
              <div key={cat.id}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Candidates;
