<script lang="ts">
    import type { PageProps } from './$types';
    let { data, form }: PageProps = $props();
</script>

{#if form?.success}
<p>Item reported</p>
{/if}

<h2>Have any items to report? You're in the right place.</h2>
<form method="POST" enctype="multipart/form-data" action="?/report">
    <div class="report">
    <label>
        <h3>Item Description:</h3>
        <div style="padding-left: 15%;"><textarea name="desc"></textarea></div>
    </label>
    <label>
        <h3>Image:</h3>
        <div style="padding-left: 20%">
        <input type="file" name="img" />
        </div>
    </label>
    <div style="padding-left: 15%;">
        <button>Submit</button>
     </div>
    </div>
</form>

<style>
    textarea {
        width: 300px;
        height: 150px;
    }
</style>