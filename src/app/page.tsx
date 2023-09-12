'use client'

import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

import {
  SiJavascript,
  SiGithub,
  SiCss3,
  SiSequelize,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiRust
} from 'react-icons/si'
import { IoLogoPython, IoLogoHtml5, IoLogoNodejs } from 'react-icons/io'
import { RiVuejsFill } from 'react-icons/ri'
import Image from 'next/image'
import pictureOfMe from '../../public/pictureofme.jpg'
import design from '../../public/design.png'
import code from '../../public/code.png'
import { useState, useRef } from 'react'
import Project from '@/components/Project'
import projects from '../projectData'
import EmailForm from '@/components/EmailForm'
import Navbar from '@/components/Navbar'
import SkillsSection from '@/components/SkillsSection'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'
export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const targetRef1 = useRef<HTMLDivElement | null>(null)
  const targetRef2 = useRef<HTMLDivElement | null>(null)
  const targetRef3 = useRef<HTMLDivElement | null>(null)

  const [showEmailForm, setShowEmailForm] = useState<boolean>(false)

  const toggleEmailForm = () => {
    setShowEmailForm(!showEmailForm)
  }

  const scrollToRef = (ref: HTMLDivElement | null) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 40,
        behavior: 'smooth'
      })
    }
  }

  const handleClickScroll = (
    event: React.MouseEvent,
    ref: HTMLDivElement | null
  ) => {
    event.preventDefault()
    scrollToRef(ref)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-purple-200 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        {/* Nav Section */}
        <Navbar
          handleClickScroll={handleClickScroll}
          darkMode={darkMode}
          ref1={targetRef1}
          ref2={targetRef2}
          ref3={targetRef3}
        />

        {/* Header Section */}
        <section className="mb-20 ">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="text-sm font-burtons dark:text-white md:text-lg">
              stephanramalho@gmail.com
            </h1>
            <ul className="flex flex-row items-start md:items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl dark:text-white hover:scale-150 transition-all duration-300"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://docs.google.com/document/d/1qUU8qrM5QRt43vvQsLlP9WlA3HbnpUfFIirALzvLK_A/export?format=pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div
            className="text-center mb-10  flex flex-col mx-auto min-w-screen max-w-screen justify-center md:flex-row md:space-x-5 md:p-5"
            ref={targetRef1}
          >
            <div className="flex flex-row justify-center">
              <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden aspect-w-1 aspect-h-1 md:h-96 md:w-96 md:mt-20">
                <Image
                  src={pictureOfMe}
                  fill={true}
                  cover="true"
                  alt="profile_pic"
                  className="rounded-sm"
                />
              </div>
            </div>
            <div className="flex flex-col md:ml-7">
              <h2 className="text-5xl py-2 text-purple-600 font-medium md:text-6xl">
                Stephan D. Ramalho
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                Web Developer
              </h3>
              <p className="text-lg py-5 leading-8 text-gray-800 md:text-xl mx-auto max-w-md dark:text-white">
                A software engineer who loves collaboration, meeting goals, and
                always learning new things. Born and raised New Yorker, so I
                love a good slice of pizza and the subway. (when it runs on
                time) I let my passion for gaming and computer building lead me
                down the path of software engineering. I love learning and
                working on both Front-end and Back-end projects. Let&apos;s
                learn together!
              </p>

              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
                <a
                  href="http://www.linkedin.com/in/stephan-ramalho"
                  className="hover:scale-150 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://github.com/sramalho94"
                  className="hover:scale-150 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub />
                </a>
                <a
                  onClick={toggleEmailForm}
                  className="hover:scale-150 transition-all duration-300"
                >
                  <AiOutlineMail />
                </a>
              </div>
            </div>
          </div>
          {showEmailForm && (
            <div className="email-form-container w-1/3 flex flex-row justify-center mx-auto">
              <EmailForm darkMode={darkMode} />
            </div>
          )}
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
