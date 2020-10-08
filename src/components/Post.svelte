<script>
  import Button from './Button.svelte';
  export let post = {};
</script>

<div
  class="border border-gray-200 dark:bg-gray-800 dark:border-gray-900 rounded
  shadow-lg overflow-hidden">
  <div class="flex flex-col h-full">
    {#if post.image}
      <div>
        <img
          class="object-cover h-48 w-full"
          src={post.image}
          alt={post.imageAlt || ''} />
      </div>
    {/if}
    <div class="p-4 flex-grow">
      <h2 class="text-lg hover:text-primary transition-colors duration-300">
        <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
      </h2>
      <span class="text-sm">{post.printDate}</span>
      <hr class="my-2" />
      <p>{post.excerpt}</p>
    </div>
    <div>
      <Button
        rel="prefetch"
        href="blog/{post.slug}"
        classes="w-full"
        text="Read More" />
    </div>
  </div>
</div>
