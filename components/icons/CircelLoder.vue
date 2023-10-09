<template>
  <div :class="`${props.width} ${props.height}`" class="inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
    <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
  </div>
</template>

<script setup>

  const props = defineProps({
    width:{
      type:String,
      default:'w-5'
    },
    height:{
      type:String,
      default:'h-5'
    },
  })

</script>