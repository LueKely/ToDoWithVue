<script setup>
	import { ref } from 'vue';
	import { reactive } from 'vue';
	const test = reactive({ count: 0 });
	const isRed = ref(false);

	const foo = ref('bar');
	function increment() {
		test.count++;
		console.log(test.count);
	}
	function log() {
		isRed.value = !isRed.value;
	}
	function callTheTwo() {
		increment();
		log();
	}
</script>

<template>
	<h1 :class="{ red: isRed }">{{ foo }}</h1>
	<h2>{{ test.count }}</h2>
	<button @click="callTheTwo()">click me</button>
</template>

<style scoped>
	.red {
		color: red;
	}
</style>
