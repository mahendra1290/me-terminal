<script lang="ts">
  import Help from "../commands/Help.svelte";
  import About from "../commands/About.svelte";
  import CommandLine from "./CommandLine.svelte";
  import CommandNotFound from "./CommandNotFound.svelte";
  import Education from "../commands/Education.svelte";

  export let commands: string[];

  $: commandNames = commands.map(extractCommandNames);

  function extractCommandNames(input: string) {
    return input.split(/\s+/).at(0);
  }
</script>

{#each commandNames as command, index}
  <CommandLine input={commands[index]} />
  {#if command === "about"}
    <About />
  {:else if command === "help"}
    <Help />
  {:else if command === "education"}
    <Education />
  {:else if command !== ""}
    <CommandNotFound input={command} />
  {/if}
{/each}
