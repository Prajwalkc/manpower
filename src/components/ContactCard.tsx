
import { ReactNode } from 'react';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
  content: ReactNode;
  delayClass?: string;
  isVisible?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  content,
  delayClass = '',
  isVisible = true
}) => {
  return (
    <div 
      className={`glass-card p-8 rounded-lg transition-all duration-500 hover:shadow-elegant-lg transform hover:-translate-y-2 ${
        isVisible ? `animate-fade-in-up ${delayClass}` : 'opacity-0'
      }`}
    >
      <div className="h-16 w-16 rounded-lg bg-ips-blue/10 flex items-center justify-center mb-6 transform transition-all duration-300 hover:rotate-3 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-display font-medium text-ips-neutral-900 mb-3">{title}</h3>
      {description && <p className="text-ips-neutral-800/80 mb-4">{description}</p>}
      {content}
    </div>
  );
};

export default ContactCard;
