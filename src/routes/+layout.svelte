<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/navbar.svelte';
	import '$lib/style.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<header>
	<Navbar />
</header>
{@render children()}
