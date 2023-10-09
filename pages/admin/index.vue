<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="i in 5" :key="i" class="p-2 card relative">
        <div class="flex gap-5 items-start">
          <i class="ki-duotone ki-basket-ok text-green-600 rounded-full text-5xl p-3 bg-green-100">
            <span class="path1"></span>
            <span class="path2"></span>
            <span class="path3"></span>
            <span class="path4"></span>
          </i>
          <div class="flex gap-3 flex-col w-full">
            <div>
              <p class="font-bold text-xl text-gray-500">136 
                <i class="ki-duotone ki-abstract-10 text-lg text-green-500">
                  <span class="path1"></span>
                  <span class="path2"></span>
                </i>
              </p>
              <p class="text-sm font-medium text-gray-500">Active Orders</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-full h-[6px] bg-gray-200 rounded-full">
                <div :style="`width:${i * 2}0%`" class="h-full bg-gradient-to-r from-green-300 to-green-800 rounded-full"></div>
              </div>
              <span class="text-xs font-normal text-gray-500">{{ i * 10 * 2 }}%</span>
            </div>
          </div>
        </div>
        <div class="absolute top-2 right-2 hover:bg-gray-200 flex rounded-full cursor-pointer">
          <i class="ki-duotone ki-dots-horizontal">
            <span class="path1"></span>
            <span class="path2"></span>
            <span class="path3"></span>
          </i>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-4 card">
          <div class="flex justify-between mb-4 items-start">
            <div class="font-medium">Active Orders</div>
            <div class="dropdown">
              <button class="dropdown-toggle hover:bg-gray-200 flex rounded-full cursor-pointer">
                <i class="ki-duotone ki-dots-horizontal hover:text-gray-800">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                </i>
              </button>
              <ul class="dropdown-menu hidden w-full max-w-[140px] z-10 card">
                <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                  <i class="ki-duotone ki-notepad-edit text-orange-300 text-lg group-hover:text-orange-700">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  <span class="text-gray-500 hover:text-gray-600">Edit</span>
                </li>
                <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                  <i class="ki-duotone ki-trash text-red-300 text-lg group-hover:text-red-700">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                    <span class="path5"></span>
                  </i>
                  <span class="text-gray-500 hover:text-gray-600">Delete</span>
                </li>
                <div class="border-t border-gray-100"></div>
                <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                  <i class="ki-duotone ki-exit-right-corner text-purple-300 text-lg group-hover:text-purple-700">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  <span class="text-gray-500 hover:text-gray-600">Export</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex items-center order-tab mb-5">
            <button data-tab="order" data-tab-page="active" class="bg-gray-50 font-medium text-gray-400 py-1 px-4 rounded-tl-md rounded-bl-md hover:text-gray-600 active">Active</button>
            <button data-tab="order" data-tab-page="deliveried" class="bg-gray-50 font-medium text-gray-400 py-1 px-4 hover:text-gray-600 ">Deliveried</button>
            <button data-tab="order" data-tab-page="cancled" class="bg-gray-50 font-medium text-gray-400 py-1 px-4 rounded-br-md rounded-tr-md hover:text-gray-600">Cancled</button>
          </div>
          <div class="overflow-auto scrollbar-thin  max-h-[350px] scrollbar-track-slate-100 scrollbar-thumb-red-400">
            <table data-tab-for="order" data-page="active" class="w-full min-w-[500px] overflow-yscroll relative broder border-gray-100">
              <thead class="sticky top-0 left-0 rounded-tl-md rounded-tr-md">
                <tr class="flex"> 
                  <th class="text-[12px] min-w-[20%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left rounded-tl-md">Order Id</th>
                  <th class="text-[12px] min-w-[30%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left">Order Total</th>
                  <th class="text-[12px] min-w-[30%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left">Order Status</th>
                  <th class="text-[12px] min-w-[20%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left rounded-br-md rounded-tr-md">Action</th>
                </tr>
              </thead>
              <tbody class="border-l border-gray-100">
                <tr class="flex"  v-for="i in 7" :key="i">
                  <td class="min-w-[20%] px-4 py-2 text-gray-500">
                    <NuxtLink to="javascript:void(0)">#1452</NuxtLink>
                  </td>
                  <td class="min-w-[30%] px-4 py-2 text-gray-500">15000 Tk</td>
                  <td class="min-w-[30%] px-4 py-2 text-gray-500">
                    <span class="bg-purple-200 text-purple-500 text-xs px-3 py-[2px] rounded-md font-medium">Complated</span>
                  </td>
                  <td class="min-w-[20%] px-4 py-2 text-gray-500">
                    <div class="dropdown">
                      <button class="dropdown-toggle hover:bg-gray-200 flex rounded-full cursor-pointer">
                        <i class="ki-duotone ki-dots-vertical">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                        </i>
                      </button>
                      <ul class="dropdown-menu hidden w-full max-w-[140px] z-10 card">
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-notepad-edit text-orange-300 text-lg group-hover:text-orange-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Edit</span>
                        </li>
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-trash text-red-300 text-lg group-hover:text-red-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Delete</span>
                        </li>
                        <div class="border-t border-gray-100"></div>
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-exit-right-corner text-purple-300 text-lg group-hover:text-purple-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Export</span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table data-tab-for="order" data-page="deliveried" class="w-full min-w-[500px] overflow-yscroll relative broder border-gray-100 hidden">
              <thead class="sticky top-0 left-0 rounded-tl-md rounded-tr-md">
                <tr class="flex"> 
                  <th class="text-[12px] min-w-[20%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left rounded-tl-md">Order Id</th>
                  <th class="text-[12px] min-w-[30%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left">Order Total</th>
                  <th class="text-[12px] min-w-[30%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left">Order Status</th>
                  <th class="text-[12px] min-w-[20%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left rounded-br-md rounded-tr-md">Action</th>
                </tr>
              </thead>
              <tbody class="border-l border-gray-100">
                <tr class="flex"  v-for="i in 7" :key="i">
                  <td class="min-w-[20%] px-4 py-2 text-gray-500">
                    <NuxtLink to="javascript:void(0)">#1452</NuxtLink>
                  </td>
                  <td class="min-w-[30%] px-4 py-2 text-gray-500">15000 Tk</td>
                  <td class="min-w-[30%] px-4 py-2 text-gray-500">
                    <span class="bg-orange-200 text-orange-500 text-xs px-3 py-[2px] rounded-md font-medium">Deliveried</span>
                  </td>
                  <td class="min-w-[20%] px-4 py-2 text-gray-500">
                    <div class="dropdown">
                      <button class="dropdown-toggle hover:bg-gray-200 flex rounded-full cursor-pointer">
                        <i class="ki-duotone ki-dots-vertical">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                        </i>
                      </button>
                      <ul class="dropdown-menu hidden w-full max-w-[140px] z-10 card">
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-notepad-edit text-orange-300 text-lg group-hover:text-orange-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Edit</span>
                        </li>
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-trash text-red-300 text-lg group-hover:text-red-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Delete</span>
                        </li>
                        <div class="border-t border-gray-100"></div>
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-exit-right-corner text-purple-300 text-lg group-hover:text-purple-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Export</span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table data-tab-for="order" data-page="cancled" class="w-full min-w-[500px] overflow-yscroll relative broder border-gray-100 hidden">
              <thead class="sticky top-0 left-0 rounded-tl-md rounded-tr-md">
                <tr class="flex"> 
                  <th class="text-[12px] min-w-[20%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left rounded-tl-md">Order Id</th>
                  <th class="text-[12px] min-w-[30%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left">Order Total</th>
                  <th class="text-[12px] min-w-[30%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left">Order Status</th>
                  <th class="text-[12px] min-w-[20%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left rounded-br-md rounded-tr-md">Action</th>
                </tr>
              </thead>
              <tbody class="border-l border-gray-100">
                <tr class="flex"  v-for="i in 7" :key="i">
                  <td class="min-w-[20%] px-4 py-2 text-gray-500">
                    <NuxtLink to="javascript:void(0)">#1452</NuxtLink>
                  </td>
                  <td class="min-w-[30%] px-4 py-2 text-gray-500">15000 Tk</td>
                  <td class="min-w-[30%] px-4 py-2 text-gray-500">
                    <span class="bg-red-200 text-red-500 text-xs px-3 py-[2px] rounded-md font-medium">Complated</span>
                  </td>
                  <td class="min-w-[20%] px-4 py-2 text-gray-500">
                    <div class="dropdown">
                      <button class="dropdown-toggle hover:bg-gray-200 flex rounded-full cursor-pointer">
                        <i class="ki-duotone ki-dots-vertical">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                        </i>
                      </button>
                      <ul class="dropdown-menu hidden w-full max-w-[140px] z-10 card">
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-notepad-edit text-orange-300 text-lg group-hover:text-orange-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Edit</span>
                        </li>
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-trash text-red-300 text-lg group-hover:text-red-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Delete</span>
                        </li>
                        <div class="border-t border-gray-100"></div>
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-exit-right-corner text-purple-300 text-lg group-hover:text-purple-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Export</span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="p-4 card">
          <div class="flex justify-between mb-4 items-start">
            <div class="font-medium">Active Users</div>
            <div class="dropdown">
              <button class="dropdown-toggle hover:bg-gray-200 flex rounded-full cursor-pointer">
                <i class="ki-duotone ki-dots-horizontal hover:text-gray-800">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                </i>
              </button>
              <ul class="dropdown-menu hidden w-full max-w-[140px] z-10 card">
                <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                  <i class="ki-duotone ki-notepad-edit text-orange-300 text-lg group-hover:text-orange-700">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  <span class="text-gray-500 hover:text-gray-600">Edit</span>
                </li>
                <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                  <i class="ki-duotone ki-trash text-red-300 text-lg group-hover:text-red-700">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                    <span class="path5"></span>
                  </i>
                  <span class="text-gray-500 hover:text-gray-600">Delete</span>
                </li>
                <div class="border-t border-gray-100"></div>
                <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                  <i class="ki-duotone ki-exit-right-corner text-purple-300 text-lg group-hover:text-purple-700">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  <span class="text-gray-500 hover:text-gray-600">Export</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex items-center order-tab mb-5">
            <button data-tab="customer" data-tab-page="active" class="bg-gray-50 font-medium text-gray-400 py-1 px-4 rounded-tl-md rounded-bl-md hover:text-gray-600 active">Active</button>
            <button data-tab="customer" data-tab-page="new" class="bg-gray-50 font-medium text-gray-400 py-1 px-4 hover:text-gray-600 ">New</button>
            <button data-tab="customer" data-tab-page="orderd" class="bg-gray-50 font-medium text-gray-400 py-1 px-4 rounded-br-md rounded-tr-md hover:text-gray-600">Orderd</button>
          </div>
          <div class="overflow-auto scrollbar-thin  max-h-[350px] scrollbar-track-slate-100 scrollbar-thumb-red-400">
            <table data-tab-for="customer" data-page="active" class="w-full min-w-[500px] overflow-yscroll relative broder border-gray-100">
              <thead class="sticky top-0 left-0 rounded-tl-md rounded-tr-md">
                <tr class="flex"> 
                  <th class="text-[12px] min-w-[20%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left rounded-tl-md">Order Id</th>
                  <th class="text-[12px] min-w-[30%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left">Order Total</th>
                  <th class="text-[12px] min-w-[30%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left">Order Status</th>
                  <th class="text-[12px] min-w-[20%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left rounded-br-md rounded-tr-md">Action</th>
                </tr>
              </thead>
              <tbody class="border-l border-gray-100">
                <tr class="flex"  v-for="i in 7" :key="i">
                  <td class="min-w-[20%] px-4 py-2 text-gray-500">
                    <NuxtLink to="javascript:void(0)">#1452</NuxtLink>
                  </td>
                  <td class="min-w-[30%] px-4 py-2 text-gray-500">15000 Tk</td>
                  <td class="min-w-[30%] px-4 py-2 text-gray-500">
                    <span class="bg-purple-200 text-purple-500 text-xs px-3 py-[2px] rounded-md font-medium">Complated</span>
                  </td>
                  <td class="min-w-[20%] px-4 py-2 text-gray-500">
                    <div class="dropdown">
                      <button class="dropdown-toggle hover:bg-gray-200 flex rounded-full cursor-pointer">
                        <i class="ki-duotone ki-dots-vertical">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                        </i>
                      </button>
                      <ul class="dropdown-menu hidden w-full max-w-[140px] z-10 card">
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-notepad-edit text-orange-300 text-lg group-hover:text-orange-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Edit</span>
                        </li>
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-trash text-red-300 text-lg group-hover:text-red-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Delete</span>
                        </li>
                        <div class="border-t border-gray-100"></div>
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-exit-right-corner text-purple-300 text-lg group-hover:text-purple-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Export</span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table data-tab-for="customer" data-page="new" class="hidden w-full min-w-[500px] overflow-yscroll relative broder border-gray-100">
              <thead class="sticky top-0 left-0 rounded-tl-md rounded-tr-md">
                <tr class="flex"> 
                  <th class="text-[12px] min-w-[20%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left rounded-tl-md">Order Id</th>
                  <th class="text-[12px] min-w-[30%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left">Order Total</th>
                  <th class="text-[12px] min-w-[30%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left">Order Status</th>
                  <th class="text-[12px] min-w-[20%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left rounded-br-md rounded-tr-md">Action</th>
                </tr>
              </thead>
              <tbody class="border-l border-gray-100">
                <tr class="flex"  v-for="i in 7" :key="i">
                  <td class="min-w-[20%] px-4 py-2 text-gray-500">
                    <NuxtLink to="javascript:void(0)">#1452</NuxtLink>
                  </td>
                  <td class="min-w-[30%] px-4 py-2 text-gray-500">15000 Tk</td>
                  <td class="min-w-[30%] px-4 py-2 text-gray-500">
                    <span class="bg-blue-200 text-blue-500 text-xs px-3 py-[2px] rounded-md font-medium">New Registard</span>
                  </td>
                  <td class="min-w-[20%] px-4 py-2 text-gray-500">
                    <div class="dropdown">
                      <button class="dropdown-toggle hover:bg-gray-200 flex rounded-full cursor-pointer">
                        <i class="ki-duotone ki-dots-vertical">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                        </i>
                      </button>
                      <ul class="dropdown-menu hidden w-full max-w-[140px] z-10 card">
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-notepad-edit text-orange-300 text-lg group-hover:text-orange-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Edit</span>
                        </li>
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-trash text-red-300 text-lg group-hover:text-red-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Delete</span>
                        </li>
                        <div class="border-t border-gray-100"></div>
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-exit-right-corner text-purple-300 text-lg group-hover:text-purple-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Export</span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table data-tab-for="customer" data-page="orderd" class="hidden w-full min-w-[500px] overflow-yscroll relative broder border-gray-100">
              <thead class="sticky top-0 left-0 rounded-tl-md rounded-tr-md">
                <tr class="flex"> 
                  <th class="text-[12px] min-w-[20%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left rounded-tl-md">Order Id</th>
                  <th class="text-[12px] min-w-[30%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left">Order Total</th>
                  <th class="text-[12px] min-w-[30%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left">Order Status</th>
                  <th class="text-[12px] min-w-[20%] uppercase tracking-wide font-medium text-gray-600 bg-gray-100 py-2 px-4 text-left rounded-br-md rounded-tr-md">Action</th>
                </tr>
              </thead>
              <tbody class="border-l border-gray-100">
                <tr class="flex"  v-for="i in 7" :key="i">
                  <td class="min-w-[20%] px-4 py-2 text-gray-500">
                    <NuxtLink to="javascript:void(0)">#1452</NuxtLink>
                  </td>
                  <td class="min-w-[30%] px-4 py-2 text-gray-500">15000 Tk</td>
                  <td class="min-w-[30%] px-4 py-2 text-gray-500">
                    <span class="bg-rose-200 text-rose-500 text-xs px-3 py-[2px] rounded-md font-medium">Oarderd</span>
                  </td>
                  <td class="min-w-[20%] px-4 py-2 text-gray-500">
                    <div class="dropdown">
                      <button class="dropdown-toggle hover:bg-gray-200 flex rounded-full cursor-pointer">
                        <i class="ki-duotone ki-dots-vertical">
                          <span class="path1"></span>
                          <span class="path2"></span>
                          <span class="path3"></span>
                        </i>
                      </button>
                      <ul class="dropdown-menu hidden w-full max-w-[140px] z-10 card">
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-notepad-edit text-orange-300 text-lg group-hover:text-orange-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Edit</span>
                        </li>
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-trash text-red-300 text-lg group-hover:text-red-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Delete</span>
                        </li>
                        <div class="border-t border-gray-100"></div>
                        <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                          <i class="ki-duotone ki-exit-right-corner text-purple-300 text-lg group-hover:text-purple-700">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                          <span class="text-gray-500 hover:text-gray-600">Export</span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-4 card lg:col-span-2">
          <div class="flex justify-between mb-4 items-start">
            <div class="font-medium">Active Users</div>
            <div class="dropdown">
              <button class="dropdown-toggle hover:bg-gray-200 flex rounded-full cursor-pointer">
                <i class="ki-duotone ki-dots-horizontal hover:text-gray-800">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                </i>
              </button>
              <ul class="dropdown-menu hidden w-full max-w-[140px] z-10 card">
                <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                  <i class="ki-duotone ki-notepad-edit text-orange-300 text-lg group-hover:text-orange-700">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  <span class="text-gray-500 hover:text-gray-600">Edit</span>
                </li>
                <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                  <i class="ki-duotone ki-trash text-red-300 text-lg group-hover:text-red-700">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                    <span class="path5"></span>
                  </i>
                  <span class="text-gray-500 hover:text-gray-600">Delete</span>
                </li>
                <div class="border-t border-gray-100"></div>
                <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                  <i class="ki-duotone ki-exit-right-corner text-purple-300 text-lg group-hover:text-purple-700">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  <span class="text-gray-500 hover:text-gray-600">Export</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-5">
            <div class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
              <div class="p-3 card bg-red-50" v-for="i in 3" :key="i">
                <h2 class="text-xl font-bold">
                  500 
                  <span class="bg-sky-200 text-sky-700 py-1 px-2 rounded-md font-medium text-xs">1200 Tk</span>
                </h2>
                <p class="mt-1 font-medium text-gray-500">Active</p>
              </div>
            </div>
            
            <div class="w-full min-w-full h-full mt-5 min-h-[350px]">
                <apexchart type="area" height="100%" width="100%" :options="chartOptions" :series="series"></apexchart>
              </div>
          </div>
        </div>





        
        <div class="p-4 card">
          <div class="flex justify-between mb-4 items-start">
            <div class="font-medium">Active Users</div>
            <div class="dropdown">
              <button class="dropdown-toggle hover:bg-gray-200 flex rounded-full cursor-pointer">
                <i class="ki-duotone ki-dots-horizontal hover:text-gray-800">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                </i>
              </button>
              <ul class="dropdown-menu hidden w-full max-w-[140px] z-10 card">
                <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                  <i class="ki-duotone ki-notepad-edit text-orange-300 text-lg group-hover:text-orange-700">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  <span class="text-gray-500 hover:text-gray-600">Edit</span>
                </li>
                <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                  <i class="ki-duotone ki-trash text-red-300 text-lg group-hover:text-red-700">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                    <span class="path4"></span>
                    <span class="path5"></span>
                  </i>
                  <span class="text-gray-500 hover:text-gray-600">Delete</span>
                </li>
                <div class="border-t border-gray-100"></div>
                <li class="px-2 py-1 hover:bg-gray-200 cursor-pointer text-gray-600 flex items-center gap-3 group">
                  <i class="ki-duotone ki-exit-right-corner text-purple-300 text-lg group-hover:text-purple-700">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  <span class="text-gray-500 hover:text-gray-600">Export</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-5">
            <div class="w-full min-w-full h-full mt-5 min-h-[350px]">
                <apexchart type="radialBar" height="100%" width="100%" :options="roundChartOptions" :series="roundStracts"></apexchart>
              </div>
          </div>
        </div>
      </div>
    </div>

    
    <div class="mt-5">
      <Datatable
        class="border border-gray-100 shadow-sm shadow-black/70 rounded "
        v-model:items-selected="itemsSelected"
        :headers="headers"
        :items="items"
      />
      {{  itemsSelected }}
    </div>


  </div>
