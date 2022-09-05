<script lang="ts">
  const helpText = [
    ["about", "you know what it will do"],
    ["education", "my education history"],
    ["linkedin", "view my linkedin profile"],
    ["github", "view my projects and contributions on github"],
    ["skills", "view my skills"],
    ["projects", "list all projects"],
    ["experiences", "list all experiences"],
  ];
</script>

<div class="ml-[2ch]">
  <br />
  <h6>You can use tab key for suggestions</h6>
  <h6>You can use arrow up key for previous commands</h6>
  <h6>Usage: [command] [flags]</h6>
  <br />
  <p>available commands:</p>
  <br />
  <table class="table-auto text-left font-extralight">
    {#each helpText as text}
      <tr>
        <td class="pr-20">* {text[0]}</td>
        <td class="text-gray-300">{text[1]}</td>
      </tr>
    {/each}
  </table>
</div>
