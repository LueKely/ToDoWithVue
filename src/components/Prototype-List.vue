<script setup>
	import { ref, reactive, watch, computed } from 'vue';

	const parsedData = localStorage.getItem('1');
	const userData = reactive(
		localStorage.length == 0 ? [] : JSON.parse(parsedData)
	);

	const importantCheck = ref(false);
	const userInput = ref('');
	const tags = ref('');
	const isUi = ref(false);
	const showChar = computed(() => {
		return userInput.value.length;
	});
	watch(userData, () => {
		doIt();
		console.log('Data Saved');
	});

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
		<button id="ShowUi" v-show="!isUi" @click="showUi">
			Write Something <font-awesome-icon icon="fa-solid fa-pencil" />
		</button>

		<!-- user input -->
		<div v-show="isUi">
			<!-- text box -->

			<div class="textArea__container">
				<div class="textArea--limit">
					<p class="limit">{{ showChar }}/200</p>
				</div>
				<textarea
					placeholder="What shall you do today..."
					id="TextBox"
					v-model="userInput"
					rows="5"
					cols="33"
					maxlength="200"
				>
				</textarea>
			</div>

			<!-- choices -->
			<div class="choices__container">
				<span class="important__container"
					><label for="important" class="important__label"
						>Mark As Important:</label
					>
					<input type="checkbox" id="important" v-model="importantCheck"
				/></span>
				<span>
					<h2>Select Tag:</h2>
					<select v-model="tags">
						<option disabled value="">select tag</option>
						<option>Work</option>
						<option>School</option>
						<option>Misc</option>
					</select>
				</span>
				<span>
					<button
						class="btn submit"
						v-bind:disabled="userInput.length === 0"
						@click="submitForm"
					>
						Submit
					</button>

					<button class="btn cancel" @click="hideUi">Cancel</button></span
				>
			</div>
			<!-- submission of form -->
		</div>
	</div>
	<button @click="clearAll">Clear all</button>
	<!-- list items -->
	<div v-for="(item, index) in userData" :key="index.id">
		<p>{{ item.tag }}</p>
		<p :class="{ bold: item.important }">{{ item.note }}</p>
		<p>{{ index }}</p>
		<button @click="deleteSelf(index)">
			Delete<font-awesome-icon icon="fa-solid fa-trash" />
		</button>
	</div>
</template>

<style scoped>
	#ShowUi {
		margin-top: 30px;
		width: 240px;
		height: 70px;
		font-family: var(--Jua);
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
	#TextBox {
		outline: none;
		margin: 0px 10px 10px 10px;
		display: block;
		border: 4px solid black;
		border-radius: 25px;
		font-family: var(--Jua);
		padding: 10px;
		resize: none;
		font-size: 1.5rem;
	}

	#TextBox:focus {
		cursor: text;
		color: #333333;
		background-color: white;
		border-color: #333333;
	}
	.textArea__container {
		margin-top: 10px;
	}
	.textArea--limit {
		width: 70px;
		height: 30px;
		margin-left: auto;
		margin-right: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.btn {
		width: 90px;
		height: 40px;
		font-family: var(--Jua);
		background-color: var(--color-1);
		font-size: 1.2rem;
		border: 4px solid black;
		border-radius: 15px;
		margin-inline: 5px;
	}
	.btn.submit {
		background-color: rgb(120, 240, 120);
	}
	.btn.submit:hover {
		background-color: rgb(92, 180, 92);
	}
	.btn.submit:active {
		background-color: rgb(92, 180, 92);
		scale: 0.9;
	}

	.btn.cancel {
		background-color: rgb(240, 120, 105);
	}
	.btn.cancel:hover {
		background-color: rgb(187, 95, 83);
	}
	.btn.cancel:active {
		background-color: rgb(187, 95, 83);
		scale: 0.9;
	}
	.choices__container {
		display: flex;
		justify-content: space-between;
		width: 700px;
		padding-inline: 20px;
	}
	h2 {
		display: inline;
	}
	select {
		margin-left: 10px;
		width: 120px;
		height: 30px;
		font-family: var(--Jua);
		font-size: 1.2em;
		background-color: var(--color-2);
		border-radius: 10px;
		border: 4px solid black;
	}

	option {
		font-family: var(--Jua);
		font-size: 1.2em;
		background-color: var(--color-2);
		border-radius: 10px;
		border: 4px solid black;
	}
	#important {
		width: 25px;
		height: 25px;
		margin-left: 10px;
	}
	.important__label {
		font-size: 1.2rem;
	}
	.important__container {
		width: 200px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
