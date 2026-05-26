import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl flex-col">
                <header className="rounded-[1.75rem] border border-white/10 bg-black/25 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <a href="/" className="text-sm font-semibold uppercase tracking-[0.32em] text-neutral-400 transition hover:text-white">
                                Kartik Aneja
                            </a>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-300">
                                AI infrastructure, backend systems, and MLOps in Boston. I build the parts that keep AI products reliable in production.
                            </p>
                        </div>

                        <nav className="flex flex-wrap items-center gap-2 text-sm">
                            <a href="/projects" className="rounded-full border border-white/10 px-4 py-2 text-neutral-200 transition hover:border-white/20 hover:bg-white/5">
                                Projects
                            </a>
                            <a href="/schedule" className="rounded-full border border-white/10 px-4 py-2 text-neutral-200 transition hover:border-white/20 hover:bg-white/5">
                                Schedule
                            </a>
                            <a href="/Kartik_Aneja_Resume.pdf" className="rounded-full border border-white/10 px-4 py-2 text-neutral-200 transition hover:border-white/20 hover:bg-white/5">
                                Resume
                            </a>
                            <a href="https://github.com/anejakartik" target="_blank" rel="noreferrer" className="rounded-full bg-blue-500 px-4 py-2 font-medium text-white transition hover:bg-blue-400">
                                GitHub
                            </a>
                        </nav>
                    </div>
                </header>

                <main className="flex-1 py-8 sm:py-10">{children}</main>

                <footer className="border-t border-white/10 py-6 text-sm text-neutral-400 sm:flex sm:items-center sm:justify-between">
                    <p>Built for recruiter scans, hiring managers, and real product conversations.</p>
                    <div className="mt-3 flex flex-wrap gap-4 sm:mt-0">
                        <a className="transition hover:text-white" href="/projects">Projects</a>
                        <a className="transition hover:text-white" href="/schedule">Schedule</a>
                        <a className="transition hover:text-white" href="/Kartik_Aneja_Resume.pdf">Resume</a>
                        <a className="transition hover:text-white" href="https://github.com/anejakartik" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}
