import React from 'react'
import Hero from '../components/Hero'
import AnimatedBanner from '../components/AnimatedBanner'
import CalendlyEmbed from '../components/CalendlyEmbed'
import CalendlyPopup from '../components/CalendlyPopup'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
    const featuredWork = [
        {
            title: 'rag-serve',
            desc: 'A production RAG service with API boundaries, retrieval orchestration, and deployment-friendly patterns for teams that need something maintainable, not just a demo.',
            href: 'https://github.com/anejakartik/rag-serve',
        },
        {
            title: 'streamstage',
            desc: 'Streaming ETL primitives for Kafka and Spark workflows, focused on repeatability, data quality, and predictable operational behavior.',
            href: 'https://github.com/anejakartik/streamstage',
        },
        {
            title: 'modelops-helm',
            desc: 'Helm templates and MLOps scaffolding for teams that want reproducible serving, training, and release paths.',
            href: 'https://github.com/anejakartik/modelops-helm',
        },
    ]

    return (
        <Layout>
            <Hero />
            <AnimatedBanner />

            <section className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                <div className="glass-card rounded-[2rem] p-6 sm:p-8">
                    <span className="section-label">One-minute summary</span>
                    <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-300">
                        I’m an AI infrastructure engineer who likes shipping the unglamorous parts: the APIs, pipelines, and deployment paths that make AI products reliable once people actually use them.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                            <h2 className="text-lg font-semibold text-white">What I ship</h2>
                            <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-300">
                                <li>Production RAG systems that are structured for deployment, not just experimentation.</li>
                                <li>Streaming ETL and data pipelines with clearer operational boundaries.</li>
                                <li>MLOps scaffolding that makes training and serving repeatable.
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                            <h2 className="text-lg font-semibold text-white">What teams get</h2>
                            <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-300">
                                <li>Cleaner handoffs from prototype to production.</li>
                                <li>Systems that are easier to debug, deploy, and maintain.</li>
                                <li>Practical collaboration across engineering and product.</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="mt-8 text-2xl font-semibold text-white">Selected work</h2>
                    <div className="mt-4 grid gap-4">
                        {featuredWork.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>

                    <h2 className="mt-8 text-2xl font-semibold text-white">Quick links</h2>
                    <ul className="mt-4 space-y-3 text-neutral-300">
                        <li><a className="text-blue-200 hover:text-blue-100" href="/projects">Featured projects</a> — demos, architecture, and repo links</li>
                        <li><a className="text-blue-200 hover:text-blue-100" href="/schedule">Schedule</a> — direct booking link</li>
                        <li><a className="text-blue-200 hover:text-blue-100" href="/Kartik_Aneja_Resume.pdf">Resume</a> — download</li>
                    </ul>
                </div>

                <aside className="space-y-4 rounded-[2rem] border border-white/10 bg-black/25 p-6 shadow-2xl shadow-black/20">
                    <h2 className="text-xl font-semibold text-white">Book time</h2>
                    <p className="text-sm leading-7 text-neutral-400">Use the direct booking link if you want to skip the site and go straight to my calendar.</p>
                    <CalendlyPopup />
                    <CalendlyEmbed />
                </aside>
            </section>
        </Layout>
    )
}