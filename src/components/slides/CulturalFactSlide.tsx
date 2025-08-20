export function CulturalFactSlide() {
  return (
    <div className="min-h-screen flex items-start justify-center p-6 py-12 overflow-y-auto">
      <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 w-full">
        {/* Title */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            A Piece of{' '}
            <span >
              Javanese Wisdom
            </span>
          </h2>
        </div>

        {/* Main Story Card */}
        <div className="animate-fade-in-up [animation-delay:0.2s]">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 text-6xl">🏰</div>
              <div className="absolute bottom-4 right-4 text-6xl">✨</div>
              <div className="absolute top-4 right-4 text-4xl">👑</div>
              <div className="absolute bottom-4 left-4 text-4xl">🌟</div>
            </div>
            
            <div className="relative z-10">
              <div className="text-7xl mb-6">🏰</div>
              <h3 className="text-4xl font-bold text-white mb-6">
                The Majapahit Empire's "Golden Waste"
              </h3>
              
              <div className="space-y-6 text-left max-w-2xl mx-auto">
                <div className="glass rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    <span className="text-2xl mr-3">📚</span>
                    Historical Context
                  </h4>
                  <p className="text-white/90">
                    The Majapahit Empire was incredibly powerful and wealthy in ancient Java
                  </p>
                </div>
                
                <div className="glass rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    <span className="text-2xl mr-3">🍽️</span>
                    The Tradition
                  </h4>
                  <p className="text-white/90">
                    After every royal meal, golden plates were thrown into the massive Segaran Pool
                  </p>
                </div>
                
                <div className="glass rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    <span className="text-2xl mr-3">👥</span>
                    Public Perception
                  </h4>
                  <p className="text-white/90">
                    "They're so wealthy they just waste gold!"
                  </p>
                </div>
                
                <div className="glass rounded-2xl p-6 border-2 border-secondary-start">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    <span className="text-2xl mr-3">🤫</span>
                    The Secret
                  </h4>
                  <p className="text-white/90">
                    Hidden nets in the pool caught every single plate! 😂
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson */}
        <div className="text-center animate-fade-in-up [animation-delay:0.4s]">
          <div className="glass-strong rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-bold text-white mb-4">The Lesson</h3>
            <p className="text-white/90 text-xl leading-relaxed">
              The smartest solutions often look like the most extravagant ones!
            </p>
            <p className="text-primary-start text-lg mt-4 italic">
              "Sometimes the best strategy appears to be the most wasteful"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}