import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { categories, projects, categoryColors } from '../data/projects'

export default function WorkGrid() {
  const [active, setActive] = useState('all')
  const navigate = useNavigate()

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <Section id="works">
      <SectionLabel>PORTFOLIO</SectionLabel>
      <SectionTitle>Works<Dot>.</Dot></SectionTitle>

      <FilterRow>
        {categories.map(c => (
          <FilterBtn key={c.id} $active={active === c.id} onClick={() => setActive(c.id)}>
            {c.label}
          </FilterBtn>
        ))}
      </FilterRow>

      <Grid>
        {filtered.map((p, i) => (
          <Card key={p.id} $delay={i * 0.05} onClick={() => navigate(`/project/${p.id}`)}>
            <ImgWrap>
              <img src={import.meta.env.BASE_URL + p.image.replace(/^\//, '')} alt={p.title} />
              <Overlay>
                <Badge $color={categoryColors[p.category]}>{p.category.toUpperCase()}</Badge>
                <CardTitle>{p.title}</CardTitle>
                <CardTools>{p.tools.join(' · ')}</CardTools>
              </Overlay>
            </ImgWrap>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`

const Section = styled.section`
  padding: 120px 2rem;
  max-width: 1200px; margin: 0 auto;
`
const SectionLabel = styled.p`
  font-size: 0.75rem; font-weight: 700; letter-spacing: 4px;
  color: var(--accent); margin-bottom: 0.5rem;
`
const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900; color: var(--text);
  letter-spacing: -2px; margin-bottom: 3rem;
`
const Dot = styled.span`color: var(--accent);`

const FilterRow = styled.div`
  display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 3rem;
`
const FilterBtn = styled.button`
  padding: 0.5rem 1.25rem; border-radius: 50px;
  font-size: 0.85rem; font-weight: 600;
  background: ${p => p.$active ? 'var(--accent)' : 'var(--bg-alt)'};
  color: ${p => p.$active ? '#fff' : 'var(--text-muted)'};
  border: 1px solid ${p => p.$active ? 'var(--accent)' : 'var(--border)'};
  transition: all 0.2s;
  &:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`
const Card = styled.div`
  border-radius: 16px; overflow: hidden;
  cursor: pointer;
  animation: ${fadeUp} 0.4s ease both;
  animation-delay: ${p => p.$delay}s;
  box-shadow: var(--shadow);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
`
const ImgWrap = styled.div`
  position: relative; aspect-ratio: 16/9; overflow: hidden;
  background: var(--bg-alt);
  img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.4s;
  }
  ${Card}:hover img { transform: scale(1.06); }
`
const Overlay = styled.div`
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%);
  padding: 1.25rem;
  display: flex; flex-direction: column; justify-content: flex-end; gap: 0.3rem;
  opacity: 0; transition: opacity 0.3s;
  ${Card}:hover & { opacity: 1; }
`
const Badge = styled.span`
  display: inline-block; padding: 0.2rem 0.6rem; border-radius: 20px;
  background: ${p => p.$color}; color: #fff;
  font-size: 0.65rem; font-weight: 700; letter-spacing: 1px;
  width: fit-content;
`
const CardTitle = styled.p`font-size: 0.95rem; font-weight: 700; color: #fff;`
const CardTools = styled.p`font-size: 0.75rem; color: rgba(255,255,255,0.7);`
