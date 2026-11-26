import { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiAdobeindesign,
  SiFigma, SiHtml5, SiCss3, SiJavascript, SiSass,
  SiVuedotjs, SiReact, SiTailwindcss, SiBootstrap, SiStyledcomponents, SiJquery
} from 'react-icons/si'

const designSkills = [
  { icon: SiFigma, label: 'Figma', color: '#F24E1E' },
  { icon: SiAdobexd, label: 'Adobe XD', color: '#FF61F6' },
  { icon: SiAdobephotoshop, label: 'Photoshop', color: '#31A8FF' },
  { icon: SiAdobeillustrator, label: 'Illustrator', color: '#FF9A00' },
  { icon: SiAdobeindesign, label: 'InDesign', color: '#FF3366' },
]
const codeSkills = [
  { icon: SiVuedotjs, label: 'Vue.js', color: '#4FC08D' },
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
  { icon: SiCss3, label: 'CSS3', color: '#1572B6' },
  { icon: SiSass, label: 'SCSS/Sass', color: '#CC6699' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTailwindcss, label: 'Tailwind CSS', color: '#06B6D4' },
  { icon: SiBootstrap, label: 'Bootstrap', color: '#7952B3' },
  { icon: SiStyledcomponents, label: 'styled-components', color: '#DB7093' },
  { icon: SiJquery, label: 'jQuery', color: '#0769AD' },
]

const careers = [
  { period: '2026.11 – 2026.12', company: '내담C&C', role: '프리랜서 · 차장', desc: '삼성코닝 Q-Vision 시스템 — 큐브시스템 기반 디자인 및 Vue.js 퍼블리싱' },
  { period: '2026.05 – 2026.10', company: '에스프로', role: '프리랜서 · 차장', desc: '삼성코닝 KN-MES(SDS) Vue.js 퍼블리싱, 삼성물산 주택 INO 4.0 사내 반응형 시스템(Vue3) 퍼블리싱' },
  { period: '2025.06 – 2025.12', company: '씨딘', role: '프리랜서 · 부장', desc: '헤이영 캠퍼스 대학교 플랫폼 반응형 퍼블리싱 — 앱접근성 SA인증 획득(2025.12.26)' },
  { period: '2024.11 – 2025.02', company: '아이엘포유', role: '프리랜서 · 차장', desc: '퍼시스 그룹 EA 프로젝트 — 반응형 웹 퍼블리싱(JSP)' },
  { period: '2024.03 – 2024.08', company: '인투데이타시스템', role: '프리랜서 · 차장', desc: '삼성SDS M.OFFICE 업무앱·관리 콘솔 — Vue.js 퍼블리싱' },
  { period: '2022.04 – 2024.02', company: '아이엘포유', role: '프리랜서 · 차장', desc: '삼성SDS 악성메일 모의훈련시스템 디자인·퍼블리싱, M.OFFICE Vue.js + Vuetify 퍼블리싱' },
  { period: '2015.09 – 2021.04', company: '메카테크놀러지', role: 'WEB사업부 · 차장', desc: 'UI/UX 디자인, HMI 개발(WinccOA), 삼성 계열 FAB 제어시스템 및 웹사이트 퍼블리싱 전반' },
]

const CERT_IMG = import.meta.env.BASE_URL + 'images/cert-sa-shinhan.jpg'

