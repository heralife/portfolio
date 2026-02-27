import { useState } from 'react'
import styled from 'styled-components'
import { HiMail, HiExternalLink } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'

const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_URL

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact">
      <Inner>
        <Left>
          <SectionLabel>CONTACT</SectionLabel>
          <SectionTitle>함께 일해요<Dot>.</Dot></SectionTitle>
          <Desc>
            새로운 프로젝트, 협업, 또는 단순한 인사 — 언제든지 연락주세요.
          </Desc>
          <Links>
            <LinkItem href="mailto:heralife@nate.com">
              <HiMail size={20} />
              <span>heralife@nate.com</span>
            </LinkItem>
            <LinkItem href="https://github.com/heralife" target="_blank" rel="noopener">
              <SiGithub size={20} />
              <span>github.com/heralife</span>
              <HiExternalLink size={14} />
            </LinkItem>
          </Links>
        </Left>

        <Form onSubmit={handleSubmit}>
          <Field>
            <label>이름</label>
            <input
              type="text" placeholder="홍길동" required
              value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
            />
          </Field>
          <Field>
            <label>이메일</label>
            <input
              type="email" placeholder="your@email.com" required
              value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
            />
          </Field>
          <Field>
            <label>메시지</label>
            <textarea
              rows={5} placeholder="프로젝트 내용을 알려주세요..." required
              value={form.message}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
            />
          </Field>

          {status === 'success' && <StatusMsg $type="success">✓ 메시지가 전송됐습니다!</StatusMsg>}
          {status === 'error'   && <StatusMsg $type="error">전송 실패. 잠시 후 다시 시도해주세요.</StatusMsg>}

          <SubmitBtn type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? '전송 중...' : '메시지 보내기'}
          </SubmitBtn>
        </Form>
      </Inner>
    </Section>
  )
}

const Section = styled.section`padding: 120px 2rem;`
const Inner = styled.div`
  max-width: 1100px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1.2fr; gap: 5rem; align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 3rem; }
`
const Left = styled.div``
const SectionLabel = styled.p`font-size:.75rem;font-weight:700;letter-spacing:4px;color:var(--accent);margin-bottom:.5rem;`
const SectionTitle = styled.h2`font-size:clamp(2rem,5vw,3rem);font-weight:900;color:var(--text);letter-spacing:-2px;margin-bottom:1rem;`
const Dot = styled.span`color:var(--accent);`
const Desc = styled.p`font-size:1rem;line-height:1.8;color:var(--text-muted);margin-bottom:2rem;`
const Links = styled.div`display:flex;flex-direction:column;gap:.75rem;`
const LinkItem = styled.a`
  display:flex;align-items:center;gap:.75rem;
  font-size:.95rem;color:var(--text-muted);
  transition:color .2s;
  &:hover { color:var(--accent); }
`
const Form = styled.form`display:flex;flex-direction:column;gap:1.25rem;`
const Field = styled.div`
  display:flex;flex-direction:column;gap:.4rem;
  label { font-size:.82rem;font-weight:600;color:var(--text); }
  input, textarea {
    padding:.75rem 1rem;border-radius:10px;
    border:1px solid var(--border);background:var(--surface);
    color:var(--text);font-family:inherit;font-size:.95rem;
    transition:border-color .2s;resize:vertical;
    &::placeholder { color:var(--text-muted); }
    &:focus { outline:none;border-color:var(--accent); }
  }
`
const StatusMsg = styled.p`
  font-size:.9rem;font-weight:600;padding:.75rem 1rem;border-radius:10px;
  background:${p => p.$type === 'success' ? '#d1fae5' : '#fee2e2'};
  color:${p => p.$type === 'success' ? '#065f46' : '#991b1b'};
`
const SubmitBtn = styled.button`
  padding:.9rem 2rem;border-radius:50px;
  background:var(--accent);color:#fff;
  font-weight:700;font-size:1rem;
  transition:transform .2s,box-shadow .2s;
  &:hover:not(:disabled) { transform:translateY(-2px);box-shadow:0 8px 24px rgba(255,107,107,.4); }
  &:disabled { opacity:.6;cursor:not-allowed; }
`
