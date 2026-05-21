import React, { useEffect, useState } from 'react'

export default function CalendlyPopup({ url = 'https://calendly.com/anejakartik68/30min' }: { url?: string }) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false)
        }
        window.addEventListener('keydown', onEsc)
        return () => window.removeEventListener('keydown', onEsc)
    }, [])

    return (
        <>
            <button className="cta-button-secondary" onClick={() => setOpen(true)}>
                Open scheduling modal
            </button>
            {open ? (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                            <div>
                                <h3 className="text-lg font-semibold text-white">Schedule a quick chat</h3>
                                <p className="text-sm text-neutral-400">Calendly popup modal for recruiter and founder calls.</p>
                            </div>
                            <button className="text-neutral-400 hover:text-white" onClick={() => setOpen(false)} aria-label="Close scheduling modal">
                                ✕
                            </button>
                        </div>
                        <iframe
                            src={`${url}?embed_domain=portfolio&embed_type=PopupText`}
                            width="100%"
                            height="720"
                            frameBorder="0"
                            title="Schedule time"
                        />
                    </div>
                </div>
            ) : null}
        </>
    )
}
