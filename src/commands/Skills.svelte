<script lang="ts">
  const skills = [
    {
      sectionName: "Languages",
      values: [
        ["python", 5],
        ["javascript", 4],
        ["typescript", 4],
        ["nodeJS", 4],
        ["express", 4],
      ],
    },
    {
      sectionName: "Frameworks / Libraries",
      values: [
        ["ReactJs", 5],
        ["Angular", 4],
        ["ExpressJS", 4],
      ],
    },
  ];
</script>

<div class="py-2">
  {#each skills as skill, ind}
    <div class={ind !== skills.length - 1 ? "mb-2" : ""}>
      <h3 class="text-teal-400 mb-2">{skill.sectionName} :</h3>
      <div class="space-x-4">
        {#each skill.values as value}
          <p
            class="pl-2 inline-block rounded-sm bg-gray-600 text-slate-100 border-l-2 border-l-green-400"
          >
            {value[0]}
            <span class="text-gray-800 bg-gray-200 px-2">
              {value[1]}/5
            </span>
          </p>
        {/each}
      </div>
    </div>
  {/each}
</div>
