import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Import slide components
import { HeroSlide } from './slides/HeroSlide';
import { NameMeaningSlide } from './slides/NameMeaningSlide';
import { CurrentStatusSlide } from './slides/CurrentStatusSlide';
import { JourneyTimelineSlide } from './slides/JourneyTimelineSlide';
import { HobbiesSlide } from './slides/HobbiesSlide';
import { CulturalFactSlide } from './slides/CulturalFactSlide';
import { WhyImHereSlide } from './slides/WhyImHereSlide';
import { CollaborationSlide } from './slides/CollaborationSlide';

const SLIDES = [
  { id: 1, component: HeroSlide, title: "Welcome" },
  { id: 2, component: NameMeaningSlide, title: "Name Meaning" },
  { id: 3, component: CurrentStatusSlide, title: "Current Status" },
  { id: 4, component: JourneyTimelineSlide, title: "My Journey" },
  { id: 5, component: HobbiesSlide, title: "Hobbies & Interests" },
  { id: 6, component: CulturalFactSlide, title: "Cultural Fun Fact" },
  { id: 7, component: WhyImHereSlide, title: "Why I'm Here" },
  { id: 8, component: CollaborationSlide, title: "Let's Collaborate" }
];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const nextSlide = useCallback(() => {
    if (currentSlide < SLIDES.length - 1) {
      setDirection('next');
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection('prev');
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((index: number) => {
    if (index !== currentSlide) {
      setDirection(index > currentSlide ? 'next' : 'prev');
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key >= '1' && e.key <= '8') {
        e.preventDefault();
        goToSlide(parseInt(e.key) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, goToSlide]);

  // Touch navigation
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;

      // Only trigger slide change if horizontal swipe is dominant
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = SLIDES[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-background relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="particles" />
      
      {/* Main Slide Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Slide Content */}
        <div className="flex-1 relative overflow-y-auto">
          <div
            key={currentSlide}
            className={cn(
              "relative transition-all duration-700 ease-out",
              direction === 'next' ? "animate-fade-in-up" : "animate-scale-in"
            )}
          >
            <CurrentSlideComponent />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="relative z-20 p-4 md:p-6">
          {/* Slide Indicators */}
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="glass rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-2">
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-start",
                    index === currentSlide 
                      ? "bg-primary-start w-6 md:w-8" 
                      : "bg-white/40 hover:bg-white/60"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center max-w-6xl mx-auto gap-4">
            <Button
              variant="ghost"
              size="lg"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="glass text-white hover:bg-white/25 disabled:opacity-20 disabled:cursor-not-allowed transition-smooth px-3 md:px-6"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 md:mr-2" />
              <span className="hidden md:inline">Previous</span>
            </Button>

            <div className="glass rounded-full px-3 md:px-6 py-1 md:py-2">
              <span className="text-white/90 text-xs md:text-sm font-medium">
                {currentSlide + 1} / {SLIDES.length}
              </span>
            </div>

            <Button
              variant="ghost"
              size="lg"
              onClick={nextSlide}
              disabled={currentSlide === SLIDES.length - 1}
              className="glass text-white hover:bg-white/25 disabled:opacity-20 disabled:cursor-not-allowed transition-smooth px-3 md:px-6"
            >
              <span className="hidden md:inline">Next</span>
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 md:ml-2" />
            </Button>
          </div>

          {/* Keyboard Shortcuts Hint */}
          <div className="text-center mt-3 md:mt-4">
            <p className="text-white/60 text-xs hidden md:block">
              Use arrow keys, spacebar, or numbers 1-8 to navigate
            </p>
            <p className="text-white/60 text-xs md:hidden">
              Swipe or tap buttons to navigate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}