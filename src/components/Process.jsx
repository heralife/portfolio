import { useRef, useState } from 'react'
import styled from 'styled-components'

/* 아주 작은 문법 강조기 */
function highlight(src) {
  const re = /(<!--[\s\S]*?-->|\/\/.*|\/\*[\s\S]*?\*\/)|("[^"\n]*"|'[^'\n]*')|(<\/?[\w-]+|\/?>)|(@[\w-]+|[:@]?[\w-]+(?==)|\$[\w-]+|[.#][\w-]+(?=\s*\{))/g
  const out = []
  let last = 0, m, i = 0
  while ((m = re.exec(src))) {
    if (m.index > last) out.push(src.slice(last, m.index))
    const cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'k' : 'n'
    out.push(<span key={i++} className={cls}>{m[0]}</span>)
    last = re.lastIndex
  }
  out.push(src.slice(last))
  return out
}

const examples = [
  {
    id: 'a11y',
    tab: '접근성 카드',
    note: 'KWCAG 2.1 · WAI-ARIA — SA 인증(2025.12) 프로젝트 방식',
    ui: () => (
      <Card>
        <h4>접근성 인증 완료</h4>
        <p>KWCAG 2.1 기준으로 설계한 안내 카드입니다.</p>
        <Btn>자세히 보기</Btn>
      </Card>
    ),
    code: `<!-- AccessCard.vue -->
<template>
  <section class="card"
    role="region"
    aria-label="접근성 인증">
    <h4>접근성 인증 완료</h4>
    <p id="desc">KWCAG 2.1 기준 안내</p>
    <BaseButton variant="primary"
      aria-describedby="desc">
      자세히 보기
    </BaseButton>
  </section>
</template>`,
  },
  {
    id: 'table',
    tab: '데이터 테이블',
    note: 'Vue.js + Vuetify + TypeScript — 삼성SDS M.OFFICE 방식',
    ui: () => (
      <Table>
        <div className="h"><span>이름</span><span>상태</span><span>수정일</span></div>
        <div><span>Q-Vision</span><i>진행중</i><span>2026.11</span></div>
        <div><span>KN-MES</span><i className="ok">완료</i><span>2026.08</span></div>
        <div><span>INO 4.0</span><i className="ok">완료</i><span>2026.10</span></div>
      </Table>
    ),
    code: `<!-- ProjectTable.vue -->
<script setup lang="ts">
const headers = [
  { title: '이름', key: 'name' },
  { title: '상태', key: 'status' },
  { title: '수정일', key: 'date' },
]
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="items"
    density="comfortable"
  />
</template>`,
  },
  {
    id: 'nav',
    tab: '반응형 내비',
    note: 'SCSS 믹스인 — 삼성·퍼시스 반응형 웹 방식',
    ui: () => (
      <Nav>
        <b>LOGO</b>
        <span>Home</span><span>Works</span><span>About</span>
        <em>Menu</em>
      </Nav>
    ),
    code: `// _nav.scss
@mixin mobile { @media (max-width: 768px) { @content; } }

.nav {
  display: flex;
  gap: $space-4;
  align-items: center;

  &__item { display: block; }

  @include mobile {
    &__item { display: none; }
    &__menu { display: block; }
  }
}`,
  },
]

function Compare({ ex }) {
  const [pos, setPos] = useState(50)
  const ref = useRef(null)
  const drag = useRef(false)

  const move = x => {
    const r = ref.current.getBoundingClientRect()
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)))
  }

  return (
    <Stage
      ref={ref}
      onPointerDown={e => { drag.current = true; e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX) }}
      onPointerMove={e => drag.current && move(e.clientX)}
      onPointerUp={() => { drag.current = false }}
    >
      <Layer $side="design">
        <Tag $side="design">● FIGMA — 시안</Tag>
        <Center>{ex.ui()}</Center>
      </Layer>
      <Layer $side="code" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <Tag $side="code" style={{ left: 'auto', right: '1rem' }}>● {ex.id === 'nav' ? 'SCSS' : 'VUE 3'} — 구현</Tag>
        <Pre>{highlight(ex.code)}</Pre>
      </Layer>
      <Handle
        style={{ left: `${pos}%` }}
        role="slider" tabIndex={0}
        aria-label="시안과 코드 비교 슬라이더" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pos)}
        onKeyDown={e => {
          if (e.key === 'ArrowLeft') setPos(p => Math.max(0, p - 5))
          if (e.key === 'ArrowRight') setPos(p => Math.min(100, p + 5))
        }}
      />
    </Stage>
  )
}

export default function Process() {
  const [idx, setIdx] = useState(0)
  const ex = examples[idx]
  return (
    <Section id="process">
      <Label>// PROCESS</Label>
      <Title>Design <Swap>⇄</Swap> Code</Title>
      <Lead>같은 컴포넌트를 시안과 코드로 비교해 보세요. 가운데 선을 좌우로 드래그하면 됩니다.</Lead>
      <Tabs role="tablist">
        {examples.map((e, i) => (
          <TabBtn key={e.id} role="tab" aria-selected={i === idx} $active={i === idx} onClick={() => setIdx(i)}>
            {e.tab}
          </TabBtn>
        ))}
      </Tabs>
      <Compare key={ex.id} ex={ex} />
      <Note>{ex.note}</Note>
    </Section>
  )
}

