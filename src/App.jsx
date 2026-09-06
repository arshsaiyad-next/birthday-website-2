import React, { useState, useEffect, useRef } from 'react';
import { Heart, Volume2, VolumeX, ChevronDown } from 'lucide-react';

// Birthday Configuration - EASY TO PERSONALIZE
const birthdayData = {
  name: "Sarah",
  birthday: "2026-09-20",
  photos: [
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=400&h=500&fit=crop",
  ],
  memories: [
    "One of my favourite memories ❤️",
    "That smile...",
    "A moment I'll always remember.",
    "Some moments deserve to stay forever.",
  ],
  specialReasons: [
    { title: "Your Smile", message: "The way you smile lights up any room and makes my heart skip a beat every single time." },
    { title: "Your Nature", message: "Your kindness and warmth towards everyone you meet is truly inspiring and beautiful." },
    { title: "Your Little Things", message: "It's the little things you do—the way you laugh, how you listen, your tiny gestures of love." },
    { title: "The Way You Care", message: "You care so deeply about the people you love. Your compassion is one of your greatest gifts." },
    { title: "The Way You Make Me Feel", message: "You make me feel like the luckiest person alive. Every moment with you feels like a gift." },
  ],
  loveLetter: `Happy Birthday ❤️

I don't know if words will ever be enough to explain how special you are to me.

You have a way of making ordinary moments feel special, and somehow your presence can make a normal day a little better.

Today, I just want you to know that you are genuinely precious to me.

I hope this new year of your life brings you endless reasons to smile, beautiful memories, and everything your heart wishes for.

Keep smiling.
Keep being you.

Happy Birthday, Sarah. ❤️`,
  finalMessage: `20 September will always be a little more special because it's your day.`,
  song: "/assets/birthday-song.mp3",
};

// Floating Particles Component
const FloatingParticles = ({ count = 30, type = "heart" }) => {
  const particles = Array.from({ length: count });
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random() * 0.6 + 0.2,
          }}
        >
          {type === "heart" ? (
            <Heart size={Math.random() * 12 + 6} className="text-pink-400 fill-pink-400" />
          ) : (
            <div className="w-1 h-1 bg-gradient-to-r from-pink-300 to-red-300 rounded-full blur-sm" />
          )}
        </div>
      ))}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(20px); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

// Countdown Component
const Countdown = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    const calculateCountdown = () => {
      const birthday = new Date('2026-09-20').getTime();
      const now = new Date().getTime();
      const difference = birthday - now;

      if (difference <= 0) {
        setIsToday(true);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isToday) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center px-4 py-20">
        <FloatingParticles count={40} />
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12 text-center max-w-md w-full">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Today is <span className="text-pink-400 font-semibold">YOUR</span> day
          </h2>
          <Heart className="w-12 h-12 text-pink-400 mx-auto fill-pink-400 mt-8" />
        </div>
        <div className="fixed bottom-8 left-8 text-xs text-white/40">✨ Birthday Time!</div>
      </section>
    );
  }

  const TimerCard = ({ label, value }) => (
    <div className="backdrop-blur-xl bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-400/30 rounded-xl p-4 md:p-6 flex flex-col items-center min-w-20">
      <span className="text-3xl md:text-4xl font-light text-white mb-2">{String(value).padStart(2, '0')}</span>
      <span className="text-xs md:text-sm text-pink-300/80">{label}</span>
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center px-4 py-20">
      <FloatingParticles count={35} />
      <div className="text-center max-w-2xl w-full">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-12 tracking-wide">
          The countdown to your special day...
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <TimerCard label="Days" value={time.days} />
          <TimerCard label="Hours" value={time.hours} />
          <TimerCard label="Minutes" value={time.minutes} />
          <TimerCard label="Seconds" value={time.seconds} />
        </div>
      </div>
    </section>
  );
};

// Intro Section
const Intro = ({ onEnter }) => {
  const [particlesReady, setParticlesReady] = useState(true);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <FloatingParticles count={50} />
      <div className="text-center max-w-xl">
        <p className="text-lg md:text-xl text-white/70 mb-12 tracking-wide font-light">
          Someone special has a surprise waiting for you...
        </p>
        <button
          onClick={onEnter}
          className="group relative px-8 md:px-12 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-light text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50 active:scale-95"
        >
          Enter My Little Surprise ❤️
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-0 group-hover:opacity-50 blur-lg transition-opacity -z-10" />
        </button>
      </div>
    </section>
  );
};

