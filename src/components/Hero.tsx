import React from 'react'

export default function Hero() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.10),transparent_26%)]" />
            <div className="relative grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.95fr)] lg:items-end lg:px-10 lg:py-10">
                <div>
                    <span className="section-label">Boston, MA · AI infrastructure · backend systems · MLOps</span>
                    <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                        I build the backend systems behind production AI products.
                    </h1>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
                        Software engineer with 5+ years of experience building scalable backend services, RAG workflows, streaming data platforms, and MLOps infrastructure for startup and enterprise teams.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a className="cta-button-primary" href="/Kartik_Aneja_Resume.pdf">Download Resume</a>
                        <a className="cta-button-secondary" href="/projects">Selected Work</a>
                        <a className="cta-button-secondary" href="/schedule">Book Time</a>
                    </div>

                    <dl className="mt-10 grid gap-3 sm:grid-cols-3">
                        {[
                            ['Production systems', 'APIs, orchestration, and deployment paths that stay maintainable.'],
                            ['Data platforms', 'Streaming ETL, analytical pipelines, and repeatable data workflows.'],
                            ['ML infrastructure', 'RAG, experiment support, and shipping models to production.'],
                        ].map(([label, copy]) => (
                            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                <dt className="text-xs uppercase tracking-[0.24em] text-blue-200/70">{label}</dt>
                                <dd className="mt-2 text-sm leading-6 text-neutral-200">{copy}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <aside className="rounded-[1.75rem] border border-white/10 bg-neutral-950/70 p-6 shadow-2xl shadow-black/20">
                    <div className="section-label">What I focus on</div>
                    <ul className="mt-5 space-y-4 text-sm leading-7 text-neutral-200">
                        <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                            <strong className="block text-white">Reliable AI infrastructure</strong>
                            Turning prototypes into systems teams can own and operate.
                        </li>
                        <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                            <strong className="block text-white">Data and orchestration</strong>
                            Designing pipelines and service boundaries that survive real traffic.
                        </li>
                        <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                            <strong className="block text-white">Shipping with context</strong>
                            Working across product, engineering, and infrastructure without adding noise.
                        </li>
                    </ul>
                </aside>
            </div>
        </section>
    )
}
