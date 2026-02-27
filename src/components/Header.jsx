import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'
import { useNavigate } from 'react-router-dom'

const navLinks = [
  { id: 'hero',    label: 'Home' },
  { id: 'works',   label: 'Works' },
  { id: 'about',   label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const { isDark, toggle } = useTheme()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      // 상세 페이지 등 다른 페이지에 있을 때 → 홈으로 이동 후 스크롤
      sessionStorage.setItem('scrollTo', id)
      navigate('/')
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Nav $scrolled={scrolled}>
      <Inner>
        <Logo onClick={() => scrollTo('hero')}>MH<Dot>.</Dot></Logo>

        <Links>
          {navLinks.map(l => (
            <NavLink key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</NavLink>
          ))}
        </Links>

        <Right>
          <ThemeBtn onClick={toggle} aria-label="테마 전환">
            {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
          </ThemeBtn>
          <Burger onClick={() => setMenuOpen(p => !p)} aria-label="메뉴">
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </Burger>
        </Right>
      </Inner>

      {menuOpen && (
        <MobileMenu>
          {navLinks.map(l => (
            <MobileLink key={l.id} onClick={() => { scrollTo(l.id); setMenuOpen(false) }}>
              {l.label}
            </MobileLink>
          ))}
        </MobileMenu>
      )}
    </Nav>
  )
}

const Nav = styled.header`
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  background: ${p => p.$scrolled ? 'var(--surface)' : 'transparent'};
  box-shadow: ${p => p.$scrolled ? 'var(--shadow)' : 'none'};
  backdrop-filter: ${p => p.$scrolled ? 'blur(12px)' : 'none'};
  transition: background 0.3s, box-shadow 0.3s;
`
const Inner = styled.div`
  max-width: 1200px; margin: 0 auto;
  padding: 0 2rem; height: 64px;
  display: flex; align-items: center; justify-content: space-between;
`
const Logo = styled.button`
  font-size: 1.6rem; font-weight: 900; letter-spacing: -1px;
  color: var(--text); background: none; cursor: pointer;
`
const Dot = styled.span`color: var(--accent);`

const Links = styled.nav`
  display: flex; gap: 2rem;
  @media (max-width: 768px) { display: none; }
`
const NavLink = styled.button`
  font-size: 0.9rem; font-weight: 500; color: var(--text-muted);
  background: none; cursor: pointer;
  transition: color 0.2s;
  &:hover { color: var(--accent); }
`
const Right = styled.div`display: flex; align-items: center; gap: 0.75rem;`

const ThemeBtn = styled.button`
  width: 38px; height: 38px; border-radius: 50%;
  background: var(--bg-alt); color: var(--text);
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.2s, background 0.2s;
  &:hover { transform: rotate(20deg); background: var(--border); }
`
const Burger = styled.button`
  color: var(--text); display: none;
  @media (max-width: 768px) { display: flex; }
`
const MobileMenu = styled.div`
  background: var(--surface); border-top: 1px solid var(--border);
  padding: 1rem 2rem;
  display: flex; flex-direction: column; gap: 1rem;
`
const MobileLink = styled.button`
  font-size: 1.1rem; font-weight: 500; color: var(--text);
  background: none; cursor: pointer; text-align: left;
  &:hover { color: var(--accent); }
`
