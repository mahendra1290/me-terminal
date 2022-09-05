<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let value: string = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch("enterkeydown", {
      value,
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Tab") {
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

<form on:submit={handleSubmit}>
  <input
    type="text"
    on:blur={(e) => e.target.focus()}
    class="grow text-white outline-none border-none bg-transparent w-full text-sm"
    bind:value
    on:keydown={handleKeyDown}
  />
</form>
