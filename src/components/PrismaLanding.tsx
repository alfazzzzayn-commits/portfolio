import { useRef } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { AnimatedLetter } from './AnimatedLetter';

interface PrismaLandingProps {
  onBack: () => void;
}

export default function PrismaLanding({ onBack }: PrismaLandingProps) {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  
  // useScroll hook for the character opacity animation in the About section
  const { scrollYProgress } = useScroll({
    target: aboutSectionRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const aboutText =
    "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.";
  
  const chars = aboutText.split('');

  // 4-column card grid stagger definitions
  const featuresContainerRef = useRef<HTMLDivElement>(null);
  const isFeaturesInView = useInView(featuresContainerRef, { once: true, margin: '-100px' });

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="w-full min-h-screen bg-black text-[#E1E0CC] selection:bg-[#DEDBC8]/30 selection:text-[#E1E0CC] overflow-x-hidden relative">
      
      {/* Floating Back to Portfolio button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 flex items-center justify-center gap-2 px-4 py-2 bg-black/60 hover:bg-black/90 text-[#E1E0CC]/80 hover:text-white rounded-full border border-white/10 hover:border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer group"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs uppercase tracking-widest font-medium">Portfolio</span>
      </button>

      {/* ================= SECTION 1: HERO ================= */}
      <section className="h-screen w-full p-4 md:p-6 relative select-none">
        <div className="w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden relative flex flex-col justify-between bg-[#0a0a0a]">
          
          {/* Background Video */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Noise Overlay */}
          <div className="absolute inset-0 noise-overlay-direct opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />

          {/* Navbar */}
          <div className="absolute top-0 left-0 right-0 z-20 flex justify-center">
            <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 border-x border-b border-white/[0.05] flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 shadow-lg">
              {['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest hover:text-[#E1E0CC] transition-colors duration-300 font-medium py-1"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Dummy element for flex layout spacing */}
          <div />

          {/* Hero Content (bottom-aligned) */}
          <div className="relative z-20 p-6 sm:p-8 md:p-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
              
              {/* Giant Heading "Prisma*" */}
              <div className="lg:col-span-8 flex items-end">
                <WordsPullUp
                  text="Prisma"
                  showAsterisk={true}
                  className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] select-none text-[#E1E0CC] relative"
                />
              </div>

              {/* Right Column: Description + Button */}
              <div className="lg:col-span-4 flex flex-col gap-6 lg:pb-4 max-w-md">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="text-[#DEDBC8]/70 text-xs sm:text-sm md:text-base leading-[1.2]"
                >
                  Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                >
                  <button className="group flex items-center justify-between pl-6 pr-2 py-2 bg-[#DEDBC8] text-black rounded-full font-medium text-sm sm:text-base hover:gap-3 transition-all duration-300 w-fit cursor-pointer active:scale-95 shadow-md">
                    <span>Join the lab</span>
                    <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ml-4">
                      <ArrowRight className="h-4 w-4 text-[#DEDBC8]" />
                    </div>
                  </button>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: ABOUT ================= */}
      <section id="our-story" className="bg-black py-24 px-4 sm:px-6 md:px-12 flex justify-center w-full">
        <div 
          ref={aboutSectionRef} 
          className="bg-[#101010] rounded-[2rem] w-full max-w-6xl py-20 px-6 sm:px-12 md:px-24 flex flex-col items-center justify-center text-center border border-white/[0.03] shadow-2xl relative overflow-hidden"
        >
          {/* Label */}
          <span className="uppercase tracking-[0.25em] text-[10px] sm:text-xs text-[#DEDBC8] font-semibold mb-6">
            Visual arts
          </span>

          {/* Heading */}
          <div className="mb-10 w-full">
            <WordsPullUpMultiStyle
              segments={[
                { text: "I am Murad Sheikh, ", className: "font-normal text-[#E1E0CC] mr-1.5" },
                { text: "a self-taught web developer and designer. ", className: "italic font-serif text-[#E1E0CC] mr-1.5" },
                { text: "I specialize in building engaging digital experiences across Shopify and WordPress, while continuously leveling up my custom development capabilities.", className: "font-normal text-[#E1E0CC]" }
              ]}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] text-center"
            />
          </div>

          {/* Scroll-linked Opacity Reveal Paragraph */}
          <div className="max-w-2xl mx-auto mt-6">
            <p className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed tracking-wide text-center">
              {chars.map((char, index) => (
                <AnimatedLetter
                  key={index}
                  char={char}
                  index={index}
                  totalChars={chars.length}
                  progress={scrollYProgress}
                />
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: FEATURES ================= */}
      <section id="collective" className="min-h-screen bg-black py-24 px-4 sm:px-6 md:px-12 relative flex flex-col justify-center items-center w-full">
        {/* BG Noise */}
        <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
          {/* Header Text */}
          <div className="text-center mb-16 max-w-3xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Studio-grade workflows for visionary creators. ", className: "text-[#E1E0CC] block mb-2" },
                { text: "Built for pure vision. Powered by art.", className: "text-gray-500 block" }
              ]}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-center"
            />
          </div>

          {/* 4-Column Card Grid */}
          <motion.div
            ref={featuresContainerRef}
            variants={staggerContainer}
            initial="hidden"
            animate={isFeaturesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:h-[480px]"
          >
            
            {/* Card 1 - Video Card */}
            <motion.div
              variants={cardVariants}
              className="relative overflow-hidden rounded-2xl flex flex-col justify-end p-6 min-h-[340px] lg:h-full group border border-white/[0.05] shadow-lg"
            >
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <p className="relative z-20 text-[#E1E0CC] font-medium text-lg lg:text-xl">
                Your creative canvas.
              </p>
            </motion.div>

            {/* Card 2 - Project Storyboard */}
            <motion.div
              variants={cardVariants}
              className="bg-[#212121] rounded-2xl p-6 min-h-[340px] lg:h-full flex flex-col justify-between border border-white/[0.05] shadow-lg group hover:border-white/10 transition-colors"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                    alt="Storyboard icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover"
                  />
                  <span className="text-gray-500 font-mono text-sm tracking-wider">01</span>
                </div>
                <div>
                  <h3 className="text-[#E1E0CC] font-medium text-lg mb-4">Project Storyboard.</h3>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Visual layout templates",
                      "Asset tagging systems",
                      "Timeline scratchpads",
                      "Revisable frame locks"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-[#DEDBC8] flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-gray-400 text-xs sm:text-sm leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <a
                href="#learn-more-1"
                className="flex items-center gap-1.5 text-xs text-[#DEDBC8] hover:text-white transition-colors mt-6 font-medium w-fit group/link"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3.5 w-3.5 -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Card 3 - Smart Critiques */}
            <motion.div
              variants={cardVariants}
              className="bg-[#212121] rounded-2xl p-6 min-h-[340px] lg:h-full flex flex-col justify-between border border-white/[0.05] shadow-lg group hover:border-white/10 transition-colors"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                    alt="Critique icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover"
                  />
                  <span className="text-gray-500 font-mono text-sm tracking-wider">02</span>
                </div>
                <div>
                  <h3 className="text-[#E1E0CC] font-medium text-lg mb-4">Smart Critiques.</h3>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "AI compositional analysis",
                      "Creative note summaries",
                      "External tool integrations"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-[#DEDBC8] flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-gray-400 text-xs sm:text-sm leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="#learn-more-2"
                className="flex items-center gap-1.5 text-xs text-[#DEDBC8] hover:text-white transition-colors mt-6 font-medium w-fit group/link"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3.5 w-3.5 -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Card 4 - Immersion Capsule */}
            <motion.div
              variants={cardVariants}
              className="bg-[#212121] rounded-2xl p-6 min-h-[340px] lg:h-full flex flex-col justify-between border border-white/[0.05] shadow-lg group hover:border-white/10 transition-colors"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                    alt="Immersion icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover"
                  />
                  <span className="text-gray-500 font-mono text-sm tracking-wider">03</span>
                </div>
                <div>
                  <h3 className="text-[#E1E0CC] font-medium text-lg mb-4">Immersion Capsule.</h3>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Notification silencing filter",
                      "Ambient creative soundscapes",
                      "Production schedule syncing"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-[#DEDBC8] flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-gray-400 text-xs sm:text-sm leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="#learn-more-3"
                className="flex items-center gap-1.5 text-xs text-[#DEDBC8] hover:text-white transition-colors mt-6 font-medium w-fit group/link"
              >
                <span>Learn more</span>
                <ArrowRight className="h-3.5 w-3.5 -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Sleek copyright footer for Prisma */}
      <footer className="w-full text-center text-[10px] text-gray-600 pb-12 tracking-widest uppercase relative z-10">
        © {new Date().getFullYear()} Prisma Studio. All rights reserved.
      </footer>

    </div>
  );
}
