<script setup lang="ts">
import WsHeader from '@/components/WsHeader/WsHeader.vue';
import { exercises } from '@/data/exercises';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const exercise = exercises.find((exercise) => exercise.id === route.params.id);

const onClickEdit = () => {
  console.log('edit');
};
</script>

<template>
  <div>
    <WsHeader
      :title="exercise?.name"
      :onBack="router.back"
      :menu="[
        {
          lable: 'Edit',
          disabled: true,
          onClick: onClickEdit,
        },
      ]"
    />
  </div>
</template>
