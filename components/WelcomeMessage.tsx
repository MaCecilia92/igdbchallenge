'use client'

import { motion } from 'framer-motion'

export default function WelcomeMessage() {
  return (
    <motion.div 
      className="max-w-2xl mx-auto text-center mb-12 p-8 bg-white rounded-lg shadow-lg relative overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-blue-100 opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-200 to-blue-300 opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">IGDB Games</h1>
        <p className="text-lg mb-8 text-gray-600">
          Busca tus juegos favoritos usando la barra de búsqueda.
        </p>
      </div>
    </motion.div>
  )
}