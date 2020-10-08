<script>
  import Logo from './Logo.svelte';
  import Nav from './nav/Nav.svelte';

  export let segment;
</script>

<header class="flex items-center justify-between py-4">
  <Logo />
  <Nav {segment} />
</header>
