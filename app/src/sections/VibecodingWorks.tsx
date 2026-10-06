import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Bot,
  CheckCircle2,
  Clock3,
  Database,
  FileSearch,
  MessagesSquare,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: '1,000+', label: '产品款数' },
  { value: '2,000+', label: '知识文档' },
  { value: '90%', label: '回答准确率' },
  { value: '30秒内', label: '单次资料查询' },
];

const capabilities = [
  {
    icon: MessagesSquare,
    title: '自然语言问答',
    desc: '让一线人员直接用业务语言查询产品与制度资料',
  },
  {
    icon: Bot,
    title: '多轮追问',
    desc: '保留上下文，围绕同一问题继续补充和澄清',
  },
  {
    icon: FileSearch,
    title: '原文溯源',
    desc: '回答关联原始资料，便于核对依据和控制风险',
  },
  {
    icon: Database,
    title: '持续维护',
    desc: '把分散文档沉淀为可复用、可迭代的企业知识资产',
  },
];

export default function VibecodingWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ai-case-header', {
        y: 32,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });

      gsap.from('.ai-case-panel', {
        y: 44,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ai-case-panel', start: 'top 82%' },
      });

      gsap.from('.ai-metric', {
        y: 16,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ai-metrics', start: 'top 85%' },
      });

      gsap.from('.ai-capability', {
        y: 20,
        opacity: 0,
        duration: 0.45,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ai-capabilities', start: 'top 88%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="works"
      className="bg-[#F2EDE6] py-[clamp(4rem,8vw,8rem)]"
    >
      <div className="section-container">
        <div className="ai-case-header text-center mb-12">
          <span className="section-label">AI实践 · AI PRODUCT CASE</span>
          <h2 className="text-h2 text-[#2C2825] mt-3">
            把企业知识变成一线可用的产品
          </h2>
          <p className="text-body text-[#6B6560] mt-4 max-w-2xl mx-auto leading-[1.8]">
            从0到1规划并上线CRM知识问答Agent，让产品资料和业务文档从“分散存放”变成可查询、可追溯、可持续维护的知识服务。
          </p>
          <div className="w-12 h-[3px] bg-[#B07D4A] mt-6 mx-auto" />
        </div>

        <div className="ai-case-panel overflow-hidden rounded-2xl bg-white shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr]">
            <div className="p-7 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(107,158,120,0.12)] px-3 py-1.5 text-[0.75rem] font-medium text-[#527B5D]">
                <span className="h-2 w-2 rounded-full bg-[#6B9E78]" />
                已上线 · CRM知识问答Agent
              </div>
              <h3 className="mt-5 text-[clamp(1.5rem,3vw,2rem)] font-bold text-[#2C2825]">
                让找资料从3—5分钟缩短到30秒内
              </h3>
              <p className="mt-4 text-[0.9375rem] leading-[1.8] text-[#6B6560]">
                围绕一线业务高频查询场景，完成知识范围梳理、问答链路设计、效果验证与上线迭代，在提升响应效率的同时保留原文依据。
              </p>
              <div className="mt-6 space-y-3">
                {[
                  '支持自然语言提问、多轮追问和原文溯源',
                  '覆盖产品资料与业务文档，服务一线业务查询',
                  '平衡回答效果、维护成本与业务风险',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-[#6B9E78]" />
                    <span className="text-[0.9rem] leading-[1.7] text-[#6B6560]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ai-metrics grid grid-cols-2 gap-px bg-[rgba(255,255,255,0.08)] p-px lg:gap-4 lg:bg-[#2C2825] lg:p-6">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="ai-metric flex min-h-[132px] flex-col justify-center bg-[#2C2825] p-6 lg:min-h-0 lg:rounded-xl lg:bg-[rgba(255,255,255,0.06)]"
                >
                  <span className="font-data text-[clamp(1.65rem,3vw,2.25rem)] font-bold text-[#D4A76A]">
                    {metric.value}
                  </span>
                  <span className="mt-2 text-[0.8rem] text-[#A39C95]">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ai-capabilities mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <div key={capability.title} className="ai-capability rounded-xl bg-white p-5 shadow-[0_1px_3px_rgba(44,40,37,0.06)]">
              <capability.icon size={24} className="text-[#B07D4A]" />
              <h3 className="mt-4 text-[1rem] font-semibold text-[#2C2825]">{capability.title}</h3>
              <p className="mt-2 text-[0.82rem] leading-[1.7] text-[#6B6560]">{capability.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-[0.82rem] text-[#A39C95]">
          <Clock3 size={16} className="text-[#B07D4A]" />
          查询效率提升80%以上
        </div>
      </div>
    </section>
  );
}
