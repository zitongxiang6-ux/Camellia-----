import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Globe,
  MessageCircle,
  Settings,
  Link,
  Award,
  Camera,
  Tag,
  RefreshCw,
  Bot,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const project1Metrics = [
  { value: '减少~30%', label: '操作步骤', desc: '下单链路优化' },
  { value: '100%', label: '订单线上化', desc: '订单在线管理' },
  { value: '18%', label: '转化提升', desc: '有效线索转商机' },
  { value: '90%', label: '回答准确率', desc: '知识问答Agent' },
  { value: '80%+', label: '查询效率', desc: '资料查询提效' },
  { value: '250家', label: '国际客户', desc: '在线下单' },
];

const project2Highlights = [
  { icon: MessageCircle, text: '结合企业微信，通过社交化方式赋能销售' },
  { icon: Settings, text: '拜访步骤可配置，支持八大步骤，适配4类酒业拜访场景' },
  { icon: Link, text: '开放标准接口，对接TPM模块，LBS定位+AI图像识别核销' },
  { icon: Award, text: '积分激励规则可配置，支持13类系统动作、3种积分指标' },
  { icon: Camera, text: '终端采集"定位+终端名称+OCR识别"验重方案' },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card 1
      gsap.from('.project-card-1', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.project-card-1', start: 'top 80%' },
      });
      gsap.from('.project-card-1 .project-img', {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        delay: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.project-card-1', start: 'top 80%' },
      });
      gsap.from('.project-card-1 .metric-item', {
        y: 15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.project-card-1 .metrics-grid', start: 'top 85%' },
      });

      // Card 2
      gsap.from('.project-card-2', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.project-card-2', start: 'top 80%' },
      });
      gsap.from('.project-card-2 .project-img', {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        delay: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.project-card-2', start: 'top 80%' },
      });
      gsap.from('.project-card-2 .highlight-item', {
        x: -15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.project-card-2 .highlights-list', start: 'top 85%' },
      });

      // Card 3
      gsap.from('.project-card-3', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.project-card-3', start: 'top 80%' },
      });
      gsap.from('.project-card-3 .project-img', {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        delay: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.project-card-3', start: 'top 80%' },
      });
      gsap.from('.project-card-3 .engine-card', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.project-card-3 .engine-cards', start: 'top 85%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-[#FAF6F1] pt-[clamp(4rem,8vw,6rem)] pb-[clamp(4rem,8vw,6rem)]"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">核心项目 · PROJECTS</span>
          <h2 className="text-h2 text-[#2C2825] mt-3">从0到1的产品实践</h2>
          <p className="text-body text-[#A39C95] mt-2">
            三个行业标杆级产品的完整产品链路
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {/* Project 1: CRM */}
          <div className="project-card-1 bg-white rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-0">
              {/* Image */}
              <div className="relative project-img">
                <img
                  src={`${import.meta.env.BASE_URL}project-crm.jpg`}
                  alt="智能家居CRM平台"
                  className="w-full h-[240px] md:h-[320px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[rgba(44,40,37,0.8)] px-4 py-3">
                  <span className="text-[0.875rem] text-[#FAF6F1]">
                    智能家居行业 · CRM平台
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-[1.375rem] font-bold text-[#2C2825]">
                  智能家居行业CRM平台
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-[rgba(176,125,74,0.1)] text-[#B07D4A] text-[0.75rem] px-2 py-0.5 rounded">
                    小程序/APP/后台
                  </span>
                  <span className="bg-[rgba(176,125,74,0.1)] text-[#B07D4A] text-[0.75rem] px-2 py-0.5 rounded">
                    广州河东科技
                  </span>
                </div>
                <p className="text-[0.9375rem] text-[#6B6560] leading-[1.7] mt-4">
                  公司内部自研自用的CRM系统，服务内部销售、产品团队及国内外渠道商。核心功能涵盖线索、客户、商机、产品、价格、订单、合同、售后及知识问答Agent，推动从线索到现金（LTC）全流程线上化。
                </p>

                {/* Metrics Grid */}
                <div className="metrics-grid grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                  {project1Metrics.map((m) => (
                    <div key={m.desc} className="metric-item bg-[#FAF6F1] rounded-[10px] p-3 text-center">
                      <div className="font-data text-[1.25rem] font-bold text-[#B07D4A]">
                        {m.value}
                      </div>
                      <div className="text-[0.75rem] text-[#A39C95] mt-0.5">
                        {m.label}
                      </div>
                      <div className="text-[0.7rem] text-[#A39C95] mt-0.5">
                        {m.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* International highlight */}
                <div className="mt-4 bg-[#2C2825] rounded-[10px] px-4 py-3.5 flex items-center gap-3">
                  <Globe size={20} className="text-[#D4A76A] flex-shrink-0" />
                  <span className="text-[0.875rem] text-[#FAF6F1]">
                    完成国际版产品、价格、客户与下单流程上线，支持250家国际客户在线下单
                  </span>
                </div>
                <div className="mt-3 bg-[rgba(176,125,74,0.1)] rounded-[10px] px-4 py-3.5 flex items-center gap-3">
                  <Bot size={20} className="text-[#B07D4A] flex-shrink-0" />
                  <span className="text-[0.875rem] text-[#6B6560]">
                    构建覆盖1,000+款产品、2,000+份文档的知识库，支持多轮追问与原文溯源
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: SFA */}
          <div className="project-card-2 bg-white rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[4fr_5fr] gap-0">
              {/* Content - Left */}
              <div className="p-6 md:p-8 order-2 lg:order-1">
                <h3 className="text-[1.375rem] font-bold text-[#2C2825]">
                  CRM标准化产品SFA模块
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-[rgba(176,125,74,0.1)] text-[#B07D4A] text-[0.75rem] px-2 py-0.5 rounded">
                    小程序/后台
                  </span>
                  <span className="bg-[rgba(176,125,74,0.1)] text-[#B07D4A] text-[0.75rem] px-2 py-0.5 rounded">
                    成都博智维讯
                  </span>
                </div>
                <p className="text-[0.9375rem] text-[#6B6560] leading-[1.7] mt-4">
                  面向年销售额50亿+大型酒类企业的SFA销售自动化模块，覆盖终端采集、客户拜访、库存盘点、考勤、活动执行、市场信息采集和积分管理，完成行业首个白酒SFA标准化产品落地。
                </p>

                {/* Highlights */}
                <div className="highlights-list mt-5 space-y-3">
                  {project2Highlights.map((h, idx) => (
                    <div key={idx} className="highlight-item flex items-start gap-3">
                      <h.icon size={20} className="text-[#B07D4A] mt-0.5 flex-shrink-0" />
                      <span className="text-[0.875rem] text-[#6B6560] leading-[1.7]">
                        {h.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Performance */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="bg-[#FAF6F1] rounded-lg px-4 py-2.5">
                    <span className="text-[0.75rem] text-[#A39C95]">签约客户</span>
                    <p className="text-[0.875rem] font-medium text-[#2C2825]">
                      五粮浓香系列酒、丰谷酒业
                    </p>
                  </div>
                  <div className="bg-[#FAF6F1] rounded-lg px-4 py-2.5">
                    <span className="text-[0.75rem] text-[#A39C95]">单项目金额</span>
                    <p className="text-[0.875rem] font-medium text-[#2C2825]">
                      200-300万
                    </p>
                  </div>
                </div>
              </div>

              {/* Image - Right */}
              <div className="relative project-img order-1 lg:order-2">
                <img
                  src={`${import.meta.env.BASE_URL}project-sfa.jpg`}
                  alt="SFA销售自动化模块"
                  className="w-full h-[240px] md:h-[320px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[rgba(44,40,37,0.8)] px-4 py-3">
                  <span className="text-[0.875rem] text-[#FAF6F1]">
                    快消品行业 · SFA模块
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: DMS */}
          <div className="project-card-3 bg-white rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-0">
              {/* Image */}
              <div className="relative project-img">
                <img
                  src={`${import.meta.env.BASE_URL}project-dms.jpg`}
                  alt="DMS经销商管理系统"
                  className="w-full h-[240px] md:h-[320px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[rgba(44,40,37,0.8)] px-4 py-3">
                  <span className="text-[0.875rem] text-[#FAF6F1]">
                    快消品行业 · DMS模块
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-[1.375rem] font-bold text-[#2C2825]">
                  CRM标准化产品DMS模块
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-[rgba(176,125,74,0.1)] text-[#B07D4A] text-[0.75rem] px-2 py-0.5 rounded">
                    小程序/后台
                  </span>
                  <span className="bg-[rgba(176,125,74,0.1)] text-[#B07D4A] text-[0.75rem] px-2 py-0.5 rounded">
                    成都博智维讯
                  </span>
                </div>
                <p className="text-[0.9375rem] text-[#6B6560] leading-[1.7] mt-4">
                  面向年销售额10亿+快消品企业的DMS经销商管理模块，覆盖合同、订单、促销、对账和返利管理，解决经销商服务、订单掌握、活动触达与客户对账难题，并支撑天味食品DMS系统落地。
                </p>

                {/* Engine Cards */}
                <div className="engine-cards grid grid-cols-2 gap-4 mt-5">
                  <div className="engine-card bg-white rounded-[12px] p-5 border-t-[3px] border-t-[#B07D4A] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                    <Tag size={28} className="text-[#B07D4A] mb-2" />
                    <h4 className="text-[1rem] font-semibold text-[#2C2825]">
                      促销引擎
                    </h4>
                    <p className="text-[0.875rem] text-[#6B6560] mt-1">
                      覆盖4大类8种促销类型
                    </p>
                  </div>
                  <div className="engine-card bg-white rounded-[12px] p-5 border-t-[3px] border-t-[#B07D4A] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                    <RefreshCw size={28} className="text-[#B07D4A] mb-2" />
                    <h4 className="text-[1rem] font-semibold text-[#2C2825]">
                      返利引擎
                    </h4>
                    <p className="text-[0.875rem] text-[#6B6560] mt-1">
                      4种核心返利模式，13种返利基准数据
                    </p>
                  </div>
                </div>

                {/* Key Performance */}
                <div className="mt-5 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-data text-[1.5rem] font-bold text-[#6B9E78]">
                      5天 → 30分钟
                    </span>
                    <span className="text-[0.75rem] text-[#A39C95]">
                      配置时效提升
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-data text-[1.25rem] font-bold text-[#B07D4A]">
                      300-400万元
                    </span>
                    <span className="text-[0.75rem] text-[#A39C95]">
                      单项目金额
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
