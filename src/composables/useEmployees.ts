import serviceApi from "@/api/serviceApi"
import type { User } from "@/interfaces/auth"
import type { EmployeeState } from "@/interfaces/employee"
import { useAuthStore } from "@/store/auth"
import { onMounted, ref, watch } from "vue"
import { useQuery } from '@tanstack/vue-query'

const employees = ref<User[]>()
const messageError = ref<string>("")
const newToken = ref<string>("")

//PAGINACION
const total = ref<number>(0)
const itemsPerPage = ref<number>(10)
const currentPage = ref<number>(1)

const { token } = useAuthStore()
const loadEmployees = async () => {
    const { data } = await serviceApi.get<EmployeeState>('/empleados', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            limit: itemsPerPage.value,
            page: currentPage.value
        }
    })
    return data
}

const nextPage = () => {
    currentPage.value = currentPage.value + 1
}

const prevPage = () => {
    if(currentPage.value > 1) currentPage.value -= 1
}

const setPage = (value: number) => currentPage.value = value

export const useEmployees = () => {
    const employeeQuery = useQuery(
        ['employee', currentPage.value],
        () => loadEmployees(),
        {
            onSuccess(data) {
                console.log("Success", data)
            },
        }
    )

    return {
        //Properties
        employeeQuery,

        //Getter
        currentPage,

        //Methods
        nextPage,
        prevPage,
        setPage,
    }
}