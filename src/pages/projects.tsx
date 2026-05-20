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
            <h2 className="text-3xl font-semibold">Projects</h2>
            <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2">
                {projects.map(p => (
                    <ProjectCard key={p.title} title={p.title} desc={p.desc} href={p.href} />
                ))}
            </div>
        </Layout>
    )
}
