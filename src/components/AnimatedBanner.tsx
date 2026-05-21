import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedBanner() {
    const items = ['AI Infrastructure', 'RAG', 'Streaming ETL', 'MLOps', 'Production APIs']
    return (
        <div className="mt-6 flex flex-wrap gap-3">
            {items.map((it, i) => (
                <motion.span
                    key={it}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.12, duration: 0.35 }}
                    whileHover={{ scale: 1.04 }}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 shadow-sm backdrop-blur"
                >
                    {it}
                </motion.span>
            ))}
        </div>
    )
}
