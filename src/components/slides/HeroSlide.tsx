export function HeroSlide() {
  return (
    <div className="h-screen flex items-center justify-center p-6">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in-up">
            Hello, I'm{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Rakha!
            </span>
          </h1>
          
          <div className="space-y-2 animate-fade-in-up [animation-delay:0.2s]">
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Fullstack Web & AI Developer | Digital Nomad | Tech Instructor
            </p>
            
            {/* Javanese Script */}
            <p className="text-lg text-primary-start font-medium italic">
              ꦫꦏ ꦧꦒꦸꦱ꧀ ꦱꦏ꧀ꦠꦶꦮꦤ꧀
            </p>
          </div>
        </div>

        {/* Event Info */}
        <div className="glass-strong rounded-2xl p-6 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.4s]">
          <p className="text-white text-lg">
            <span className="text-secondary-start font-semibold">International Language Camp 2025</span>
            <br />
            <span className="text-white/80">TSN Thailand</span>
          </p>
        </div>

        {/* Floating Badges */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up [animation-delay:0.6s]">
          <div className="glass rounded-full px-6 py-3 hover-lift">
            <span className="text-white font-medium">🇮🇩 From Indonesia</span>
          </div>
          <div className="glass rounded-full px-6 py-3 hover-lift">
            <span className="text-white font-medium">💻 Fullstack Dev</span>
          </div>
          <div className="glass rounded-full px-6 py-3 hover-lift">
            <span className="text-white font-medium">🚀 AI Enthusiast</span>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="animate-fade-in-up [animation-delay:0.8s]">
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Welcome to my story - a journey of technology, culture, and endless learning. 
            Let's explore together!
          </p>
        </div>
      </div>
    </div>
  );
}