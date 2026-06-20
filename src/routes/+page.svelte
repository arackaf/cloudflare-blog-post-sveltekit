<script lang="ts">
  import type { PageData } from "./$types";
  import { getPosts } from "./remote/data.remote.js";

  const { data } = $props();

  const foo = await getPosts();

  console.log("foo", foo);
</script>

<h1>Welcome to SvelteKit 5</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

Secret {data.value}
