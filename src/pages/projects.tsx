import React from 'react'
import Layout from '../components/Layout'

export default function Projects() {
    return (
        <Layout>
            <h2 className="text-3xl font-semibold">Projects</h2>
            <ul className="mt-6 space-y-4">
                <li className="card p-4 bg-neutral-800 rounded">
                    <h3 className="font-bold">rag-serve</h3>
                    <p className="text-sm text-neutral-300 mt-1">Production RAG microservice — FastAPI, LangChain, vector DB.</p>
                </li>
                <li className="card p-4 bg-neutral-800 rounded">
                    <h3 className="font-bold">streamstage</h3>
                    <p className="text-sm text-neutral-300 mt-1">Streaming ETL primitives — Kafka, PySpark.</p>
                </li>
            </ul>
        </Layout>
    )
}
