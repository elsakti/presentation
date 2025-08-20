export function WhyImHereSlide() {
  const reasons = [
    {
      icon: "🌐",
      title: "Cultural Exchange",
      description: "Learning about diverse cultures while sharing Indonesia's rich heritage"
    },
    {
      icon: "🗣️",
      title: "Language Mastery",
      description: "Enhancing communication skills and learning Thai language fundamentals"
    },
    {
      icon: "🤝",
      title: "Network Building",
      description: "Connecting with like-minded individuals across ASEAN and beyond"
    },
    {
      icon: "🚀",
      title: "Future Collaborations",
      description: "Finding potential partners for innovative tech projects and ventures"
    }
  ];

  return (
    <div className="h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Why I{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Joined This Camp
            </span>
          </h2>
        </div>

        {/* Reason Cards */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up [animation-delay:0.2s]">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-strong rounded-2xl p-8 hover-lift"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="text-5xl mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-white/80 leading-relaxed text-lg">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Motivational Quote */}
        <div className="text-center animate-fade-in-up [animation-delay:0.6s]">
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="text-4xl mb-4">🌟</div>
            <p className="text-white text-xl leading-relaxed italic">
              "Every connection made here is a bridge to a brighter, more collaborative future"
            </p>
            <p className="text-primary-start mt-4 font-semibold">
              Let's learn, grow, and innovate together!
            </p>
          </div>
        </div>

        {/* Additional Context */}
        <div className="text-center animate-fade-in-up [animation-delay:0.8s]">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="glass rounded-full px-6 py-3 text-white font-medium">
              🇹🇭 Thailand Experience
            </span>
            <span className="glass rounded-full px-6 py-3 text-white font-medium">
              🌍 ASEAN Connections
            </span>
            <span className="glass rounded-full px-6 py-3 text-white font-medium">
              💫 Cultural Immersion
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}