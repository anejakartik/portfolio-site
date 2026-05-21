import React from 'react'
import Layout from '../../components/Layout'

export default function FirstPost() {
    return (
        <Layout>
            <article className="glass-card rounded-3xl p-8">
                <h1 className="text-4xl font-black tracking-tight text-white">Shipping a production RAG pipeline — design and pitfalls</h1>
                <p className="mt-4 text-neutral-300">
                    Short summary: lessons learned building retrieval-augmented generation systems in production — from vector store choices to caching and observability.
                </p>

                <h2 className="mt-8 text-2xl font-semibold text-white">TL;DR</h2>
                <ul className="mt-4 space-y-3 text-neutral-300">
                    <li>Use a robust vector DB for scale.</li>
                    <li>Add a retrieval caching layer.</li>
                    <li>Monitor retrieval latency and relevance.</li>
                </ul>
            </article>
        </Layout>
    )
}