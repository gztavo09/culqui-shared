<script setup lang="ts">
    import { ref, toRaw } from 'vue';
    import { useAuth } from "@/composables/useAuth";

    const { isLoading, messageError, login } = useAuth();

    interface Props {
        correo: string,
        password: string
    }

    const formState = ref<Props>({
        correo: 'c.quispe@culqi.com',
        password: 'admin123'
    });

    const hanglelogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if(formState.value.correo.trim() === '' || formState.value.password.trim() === '') return
        let form = toRaw(formState.value)
        login(form)
    }
</script>

<template>
    <div class="flex w-screen h-screen">
        <div class="hidden sm:flex w-1/2 h-full flex-col">
            <div class="flex w-full h-[60%] bg-[url('/banner.png')] bg-left-bottom bg-no-repeat bg-cover"></div>
            <div class="flex h-[40%] min-h-[310px] flex-col border-t-4 border-t-[#27A376] p-8 bg-[#111827] w-full">
                <div class="mb-6">
                    <IconCulqui />
                </div>
                <h2 class="text-white text-5xl font-semibold mb-6 leading-snug letter-spacing-custom">Dale más power ⚡ a tus empleados hoy 💪</h2>
                <h3 class="text-white text-lg">Te ayudamos a gestionarlos de manera más sencilla</h3>
            </div>
        </div>
        <div class="w-full sm:w-1/2 h-full bg-white flex flex-col justify-center items-center">
            <form class="p-6 sm:p-0 max-w-[480px] w-full" @submit.prevent="hanglelogin">
                <h1 class="text-center font-bold text-[#111827] text-lg mb-6">Inicia sesión</h1>

                <div class="flex flex-col mb-6">
                    <label class="mb-2 text-sm" for="correo">Correo electrónico</label>
                    <input class="border rounded-lg px-3 py-3 text-sm" name="correo" v-model="formState.correo" required placeholder="Ingresa el correo electrónico">
                </div>

                <div class="flex flex-col mb-6">
                    <label class="mb-2 text-sm" for="password">Contraseña</label>
                    <input v-model="formState.password" class="border rounded-lg px-3 py-3 text-sm" required type="password" placeholder="Ingresa tu contraseña">
                </div>
                <span v-if="messageError !== ''" class="text-red-500 mb-6 text-xs flex items-center">
                    <div class="mr-2">
                        <IconInformation /> 
                    </div>
                    {{  messageError  }}
                </span>
                <button type="submit" :disabled="isLoading" :class="[ isLoading ? 'opacity-50' : '', 'bg-[#111827] text-white border rounded-lg px-3 py-3 w-full font-semibold mb-6' ]">Iniciar sesión</button>
                <p class="text-center text-[#A0AEC0] text-sm">¿Eres nuevo aquí? <a href="#" class="text-[#27A376] no-underline">Crea una cuenta</a></p>
            </form>
            
        </div>
    </div>
</template>

<style scoped>
    .letter-spacing-custom {
        letter-spacing: -1.5px;
    }
</style>