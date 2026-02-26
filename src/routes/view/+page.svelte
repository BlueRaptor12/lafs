<script lang="ts">
    import type { PageProps } from './$types';
    let { data }: PageProps = $props();
    let query = $state("");
</script>

<h2>Found Items</h2>
<div class="search">
<input bind:value={query} type="text" placeholder="Search for Lost Items Here" style="width: 250px; height:30px; text-size: 26px;"/>
<br></div>

<div class="items">
{#each data.items as item}
    {#if item.desc.includes(query)}
        <img src={item.img} alt="unclaimed item" />
        <p>{item.desc}</p>
    {/if}
{/each}
</div>