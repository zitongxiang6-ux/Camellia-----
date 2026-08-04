import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillMatrix = [
  {
    category: 'CRM产品',
    skills: ['DMS经销商管理', 'SFA销售自动化', '客户管理', '订单管理', '合同管理'],
  },
  {
    category: '产品管理',
    skills: ['需求分析', '竞品调研', '原型设计', '数据分析', '用户研究', '产品规划'],
  },
  {
    category: '行业知识',
    skills: ['智能家居', '快消品', '智慧养老', 'B端产品', '国际化产品'],
  },
  {
    category: '工具方法',
    skills: ['Axure', 'Figma', 'SQL', '数据分析', '敏捷开发', 'PMP项目管理'],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title
      gsap.from('.skills-title', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });

      // Skill matrix cards
      gsap.from('.skill-category-card', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.skills-matrix', start: 'top 80%' },
      });

      // Skill tags within cards
      gsap.from('.skill-category-card .skill-tag', {
        scale: 0.9,
        opacity: 0,
        duration: 0.3,
        stagger: 0.04,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.skills-matrix', start: 'top 75%' },
      });

      // Education cards
      gsap.from('.education-card', {
        x: 40,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.education-section', start: 'top 80%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative bg-[#2C2825] pt-[clamp(4rem,10vw,8rem)] pb-[clamp(4rem,10vw,6rem)]"
      style={{
        clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 96%)',
        marginTop: '-4rem',
        marginBottom: '-4rem',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <span className="section-label text-[#D4A76A]">技能与教育 · SKILLS</span>
          <h2 className="text-h2 text-[#FAF6F1] mt-3">专业积累</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Skill Matrix */}
          <div className="skills-matrix">
            <h3 className="text-[1.125rem] font-semibold text-[#FAF6F1] mb-6">
              核心技能
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillMatrix.map((cat) => (
                <div
                  key={cat.category}
                  className="skill-category-card bg-[rgba(255,255,255,0.05)] rounded-[12px] p-5"
                >
                  <h4 className="text-[0.875rem] font-semibold text-[#D4A76A] mb-3">
                    {cat.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag bg-[rgba(212,167,106,0.15)] text-[#D4A76A] text-[0.8rem] px-3 py-1 rounded-[16px] font-medium hover:bg-[rgba(212,167,106,0.3)] hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-8">
              <h4 className="text-[1rem] font-semibold text-[#FAF6F1] mb-3">
                工具与方法
              </h4>
              <p className="text-[0.875rem] text-[#A39C95]">
                Axure · Figma · JIRA · Confluence · PMP方法论 · 敏捷开发
              </p>
            </div>
          </div>

          {/* Right - Education + Certificate */}
          <div className="education-section">
            {/* Education Card */}
            <div className="education-card bg-[rgba(255,255,255,0.05)] rounded-[14px] p-6 border border-[rgba(212,167,106,0.2)]">
              <GraduationCap size={28} className="text-[#D4A76A]" />
              <h4 className="text-[1.125rem] font-semibold text-[#FAF6F1] mt-3">
                西安电子科技大学
              </h4>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-[rgba(212,167,106,0.2)] text-[#D4A76A] text-[0.75rem] px-2 py-0.5 rounded">
                  211院校
                </span>
              </div>
              <p className="text-[0.9375rem] text-[#A39C95] mt-2">
                本科 · 电子商务
              </p>
              <p className="text-[0.875rem] text-[#6B6560] mt-1">
                2015.09 — 2019.06
              </p>
            </div>

            {/* Certificate Card */}
            <div className="education-card bg-[rgba(255,255,255,0.05)] rounded-[14px] p-6 border border-[rgba(212,167,106,0.2)] mt-6">
              <Award size={28} className="text-[#D4A76A]" />
              <h4 className="text-[1.125rem] font-semibold text-[#FAF6F1] mt-3">
                PMP项目管理证书
              </h4>
              <p className="text-[0.875rem] text-[#A39C95] mt-2">
                Project Management Professional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
