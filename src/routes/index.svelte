<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import Posts from '../components/Posts.svelte';

  export let posts = [];

  $: caseStudies = posts
    .filter(post => post.tags.includes('case study'))
    .slice(0, 3);
  $: recentPosts = posts
    .filter(post => !post.tags.includes('case study'))
    .slice(0, 3);
</script>

<svelte:head>
  <title>Kasey Culmback Web Development</title>
</svelte:head>

<div>
  <div class="my-4 md:flex items-center">
    <div class="mb-4">
      <h1 class="mb-4">Hi, I'm Kasey Culmback</h1>
      <p class="mb-4">
        I'm a Web Developer & Software Engineer based in Spokane, WA. I enjoy
        working on web applications, developing REST APIs, and using modern
        JavaScript frameworks like Vue and React. I am in the constant pursuit
        of learning new technologies, employing best practices, and constantly
        challenging myself.
      </p>
      <!-- prettier-ignore -->
      <p>
        Looking to get to know me? Send me a message on
        <a href="https://www.linkedin.com/in/kculmback" target="_blank">LinkedIn</a>,
        check out my
        <a href="https://www.github.com/kculmback" target="_blank">GitHub</a>,
        take a look at my <a href="resume">resume</a>,
        or check out my most recent case studies & blog posts below.
      </p>
    </div>
    <div class="flex-shrink-0">
      <img
        src="profile-pic.jpg"
        alt="Kasey Culmback headshot"
        class="w-full max-w-xs xl:max-w-sm rounded-full mx-auto md:ml-4 lg:ml-8" />
    </div>
  </div>
  {#if caseStudies.length}
    <div class="my-8">
      <h2>Case Studies</h2>
      <Posts posts={caseStudies} />
    </div>
  {/if}
  {#if recentPosts.length}
    <div class="my-8">
      <h2>Recent Posts</h2>
      <Posts posts={recentPosts} />
    </div>
  {/if}
</div>
