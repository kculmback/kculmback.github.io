<script>
  export let selected = false;
  export let text = '';
  export let href = '';
  export let prefetch = false;

  $: selectedClass = selected ? 'selected' : '';
  $: rel = prefetch ? 'prefetch' : '';
</script>

<a
  {rel}
  class="{selectedClass} ml-4 text-gray-700 hover:text-primary
  dark:text-gray-300 dark-hover:text-primary transition-colors duration-300"
  {href}>
  {text}
</a>
