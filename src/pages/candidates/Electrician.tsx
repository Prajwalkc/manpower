import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User } from "lucide-react";

const electricianCandidates = [
  {
    id: 1,
    name: "Sanjay Shrestha",
    info: [
      "Licensed electrician with 6 years experience",
      "Expert in wiring and electrical maintenance",
      "Knowledge of safety codes",
    ],
  },
  {
    id: 2,
    name: "Prakash Thapa",
    info: [
      "Specializes in industrial electrical systems",
      "Quick troubleshooting skills",
      "Team player",
    ],
  },
  // Add more candidates as needed
];

const ElectricianCandidates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-ips-neutral-900 mb-6">
            Available Electricians
          </h1>
          <div className="overflow-x-auto">
            <div className="flex flex-col gap-6 min-w-[320px]">
              {electricianCandidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="flex items-center gap-6 bg-ips-neutral-100 rounded-lg p-4 shadow-card"
                >
                  <div className="w-20 h-20 rounded-full bg-ips-blue/10 flex items-center justify-center border-2 border-ips-blue">
                    <User className="w-10 h-10 text-ips-blue" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-ips-neutral-900 mb-1">
                      {candidate.name}
                    </h2>
                    <ul className="list-disc list-inside text-ips-neutral-700 text-base space-y-1">
                      {candidate.info.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ElectricianCandidates;
