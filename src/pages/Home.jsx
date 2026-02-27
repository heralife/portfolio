import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WorkGrid from '../components/WorkGrid'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTo')
    if (target) {
      sessionStorage.removeItem('scrollTo')
      setTimeout(() => {
        const el = document.getElementById(target)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
