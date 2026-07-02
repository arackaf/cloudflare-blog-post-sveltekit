<script lang="ts">
  import { getPosts } from "./remote/data.remote.js";

  async function loadPosts() {
    const posts = await getPosts();
    console.log("posts", posts);
  }
</script>

<h1>Welcome to SvelteKit 5</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation 7</p>

<div class="flex flex-col gap-2">
  <button onclick={loadPosts}>Load Posts</button>
</div>