export default function About() {
  const [certOpen, setCertOpen] = useState(false)

  useEffect(() => {
    if (!certOpen) return
    const onKey = e => { if (e.key === 'Escape') setCertOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [certOpen])

  return (
    <Section id="about">
      <Inner>
        <Left>
          <SectionLabel>// ABOUT</SectionLabel>
          <SectionTitle>명현화<Dot>.</Dot></SectionTitle>
          <Role>Vue · React Publisher &amp; UI/UX Designer</Role>
          <Bio>
            한양사이버대학교 디자인대학원 석사 출신으로,<br />
            <strong>총 15년 이상</strong>의 실무 경험을 가진 UI/UX 디자이너·퍼블리셔입니다.<br /><br />
            브랜드 아이덴티티부터 HMI, 웹 대시보드까지 —<br />
            디자인과 개발 사이의 간극을 좁히는 작업을 합니다.
          </Bio>
          <StatRow>
            <Stat><strong>15+</strong><span>Years Exp.</span></Stat>
            <Stat><strong>30+</strong><span>Projects</span></Stat>
            <Stat><strong>석사</strong><span>디자인융합</span></Stat>
          </StatRow>

          <SubTitle>경력</SubTitle>
          <Timeline>
            {careers.map((c, i) => (
              <TimeItem key={i}>
                <TimeDot />
                <TimeBody>
                  <TimeMeta>{c.period} · {c.role}</TimeMeta>
                  <TimeCompany>{c.company}</TimeCompany>
                  <TimeDesc>{c.desc}</TimeDesc>
                </TimeBody>
              </TimeItem>
            ))}
          </Timeline>
        </Left>

        <Right>
          <SubTitle $c="var(--accent-soft)">● Design</SubTitle>
          <Chips>
            {designSkills.map(k => { const I = k.icon; return <Chip key={k.label} $c={k.color}><I size={16} />{k.label}</Chip> })}
          </Chips>
          <SubTitle $c="var(--code)" style={{ marginTop: '2rem' }}>● Code</SubTitle>
          <Chips>
            {codeSkills.map(k => { const I = k.icon; return <Chip key={k.label} $c={k.color}><I size={16} />{k.label}</Chip> })}
          </Chips>
          <Cert>
            <CertThumb type="button" onClick={() => setCertOpen(true)} aria-label="소프트웨어 접근성 인증서 크게 보기">
              <img src={CERT_IMG} alt="신한은행 헤이영캠퍼스 대학교 플랫폼 소프트웨어 접근성 인증서" loading="lazy" />
            </CertThumb>
            <CertBody>
              <b>CERTIFIED</b>
              <h4>소프트웨어 접근성(SA) 인증</h4>
              <p>헤이영캠퍼스 대학교 플랫폼 (Android v1.6.1)<br />인증번호 SAC-25174호 · 2025.12.26</p>
              <small>정보처리기사(2016)</small>
              <button type="button" onClick={() => setCertOpen(true)}>인증서 보기 ›</button>
            </CertBody>
          </Cert>
        </Right>
      </Inner>
      {certOpen && (
        <Lightbox role="dialog" aria-modal="true" aria-label="소프트웨어 접근성 인증서" onClick={() => setCertOpen(false)}>
          <CloseBtn type="button" onClick={() => setCertOpen(false)} aria-label="닫기">×</CloseBtn>
          <img src={CERT_IMG} alt="신한은행 헤이영캠퍼스 대학교 플랫폼 소프트웨어 접근성 인증서" onClick={e => e.stopPropagation()} />
        </Lightbox>
      )}
    </Section>
  )
}


const Section = styled.section`
  background: var(--bg-alt);
  padding: 120px 2rem;
`
const Inner = styled.div`
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 3rem; }
`
const SectionLabel = styled.p`font:500 .8rem var(--font-mono);color:var(--code);margin-bottom:.6rem;`
const SectionTitle = styled.h2`font:700 clamp(2rem,5vw,3.4rem) var(--font-display);color:var(--text);letter-spacing:-2px;margin-bottom:.5rem;`
const Dot = styled.span`color:var(--accent);`
const Role = styled.p`font-size:1rem;color:var(--text-muted);margin-bottom:1.5rem;letter-spacing:1px;`
const Bio = styled.p`font-size:.95rem;line-height:1.9;color:var(--text-muted);margin-bottom:2rem;`
const StatRow = styled.div`display:flex;gap:2rem;margin-bottom:2.5rem;`
const Stat = styled.div`
  display:flex;flex-direction:column;
  strong { font-size:1.8rem;font-weight:900;color:var(--accent); }
  span   { font-size:.75rem;color:var(--text-muted); }
`
const SubTitle = styled.h3`font:500 .9rem var(--font-mono);color:${p=>p.$c||'var(--text)'};margin-bottom:1rem;`

const Timeline = styled.div`display:flex;flex-direction:column;gap:1.25rem;`
const TimeItem = styled.div`display:flex;gap:1rem;`
const TimeDot = styled.div`
  width:10px;height:10px;border-radius:50%;
  background:var(--accent);margin-top:5px;flex-shrink:0;
`
const TimeBody = styled.div``
const TimeMeta = styled.p`font-size:.75rem;color:var(--text-muted);margin-bottom:.2rem;`
const TimeCompany = styled.p`font-size:.95rem;font-weight:700;color:var(--text);`
const TimeDesc = styled.p`font-size:.82rem;color:var(--text-muted);line-height:1.6;`

const Left = styled.div``
const Right = styled.div``

const Chips = styled.div`display:flex;flex-wrap:wrap;gap:.5rem;`
const Chip = styled.span`
  display:inline-flex;align-items:center;gap:.5rem;
  padding:.5rem .85rem;border-radius:8px;border:1px solid var(--border);
  background:var(--surface);color:var(--text);font:500 .8rem var(--font-mono);
  svg{color:${p=>p.$c};}
  transition:transform .2s,border-color .2s;
  &:hover{transform:translateY(-3px);border-color:${p=>p.$c};}
`
const Cert = styled.div`
  margin-top:2.2rem;padding:1.1rem 1.2rem;border-radius:12px;
  display:flex;gap:1.1rem;align-items:center;
  border:1px solid color-mix(in srgb, var(--code) 40%, transparent);
  background:color-mix(in srgb, var(--code) 8%, transparent);
  @media (max-width:480px){flex-direction:column;align-items:flex-start;}
`
const CertThumb = styled.button`
  flex:none;width:96px;border-radius:6px;overflow:hidden;padding:0;background:#fff;
  border:1px solid var(--border);box-shadow:var(--shadow);cursor:zoom-in;
  transition:transform .2s;
  img{display:block;width:100%;height:auto;}
  &:hover{transform:translateY(-3px) rotate(-1deg);}
  &:focus-visible{outline:3px solid var(--accent);outline-offset:2px;}
`
const CertBody = styled.div`
  b{font:500 .7rem var(--font-mono);letter-spacing:2px;color:var(--code);}
  h4{font-size:.95rem;font-weight:700;color:var(--text);margin-top:.3rem;}
  p{font-size:.82rem;color:var(--text);margin-top:.25rem;line-height:1.6;}
  small{display:block;font-size:.75rem;color:var(--text-muted);margin-top:.3rem;}
  button{margin-top:.55rem;font:500 .78rem var(--font-mono);color:var(--accent);padding:0;}
  button:hover{text-decoration:underline;}
`
const Lightbox = styled.div`
  position:fixed;inset:0;z-index:300;background:rgba(0,0,0,.78);
  display:flex;align-items:center;justify-content:center;padding:2rem;cursor:zoom-out;
  img{max-height:92vh;max-width:100%;width:auto;border-radius:6px;background:#fff;box-shadow:0 20px 60px rgba(0,0,0,.5);cursor:default;}
`
const CloseBtn = styled.button`
  position:absolute;top:1rem;right:1.2rem;width:44px;height:44px;border-radius:50%;
  background:rgba(255,255,255,.16);color:#fff;font-size:1.8rem;line-height:1;
  &:hover{background:rgba(255,255,255,.3);}
`
