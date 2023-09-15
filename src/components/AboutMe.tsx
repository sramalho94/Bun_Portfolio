import React from 'react'
import Image from 'next/image'
import pictureOfMe from '../../public/pictureofme.jpg'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
import { SiGithub } from 'react-icons/si'
import EmailForm from './EmailForm'
import { motion } from 'framer-motion'

type Props = {
  showEmailForm: boolean
  toggleEmailForm: () => void
  darkMode: boolean
}

const AboutMe = ({ showEmailForm, toggleEmailForm, darkMode }: Props) => {
  return (
    <div className="text-center mb-10  flex flex-col mx-auto min-w-screen max-w-screen justify-center md:flex-row md:space-x-5 md:p-5">
      <div className="flex flex-row justify-center">
        <motion.div
          className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden aspect-w-1 aspect-h-1 md:h-96 md:w-96 md:mt-20"
          initial={{ x: -200, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image
            src={pictureOfMe}
            fill={true}
            objectFit="cover"
            alt="profile_pic"
            className="rounded-sm"
          />
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col md:ml-7"
        initial={{ x: 200, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-5xl py-2 text-purple-600 font-medium md:text-6xl">
          Stephan D. Ramalho
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
          Web Developer
        </h3>
        <p className="text-lg py-5 leading-8 text-gray-800 md:text-xl mx-auto max-w-md dark:text-white">
          A software engineer who loves collaboration, meeting goals, and always
          learning new things. Born and raised New Yorker, so I love a good
          slice of pizza and the subway. (when it runs on time) I let my passion
          for gaming and computer building lead me down the path of software
          engineering. I love learning and working on both Front-end and
          Back-end projects. Let&apos;s learn together!
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
        {showEmailForm && (
          <div className="email-form-container mt-5 w-screen flex flex-row justify-center mx-auto md:w-1/2">
            <EmailForm darkMode={darkMode} />
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default AboutMe
