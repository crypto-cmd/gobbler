<script lang="ts">
	import Button from '$lib/Button.svelte';
	import OpponentSection from '$lib/OpponentSection.svelte';
	import Text from '$lib/Text.svelte';
	import { PieceTypes } from '$lib/types/Pieces';
	import type { PageData } from './$types';

	export let data: PageData;
	const pieces = {
		[PieceTypes.SMALL]: 3,
		[PieceTypes.MEDIUM]: 2,
		[PieceTypes.LARGE]: 1
	};
</script>

<!-- Opponent Section -->
<OpponentSection playerReady={false} {pieces} />
<!-- PlayArea -->

<!-- My Section -->

<!-- Actions -->
<Button href="/"><Text>Resign</Text></Button>
