import React from 'react'

export default function CalendlyEmbed({ url = 'https://calendly.com/anejakartik68/30min' }: { url?: string }) {
    return (
        <div className="mt-6">
            <div id="calendly-embed" style={{ minHeight: '600px' }}>
                <iframe
                    src={`${url}?embed_domain=portfolio&embed_type=Inline`}
                    width="100%"
                    height="700"
                    frameBorder="0"
                    title="Schedule time"
                />
            </div>
        </div>
    )
}
