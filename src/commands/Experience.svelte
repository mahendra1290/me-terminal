<script lang="ts">
  const experience = [
    {
      name: "GoodWorker Technologies",
      position: "SDE1",
      address: "Bengaluru",
      from: new Date("2022-06-20"),
      to: new Date(),
      details: "Worked on various projects",
    },
    {
      name: "Skill Academy Technologies",
      position: "Frontend dev",
      address: "Bengaluru",
      from: new Date("2021-11-01"),
      to: new Date("2022-02-28"),
      details: "",
    },
  ];

  const getDuration = (from: Date, to: Date) => {
    const diff = to.getTime() - from.getTime();

    const years = diff / (1000 * 60 * 60 * 24 * 365);
    const months = (years - Math.floor(years)) * 12;
    if (years < 1) {
      return `${Math.floor(months)} months`;
    }
    return `${Math.floor(years)} years ${Math.floor(months)} months`;
  };

  const format = (date: Date) => {
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };
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
        <p class="text-orange-200">
          {format(from)} - {format(to)}
          <span class="text-blue-400"> -- {getDuration(from, to)}</span>
        </p>
        <p class="text-gray-200" />
        <p class="text-gray-200">{details}</p>
      </div>
    </div>
  {/each}
</div>
