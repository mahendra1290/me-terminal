<script lang="ts">
  const educations = [
    {
      name: "National Institute of Technology, Kurukshetra",
      stream: "B.Tech in Computer Engineering",
      place: "Haryana IN",
      from: "July 2018",
      to: "July 2022",
      score: "CGPA 8.45",
    },
    {
      name: "Saint Teressa school",
      stream: "B.Tech in Computer Engineering",
      place: "Jodhpur Rajasthan IN",
      from: "2016",
      score: "83.67 %",
    },
  ];
</script>

<div class="space-y-4">
  {#each educations as { name, stream, place, from, to, score }, index}
    <div class="flex gap-2">
      <div>{index}</div>
      <div class="max-w-lg flex-grow">
        <h2 class="flex justify-between font-bold text-blue-200">
          <span>{name}</span> <span>{place}</span>
        </h2>
        <h3 class="underline text-teal-200">{stream}</h3>
        <p class="text-orange-200">{from} - {to}</p>
        <p class="text-gray-200">{score}</p>
      </div>
    </div>
  {/each}
</div>
