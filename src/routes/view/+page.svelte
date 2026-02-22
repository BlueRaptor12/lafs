<script lang="ts">
    import type { PageProps } from './$types';
    let { data }: PageProps = $props();
    let query = $state("");
</script>

<input bind:value={query} type="text" />

{#each data.items as item}
    {#if item.desc.includes(query)}
        <img src={item.img} alt="unclaimed item" />
        <p>{item.desc}</p>
    {/if}
{/each}