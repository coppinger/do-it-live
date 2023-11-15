<script>
    import "../app.css";
    import { PlausibleAnalytics } from "@accuser/svelte-plausible-analytics";
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>Build In Public: Live — how to start indie hacking on Twitch</title>
    <meta
        name="title"
        content="Build In Public: Live — how to start indie hacking on Twitch"
    />
    <meta
        name="description"
        content="A cohort based course that quickly teaches you everything you need to know to build & grow a Twitch stream as an indie hacker"
    />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://buildinpublic.live/" />
    <meta
        property="og:title"
        content="Build In Public: Live — how to start indie hacking on Twitch"
    />
    <meta
        property="og:description"
        content="A cohort based course that quickly teaches you everything you need to know to build & grow a Twitch stream as an indie hacker"
    />
    <meta property="og:image" content="/images/meta-tags.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://buildinpublic.live/" />
    <meta
        property="twitter:title"
        content="Build In Public: Live — how to start indie hacking on Twitch"
    />
    <meta
        property="twitter:description"
        content="A cohort based course that quickly teaches you everything you need to know to build & grow a Twitch stream as an indie hacker"
    />
    <meta property="twitter:image" content="/images/meta-tags.png" />
</svelte:head>

<PlausibleAnalytics />

<div
    class="bg-slate-950 min-h-screen text-slate-50 min-w-screen flex justify-center background-gradient font-satoshi"
>
    <div class="max-w-screen-2xl overflow-x-hidden w-full">
        <slot />
    </div>
</div>
