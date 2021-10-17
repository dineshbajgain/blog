<template>
    <div>
        <HeaderVue></HeaderVue>
        ------------a
        <slot/>
        z----
    </div>    
</template>
<script setup>
import HeaderVue from '../components/partials/Header.vue';
</script>