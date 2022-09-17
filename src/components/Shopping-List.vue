<template>
	<div>
		<h1>Shopping for my dick wanker</h1>
		<ul>
			<li @click="crossOut(item)" v-for="item in items" :key="item.id">
				{{ item.name }}
			</li>
		</ul>

		<input
			type="text"
			placeholder="type-something"
			v-model.lazy="laman"
			v-on:keyup.enter="timeToPush"
		/>
		<input type="checkbox" v-model="isImportant" />
		<p>is it important? {{ isImportant ? 'yes' : 'no' }}</p>
		<button @click="timeToPush">send</button>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	const isImportant = ref(false);
	const crossOut = (target) => {
		target.clicked = !target.clicked;
		console.log(target.isClicked);
		console.log(target.id);
	};
	const laman = ref('');
	const items = ref([
		{ id: 1, name: 'ham', isClicked: false },
		{ id: 2, name: 'ham', isClicked: false },
		{ id: 3, name: 'ham', isClicked: false },
	]);

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
</style>
