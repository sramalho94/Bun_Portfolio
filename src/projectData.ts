interface Project {
  image: string
  name: string
  description: string
  projectLink: string
  githubLink: string
  technologies: string[]
}

const projects: Project[] = [
  {
    image: 'https://imgur.com/Cvneh0C.png',
    name: 'Clearviction',
    description: 'Clearviction is a Next.js-based web application designed to assist formerly incarcerated individuals in Washington State. My role within the Tech Foundations team involves leading the integration of a CI/CD pipeline for streamlined development and deployment. A significant focus of my contributions has been enhancing site accessibility by refactoring metadata, adding ARIA-labels, and image alt text. I actively engage in open-source collaboration by reviewing pull requests. This project reflects my commitment to using technology for social impact and inclusivity while maintaining high coding standards.',
    projectLink: 'https://clearviction.org/',
    githubLink: 'https://github.com/clearviction-devs/clearviction-wa',
    technologies: ['aws', 'next', 'typescript', 'node', 'sanity', 'mui']
  },
  {
    image: '/CommunityTestLab.png',
    name: 'Community Test Lab',
    description:
      'As the Dev Lead for a 9-person team in The Opportunity Project 2023, I directed the development of a full-stack application for the Community Test Lab. This platform facilitates efficient Covid-19 test result reporting and provides a user-friendly data dashboard displaying key statistics. Implementing unit tests using Jest ensured the reliability of our Postgres Sequelize back-end, seamlessly integrated into our CI pipeline via Github Actions. Our React-native front-end, built with TypeScript and styled using Nativewindcss, promises a polished user experience. Deployment to AWS RDS and Elastic Beanstalk optimized performance, while our front-end awaits review for App Store and Google Play inclusion, reflecting our commitment to quality and innovation.',
    projectLink: 'https://www.youtube.com/watch?v=4eHxm5Mdk98',
    githubLink: 'https://github.com/sramalho94/TOP_Frontend',
    technologies: [
      'aws',
      'react',
      'express',
      'tailwind',
      'typescript',
      'postgres',
      'node'
    ]
  },
  {
    image: '/Allstate_screenshot.png',
    name: 'Allstate Carpets',
    description: `I led a software development project that involved designing a web application for a client using Next13 technology. My colleague and I applied tailwindcss styling to enhance the user interface and incorporated a touch-enabled slideshow to improve user experience. We deployed the application on Amazon Web Services (AWS) and attached it to a custom domain that the customer had previously purchased. We followed a professional and technical approach to ensure the application met the client's requirements and adhered to industry best practices. Our aim was to deliver a high-quality web application that met the client's needs and exceeded their expectations.`,
    projectLink: 'https://www.allstatecarpets.com/',
    githubLink: 'https://github.com/jcarr048/AllstateCarpets',
    technologies: ['aws', 'next', 'tailwind']
  },
  {
    image: '/PokePro.png',
    name: 'PokePro',
    description: `In this final project for General Assembly's Software Engineering Immersive, I made a full stack web application that allows users to look up trainers in the base pokemon games and see their pokemon team. Suggestions are given on how to beat each pokemon based on that Pokemon's type.`,
    projectLink: 'https://www.pokebattlepro.com/',
    githubLink: 'https://github.com/sramalho94/PokePro',
    technologies: [
      'javascript',
      'tailwind',
      'postgres',
      'express',
      'react',
      'node'
    ]
  },
  {
    image: '/faults2.png',
    name: 'The Faults In Our Stars',
    description: `The Faults In Our Stars is a hyper-personalized, social experience bringing astrology into the 22nd century. Our aim is to create social circles revolving around zodiac signs. This website will allow you to connect to people that are compatible to your zodiac sign and at the same time rate the users based on their personalities and sign compatibility; whether good or bad, create new social circles, that will improve your work and love life.`,
    projectLink: 'https://starz-app.herokuapp.com/',
    githubLink:
      'https://github.com/BrianDLara/The-Faults-In-Our-Stars_Frontend',
    technologies: ['javascript', 'css', 'postgres', 'express', 'react', 'node']
  },
  {
    image: '/cornhub.png',
    name: 'Corney Island',
    description: `In this group hackathon project, our group created a theme parked themed web page. There are a number of themes and attractions to navigate through as you explore the page. The user also has the capability to add and delete attractions as well.`,
    projectLink: 'https://corney-island2022.herokuapp.com/',
    githubLink: 'https://github.com/sramalho94/Corney_Island_Group_Project',
    technologies: [
      'javascript',
      'css',
      'html',
      'mongodb',
      'express',
      'react',
      'node'
    ]
  },
  {
    image: '/subwaysurfers.png',
    name: 'Subway Surfers',
    description: `The Subway Surfers project is a full-stack MERN application designed to enable users to review the reliability and safety of New York City subway lines. Employing MongoDB, React.js, Node.js, and Express, the platform supports seamless CRUD operations through RESTful API calls and utilizes Mongoose for structuring MongoDB collections. The visually appealing user interface, designed with CSS3, includes a landing page displaying a navigation bar and submitted reviews. The navigation bar directs users to sign-up forms, review submission forms, and back to the landing page. Each review features buttons for easy deletion and updating, enhancing user experience. Subway Surfers provides an accessible platform for users to share insights on NYC subway lines' safety and reliability.`,
    projectLink: 'https://subway-surfers2022.herokuapp.com/',
    githubLink: 'https://github.com/sramalho94/SubwaySurfer',
    technologies: [
      'javascript',
      'css',
      'html',
      'mongodb',
      'express',
      'react',
      'node'
    ]
  },
  {
    image: '/battleships.png',
    name: `Admiral Stephan's BattleShips`,
    description: `In this first project, I created a web browser version of the classic board game, Battleship. Using only vanilla JavaScript I created a fully functional game where the player goes against an AI. When either the player or the AI runs out of ships, the game is over.`,
    projectLink: 'https://admiralstephanbattleship.surge.sh/',
    githubLink:
      'https://github.com/sramalho94/Admiral-Stephan-Battleship-Project',
    technologies: ['javascript', 'css', 'html']
  }
]

export default projects
