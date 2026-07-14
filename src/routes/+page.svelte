<script lang="ts">
  import { getBooks, getPosts } from "./remote/data.remote.js";

  let { data } = $props();
  const { books } = $derived(data);

  async function loadPosts() {
    const posts = await getPosts();
    console.log("posts", posts);
  }

  async function loadBooks() {
    const books = await getBooks();
    console.log("books", books);
  }
</script>

<div class="flex flex-col gap-2">
  <button class="bg-blue-500 text-white p-2 rounded-md" onclick={loadBooks}>Load Books</button>
  {#each books as book}
    <div>
      <h2>{book.title}</h2>
    </div>
  {/each}
</div>
