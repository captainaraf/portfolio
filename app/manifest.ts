import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Shaidozzaman Araf Portfolio',
        short_name: 'Araf Portfolio',
        description: 'Portfolio of Shaidozzaman Araf, an AI engineer and Full Stack Developer.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a1a',
        theme_color: '#0a0a1a',
        icons: [
            {
                src: '/favicon.jpg',
                sizes: 'any',
                type: 'image/jpeg',
            },
        ],
    }
}
