<script lang="ts">
  import Help from "../commands/Help.svelte";
  import About from "../commands/About.svelte";
  import CommandLine from "./CommandLine.svelte";
  import CommandNotFound from "./CommandNotFound.svelte";
  import Education from "../commands/Education.svelte";
  import Experience from "../commands/Experience.svelte";
  import Socials from "../commands/Socials.svelte";
  import Skills from "../commands/Skills.svelte";

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
  {:else if command === "experience"}
    <Experience />
  {:else if command === "socials"}
    <Socials input={commands[index]} />
  {:else if command === "skills"}
    <Skills />
  {:else if command !== ""}
    <CommandNotFound input={command} />
  {/if}
{/each}
