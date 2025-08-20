export function NameMeaningSlide() {
  return (
    <div className="min-h-screen flex items-start justify-center p-6 py-12 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 w-full">
        {/* Title */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The Story Behind My{' '}
            <span >
              Name
            </span>
          </h2>
        </div>

        {/* Name Cards */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up [animation-delay:0.2s]">
          <div className="glass-strong rounded-2xl p-8 hover-lift text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-white mb-3">Rakha</h3>
            <p className="text-primary-start font-semibold text-lg mb-2">"First Son"</p>
            <p className="text-white/80 leading-relaxed">
              The beginning of every journey starts with a single step
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-8 hover-lift text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-white mb-3">Bagus</h3>
            <p className="text-primary-start font-semibold text-lg mb-2">"Good/Beautiful"</p>
            <p className="text-white/80 leading-relaxed">
              Pursuing excellence in everything I create and do
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-8 hover-lift text-center">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-2xl font-bold text-white mb-3">Saktiawan</h3>
            <p className="text-primary-start font-semibold text-lg mb-2">"Strong Man"</p>
            <p className="text-white/80 leading-relaxed">
              Resilience through challenges and obstacles
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center animate-fade-in-up [animation-delay:0.4s]">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Basic Info</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-secondary-start mb-2">19</p>
                <p className="text-white/80">Years Old</p>
                <p className="text-sm text-white/60 mt-1">Born Nov 12, 2005</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-primary-start mb-2">🏠</p>
                <p className="text-white/80">Mojokerto</p>
                <p className="text-sm text-white/60 mt-1">East Java, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}