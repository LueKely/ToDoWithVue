<script setup>
	import PrototypeList from './components/Prototype-List.vue';
	import HeaderBar from './components/Header-Bar.vue';
	import FooterBar from './components/Footer-Bar.vue';
</script>

<template>
	<HeaderBar></HeaderBar>
	<PrototypeList></PrototypeList>
	<FooterBar></FooterBar>
</template>

<style scoped>
	.red {
		color: red;
	}
	body {
		background-color: aliceblue;
	}
</style>
