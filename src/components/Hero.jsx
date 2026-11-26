import styled, { keyframes } from 'styled-components'

const codeLines = [
  [['c', '<!-- AccessCard.vue -->']],
  [['k', '<template>']],
  [['', '  '], ['k', '<section'], ['', ' '], ['n', 'role'], ['', '='], ['s', '"region"'], ['k', '>']],
  [['', '    '], ['k', '<h4>'], ['', '접근성 인증 완료'], ['k', '</h4>']],
  [['', '    '], ['k', '<BaseButton'], ['', ' '], ['n', 'variant'], ['', '='], ['s', '"primary"'], ['k', '>']],
  [['', '      자세히 보기']],
  [['', '    '], ['k', '</BaseButton>']],
  [['', '  '], ['k', '</section>']],
  [['k', '</template>']],
]

export default function Hero() {
  return (
    <Section id="hero">
      <Grid />
      <Inner>
        <Intro>
          <Eyebrow>
            <Pulse /> 명현화 · Vue / React Publisher &amp; UI/UX Designer
          </Eyebrow>
          <H1>
            Design it.<br />
            <Grad>Then code it.</Grad>
          </H1>
          <Desc>
            Figma 시안에서 Vue 컴포넌트까지, 한 사람이 끝까지 만듭니다.<br />
            15년간 웹·브랜드·HMI·대시보드를 디자인하고 구현해 왔습니다.
          </Desc>
          <Buttons>
            <Primary href="#process">디자인 ⇄ 코드 보기</Primary>
            <Ghost href="#works">작업물</Ghost>
          </Buttons>
          <Stats>
            <div><b>15+</b><span>years</span></div>
            <div><b>30+</b><span>projects</span></div>
            <div><b>SA</b><span>앱접근성 인증</span></div>
          </Stats>
        </Intro>

        <Split aria-hidden="true">
          <Pane $side="design">
            <PaneTag $side="design">● FIGMA — 시안</PaneTag>
            <Mock>
              <Dim>W 320 · H 180</Dim>
              <h4>접근성 인증 완료</h4>
              <p>KWCAG 2.1 기준으로 설계한 안내 카드입니다.</p>
              <MockBtn>자세히 보기</MockBtn>
            </Mock>
            <Cursor>Hyunhwa</Cursor>
          </Pane>
          <Pane $side="code">
            <PaneTag $side="code">● VUE 3 — 구현</PaneTag>
            <Code>
              {codeLines.map((line, i) => (
                <Line key={i} style={{ '--i': i }}>
                  {line.map(([c, t], j) => <span key={j} className={c}>{t}</span>)}
                </Line>
              ))}
            </Code>
          </Pane>
          <Divider />
        </Split>
      </Inner>
    </Section>
  )
}

const fadeUp = keyframes`from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}`
const lineIn = keyframes`from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:none}`
const pulse = keyframes`0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}`
const bob = keyframes`0%,100%{transform:translate(0,0)}50%{transform:translate(8px,-8px)}`

const Section = styled.section`
  position: relative; overflow: hidden; min-height: 100vh;
  display: flex; align-items: center;
  padding: 120px 2rem 80px;
`
const Grid = styled.div`
  position: absolute; inset: 0; pointer-events: none;
  background-image: radial-gradient(var(--border) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse at 30% 40%, #000 20%, transparent 75%);
`
const Inner = styled.div`
  position: relative; z-index: 1; width: 100%; max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1.1fr 1fr; gap: 3.5rem; align-items: center;
  @media (max-width: 960px) { grid-template-columns: 1fr; }
`
const Intro = styled.div`animation: ${fadeUp} .7s ease both;`
const Eyebrow = styled.p`
  display: inline-flex; align-items: center; gap: .6rem;
  font: 500 .78rem var(--font-mono); color: var(--text-muted);
  border: 1px solid var(--border); border-radius: 99px; padding: .4rem .9rem;
  margin-bottom: 1.8rem;
`
const Pulse = styled.i`
  width: 8px; height: 8px; border-radius: 50%; background: var(--code);
  animation: ${pulse} 1.6s ease-in-out infinite;
`
const H1 = styled.h1`
  font: 700 clamp(2.6rem, 7vw, 5.2rem)/1.04 var(--font-display);
  letter-spacing: -2.5px; color: var(--text); margin-bottom: 1.5rem;
`
const Grad = styled.span`
  background: linear-gradient(90deg, var(--accent-soft), var(--code));
  -webkit-background-clip: text; background-clip: text; color: transparent;
`
const Desc = styled.p`
  font-size: 1.02rem; line-height: 1.9; color: var(--text-muted); margin-bottom: 2.2rem; max-width: 520px;
`
const Buttons = styled.div`display: flex; gap: .8rem; flex-wrap: wrap; margin-bottom: 2.6rem;`
const Primary = styled.a`
  padding: .85rem 1.7rem; border-radius: 10px; background: var(--accent); color: #fff;
  font-weight: 700; font-size: .92rem; transition: transform .2s, box-shadow .2s;
  &:hover { transform: translateY(-3px); box-shadow: 0 10px 28px color-mix(in srgb, var(--accent) 45%, transparent); }
`
const Ghost = styled.a`
  padding: .85rem 1.7rem; border-radius: 10px; border: 1px solid var(--border); color: var(--text);
  font-weight: 600; font-size: .92rem; transition: border-color .2s, color .2s;
  &:hover { border-color: var(--code); color: var(--code); }
`
const Stats = styled.div`
  display: flex; gap: 2.2rem; flex-wrap: wrap;
  div { display: flex; flex-direction: column; }
  b { font: 700 1.7rem var(--font-display); color: var(--text); }
  span { font: .72rem var(--font-mono); color: var(--text-muted); }
`

