<script>
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    export let username;
</script>

<div
    class="flex flex-col gap-2"
    transition:fly={{
        delay: 100,
        duration: 500,
        x: -200,
        y: 0,
        opacity: 0.5,
        easing: quintOut,
    }}
>
    <div class="flex gap-2 items-center">
        <div class="h-8 w-8 rounded-full overflow-hidden">
            <img src={`/images/${username}.jpg`} alt="" />
        </div>
        <div class="flex">
            <p class="font-bold">{username}</p>
        </div>
    </div>
    <p class="font-medium"><slot /></p>
</div>
