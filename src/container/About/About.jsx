import React, {useState, useEffect} from 'react'
import './About.css';

import { motion, } from 'framer-motion';
import {images} from '../../constants'
// import {urlFor, client} from '../../Client'

import {AppWrap, MotionWrap} from '../../wrapper'

const abouts = [
  {title: 'web Development', description: 'I am a good web devloper', imgUrl:images.webD},
  {title: 'Forntend Development', description: 'I am a good Forntend Development', imgUrl:images.frontD},
  {title: 'React Development', description: 'I am a good React Development',imgUrl:images.reactD},
  {title: 'Content Creater', description: 'I am a good Content Creater', imgUrl:images.about04},

]

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     console.log(data);
  //     setAbouts(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Development</span> <br /> means <span>Good Business</span></h2> 

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

// export default AppWrap(About, 'about');
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);


 
