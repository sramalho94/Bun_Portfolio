import React from 'react'
import { SiGithub } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="flex flex-row justify-center  bg-emerald-200 w-screen ">
      <ul className="flex flex-row text-center justify-center ">
        <li className="flex flex-row align-middle justify-center text-purple-600 hover:scale-125 transition-all duration-300">
          <SiGithub className="font-bold my-auto" />
          <a
            href="https://github.com/sramalho94/Bun_Portfolio"
            className="font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>
        </li>
        <li className="flex flex-row pl-4">
          <p>Built Using: Next.js, Tailwindcss</p>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
