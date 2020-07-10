<script>
  export let title = ''
  export let employer = ''
  export let time = ''
  export let items = []
</script>

<div class="mb-8">
  <h3 class="text-lg font-bold mb-1">{title}</h3>
  <p class="italic">{employer} - {time}</p>
  <ul class="list-disc mt-2 ml-6">
    {#each items as item}
      <li class="mb-1">{item}</li>
    {/each}
  </ul>
</div>