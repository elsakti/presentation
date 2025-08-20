export function JourneyTimelineSlide() {
  const journeySteps = [
    {
      title: "COVID Era",
      subtitle: "Year 1 SMK",
      description: "Everything went online",
      side: "left"
    },
    {
      title: "First Professional Experience",
      subtitle: "Internship",
      description: "Mojokerto Communication Office + Broadcasting",
      side: "right"
    },
    {
      title: "Golden Ticket Metaverse",
      subtitle: "Scholarship Program",
      description: "Bandung (4 months)",
      side: "left"
    },
    {
      title: "Kalimantan Project",
      subtitle: "Rural & Urban Metaverse",
      description: "North Kalimantan (4 months)",
      side: "right"
    },
    {
      title: "Became an Instructor",
      subtitle: "Teaching IT Teachers",
      description: "BBPPMPV BOE Malang - before even graduating!",
      side: "left"
    },
    {
      title: "International Teaching",
      subtitle: "Nakhon Phanom",
      description: "Technical College, Thailand (20 days)",
      side: "right"
    },
    {
      title: "HRIS Project",
      subtitle: "Surabaya → Bandung",
      description: "Development work and back to Bandung",
      side: "left"
    },
    {
      title: "Current Adventure",
      subtitle: "International Language Camp",
      description: "TSN Thailand!",
      side: "right"
    }
  ];

  return (
    <div className="min-h-screen flex items-start justify-center p-6 py-12 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 w-full">
        {/* Title */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My{' '}
            <span >
              Nomadic Journey
            </span>
          </h2>
          <p className="text-xl text-white/80 italic">
            The boy who rarely goes home and keeps moving
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-primary rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center animate-fade-in-up`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {step.side === 'left' ? (
                  <>
                    {/* Mobile: Full width card */}
                    <div className="w-full md:w-5/12 text-center md:text-right md:pr-8 mb-4 md:mb-0">
                      <div className="glass-strong rounded-2xl p-4 md:p-6 hover-lift">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-primary-start font-semibold mb-2">{step.subtitle}</p>
                        <p className="text-white/90 text-sm">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Center Circle */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className="w-4 h-4 bg-secondary-start rounded-full border-4 border-background z-10"></div>
                    </div>
                    
                    {/* Right Spacer */}
                    <div className="hidden md:block w-5/12"></div>
                  </>
                ) : (
                  <>
                    {/* Left Spacer */}
                    <div className="hidden md:block w-5/12"></div>
                    
                    {/* Center Circle */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className="w-4 h-4 bg-secondary-start rounded-full border-4 border-background z-10"></div>
                    </div>
                    
                    {/* Mobile: Full width card, Desktop: Right content */}
                    <div className="w-full md:w-5/12 text-center md:text-left md:pl-8">
                      <div className="glass-strong rounded-2xl p-4 md:p-6 hover-lift">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-primary-start font-semibold mb-2">{step.subtitle}</p>
                        <p className="text-white/90 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}