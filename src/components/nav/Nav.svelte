<script>
  import NavLink from './NavLink.svelte';
  export let segment;
</script>

<nav class="font-medium">
  <NavLink selected={segment === undefined} href="." text="Home" />
  <NavLink
    prefetch
    selected={segment === 'resume'}
    href="resume"
    text="Resume" />
  <NavLink prefetch selected={segment === 'blog'} href="blog" text="Blog" />
</nav>
