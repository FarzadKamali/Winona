export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') // get {id} from /api/pages/:id
  const config = useRuntimeConfig()

  try {
    const res = await $fetch(`https://2gtshonemmlvswaqfcepdjsbqy0rdwth.lambda-url.us-west-2.on.aws/pages/${id}`, {
      headers: {
        Authorization: config.apiKey,
      },
    })

    return res
  } catch (err: any) {
    throw createError({
      statusCode: err?.statusCode || 500,
      statusMessage: err?.statusMessage || 'Failed to fetch api',
    })
  }
})
