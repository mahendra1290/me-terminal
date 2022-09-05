<script lang="ts">
  export let title = "";
</script>

<div
  class="px-2 py-1 shadow-md font-mono mx-auto flex gap-2 w-full items-center justify-between  bg-gray-700 text-white"
>
  <div class="flex items-center gap-2">
    <span class="block rounded-full bg-red-500 h-3 w-3" />
    <span class="block rounded-full bg-yellow-500 h-3 w-3" />
    <span class="block rounded-full bg-green-500 h-3 w-3" />
  </div>
  <p class="grow text-center">{title}</p>
</div>
