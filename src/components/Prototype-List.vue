<script setup>
	import { ref, reactive } from 'vue';
	const parsedData = localStorage.getItem('1');
	const userData = reactive(
		localStorage.length == 0 ? [] : JSON.parse(parsedData)
	);
	const importantCheck = ref(false);
	const userInput = ref('');
	const tags = ref('');
	const isUi = ref(false);

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
		userData.splice(0, userData.length);
	}

	function deleteSelf(index) {
		userData.splice(index, 1);
		localStorage.setItem('1', JSON.stringify(userData));
	}

	function showUi() {
		isUi.value = true;
	}
	function hideUi() {
		isUi.value = false;
	}
	console.log(localStorage);
</script>

<template>
	<div class="container">
		<!-- button to write -->
		<button id="ShowUi" @click="showUi">
			Write Something! <font-awesome-icon icon="fa-solid fa-pencil" />
		</button>

		<!-- user input -->
		<div v-show="isUi">
			<!-- text box -->
			<div>
				<input type="text" v-model="userInput" />
				<label for="important">Mark As Important</label>
				<input type="checkbox" id="important" v-model="importantCheck" />
			</div>

			<!-- choices -->
			<div>
				<h2>Select Tag</h2>
				<select v-model="tags">
					<option disabled value="">Please select one</option>
					<option>Work</option>
					<option>School</option>
					<option>Misc</option>
				</select>
				<span>Selected: {{ tags }}</span>
			</div>

			<!-- submission of form -->
			<button @click="submitForm">Submit</button>
			<button @click="doIt">do it</button>
			<button @click="clearAll">Clear all</button>
		</div>
	</div>

	<!-- list items -->
	<div v-for="(item, index) in userData" :key="index.id">
		<p>{{ item.tag }}</p>
		<p :class="{ bold: item.important }">{{ item.note }}</p>
		<p>{{ index }}</p>
		<button @click="deleteSelf(index)">Delete Note</button>
	</div>
</template>

<style scoped>
	#ShowUi {
		margin-top: 30px;
		width: 240px;
		font-family: var(--Jua);
		height: 70px;
		background-color: var(--color-1);
		font-size: 1.5rem;
		border: 4px solid black;
		border-radius: 15px;
	}

	#ShowUi:hover {
		background-color: var(--color-2);
	}
	#ShowUi:active {
		scale: 98%;
	}
	.red {
		color: red;
	}

	.bold {
		font-weight: bold;
		color: red;
	}
	.container {
		margin: 20px;
		width: 60vw;

		margin: auto;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
</style>
