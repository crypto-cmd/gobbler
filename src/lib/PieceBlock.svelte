<script lang="ts">
	import type { PieceTypes } from './types/Pieces';
	import Piece from './Piece.svelte';
	import Text from './Text.svelte';
	export let type: PieceTypes;
	export let count: number;
</script>

<div>
	<Piece {type} />
	<p><Text>{count}</Text></p>
</div>
