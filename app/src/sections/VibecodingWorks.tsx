import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Sparkles, Cpu, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    icon: Code,
    title: '智能工具站',
    desc: '基于LLM的实用工具集合，探索AI在生产力场景的应用',
    tags: ['React', 'OpenAI API', 'TypeScript'],
    status: '开发中',
    statusColor: '#6B9E78',
  },
  {
    icon: Sparkles,
    title: '数据可视化实验',
    desc: '用AI生成动态数据故事，让数据讲述动人的业务洞察',
    tags: ['D3.js', 'Animation', 'Data Story'],
    status: '规划中',
    statusColor: '#D4A76A',
  },
  {
    icon: Cpu,
    title: 'AI产品原型库',
    desc: '快速验证产品概念的交互原型集合，从想法到可点击Demo',
    tags: ['Figma-to-Code', 'LLM', 'Rapid Prototype'],
    status: '规划中',
    statusColor: '#D4A76A',
  },
];

export default function VibecodingWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Cards stagger animation
      gsap.from('.work-card', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
      });

      // CTA animation
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 90%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="works"
      className="bg-[#FAF6F1] py-[clamp(4rem,8vw,8rem)]"
    >
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="section-label">AI实践 · VIBECODING WORKS</span>
          <h2 className="text-h2 text-[#2C2825] mt-3">
            用AI构建，以代码创造
          </h2>
          <p className="text-body text-[#6B6560] mt-4 max-w-2xl mx-auto leading-[1.8]">
            探索AI辅助编程的无限可能，将创意快速转化为可交互的数字产品。以下是我的Vibecoding实验作品，展示如何用AI工具加速从想法到落地的全过程。
          </p>
          <div className="w-12 h-[3px] bg-[#B07D4A] mt-6 mx-auto" />
        </div>

        {/* Works Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {works.map((work) => (
            <div
              key={work.title}
              className="work-card group bg-white rounded-2xl p-6 lg:p-8 shadow-[0_1px_3px_rgba(44,40,37,0.06)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Icon & Status */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[rgba(176,125,74,0.1)] flex items-center justify-center group-hover:bg-[rgba(176,125,74,0.2)] transition-colors duration-300">
                  <work.icon
                    size={24}
                    className="text-[#B07D4A] group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${work.statusColor}20`,
                    color: work.statusColor,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: work.statusColor,
                      animation: work.status === '开发中' ? 'pulse 2s infinite' : 'none',
                    }}
                  />
                  {work.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2C2825] mb-2 group-hover:text-[#B07D4A] transition-colors duration-300">
                {work.title}
              </h3>

              {/* Description */}
              <p className="text-[0.875rem] text-[#6B6560] leading-[1.7] mb-5 flex-grow">
                {work.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {work.tags.map((tag) => (
                  <span key={tag} className="skill-tag text-[0.75rem]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow hint */}
              <div className="flex items-center gap-2 text-[0.8125rem] text-[#A39C95] group-hover:text-[#B07D4A] transition-colors duration-300">
                <span>敬请期待</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-[0.875rem] text-[#A39C95]">
            <Sparkles size={16} className="text-[#D4A76A]" />
            <span>新作品持续更新中...</span>
            <Sparkles size={16} className="text-[#D4A76A]" />
          </div>
        </div>
      </div>
    </section>
  );
}
