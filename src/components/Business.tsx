import React from 'react'

import Button from './Button'
import { features } from '../constants'
import { motion } from 'framer-motion'
import styles, { layout } from '../styles'

type Props = {
 key: string
 id: string
 icon: string
 title: string
 content: string
 index: number
}

const FeatureCard: React.FC<Props> = ({ icon, title, content, index }) => (
 <motion.div
  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
  transition={{ duration: 0.5 }}
  className={`flex flex-row p-6 rounded-[20px] ${
   index !== features.length - 1 ? 'mb-6' : 'mb-0'
  } feature-card`}
 >
  <div
   className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
  >
   <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
  </div>
  <div className="flex-1 flex flex-col ml-3">
   <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px]">
    {title}
   </h4>
   <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
    {content}
   </p>
  </div>
 </motion.div>
)

const Business = () => (
 <section id="features" className={layout.section}>
  <motion.div
   className={layout.sectionInfo}
   whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
   transition={{ duration: 0.5 }}
  >
   <h2 className={styles.heading2}>
    You do the business, <br className="sm:block hidden" />
    we'll handle the money
   </h2>
   <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    With the right credit card, you can improve your financial life by building
    credit, earning rewards and saving money. But with hundreds of credit cards
    on the market.
   </p>
   <Button styles="mt-10" />
  </motion.div>

  <div className={`${layout.sectionImg} flex-col`}>
   {features.map((feat, index) => (
    <FeatureCard key={feat.id} {...feat} index={index} />
   ))}
  </div>
 </section>
)

export default Business
