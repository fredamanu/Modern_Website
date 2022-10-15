import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import styles from '../styles'

const CTA = () => (
 <motion.section
  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
  transition={{ duration: 0.5 }}
  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
 >
  <div className="flex-1 flex flex-col">
   <h2 className={styles.heading2}>Let's try our service now!</h2>
   <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Everything you need to accept card payments and grow your business anywhere
    on the planet.
   </p>
  </div>
  <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
   <Button styles="mt-10" />
  </div>
 </motion.section>
)

export default CTA
