import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Calendar, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillTags = [
  'CRM系统',
  'DMS经销商管理',
  'SFA销售自动化',
  '企业数字化',
  '从0到1',
  '标准化与国际化',
  'AI Agent',
  '数据驱动',
];

const mbtiTraits = [
  { icon: Target, label: '目标感' },
  { icon: Calendar, label: '规划力' },
  { icon: Zap, label: '执行力' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content
      gsap.from(leftRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Right content
      gsap.from(rightRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.7,
        delay: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Skill tags stagger
      gsap.from('.skill-tag-item', {
        y: 15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 75%',
        },
      });

      // MBTI card scale in
      gsap.from('.mbti-card', {
        scale: 0.95,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#FAF6F1] pt-[clamp(4rem,8vw,8rem)] pb-[clamp(4rem,8vw,6rem)]"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Chinese */}
          <div ref={leftRef}>
            <span className="section-label">关于我 · ABOUT</span>
            <h2 className="text-h2 text-[#2C2825] mt-3">
              从业务经营到AI落地
            </h2>
            <div className="w-12 h-[3px] bg-[#B07D4A] mt-4" />
            <p className="text-body text-[#6B6560] mt-6 leading-[1.8]">
              7年产品经理经验，聚焦CRM、企业数字化、智能家居、快消品和智慧养老，具备B端商业化产品与自研产品的完整实践。主导CRM、DMS、SFA等产品规划与落地，覆盖线索、客户、商机、价格、订单、合同、促销、返利、拜访和售后等核心业务；拥有从0到1、标准化和国际化经验，并完成CRM知识问答Agent从规划到上线。
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {skillTags.map((tag) => (
                <span key={tag} className="skill-tag-item skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - English + MBTI */}
          <div ref={rightRef}>
            <h3 className="font-display text-[clamp(1.25rem,2vw,1.5rem)] font-semibold text-[#2C2825]">
              Professional Profile
            </h3>
            <p className="text-[0.9375rem] text-[#6B6560] leading-[1.8] mt-4">
              Product manager with 7 years of experience across CRM, enterprise digitalization, smart home, FMCG, and smart elderly care. Led CRM, DMS, and SFA products from planning to launch, including standardized and international solutions. Delivered 100% online order management, a 300% increase in order-processing efficiency, and a CRM knowledge Q&amp;A Agent with 90% answer accuracy.
            </p>

            {/* MBTI Card */}
            <div className="mbti-card mt-8 bg-white rounded-card p-6 shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-data text-[2rem] font-bold text-[#B07D4A]">ISTJ</span>
                <span className="text-[0.875rem] text-[#6B6560]">物流师型人格</span>
              </div>

              <div className="flex items-center gap-6 mb-4">
                {mbtiTraits.map((trait) => (
                  <div key={trait.label} className="flex items-center gap-2 group">
                    <trait.icon
                      size={20}
                      className="text-[#B07D4A] group-hover:scale-110 group-hover:text-[#D4A76A] transition-all duration-200"
                    />
                    <span className="text-[0.8rem] font-medium text-[#2C2825]">
                      {trait.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[0.875rem] text-[#A39C95] italic">
                &ldquo;以极强的目标感、规划力与执行力驱动每一个产品从概念到落地。&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
