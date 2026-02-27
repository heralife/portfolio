import styled, { keyframes } from 'styled-components'
import {
  SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiAdobeindesign,
  SiFigma, SiHtml5, SiCss3, SiJavascript, SiSass,
  SiVuedotjs, SiReact, SiTailwindcss, SiBootstrap, SiStyledcomponents, SiJquery
} from 'react-icons/si'

const skills = [
  { icon: SiAdobephotoshop,  label: 'Photoshop',          pct: 80, color: '#31A8FF' },
  { icon: SiAdobeillustrator,label: 'Illustrator',         pct: 85, color: '#FF9A00' },
  { icon: SiAdobexd,         label: 'Adobe XD',            pct: 80, color: '#FF61F6' },
  { icon: SiAdobeindesign,   label: 'InDesign',            pct: 75, color: '#FF3366' },
  { icon: SiFigma,           label: 'Figma',               pct: 70, color: '#F24E1E' },
  { icon: SiHtml5,           label: 'HTML5',               pct: 90, color: '#E34F26' },
  { icon: SiCss3,            label: 'CSS3/SCSS',           pct: 88, color: '#1572B6' },
  { icon: SiJavascript,      label: 'JavaScript',          pct: 65, color: '#F7DF1E' },
  { icon: SiVuedotjs,        label: 'Vue.js',              pct: 75, color: '#4FC08D' },
  { icon: SiReact,           label: 'React',               pct: 60, color: '#61DAFB' },
  { icon: SiTailwindcss,     label: 'Tailwind CSS',        pct: 70, color: '#06B6D4' },
  { icon: SiBootstrap,       label: 'Bootstrap',           pct: 75, color: '#7952B3' },
  { icon: SiStyledcomponents,label: 'styled-components',   pct: 70, color: '#DB7093' },
  { icon: SiJquery,          label: 'jQuery',              pct: 75, color: '#0769AD' },
  { icon: SiSass,            label: 'Sass',                pct: 80, color: '#CC6699' },
]

const careers = [
  { period: '2025.06 – 2025.12', company: '씨딘', role: '프리랜서', desc: '신한은행 헤이영 캠퍼스 플랫폼 운영 — Vue.js, 접근성(SA인증) 개발' },
  { period: '2022.04 – 2025.02', company: '아이엘포유', role: '프리랜서', desc: '삼성SDS M.OFFICE, LEGO 디자인·퍼블리싱, 파시스 EA 반응형 웹 개발' },
  { period: '2015.09 – 2021.04', company: '메카테크', role: 'WEB사업부 차장', desc: 'UI/UX 디자인, HMI 심볼 디자인, 웹사이트 퍼블리싱 전반 담당' },
]

export default function About() {
  return (
    <Section id="about">
      <Inner>
        <Left>
          <SectionLabel>ABOUT ME</SectionLabel>
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
            <Stat><strong>14+</strong><span>Projects</span></Stat>
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
          <SubTitle>Skills</SubTitle>
          <SkillGrid>
            {skills.map(s => (
              <SkillCard key={s.label}>
                <SkillIcon $color={s.color}>{(() => { const I = s.icon; return <I size={22} />; })()}</SkillIcon>
                <SkillInfo>
                  <SkillName>{s.label}</SkillName>
                  <BarBg>
                    <Bar $pct={s.pct} $color={s.color} />
                  </BarBg>
                </SkillInfo>
                <Pct>{s.pct}%</Pct>
              </SkillCard>
            ))}
          </SkillGrid>
        </Right>
      </Inner>
    </Section>
  )
}

const grow = keyframes`from { width: 0 } to { width: var(--w) }`

const Section = styled.section`
  background: var(--bg-alt);
  padding: 120px 2rem;
`
const Inner = styled.div`
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 3rem; }
`
const SectionLabel = styled.p`font-size:.75rem;font-weight:700;letter-spacing:4px;color:var(--accent);margin-bottom:.5rem;`
const SectionTitle = styled.h2`font-size:clamp(2rem,5vw,3.5rem);font-weight:900;color:var(--text);letter-spacing:-2px;margin-bottom:.5rem;`
const Dot = styled.span`color:var(--accent);`
const Role = styled.p`font-size:1rem;color:var(--text-muted);margin-bottom:1.5rem;letter-spacing:1px;`
const Bio = styled.p`font-size:.95rem;line-height:1.9;color:var(--text-muted);margin-bottom:2rem;`
const StatRow = styled.div`display:flex;gap:2rem;margin-bottom:2.5rem;`
const Stat = styled.div`
  display:flex;flex-direction:column;
  strong { font-size:1.8rem;font-weight:900;color:var(--accent); }
  span   { font-size:.75rem;color:var(--text-muted); }
`
const SubTitle = styled.h3`font-size:1.1rem;font-weight:700;color:var(--text);margin-bottom:1.25rem;`

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

const SkillGrid = styled.div`display:flex;flex-direction:column;gap:.75rem;`
const SkillCard = styled.div`
  display:flex;align-items:center;gap:.75rem;
  background:var(--surface);border-radius:12px;padding:.75rem 1rem;
  border:1px solid var(--border);
`
const SkillIcon = styled.div`
  color:${p=>p.$color};width:36px;height:36px;border-radius:8px;
  background:${p=>p.$color}18;
  display:flex;align-items:center;justify-content:center;flex-shrink:0;
`
const SkillInfo = styled.div`flex:1;`
const SkillName = styled.p`font-size:.82rem;font-weight:600;color:var(--text);margin-bottom:.35rem;`
const BarBg = styled.div`height:4px;border-radius:4px;background:var(--border);overflow:hidden;`
const Bar = styled.div`
  height:100%;border-radius:4px;
  background:${p=>p.$color};
  --w:${p=>p.$pct}%;
  animation:${grow} 1s ease both;
  width:var(--w);
`
const Pct = styled.span`font-size:.75rem;font-weight:600;color:var(--text-muted);width:32px;text-align:right;`