const Section = styled.section`padding: 110px 2rem; max-width: 1200px; margin: 0 auto;`
const Label = styled.p`font: 500 .8rem var(--font-mono); color: var(--code); margin-bottom: .6rem;`
const Title = styled.h2`
  font: 700 clamp(2rem, 5vw, 3.4rem) var(--font-display); letter-spacing: -2px;
  color: var(--text); margin-bottom: .8rem;
`
const Swap = styled.span`color: var(--accent-soft);`
const Lead = styled.p`color: var(--text-muted); font-size: .95rem; margin-bottom: 2rem;`
const Tabs = styled.div`display: flex; gap: .5rem; flex-wrap: wrap; margin-bottom: 1rem;`
const TabBtn = styled.button`
  font: 500 .8rem var(--font-mono); padding: .5rem 1rem; border-radius: 8px;
  border: 1px solid ${p => p.$active ? 'var(--accent)' : 'var(--border)'};
  background: ${p => p.$active ? 'color-mix(in srgb, var(--accent) 18%, transparent)' : 'transparent'};
  color: ${p => p.$active ? 'var(--accent-soft)' : 'var(--text-muted)'};
  transition: all .2s;
  &:hover { border-color: var(--accent); }
`
const Stage = styled.div`
  position: relative; height: 400px; border-radius: 16px; overflow: hidden;
  border: 1px solid var(--border); box-shadow: var(--shadow-lg);
  cursor: ew-resize; touch-action: pan-y; user-select: none;
`
const Layer = styled.div`
  position: absolute; inset: 0; padding: 1.2rem;
  background: ${p => p.$side === 'design' ? 'var(--bg-alt)' : '#0d1117'};
`
const Tag = styled.span`
  position: absolute; top: 1rem; left: 1rem;
  font: 500 .68rem var(--font-mono); letter-spacing: 1px; padding: .3rem .7rem; border-radius: 99px;
  background: ${p => p.$side === 'design' ? 'color-mix(in srgb, var(--accent) 20%, transparent)' : 'rgba(126,231,135,.16)'};
  color: ${p => p.$side === 'design' ? 'var(--accent-soft)' : '#7ee787'};
`
const Center = styled.div`
  height: 100%; display: flex; align-items: center; justify-content: center; padding-right: 50%;
  @media (max-width: 700px) { padding-right: 0; justify-content: flex-start; padding-left: .5rem; }
`
const Pre = styled.pre`
  position: absolute; top: 3.6rem; left: calc(50% + 1.4rem); right: 1rem; font-variant-ligatures: none; font-feature-settings: "liga" 0, "calt" 0;
  font: .8rem/1.8 var(--font-mono); color: #c9d1d9; white-space: pre; overflow: hidden;
  .k { color: #ff7b72 } .s { color: #a5d6ff } .c { color: #8b949e } .n { color: #79c0ff }
  @media (max-width: 700px) { font-size: .66rem; }
`
const Handle = styled.div`
  position: absolute; top: 0; bottom: 0; width: 2px; margin-left: -1px; background: #fff;
  box-shadow: 0 0 14px rgba(255,255,255,.6); outline: none;
  &::after {
    content: '⇆'; position: absolute; top: 50%; left: -15px; width: 32px; height: 32px;
    border-radius: 50%; background: #fff; color: #111; display: grid; place-items: center;
    font-size: 15px; transform: translateY(-50%); box-shadow: 0 2px 10px rgba(0,0,0,.4);
  }
  &:focus-visible::after { outline: 3px solid var(--accent); }
`
const Note = styled.p`margin-top: 1rem; font: .78rem var(--font-mono); color: var(--text-muted);`

/* 시안 쪽 UI 목업 */
const Card = styled.div`
  background: #fff; color: #111; border-radius: 12px; padding: 1.4rem; width: 240px;
  outline: 2px dashed var(--accent); outline-offset: 7px;
  h4 { font: 700 1.05rem 'Noto Sans KR'; margin-bottom: .35rem; }
  p { font-size: .76rem; color: #666; margin-bottom: 1rem; line-height: 1.5; }
`
const Btn = styled.span`
  display: inline-block; background: #6c5ce7; color: #fff; padding: .55rem 1.1rem;
  border-radius: 8px; font-size: .76rem; font-weight: 700;
`
const Table = styled.div`
  background: #fff; color: #111; border-radius: 12px; width: 250px; overflow: hidden;
  outline: 2px dashed var(--accent); outline-offset: 7px; font-size: .74rem;
  div { display: grid; grid-template-columns: 1.2fr 1fr 1fr; padding: .6rem .8rem; border-top: 1px solid #eee; align-items: center; }
  .h { background: #f3f0ff; font-weight: 700; border-top: 0; }
  i { font-style: normal; font-size: .64rem; background: #fff3cd; color: #8a6d00; padding: 2px 8px; border-radius: 99px; width: fit-content; }
  i.ok { background: #d9f7e4; color: #0a7a3b; }
`
const Nav = styled.div`
  background: #fff; color: #111; border-radius: 12px; width: 280px; padding: .9rem 1rem;
  display: flex; gap: .9rem; align-items: center; font-size: .78rem;
  outline: 2px dashed var(--accent); outline-offset: 7px;
  b { margin-right: auto; font-weight: 900; }
  em { font-style: normal; background: #6c5ce7; color: #fff; padding: .3rem .7rem; border-radius: 6px; font-size: .7rem; display: none; }
`
