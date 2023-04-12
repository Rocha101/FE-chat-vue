<script lang="ts" setup>

import { reactive, ref } from 'vue'

const mensagem = reactive({
    texto: '',
    data: new Date(),
})

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



</script>

<template>
    <div class="flex flex-col h-screen bg-gray-100">
        <div class="flex-1 p-4 overflow-y-scroll">
            <div class="bg-white rounded-md shadow-sm p-4 mb-4">
                <p class="text-gray-700 font-semibold mb-2">
                    Atendente
                </p>
                <p class="text-gray-700">
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
        <form class="bg-white p-4 flex items-center">
            <input type="text"
                class="flex-1 rounded-full border-gray-100 border-2 px-4 py-2 mr-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Digite sua mensagem..." @change="handleChange" :value="mensagem.texto">
            <button type="submit" @click="enviarMensagem"
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-full font-semibold text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Enviar
            </button>
        </form>
    </div>
</template>
  

