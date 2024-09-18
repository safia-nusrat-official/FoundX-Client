import { envConfig } from "@/src/config/env";

export default async function getRecentPosts() {
    const res = await fetch(`${envConfig.base_url}/items`)
    const data = await res.json()
    await delay(8000)
    return data
}

export const delay = async(ms=2000) => {
    return await new Promise((resolve)=>setTimeout(resolve, ms))
}