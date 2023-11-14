<script>
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    import { Confetti } from "svelte-confetti";

    export let type;
    export let username;
</script>

<div
    class="inline gap-2"
    transition:fly={{
        delay: 100,
        duration: 500,
        x: 200,
        y: 0,
        opacity: 0.5,
        easing: quintOut,
    }}
>
    {#if type === "follow"}
        <span class="order-1">💖</span>
    {:else if type === "subscribe"}
        <span class="order-1">🌟</span>
    {:else if type === "raid"}
        <span class="order-1">📢</span>
    {:else if type === "shoutout"}
        <span class="order-1">⚔️</span>
    {/if}
    {#if type === "follow"}
        <span class="order-2 font-bold">{username}</span>
        <span class="order-3 font-medium">•</span>
        <span class="order-3 font-medium">followed you</span>
    {:else if type === "subscribe"}
        <span class="order-2 font-bold">{username}</span>
        <span class="order-3 font-medium">•</span>
        <span class="order-3 font-medium">subscribed to you</span>
    {:else if type === "raid"}
        <span class="order-2 font-bold">{username}</span>
        <span class="order-3 font-medium">•</span>
        <span class="order-3 font-medium"
            >gave you a shoutout to 317 viewers</span
        >
    {:else if type === "shoutout"}
        <span class="order-2 font-bold">{username}</span>
        <span class="order-3 font-medium">•</span>
        <span class="order-3 font-medium">raided you with 127 viewers</span>
    {/if}
    <div class="order-4"><Confetti x={[-1, -0.25]} y={[0, 0.5]} /></div>
</div>
