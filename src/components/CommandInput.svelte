<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { HtmlTag } from "svelte/internal";
  const dispatch = createEventDispatcher();
  export let value: string = "";

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code == "Enter") {
      dispatch("enterkeydown", {
        value,
      });
    } else if (e.code === "Tab") {
      e.preventDefault();
      dispatch("tabkeydown", {
        value,
      });
    } else if (e.code === "ArrowUp") {
      e.preventDefault();
      dispatch("arrowupkeydown", {
        value,
      });
    } else if (e.code === "KeyL" && e.ctrlKey) {
      dispatch("clear");
    } else {
      dispatch("userinput");
    }
  };
</script>

<input
  on:blur={(e) => e.target.focus()}
  class="grow text-white outline-none border-none bg-transparent w-full"
  bind:value
  on:keydown={handleKeyDown}
/>
