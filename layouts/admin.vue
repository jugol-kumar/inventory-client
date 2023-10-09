<template>
  <AdminPreLoder v-if="isLoading"/>
  <div v-else class="transition-all ease-in-out duration-200 max-w-[1500px] m-auto relative">
    <!-- <div class="w-40 h-40 bg-blue-600 absolute"></div> -->
    <AdminSidebar/>
    <main class="w-full md:w-[calc(100%-256px)] md:ml-64 min-h-screen bg-slate-100 dark:bg-gray-900 transition-all main">
      <AdminHeader/>
      <div class="p-6">
        <slot/>
      </div>
    </main>
  </div>
</template>

<script setup>
  const isLoading = ref(true)
  onMounted(() => isLoading.value = false)
</script>