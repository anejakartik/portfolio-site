import React from 'react'

export default function ProjectCard({ title, desc, href }: { title: string; desc: string; href?: string }) {
    return (
        <a href={href || '#'} className="block p-4 bg-neutral-800 rounded hover:shadow">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-neutral-300 mt-1">{desc}</p>
        </a>
    )
}
