import React from 'react'

export default function Hero() {
    return (
        <section className="hero relative overflow-hidden rounded-3xl glass-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.10),transparent_24%)]" />
            <div className="relative z-10 max-w-3xl">
                <span className="section-label">Boston, MA · AI Infrastructure · Backend · MLOps</span>
                <h1 className="mt-6 text-5xl font-black tracking-tight text-white md:text-6xl">
                    Kartik Aneja builds production AI systems that ship.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
                    AI-focused Software Engineer with 5+ years building scalable backend systems, MLOps infrastructure, streaming data platforms, and RAG workflows for startups and enterprise teams.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <a className="cta-button-primary" href="/Kartik_Aneja_Resume.pdf">Download Resume</a>
                    <a className="cta-button-secondary" href="/projects">View Projects</a>
                    <a className="cta-button-secondary" href="/schedule">Schedule a Call</a>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {[
                        ['Backend', 'Python · Go · APIs · Microservices'],
                        ['Cloud', 'AWS · Azure · Kubernetes · Terraform'],
                        ['AI / Data', 'RAG · Kafka · Spark · dbt · Snowflake'],
                    ].map(([label, copy]) => (
                        <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                            <div className="text-xs uppercase tracking-[0.24em] text-neutral-400">{label}</div>
                            <div className="mt-2 text-sm text-neutral-200">{copy}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
