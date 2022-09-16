<script setup>
	import { ref, reactive, computed } from 'vue';

	const lue = reactive({
		fName: 'lue',
		lName: 'anunciacion',
		gender: 'male',
		favorite: ['apples', 'gaming', 'sports'],
	});
	const isMale = computed(() => {
		return lue.gender == 'male' ? 'you are male' : 'not male';
	});

	const fullName = computed({
		get() {
			return `${lue.fName} ${lue.lName}`;
		},
		set(value) {
			[lue.fName, lue.lName] = value.split(' ');
		},
	});

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
	<h1>{{ isMale }}</h1>
	<p>{{ fullName }}</p>
	<h1 :class="{ red: isRed }">{{ foo }}</h1>
	<h2>{{ test.count }}</h2>
	<button @click="callTheTwo()">click me</button>
</template>

<style scoped>
	.red {
		color: red;
	}
</style>
