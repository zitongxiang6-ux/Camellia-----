import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Phone, Mail, MessageCircle, FileDown } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameLabelRef = useRef<HTMLDivElement>(null);
  const nameCnRef = useRef<HTMLHeadingElement>(null);
  const nameEnRef = useRef<HTMLParagraphElement>(null);
  const titleBadgeRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(nameLabelRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.4)
        .to(nameCnRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.5)
        .to(nameEnRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.65)
        .to(titleBadgeRef.current, { opacity: 1, x: 0, duration: 0.5 }, 0.8)
        .to(introRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.95)
        .to(statsRef.current, { opacity: 1, y: 0, duration: 0.5 }, 1.1)
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, 1.3)
        .to(portraitRef.current, { opacity: 1, x: 0, duration: 0.8 }, 1.0)
        .to(scrollHintRef.current, { opacity: 1, duration: 0.5 }, 1.5);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { number: '7', label: '年产品经验' },
    { number: '300%', label: '订单效率提升' },
    { number: '90%', label: 'Agent准确率' },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] bg-[#2C2825] flex items-center overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C2825] via-[#2C2825] to-[#3D3630]" />

      <div className="relative z-10 section-container w-full py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[100dvh]">
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center pt-16 lg:pt-0">
            {/* Name Label */}
            <div
              ref={nameLabelRef}
              className="opacity-0 translate-y-4 text-[0.75rem] font-medium tracking-[0.12em] text-[#D4A76A] uppercase mb-4"
            >
              HELLO, I&apos;M
            </div>

            {/* Chinese Name */}
            <h1
              ref={nameCnRef}
              className="opacity-0 translate-y-8 text-display text-[#FAF6F1] font-bold"
            >
              向紫彤
            </h1>

            {/* English Name */}
            <p
              ref={nameEnRef}
              className="opacity-0 translate-y-4 font-display text-xl text-[#A39C95] mt-2"
            >
              Camellia Xiang
            </p>

            {/* Title Badge */}
            <div
              ref={titleBadgeRef}
              className="opacity-0 -translate-x-5 mt-6 inline-flex"
            >
              <span className="inline-block bg-[rgba(212,167,106,0.15)] text-[#D4A76A] text-[0.875rem] font-medium px-5 py-2 rounded-pill">
                产品经理 · Product Manager
              </span>
            </div>

            {/* Intro */}
            <p
              ref={introRef}
              className="opacity-0 translate-y-4 mt-6 text-[1.125rem] text-[#A39C95] leading-[1.7] max-w-lg"
            >
              7年产品经理经验，聚焦CRM与企业数字化，兼具标准化、国际化与AI产品落地实践
            </p>

            {/* Stats */}
            <div
              ref={statsRef}
              className="opacity-0 translate-y-4 mt-10 flex items-center"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center">
                  <div className="flex flex-col items-start pr-6">
                    <span className="font-data text-2xl font-bold text-[#D4A76A]">
                      {stat.number}
                    </span>
                    <span className="text-caption text-[#A39C95] mt-1">
                      {stat.label}
                    </span>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="w-px h-10 bg-[rgba(255,255,255,0.1)] mx-4" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="opacity-0 translate-y-4 mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="mailto:18292879652@163.com"
                className="inline-flex items-center bg-[#B07D4A] text-[#FAF6F1] px-7 py-3 rounded-lg font-medium text-[0.9375rem] hover:bg-[#8C5E2F] hover:scale-[1.02] transition-all duration-200"
              >
                联系我
              </a>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center border border-[rgba(255,255,255,0.2)] text-[#FAF6F1] px-7 py-3 rounded-lg font-medium text-[0.9375rem] hover:border-[rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-200"
              >
                查看经历
              </a>
              <a
                href={`${import.meta.env.BASE_URL}resume-crm.pdf`}
                download="向紫彤-产品经理简历.pdf"
                className="inline-flex items-center gap-2 border border-[rgba(255,255,255,0.2)] text-[#FAF6F1] px-5 py-3 rounded-lg font-medium text-[0.9375rem] hover:border-[rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-200"
              >
                <FileDown size={18} />
                下载简历
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-4 ml-2">
                <a
                  href="tel:18292879652"
                  className="text-[#A39C95] hover:text-[#D4A76A] transition-colors duration-200"
                  aria-label="Phone"
                >
                  <Phone size={20} />
                </a>
                <a
                  href="mailto:18292879652@163.com"
                  className="text-[#A39C95] hover:text-[#D4A76A] transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <span
                  className="text-[#A39C95] hover:text-[#D4A76A] transition-colors duration-200 cursor-pointer"
                  aria-label="WeChat"
                  title="Stong18292879652"
                >
                  <MessageCircle size={20} />
                </span>
              </div>
            </div>
          </div>

          {/* Right - Portrait */}
          <div
            ref={portraitRef}
            className="opacity-0 translate-x-[60px] order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative block */}
              <div className="absolute -bottom-4 -right-4 w-[120px] h-[120px] bg-[#B07D4A] opacity-15 rounded-xl -z-0" />
              {/* Portrait image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-[rgba(212,167,106,0.2)] max-h-[480px] w-auto">
                <img
                  src={`${import.meta.env.BASE_URL}portrait.jpg`}
                  alt="Camellia 职业照"
                  className="w-[280px] md:w-[350px] lg:w-auto h-[350px] md:h-[420px] lg:h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div
        ref={scrollHintRef}
        className="opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-10"
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleScrollDown()}
      >
        <span className="text-caption text-[#A39C95] mb-2">向下滚动</span>
        <ChevronDown size={20} className="text-[#A39C95] animate-bounce-slow" />
      </div>

      {/* Diagonal clip at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-[#FAF6F1]"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}
      />
    </section>
  );
}
