<script>
	import Button from '$lib/Button.svelte';
	import Text from '$lib/Text.svelte';
	import Title from '$lib/Title.svelte';

  const createRandomIdForGame = () => {
    const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return randomId;
  }
</script>

<div>
	<Title />
	<div class="buttons">
		<Button href={`/play/${createRandomIdForGame()}`}><Text>Play With Friends</Text></Button>
		<Button href={'/play/random'}><Text>Play Random</Text></Button>
		<Button href={'/how-to-play'}><Text>How To Play</Text></Button>
	</div>
</div>

<style lang="scss">
	.buttons {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
</style>
