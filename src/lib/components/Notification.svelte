<script>
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    import { Confetti } from "svelte-confetti";

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
        <p class="order-3 font-medium">followed you</p>
    {:else if type === "subscribe"}
        <p class="order-1">🌟</p>
        <p class="order-3 font-medium">subscribed</p>
    {:else if type === "raid"}
        <p class="order-1">⚔️</p>
        <p class="order-3 font-medium">gave you a shoutout</p>
    {:else if type === "shoutout"}
        <p class="order-1">📢</p>
        <p class="order-3 font-medium">raided you with 1,337 ppl</p>
    {/if}
    <div class="order-4"><Confetti x={[-1, -0.25]} y={[0, 0.5]} /></div>
</div>
