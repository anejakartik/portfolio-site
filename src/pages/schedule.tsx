import React from 'react'
import Layout from '../components/Layout'
import CalendlyEmbed from '../components/CalendlyEmbed'

export default function Schedule() {
    return (
        <Layout>
            <section className="glass-card rounded-[2rem] p-6 sm:p-8">
                <span className="section-label">Schedule</span>
                <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Book a 30-minute conversation.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300">
                    The fastest way to reach me is through Calendly. If the embed ever feels flaky, the direct link will still work.
                </p>
                <div className="mt-8 max-w-2xl">
                    <CalendlyEmbed url="https://calendly.com/anejakartik68/30min" />
                </div>
            </section>
        </Layout>
    )
}
