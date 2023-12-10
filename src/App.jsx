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
      <p>Rajabhat Chiang Mai University, Thailand</p>
      <p>Degree of Science and Technology, Public Health</p>
      <p>2011 - 2015</p>
      <p>TechUp</p>
      <p>2021 - Present</p>
      <h3>Full Stack Developer Final Projects</h3>
      <p>Home Service</p>
      <p>Home Service is a website that provides services for home maintenance. The website has two types of users: clients and admins. Clients can book services and admins can manage services.</p>
      <ul>
        <li><a href="https://home-service-l3fl.onrender.com/">Client</a></li>
      <li><a href="https://home-service-admin.onrender.com/">Admin</a></li>
      <li><a href="https://home-service-server.onrender.com/">Server</a></li>
      </ul>
      <h3>Experience's Life</h3>
      <h3>Contact</h3>
      <a href="https://www.themeyv@gmail.com">Email</a>

      <p>Phone:+66874665929</p>
      <a href="https://www.linkedin.com/methawee-potha/">LinkedIn: Methawee Potha</a>
      <br></br>
      <a href="https://github.com/themeyv">GitHub: Methawee Potha</a>
      </>
  )
}

export default App