// Name Reveal
const NameReveal = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center px-4 py-20">
      <FloatingParticles count={40} />
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-light text-white mb-8">Happy Birthday</h1>
        {showName && (
          <div className="animate-fade-in-up">
            <h2 className="text-6xl md:text-7xl font-light bg-gradient-to-r from-pink-300 via-pink-400 to-red-400 bg-clip-text text-transparent mb-8">
              {birthdayData.name} ❤️
            </h2>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
              Today isn't just another day.
              <br />
              It's the day someone very special came into this world.
            </p>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
      `}</style>
    </section>
  );
};

// Photo Gallery
const PhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + birthdayData.photos.length) % birthdayData.photos.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % birthdayData.photos.length);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-12 text-center">Our Memories</h2>
        
        {/* Main Photo */}
        <div className="relative mb-8 aspect-square md:aspect-video rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-400/20">
          <img
            src={birthdayData.photos[activeIndex]}
            alt={`Memory ${activeIndex + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%231a1a2e' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23666' font-family='sans-serif'%3EPhoto%3C/text%3E%3C/svg%3E";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 text-white font-light text-lg">
            {birthdayData.memories[activeIndex]}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={handlePrev}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/20"
          >
            ← Previous
          </button>
          <div className="flex gap-2 items-center">
            {birthdayData.photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === activeIndex ? 'bg-pink-400 w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/20"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

// Why You're Special
const SpecialReasons = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center px-4 py-20">
      <FloatingParticles count={25} />
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-12 text-center">
          Do you know why you're special?
        </h2>
        <div className="grid gap-4 md:gap-6">
          {birthdayData.specialReasons.map((reason, i) => (
            <div
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="backdrop-blur-xl bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-400/30 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-pink-400/50 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-red-500/20"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-light text-pink-300">{reason.title}</h3>
                <span className="text-pink-400 text-xl">
                  {openIndex === i ? '−' : '+'}
                </span>
              </div>
              {openIndex === i && (
                <p className="mt-4 text-white/70 font-light leading-relaxed animate-fade-in">
                  {reason.message}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Love Letter
const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center px-4 py-20">
      <FloatingParticles count={30} />
      
      {!isOpen ? (
        <div className="text-center max-w-md">
          <div className="mb-8">
            <div className="w-32 h-40 mx-auto bg-gradient-to-b from-pink-100 to-white rounded-lg shadow-2xl flex items-center justify-center relative transform -rotate-3">
              <Heart className="w-12 h-12 text-pink-400 fill-pink-400" />
              <div className="absolute inset-0 rounded-lg border-2 border-pink-200 opacity-50" />
            </div>
          </div>
          <p className="text-white/70 mb-8 text-lg font-light">I wrote something for you...</p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-light text-lg transition-all hover:shadow-2xl hover:shadow-pink-500/50 active:scale-95"
          >
            Open My Heart 💌
          </button>
        </div>
      ) : (
        <div className="w-full max-w-2xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-light text-white mb-8 text-center">A Letter From My Heart</h3>
          <div className="text-white/80 whitespace-pre-line font-light leading-relaxed text-center">
            {birthdayData.loveLetter}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-8 mx-auto block px-6 py-2 text-white/60 hover:text-white/100 transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
};

// Birthday Cake
const BirthdayCake = () => {
  const [candles, setCandles] = useState(true);
  const [showWishMade, setShowWishMade] = useState(false);

  const handleBlowCandles = () => {
    setCandles(false);
    setTimeout(() => setShowWishMade(true), 1000);
  };

  if (showWishMade) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center px-4 py-20">
        <FloatingParticles count={60} type="sparkle" />
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Wish made?</h2>
          <Heart className="w-16 h-16 text-pink-400 fill-pink-400 mx-auto mt-8 animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md">
        {/* Simple Cake */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-32 h-40">
            {/* Cake body */}
            <div className="absolute bottom-0 left-0 right-0 w-full bg-gradient-to-b from-pink-300 to-pink-500 rounded-3xl h-24">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl" />
            </div>
            
            {/* Candles */}
            {candles && (
              <div className="absolute top-0 left-0 right-0 flex justify-around px-4">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-1 h-8 bg-yellow-200" />
                    <div className="w-3 h-4 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full animate-pulse" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="text-white/70 mb-8 text-lg font-light">Make a wish...</p>
        <button
          onClick={handleBlowCandles}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-light text-lg transition-all hover:shadow-2xl hover:shadow-pink-500/50 active:scale-95"
        >
          Blow the candles 🎂
        </button>
      </div>
    </section>
  );
};

// Gift Reveal
const SecretGift = ({ onOpen }) => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center px-4 py-20">
      <FloatingParticles count={35} />
      <div className="text-center max-w-md">
        <div className="mb-12 flex justify-center">
          <div className="w-24 h-28 bg-gradient-to-b from-red-400 to-red-600 rounded-lg relative transform hover:scale-105 transition-transform">
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-t-lg flex items-center justify-center">
              <div className="w-20 h-6 bg-yellow-200 rounded-full" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white/80 fill-white/80" />
            </div>
          </div>
        </div>

        <p className="text-white/70 mb-8 text-lg font-light">
          Wait... there's one more surprise.
        </p>
        <button
          onClick={onOpen}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-light text-lg transition-all hover:shadow-2xl hover:shadow-pink-500/50 active:scale-95"
        >
          Open it 🎁
        </button>
      </div>
    </section>
  );
};

// Final Message
const FinalMessage = ({ onReplay }) => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black flex items-center justify-center px-4 py-20">
      <FloatingParticles count={50} />
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-light text-white mb-8">
          Happy Birthday,<br />
          <span className="text-pink-400">My Favourite Person</span> ❤️
        </h1>
        
        <p className="text-white/70 text-xl md:text-2xl font-light mb-8 leading-relaxed">
          {birthdayData.finalMessage}
        </p>

        <p className="text-white/60 text-lg font-light mb-12">
          I wish you a year filled with beautiful moments,<br />
          endless smiles, and all the love in the world.
        </p>

        <button
          onClick={onReplay}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-light text-lg transition-all hover:shadow-2xl hover:shadow-pink-500/50 active:scale-95"
        >
          Replay Our Little Story ❤️
        </button>
      </div>
    </section>
  );
};

// Music Player
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-3 z-50">
      <audio ref={audioRef} src={birthdayData.song} loop />
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="text-white hover:text-pink-400 transition-colors"
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
};

// Progress Indicator
const ProgressIndicator = ({ activeSection, totalSections }) => {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {Array.from({ length: totalSections }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
            i === activeSection
              ? 'bg-pink-400 w-8 h-2'
              : 'bg-white/30 hover:bg-white/50'
          }`}
          onClick={() => {
            document.getElementById(`section-${i}`)?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ))}
    </div>
  );
};

// Main App Component
export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showBirthday, setShowBirthday] = useState(false);

  const sections = [
    { id: 'intro', component: <Intro onEnter={() => setShowBirthday(true)} /> },
    { id: 'countdown', component: <Countdown /> },
    { id: 'name-reveal', component: <NameReveal /> },
    { id: 'gallery', component: <PhotoGallery /> },
    { id: 'special-reasons', component: <SpecialReasons /> },
    { id: 'love-letter', component: <LoveLetter /> },
    { id: 'cake', component: <BirthdayCake /> },
    { id: 'gift', component: <SecretGift onOpen={() => setCurrentSection(8)} /> },
    { id: 'final', component: <FinalMessage onReplay={() => setCurrentSection(0)} /> },
  ];

  if (!showBirthday) {
    return sections[0].component;
  }

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <ProgressIndicator activeSection={currentSection} totalSections={sections.length} />
      <MusicPlayer />

      {sections.map((section, idx) => (
        <div
          key={idx}
          id={`section-${idx}`}
          onViewportEnter={() => setCurrentSection(idx)}
          className="scroll-mt-0"
        >
          {section.component}
        </div>
      ))}

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
          html {
            scroll-behavior: auto;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(20px); opacity: 0.8; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(244, 114, 182, 0.4);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(244, 114, 182, 0.6);
        }
      `}</style>
    </div>
  );
}
