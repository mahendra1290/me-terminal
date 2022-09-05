<script lang="ts">
  let age: Date;
  $: age = new Date();
</script>

<div class="pl-[2ch] py-1">
  <div class="flex p-[1ch] border w-fit rounded-xl gap-2">
    <div class="object-cover h-40 rounded-lg overflow-hidden">
      <img class="h-full" src="dp.jpg" alt="profile" />
    </div>
    <div>
      <p>Hi, my name is <b>Mahendra Suthar</b>.</p>
      <p>I am a Fullstack developer</p>
      <p>I like to build some awesome projects</p>
      <p>Please type help to know more about me.</p>
    </div>
  </div>
</div>
