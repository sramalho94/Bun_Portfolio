'use client'

import { useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import SkillsSection from '@/components/SkillsSection'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'
import HeaderSection from '@/components/HeaderSection'
import AboutMe from '@/components/AboutMe'
export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const targetRef1 = useRef<HTMLDivElement | null>(null)
  const targetRef2 = useRef<HTMLDivElement | null>(null)
  const targetRef3 = useRef<HTMLDivElement | null>(null)

  const [showEmailForm, setShowEmailForm] = useState<boolean>(false)

  const toggleEmailForm = () => {
    setShowEmailForm(!showEmailForm)
  }

  const scrollToRef = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 40,
        behavior: 'smooth'
      })
    }
  }

  const handleClickScroll = (
    event: React.MouseEvent,
    ref: React.RefObject<HTMLDivElement> | null
  ) => {
    event.preventDefault()
    scrollToRef(ref)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-purple-500 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        {/* Nav Section */}
        <Navbar
          handleClickScroll={handleClickScroll}
          darkMode={darkMode}
          ref1={targetRef1}
          ref2={targetRef2}
          ref3={targetRef3}
        />

        {/* Bio/Contact Section */}
        <section className="mb-20 ">
          {/* Header Section */}
          <HeaderSection setDarkMode={setDarkMode} darkMode={darkMode} />

          {/* About Me */}
          <div ref={targetRef1}>
            <AboutMe
              showEmailForm={showEmailForm}
              toggleEmailForm={toggleEmailForm}
              darkMode={darkMode}
            />
          </div>
        </section>

        {/* Skills Section */}
        <section ref={targetRef2}>
          <SkillsSection />
        </section>

        {/* Portfolio Section */}
        <section ref={targetRef3}>
          <Portfolio />
        </section>
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  )
}
