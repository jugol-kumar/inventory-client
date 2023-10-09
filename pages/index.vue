<template>

  <AdminPreLoder v-if="preloder"/>
  <div v-else class="w-screen h-screen fixed bg-gradient-to-br from-purple-400 to-orange-300">

    <div class="w-full h-full bg-white/30 backdrop-blur-[218px] grid place-items-center relative">
        
        <div class="w-80 min-h-[20rem] h-auto bg-white/10 backdrop-blur-[100px] rounded-lg z-10 relative border border-white/50">
            <div class="absolute w-60 h-60 bg-orange-200/50 -top-16 right-8 -z-10 blur-3xl"></div>
            <!-- <div class="absolute w-60 h-60 bg-purple-100 -bottom-20 left-10 -z-10 blur-3xl"></div> -->
            <div class="flex justify-center mt-6">
                <i class="ki-duotone ki-security-user text-[4rem] text-gray-700">
                    <span class="path1"></span>
                    <span class="path2"></span>
                </i>
            </div>
            <div class="flex items-center justify-center">
                <h1 class="text-3xl font-bold">Login</h1>
            </div>
            <form @submit.prevent="login()" class="flex flex-col gap-2 p-5"> 
                <div class="flex flex-col gap-1">
                    <label for="" class="font-medium">Email / Phone</label>

                    <FormTextInput 
                        placeholder="e.g inventory@main.com"
                        v-model:input="email"
                        inputType="email"
                        :error="errors && errors.email ? errors.email[0] : ''"
                    />
                    <!-- <input type="text" class="px-3 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium focus:outline-none placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium" :disabled="isLoading" :class="isLoading ? 'bg-gray-300' : 'bg-gray-200'"  placeholder="e.g example@inventory.com"> -->
                </div>

                <div class="flex flex-col gap-1">
                    <label for="" class="font-medium">Password</label>
                    <FormTextInput 
                        placeholder="******"
                        v-model:input="password"
                        inputType="password"
                        :error="errors && errors.password ? errors.password[0] : ''"
                    />
                    <!-- <input type="text" class="px-3 py-2 rounded-lg text-gray-700 font-medium focus:outline-none placeholder:text-gray-400 placeholder:text-sm placeholder:font-medium"  :disabled="isLoading" :class="isLoading ? 'bg-gray-300' : 'bg-gray-200'" placeholder="******"> -->
                </div>

                <button v-if="isLoading" class="bg-gray-600 text-white py-2 rounded-lg mt-6">
                    <IconsCircelLoder />
                </button>
                <button v-else class="text-white py-2 rounded-lg mt-6 font-semibold" :disabled="(!email || !password)" :class="(!email || !password) ? 'bg-gray-300 text-gray-900' : 'bg-gray-900'" type="submit">Login</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script setup>

    const email = ref(null)
    const password = ref(null)
    const errors = ref(null)


    const isLoading = ref(false)

    const login = () =>{
        await useFetch("http://localhost:8000/")
    }

    
    const preloder = ref(true)
    onMounted(() => preloder.value = false)
</script>

<style>

</style>