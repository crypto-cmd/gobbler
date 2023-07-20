<script lang="ts">
	import { PieceTypes, type Pieces } from './types/Pieces';
	import PieceBlock from './PieceBlock.svelte';

	export let pieces: Pieces;
	const types: PieceTypes[] = Object.keys(PieceTypes) as PieceTypes[];
</script>

<div>
	{#each types as type}
		<PieceBlock {type} count={pieces[type]} />
	{/each}
</div>
