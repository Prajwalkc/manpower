import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const isHeaderInView = useInView(headerRef, { threshold: 0.1 });

  // Enhanced scroll effect with smoothing
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Custom styling for navigation links
  const NavItem = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `nav-link transition-all duration-300 py-2 px-3 rounded-md hover:bg-ips-neutral-100 ${
          isActive ? "text-ips-blue font-semibold" : "text-ips-neutral-800"
        }`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled
          ? "glass-nav py-3 shadow-md backdrop-blur-md"
          : "bg-transparent py-5",
        !isHeaderInView && "translate-y-0"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-ips-neutral-900 transition-all">
            IPS <span className="text-ips-blue">Manpower</span>
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1">
              <NavigationMenuItem>
                <NavItem to="/">Home</NavItem>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-ips-neutral-100">
                  <span className="text-ips-neutral-800 hover:text-ips-blue">
                    Services
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4 md:grid gap-3 grid-cols-2">
                    <NavLink
                      to="/services/recruitment"
                      className="nav-menu-item group"
                    >
                      <div className="p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors">
                        <h4 className="font-medium text-ips-neutral-900 mb-1">
                          Recruitment & Selection
                        </h4>
                        <p className="text-sm text-ips-neutral-600">
                          Talent acquisition and placement
                        </p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/services/international"
                      className="nav-menu-item group"
                    >
                      <div className="p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors">
                        <h4 className="font-medium text-ips-neutral-900 mb-1">
                          International Placement
                        </h4>
                        <p className="text-sm text-ips-neutral-600">
                          Global job opportunities
                        </p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/services/documentation"
                      className="nav-menu-item group"
                    >
                      <div className="p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors">
                        <h4 className="font-medium text-ips-neutral-900 mb-1">
                          Documentation Support
                        </h4>
                        <p className="text-sm text-ips-neutral-600">
                          Visa, permits, and paperwork
                        </p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/services/corporate"
                      className="nav-menu-item group"
                    >
                      <div className="p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors">
                        <h4 className="font-medium text-ips-neutral-900 mb-1">
                          Corporate Staffing
                        </h4>
                        <p className="text-sm text-ips-neutral-600">
                          Business workforce solutions
                        </p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/services/training"
                      className="nav-menu-item group"
                    >
                      <div className="p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors">
                        <h4 className="font-medium text-ips-neutral-900 mb-1">
                          Skills Training
                        </h4>
                        <p className="text-sm text-ips-neutral-600">
                          Professional development
                        </p>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/services/ethical"
                      className="nav-menu-item group"
                    >
                      <div className="p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors">
                        <h4 className="font-medium text-ips-neutral-900 mb-1">
                          Ethical Recruitment
                        </h4>
                        <p className="text-sm text-ips-neutral-600">
                          Fair and transparent hiring
                        </p>
                      </div>
                    </NavLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-ips-neutral-100">
                  <span className="text-ips-neutral-800 hover:text-ips-blue">
                    Demand
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4 md:grid gap-3 grid-cols-2">
                    <NavLink to="/demand" className="nav-menu-item group">
                      <div className="p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors">
                        <h4 className="font-medium text-ips-neutral-900 mb-1">
                          Construction
                        </h4>
                        <p className="text-sm text-ips-neutral-600">
                          Construction and labor workers
                        </p>
                      </div>
                    </NavLink>
                    <NavLink to="/demand" className="nav-menu-item group">
                      <div className="p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors">
                        <h4 className="font-medium text-ips-neutral-900 mb-1">
                          Hospitality
                        </h4>
                        <p className="text-sm text-ips-neutral-600">
                          Hotel and restaurant staff
                        </p>
                      </div>
                    </NavLink>
                    <NavLink to="/demand" className="nav-menu-item group">
                      <div className="p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors">
                        <h4 className="font-medium text-ips-neutral-900 mb-1">
                          Healthcare
                        </h4>
                        <p className="text-sm text-ips-neutral-600">
                          Medical and care professionals
                        </p>
                      </div>
                    </NavLink>
                    <NavLink to="/demand" className="nav-menu-item group">
                      <div className="p-2 rounded-md group-hover:bg-ips-blue/10 transition-colors">
                        <h4 className="font-medium text-ips-neutral-900 mb-1">
                          Domestic
                        </h4>
                        <p className="text-sm text-ips-neutral-600">
                          Household and cleaning staff
                        </p>
                      </div>
                    </NavLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavItem to="/candidates">Candidates</NavItem>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavItem to="/about">About</NavItem>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavItem to="/contact">Contact</NavItem>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a
            href="tel:+977981885955"
            className="btn-primary animate-fade-in text-sm px-5 py-2 flex items-center"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DropdownMenuTrigger asChild>
            <button
              className="md:hidden text-ips-neutral-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-[90vw] mr-2 mt-2 rounded-xl bg-white/95 backdrop-blur-md border border-ips-neutral-200 shadow-elegant-lg py-4"
          >
            <div className="flex flex-col space-y-1 px-1">
              <DropdownMenuItem asChild>
                <NavLink
                  to="/"
                  className="flex items-center space-x-2 text-lg font-medium py-3 px-4 rounded-md hover:bg-ips-neutral-100"
                >
                  Home
                </NavLink>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <NavLink
                  to="/about"
                  className="flex items-center space-x-2 text-lg font-medium py-3 px-4 rounded-md hover:bg-ips-neutral-100"
                >
                  About
                </NavLink>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <NavLink
                  to="/services"
                  className="flex items-center space-x-2 text-lg font-medium py-3 px-4 rounded-md hover:bg-ips-neutral-100"
                >
                  <span>Services</span>
                  <ChevronDown size={16} className="ml-1" />
                </NavLink>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <NavLink
                  to="/demand"
                  className="flex items-center space-x-2 text-lg font-medium py-3 px-4 rounded-md hover:bg-ips-neutral-100"
                >
                  <span>Demand</span>
                  <ChevronDown size={16} className="ml-1" />
                </NavLink>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <NavLink
                  to="/contact"
                  className="flex items-center space-x-2 text-lg font-medium py-3 px-4 rounded-md hover:bg-ips-neutral-100"
                >
                  Contact
                </NavLink>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a
                  href="tel:+977981885955"
                  className="btn-primary w-full text-center my-3 py-3"
                >
                  Call Now
                </a>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
