<template>
    <div class="px-6 py-3 flex items-start bg-white shadow-md shadow-black/5">
        <button type="submit" class="sidebar-toggle">
            <!-- <i class="ki-duotone ki-burger-menu-5"></i> -->
            <!-- <i class="ki-duotone ki-burger-menu-4 text-gray-500"></i> -->
            <i class="ki-duotone ki-abstract-14">
                <span class="path1"></span>
                <span class="path2"></span>
            </i>
        </button>
        <ul class="flex items-center ms-3">
            <li><NuxtLink to="javascript:void(0)" class="font-medium text-gray-400 hover:text-gray-600">Dashboard</NuxtLink></li>
            <li><span class="mx-1">/</span></li>
            <li><span class="font-medium">Analytics</span></li>
        </ul>
        <ul class="ml-auto flex items-center space-x-3">
            <li class="dropdown">
                <button type="submit" class="dropdown-toggle text-gray-400 w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 hover:text-gray-500 transition-all ease-in duration-100">
                    <i class="ki-duotone ki-magnifier">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    </i>
                </button>
                <div class="dropdown-menu hidden max-w-xs w-full bg-white border border-gray-100 z-10">
                    <form action="" class="p-4 border-b border-b-gray-100">
                        <div class="w-full relative">
                            <input type="text" class="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-sky-400" placeholder="Search...">
                            <i class="ki-duotone ki-magnifier absolute top-1/2 left-4 -translate-y-1/2 text-gray-300 text-lg">
                                <span class="path1"></span>
                                <span class="path2"></span>
                            </i>
                        </div>
                    </form>
                    <div class="mt-3">
                        <div class="font-medium text-sm text-gray-400 ml-4 mb-3">Resently</div>
                        <ul class="max-h-64 overflow-y-scroll scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-800">
                            <li v-for="i in 10" :key="i" class="cursor-pointer flex items-center gap-3 border-t border-t-gray-100 py-3 hover:bg-gray-100">
                                <i class="ki-duotone ki-graph-3 text-5xl text-blue-400">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                                <div>
                                    <p class="text-lg font-medium text-gray-500">Image View Here</p>
                                    <p class="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur consectetur consectetur adipisicing elit.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="dropdown">
                <button type="submit" class="dropdown-toggle text-gray-400 w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 hover:text-gray-500 transition-all ease-in duration-100">
                    <i class="ki-duotone ki-notification-on">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                    <span class="path5"></span>
                    </i>
                </button>
                <div class="dropdown-menu hidden max-w-xs w-full bg-white border border-gray-100 z-10">
                    <div class="mt-3">
                        <div class="font-medium text-sm text-gray-400 ml-4 mb-3">Resently</div>
                        <ul class="max-h-64 overflow-y-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-100">
                            <li v-for="i in 10" :key="i" class="cursor-pointer flex items-center gap-3 border-t border-t-gray-100 py-3 hover:bg-gray-100">
                                <i class="ki-duotone ki-graph-3 text-5xl text-blue-400">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                                <div>
                                    <p class="text-lg font-medium text-gray-500">Image View Here</p>
                                    <p class="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur consectetur consectetur adipisicing elit.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>

            <li class="dropdown">
                <button type="submit" class="dropdown-toggle text-gray-400 w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 hover:text-gray-500 transition-all ease-in duration-100">
                    <i class="ki-duotone ki-sun">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                    <span class="path5"></span>
                    <span class="path6"></span>
                    <span class="path7"></span>
                    <span class="path8"></span>
                    <span class="path9"></span>
                    </i>
                </button>
                <div class="dropdown-menu hidden max-w-[120px] w-full bg-white border border-gray-100 z-10">
                    <ul>
                        <li class="flex items-center gap-2 px-2 py-1 text-gray-300 hover:bg-gray-100 cursor-pointer">
                            <i class="ki-duotone ki-sun text-gray-400">
                                <span class="path1"></span>
                                <span class="path2"></span>
                                <span class="path3"></span>
                                <span class="path4"></span>
                                <span class="path5"></span>
                                <span class="path6"></span>
                                <span class="path7"></span>
                                <span class="path8"></span>
                                <span class="path9"></span>
                            </i>
                            <span class="text-gray-400 font-medium">Light</span>
                        </li>
                        <li class="flex items-center gap-2 border-t border-t-gray-100 px-2 py-1 text-gray-300 hover:bg-gray-100 cursor-pointer">
                            <i class="ki-duotone ki-moon text-gray-400">
                                <span class="path1"></span>
                                <span class="path2"></span>
                            </i>
                            <span class="text-gray-400 font-medium">Dark</span>
                        </li>
                        <li class="flex items-center gap-2 border-t border-t-gray-100 px-2 py-1 text-gray-300 hover:bg-gray-100 cursor-pointer">
                            <i class="ki-duotone ki-screen">
                                <span class="path1"></span>
                                <span class="path2"></span>
                                <span class="path3"></span>
                                <span class="path4"></span>
                            </i>
                            <span class="text-gray-400 font-medium">System</span>
                        </li>
                    </ul>
                </div> 
            </li>
            <li class="dropdown">
                <button type="submit" class="dropdown-toggle text-gray-400 w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 hover:text-gray-500 transition-all ease-in duration-100">
                    <img v-if="isLogined" src="https://placehold.co/32x32" class="w-8 h-8 rounded block object-cover" alt="">
                    <i v-else class="ki-duotone ki-user">
                        <span class="path1"></span>
                        <span class="path2"></span>
                    </i>
                </button>
                <div class="dropdown-menu hidden max-w-[220px] w-full bg-white border border-gray-100 z-10">

                    <div class="border-b border-b-gray-100">
                        <div class="p-4 flex items-center gap-2 cursor-pointer">
                            <img src="https://placehold.co/50x50" class="w-10 h-10 rounded block object-cover" alt="">
                            <div>
                                <p class="text-sm font-medium text-gray-700">Jugol Kumar</p>
                                <p class="text-xs text-gray-400">admin@system.com</p>
                            </div>
                        </div>
                    </div>

                    <ul class="py-4 px-4 border-b border-b-gray-100">
                        <li class="flex items-center gap-2 px-2 py-1 text-gray-300 hover:bg-gray-100 cursor-pointer rounded">
                            <i class="ki-duotone ki-user-tick text-gray-500">
                                <span class="path1"></span>
                                <span class="path2"></span>
                                <span class="path3"></span>
                            </i>
                            <span class="text-gray-400 font-normal">Mange Profile</span>
                        </li>
                        <li class="flex items-center gap-2 px-2 py-1 text-gray-300 hover:bg-gray-100 cursor-pointer rounded">
                            <i class="ki-duotone ki-setting text-gray-500">
                                <span class="path1"></span>
                                <span class="path2"></span>
                            </i>
                            <span class="text-gray-400 font-normal">Account Settings</span>
                        </li>
                    </ul>
                    <div class="py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                        <i class="ki-duotone ki-exit-left">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                        <span class="text-gray-400 font-normal">Sign Out</span>
                    </div>
                </div>
            </li>
        </ul>
   </div>
