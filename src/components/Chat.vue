<script lang="ts" setup>

import { reactive, ref } from 'vue'

const mensagem = reactive({
    texto: '',
    data: new Date(),
})

const modo = ref(localStorage.getItem('theme'))

const mensagens = ref([
    {
        texto: 'Olá, o seguinte:',
        data: new Date()
    },
])

function handleChange(event: Event) {
    mensagem.texto = (event.target as HTMLInputElement).value
}

function enviarMensagem(event: Event) {
    event.preventDefault()
    if (mensagem.texto !== '') {
        mensagens.value.push({
            texto: mensagem.texto,
            data: new Date()
        })
        mensagem.texto = ''
    }
    else {
        alert('Digite uma mensagem')
    }
}

function handleModo(){
    if(modo.value === 'dark'){
        modo.value = 'light'
        localStorage.setItem('theme', 'light')
    }
    else{
        modo.value = 'dark'
        localStorage.setItem('theme', 'dark')
    }
}



</script>

<template>
    <div class="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
        <div class="flex-1 p-4 overflow-y-scroll">
            <div class="bg-white rounded-md shadow-sm p-4 mb-4 dark:bg-gray-700 text-gray-700 dark:text-white">
                <p class=" font-semibold mb-2">
                    Atendente
                </p>
                <p class="">
                    Olá, como posso ajudar?
                </p>
            </div>
            <div class="bg-indigo-500 rounded-md shadow-sm p-4 mb-4 text-white text-right" v-for="item in mensagens">
                <p class="text-gray-200 font-semibold mb-2">
                    Cliente
                </p>
                <p>
                    {{ item.texto }}
                </p>
            </div>
        </div>
        <form class="bg-white dark:bg-gray-700 p-1 md:p-4 flex items-center">
            <input type="text"
                class="flex-1 rounded-full border-gray-100 border-2 px-3 py-1 md:px-4 md:py-2 mr-2  focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-900 dark:border-gray-500 dark:text-gray-100"
                placeholder="Digite sua mensagem..." @change="handleChange" :value="mensagem.texto">
            <button type="submit" @click="enviarMensagem"
                class="inline-flex items-center px-4 py-2 mr-2 border border-transparent rounded-full font-semibold text-white dark:text-gray-100 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Enviar
            </button>
            <button @click="handleModo" class="hidden md:inline-flex items-center px-4 py-2 border border-transparent rounded-full font-semibold text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {{
                    modo === 'dark' ? '🌞' : '🌙'
                }}
            </button>
        </form>
    </div>
</template>
  

