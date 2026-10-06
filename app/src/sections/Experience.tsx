import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    company: '广州河东科技有限公司杭州分公司',
    position: '产品经理',
    period: '2023.07 — 至今',
    isCurrent: true,
    bullets: [
      '负责公司内部自用CRM系统、国内与国际渠道商平台的产品设计与迭代，覆盖线索、客户、商机、产品、价格、订单、合同与售后等模块，并建设知识问答Agent',
      '拉通业务实现“规范化—线上化—数字化”，推动售前、售中、售后由分散线下协作转向统一线上协同，实现从线索到现金（LTC）全流程线上化',
      '推动国内数字化管理模式向国际业务复制，统一国内外业务口径、流程规则和数据标准',
      '将产品资料和业务文档沉淀为可复用、可持续维护的企业知识资产，提升一线业务响应效率',
    ],
    pills: ['LTC 全流程线上化', '国内外统一标准', '90% Agent准确率'],
  },
  {
    id: 2,
    company: '四川久远银海软件股份有限公司',
    position: '产品经理',
    period: '2020.11 — 2023.07',
    isCurrent: false,
    bullets: [
      '负责智慧养老产品在各个项目上的落地工作，主要包括：居家/社区智慧养老系统、养老从业人员培育系统、机构积分系统、智慧养老大屏等',
      '独立完成养老从业人员培育系统的需求调研、竞品分析、产品设计、上线与迭代工作',
      '2021年"护理学堂"上线浙里办APP',
      '2022年"护理学堂"被选作省民政厅首批全省推广两个场景之一，浙江省民政厅数字化改革全省八大优秀应用之一',
      '荣获2022年集团级优秀员工',
    ],
    pills: ['千万级 政府项目', '浙里办 上线', '全省推广'],
  },
  {
    id: 3,
    company: '成都博智维讯信息技术股份有限公司',
    position: '产品经理',
    period: '2019.10 — 2020.11',
    isCurrent: false,
    bullets: [
      '负责公司内商业化CRM标准产品的规划、定义、设计、发布、迭代工作，主导DMS经销商下单系统、SFA销售自动化模块，支持各个项目落地公司标准化产品',
      '签约五粮浓香系列酒、天味食品等客户，单项目金额200-400万',
      '研发行业级促销/返利双引擎，支撑客户实现：促销/返利活动配置时效从5天→30分钟，紧急营销需求响应率100%',
      '首次实现将移动访销与社交平台对接，实现用社交赋能外勤工作',
    ],
    pills: ['5天→30分钟 配置时效', '200-400万 单项目', '白酒SFA 行业首创'],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line scale
      gsap.from('.timeline-line', {
        scaleY: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Each experience card
      experiences.forEach((_, index) => {
        const cardEl = `.exp-card-${index}`;
        const dotEl = `.exp-dot-${index}`;
        const labelEl = `.exp-label-${index}`;
        const bulletEl = `.exp-bullets-${index}`;
        const pillsEl = `.exp-pills-${index}`;

        gsap.from(dotEl, {
          scale: 0,
          duration: 0.3,
          delay: index * 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: { trigger: cardEl, start: 'top 80%' },
        });

        gsap.from(cardEl, {
          x: 50,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: cardEl, start: 'top 80%' },
        });

        gsap.from(labelEl, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: cardEl, start: 'top 80%' },
        });

        gsap.from(`${bulletEl} li`, {
          y: 10,
          opacity: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: cardEl, start: 'top 75%' },
        });

        gsap.from(`${pillsEl} .data-pill`, {
          scale: 0.9,
          opacity: 0,
          duration: 0.3,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: pillsEl, start: 'top 85%' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="bg-[#F2EDE6] pt-[clamp(4rem,8vw,6rem)] pb-[clamp(4rem,8vw,6rem)]"
    >
      <div className="section-container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">工作经历 · EXPERIENCE</span>
          <h2 className="text-h2 text-[#2C2825] mt-3">职业成长路径</h2>
          <p className="text-body text-[#A39C95] mt-2">
            7年深耕产品，横跨智能家居、快消品与智慧养老
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline vertical line */}
          <div className="timeline-line absolute left-[22px] md:left-[26px] top-0 bottom-0 w-[2px] bg-[#E5DED6] origin-top" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8">
                {/* Time label - desktop */}
                <div className={`exp-label-${index} hidden md:block pt-4`}>
                  <span className="text-[0.875rem] font-medium text-[#B07D4A]">
                    {exp.period}
                  </span>
                </div>

                {/* Timeline dot + card wrapper */}
                <div className="flex gap-6">
                  {/* Dot */}
                  <div className="relative flex-shrink-0 pt-5">
                    <div
                      className={`exp-dot-${index} rounded-full z-10 relative ${
                        exp.isCurrent
                          ? 'w-4 h-4 bg-[#B07D4A] animate-pulse-dot'
                          : 'w-3 h-3 bg-[#B07D4A] border-2 border-[#F2EDE6]'
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`exp-card-${index} flex-1 bg-white rounded-[14px] p-6 md:p-8 shadow-timeline ${
                      exp.isCurrent ? 'border-l-4 border-l-[#B07D4A]' : 'border-l-4 border-l-[#E5DED6]'
                    }`}
                  >
                    {/* Period - mobile */}
                    <span className="md:hidden text-[0.875rem] font-medium text-[#B07D4A] block mb-2">
                      {exp.period}
                    </span>

                    {/* Company + position */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-h3 text-[#2C2825]">{exp.company}</h3>
                      {exp.isCurrent && (
                        <span className="bg-[rgba(176,125,74,0.12)] text-[#B07D4A] text-[0.75rem] px-2 py-0.5 rounded">
                          当前职位
                        </span>
                      )}
                    </div>
                    <p className="text-[1rem] font-medium text-[#6B6560] mb-4">
                      {exp.position}
                    </p>

                    {/* Bullets */}
                    <ul className={`exp-bullets-${index} space-y-2 mb-6`}>
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-[0.9375rem] text-[#6B6560] leading-[1.7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B07D4A] mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Pills */}
                    <div className={`exp-pills-${index} flex flex-wrap gap-2`}>
                      {exp.pills.map((pill) => (
                        <span key={pill} className="data-pill">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
