<script>
  import Post from './Post.svelte';
  export let posts;
</script>

<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {#each posts as post, index}
    <Post {post} />
  {/each}
</div>
