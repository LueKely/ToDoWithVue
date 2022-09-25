<template>
	<footer>
		<div class="footer__title"><h1>Socials</h1></div>

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
		height: 200px;

		margin: auto;
		margin-top: 50px;
		width: 90vw;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.footer__title {
		margin-inline: auto;
		font-family: var(--Fredoka);
		font-size: 1.5rem;
		text-align: center;
	}
	.container {
		width: 300px;
		height: 80px;
		margin-inline: auto;
		margin-block: 10px;
		display: flex;
		flex-wrap: wrap;
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
