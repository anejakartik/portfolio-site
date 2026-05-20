import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen px-6 py-10 max-w-4xl mx-auto">
            <header className="mb-8">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold">Kartik Aneja</h1>
                        <p className="text-neutral-400 mt-1">AI Infrastructure • Backend • MLOps — Boston, MA</p>
                    </div>
                    <div className="space-x-3">
                        <a href="/Kartik_Aneja_Resume.pdf" className="px-3 py-2 bg-neutral-800 rounded text-sm">Download Resume</a>
                        <a href="https://calendly.com/your-calendly" target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-blue-600 rounded text-sm">Schedule</a>
                    </div>
                </div>
            </header>
            <main>{children}</main>
            <footer className="mt-16 text-sm text-neutral-500">Resume • LinkedIn • GitHub</footer>
        </div>
    )
}
