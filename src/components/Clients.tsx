import React from 'react'

import { clients } from '../constants'
import { motion } from 'framer-motion'
import styles from '../styles'

const Clients = () => (
 <motion.section
  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
  transition={{ duration: 0.5 }}
  className={`${styles.flexCenter} my-4`}
 >
  <div className={`${styles.flexCenter} flex-wrap w-full`}>
   {clients.map((client) => (
    <div
     key={client.id}
     className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] hover:scale-125`}
    >
     <img
      src={client.logo}
      alt="client"
      className="sm:w-[192px] w-[100px] object-contain"
     />
    </div>
   ))}
  </div>
 </motion.section>
)

export default Clients
