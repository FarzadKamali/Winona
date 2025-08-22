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
        <div class="card bg-base-100 card-xl shadow-sm">
          <div class="card-body">
          <div>
            <nuxt-link to="/" class="btn btn-xs btn-ghost">< Back</nuxt-link>
          </div>
            <h2 class="card-title text-1xl font-serif">{{ page.title }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 mb-4">
              <div class="text-xs text-gray-400"><span class="font-bold">Publish date:</span> {{ page.datePublished }} | <span class="font-bold">Modified date:</span> {{ page.dateModified }}</div>
            </div>
            <div class="mb-3" v-html="page.body"></div>
            <div class="text-xs text-gray-400">Reviwer: <span class="font-bold">{{ page.reviewer.credentials }} {{ page.reviewer.name }}</span> in affiliation with: <span class="font-bold">{{ page.reviewer.affiliation }}</span></div>
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
      // Update SEO meta only when 'page' data is available
      useSeoMeta({
        title: `Winona | ${article.seo?.title}` || 'Winona',
        description: article.seo?.description || 'Winona',
      });
    }
  },
  { immediate: true }
);

</script>