<script setup lang="ts">
import { WsHeader } from '@/components';
import { exercises } from '@/data/exercises';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <WsHeader title="Exercises" />

    <div class="py-6">
      <template v-for="exercise in exercises" :key="exercise.id">
        <RouterLink :to="`/exercises/${exercise.id}`" append>
          <div class="px-4 py-2 flex">
            <div class="w-12 h-12 rounded bg-primary-700 mr-2"></div>
            <div>
              <p class="font-semibold">{{ exercise.name }}</p>
              <p>{{ exercise.mainMuscleGroup }}</p>
            </div>
          </div>
        </RouterLink>
      </template>
    </div>
  </div>
</template>
