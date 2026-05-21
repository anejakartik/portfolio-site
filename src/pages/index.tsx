import React from 'react'
import Hero from '../components/Hero'
import AnimatedBanner from '../components/AnimatedBanner'
import CalendlyEmbed from '../components/CalendlyEmbed'
import CalendlyPopup from '../components/CalendlyPopup'
import Layout from '../components/Layout'

export default function Home() {
    return (
        <Layout>
            <Hero />
            <AnimatedBanner />

            <section className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
                <div className="glass-card rounded-3xl p-8">
                    <span className="section-label">One-minute summary</span>
                    <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-300">
                        AI-native backend & MLOps engineer. I build production RAG systems, streaming ETL, and reproducible ML infra. I focus on shipping reliable ML infra, reducing time-to-production for models, and building reusable primitives for teams.
                    </p>

                    <h2 className="mt-8 text-2xl font-semibold text-white">What I ship</h2>
                    <ul className="mt-4 space-y-3 text-neutral-300">
                        <li>Production RAG microservices with retrieval and orchestration.</li>
                        <li>Streaming ETL and exactly-once pipelines for analytics and ML.</li>
                        <li>MLOps templates (Helm/Terraform) for reproducible training and serving.</li>
                    </ul>

                    <h2 className="mt-8 text-2xl font-semibold text-white">Quick links</h2>
                    <ul className="mt-4 space-y-3 text-neutral-300">
                        <li><a className="text-blue-300 hover:text-blue-200" href="/projects">Featured projects</a> — demos, architecture, and code</li>
                        <li><a className="text-blue-300 hover:text-blue-200" href="/blog/first-post">Blog</a> — production RAG lessons</li>
                        <li><a className="text-blue-300 hover:text-blue-200" href="/Kartik_Aneja_Resume.pdf">Resume</a> — download</li>
                    </ul>
                </div>

                <aside className="space-y-4 rounded-3xl border border-white/10 bg-black/20 p-6">
                    <h2 className="text-xl font-semibold text-white">Book time</h2>
                    <p className="text-sm text-neutral-400">Prefer the popup modal or the inline embed below.</p>
                    <CalendlyPopup />
                    <CalendlyEmbed />
                </aside>
            </section>
        </Layout>
    )
}