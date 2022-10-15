import React from 'react'

import { motion } from 'framer-motion'
import { stats } from '../constants'
import styles from '../styles'

const Stats = () => (
 <motion.section
  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
  transition={{ duration: 0.5 }}
  className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
 >
  {stats.map((stat, index) => (
   <div
    key={stat.id}
    className={`flex justify-start items-center flex-row m-3`}
   >
    <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white ">
     {stat.value}
    </h4>
    <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 ">
     {stat.title}
    </p>
   </div>
  ))}
 </motion.section>
)

export default Stats
