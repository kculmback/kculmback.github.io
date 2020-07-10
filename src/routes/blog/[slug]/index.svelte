<script context="module">
  export async function preload({ params, query }) {
    const slug = params.slug;
    // the `slug` parameter is available because
    // this file is called [slug].html
    const postResponse = await this.fetch(`blog/${slug}.json`);
    const post = await postResponse.json();

    const commentsResponse = await this.fetch(`blog/${slug}/comments.json`);
    const comments = await commentsResponse.json();

    if (postResponse.status === 200) {
      return { post, comments, slug };
    } else {
      this.error(postResponse.status, post.message);
    }
  }
</script>

<script>
  import Bio from '../../../components/Bio.svelte';
  import Comments from '../../../components/Comments.svelte';

  export let slug = '';
  export let post = '';
  export let comments = [];

  async function getComments() {
    const commentsResponse = await fetch(`blog/${slug}/comments.json`);
    comments = await commentsResponse.json();
  }
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="container">
  <article class="post-content my-12">
    <header class="text-center">
      <h1 class="mb-2">{post.title}</h1>
      <p class="text-lg font-bold text-gray-600 mb-4">
        {post.printDate} ~ {post.printReadingTime}
      </p>
      {#if post.image}
        <div>
          <img
            class="object-cover w-full max-h-xl"
            src={post.image}
            alt={post.imageAlt || ''} />
        </div>
      {/if}
      <hr class="max-w-xl mx-auto my-8" />
    </header>
    <div>
      {@html post.html}
    </div>
    <div class="my-8">
      <Bio />
    </div>
    <Comments {comments} {slug} on:commentAdded={getComments} />
  </article>
</div>
