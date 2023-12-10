import './App.css'
import PoMalone from '../src/assets/pomalone.jpg'

function App() {

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <img src={PoMalone} className="profilepic" alt="profile picture" />
      </div>
      <h1>Po Malone</h1>
      <h2>UX/UI Designer and Ful Stack Developer</h2>
      <h3>Introduction</h3>
      <p>My name is Po Malone and I am a UX/UI Designer and Full Stack Developer. I am currently a student at TechUp and I am looking for a job in the tech industry. I am a hard worker and I am willing to learn new things. I am a team player and I am willing to help others.</p>
      <h3>Skills</h3>
      <ul>
        <li>UX/UI Design</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
      </ul>
      <h3>Experience</h3>
      <p>UX/UI Designer and Full Stack Developer at TechUp</p>
      <p>May 2021 - Present</p>
      <p>UX/UI Designer and Full Stack Developer at TechUp</p>
      <p>May 2021 - Present</p>
      <h3>Education</h3>
      <p>TechUp</p>
      <p>2021 - Present</p>
      <p>University of California, Berkeley</p>
      <p>2017 - 2021</p>
      <h3>Contact</h3>
      <p>Email:themeyv@gmail.com</p>
      <p>Phone: 510-555-5555</p>
      <p>LinkedIn: https://www.linkedin.com/in/po-malone-123456789/</p>
      <p>GitHub:https://github.com/themeyv</p>
      </>
  )
}

export default App
