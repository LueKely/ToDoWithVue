<script setup>
	import { ref, reactive } from 'vue';
	const parsedData = localStorage.getItem('1');
	let userData = reactive(
		localStorage.length == 0 ? [] : JSON.parse(parsedData)
	);
	const importantCheck = ref(false);
	const userInput = ref('');
	const tags = ref('');

	function submitForm() {
		userData.push({
			note: userInput.value,
			tag: tags.value,
			important: importantCheck.value,
		});
	}

	function doIt() {
		localStorage.setItem('1', JSON.stringify(userData));
		console.log(localStorage);
	}

	function clearAll() {
		localStorage.clear();
		userData = [];
	}

	console.log(localStorage);
</script>

<template>
	<h1>hello</h1>
	<input type="text" v-model="userInput" />
	<input type="checkbox" v-model="importantCheck" />
	<div>
		<h2>Select</h2>
		<select v-model="tags">
			<option disabled value="">Please select one</option>
			<option>Work</option>
			<option>School</option>
			<option>Misc</option>
		</select>
		<span>Selected: {{ tags }}</span>
	</div>
	<button @click="submitForm">Submit</button>
	<button @click="doIt">do it</button>
	<button @click="clearAll">Clear all</button>

	<div v-for="(item, index) in userData" :key="index.id">
		<p>{{ item.tag }}</p>
		<p :class="{ bold: item.important }">{{ item.note }}</p>
		<p>{{ index }}</p>
	</div>
</template>

<style scoped>
	.red {
		color: red;
	}
	body {
		background-color: aliceblue;
	}

	.bold {
		font-weight: bold;
		color: red;
	}
</style>