</template>

<script setup>
  import {createPopper} from "@popperjs/core"
  const isLogined = ref(false)

  onMounted(()=>{
    const popperInstance = {}
    document.querySelectorAll(".dropdown").forEach(function(item, index){
        const popperId = 'popper-'+index
        const toggle = item.querySelector(".dropdown-toggle")
        const menu = item.querySelector(".dropdown-menu")
        menu.dataset.popperId = popperId
        popperInstance[popperId] = createPopper(toggle, menu, {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 12],
                    },
                },
                {
                    name: 'preventOverflow',
                    options: {
                        padding: 24,
                    },
                },
            ],
            placement: 'bottom-end',
        });
    })

    document.addEventListener("click", function(e){
        const toggle = e.target.closest(".dropdown-toggle")
        const menu = e.target.closest(".dropdown-menu")

        if(toggle){
            const menuElement = toggle.closest(".dropdown").querySelector(".dropdown-menu")
            const popperId = menuElement.dataset.popperId
            if(menuElement.classList.contains("hidden")){
                hideDropdown()
                menuElement.classList.remove("hidden")
                showPopper(popperId)
            }else{
                menuElement.classList.add("hidden")
                hidePopper(popperId)
            }
        }else if(!menu){
            hideDropdown()
        }
    })

    function hideDropdown(){
        document.querySelectorAll(".dropdown-menu").forEach(function(item){
            item.classList.add("hidden")
        })
    }


    function showPopper(popperId) {
        popperInstance[popperId].setOptions(function(options){
            return {
                ...options,
                modifiers: [
                    ...options.modifiers,
                    { name: 'eventListeners', enabled: true },
                ],
            }
        })
        popperInstance[popperId].update();
    }

    
    function hidePopper(popperId) {
        popperInstance[popperId].setOptions(function(options){
            return {
                ...options,
                modifiers: [
                    ...options.modifiers,
                    { name: 'eventListeners', enabled: false },
                ],
            }
        })
    }
  })

</script>

<style>

</style>