</template>

<script setup>


  const series = [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
  }]

  const chartOptions = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  }
  

  const roundStracts  = [75]
  const roundChartOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
          hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },
    
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            formatter: function(val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Percent'],
  }

    


  const itemsSelected = ref([])
  const headers = [
    { text: "PLAYER", value: "player" },
    { text: "TEAM", value: "team", sortable:true},
    { text: "NUMBER", value: "number", sortable:true},
    { text: "POSITION", value: "position"},
    { text: "HEIGHT", value: "indicator.height"},
    { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
    { text: "LAST ATTENDED", value: "lastAttended", width: 200},
    { text: "COUNTRY", value: "country"},
  ];


  const items = [
    { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA"},
    { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: {"height": '6-9', "weight": 250}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
    { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA"},
    { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece"},
  ];




  definePageMeta({
    layout:'admin'
  })

  useHead({
    title:"Tailwind Admin Panel | Jugol Kumar",
    meta:[
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ],
    link:[
      {rel:"apple-touch-icon", sizes:"180x180", href:"./favicon/apple-touch-icon.png"},
      {rel:"icon", sizes:"32x32", type:"image/png", href:"./favicon/favicon-32x32.png"},
      {rel:"icon", sizes:"16x16", type:"image/png", href:"./favicon/favicon-16x16.png"},
      {rel:"manifest", href:"./favicon/site.webmanifest"},
    ]
  })

  onMounted(()=>{
    document.querySelectorAll("[data-tab]").forEach(function(item){
      item.addEventListener("click", function(e){
        e.preventDefault();
        const tab = item.dataset.tab
        const page = item.dataset.tabPage
        const target = document.querySelector(`[data-tab-for=${tab}][data-page=${page}]`)
        document.querySelectorAll(`[data-tab=${tab}]`).forEach(function(i){
          i.classList.remove("active")
        })
        document.querySelectorAll(`[data-tab-for=${tab}]`).forEach(function(i){
          i.classList.add("hidden")
        })
        item.classList.add("active")
        target.classList.remove("hidden")
      })
    })
  })
</script>

