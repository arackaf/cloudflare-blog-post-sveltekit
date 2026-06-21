<script lang="ts">
  import type { PageData } from "./$types";
  import { getPosts } from "./remote/data.remote.js";

  const { data } = $props();

  const books = $derived(data.books);
</script>

<h1>Welcome to SvelteKit 5</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="flex flex-col gap-2">
  {#each books as book}
    <p>{book.title}</p>
  {/each}
</div>
