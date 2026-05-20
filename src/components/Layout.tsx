import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen px-6 py-10 max-w-4xl mx-auto">
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold">Kartik Aneja</h1>
                <p className="text-neutral-400 mt-1">AI Infrastructure • Backend • MLOps — Boston, MA</p>
            </header>
            <main>{children}</main>
            <footer className="mt-16 text-sm text-neutral-500">Resume • LinkedIn • GitHub</footer>
        </div>
    )
}
