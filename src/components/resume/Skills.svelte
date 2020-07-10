<script>
  export let title = ''
  export let skills = []
</script>

<div class="mb-8">
  <h3 class="text-lg font-bold mb-1">{title}</h3>
  <ul>
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</div>