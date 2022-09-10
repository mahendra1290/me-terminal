<script lang="ts">
  export let input = "";
  $: [command, ...flags] = input.split(/ +/);

  $: {
    if (flags.includes("-g")) {
      setTimeout(function () {
        window.open("https://github.com/mahendra1290", "_blank");
      }, 1000);
    }
  }
</script>

<div>
  {#if !flags || flags.length == 0}
    <div>
      <span>Github</span>
      <a
        target="_blank"
        class="text-blue-400"
        href="https://github.com/mahendra1290">github.com/1290</a
      >
    </div>
    <div>
      <span>Linkedin</span>
      <a
        target="_blank"
        class="text-blue-400"
        href="https://linkedin.com/in/mahendra1290">linkedin/in/mahendra1290</a
      >
    </div>
  {:else}
    <div>Opening my github profile</div>
  {/if}
</div>
