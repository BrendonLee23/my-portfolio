"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className='w-full h-full relative flex justify-center items-center'>
      {/* Circles */}
      <motion.svg 
        className="absolute w-[250px] xl:w-[400px] h-[250px] xl:h-[400px]"
        fill="transparent"
        viewBox="0 0 400 400"
        initial={{ opacity: 0 }} // Começa invisível
        animate={{ opacity: 1 }} // Aparece ao mesmo tempo que a foto
        transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle 
          cx="200" 
          cy="200" 
          r="190" 
          stroke="#fb0a4e" 
          strokeWidth="4" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
          initial={{ strokeDasharray: "24 10 0 0" }} 
          animate={{ 
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360]
          }} 
          transition={{repeat: Infinity, duration: 20, repeatType: "reverse" }}
        />
      </motion.svg>

      {/* Photo */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
        className="flex justify-center items-center"
      >
        <motion.div 
          className='w-[230px] h-[230px] xl:w-[380px] xl:h-[380px] mix-blend-lighten shadow-2xl flex justify-center items-center'
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2.9, duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src='/assets/eu.png'
            priority
            fill
            quality={100}
            alt='Brendo Moreira'
            className='object-contain drop-shadow-lg'
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo;
