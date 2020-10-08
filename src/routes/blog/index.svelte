<script context="module">
  export async function preload({ params, query }) {
    const postsResponse = await this.fetch(`blog.json`);
    const posts = await postsResponse.json();

    const tagsResponse = await this.fetch(`blog/tags.json`);
    const tags = await tagsResponse.json();

    return { posts, tags };
  }
</script>

<script>
  import Posts from '../../components/Posts.svelte';
  import Tag from '../../components/Tag.svelte';

  export let posts = [];
  export let tags = [];

  let selectedTags = [];

  $: filteredPosts = selectedTags.length
    ? posts.filter(post => post.tags.some(tag => selectedTags.includes(tag)))
    : posts;

  function updateSelectedTags(clickedTag) {
    if (selectedTags.includes(clickedTag)) {
      selectedTags = selectedTags.filter(tag => tag !== clickedTag);
      return;
    }

    selectedTags.push(clickedTag);
    selectedTags = selectedTags;
  }

  function handleTagSelect(e) {
    updateSelectedTags(e.detail.tag);
  }
</script>

<svelte:head>
  <title>Kasey Culmback Blog</title>
</svelte:head>

<div>
  <div class="text-center py-4">
    <h1 class="mb-4">Blog</h1>
  </div>
  <div class="text-center mb-8">
    <span class="block font-bold text-lg mb-1">Tags</span>
    {#each tags as tag}
      <Tag
        selected={selectedTags.includes(tag)}
        {tag}
        on:click={handleTagSelect} />
    {/each}
  </div>
  <Posts posts={filteredPosts} />
</div>
