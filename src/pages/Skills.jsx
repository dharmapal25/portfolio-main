// import { BsGithub } from 'react-icons/bs'
// import '../styles/Skills.css'
// import { DiHtml5 } from 'react-icons/di'
// import { SiSocket, SiSocketdotio } from 'react-icons/si'

// const categories = [
//   {
//     icon: '🖥️',
//     title: 'Frontend',
//     tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'GSAP', 'DOM'],
//   },
//   {
//     icon: '⚙️',
//     title: 'Backend',
//     tags: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'EJS'],
//   },
//   {
//     icon: '🗄️',
//     title: 'Database',
//     tags: ['MongoDB', 'MySQL', 'Mongoose'],
//   },
//   {
//     icon: '🛠️',
//     title: 'Tools & DevOps',
//     tags: ['Git', 'GitHub', 'Docker (Basic)', 'VS Code', 'Postman', 'Vite'],
//   },
//   {
//     icon: '🤖',
//     title: 'AI / ML',
//     tags: [
//       { name: 'Python', learning: false },
//       { name: 'NumPy',  learning: false },
//       { name: 'Pandas', learning: false },
//       { name: 'Scikit-learn', learning: true },
//       { name: 'TensorFlow',   learning: true },
//     ],
//   },
// ]

// export default function Skills() {
//   return (
//     <section className="skills">
//       <div className="container">

//         {/* SECTION HEADER */}
//         <p className="section-label">02. Skills <SiSocketdotio/> </p>
//         <h2 className="section-title">What I <span>Work With</span></h2>
//         <div className="section-divider" />

//         <div className="skills__grid">
//           {categories.map(cat => (
//             <div className="skills__card" key={cat.title}>
//               <span className="skills__card-icon">{cat.icon}</span>
//               <p className="skills__card-title">{cat.title}</p>
//               <div className="skills__tags">
//                 {cat.tags.map(tag => {
//                   const name     = typeof tag === 'string' ? tag : tag.name
//                   const learning = typeof tag === 'object' ? tag.learning : false
//                   return (
//                     <span
//                       key={name}
//                       className={`skills__tag ${learning ? 'learning' : ''}`}
//                     >
//                       {name}{learning ? ' ✦' : ''}
//                     </span>
//                   )
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* LEARNING NOTE */}
//         <p style={{
//           marginTop: '28px',
//           fontFamily: 'var(--font-display)',
//           fontSize: '12px',
//           color: 'var(--text-muted)',
//         }}>
//           <span style={{ color: '#f59e0b' }}>✦</span> Currently learning
//         </p>

//       </div>
//     </section>
//   )
// }

import '../styles/Skills.css'

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaDocker } from 'react-icons/fa'
import { SiJavascript, SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiSocketdotio, SiPostman, SiVite, SiNumpy, SiPandas, SiGreensock } from 'react-icons/si'
// import { TbBrandGsap } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'
import { MdAnimation, MdApi } from 'react-icons/md'
import { BiBrain } from 'react-icons/bi'
import { TbAi, TbApi } from 'react-icons/tb'
import { AiFillTool } from 'react-icons/ai'

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 style={{ fill: "#ffc369ff", height: "30px", width: "20px" }} /> },
      { name: 'CSS3', icon: <FaCss3Alt style={{ fill: "#fdb9ffff", height: "30px", width: "20px" }} /> },
      { name: 'JavaScript', icon: <SiJavascript style={{ fill: "#ebff33ff", height: "30px", width: "20px" }} /> },
      { name: 'React', icon: <FaReact style={{ fill: "#69faffff", height: "30px", width: "20px" }} /> },
      { name: 'GSAP', icon: <SiGreensock style={{ fill: "#24d600ff", height: "30px", width: "23px" }} /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', icon: <FaNodeJs style={{ fill: "#24d600ff", height: "30px", width: "20px" }}  /> },
      { name: 'Express JS', icon: <SiExpress style={{ fill: "#ffffffff", height: "30px", width: "20px" }}  /> },
      { name: 'Socket.IO', icon: <SiSocketdotio style={{ fill: "#ffffffff", height: "30px", width: "20px" }}  /> },
      { name: 'REST API', icon: <TbApi style={{ fill: "#ffffffff", height: "30px", width: "25px" }}  /> },
      { name: 'MongoDB', icon: <SiMongodb style={{ fill: "#24d600ff", height: "30px", width: "25px" }}  /> },
      { name: 'MySQL', icon: <SiMysql style={{ fill: "#69f5ffff", height: "30px", width: "25px" }}  /> },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt style={{ fill: "#ff6309ff", height: "30px", width: "20px" }}  /> },
      { name: 'GitHub', icon: <FaGithub style={{ fill: "#ffffffff", height: "30px", width: "20px" }}  /> },
      { name: 'VS Code', icon: <VscCode style={{ fill: "#76ffe8ff", height: "30px", width: "20px" }}  /> },
      { name: 'Postman', icon: <SiPostman style={{ fill: "#dd5100ff", height: "30px", width: "20px" }}  /> },
      { name: 'AI Tools', icon: <AiFillTool style={{ fill: "#f8b015ff", height: "30px", width: "20px" }}  /> },
    ],
  }
]

function Skills() {
  return (
    <section className="skills">
            <title>Dharmapal | Skills</title>

      <div className="container">

        <p className="section-label">02. Skills</p>
        <h2 className="section-title">What I <span>Work With</span></h2>
        <div className="section-divider" />

        <div className="skills__grid">
          {categories.map((cat, i) => (
            <div
              className="skills__card"
              key={cat.title}
              style={{ animationDelay: `${i * 0.1 + 0.1}s` }}
            >
              <h3 className="skills__card-title">{cat.title}</h3>

              <ul className="skills__list">
                {cat.skills.map(skill => (
                  <li className="skills__item" key={skill.name}>
                    <span className="skills__item-icon">{skill.icon}</span>
                    <span className="skills__item-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills