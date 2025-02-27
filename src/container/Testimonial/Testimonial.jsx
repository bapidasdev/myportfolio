// import React, { useState, useEffect } from 'react';
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
// import { motion } from 'framer-motion';
// import { images } from '../../constants'
// import { AppWrap, MotionWrap } from '../../wrapper';
// import './Testimonial.css';


// const brandss = [
//   { name: 'Amazon',imgUrl: images.amazon },
//   { name: 'Spotify',imgUrl: images.spotify },
//   { name: 'Skype',imgUrl: images.skype },
//   { name: 'Bolt',imgUrl: images.bolt },
// ]

//  const testimonialss = [
//   { name: 'Sarha', company: "google", feedback:"Bapi is an awesome devloper", imgUrl: images.about01  },
//   { name: 'jone', company: "facebook", feedback:"Great job, would recommend", imgUrl: images.about02 },
//   { name: 'Michael', company: "TCS", feedback:"Bapi has great exprence", imgUrl: images.about02 },
// ]

// const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [testimonials, setTestimonials] = useState([]);
//   const [brands, setBrands] = useState([]);

//   const handleClick = (index) => {
//     setCurrentIndex(index);
//   };
//   return (
//     <>
//     {testimonialss.length && (
//       <>
//         <div className="app__testimonial-item app__flex">
//            <img src={testimonialss[currentIndex].imgUrl} alt={testimonialss.name} />
//           <div className="app__testimonial-content">
//             <p className="p-text">{testimonialss[currentIndex].feedback}</p>
//             <div>
//               <h4 className="bold-text">{testimonialss[currentIndex].name}</h4>
//               <h5 className="p-text">{testimonialss[currentIndex].company}</h5>
//             </div>
//           </div>
//         </div>

//         <div className="app__testimonial-btns app__flex">
//           <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonialss.length - 1 : currentIndex - 1)}>
//             <HiChevronLeft />
//           </div>

//           <div className="app__flex" onClick={() => handleClick(currentIndex === testimonialss.length - 1 ? 0 : currentIndex + 1)}>
//             <HiChevronRight />
//           </div>
//         </div>
//       </>
//     )}

//     <div className="app__testimonial-brands app__flex">
//       {brandss.map((brand) => (
//         <motion.div
//           whileInView={{ opacity: [0, 1] }}
//           transition={{ duration: 0.5, type: 'tween' }}
//           key={brand._id}
//         >
//           <img src={brand.imgUrl} alt={brand.name} />
//         </motion.div>
//       ))}
//     </div>
//   </>
//   )
// }

// // export default AppWrap(Testimonial, 'testimonial')
// export default AppWrap(
//   MotionWrap(Testimonial, 'app__testimonial'),
//   'testimonial',
//   'app__primarybg',
// );
