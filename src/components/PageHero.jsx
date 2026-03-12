import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";

const pageImages = {
  "About Us":         "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=75",
  "Services":         "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1400&q=75",
  "Meet Our Experts": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1400&q=75",
  "Testimonials":     "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=75",
  "Contact":          "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=75",
};

const PageHero = ({ title, subtitle, bgImage, breadcrumbs = [] }) => {
  const backgroundImage =
    bgImage || pageImages[title] || pageImages["Services"];

  return (
    <section className="relative h-[420px] md:h-[480px] flex items-center overflow-hidden font-sans">

      {/* Background */}
      <img
        src={backgroundImage}
        alt={title}
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-10" />

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16">
        <p className="text-xs uppercase tracking-[4px] text-accent mb-3">
          Smile Craft
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-md">
          {title}
        </h1>

        <div className="w-16 h-[3px] bg-accent rounded-full mt-5 mb-5" />

        {subtitle && (
          <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Breadcrumbs at Bottom */}
      <div className="absolute bottom-6 left-0 w-full z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <nav className="flex items-center gap-2 flex-wrap bg-black/30 backdrop-blur-sm px-4 py-2 rounded-md w-fit">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-accent hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              <FaHome size={13} />
              <span>Home</span>
            </Link>

            {breadcrumbs.map((crumb, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <React.Fragment key={i}>
                  <FaChevronRight size={10} className="text-white/40" />
                  {isLast ? (
                    <span className="text-white/70 text-sm">{crumb.label}</span>
                  ) : (
                    <Link
                      to={crumb.href}
                      className="text-accent hover:text-white transition-colors duration-200 text-sm font-medium"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Decorative Side Accent */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-2">
        <div className="w-px h-20 bg-white/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        <div className="w-px h-20 bg-white/20" />
      </div>

    </section>
  );
};

export default PageHero;