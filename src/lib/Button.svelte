<script lang="ts">
	export let href: string;
</script>

<a {href}>
	<slot />
</a>

<style lang="scss">

	a {
    text-decoration: none;
    display: flex;
    justify-content: center;
		transition: background-color 0.2s ease-in-out;
		background-color: #79dc7700;
		border: 0.3em solid #78dc77;
		border-radius: 1em;
		padding: 0.8rem 4rem;
		font-size: 1em;
		font-weight: 600;
		cursor: pointer;
	}
	a:hover {
		background-color: #000000;
	}
	a:active {
		background-color: #78dc77;
	}
</style>
