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
	const noteBg = ref('');
	const showChar = computed(() => {
		return userInput.value.length;
	});

	watch(userData, () => {
		doIt();
		console.log('Data Saved');
	});

	function submitForm() {
		AddColor();
		userData.push({
			note: userInput.value,
			tag: tags.value,
			important: importantCheck.value,
			bg: noteBg.value,
		});
		userInput.value = '';
		importantCheck.value = false;
	}
	function AddColor() {
		if (tags.value == 'Work') {
			noteBg.value = '#ff595e';
		} else if (tags.value == 'Misc') {
			noteBg.value = '#ffca3a';
		} else if (tags.value == 'School') {
			noteBg.value = '#8ac926';
		} else {
			noteBg.value = 'white';
		}
	}

	const clearanceCheck = computed(() => {
		return tags.value && userInput.value.length == 0;
	});

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
					<h2>Tag:</h2>
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
						v-bind:disabled="clearanceCheck"
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

	<!-- list items -->

	<div class="list__container">
		<h1 class="list--text">Your Notes:</h1>
		<!-- if no list -->
		<div v-if="userData.length === 0" class="list--empty__container">
			<div class="list--empty__icon">
				<font-awesome-icon icon="fa-solid fa-wind" />
			</div>
			<p class="list--empty__empty">Empty</p>
		</div>
		<!-- list items -->
		<div class="list--item__container">
			<div
				class="card__container"
				v-for="item in userData"
				:key="item.id"
				:style="{ 'background-color': item.bg }"
			>
				<div class="card--item__tag">
					<h1>{{ item.tag }}</h1>
				</div>

				<div>
					<p :class="{ bold: item.important }">{{ item.note }}</p>
				</div>

				<p>{{ item.bg }}</p>
				<button class="btn card__btn" @click="deleteSelf(index)">
					Delete <font-awesome-icon icon="fa-solid fa-trash" />
				</button>
			</div>
		</div>

		<button class="btn clearAll" @click="clearAll">Clear all</button>
	</div>
</template>

<style scoped src="../assets/todostyle.css"></style>
