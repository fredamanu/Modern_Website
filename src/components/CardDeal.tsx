import React from 'react'

import { card } from '../assets'
import Button from './Button'
import { motion } from 'framer-motion'
import styles, { layout } from '../styles'

const CardDeal = () => (
 <section id="" className={layout.section}>
  <motion.div
   className={layout.sectionInfo}
   whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
   transition={{ duration: 0.5 }}
  >
   <h2 className={styles.heading2}>
    Find a better card deal <br className="sm:block hidden" />
    in few easy steps
   </h2>
   <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet
    eget mauris tortor.ç Aliquet ultrices ac, ametau.
   </p>
   <Button styles="mt-10" />
  </motion.div>
  <motion.div
   className={layout.sectionImg}
   whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
   transition={{ duration: 0.5 }}
  >
   <img src={card} alt="card" className="w-[100%] h-[100%]" />
  </motion.div>
 </section>
)

export default CardDeal
