<script>
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    import { Confetti } from "svelte-confetti";
    import Brandmark from "./Brandmark.svelte";

    export let type;
    export let username;
    export let invisible = false;
</script>

<div class={invisible ? "max-h-[0px]" : ""} aria-hidden={invisible}>
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
            <span class="order-3 font-medium text-slate-400">•</span>
            <span class="order-3 font-medium text-slate-400">followed you</span>
        {:else if type === "subscribe"}
            <span class="order-2 font-bold">{username}</span>
            <span class="order-3 font-medium text-slate-400">•</span>
            <span class="order-3 font-medium text-slate-400"
                >subscribed to you</span
            >
        {:else if type === "raid"}
            <span class="order-2 font-bold">{username}</span>
            <span class="order-3 font-medium text-slate-400">•</span>
            <span class="order-3 font-medium text-slate-400"
                >gave you a shoutout to 317 viewers</span
            >
        {:else if type === "shoutout"}
            <span class="order-2 font-bold">{username}</span>
            <span class="order-3 font-medium text-slate-400">•</span>
            <span class="order-3 font-medium text-slate-400"
                >raided you with 127 viewers</span
            >
        {/if}
        {#if !invisible}
            <div class="order-4"><Confetti x={[-1, -0.25]} y={[0, 0.5]} /></div>
        {/if}
    </div>
</div>
