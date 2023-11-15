<script>
    import "../app.css";
    import { PlausibleAnalytics } from "@accuser/svelte-plausible-analytics";
</script>

<PlausibleAnalytics />

<div
    class="bg-slate-950 min-h-screen text-slate-50 min-w-screen flex justify-center background-gradient font-satoshi"
>
    <div class="max-w-screen-2xl overflow-x-hidden w-full">
        <slot />
    </div>
</div>
