'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function GameGridSkeleton() {
  return (
    <motion.div 
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {[...Array(12)].map((_, index) => (
        <motion.div key={index} className="relative" variants={itemVariants}>
          <div className="aspect-[3/4] bg-gray-200 rounded-lg animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-300" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}