import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedBanner(){
  const items = ['AI Infrastructure', 'RAG', 'Streaming ETL', 'MLOps', 'Production APIs']
  return (
    <div className="flex space-x-3 mt-4">
      {items.map((it, i) => (
        <motion.span
          key={it}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.12 }}
          className="px-3 py-1 bg-neutral-800 rounded text-sm"
        >
          {it}
        </motion.span>
      ))}
    </div>
  )
}
