<main>
	<section>
		<slot />
	</section>
</main>

<svelte:head>
	<style>
		body {
			padding: 0;
			margin: 0;
		}
		:root {
			font-family: 10px;
		}
		* {
			font-family: 'Unbounded', cursive;
		}
	</style>
</svelte:head>

<style lang="scss">
	main,
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background-color: #161719;
	}
	section {
		width: 60%;
	}
</style>
