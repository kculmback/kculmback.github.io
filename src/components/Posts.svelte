<script>
  export let posts;
</script>

<div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {#each posts as post, index}
    <div class="border border-gray-200 rounded shadow-lg overflow-hidden">
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
          <a
            rel="prefetch"
            href="blog/{post.slug}"
            class="block w-full rounded py-2 text-white hover:text-white
            text-center bg-primary hover:bg-primary-dark transition-colors
            duration-300">
            Read More
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>
