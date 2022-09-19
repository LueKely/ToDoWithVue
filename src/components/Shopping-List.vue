<template>
	<div>
		<h1>Shopping for my dick wanker</h1>
		<ul>
			<li
				:class="{ underline: item.isClicked }"
				@click="crossOut(item)"
				v-for="item in items"
				:key="item.id"
			>
				{{ item.name }}
			</li>
		</ul>

		<button @click="create">Create Something</button>
		<button @click="destroyCreate" v-if="showCreate">Cancel</button>
		<div v-if="showCreate">
			<input
				type="text"
				placeholder="type-something"
				v-model.lazy="laman"
				v-on:keyup.enter="timeToPush"
			/>
			<input type="checkbox" v-model="isImportant" />
			<p>is it important? {{ isImportant ? 'yes' : 'no' }}</p>
			<button v-bind:disabled="laman.length === 0" @click="timeToPush">
				send
			</button>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	const showCreate = ref(false);
	function create() {
		showCreate.value = true;
	}
	function destroyCreate() {
		showCreate.value = false;
	}
	const isImportant = ref(false);
	const crossOut = (target) => {
		target.isClicked = !target.isClicked;
		console.log(target.isClicked);
		console.log(target.id);
	};
	const laman = ref('');
	const items = ref([]);

	const timeToPush = () => {
		if (laman.value == '') {
			alert('please insert something');
		} else {
			items.value.push({
				id: items.value.length,
				name: laman.value,
				isClicked: false,
			});
			laman.value = '';
		}
	};
</script>

<style scoped>
	.shopping__items {
		text-decoration: line-through;
	}
	.underline {
		text-decoration: line-through;
	}
</style>
