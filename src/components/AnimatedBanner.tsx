import React from 'react'

export default function AnimatedBanner() {
    const items = ['Production APIs', 'RAG systems', 'Streaming ETL', 'Deployment tooling', 'Data platform design']
    return (
        <div className="mt-6 flex flex-wrap gap-3">
            {items.map((it) => (
                <span
                    key={it}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-200 shadow-sm backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
                >
                    {it}
                </span>
            ))}
        </div>
    )
}
