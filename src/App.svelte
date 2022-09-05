<script lang="ts">
  import Fuse from "fuse.js";
  import { afterUpdate } from "svelte";
  import CommandInput from "./components/CommandInput.svelte";
  import TerminalHeader from "./components/TerminalHeader.svelte";
  import CommandExecuter from "./components/CommandExecuter.svelte";

  let container;

  let input = "";
  let suggestions = [];
  let focusedSug = -1;
  let quickSug = "";
  let commandHistory = [];
  let currInd = 0;

  $: {
    const fuzzyres: { item: string }[] = fuse.search(input);
    quickSug = fuzzyres.at(0)?.item;
  }

  afterUpdate(() => {
    container.scrollTop = container.scrollHeight;
  });

  const getAutoComplete = (command: string): string[] => {
    const fuzzyres: { item: string }[] = fuse.search(command);
    if (fuzzyres.length == 1) {
      return [fuzzyres[0].item];
    } else {
      return fuzzyres.map((item: any) => item.item);
    }
  };

  const handleEnterKeyDown = () => {
    currInd = 0;
    if (input != "" && commandHistory.at(-1) != input) {
      commandHistory.push(input);
    }
    if (input === "clear") {
      clearTerminal();
    } else {
      output = [...output, input];
      suggestions = [];
      focusedSug = -1;
    }
    input = "";
  };

  const handleTabKeyDown = (e: { detail: { value: string } }) => {
    if (suggestions.length === 0) {
      const autoComplete = getAutoComplete(e.detail.value);
      if (autoComplete.length === 1) {
        input = autoComplete[0];
      } else {
        suggestions = autoComplete;
      }
    } else {
      focusedSug = (focusedSug + 1) % suggestions.length;
      input = suggestions[focusedSug];
    }
  };

  const handleArrowUpKeyDown = (e) => {
    if (Math.abs(currInd) === commandHistory.length) {
      currInd = 0;
    }
    currInd--;
    input = commandHistory.at(currInd) || "";
  };

  const clearTerminal = () => {
    input = "";
    output = [];
  };

  let output: string[] = [];
  const map = {
    help: "</br> <div>Usage [command] [flags]</div></br>about my details",
    about:
      "My name is <b class='underline'>Mahendra suthar</b> and I am a full stack engineer. I like to learn new things, and be efficient in my process. How have knowlege of both frontend and backend",
    age: "My name is mahendra suthar",
    education: "My name is mahendra suthar",
    atix: "My name is mahendra suthar",
    exit: "Thanks for visiting closing this in 3 sec",
    contact: "Mail: mahendra.suthar.1290@gmail.com phone: +91 82099 40205",
    github:
      "-----> <a class='text-blue-400' href='https://github.com/mahendra1290' target='blank'>https://github.com/mahendra1290</a> use -o to open in new tab",
    linkedin:
      "-----> <a class='text-blue-400' href='https://linkedin.com/in/mahendra1290' target='blank'>https://linkedin.com/in/mahendra1290</a> use -o to open in new tab",
    clear: "lanche-bradburry",
  };
  const keys = Object.keys(map);
  const fuse = new Fuse(keys, {
    isCaseSensitive: false,
    threshold: 0.2,
    minMatchCharLength: 1,
    distance: 0,
  });
</script>

<main
  class="min-h-[100vh] text-white bg-zinc-600 flex justify-center items-center"
>
  <div
    class="w-full flex flex-col max-w-4xl h-screen md:h-[560px] text-sm font-mono shadow-md rounded-lg overflow-hidden bg-zinc-900 border-current"
  >
    <TerminalHeader title={"github/mahendra1290"} />
    <div bind:this={container} class="py-2 px-2 overflow-auto">
      <CommandExecuter commands={output} />
      <div class="flex gap-2 relative">
        <span class="text-green-500">></span>
        <CommandInput
          bind:value={input}
          on:enterkeydown={handleEnterKeyDown}
          on:tabkeydown={handleTabKeyDown}
          on:arrowupkeydown={handleArrowUpKeyDown}
          on:userinput={() => {
            if (suggestions.length > 0) {
              suggestions = [];
              focusedSug = -1;
            }
          }}
          on:clear={clearTerminal}
        />
        <p class="absolute left-4 text-gray-100 opacity-40">
          {quickSug || ""}
        </p>
      </div>
      <div class="flex flex-wrap gap-2">
        {#each suggestions as sug, ind}
          <span
            class={ind === focusedSug
              ? "bg-gray-50 text-black rounded-sm px-2"
              : "bg-none px-2"}>{sug}</span
          >
        {/each}
      </div>
    </div>
  </div>
</main>
