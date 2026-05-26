import React from 'react'

export default function CalendlyPopup({ url = 'https://calendly.com/anejakartik68/30min' }: { url?: string }) {
    return (
        <a className="cta-button-secondary" href={url} target="_blank" rel="noreferrer">
            Open Calendly
        </a>
    )
}
