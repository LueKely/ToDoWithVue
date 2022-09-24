<template>
	<footer>
		<h1>Socials</h1>
		<div class="container">
			<a href="https://github.com/LueKely/ToDoWithVue" target="_blank">
				<font-awesome-icon icon="fa-brands fa-github" />
			</a>

			<a href="https://www.facebook.com/" target="_blank">
				<font-awesome-icon icon="fa-brands fa-facebook" />
			</a>
			<a href="https://twitter.com/" target="_blank">
				<font-awesome-icon icon="fa-brands fa-twitter" />
			</a>
		</div>
	</footer>
</template>
<script></script>
<style scoped>
	footer {
		margin: 50px;
		height: 200px;
		padding: 10px;
		width: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	footer > h1 {
		font-family: var(--Fredoka);
		font-size: 2.75rem;
	}
	.container {
		width: 300px;
		height: 80px;
		margin-inline: auto;
		margin-block: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a {
		transition: font ease-in-out 200ms;
		color: black;
		font-size: 3rem;
		margin-inline: 10px;
	}
	a:hover {
		transition: font ease-in-out 200ms;
		font-size: 4rem;
	}
</style>
