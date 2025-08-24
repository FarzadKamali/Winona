<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 mb-4">
      <div v-if="pending" class="spinner-box fixed">
        <span class="loading loading-spinner loading-xl"></span>
      </div>

      <div v-else-if="error" role="alert" class="alert alert-error alert-outline">
        <span>{{ error.statusCode }} - {{ error.statusMessage }}</span>
      </div>

      <div v-else>
        <nuxt-link to="/" class="btn btn btn-ghost m-3 text-gray-600">< Back</nuxt-link>
        <div class="card bg-base-100 card-xl shadow-sm">
          <div class="card-body">
            <h2 class="card-title text-3xl mb-4">{{ page.title }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-1">
              <div class="text-sm text-gray-400"><span>Reviewed by: </span><span class="font-bold text-violet-300">{{ page.reviewer.credentials }} {{ page.reviewer.name }}</span></div>
              <div class="text-xs text-gray-400 sm:justify-self-end"><span>Updated: </span><span>{{ page.dateModified }}</span></div>
            </div>
            <div class="my-3" v-html="page.body"></div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '#imports';

const route = useRoute();
const id = route.params.id as string;

const { data: page, pending, error } = await useAsyncData(
  `page-${id}`,
  () => $fetch(`/api/pages/${id}`)
);


watch(
  page,
  (article) => {
    if (article) {
      useSeoMeta({
        title: `Winona | ${article.seo?.title}` || 'Winona',
        description: article.seo?.description || 'Winona',
      });
    }
  },
  { immediate: true }
);

</script>