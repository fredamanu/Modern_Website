import React from 'react'
import { motion } from 'framer-motion'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../styles'

const Billing = () => (
 <section id="product" className={layout.sectionReverse}>
  <motion.div
   className={layout.sectionImgReverse}
   whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
   transition={{ duration: 0.5 }}
  >
   <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
   <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
   <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
  </motion.div>
  <motion.div
   className={layout.sectionInfo}
   whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
   transition={{ duration: 0.5 }}
  >
   <h2 className={styles.heading2}>
    Easily Control your <br className="sm:block hidden" />
    billing & invoicing.
   </h2>
   <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
    neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
   </p>
   <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
    <img
     src={apple}
     alt="apple_store"
     className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
    />
    <img
     src={google}
     alt="google_play"
     className="w-[128px] h-[42px] object-contain cursor-pointer"
    />
   </div>
  </motion.div>
 </section>
)

export default Billing
