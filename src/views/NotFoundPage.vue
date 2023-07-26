<template>
  <div class="notFound w-screen h-screen flex justify-center items-center">
    <div class="w-[290px]">
      <nav class="notFound__logo mb-6">
        <RouterLink to="/"
          >
            <IconAlterCulqui />
        </RouterLink>
      </nav>
      <div class="notFound__content">
          <p class="error text-6xl font-bold text-[#eb6f25] mb-4">Error 404</p>
            <p class="text-sm mb-4">¡Ups! No encontramos la página</p> 
          <RouterLink to="/" class="py-2 rounded-lg text-white px-6 bg-[#111827] font-bold">Volver a Inicio</RouterLink>
        </div>
    </div>
  </div>
</template>