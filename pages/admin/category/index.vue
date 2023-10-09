<template>
  <div class="mt-20 relative">
    <div class="w-20 h-36 rotate-45 rounded-full bg-orange-300/60 absolute left-[30%] top-20 blur-2xl"></div>
    <div class="w-20 h-36 rotate-45 rounded-full bg-blue-400/60 absolute right-0 bottom-0 blur-2xl"></div>
    <!-- <div class="w-20 h-36 rotate-45 rounded-full bg-teal-300 absolute left-1/2 top-1/2 blur-2xl"></div> -->

    <!-- <div class="flex items-center justify-between"> -->
        <h2 class="font-bold text-xl">Category Management</h2>
    <!-- </div> -->
    
    <div class="mt-16">
        
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <a href="#" class="text-slate-500 hover:underline">Category</a>
                <span>/</span>
                <h2 class="font-semibold">Home</h2>
            </div>
            <button class="bg-slate-800 text-white px-3 py-1 rounded-lg text-sm">Add New</button>

        </div>

        <div class="grid grid-cols-3 gap-8 mt-16">


            <div v-if="isLoading" class="bg-gray-600 animate-pulse shadow-md min-h-[20rem] rounded-md grid place-items-center transition-all ease-in-out duration-300">
                <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                    <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
            </div>


            <div v-else class="bg-white/10 backdrop-blur-3xl shadow-md min-h-[20rem] rounded-md relative">
                <div class="w-20 h-36 rotate-45 rounded-full bg-purple-400/40 absolute bottom-0 left-8 blur-2xl"></div>

                <div class="px-8 py-5 bg-white/40 overflow-hidden border-b rounded-tl-md rounded-tr-md">
                    <h2 class="font-bold text-xl text-gray-600">Overvew</h2>
                </div>

                <!-- <div class="p-3 flex items-center text-gray-500">
                    <p class="text-sm">There are no category define yet. </p>
                    <a class="text-xs ms-2 font-medium underline" href="">create one</a>
                </div> -->

                <div class="p-3 max-h-[500px] overflow-y-scroll scrollbar-thin">
                    <ul>
                        <li v-for="i in 50" class="flex justify-between px-3 py-1 rounded-md hover:bg-gray-200 cursor-pointer" :key="i">
                            <span class="font-medium text-gray-500">Category Title</span>
                            <span>
                                <i class="ki-duotone ki-down text-gray-500 text-2xl font-bold"></i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            
            
            <div v-if="isLoading" class="col-span-2 bg-gray-600 animate-pulse shadow-md min-h-[20rem] rounded-md grid place-items-center transition-all ease-in-out duration-300">
                <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite" role="status">
                    <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
            </div>

            <div v-else class="col-span-2 bg-white/20 shadow-md min-h-[20rem] rounded-md backdrop-blur-xl relative">
                <div class="w-36 h-36 -rotate-45 rounded-[50px] bg-gradient-to-tr to-orange-400 from-purple-400 absolute top-0 left-8 blur-[85px]"></div>

                <div class="px-8 py-5 bg-white/40 overflow-hidden border-b rounded-tl-md rounded-tr-md">
                    <h2 class="font-bold text-xl text-gray-600">Operations</h2>
                </div>
                <div class="p-3 flex items-center text-gray-500">
                    <p class="text-sm">Select first a category for reatured actions</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>

    const isLoading = ref(true)


    setTimeout(() => {
        isLoading.value = false;
    }, 5000);

    definePageMeta({layout:"admin"})
</script>

<style>

</style>