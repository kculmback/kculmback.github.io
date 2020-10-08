<script>
  import { createEventDispatcher } from 'svelte';

  export let selected = false;
  export let tag = '';

  const dispatch = createEventDispatcher();
</script>

<button
  class="capitalize px-4 py-2 rounded-full mx-2 my-2 {selected ? 'bg-primary hover:bg-primary-dark text-white' : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark-hover:bg-gray-800'}"
  on:click={e => dispatch('click', { tag, clickEvent: e })}>
  {tag}
</button>
