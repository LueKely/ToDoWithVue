<script setup>
	import HeaderBar from './components/Header-Bar.vue';
	import FooterBar from './components/Footer-Bar.vue';
	import ToDoList from './components/toDoList.vue';
</script>

<template>
	<HeaderBar></HeaderBar>
	<ToDoList></ToDoList>
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
