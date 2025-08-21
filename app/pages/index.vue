<template>
<div class="container mx-auto">
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Articles</h1>

      <div v-if="pending" class="spinner-box">
        <span class="loading loading-spinner loading-xl"></span>
      </div>
      
      <div v-if="error" role="alert" class="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{{ error.statusCode }} - {{ error.statusMessage }}</span>
      </div>

      <div v-if="data" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <div class="card bg-base-200 shadow-sm" v-for="page in data" :key="page.id">
          <div class="card-body">
            <p class="prose-xs text-neutral-400">{{ page.datePublished }}</p>
            <h2 class="card-title">{{ page.title }}</h2>
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
  .spinner-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparentize(#ffffff, .15);
    z-index: 9999;
  }
</style>