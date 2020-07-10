<script>
  export let segment;
</script>

<nav class="font-medium">
  <a class="{segment === undefined ? 'selected' : ''} ml-4 text-gray-700 hover:text-primary transition-colors duration-300" href=".">Home</a>
  <a rel="prefetch" class="{segment === 'resume' ? 'selected' : ''} ml-4 text-gray-700 hover:text-primary transition-colors duration-300" href="resume">Resume</a>
  <a rel="prefetch" class="{segment === 'blog' ? 'selected' : ''} ml-4 text-gray-700 hover:text-primary transition-colors duration-300" href="blog">Blog</a>
</nav>
