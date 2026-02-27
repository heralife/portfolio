import styled from 'styled-components'
import { SiGithub } from 'react-icons/si'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <Foot>
      <Inner>
        <Logo>MH<Dot>.</Dot></Logo>
        <Copy>© 2026 명현화 · All Rights Reserved</Copy>
        <Icons>
          <IconLink href="mailto:heralife@nate.com" aria-label="Email"><HiMail size={20} /></IconLink>
          <IconLink href="https://github.com/heralife" target="_blank" rel="noopener" aria-label="GitHub"><SiGithub size={18} /></IconLink>
        </Icons>
      </Inner>
    </Foot>
  )
}

const Foot = styled.footer`
  border-top: 1px solid var(--border);
  padding: 2rem;
`
const Inner = styled.div`
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
`
const Logo = styled.p`font-size:1.2rem;font-weight:900;`
const Dot = styled.span`color:var(--accent);`
const Copy = styled.p`font-size:.82rem;color:var(--text-muted);`
const Icons = styled.div`display:flex;gap:.75rem;`
const IconLink = styled.a`
  color:var(--text-muted);transition:color .2s;
  &:hover { color:var(--accent); }
`
