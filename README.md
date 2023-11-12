# Stephan D Ramalho Portfolio

![image](https://i.imgur.com/ToRBcz1.jpg)

---

## **_Description_**

### A portfolio of my Software Engineering projects

### Built Using Next.js, Tailwindcss

---

### This is a rework of my previous portfolio project using TypeScript and Bun

- [OldPortfolio](https://github.com/sramalho94/portfolio_2023)

## Getting Started

---

- `clone` the github repository
- `cd` into the root of the directory
- run `bun install` to install packages
- run `bun run dev` to run the application

### Getting started with docker

- run `docker pull sramalho94/bun_portfolio:latest`
- run `docker run -p 3000:3000 --name sdrportfolio sramalho94/sdrportfolio:latest`
- got to http://localhost:3000 to see the application

---

### **_*Technologies Used*_**

- Next.js
- Tailwindcss
- Docker
- Bun
- TypeScript
- AWS Amplify

---

### CI/CD Pipeline

#### Workflows

- Workflows are integrated using github actions

  - `dependency_check.yml`

    - checks for any dependency warnings, if there are warnings then the PR is rejected and the dependencies causing the warnings are listed in a automated comment on the PR

#### Preview Builds

- Branches that open Pull Requests to the `dev` branch are automatically deployed through `AWS Amplify Previews`

---

## Links

### [LinkedIn](http://www.linkedin.com/in/stephan-ramalho)

### [Dockerhub](https://hub.docker.com/r/sramalho94/bun_portfolio)

### **_Acknowledgements_**

- First and foremost, I would like to express my sincerest gratitude to the recruiters, professionals, and peers who are taking the time to review my portfolio. Your consideration and feedback are invaluable as I continue to grow and refine my skills in the software engineering field.
- I am deeply grateful to the numerous software engineers who have generously shared their knowledge, expertise, and encouragement throughout my journey. Their guidance and collaboration have been instrumental in honing my skills and fostering a passion for learning and innovation.
- Lastly, I extend my heartfelt thanks to the creators and contributors of Next.js and TailwindCSS. Their dedication to developing and maintaining these robust, performance-oriented frameworks has provided the software engineering community with versatile tools that empower developers to build scalable, modular, and visually appealing web applications.
