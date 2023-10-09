<template>
  <div>
    <input 
        :placeholder="placeholder"
        :maxlenght="String(max)"
        class="w-full px-3 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium focus:outline-none placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium" 
        @focus="isFocused = true"
        @blur="isFocused = false"
        :class="isFocused ? 'border-gray-900' : ''"
        :type="inputType"
        v-model="inputComputed"
        autocomplete="off"
    />
    <span v-if="error" class="text-red-500 text-[14px] font-semibold">
        {{  error }}
    </span>
  </div>
  <!-- this is another input style -->
  <!-- class="w-full bg-[#EFF0EB] text-gray-800 border-2 text-sm border-[#EFF0EB] rounded-xl py-3.5 px-3 placeholder-gray-500 focus:outline-none" -->
</template>

<script setup>

    const emit = defineEmits(['update:input'])
    const props = defineProps(['input', 'placeholder', 'max', 'inputType', 'error'])
    const {input, placeholder, max, inputType, error} = toRefs(props)

    let isFocused = ref(false)

    const inputComputed = computed({
        get: ()=> input.value,
        set: (val) => emit('update:input', val)
    })

</script>

