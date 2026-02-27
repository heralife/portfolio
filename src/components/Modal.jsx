import { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { HiX } from 'react-icons/hi'
import { categoryColors } from '../data/projects'

export default function Modal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!project) return null
  const color = categoryColors[project.category] || '#FF6B6B'

  return (
    <Overlay onClick={onClose}>
      <CloseBtn onClick={onClose}><HiX size={22} /></CloseBtn>

      <Inner onClick={e => e.stopPropagation()}>
        <ImgWrap>
          <img
            src={import.meta.env.BASE_URL + project.image.replace(/^\//, '')}
            alt={project.title}
          />
        </ImgWrap>

        <Info>
          <Badge $color={color}>{project.category.toUpperCase()}</Badge>
          <h2>{project.title}</h2>
          {project.year && <Year>{project.year}</Year>}
          {project.desc && <Desc>{project.desc}</Desc>}
          <ToolsRow>
            {project.tools.map(t => <Tool key={t}>{t}</Tool>)}
          </ToolsRow>
        </Info>
      </Inner>
    </Overlay>
  )
}

const fadeIn = keyframes`from { opacity:0 } to { opacity:1 }`
const slideUp = keyframes`from { transform:translateY(30px);opacity:0 } to { transform:translateY(0);opacity:1 }`

const Overlay = styled.div`
  position: fixed; inset: 0; z-index: 200;
  background: rgba(0,0,0,0.88);
  overflow-y: auto;
  padding: 3.5rem 1.5rem 3rem;
  animation: ${fadeIn} 0.2s ease;
`
const CloseBtn = styled.button`
  position: fixed; top: 1rem; right: 1rem; z-index: 210;
  width: 44px; height: 44px; border-radius: 50%;
  background: rgba(255,255,255,0.15); color: #fff;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.2s;
  backdrop-filter: blur(4px);
  &:hover { background: var(--accent); }
`
const Inner = styled.div`
  max-width: 1100px; margin: 0 auto;
  animation: ${slideUp} 0.3s ease;
`
const ImgWrap = styled.div`
  width: 100%;
  display: flex; justify-content: center;
  img {
    max-width: 100%;
    max-height: calc(82vh - 5rem);
    width: auto; height: auto;
    display: block;
    border-radius: 12px;
    box-shadow: 0 24px 64px rgba(0,0,0,0.6);
  }
`
const Info = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem 2rem;
  background: rgba(255,255,255,0.07);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  display: flex; flex-direction: column; gap: 0.6rem;
  h2 { font-size: 1.4rem; font-weight: 700; color: #fff; }
`
const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem; border-radius: 20px;
  background: ${p => p.$color}33;
  color: ${p => p.$color};
  font-size: 0.72rem; font-weight: 700; letter-spacing: 1px;
  width: fit-content;
`
const Year = styled.p`font-size: 0.85rem; color: rgba(255,255,255,0.5);`
const Desc = styled.p`font-size: 0.95rem; line-height: 1.7; color: rgba(255,255,255,0.75);`
const ToolsRow = styled.div`display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.25rem;`
const Tool = styled.span`
  padding: 0.25rem 0.7rem; border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.06);
  font-size: 0.75rem; color: rgba(255,255,255,0.6);
`