const Split = styled.div`
  position: relative; display: grid; grid-template-columns: 1fr 1fr;
  border: 1px solid var(--border); border-radius: 16px; overflow: hidden;
  background: var(--surface); box-shadow: var(--shadow-lg);
  animation: ${fadeUp} .9s .15s ease both;
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`
const Pane = styled.div`
  position: relative; padding: 1.4rem; min-height: 340px;
  background: ${p => p.$side === 'design' ? 'var(--bg-alt)' : '#0d1117'};
`
const PaneTag = styled.span`
  display: inline-block; font: 500 .66rem var(--font-mono); letter-spacing: 1px;
  padding: .25rem .65rem; border-radius: 99px; margin-bottom: 1.6rem;
  background: ${p => p.$side === 'design' ? 'color-mix(in srgb, var(--accent) 18%, transparent)' : 'color-mix(in srgb, var(--code) 16%, transparent)'};
  color: ${p => p.$side === 'design' ? 'var(--accent-soft)' : '#7ee787'};
`
const Mock = styled.div`
  position: relative; background: #fff; color: #111; border-radius: 12px; padding: 1.1rem;
  outline: 2px dashed var(--accent); outline-offset: 6px; margin-top: 1.4rem;
  h4 { font: 700 1rem 'Noto Sans KR'; margin-bottom: .3rem; }
  p { font-size: .75rem; color: #666; margin-bottom: .9rem; line-height: 1.5; }
`
const Dim = styled.span`
  position: absolute; top: -2rem; right: 0; font: .62rem var(--font-mono);
  background: var(--accent); color: #fff; padding: 2px 7px; border-radius: 4px;
`
const MockBtn = styled.span`
  display: inline-block; background: #6c5ce7; color: #fff; padding: .5rem 1rem;
  border-radius: 8px; font-size: .72rem; font-weight: 700;
`
const Cursor = styled.span`
  position: absolute; left: 55%; bottom: 3.2rem;
  background: #f24e1e; color: #fff; font: 600 .62rem var(--font-display);
  padding: 3px 8px; border-radius: 0 8px 8px 8px; animation: ${bob} 3s ease-in-out infinite;
`
const Code = styled.pre`
  font: .68rem/1.85 var(--font-mono); color: #c9d1d9; white-space: pre; overflow: hidden; font-variant-ligatures: none; font-feature-settings: "liga" 0, "calt" 0;
  .k { color: #ff7b72 } .s { color: #a5d6ff } .c { color: #8b949e } .n { color: #79c0ff }
`
const Line = styled.div`
  opacity: 0; animation: ${lineIn} .4s ease forwards; animation-delay: calc(.6s + var(--i) * .22s);
`
const Divider = styled.div`
  position: absolute; top: 0; bottom: 0; left: 50%; width: 2px; background: #fff;
  box-shadow: 0 0 12px rgba(255,255,255,.5);
  &::after {
    content: '⇆'; position: absolute; top: 50%; left: -13px; width: 28px; height: 28px;
    border-radius: 50%; background: #fff; color: #111; display: grid; place-items: center;
    font-size: 14px; transform: translateY(-50%);
  }
  @media (max-width: 560px) { display: none; }
`
