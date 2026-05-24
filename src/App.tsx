import {
  ArrowUpRight,
  Sparkle,
  Palette,
  PenTool,
  Layers,
  Type,
  Aperture,
  Camera,
  Brush,
  Box,
  Wand2,
} from 'lucide-react'

// Custom SVGs for icons not present in lucide-react version
const Figma = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H10v5H7.5A2.5 2.5 0 0 1 5 5.5z" />
    <path d="M12 5.5A2.5 2.5 0 0 1 14.5 3H17v5h-2.5A2.5 2.5 0 0 1 12 5.5z" />
    <path d="M5 12.5A2.5 2.5 0 0 1 7.5 10H10v5H7.5A2.5 2.5 0 0 1 5 12.5z" />
    <path d="M12 12.5A2.5 2.5 0 0 1 14.5 10H17v5h-2.5A2.5 2.5 0 0 1 12 12.5z" />
    <path d="M5 19.5A2.5 2.5 0 0 1 7.5 17H10v2.5a2.5 2.5 0 0 1-5 0z" />
  </svg>
)

const Framer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 2h14v10H5L12 19V12H5z" />
  </svg>
)

const Chrome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" y1="8" x2="12" y2="8" />
    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
  </svg>
)

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Figma,
  Framer,
  Palette,
  PenTool,
  Layers,
  Type,
  Aperture,
  Chrome,
  Camera,
  Brush,
  Box,
  Wand2,
}

