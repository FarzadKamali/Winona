<template>
<div class="container mx-auto">
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Articles</h1>
      <h2>A list of articles fetched from the API</h2>

      <div v-if="pending" class="spinner-box fixed flex justify-center items-center z-999 w-dvw h-dvh bg-slate-100/80 top-0 left-0">
        <span class="loading loading-spinner loading-xl"></span>
      </div>
      
      <div v-if="error" role="alert" class="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{{ error.statusCode }} - {{ error.statusMessage }}</span>
      </div>

      <div v-if="data" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <div class="card shadow-sm border border-violet-500/20" v-for="page in data" :key="page.id">
          <div class="card-body">
            <span class="prose-xs text-neutral-400">{{ page.datePublished }}</span>
            <h2 class="card-title font-serif h-22 truncate-3 item-baseline">{{ page.title }}</h2>
            <div class="card-actions justify-end">
              <nuxt-link class="btn btn-xs lg:btn-sm btn-outline" :to="`/pages/${page.id}`">Read more...</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { data, error, pending } = useFetch("/api/pages");
</script>

<style lang="scss">
.truncate-3{
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>