import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import styled from 'styled-components'
import { HiArrowLeft } from 'react-icons/hi'
import { projects, categoryColors } from '../data/projects'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === Number(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <NotFound>
        <p>프로젝트를 찾을 수 없습니다.</p>
        <BackBtn onClick={() => navigate('/')}>← 목록으로</BackBtn>
      </NotFound>
    )
  }

  const color = categoryColors[project.category] || '#FF6B6B'

  // 이전/다음 프로젝트
  const currentIndex = projects.findIndex(p => p.id === project.id)
  const prev = projects[currentIndex - 1] || null
  const next = projects[currentIndex + 1] || null

  return (
    <>
      <Header />
      <Page>
        <BackBtn onClick={() => navigate('/#works')}>
          <HiArrowLeft size={18} /> 목록으로
        </BackBtn>

        <Hero>
          <Badge $color={color}>{project.category.toUpperCase()}</Badge>
          <h1>{project.title}</h1>
          <Meta>
            {project.year && <Year>{project.year}</Year>}
            <ToolsRow>
              {project.tools.map(t => <Tool key={t}>{t}</Tool>)}
            </ToolsRow>
          </Meta>
          {project.desc && <Desc>{project.desc}</Desc>}
          {project.link && (
            <LinkBtn href={project.link} target="_blank" rel="noreferrer">
              프로젝트 보기 ↗
            </LinkBtn>
          )}
        </Hero>

        <ImgSection>
          {project.images
            ? project.images.map((img, i) => (
                <ProjectImg
                  key={i}
                  src={import.meta.env.BASE_URL + img.replace(/^\//, '')}
                  alt={`${project.title} ${i + 1}`}
                />
              ))
            : (
                <ProjectImg
                  src={import.meta.env.BASE_URL + project.image.replace(/^\//, '')}
                  alt={project.title}
                />
              )
          }
        </ImgSection>

        <Nav>
          {prev ? (
            <NavBtn onClick={() => navigate(`/project/${prev.id}`)}>
              ← {prev.title}
            </NavBtn>
          ) : <span />}
          {next ? (
            <NavBtn $right onClick={() => navigate(`/project/${next.id}`)}>
              {next.title} →
            </NavBtn>
          ) : <span />}
        </Nav>
      </Page>
      <Footer />
    </>
  )
}

const Page = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  min-height: 80vh;
`
const BackBtn = styled.button`
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-size: 0.85rem; font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  transition: color 0.2s;
  &:hover { color: var(--accent); }
`
const Hero = styled.div`
  margin-bottom: 3rem;
  h1 {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 900;
    color: var(--text);
    letter-spacing: -1px;
    margin: 0.5rem 0 1rem;
  }
`
const Badge = styled.span`
  display: inline-block;
  padding: 0.3rem 0.9rem; border-radius: 20px;
  background: ${p => p.$color}22;
  color: ${p => p.$color};
  font-size: 0.72rem; font-weight: 700; letter-spacing: 1.5px;
  border: 1px solid ${p => p.$color}44;
`
const Meta = styled.div`
  display: flex; align-items: center; flex-wrap: wrap; gap: 0.75rem;
  margin-bottom: 1rem;
`
const Year = styled.span`
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 600;
`
const ToolsRow = styled.div`
  display: flex; flex-wrap: wrap; gap: 0.35rem;
`
const Tool = styled.span`
  padding: 0.2rem 0.65rem; border-radius: 20px;
  border: 1px solid var(--border);
  background: var(--bg-alt);
  font-size: 0.75rem; color: var(--text-muted); font-weight: 500;
`
const Desc = styled.p`
  font-size: 1rem; line-height: 1.8;
  color: var(--text-muted);
  max-width: 640px;
  margin-bottom: 1.25rem;
`
const LinkBtn = styled.a`
  display: inline-block;
  padding: 0.6rem 1.4rem; border-radius: 8px;
  background: var(--accent); color: #fff;
  font-size: 0.88rem; font-weight: 700;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
`
const ImgSection = styled.div`
  display: flex; flex-direction: column; gap: 1.5rem;
  margin-bottom: 4rem;
`
const ProjectImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
`
const Nav = styled.div`
  display: flex; justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
`
const NavBtn = styled.button`
  font-size: 0.85rem; font-weight: 600;
  color: var(--text-muted);
  max-width: 280px;
  text-align: ${p => p.$right ? 'right' : 'left'};
  line-height: 1.4;
  transition: color 0.2s;
  &:hover { color: var(--accent); }
`
const NotFound = styled.div`
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; min-height: 60vh; gap: 1rem;
  color: var(--text-muted);
`
