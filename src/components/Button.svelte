<script>
  export let rel = '';
  export let href = '';
  export let text = '';
  export let classes = '';
</script>

<a
  {rel}
  {href}
  class="{classes} block rounded py-2 text-white hover:text-white
  dark:text-white dark-hover:text-white text-center bg-primary
  hover:bg-primary-dark transition-colors duration-300">
  {text}
</a>
