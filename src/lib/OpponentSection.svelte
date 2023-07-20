<script lang="ts">
	import Text from '$lib/Text.svelte';
	import type { Pieces } from './types/Pieces';
	import PieceDisplay from './PieceDisplay.svelte';
	export let playerReady: boolean;
  export let pieces: Pieces;
	let text = playerReady ? 'Opponent' : 'Waiting for opponent...';
</script>

<section>
	<Text>{text}</Text>
  <PieceDisplay {pieces}></PieceDisplay>
</section>
