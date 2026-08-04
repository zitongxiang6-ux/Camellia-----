import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactItems = [
  { icon: Phone, label: '电话', value: '18292879652', href: 'tel:18292879652' },
  { icon: Mail, label: '邮箱', value: '18292879652@163.com', href: 'mailto:18292879652@163.com' },
  { icon: MessageCircle, label: '微信', value: 'Stong18292879652', href: '#' },
  { icon: MapPin, label: '期望城市', value: '杭州', href: '#' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.from('.contact-title', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });

      // Contact items
      gsap.from('.contact-item', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' },
      });

      // Icon containers
      gsap.from('.contact-icon', {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' },
      });

      // CTA
      gsap.from('.contact-cta', {
        y: 15,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-cta', start: 'top 90%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#FAF6F1] pt-[clamp(4rem,8vw,6rem)] pb-8"
    >
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="contact-title text-center">
          <span className="section-label">联系我 · CONTACT</span>
          <h2 className="text-h2 text-[#2C2825] mt-3">期待与您交流</h2>
          <p className="text-body text-[#6B6560] mt-3">
            如果您正在寻找一位有经验的产品经理，欢迎随时联系
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="contact-item group flex flex-col items-center text-center"
            >
              <div className="contact-icon w-14 h-14 rounded-[14px] bg-[rgba(176,125,74,0.1)] flex items-center justify-center group-hover:bg-[rgba(176,125,74,0.2)] transition-colors duration-200">
                <item.icon
                  size={24}
                  className="text-[#B07D4A] group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="text-[0.875rem] font-medium text-[#A39C95] mt-3">
                {item.label}
              </span>
              <span className="text-[1rem] font-medium text-[#2C2825] mt-1 group-hover:text-[#B07D4A] transition-colors duration-200 break-all">
                {item.value}
              </span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="contact-cta flex flex-col items-center mt-12">
          <a
            href="mailto:18292879652@163.com"
            className="inline-flex items-center bg-[#B07D4A] text-[#FAF6F1] px-10 py-3.5 rounded-[10px] text-[1rem] font-semibold hover:bg-[#8C5E2F] hover:scale-[1.03] transition-all duration-200"
          >
            发送邮件
          </a>
          <p className="text-[0.875rem] text-[#A39C95] mt-4">
            或直接添加微信沟通
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-[#E5DED6]">
          <p className="text-center text-[0.75rem] text-[#A39C95]">
            © 2024 向紫彤 Zitong Xiang. All rights reserved.
          </p>
          <p className="text-center text-[0.75rem] text-[#A39C95] mt-1">
            Product Manager · 产品驱动价值
          </p>
        </footer>
      </div>
    </section>
  );
}
