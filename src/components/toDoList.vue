<script setup>
	import { ref, reactive, watch, computed } from 'vue';

	const parsedData = localStorage.getItem('1');
	const editUserItem = ref('');
	const isEditOpen = ref(false);

	const userData = reactive(
		localStorage.length == 0 ? [] : JSON.parse(parsedData)
	);
	const importantCheck = ref(false);
	const userInput = ref('');
	const tags = ref('');
	const isUi = ref(false);
	const noteBg = ref('');
	const editNoteBg = ref('');
	const editCount = ref('');
	const showEditChar = computed(() => {
		return editUserItem.value.length;
	});
	const showChar = computed(() => {
		return userInput.value.length;
	});

	// checks if userData changed
	watch(userData, () => {
		doIt();
		console.log('Data Saved');
	});

	//submits users written data as an item in a array
	function submitForm() {
		AddColor(noteBg);
		userData.push({
			note: userInput.value,
			tag: tags.value,
			important: importantCheck.value,
			bg: noteBg.value,
			isFinished: false,
		});
		userInput.value = '';
		importantCheck.value = false;
	}
	// adds color to the note based on the tag
	function AddColor(item) {
		if (tags.value == 'Work') {
			item.value = '#ff595e';
		} else if (tags.value == 'Misc') {
			item.value = '#ffca3a';
		} else if (tags.value == 'School') {
			item.value = '#8ac926';
		} else {
			item.value = 'white';
		}
	}

	function editForm() {
		AddColor(editNoteBg);

		userData[editCount.value] = {
			note: editUserItem.value,
			tag: tags.value,
			important: importantCheck.value,
			bg: editNoteBg.value,
			isFinished: userData[editCount.value].isFinished,
		};
		hideEditUi();
	}
	function returnIndex(index) {
		editCount.value = index;
		editUserItem.value = userData[index].note;
		showEditUi();
	}

	// checks if tags and user input isnt empty
	const clearanceCheck = computed(() => {
		return tags.value && userInput.value.length == 0;
	});

	const editClearanceCheck = computed(() => {
		return tags.value && editUserItem.value.length == 0;
	});

	// pushes all the notes to locale storage as string
	function doIt() {
		localStorage.setItem('1', JSON.stringify(userData));
		console.log(localStorage);
	}

	//clears local storage and userData
	function clearAll() {
		localStorage.clear();
		userData.splice(0, userData.length);
	}

	//deletes selected item in the array
	function deleteSelf(index) {
		userData.splice(index, 1);
		localStorage.setItem('1', JSON.stringify(userData));
	}

	//to show/hide ui
	function showUi() {
		isUi.value = true;
	}
	function hideUi() {
		isUi.value = false;
	}
	function showEditUi() {
		hideUi();
		isEditOpen.value = true;
	}
	function hideEditUi() {
		isEditOpen.value = false;
	}

	function toggleFinish(index) {
		userData[index].isFinished = !userData[index].isFinished;
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
		<div v-show="isUi" class="showUi">
			<!-- text box -->

			<div class="textArea__container">
				<div class="textArea--limit">
					<p class="limit">{{ showChar }}/200</p>
				</div>
				<textarea
					placeholder="What shall you do today..."
					id="TextBox"
					v-model="userInput"
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
				<!-- submission of form -->
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
			<transition-group name="list">
				<div
					class="card__container"
					v-for="(item, index) in userData"
					:key="item"
					:style="{ 'background-color': item.bg }"
					@click="toggleFinish(index)"
				>
					<div class="card--item__tag">
						<h1>{{ item.tag }}</h1>
					</div>

					<div>
						<p :class="{ overLine: item.isFinished }" v-if="item.important">
							<mark>{{ item.note }}</mark>
						</p>
						<p :class="{ overLine: item.isFinished }" v-else>{{ item.note }}</p>
					</div>

					<div class="card__btn--container">
						<button @click="returnIndex(index)" class="btn card__btn--edit">
							Edit <font-awesome-icon icon="fa-solid fa-wrench" />
						</button>
						<button class="btn card__btn" @click="deleteSelf(index)">
							Delete <font-awesome-icon icon="fa-solid fa-trash" />
						</button>
					</div>
				</div>
			</transition-group>
		</div>

		<button class="btn clearAll" @click="clearAll">Clear all</button>
	</div>
	<!-- test modal edit -->

	<teleport to="#modal">
		<div class="modal__container" v-show="isEditOpen">
			<div class="container">
				<div class="model__title"><h1>Edit</h1></div>

				<div class="textArea__container">
					<div class="textArea--limit">
						<p class="limit">{{ showEditChar }}/200</p>
					</div>
					<textarea
						placeholder="What shall you do today..."
						id="TextBox"
						v-model="editUserItem"
						rows="5"
						cols="33"
						maxlength="200"
					></textarea>
				</div>

				<!-- choices -->

				<div class="edit__container">
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
						<!-- submission of form -->
						<span>
							<button
								class="btn submit"
								@click="editForm"
								v-bind:disabled="editClearanceCheck"
							>
								Update
							</button>

							<button class="btn cancel" @click="hideEditUi">
								Cancel
							</button></span
						>
					</div>
				</div>
			</div>
		</div>
	</teleport>
</template>

<style scoped src="../assets/todostyle.css"></style>
