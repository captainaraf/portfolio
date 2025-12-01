"use server"

import fs from "fs"
import path from "path"

export async function getVentureImages(key: string): Promise<string[]> {
    const directoryPath = path.join(process.cwd(), "public", "venture-assets", key)

    try {
        if (!fs.existsSync(directoryPath)) {
            return []
        }

        const files = fs.readdirSync(directoryPath)
        // Filter for image files and map to public URL paths
        const images = files
            .filter((file) => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file))
            .map((file) => `/venture-assets/${key}/${file}`)

        return images
    } catch (error) {
        console.error(`Error reading venture assets for key ${key}:`, error)
        return []
    }
}
