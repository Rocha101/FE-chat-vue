<script setup lang="ts">
import Topo from './components/Topo.vue'
import Input from './components/Input.vue'
import Chat from './components/Chat.vue'
</script>

<template>
  <a-layout>
    <a-layout-header style="background-color: white; box-shadow: 3px ;">
      <Topo />
    </a-layout-header>
    <Chat />
    <a-layout-footer style="background-color: white; box-shadow: 3px ;">
      <Input />
    </a-layout-footer>
  </a-layout>
</template>