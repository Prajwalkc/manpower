
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Software Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "IPS Manpower helped me secure a position in Dubai with a competitive salary. Their support throughout the visa process was excellent.",
      rating: 5,
    },
    {
      name: "Sunita Sharma",
      position: "Nurse",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "The team at IPS was professional and supportive throughout my application process. I'm now working in Australia and couldn't be happier.",
      rating: 5,
    },
    {
      name: "Anup Thapa",
      position: "Hotel Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      content: "From documentation to interview preparation, IPS Manpower provided exceptional guidance. I highly recommend their services.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-ips-neutral">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-ips-blue-light text-ips-blue-dark text-sm font-medium mb-3">
            Testimonials
          </span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Hear from candidates who have successfully found employment through our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-elegant relative">
              <div className="absolute top-6 right-6 text-ips-blue opacity-20">
                <Quote size={48} />
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-ips-blue-light"
                />
                <div>
                  <h3 className="text-lg font-display font-medium text-ips-neutral-900">{testimonial.name}</h3>
                  <p className="text-sm text-ips-neutral-800/80">{testimonial.position}</p>
                </div>
              </div>
              
              <p className="text-ips-neutral-800 mb-6 relative z-10">{testimonial.content}</p>
              
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
