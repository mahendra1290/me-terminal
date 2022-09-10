<script lang="ts">
  const experience = [
    {
      name: "GoodWorker Technologies",
      position: "SDE1",
      address: "Bengaluru",
      from: "18 th 2022",
      to: "20 th june",
      details: "",
    },
    {
      name: "Skill Academy Technologies",
      position: "Frontend dev",
      address: "Bengaluru",
      from: "18 th 2022",
      to: "20 th june",
      details: "",
    },
  ];
</script>

<div class="space-y-4">
  {#each experience as { name, position, address, from, to, details }, index}
    <div class="flex gap-2">
      <div>{index}</div>
      <div class="max-w-lg flex-grow">
        <h2 class="flex justify-between font-bold text-blue-200">
          <span>{name}</span> <span>{address}</span>
        </h2>
        <h3 class="underline text-teal-200">{position}</h3>
        <p class="text-orange-200">{from} - {to}</p>
        <p class="text-gray-200">{details}</p>
      </div>
    </div>
  {/each}
</div>
