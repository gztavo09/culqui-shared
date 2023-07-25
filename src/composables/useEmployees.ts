import serviceApi from "@/api/serviceApi"
import { useAuthStore } from "@/store/auth"
import { ref } from "vue"

export const useEmployees = () => {

    const { token } = useAuthStore()
    console.log( { token });
    
    const employees = ref([])
    const isLoading = ref(true)

    serviceApi.get('/empleados?limit=10&page=4', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(resp => {
            employees.value = resp.data
            isLoading.value = false
        })

    return {
        employees,
        isLoading
    }
}