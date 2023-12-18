import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  SiTypescript,
  SiJavascript,
  SiRust,
  SiSequelize,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiCss3,
  SiAmazonaws
} from 'react-icons/si'
import { IoLogoNodejs, IoLogoPython, IoLogoHtml5 } from 'react-icons/io'
import { RiVuejsFill } from 'react-icons/ri'
import design from '../../public/design.png'
import code from '../../public/code.png'
type Props = {}

export default function SkillsSection({}: Props) {
  return (
    <section>
      <div className="text-center">
        <span className="text-purple-500 text-5xl font-bold">My Skills</span>

        <p className="text-xl font-bold py-5 leading-8 text-gray-800 dark:text-white">
          I strive to constantly expand my knowledge base. This list will be
          frequently updated.
        </p>
      </div>
      <motion.ul
        className="flex flex-wrap  md:flex-row sm:w-screen  md:w-auto px-2 mx-5 py-5 align-middle rounded-lg justify-center shadow-2xl dark:text-white"
        initial={{ x: 200, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <li className="flex flex-col justify-center px-3">
          <SiTypescript className="text-4xl text-center mx-auto" />
          <p>TypeScript</p>
        </li>
        <li className="flex flex-col justify-center px-3">
          <SiJavascript className="text-4xl text-center mx-auto" />
          <p>JavaScript</p>
        </li>
        <li className="flex flex-col justify-center px-3">
          <IoLogoPython className="text-4xl text-center mx-auto" />
          <p>Python</p>
        </li>
        <li className="flex flex-col justify-center px-3">
          <SiRust className="text-4xl text-center mx-auto" />
          <p>Rust</p>
        </li>
        <li className="flex flex-col justify-center px-3">
          <IoLogoHtml5 className="text-4xl text-center mx-auto" />
          <p>Html5</p>
        </li>
        <li className="flex flex-col justify-center px-3">
          <SiCss3 className="text-4xl text-center mx-auto" />
          <p>CSS3</p>
        </li>
        <li className="flex flex-col justify-center px-3">
          <SiSequelize className="text-4xl text-center mx-auto" />
          <p>SQL</p>
        </li>
        <li>
          <SiAmazonaws className="text-4xl text-center mx-auto font-bold" />
          <p>AWS</p>
        </li>
      </motion.ul>

      {/* Front-end skills */}
      <div className="lg:flex gap-20 mx-0">
        <motion.div
          className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gradient-to-r from-teal-600"
          initial={{ x: -200, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <Image
            src={design}
            width={100}
            height={100}
            className="mx-auto"
            alt="front-end logo"
          />
          <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
            Responsive Front-end Projects
          </h3>
          <p className="py-2 dark:text-white">
            Creating elegant designs suited for your website and business needs.
          </p>
          <h4 className="py-4 font-bold text-xl text-purple-600">
            Front-End Development Skills
          </h4>
          <ul className="flex flex-row justify-center dark:text-white">
            <li className="flex flex-col justify-center px-3">
              <SiReact className="text-4xl text-center mx-auto" />
              <p>React.js</p>
            </li>
            <li className="flex flex-col justify-center px-3">
              <RiVuejsFill className="text-4xl text-center mx-auto" />
              <p>Vue.js</p>
            </li>
            <li className="flex flex-col justify-center px-3">
              <SiNextdotjs className="text-4xl text-center mx-auto" />
              <p>Next.js</p>
            </li>
            <li className="flex flex-col justify-center px-3">
              <SiTailwindcss className="text-4xl text-center mx-auto" />
              <p>Tailwind</p>
            </li>
          </ul>
        </motion.div>

        {/* back-end skills */}
        <motion.div
          className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gradient-to-l from-teal-600"
          initial={{ x: 200, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <Image
            id="wrong"
            src={code}
            width={100}
            height={100}
            className="mx-auto"
            alt="back-end logo"
          />
          <h3 className="text-3xl font-bold pt-8 pb-2 dark:text-white">
            Intelligent Back-end Design
          </h3>
          <p className="py-2 dark:text-white">
            Whether it be SQL or nonSQL databases, I have experience creating
            complex associations between entities that allow you to easily
            access your business&apos; data.
          </p>
          <h4 className="py-4 font-bold text-xl text-purple-600">
            Back-end Development Skills
          </h4>
          <ul className="grid grid-cols-2 md:flex md:flex-row justify-center dark:text-white ">
            <li className="flex flex-col justify-center px-3">
              <IoLogoNodejs className="text-4xl text-center mx-auto" />
              <p>Node.js</p>
            </li>
            <li className="flex flex-col justify-center px-3">
              <SiExpress className="text-4xl text-center mx-auto" />
              <p>Express.js</p>
            </li>
            <li className="flex flex-col justify-center px-3">
              <SiFlask className="text-4xl text-center mx-auto" />
              <p>Flask</p>
            </li>
            <li className="flex flex-col justify-center px-3">
              <SiPostgresql className="text-4xl text-center mx-auto" />
              <p>PostgreSQL</p>
            </li>
            <li className="flex flex-col justify-center px-3">
              <SiMongodb className="text-4xl text-center mx-auto" />
              <p>Mongo</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
