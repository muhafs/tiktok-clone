import { defineStore } from 'pinia'
import axios from '~/plugins/axios'

const $axios = axios().provide.axios

export const useUserStore = defineStore('user', {
    state: () => ({
        id: '',
        name: '',
        bio: '',
        image: '',
    }),
    actions: {
        async getTokens() {
            await $axios.get('/sanctum/csrf-cookie')
        },
        async login(email, password) {
            await $axios.post('/login', {
                email,
                password,
            })
        },
        async register(name, email, password, confirmPassword) {
            await $axios.post('/register', {
                name,
                email,
                password,
                password_confirmation: confirmPassword,
            })
        },
        async getUser() {
            let res = await $axios.get('/api/logged-in-user')
            let data = res.data[0]

            this.$state.id = data.id
            this.$state.name = data.name
            this.$state.bio = data.bio
            this.$state.image = data.image
        },
        async logout() {
            await $axios.post('/logout')

            this.resetUser()
        },
        resetUser() {
            this.$state.id = ''
            this.$state.name = ''
            // this.$state.email = ''
            this.$state.bio = ''
            this.$state.image = ''
        },
    },
    persist: true,
})
