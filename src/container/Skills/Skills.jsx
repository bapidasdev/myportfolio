import React, { useState, useEffect } from 'react'
import './Skills.css'
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip'
// import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper';
import data from '../../data';

// const skills = [
//   { name: 'HTML', imgUrl: images.html },
//   { name: 'CSS', imgUrl: images.css },
//   { name: 'Javascript', imgUrl: images.javascript },
//   { name: 'React', imgUrl: images.react },
//   { name: 'Redux', imgUrl: images.redux },
//   { name: 'Github', imgUrl: images.git },
//   {name: 'Material Ui', imgUrl:images.mu5}

// ]


const Skills = () => {
  // const [experiences, setExperiences] = useState([]);
  // const [skills, setSkills] = useState([]);
  return (
    <>
      <h2 className="head-text"> MY Skills </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {data.skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.imgUrl} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ----------experiences----------------experiences---------------- */}
        {/* <div className="app__skills-exp">
        {experiences.map((experience) => (
          <motion.div
            className="app__skills-exp-item"
            key={experience.year}
          >
            <div className="app__skills-exp-year">
              <p className="bold-text">{experience.year}</p>
            </div>

            <motion.div className="app__skills-exp-works">
              {workss.map((work) => (
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work.nameee}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                  </motion.div>
                </>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div> */}

      </div>
  
    </>
  )
}

// export default AppWrap(Skills, 'skills')
export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
