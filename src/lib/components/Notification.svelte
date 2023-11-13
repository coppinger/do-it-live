<script>
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    export let type;
    export let username;
</script>

<div
    class="flex gap-4"
    transition:fly={{
        delay: 100,
        duration: 500,
        x: 200,
        y: 0,
        opacity: 0.5,
        easing: quintOut,
    }}
>
    <p class="order-2 font-bold">{username}</p>
    {#if type === "follow"}
        <p class="order-1">💖</p>
        <p class="order-3">followed you</p>
    {:else if type === "subscribe"}
        <p class="order-1">🌟</p>
        <p class="order-3">subscribed</p>
    {:else if type === "raid"}
        <p class="order-1">⚔️</p>
        <p class="order-3">gave you a shoutout</p>
    {:else if type === "shoutout"}
        <p class="order-1">📢</p>
        <p class="order-3">raided you with 1,337 ppl</p>
    {/if}
</div>
