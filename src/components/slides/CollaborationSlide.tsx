export function CollaborationSlide() {
  const offerings = [
    "Full-stack Web Development",
    "AI & Machine Learning Solutions",
    "Technical Training & Mentoring",
    "Project Management Experience"
  ];

  const seeking = [
    "Innovative Business Ideas",
    "Cultural Exchange Opportunities",
    "Language Learning Partnerships",
    "Long-term Collaborations"
  ];

  return (
    <div className="h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Let's Build the{' '}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Future Together!
            </span>
          </h2>
        </div>

        {/* Main CTA */}
        <div className="text-center animate-fade-in-up [animation-delay:0.2s]">
          <div className="bg-gradient-primary rounded-3xl p-8 max-w-4xl mx-auto mb-12">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-3xl font-bold text-white mb-4">Partnership Opportunity</h3>
            <p className="text-white/90 text-xl leading-relaxed">
              I'll bring the technical expertise to your vision, and together we'll create something extraordinary!
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up [animation-delay:0.4s]">
          {/* What I Bring */}
          <div className="glass-strong rounded-2xl p-8 hover-lift">
            <div className="text-4xl mb-6 text-center">💻</div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">What I Bring</h3>
            <div className="space-y-4">
              {offerings.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-start rounded-full"></div>
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What I'm Looking For */}
          <div className="glass-strong rounded-2xl p-8 hover-lift">
            <div className="text-4xl mb-6 text-center">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">What I'm Looking For</h3>
            <div className="space-y-4">
              {seeking.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-start rounded-full"></div>
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center animate-fade-in-up [animation-delay:0.6s]">
          <div className="glass-strong rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="text-4xl mb-4">💎</div>
            <p className="text-white text-2xl font-bold mb-4">
              Ready to turn ideas into reality?
            </p>
            <p className="text-primary-start text-xl">
              Let's connect!
            </p>
            
            {/* Contact Encouragement */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="glass rounded-full px-6 py-3 text-white font-medium">
                💬 Let's Talk
              </span>
              <span className="glass rounded-full px-6 py-3 text-white font-medium">
                🤝 Partnership
              </span>
              <span className="glass rounded-full px-6 py-3 text-white font-medium">
                🌟 Innovation
              </span>
            </div>
          </div>
        </div>

        {/* Thank You */}
        <div className="text-center animate-fade-in-up [animation-delay:0.8s]">
          <p className="text-white/70 text-lg italic">
            Thank you for joining me on this journey! 🙏
          </p>
        </div>
      </div>
    </div>
  );
}