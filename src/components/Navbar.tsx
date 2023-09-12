import React from 'react'

interface NavbarProps {
  ref1: HTMLDivElement | null
  ref2: HTMLDivElement | null
  ref3: HTMLDivElement | null
  handleClickScroll: (
    event: React.MouseEvent,
    ref: HTMLDivElement | null
  ) => void
  darkMode: boolean
}

const Navbar: React.FC<NavbarProps> = ({
  handleClickScroll,
  darkMode,
  ref1,
  ref2,
  ref3
}) => {
  return (
    <header
      className={`flex flex-row justify-center mx-auto bg-emerald-200 fixed top-0 inset-x-0 z-50 ${
        darkMode ? 'dark' : ''
      }`}
    >
      <ul className="flex flex-row">
        <li>
          <a
            href="#"
            className="mr-10 font-bold text-purple-500 hover:underline"
            onClick={(event) => handleClickScroll(event, ref1)}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#"
            className="mr-10 font-bold text-purple-500 hover:underline"
            onClick={(event) => handleClickScroll(event, ref2)}
          >
            My Skills
          </a>
        </li>
        <li>
          <a
            href="#"
            className="mr-10 font-bold text-purple-500 hover:underline"
            onClick={(event) => handleClickScroll(event, ref3)}
          >
            Portfolio
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Navbar
