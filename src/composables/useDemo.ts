import serviceApi from "@/api/serviceApi"
import type { User } from "@/interfaces/auth"
import type { EmployeeState } from "@/interfaces/employee"
import { useAuthStore } from "@/store/auth"
import Cookies from "js-cookie"
import { onMounted, ref, toRaw } from "vue"


const isLoading = ref<boolean>(true)
const messageError = ref<string>("")
const empleados = ref<string>("")
// const token = ref<string>("")

export const useDemo = async () => {

    isLoading.value = false

    const response = await serviceApi.get<EmployeeState>('/empleados')

    empleados.value = "hola"

    return {
        empleados,
        isLoading,
        messageError
    }
}