<template>
	<div class="header">
		<h1>TO DO WITH VUE</h1>
		<p>A to do list using Vue 3</p>
	</div>
</template>

<style scoped>
	.header {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 10px;
		width: 700px;
		height: 150px;
		margin-inline: auto;
		margin-top: 20px;
		border: solid 4px black;
		border-radius: 30px;
		background-color: var(--color-1);
		box-shadow: 0px 12px black;
	}

	h1 {
		margin: 10px 10px 0 10px;
		font-family: var(--Fredoka);
		font-size: 3rem;
	}
	p {
		font-size: 1.4rem;
		font-family: var(--Jua);
		margin-bottom: 10px;
	}
	.header::before {
		height: 100px;
		color: antiquewhite;
	}
	@media all and (max-width: 850px) {
		.header {
			width: 95vw;
			height: 150px;
		}
		h1 {
			font-size: 2rem;
		}
	}
</style>
