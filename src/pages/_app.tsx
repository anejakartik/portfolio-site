import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const components = {}

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    return (
        <MDXProvider components={components}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={router.route}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.28 }}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </MDXProvider>
    )
}
