import { defineStore } from 'pinia'
import { useApiFetch } from '~/composables/useApiFetch'

type User = {
    id: number;
    name:string,
    email:string,
}

type Credintials = {
    email:string,
    passwrod:string,
}

export const useAuthStore = defineStore('auth', ()=>{
    
    const user = ref<User | null>(null)
    

    const isLoggedIn = computed(() => !! user.value)

    async function fetchUser(){
        const {data, error} = await useApiFetch("/api/user")
        user.value = data.value as User
    }

    async function login(credential: Credintials){
        await useApiFetch("/sanctum/csrf-cookie")
        
        const login = await useApiFetch("/login",{
            method:"POST",
            body: credential,
        })

        await fetchUser();
        return login;
    }

    async function logout(){
        await useApiFetch("/logout",{
            method:"POST",
        })

        user.value = null;
        navigateTo("/")
    }



    return {user, login, isLoggedIn, fetchUser, logout}

})