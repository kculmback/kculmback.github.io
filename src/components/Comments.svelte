<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let comments = [];
  export let slug = '';

  let showAddComment = false;
  let disableAddComment = false;
  let userComment = '';
  let userName = '';
  let loading = false;
  let success = false;
  let error = false;

  async function addComment() {
    if (showAddComment || disableAddComment) return;

    showAddComment = true;
    disableAddComment = true;
  }

  async function submitComment() {
    error = false;
    success = false;
    loading = true;

    try {
      await fetch(`blog/${slug}/comments.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userName, comment: userComment, slug }),
      });
      success = true;
      showAddComment = false;
      userComment = '';
      userName = '';
      dispatch('commentAdded');
    } catch {
      error = true;
    } finally {
      loading = false;
    }
  }
</script>

<div class="container mx-auto max-w-4xl">
  <div class="mb-8">
    <div class="flex justify-between items-center mb-4">
      <h2 class="font-bold mb-2">Comments</h2>
      {#if !disableAddComment}
        <button
          class="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded"
          on:click={addComment}>
          Add Comment
        </button>
      {/if}
    </div>
    {#if showAddComment}
      <form
        class="mb-4 p-4 rounded shadow-sm dark:bg-gray-800"
        on:submit|preventDefault={submitComment}>
        <label class="block mb-2">
          Name
          <input
            type="text"
            bind:value={userName}
            placeholder="Jane Doe"
            required
            maxlength="100"
            class="w-full border border-gray-100 dark:bg-gray-300
            dark-border-gray-300 dark:text-gray-900 rounded p-4" />
        </label>
        <label class="block mb-2">
          Comment
          <textarea
            name="comment"
            rows="7"
            placeholder="Write your comment here. Basic markdown is supported."
            class="w-full border border-gray-100 dark:bg-gray-300
            dark-border-gray-300 dark:text-gray-900 rounded p-4"
            required
            maxlength="1000"
            bind:value={userComment} />
        </label>
        <button
          class="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded"
          type="submit">
          Submit
        </button>
        {#if error}
          <div
            class="rounded border border-red-400 bg-red-200 text-red-900 p-4
            my-4">
            <span>Could not submit comment.</span>
          </div>
        {/if}
      </form>
    {/if}
    {#if success}
      <div
        class="rounded border border-green-400 bg-green-200 text-green-900 p-4
        my-4">
        <span>Comment added!</span>
      </div>
    {/if}
    {#each comments as comment}
      <figure
        class="mb-4 p-4 border border-gray-100 dark:bg-gray-800
        dark:border-gray-800 rounded-lg overflow-hidden shadow-md">
        <div>
          <span class="font-bold">{comment.name}</span>
          -
          <time class="italic">{comment.created}</time>
        </div>
        <hr class="my-2" />
        <div>
          {@html comment.html}
        </div>
      </figure>
    {:else}
      <figure
        class="mb-4 p-4 border border-gray-100 dark:bg-gray-800
        dark:border-gray-800 rounded-lg overflow-hidden shadow-md">
        <div>No comments have been added.</div>
      </figure>
    {/each}
  </div>
</div>
