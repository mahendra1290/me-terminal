<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let value: string = "";

  const handleSubmit = () => {
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

<form on:submit|preventDefault={handleSubmit} class="w-full relative">
  <input
    type="text"
    on:blur={(e) => e.target.focus()}
    class="grow text-white outline-none border-none bg-transparent w-full text-sm"
    bind:value
    on:keydown={handleKeyDown}
  />
  <p
    class="border-r-8 border-gray-200 border-opacity-80 absolute inset-0 -left-[1px]"
    style="width: {value.length + 1}ch;"
  />
</form>
