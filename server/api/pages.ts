export default defineEventHandler(async () => {
    const config = useRuntimeConfig()

    try {
        const data = await $fetch(`${config.public.apiUrl}/pages`, {
        headers: {
            Authorization: config.apiKey
        }
    })
    return data
    } catch (error: any) {
        console.error("API error:", error)
        throw createError({
            statusCode: error.response?.status,
            statusMessage: "Failed to fetch from API"
        })
    }
})
