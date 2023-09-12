import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'

type HeaderSectionProps = {
  setDarkMode: (value: boolean) => void
  darkMode: boolean
}

const HeaderSection = ({ setDarkMode, darkMode }: HeaderSectionProps) => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
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
  )
}

export default HeaderSection
