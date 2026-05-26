import React from 'react'
import Layout from '../../components/Layout'

export default function FirstPost() {
    return (
        <Layout>
            <article className="glass-card rounded-[2rem] p-6 sm:p-8">
                <span className="section-label">Blog</span>
                <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Shipping a production RAG pipeline: the parts that matter.
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300">
                    A short write-up on the choices that tend to make or break retrieval systems once they move beyond a prototype: retrieval quality, caching, observability, and service boundaries.
                </p>

                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                    {[
                        ['Retrieval quality', 'You only get a good answer if the retrieval layer is predictable and well scoped.'],
                        ['Caching', 'A small cache can dramatically cut latency for repeated or similar requests.'],
                        ['Observability', 'Track latency, recall, and relevance before users tell you the system feels slow.'],
                    ].map(([title, copy]) => (
                        <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                            <h2 className="text-lg font-semibold text-white">{title}</h2>
                            <p className="mt-3 text-sm leading-7 text-neutral-300">{copy}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-neutral-950/50 p-5 text-sm leading-7 text-neutral-300">
                    The main idea: production RAG is less about “adding embeddings” and more about designing the retrieval path so it stays debuggable, measurable, and affordable under load.
                </div>
            </article>
        </Layout>
    )
}