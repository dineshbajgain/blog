<template>
    <div>
        <HeaderVue></HeaderVue>
        <slot />
        <FooterVue></FooterVue>
    </div>    
</template>
<script setup>
import HeaderVue from '../components/partials/Header.vue';
import FooterVue from '../components/partials/Footer.vue';
</script>