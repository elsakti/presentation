export function HobbiesSlide() {
  return (
    <div className="min-h-screen flex items-start justify-center p-6 py-12 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 w-full">
        {/* Title */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            What Fuels My{' '}
            <span >
              Passion
            </span>
          </h2>
        </div>

        {/* Hobby Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-fade-in-up [animation-delay:0.2s]">
          <div className="glass-strong rounded-2xl p-6 md:p-8 hover-lift text-center">
            <div className="text-5xl md:text-6xl mb-4 md:mb-6">🚴‍♂️</div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cycling</h3>
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              Freedom on two wheels, exploring new paths and pushing boundaries
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-6 md:p-8 hover-lift text-center">
            <div className="text-5xl md:text-6xl mb-4 md:mb-6">🎵</div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Music</h3>
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              The universal language that connects hearts and cultures
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-6 md:p-8 hover-lift text-center">
            <div className="text-5xl md:text-6xl mb-4 md:mb-6">🏋️‍♂️</div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Fitness</h3>
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              Building physical and mental strength for life's challenges
            </p>
          </div>
        </div>

        {/* Special AI Section */}
        <div className="animate-fade-in-up [animation-delay:0.4s]">
          <div className="glass-strong rounded-2xl p-8 max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">🤖</div>
            <h3 className="text-3xl font-bold text-white mb-4">AI & Technology</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Passionate about the future of artificial intelligence and how technology can transform our world. 
              Always exploring cutting-edge solutions and innovative applications.
            </p>
            
            {/* Tech Interest Tags */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Machine Learning', 'Neural Networks', 'Web3', 'Innovation', 'Future Tech'].map((tech, index) => (
                <span
                  key={tech}
                  className="glass rounded-full px-4 py-2 text-primary-start font-medium text-sm"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center animate-fade-in-up [animation-delay:0.6s]">
          <p className="text-white/70 text-lg italic max-w-2xl mx-auto">
            "Every passion fuels innovation, every hobby teaches something new"
          </p>
        </div>
      </div>
    </div>
  );
}