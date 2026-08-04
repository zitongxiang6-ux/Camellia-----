import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Calendar, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillTags = [
  'CRM系统',
  'DMS经销商管理',
  'SFA销售自动化',
  '从0到1产品设计',
  '国际化产品',
  '智慧养老',
  '数据驱动',
  '项目全生命周期',
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
              产品驱动，数据说话
            </h2>
            <div className="w-12 h-[3px] bg-[#B07D4A] mt-4" />
            <p className="text-body text-[#6B6560] mt-6 leading-[1.8]">
              6年产品经理工作经验，CRM智能家居、快消品行业产品经验。精通模块包括DMS（经销商管理系统）、SFA（销售自动化），核心功能涵盖客户管理、拜访管理、产品管理、价格管理、促销管理、项目管理、订单管理、合同管理等。实现标准化产品设计从0到1，服务客户包括五粮浓香系列酒、天味食品等。智能家居行业自研CRM系统从国内到国际版的产品设计经验，实现企业订单100%线上化和国际版本成功上线。智慧养老行业产品经验，独立负责千万级政府项目产品工作。
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
              Product manager (Camellia) with 6 years of experience specializing in CRM systems, smart home, and FMCG industries. Expert in DMS (Dealer Management System) and SFA (Sales Force Automation) modules. Proven track record of building products from 0 to 1, serving clients including Wuliangye and Teway Food. Successfully led international CRM platform launch with 100% online order digitalization and 300% efficiency improvement. Experienced in smart elderly care industry, independently managing government projects worth over 10 million RMB.
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
