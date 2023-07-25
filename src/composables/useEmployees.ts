import serviceApi from "@/api/serviceApi"
import type { User } from "@/interfaces/auth"
import type { EmployeeState } from "@/interfaces/employee"
import { useAuthStore } from "@/store/auth"
import { onMounted, ref, watch } from "vue"

export const useEmployees = () => {

    const employees = ref<User[]>()
    const isLoading = ref<boolean>(true)
    const messageError = ref<string>("")
    const newToken = ref<string>("")

    //PAGINACION
    const total = ref<number>(0)
    const itemsPerPage = ref<number>(10)
    const currentPage = ref<number>(1)

    onMounted( async() => {
        const { token } = useAuthStore()
        newToken.value = token
        loadEmployees()
    })

    watch(currentPage, (value) => {
        loadEmployees()
    })

    const loadEmployees = async () => {
        isLoading.value = true
        try {
            const { data } = await serviceApi.get<EmployeeState>('/empleados', {
                headers: {
                    Authorization: `Bearer ${newToken.value}`
                },
                params: {
                    limit: itemsPerPage.value,
                    page: currentPage.value
                }
            })
            
            total.value = data.total
            employees.value = data.data
            isLoading.value = false
    
        } catch (e) {
            messageError.value = 'Ocurrió un error inesperado.';
        } finally {
            isLoading.value = false;
        }
    }

    const nextPage = () => {
        currentPage.value = currentPage.value + 1
    }
    
    const prevPage = () => {
        if(currentPage.value > 1) currentPage.value -= 1
    }

    const setPage = (value: number) => currentPage.value = value

    return {
        employees,
        isLoading,
        messageError,
        total,
        currentPage,
        loadEmployees,
        nextPage,
        prevPage,
        setPage
    }
}