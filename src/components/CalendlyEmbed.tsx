import React from 'react'

export default function CalendlyEmbed({ url = 'https://calendly.com/anejakartik68/30min' }: { url?: string }) {
    return (
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="section-label">Scheduling</div>
            <h3 className="mt-4 text-xl font-semibold text-white">Book a 30-minute call</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-300">
                Use the Calendly link below if you want to skip the site and go straight to the calendar.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
                <a className="cta-button-primary" href={url} target="_blank" rel="noreferrer">
                    Open Calendly
                </a>
                <a className="cta-button-secondary" href="/projects">
                    View projects
                </a>
            </div>
        </div>
    )
}
