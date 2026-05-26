import React from 'react'

export default function ProjectCard({ title, desc, href }: { title: string; desc: string; href?: string }) {
    const external = Boolean(href && href.startsWith('http'))

    return (
        <a
            href={href || '#'}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-200 hover:border-blue-400/30 hover:bg-white/[0.07] hover:-translate-y-0.5"
        >
            <div>
                <div className="text-xs uppercase tracking-[0.24em] text-blue-200/70">Selected work</div>
                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{desc}</p>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-200 transition group-hover:text-blue-100">
                View project
                <span aria-hidden="true">→</span>
            </div>
        </a>
    )
}
