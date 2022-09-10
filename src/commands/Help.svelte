<script lang="ts">
  const helpText = [
    ["about", "you know what it will do"],
    ["education", "my education history"],
    [
      "socials",
      {
        message: "get my github, linkedin etc links",
        flags: [
          {
            name: "-g",
            message: "open my github profile",
          },
          {
            name: "-l",
            message: "open my linkedin",
          },
        ],
      },
    ],
    ["skills", "view my skills"],
    ["projects", "list all projects"],
    ["experiences", "list all experiences"],
  ];
</script>

<div class="ml-[2ch]">
  <br />
  <h6>
    You can use <kbd class="border px-1 rounded-sm bg-gray-100 text-black"
      >tab</kbd
    > key for suggestions
  </h6>
  <h6>
    You can use <kbd class="border px-1 rounded-sm bg-gray-100 text-black"
      >↑</kbd
    > key for previous commands
  </h6>
  <h6>Usage: [command] [flags]</h6>
  <br />
  <p>available commands:</p>
  <br />
  <table class="table-auto text-left font-extralight">
    {#each helpText as text}
      <tr>
        <td class="pr-20 align-top"
          >* {text[0]}
          {#if typeof text[1] !== "string"}
            {#each text[1].flags as flag}
              <p class="pl-8">
                {flag.name}
              </p>
            {/each}
          {/if}
        </td>
        <td class="text-gray-300">
          {#if typeof text[1] == "string"}
            {text[1]}
          {:else}
            <div>{text[1].message}</div>
            {#each text[1].flags as flag}
              <div>
                {flag.message}
              </div>
            {/each}
          {/if}
        </td>
      </tr>
    {/each}
  </table>
</div>
