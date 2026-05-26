import React from 'react'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    const projects = [
        { title: 'rag-serve', desc: 'Production RAG microservice — FastAPI, LangChain, vector DB.', href: 'https://github.com/anejakartik/rag-serve' },
        { title: 'streamstage', desc: 'Streaming ETL primitives — Kafka, PySpark.', href: 'https://github.com/anejakartik/streamstage' },
        { title: 'modelops-helm', desc: 'Helm templates for reproducible ML lifecycle.', href: 'https://github.com/anejakartik/modelops-helm' },
    ]

    return (
        <Layout>
            <section className="glass-card rounded-[2rem] p-6 sm:p-8">
                <span className="section-label">Selected work</span>
                <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Projects that show how I think about production AI systems.
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300">
                    These are the repos I’d point someone to if they want a quick read on the kind of engineering I enjoy: data movement, service boundaries, and tooling that stays useful after the demo.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} title={project.title} desc={project.desc} href={project.href} />
                    ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-neutral-300">
                    Looking for more context? Use the resume or schedule links in the header and I can walk through architecture, tradeoffs, and what I would change next.
                </div>
            </section>
        </Layout>
    )
}