function App() {
  const row1 = ['Figma', 'Framer', 'Palette', 'PenTool', 'Layers', 'Type', 'Aperture', 'Chrome']
  const row2 = ['Camera', 'Brush', 'Box', 'Wand2', 'Figma', 'Framer', 'Type', 'Layers']

  return (
    <div className="min-h-screen lg:h-screen w-full bg-[#0a0a0a] text-white font-sans antialiased flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10">
      
      {/* Header Row */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 lg:mb-10 w-full max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-normal tracking-tight mb-3">
            Hi, I'm Murad Sheikh!
          </h1>
          <p className="text-sm md:text-[15px] leading-[1.6] text-white/60">
            A London-based independent creator shaping sharp visual systems, web-ready products, and story-first campaigns. With a decade of craft behind me, I help ideas move with focus and intention.
          </p>
        </div>
        <button className="liquid-glass text-white text-xs sm:text-sm font-medium rounded-full px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-white/[0.05] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.02)] cursor-pointer whitespace-nowrap active:scale-95">
          Let's Team Up Today
        </button>
      </header>

      {/* Bento Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:flex-1 lg:min-h-0 w-full max-w-[1400px] mx-auto">
        
        {/* Column 1 - Background & Career Timeline */}
        <div className="rounded-2xl bg-black relative overflow-hidden flex flex-col justify-between p-5 md:p-6 min-h-[340px] lg:h-full group border border-white/[0.05]">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/90"></div>
          </div>

          {/* Top Section */}
          <div className="relative z-10 flex items-center justify-center gap-2">
            <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
            <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-medium">
              BACKGROUND
            </span>
            <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
          </div>

          {/* Bottom Section: Career Timeline */}
          <div className="relative z-10 w-full bg-white/[0.02] backdrop-blur-md rounded-xl border border-white/[0.06] p-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <div className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-x-3 gap-y-3.5">
              {/* Row 1 */}
              <div className="text-[12px] font-mono tracking-tight text-white/60">2023-Now</div>
              <div>
                <Sparkle className="h-3 w-3 text-white/60" strokeWidth={1.5} />
              </div>
              <div className="text-[13px] font-medium text-white/90">Freelance Creative</div>
              <div className="text-[12px] text-white/50 text-right">Solo Studio</div>

              {/* Divider */}
              <div className="col-span-4 h-[1px] bg-white/[0.06]"></div>

              {/* Row 2 */}
              <div className="text-[12px] font-mono tracking-tight text-white/60">2020-2023</div>
              <div>
                <Sparkle className="h-3 w-3 text-white/60" strokeWidth={1.5} />
              </div>
              <div className="text-[13px] font-medium text-white/90">Head of Brand Design</div>
              <div className="text-[12px] text-white/50 text-right">Rove Studio</div>

              {/* Divider */}
              <div className="col-span-4 h-[1px] bg-white/[0.06]"></div>

              {/* Row 3 */}
              <div className="text-[12px] font-mono tracking-tight text-white/60">2017-2020</div>
              <div>
                <Sparkle className="h-3 w-3 text-white/60" strokeWidth={1.5} />
              </div>
              <div className="text-[13px] font-medium text-white/90">Visual Stylist</div>
              <div className="text-[12px] text-white/50 text-right">Ember Works</div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 md:gap-5 lg:h-full md:grid md:grid-rows-[auto_1fr]">
          
          {/* Top - Client Voice Card */}
          <div className="rounded-2xl bg-[#324444] p-5 md:p-6 noise-overlay relative overflow-hidden border border-white/[0.06] flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.15)] min-h-[190px]">
            {/* Top Section */}
            <div className="flex items-center justify-start gap-2 mb-4 relative z-10">
              <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
              <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-medium">
                CLIENT VOICE
              </span>
            </div>

            {/* Quote */}
            <p className="text-[13px] sm:text-[13.5px] leading-[1.6] text-white/85 relative z-10 italic">
              "Murad reshaped our image with a degree of finesse and vision that surpassed what we'd hoped for. The process felt graceful, and the outcomes speak for themselves."
            </p>

            {/* Attribution */}
            <div className="mt-4 text-[12px] text-white/60 relative z-10">
              <strong className="text-white font-semibold">Elena Brooks</strong>, Creative Director — Halcyon
            </div>
          </div>

          {/* Bottom - 10M+ Card */}
          <div className="rounded-2xl bg-black relative overflow-hidden flex flex-col justify-between p-5 md:p-6 min-h-[220px] lg:h-full group border border-white/[0.05]">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/90"></div>
            </div>

            <div />

            {/* Centered Huge Text */}
            <div className="relative z-10 text-center my-auto">
              <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-light tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                10M+
              </h3>
            </div>

            {/* Caption */}
            <p className="relative z-10 text-center text-[13px] sm:text-sm text-white/85 font-medium tracking-wide">
              Raised for startups
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 md:gap-5 lg:h-full md:grid md:grid-rows-[1fr_auto]">
          
          {/* Top - Daily Software Card */}
          <div className="rounded-2xl bg-black relative overflow-hidden flex flex-col justify-between p-5 min-h-[260px] lg:h-full group border border-white/[0.05]">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/90"></div>
            </div>

            {/* Label */}
            <div className="relative z-10 flex items-center justify-center gap-2">
              <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-medium">
                DAILY SOFTWARE
              </span>
            </div>

            {/* Marquee Container */}
            <div className="relative z-10 flex flex-col gap-3.5 my-auto py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              {/* Row 1 - left */}
              <div className="flex w-max gap-3.5 animate-marquee-left">
                {row1.map((name, i) => {
                  const Icon = iconMap[name]
                  return (
                    <div
                      key={`r1-${i}`}
                      className="liquid-glass flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-xl border border-white/[0.08] hover:bg-white/[0.05] transition-colors duration-300 flex-shrink-0"
                    >
                      {Icon && <Icon className="h-6 w-6 text-white/80" strokeWidth={1.5} />}
                    </div>
                  )
                })}
                {row1.map((name, i) => {
                  const Icon = iconMap[name]
                  return (
                    <div
                      key={`r1-dup-${i}`}
                      className="liquid-glass flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-xl border border-white/[0.08] hover:bg-white/[0.05] transition-colors duration-300 flex-shrink-0"
                    >
                      {Icon && <Icon className="h-6 w-6 text-white/80" strokeWidth={1.5} />}
                    </div>
                  )
                })}
              </div>

              {/* Row 2 - right */}
              <div className="flex w-max gap-3.5 animate-marquee-right">
                {row2.map((name, i) => {
                  const Icon = iconMap[name]
                  return (
                    <div
                      key={`r2-${i}`}
                      className="liquid-glass flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-xl border border-white/[0.08] hover:bg-white/[0.05] transition-colors duration-300 flex-shrink-0"
                    >
                      {Icon && <Icon className="h-6 w-6 text-white/80" strokeWidth={1.5} />}
                    </div>
                  )
                })}
                {row2.map((name, i) => {
                  const Icon = iconMap[name]
                  return (
                    <div
                      key={`r2-dup-${i}`}
                      className="liquid-glass flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-xl border border-white/[0.08] hover:bg-white/[0.05] transition-colors duration-300 flex-shrink-0"
                    >
                      {Icon && <Icon className="h-6 w-6 text-white/80" strokeWidth={1.5} />}
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div />
          </div>

          {/* Bottom - Reach Me Card */}
          <div className="rounded-2xl bg-[#324444] p-5 md:p-6 noise-overlay relative overflow-hidden border border-white/[0.06] flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.15)] min-h-[160px]">
            {/* Top Section */}
            <div className="flex items-center justify-start gap-2 mb-4 relative z-10">
              <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
              <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-medium">
                REACH ME
              </span>
            </div>

            {/* Email and Phone */}
            <div className="flex flex-col gap-2 relative z-10">
              <a
                href="mailto:murad.smartlab@gmail.com"
                className="text-[20px] sm:text-2xl font-light text-white tracking-tight hover:text-white/85 transition-colors w-fit"
              >
                murad.smartlab@gmail.com
              </a>
              <span className="text-[14px] text-white/60 tracking-wider">
                +8801310074741
              </span>
            </div>

            {/* Top-Right Arrow Button */}
            <a
              href="mailto:murad.smartlab@gmail.com"
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group z-10"
              aria-label="Send email"
            >
              <ArrowUpRight className="h-4 w-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
            </a>
          </div>
        </div>

      </main>

      {/* Footer copyright for layout balance */}
      <footer className="w-full text-center text-[11px] text-white/30 mt-6 lg:mt-8 tracking-wider uppercase">
        © {new Date().getFullYear()} Murad Sheikh. All rights reserved.
      </footer>
      
    </div>
  )
}

export default App
