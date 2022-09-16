<template>
	<div>
		<h1>Shopping for my dick wanker</h1>
		<p v-for="item in items" :key="item.id">-{{ item.name }}</p>
		<input type="text" placeholder="type-something" v-model.lazy="laman" />
		<button @click="timeToPush">send</button>
		<div>
			<label><input type="checkbox" value="a" v-model="alphabet" />A</label
			><label><input type="checkbox" value="b" v-model="alphabet" />B</label
			><label><input type="checkbox" value="c" v-model="alphabet" />C</label>
		</div>
		<div>look it is {{ alphabet }}</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	const laman = ref('');
	const items = ref([
		{ id: 1, name: 'ham', isClicked: true },
		{ id: 2, name: 'ham', isClicked: true },
		{ id: 3, name: 'ham', isClicked: true },
	]);
	const alphabet = ref([]);
	function timeToPush() {
		items.value.push({ id: items.value.length, name: laman, isClicked: true });
	}
</script>

<style scoped>
	.shopping__items {
		text-decoration: line-through;
	}
</style>
