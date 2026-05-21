import React from 'react'
import Layout from '../components/Layout'
import CalendlyEmbed from '../components/CalendlyEmbed'

export default function Schedule() {
    return (
        <Layout>
            <h2 className="text-2xl font-semibold">Schedule time with me</h2>
            <p className="text-neutral-400 mt-2">Choose a slot — Calendly embed below.</p>
            <CalendlyEmbed url="https://calendly.com/anejakartik68/30min" />
        </Layout>
    )
}
