<script setup>
	import { ref } from 'vue';
	import { reactive } from 'vue';
	let test = reactive({ count: 0 });

	const foo = ref('bar');
	function increment() {
		test.count++;
		console.log(test.count);
	}
</script>

<template>
	<h1>{{ foo }}</h1>
	<h2>{{ test.count }}</h2>
	<button @click="increment()">click me</button>
</template>

<style scoped></style>
