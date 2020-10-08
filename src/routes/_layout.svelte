<script>
  import Header from '../components/Header.svelte';
  import GlobalStyle from '../components/GlobalStyle.svelte';

  export let segment;
</script>

<style>

</style>

<GlobalStyle />

<div class="container mx-auto px-4">
  <Header {segment} />

  <main class="pb-8">
    <slot />
  </main>

  <!-- <footer>
    </footer> -->
</div>
