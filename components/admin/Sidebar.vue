<template>
    <div class="text-gray-800 font-inter">
      <div class="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu hidden md:block">
        <NuxtLink to="/admin" class="flex items-center pb-4 border-b border-b-gray-800">
          <i class="ki-duotone ki-binance  text-4xl bg-gradient-to-t from-blue-300 to-sky-300 text-white rounded">
            <span class="path1"></span>
            <span class="path2"></span>
            <span class="path3"></span>
            <span class="path4"></span>
            <span class="path5"></span>
          </i>
          <!-- <img src="https://placehold.co/32x32" class="w-8 h-8 object-cover rounded" alt=""> -->
          <span class="text-lg font-bold text-gray-100 ml-4">Logo</span>
        </NuxtLink>
      
        <ul class="mt-4 max-h-[85vh] overflow-y-scroll scrollbar-thin sidebar-menu">
          <li class="mb-1 group active">
            <NuxtLink to="javascript:void(0)" class="flex items-center py-2 px-3 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
              <i class="ki-duotone ki-element-2">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              <span class="ml-3 text-sm">Dashboard</span>
            </NuxtLink>
          </li>
          <!-- <li class="mb-1 group">
            <NuxtLink to="javascript:void(0)" class="flex items-center py-2 px-3 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800">
              <i class="ki-duotone ki-people">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
                <span class="path4"></span>
                <span class="path5"></span>
              </i>
              <span class="ml-3 text-sm">Customers</span>
            </NuxtLink>
          </li>
          
          <li class="mb-1 group">
            <NuxtLink to="javascript:void(0)" class="flex items-center py-2 px-3 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800">
              <i class="ki-duotone ki-directbox-default">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
                <span class="path4"></span>
              </i>
              <span class="ml-3 text-sm">Message</span>
            </NuxtLink>
          </li> -->
          <li class="mb-1 group">
            <NuxtLink to="javascript:void(0)" class="flex items-center py-2 px-3 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
              <i class="ki-duotone ki-abstract-42">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              <span class="ml-3 text-sm">Products</span>
            </NuxtLink>
          </li>
          <li class="mb-1 group">
            <NuxtLink to="javascript:void(0)" class="flex items-center py-2 px-3 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
              <i class="ki-duotone ki-nexo">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              <span class="ml-3 text-sm">Orders</span>
              <i class="ki-duotone ki-right ml-auto text-lg group-[.selected]:rotate-90"></i>
            </NuxtLink>
            <ul class="pl-8 mt-2 hidden group-[.selected]:block">
              <li class="mb-4">
                <NuxtLink to="javascript:void(0)" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents[''] before:w-1 before:h-1 before:rounded-full before:bg-white before:me-2">Active Orders</NuxtLink>
              </li>
            </ul>
          </li>
  
          <li class="mb-1 group">
            <NuxtLink to="javascript:void(0)" class="flex items-center py-2 px-3 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
              <i class="ki-duotone ki-courier">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
              </i>
              <span class="ml-3 text-sm">Services</span>
              <i class="ki-duotone ki-right ml-auto text-lg group-[.selected]:rotate-90"></i>
            </NuxtLink>
            <ul class="pl-8 mt-2 hidden group-[.selected]:block">
              <li class="mb-4">
                <NuxtLink to="javascript:void(0)" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents[''] before:w-1 before:h-1 before:rounded-full before:bg-white before:me-2">Active Orders</NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink to="javascript:void(0)" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents[''] before:w-1 before:h-1 before:rounded-full before:bg-white before:me-2">Vendors Orders</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="mb-1 group">
            <NuxtLink to="javascript:void(0)" class="flex items-center py-2 px-3 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
              <i class="ki-duotone ki-setting-2">
                <span class="path1"></span>
                <span class="path2"></span>
              </i>
              <span class="ml-3 text-sm">Settings</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="fixed left-0 top-0 w-full h-full bg-black/50 z-40 sidebar-overlay hidden md:hidden"></div>
    </div>
  </template>
  
  <script setup>

    const onlyOpenMenu = ref(false); // is open multi menu
    onMounted(()=>{
      document.querySelectorAll(".sidebar-dropdown-toggle").forEach(function(item){
        item.addEventListener("click", function(e){
          e.preventDefault
          const parent = item.closest(".group")
          if(parent.classList.contains("selected")){
            parent.classList.remove('selected')
          }else{
            if(onlyOpenMenu.value){
              document.querySelectorAll(".sidebar-dropdown-toggle").forEach(function(i){
                i.closest(".group").classList.remove("selected")
              })
            }
            parent.classList.add('selected')
          }
        })
      })
    })


  onMounted(()=>{
    const sidebarToggle = document.querySelector(".sidebar-toggle")
    const sidebarOverlay = document.querySelector(".sidebar-overlay")
    const sidebarMenu = document.querySelector(".sidebar-menu")
    const mainContent = document.querySelector(".main")


    sidebarToggle.addEventListener("click", function(e){
      e.preventDefault();
      mainContent.classList.toggle("active");
      sidebarOverlay.classList.toggle("hidden")
      sidebarMenu.classList.toggle("-translate-x-full")
      sidebarMenu.classList.remove("hidden")

    })
    
    sidebarOverlay.addEventListener("click", function(e){
      e.preventDefault();
      mainContent.classList.add("active");
      sidebarOverlay.classList.add("hidden")
      sidebarMenu.classList.add("-translate-x-full")      
      sidebarMenu.classList.add("hidden")
    })

  })

  </script>