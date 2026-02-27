import styled, { keyframes } from 'styled-components'
import { HiArrowDown } from 'react-icons/hi'

export default function Hero() {
  return (
    <Section id="hero">
      <Blob1 /><Blob2 /><Blob3 />
      <Content>
        <Greeting>안녕하세요,</Greeting>
        <Name>명현화<Dot>.</Dot></Name>
        <Title>Vue / React Publisher & UI/UX Designer</Title>
        <Desc>
          15년 경력의 Vue / React Publisher &amp; UI/UX Designer입니다.<br />
          웹사이트, 브랜드, HMI부터 대시보드 UI까지 — 디자인의 감각과 코드의 정밀함으로 완성도 있는 UI를 만듭니다.
        </Desc>
        <ButtonRow>
          <PrimaryBtn href="#works">작업 보기</PrimaryBtn>
          <OutlineBtn href="#contact">연락하기</OutlineBtn>
        </ButtonRow>
        <Tags>
          {['Photoshop', 'Illustrator', 'Adobe XD', 'HTML5', 'Vue.js', 'React'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </Tags>
      </Content>
      <ScrollHint href="#works"><HiArrowDown size={20} /><span>Scroll</span></ScrollHint>
    </Section>
  )
}

const float = keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50%       { transform: translateY(-30px) scale(1.05); }
`
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`

const Section = styled.section`
  position: relative; overflow: hidden;
  min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  padding: 120px 2rem 80px;
`
const blob = styled.div`
  position: absolute; border-radius: 50%;
  filter: blur(80px); opacity: 0.35; animation: ${float} ease-in-out infinite;
  pointer-events: none;
`
const Blob1 = styled(blob)`
  width: 500px; height: 500px;
  background: radial-gradient(circle, #FF6B6B, #FF8B94);
  top: -100px; right: -100px;
  animation-duration: 8s;
`
const Blob2 = styled(blob)`
  width: 400px; height: 400px;
  background: radial-gradient(circle, #4ECDC4, #74B9FF);
  bottom: -80px; left: -80px;
  animation-duration: 10s; animation-delay: -3s;
`
const Blob3 = styled(blob)`
  width: 300px; height: 300px;
  background: radial-gradient(circle, #6C5CE7, #FF6B6B);
  top: 50%; left: 50%;
  animation-duration: 12s; animation-delay: -5s;
`
const Content = styled.div`
  position: relative; z-index: 1;
  max-width: 700px; text-align: center;
  animation: ${fadeUp} 0.8s ease both;
`
const Greeting = styled.p`
  font-size: 1.1rem; font-weight: 400; color: var(--text-muted);
  margin-bottom: 0.5rem;
`
const Name = styled.h1`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900; line-height: 1;
  color: var(--text); letter-spacing: -3px;
  margin-bottom: 1rem;
`
const Dot = styled.span`color: var(--accent);`

const Title = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 300; color: var(--text-muted);
  letter-spacing: 2px; text-transform: uppercase;
  margin-bottom: 1.5rem;
`
const Desc = styled.p`
  font-size: 1rem; line-height: 1.8; color: var(--text-muted);
  margin-bottom: 2.5rem;
`
const ButtonRow = styled.div`
  display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;
  margin-bottom: 2rem;
`
const PrimaryBtn = styled.a`
  padding: 0.85rem 2.2rem; border-radius: 50px;
  background: var(--accent); color: #fff;
  font-weight: 700; font-size: 0.95rem;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(255,107,107,0.4); }
`
const OutlineBtn = styled.a`
  padding: 0.85rem 2.2rem; border-radius: 50px;
  border: 2px solid var(--border); color: var(--text);
  font-weight: 600; font-size: 0.95rem;
  transition: border-color 0.2s, color 0.2s;
  &:hover { border-color: var(--accent); color: var(--accent); }
`
const Tags = styled.div`display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center;`
const Tag = styled.span`
  padding: 0.3rem 0.8rem; border-radius: 20px;
  background: var(--bg-alt); border: 1px solid var(--border);
  font-size: 0.75rem; color: var(--text-muted);
`
const ScrollHint = styled.a`
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  color: var(--text-muted); font-size: 0.75rem;
  animation: ${float} 2s ease-in-out infinite;
`
