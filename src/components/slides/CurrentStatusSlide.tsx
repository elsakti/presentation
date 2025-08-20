export function CurrentStatusSlide() {
  const techStack = ['Python', 'JavaScript', 'React', 'Node.js', 'AI/ML', 'Teaching'];

  return (
    <div className="min-h-screen flex items-start justify-center p-6 py-12 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 w-full">
        {/* Title */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Where I Am{' '}
            <span >
              Now
            </span>
          </h2>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-fade-in-up [animation-delay:0.2s]">
          <div className="glass-strong rounded-2xl p-6 md:p-8 hover-lift">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-white mb-3">Education</h3>
            <p className="text-primary-start font-semibold mb-2">EEPIS Surabaya</p>
            <p className="text-white/90 text-sm leading-relaxed">
              Informatics Engineering
              <br />
              <span className="text-white/70">(while working full-time)</span>
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-6 md:p-8 hover-lift">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-white mb-3">Professional Role</h3>
            <p className="text-primary-start font-semibold mb-2">Fullstack Developer</p>
            <p className="text-white/90 text-sm leading-relaxed">
              Web Development & AI Solutions
              <br />
              Technical Instructor
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-6 md:p-8 hover-lift">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-white mb-3">Current Location</h3>
            <p className="text-primary-start font-semibold mb-2">Thailand</p>
            <p className="text-white/90 text-sm leading-relaxed">
              Until September 20, 2025
              <br />
              <span className="text-secondary-start">Language Camp Experience</span>
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center animate-fade-in-up [animation-delay:0.4s]">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  className="glass-strong rounded-full px-4 py-2 text-white font-medium text-sm hover-lift"
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
            "Balancing education and professional growth while exploring the world"
          </p>
        </div>
      </div>
    </div>
  );
}