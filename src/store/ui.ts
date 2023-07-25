import { defineStore } from 'pinia';

export const useAuthStore = defineStore('ath', {
    state: () => ({
        showSidebar: false
    }),
    getters: {},
    actions: {
        setStatusSidebar(value: boolean) {
            this.showSidebar = value
        }
    }
})