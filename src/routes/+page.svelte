<script>
    // Components
    import Header from "../lib/components/Header.svelte";
    import StreamerBadge from "../lib/components/StreamerBadge.svelte";

    // Libraries

    import "atropos/css";
    import Typewriter from "svelte-typewriter";

    // import Atropos library
    import Atropos from "atropos";

    // SVGs
    import Tick from "../lib/svgs/Tick.svelte";
    import ViewCount from "../lib/svgs/ViewCount.svelte";
    import Twitter from "../lib/svgs/Twitter.svelte";
    import Discord from "../lib/svgs/Discord.svelte";
    import Twitch from "../lib/svgs/Twitch.svelte";
    import Sleepy from "../lib/svgs/Sleepy.svelte";
    import Heart from "../lib/svgs/Heart.svelte";
    import Confetti from "../lib/svgs/Confetti.svelte";
    import DiscountedPrice from "../lib/svgs/DiscountedPrice.svelte";
    import TimelineSeperator from "../lib/svgs/TimelineSeperator.svelte";

    // Discount checker

    let discountCheck;

    import { onMount } from "svelte";
    import ChatReference from "../lib/components/ChatReference.svelte";
    import Logo from "../lib/components/Logo.svelte";
    import ChatMessage from "../lib/components/ChatMessage.svelte";
    import Notification from "../lib/components/Notification.svelte";

    const discounts = {};

    onMount(
        () =>
            (discountCheck =
                window.location.search.includes("mdallbets") ||
                window.location.search.includes("testing"))
    );

    // Intiate Atropos

    onMount(() => {
        const astroposChat = Atropos({
            el: ".atropos-chat",
            eventsEl: ".atropos-parent-el",
            shadow: false,
            commonOrigin: false,
        });
        const atroposActivity = Atropos({
            el: ".atropos-activity",
            eventsEl: ".atropos-parent-el",
            shadow: false,
            commonOrigin: false,
        });
        const atorposStream = Atropos({
            el: ".atropos-stream",
            eventsEl: ".atropos-parent-el",
            shadow: false,
            commonOrigin: false,
        });
        const atroposTitle = Atropos({
            el: ".atropos-title",
            eventsEl: ".atropos-parent-el",
            shadow: false,
            commonOrigin: false,
        });
    });

    // Render chat messages

    let chatMessagesList = [
        { username: "badcop", message: "ur a bad stremer" },
        {
            username: "badcop",
            message: "Make sure you don't forget to update the permissions!",
        },
        { username: "badcop", message: "IT'S TIME TO SHIP, LFG!" },
    ];

    let chatMessagesLive = [
        { username: "badcop", message: "Hey, have you tried this library?" },
    ];

    let chatMessageCounter = 0;

    function addChatMessage() {
        chatMessagesLive = [
            ...chatMessagesLive,
            chatMessagesList[chatMessageCounter],
        ];
        if (chatMessagesLive.length <= chatMessagesList.length) {
            chatMessageCounter++;
        } else {
            clearInterval(chatMessageInterval);
        }
    }

    let chatMessageInterval = setInterval(addChatMessage, 2500);

    chatMessageInterval;

    // Render activity notifications

    let activityMessagesList = [{ username: "badcop", type: "follow" }];

    let activityMessagesLive = [{ username: "badcop", type: "subscribe" }];

    let activityMessageCounter = 0;

    function addactivityMessage() {
        activityMessagesLive = [
            ...activityMessagesLive,
            activityMessagesList[activityMessageCounter],
        ];
        if (activityMessagesLive.length <= activityMessagesList.length) {
            activityMessageCounter++;
        } else {
            clearInterval(activityMessageInterval);
        }
    }

    let activityMessageInterval = setInterval(addactivityMessage, 3500);

    activityMessageInterval;
</script>

<div class="flex flex-col gap-12 md:gap-20">
    <Header />
    <!-- Hero Section -->
    <div
        class="flex flex-col gap-8 md:gap-16 justify-center items-center relative"
    >
        <div class="flex flex-col items-center text-center gap-6 px-6">
            <p class="text-slate-300 text-3xl font-medium">
                Stop fighting with the algorithm on X
            </p>
            <p class="heading !text-7xl">Build in public on Twitch</p>
            <p class="text-slate-400 text-xl font-medium max-w-md">
                A cohort based course that teaches you everything you need to
                know to build & grow a Twitch stream as an indie hacker
            </p>
        </div>
        <a href="/" class="primary-button flex gap-2 items-center"
            >Sign me up <Confetti />
        </a>
        <ul class="flex flex-col gap-6 md:gap-16 md:flex-row">
            <li
                class="flex gap-3 items-center text-slate-100 text-xl font-medium"
            >
                <Tick />
                Start shipping consistently
            </li>
            <li
                class="flex gap-3 items-center text-slate-100 text-xl font-medium"
            >
                <Tick />
                Grow your engagement
            </li>
            <li
                class="flex gap-3 items-center text-slate-100 text-xl font-medium"
            >
                <Tick />
                Find your 1,000 true fans
            </li>
        </ul>
    </div>
    <!-- Stream Section -->

    <section class="relative flex justify-center items-center">
        <svg
            class="absolute -top-56 pointer-events-none"
            width="1400"
            height="900"
            viewBox="0 0 1242 892"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.24" filter="url(#filter0_f_102_1130)">
                <rect
                    x="250"
                    y="250"
                    width="742"
                    height="392"
                    fill="url(#paint0_radial_102_1130)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_102_1130"
                    x="0"
                    y="0"
                    width="1242"
                    height="892"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="125"
                        result="effect1_foregroundBlur_102_1130"
                    />
                </filter>
                <radialGradient
                    id="paint0_radial_102_1130"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(517.885 45.9818) rotate(9.81436) scale(841.484 1132.53)"
                >
                    <stop stop-color="#EB00FF" />
                    <stop offset="1" stop-color="#6590D0" />
                </radialGradient>
            </defs>
        </svg>

        <div class="atropos-parent-el flex gap-8 max-w-screen-xl mx-auto my-16">
            <div class="max-w-xs shrink-0 w-full">
                <!-- scale container (required) -->
                <div class="atropos-scale">
                    <!-- rotate container (required) -->
                    <div class="atropos-rotate">
                        <!-- inner container (required) -->
                        <div class="atropos-inner" data-atropos-offset="-10">
                            <!-- put your custom content here -->
                            <div
                                class="border-2 border-dashed border-[#2D4C7E] rounded-lg h-full"
                            >
                                <div class="flex gap-4 px-8 pt-8">
                                    <p class="text-xl font-bold">💬 Chat</p>
                                </div>
                                <div class="flex flex-col px-8 pt-8 gap-8">
                                    {#each chatMessagesLive as { username, message }}
                                        <ChatMessage {username}>
                                            {message}
                                        </ChatMessage>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-8">
                <div class="atropos atropos-stream" data-atropos-offset="10">
                    <!-- scale container (required) -->
                    <div class="atropos-scale">
                        <!-- rotate container (required) -->
                        <div class="atropos-rotate">
                            <!-- inner container (required) -->
                            <div class="atropos-inner">
                                <!-- put your custom content here -->
                                <div
                                    class="p-4 border-2 border-dashed border-[#2D4C7E] rounded-lg"
                                >
                                    <img
                                        src="/images/hacker.png"
                                        class="rounded-xl"
                                        alt=""
                                        data-atropos-offset="-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="atropos atropos-title">
                    <!-- scale container (required) -->
                    <div class="atropos-scale">
                        <!-- rotate container (required) -->
                        <div class="atropos-rotate">
                            <!-- inner container (required) -->
                            <div class="atropos-inner">
                                <!-- put your custom content here -->
                                <div
                                    class="flex justify-between items-center p-4 border-2 border-dashed border-[#2D4C7E] rounded-lg"
                                >
                                    <div
                                        class="flex flex-col gap-2"
                                        data-atropos-offset="10"
                                    >
                                        <div class="flex">
                                            <p class="text-xl font-bold">​</p>
                                            <Typewriter mode="loop">
                                                <p class="text-xl font-bold">
                                                    Hooking up Supabase to the
                                                    MVP
                                                </p>
                                                <p class="text-xl font-bold">
                                                    Fixing the Deathstar
                                                </p>
                                                <p class="text-xl font-bold">
                                                    Launching my 100th SaaS
                                                </p>
                                                <p class="text-xl font-bold">
                                                    Retiring to Greece with a
                                                    yacht
                                                </p>
                                            </Typewriter>
                                        </div>
                                        <p
                                            class="text-lg font-medium text-slate-400"
                                        >
                                            Software and Game Development
                                        </p>
                                    </div>
                                    <div class="flex" data-atropos-offset="10">
                                        <ViewCount />
                                        <Typewriter
                                            mode="loopOnce"
                                            cursor={false}
                                            interval={"200"}
                                            unwriteInterval={"200"}
                                        >
                                            <p class="text-red-500 font-bold">
                                                27
                                            </p>
                                            <p class="text-red-500 font-bold">
                                                43
                                            </p>
                                            <p class="text-red-500 font-bold">
                                                59
                                            </p>
                                            <p class="text-red-500 font-bold">
                                                62
                                            </p>
                                            <p class="text-red-500 font-bold">
                                                75
                                            </p>
                                            <p class="text-red-500 font-bold">
                                                81
                                            </p>
                                        </Typewriter>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-w-xs shrink-0 w-full">
                <!-- scale container (required) -->
                <div class="atropos-scale">
                    <!-- rotate container (required) -->
                    <div class="atropos-rotate">
                        <!-- inner container (required) -->
                        <div class="atropos-inner" data-atropos-offset="-10">
                            <!-- put your custom content here -->
                            <div
                                class="border-2 border-dashed border-[#2D4C7E] rounded-lg h-full"
                            >
                                <div class="flex gap-4 px-8 pt-8">
                                    <p class="text-xl font-bold">🔔 Activity</p>
                                </div>
                                <div class="flex flex-col px-8 pt-8 gap-8">
                                    {#each activityMessagesLive as { username, type }}
                                        <Notification {type} {username} />
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Timeline Section -->
    <div class="flex flex-col gap-8 px-6 text-center">
        <div class="flex flex-col items-center gap-6">
            <StreamerBadge />
            <p class="heading">Hey, my name is Charlie</p>
        </div>
        <p class="sub-heading max-w-md self-center">
            Over 5 years ago, on a bit of a whim, I began streaming myself
            working on projects, live on Twitch.
        </p>
        <p class="sub-heading max-w-md self-center">
            Doing so changed my life, and I think it could change yours, too.
        </p>
        <TimelineSeperator class="self-center" />
        <div class="sub-heading max-w-md self-center">
            Before I started streaming, I was struggling to work on my projects
        </div>
        <div
            class="flex flex-col md:flex-row justify-center bg-transparent md:bg-transparent-blue md:w-fit items-center gap-4 p-4 rounded-2xl self-center"
        >
            <Sleepy />
            <p class="text-slate-200 text-2xl font-medium">
                I worked on my projects inconsistently
            </p>
        </div>
        <div
            class="flex flex-col md:flex-row justify-center bg-transparent md:bg-transparent-blue md:w-fit items-center gap-4 p-4 rounded-2xl self-center"
        >
            <Sleepy />
            <p class="text-slate-200 text-2xl font-medium">
                I was held back by my crippling perfectionimd
            </p>
        </div>
        <div
            class="flex flex-col md:flex-row justify-center bg-transparent md:bg-transparent-blue md:w-fit items-center gap-4 p-4 rounded-2xl self-center"
        >
            <Sleepy />
            <p class="text-slate-200 text-2xl font-medium">
                I struggled to finish my projects, and never shipped them
            </p>
        </div>
        <TimelineSeperator class="self-center" />
        <!-- 2018 Photo -->
        <div class="flex flex-col items-center gap-4">
            <div class="heading">2018</div>
            <div class="sub-heading max-w-md">
                I kicked off my first stream, with a green scarf tied to a
                washing line as the green screen
            </div>
            <div class="mt-4 overflow-hidden rounded-3xl max-w-md">
                <img src="/images/green-screen.jpg" alt="" />
            </div>
        </div>
        <TimelineSeperator class="self-center" />
        <div class="sub-heading max-w-md self-center">
            It wasn't long before my indie hacking journey radically changed
        </div>
        <div
            class="flex flex-col md:flex-row justify-center bg-transparent md:bg-transparent-blue md:w-fit items-center gap-4 p-4 rounded-2xl self-center"
        >
            <Sleepy />
            <p class="text-slate-200 text-2xl font-medium">
                I worked on my projects inconsistently
            </p>
        </div>
        <div
            class="flex flex-col md:flex-row justify-center bg-transparent md:bg-transparent-blue md:w-fit items-center gap-4 p-4 rounded-2xl self-center"
        >
            <Sleepy />
            <p class="text-slate-200 text-2xl font-medium">
                I was held back by my crippling perfectionimd
            </p>
        </div>
        <div
            class="flex flex-col md:flex-row justify-center bg-transparent md:bg-transparent-blue md:w-fit items-center gap-4 p-4 rounded-2xl self-center"
        >
            <Sleepy />
            <p class="text-slate-200 text-2xl font-medium">
                I struggled to finish my projects, and never shipped them
            </p>
        </div>
        <!-- 2023 Photo -->
        <div class="flex flex-col items-center gap-4">
            <div class="heading">2023</div>
            <div class="sub-heading max-w-md self-center">
                Today, I’m very lucky to be able to ship things alongside an
                active and highly supportive community
            </div>
            <div class="mt-4 overflow-hidden rounded-3xl max-w-md">
                <img src="/images/green-screen.jpg" alt="" />
            </div>
        </div>
    </div>
    <!-- Pricing Section -->
    <div class="flex flex-col justify-center gap-8 px-6 py-12 text-center">
        <p class="heading">Start your streaming journey</p>
        <p class="sub-heading max-w-md self-center">
            I’ll teach you everything you need to know in order to kick of your
            stream with a bang
        </p>
        {#if discountCheck}
            <div
                class="border-2 border-red-500 p-8 rounded-xl flex flex-col items-center gap-4"
            >
                <Heart />
                <p class="text-xl font-bold">
                    It looks like you came here from mdall Bets 👀
                </p>
                <p class="text-lg font-medium text-slate-300">
                    I’d love to have you on this course—take another 20% off
                    ($60)
                </p>
            </div>
        {/if}
        <div class="flex flex-col gap-8 items-center justify-center">
            <div
                class="flex flex-col md:flex-row md:gap-8 justify-center items-center"
            >
                <p class="font-glamour text-slate-300 text-7xl opacity-50">
                    $200
                </p>
                <div class="flex justify-center items-center relative">
                    <p class="text-green-300 font-glamour green-glow text-6xl">
                        $
                    </p>
                    <p class="text-green-300 font-glamour green-glow text-9xl">
                        100
                    </p>
                    <svg
                        class="absolute ml-8"
                        width="143"
                        height="51"
                        viewBox="0 0 143 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.80643 43.7738C7.10991 44.8112 2.81353 46.6004 2.02819 48.7498C1.35553 50.5907 12.9444 46.9591 12.9792 46.9475C41.0986 37.5365 68.4781 25.9145 96.4536 16.0731C109.167 11.6008 122.052 7.61281 134.89 3.51571C135.909 3.19034 138.966 1.78079 140.218 2.43823C142.311 3.53659 136.417 8.81396 136.104 9.21648"
                            stroke="#EA4445"
                            stroke-width="3"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
                <DiscountedPrice />
            </div>
            <p class="sub-heading max-w-md self-center">50% launch discount</p>
            <p class="sub-heading flex gap-2 items-center">
                +20% extra off <span><Heart /></span>
            </p>
            <a href="/" class="primary-button flex gap-2 items-center"
                >Sign me up <Confetti />
            </a>
        </div>
    </div>
    <!-- Course Details Section -->
    <section
        class="flex flex-col gap-16 px-6 md:grid md:grid-cols-3 self-center md:gap-8"
    >
        <!-- 1 -->
        <div
            class="flex flex-col gap-8 xl:p-12 xl:bg-transparent-blue rounded-2xl"
        >
            <div class="flex flex-col gap-4 md:flex-row">
                <div>
                    <svg
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M40 5.75H0V31.5833H40V5.75Z"
                            fill="url(#paint0_radial_27_4804)"
                        />
                        <path
                            d="M38.3334 7.4165H1.66669V29.9165H38.3334V7.4165Z"
                            fill="url(#paint1_linear_27_4804)"
                        />
                        <path
                            d="M3.79546 15.0434C4.14367 15.9301 4.29325 16.9028 4.44859 17.8391C4.54831 18.4401 4.65809 19.0395 4.74985 19.6418C4.85787 20.3508 4.94691 21.0642 5.07522 21.7699C5.12133 22.0235 5.1799 22.2928 5.2873 22.5291C5.30209 22.5616 5.26325 22.4617 5.24874 22.4291C5.10034 22.0952 5.02184 21.7275 4.93182 21.3674C4.56894 19.9159 4.06939 18.5019 3.687 17.0558C3.56598 16.5981 3.49179 16.1456 3.49179 15.6724C3.49179 15.4429 3.42867 15.1472 3.62193 14.9831C3.97101 14.6866 4.54892 14.6633 4.97399 14.6192C5.68482 14.5454 6.39748 14.4374 7.11415 14.4601C7.78672 14.4815 8.59961 14.8362 8.95305 15.4302C9.33131 16.0659 9.36092 17.0538 9.04222 17.7161C8.74264 18.3387 8.24073 18.5781 7.5805 18.6308C6.71454 18.6998 5.83406 18.6946 4.96676 18.6657"
                            stroke="white"
                            stroke-linecap="round"
                        />
                        <path
                            d="M10.3678 19.4468C9.47084 19.7397 9.21984 20.7491 9.24469 21.5942C9.25406 21.9128 9.36079 22.1987 9.60018 22.4088C10.2056 22.94 11.0988 22.8997 11.7078 22.4064C12.5049 21.7607 12.465 20.554 11.5475 20.0336C11.1026 19.7813 10.4627 19.6079 9.99905 19.8806"
                            stroke="white"
                            stroke-linecap="round"
                        />
                        <path
                            d="M16.6581 19.555C16.0228 19.3863 15.5354 19.6102 15.0795 20.0322C14.7362 20.3499 14.3135 20.7679 14.295 21.2686C14.2787 21.7081 14.328 21.998 14.665 22.3073C14.9717 22.5889 15.4213 22.6582 15.823 22.6327C16.6655 22.5792 17.2581 21.6935 16.8316 20.9432C16.7168 20.7411 16.6266 20.5228 16.5063 20.325C16.4857 20.2912 16.3761 20.1095 16.3761 20.237C16.3761 20.5507 16.4786 20.8081 16.5786 21.1047C16.7902 21.7325 16.9872 22.3686 17.1714 23.005C17.3959 23.7805 17.5602 24.5768 17.6197 25.3826C17.6601 25.9296 17.6104 26.3682 17.1016 26.6575C16.7443 26.8606 16.3614 27.0281 15.9977 27.2215C15.576 27.4458 15.0443 27.3863 14.5975 27.2721C13.6367 27.0266 13.2147 26.1602 13.1225 25.238"
                            stroke="white"
                            stroke-linecap="round"
                        />
                        <path
                            d="M21.1047 19.3164C20.2583 19.0343 19.0966 19.6371 19.067 20.5829C19.0529 21.0341 19.1277 21.3658 19.5249 21.6337C19.9307 21.9074 20.4853 21.9149 20.9384 21.7639C21.3655 21.6215 21.7482 21.3811 21.8085 20.8987C21.847 20.5904 21.8143 20.3402 21.6795 20.0648C21.6262 19.9557 21.5426 19.6778 21.4313 19.6129C21.3916 19.5897 21.4108 19.7427 21.4132 19.7599C21.4335 19.9058 21.5108 20.0373 21.5602 20.1744C21.7517 20.7052 21.8878 21.2537 22.0784 21.7868C22.2582 22.2896 22.4667 22.7845 22.6231 23.2955C22.7872 23.8318 22.9427 24.3668 23.1292 24.8958C23.2549 25.2524 23.3641 25.5972 23.3606 25.9803C23.3562 26.4582 22.9021 26.6334 22.5315 26.8335C22.2097 27.0073 21.8884 27.031 21.5337 27.0552C21.1506 27.0814 20.7506 27.0739 20.4371 26.8263C20.0867 26.5494 20.1937 25.9512 20.1937 25.5634"
                            stroke="white"
                            stroke-linecap="round"
                        />
                        <path
                            d="M24.2282 19.7723C24.1665 19.8076 24.2911 19.7966 24.315 19.7988C24.6356 19.828 24.9643 19.8466 25.2862 19.8326C25.5406 19.8215 25.8074 19.8022 26.0454 19.7024C26.1645 19.6525 26.2425 19.5513 26.2455 19.4204C26.2506 19.194 25.9961 19.0948 25.8634 18.9432C25.7145 18.773 25.5923 18.5789 25.3959 18.46C25.168 18.322 24.8495 18.2465 24.5873 18.2226C24.1047 18.1787 23.781 18.5155 23.4907 18.8661C23.2189 19.1943 23.2293 19.6978 23.2569 20.1001C23.3046 20.7942 23.6486 21.1407 24.2559 21.4485C24.8246 21.7367 25.2064 21.7776 25.802 21.5281C26.078 21.4124 26.3791 21.2236 26.6781 21.1738C26.8675 21.1422 27.0179 21.2057 27.1348 21.0304"
                            stroke="white"
                            stroke-linecap="round"
                        />
                        <path
                            d="M28.3061 18.7745C28.5682 19.2705 28.8184 19.7725 29.0882 20.2639C29.1331 20.3458 29.1832 20.427 29.2219 20.5121C29.233 20.5364 29.2762 20.5953 29.2508 20.5868C28.9238 20.4778 28.7435 19.8941 28.6242 19.6276C28.4669 19.2762 28.1703 18.7284 28.4627 18.3672C28.82 17.9259 29.4051 17.9261 29.9112 17.9936"
                            stroke="white"
                            stroke-linecap="round"
                        />
                        <path
                            d="M31.8851 20.3575C32.1575 20.714 32.6862 20.774 33.107 20.8227C33.3829 20.8546 33.6636 20.8117 33.9325 20.7492C34.1542 20.6976 34.4094 20.632 34.4217 20.3672C34.4466 19.832 33.7662 19.5907 33.3504 19.4296C32.9037 19.2565 32.3513 19.1972 31.9574 18.9115C31.6244 18.67 31.1139 18.2903 31.15 17.8305C31.1663 17.6224 31.3484 17.5106 31.538 17.4726C31.9609 17.3881 32.4567 17.4726 32.8829 17.4726"
                            stroke="white"
                            stroke-linecap="round"
                        />
                        <defs>
                            <radialGradient
                                id="paint0_radial_27_4804"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(20 18.6667) scale(22.9317 22.9317)"
                            >
                                <stop stop-color="white" />
                                <stop offset="0.014" stop-color="#FFFDF6" />
                                <stop offset="0.095" stop-color="#FFF2C6" />
                                <stop offset="0.179" stop-color="#FEE99C" />
                                <stop offset="0.264" stop-color="#FEE27B" />
                                <stop offset="0.35" stop-color="#FEDC60" />
                                <stop offset="0.438" stop-color="#FED84E" />
                                <stop offset="0.53" stop-color="#FED643" />
                                <stop offset="0.629" stop-color="#FED53F" />
                                <stop offset="0.742" stop-color="#FCD03A" />
                                <stop offset="0.882" stop-color="#F6C02C" />
                                <stop offset="0.999" stop-color="#EFAE1C" />
                            </radialGradient>
                            <linearGradient
                                id="paint1_linear_27_4804"
                                x1="19.9999"
                                y1="27.694"
                                x2="19.9999"
                                y2="3.24717"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.184" stop-color="#4A725D" />
                                <stop offset="0.391" stop-color="#406853" />
                                <stop offset="0.629" stop-color="#3D654F" />
                                <stop offset="0.733" stop-color="#39604A" />
                                <stop offset="0.862" stop-color="#2D503D" />
                                <stop offset="0.999" stop-color="#1B3828" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <p class="heading !text-3xl lg:!text-4xl">Course</p>
            </div>
            <ul class="flex flex-col gap-6">
                <li
                    class="flex gap-3 items-center text-slate-100 text-xl font-medium"
                >
                    <Tick />
                    Two 1 hour video classes
                </li>
                <li
                    class="flex gap-3 items-center text-slate-100 text-xl font-medium"
                >
                    <Tick />
                    Recordings available
                </li>
                <li
                    class="flex gap-3 items-center text-slate-100 text-xl font-medium"
                >
                    <Tick />
                    One on one strategy call
                </li>
            </ul>
        </div>
        <!-- 2 -->
        <div
            class="flex flex-col gap-8 xl:p-12 xl:bg-transparent-blue rounded-2xl"
        >
            <div class="flex flex-col gap-4 md:flex-row">
                <div>
                    <svg
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.58332 28.1992L3.74332 27.8C3.45332 27.6584 3.20999 27.6284 3.06832 27.715C2.97249 27.7759 2.91666 27.8992 2.91666 28.055V31.5167C2.91666 31.9967 3.19749 32.44 3.63166 32.6459L4.58332 33.1042V28.1992Z"
                            fill="#101030"
                        />
                        <path
                            d="M38.5992 29.305L27.3208 24.8608L5.82999 33.2458V34.1675L17.6583 39.7625C18.0992 39.9708 18.6092 39.9767 19.0542 39.7767C19.0542 39.7767 38.6692 30.9925 38.7142 30.9675C38.9767 30.8217 39.1408 30.605 39.1408 30.1183C39.1408 29.5308 38.5992 29.305 38.5992 29.305Z"
                            fill="url(#paint0_linear_27_4417)"
                        />
                        <path
                            d="M17.7983 34.4992L5.30832 28.5859C4.35832 28.1367 4.16666 28.3317 4.16666 28.9434V31.5726C4.16666 32.2301 4.09249 32.4067 4.71499 32.7109C4.78499 32.7451 18.3225 39.1709 18.3225 39.1709L18.3242 39.1634L18.3258 39.1626V34.5992C18.1242 34.5984 17.9375 34.5651 17.7983 34.4992Z"
                            fill="url(#paint1_linear_27_4417)"
                        />
                        <path
                            d="M17.7983 34.4992L5.65666 28.7484L5.30832 28.5859C4.35832 28.1367 4.16666 28.3317 4.16666 28.9434V31.5726C4.16666 32.2301 4.09249 32.4067 4.71499 32.7109C4.78499 32.7451 18.3225 39.1709 18.3225 39.1709L18.3242 39.1634L18.3258 39.1626V34.5992C18.1242 34.5984 17.9375 34.5651 17.7983 34.4992Z"
                            fill="url(#paint2_radial_27_4417)"
                        />
                        <path
                            d="M37.8908 28.1593C37.8908 26.9551 38.4033 26.0601 38.7375 25.6001C38.7225 25.6093 38.71 25.6218 38.695 25.6301C38.65 25.6551 19.055 34.4476 19.055 34.4476C18.7742 34.5734 18.4733 34.6101 18.2092 34.5901C17.9825 34.7918 17.5 35.3718 17.5 36.6851C17.5 38.4251 18.3333 39.1701 18.3333 39.1701L38.4417 30.1759C38.4367 30.1651 38.4325 30.1593 38.4275 30.1484C38.4275 30.1484 37.8908 29.5884 37.8908 28.1593Z"
                            fill="url(#paint3_linear_27_4417)"
                        />
                        <path
                            d="M37.8908 28.1593C37.8908 26.9551 38.4033 26.0601 38.7375 25.6001C38.7225 25.6093 38.71 25.6218 38.695 25.6301C38.65 25.6551 19.055 34.4476 19.055 34.4476C18.7742 34.5734 18.4725 34.6101 18.2092 34.5901C17.9817 34.7909 17.5 35.3709 17.5 36.6851C17.5 38.4251 18.3333 39.1701 18.3333 39.1701L38.4417 30.1759C38.4367 30.1651 38.4325 30.1593 38.4275 30.1484C38.4275 30.1484 37.8908 29.5884 37.8908 28.1593Z"
                            fill="url(#paint4_radial_27_4417)"
                        />
                        <path
                            d="M38.5992 24.3935L26.37 19.8901L5.41666 28.1376V28.636L17.7983 34.4993C18.1 34.6426 18.61 34.6476 19.055 34.4485L38.8725 25.5501C38.8725 25.1751 38.8725 24.8443 38.8717 24.7826C38.8708 24.621 38.7792 24.4601 38.5992 24.3935Z"
                            fill="#1E88E5"
                        />
                        <path
                            d="M36.2142 25.1343C36.1742 25.1568 20.365 32.2368 17.1375 33.6818C17.1375 33.6818 17.8292 33.9927 17.9167 34.0177L19.5075 33.3052C36.4608 25.7118 36.4783 25.7018 36.5175 25.6802C37.0208 25.4002 37.2658 24.9435 37.2658 24.2843C37.2658 24.136 37.24 24.0035 37.205 23.8793L36.1017 23.4727C36.1175 23.4793 36.6408 23.706 36.6408 24.2843C36.6408 24.7718 36.4767 24.9885 36.2142 25.1343Z"
                            fill="#1E88E5"
                        />
                        <path
                            d="M36.2142 25.134C36.1742 25.1565 20.365 32.2365 17.1375 33.6815C17.1375 33.6815 17.7658 33.9648 17.8433 33.9865L19.4833 33.2523C36.12 25.8006 36.4517 25.6506 36.4892 25.6298C36.9733 25.359 37.2083 24.9231 37.2083 24.2848C37.2083 24.1181 37.1708 23.9765 37.1225 23.849L36.1017 23.4731C36.1175 23.4798 36.6408 23.7065 36.6408 24.2848C36.6408 24.7715 36.4767 24.9881 36.2142 25.134Z"
                            fill="#1D83DD"
                        />
                        <path
                            d="M36.2142 25.134C36.1742 25.1565 20.365 32.2365 17.1375 33.6815C17.1375 33.6815 17.7033 33.9365 17.7708 33.9556L19.46 33.199C35.7792 25.8898 36.4258 25.5981 36.4608 25.579C36.9267 25.3181 37.15 24.9023 37.15 24.2848C37.15 24.0998 37.1 23.9481 37.04 23.819L36.1008 23.4731C36.1167 23.4798 36.64 23.7065 36.64 24.2848C36.6408 24.7715 36.4767 24.9881 36.2142 25.134Z"
                            fill="#1C7ED3"
                        />
                        <path
                            d="M36.2142 25.1343C36.1742 25.1568 20.365 32.2368 17.1375 33.6818C17.1375 33.6818 17.64 33.9085 17.6983 33.9252L19.4367 33.1468C35.4392 25.9793 36.4 25.5477 36.4333 25.5285C36.8808 25.2785 37.0925 24.881 37.0925 24.2843C37.0925 24.081 37.03 23.9193 36.9583 23.7885L36.1017 23.4727C36.1175 23.4793 36.6408 23.706 36.6408 24.2843C36.6408 24.7718 36.4767 24.9885 36.2142 25.1343Z"
                            fill="#1A77C9"
                        />
                        <path
                            d="M36.2142 25.1343C36.1742 25.1568 20.365 32.2368 17.1375 33.6818C17.1375 33.6818 17.5767 33.881 17.6258 33.8943L19.4125 33.0935C35.0975 26.0685 36.3725 25.4952 36.405 25.4777C36.8342 25.2377 37.035 24.8602 37.035 24.2843C37.035 24.0627 36.96 23.8918 36.8767 23.7577L36.1025 23.4727C36.1183 23.4793 36.6417 23.706 36.6417 24.2843C36.6408 24.7718 36.4767 24.9885 36.2142 25.1343Z"
                            fill="#1971BD"
                        />
                        <path
                            d="M36.2142 25.134C36.1742 25.1565 20.365 32.2365 17.1375 33.6815C17.1375 33.6815 17.5142 33.8523 17.5525 33.8631L19.3883 33.0406C34.7567 26.1573 36.3458 25.444 36.3767 25.4273C36.7875 25.1973 36.9767 24.8398 36.9767 24.2848C36.9767 24.0448 36.8892 23.864 36.7933 23.7281L36.1017 23.4731C36.1175 23.4798 36.6408 23.7065 36.6408 24.2848C36.6408 24.7715 36.4767 24.9881 36.2142 25.134Z"
                            fill="#1769B1"
                        />
                        <path
                            d="M36.2142 25.134C36.1742 25.1565 20.365 32.2365 17.1375 33.6815C17.1375 33.6815 17.4508 33.824 17.48 33.8324L19.365 32.9874C34.4158 26.2465 36.32 25.3924 36.3483 25.3757C36.7408 25.1565 36.9183 24.8174 36.9183 24.2832C36.9183 24.0249 36.8183 23.8349 36.7108 23.6957L36.1008 23.4707C36.1167 23.4774 36.64 23.704 36.64 24.2824C36.6408 24.7715 36.4767 24.9882 36.2142 25.134Z"
                            fill="#1560A2"
                        />
                        <path
                            d="M36.2142 25.1343C36.1742 25.1568 20.365 32.2368 17.1375 33.6818C17.1375 33.6818 17.3875 33.7968 17.4075 33.8018L19.3417 32.9352C34.0758 26.336 36.2942 25.341 36.3208 25.326C36.695 25.1168 36.8617 24.7977 36.8617 24.2843C36.8617 24.0077 36.7492 23.8077 36.63 23.6668L36.1025 23.4727C36.1183 23.4793 36.6417 23.706 36.6417 24.2843C36.6408 24.7718 36.4767 24.9885 36.2142 25.1343Z"
                            fill="#145894"
                        />
                        <path
                            d="M36.2142 25.1343C36.1742 25.1568 20.365 32.2368 17.1375 33.6818C17.1375 33.6818 17.325 33.7685 17.3342 33.771L19.3175 32.8818C33.7342 26.4252 36.2675 25.2893 36.2925 25.2752C36.6475 25.0768 36.8033 24.7768 36.8033 24.2843C36.8033 23.9893 36.6783 23.7793 36.5475 23.6368L36.1025 23.4727C36.1183 23.4793 36.6417 23.706 36.6417 24.2843C36.6408 24.7718 36.4767 24.9885 36.2142 25.1343Z"
                            fill="#114E83"
                        />
                        <path
                            d="M36.1017 23.4731C36.1175 23.4798 36.6408 23.7065 36.6408 24.2848C36.6408 24.7715 36.4767 24.9881 36.2142 25.134C36.1742 25.1565 20.365 32.2365 17.1375 33.6815L17.2617 33.7398L19.2942 32.829C33.3942 26.514 36.2408 25.2373 36.2642 25.2248C36.6017 25.0373 36.745 24.7556 36.745 24.2848C36.745 23.9715 36.6075 23.7523 36.4642 23.6065L36.1017 23.4731Z"
                            fill="#0F4472"
                        />
                        <path
                            d="M26.515 19.945C26.4942 19.9375 26.4425 19.9167 26.37 19.8909C26.37 19.8909 25.7442 20.075 25.6042 19.9875C25.3067 19.8009 25.505 19.5734 25.505 19.5734C24.9308 19.3625 24.3283 19.1409 24.3283 19.1409C23.9533 18.9992 23.5367 18.9992 23.1617 19.1492L3.45 26.7425C3.12667 26.865 2.5 27.1742 2.5 28.0742L2.91667 28.2534V28.0542C2.91667 27.8984 2.97167 27.775 3.06833 27.715C3.20833 27.6284 3.45333 27.6584 3.74333 27.8L4.4025 28.1134C4.42583 28.125 4.45333 28.1609 4.49583 28.2184C4.56417 28.3117 4.6675 28.4534 4.84917 28.5242C4.98583 28.5792 5.11083 28.5567 5.20167 28.5384L6.25 29.0292V28.5334L27.32 20.2409C27.32 20.2409 26.86 20.0742 26.515 19.945Z"
                            fill="#1976D2"
                        />
                        <path
                            d="M4.88749 28.3441L26.37 19.8907C26.18 19.8307 26.055 19.9474 25.9367 19.9249C25.8208 19.8716 25.77 19.6632 25.5058 19.5732L4.04749 27.9449L4.88749 28.3441Z"
                            fill="#1976D2"
                        />
                        <path
                            d="M4.88332 28.3422L26.3642 19.8906C26.1775 19.8322 26.0533 19.9472 25.9367 19.9247C25.8233 19.8731 25.7725 19.6689 25.515 19.5806L4.06082 27.9506L4.88332 28.3422Z"
                            fill="#1976D1"
                        />
                        <path
                            d="M4.87999 28.3399L26.3592 19.8899C26.175 19.8332 26.0533 19.9457 25.9375 19.9241C25.8267 19.8732 25.7767 19.6741 25.525 19.5874L4.07416 27.9574L4.87999 28.3399Z"
                            fill="#1975D0"
                        />
                        <path
                            d="M4.87583 28.3382L26.3525 19.8907C26.1717 19.8365 26.0508 19.9465 25.9367 19.9249C25.8275 19.8749 25.7792 19.6807 25.5325 19.5957L4.08749 27.9632L4.87583 28.3382Z"
                            fill="#1975CF"
                        />
                        <path
                            d="M4.87166 28.3364L26.3467 19.8905C26.1683 19.838 26.0492 19.9455 25.9367 19.9247C25.83 19.8755 25.7825 19.6855 25.5417 19.603L4.10083 27.9697L4.87166 28.3364Z"
                            fill="#1974CE"
                        />
                        <path
                            d="M4.8675 28.335L26.3408 19.8908C26.1658 19.84 26.0483 19.9458 25.9367 19.925C25.8325 19.8775 25.785 19.6917 25.5508 19.6108L4.11417 27.9767L4.8675 28.335Z"
                            fill="#1974CD"
                        />
                        <path
                            d="M4.86414 28.3323L26.335 19.8907C26.1625 19.8423 26.0466 19.9457 25.9366 19.9248C25.835 19.8782 25.7883 19.6973 25.56 19.6182L4.12747 27.9823L4.86414 28.3323Z"
                            fill="#1974CC"
                        />
                        <path
                            d="M4.85998 28.331L26.3291 19.891C26.1591 19.8443 26.045 19.9451 25.9367 19.9251C25.8375 19.8793 25.7917 19.7035 25.5692 19.626L4.13998 27.9893L4.85998 28.331Z"
                            fill="#1973CB"
                        />
                        <path
                            d="M4.85582 28.329L26.3233 19.8907C26.1567 19.8457 26.0442 19.9448 25.9367 19.924C25.8392 19.8798 25.7942 19.7082 25.5783 19.6323L4.15332 27.9948L4.85582 28.329Z"
                            fill="#1973CA"
                        />
                        <path
                            d="M4.85166 28.3268L26.3175 19.891C26.1533 19.8485 26.0425 19.9443 25.9367 19.9243C25.8417 19.881 25.7975 19.7143 25.5875 19.6401L4.16666 28.0018L4.85166 28.3268Z"
                            fill="#1972C9"
                        />
                        <path
                            d="M4.84833 28.325L26.3117 19.8908C26.1508 19.85 26.0408 19.9441 25.9367 19.9241C25.8442 19.8816 25.8008 19.72 25.5967 19.6475L4.17999 28.0075L4.84833 28.325Z"
                            fill="#1972C8"
                        />
                        <path
                            d="M4.84416 28.3231L26.3058 19.8906C26.1475 19.8515 26.04 19.944 25.9367 19.924C25.8467 19.8823 25.8033 19.7256 25.605 19.6548L4.19333 28.014L4.84416 28.3231Z"
                            fill="#1972C7"
                        />
                        <path
                            d="M4.84 28.3218L26.3 19.8909C26.145 19.8543 26.0383 19.9434 25.9367 19.9243C25.8483 19.8843 25.8067 19.7318 25.6142 19.6626L4.20667 28.0201L4.84 28.3218Z"
                            fill="#1971C6"
                        />
                        <path
                            d="M4.8358 28.3191L26.2933 19.8908C26.1408 19.8558 26.0358 19.9433 25.9358 19.9241C25.85 19.8849 25.8091 19.7374 25.6225 19.6699L4.21997 28.0266L4.8358 28.3191Z"
                            fill="#1971C5"
                        />
                        <path
                            d="M4.83247 28.3174L26.2883 19.8916C26.1391 19.8582 26.0358 19.9432 25.9366 19.9249C25.8533 19.8866 25.8125 19.7432 25.6325 19.6782L4.23331 28.0324L4.83247 28.3174Z"
                            fill="#1971C4"
                        />
                        <path
                            d="M4.82832 28.3155L26.2825 19.8914C26.1358 19.8605 26.0342 19.943 25.9367 19.9247C25.8558 19.8872 25.8158 19.7489 25.6417 19.6855L4.24582 28.0389L4.82832 28.3155Z"
                            fill="#1970C3"
                        />
                        <path
                            d="M4.82416 28.3142L26.2767 19.8917C26.1333 19.8625 26.0325 19.9434 25.9367 19.925C25.8583 19.8892 25.8192 19.755 25.6508 19.6934L4.25916 28.045L4.82416 28.3142Z"
                            fill="#1970C2"
                        />
                        <path
                            d="M4.81999 28.3114L26.27 19.8905C26.1292 19.863 26.0308 19.9414 25.9358 19.9239C25.8592 19.8889 25.8208 19.7597 25.6592 19.6997L4.27249 28.0514L4.81999 28.3114Z"
                            fill="#196FC1"
                        />
                        <path
                            d="M4.81666 28.3097L26.265 19.8913C26.1275 19.8663 26.03 19.9422 25.9367 19.9247C25.8625 19.8905 25.825 19.7663 25.6683 19.708L4.28583 28.058L4.81666 28.3097Z"
                            fill="#196FC0"
                        />
                        <path
                            d="M4.8125 28.3083L26.2592 19.8917C26.1242 19.8683 26.0283 19.9417 25.9367 19.925C25.865 19.8925 25.8283 19.7725 25.6775 19.7158L4.29916 28.0642L4.8125 28.3083Z"
                            fill="#196FBF"
                        />
                        <path
                            d="M4.80833 28.3065L26.2533 19.8915C26.1217 19.8698 26.0267 19.9415 25.9367 19.9248C25.8675 19.8931 25.8308 19.7781 25.6867 19.7231L4.3125 28.0706L4.80833 28.3065Z"
                            fill="#196EBE"
                        />
                        <path
                            d="M4.80414 28.3043L26.2475 19.8918C26.1183 19.8718 26.0258 19.9418 25.9366 19.9251C25.8691 19.8943 25.8341 19.7843 25.6958 19.731L4.32581 28.0768L4.80414 28.3043Z"
                            fill="#196EBE"
                        />
                        <path
                            d="M4.80082 28.3023L26.2417 19.8915C26.1158 19.874 26.0242 19.9406 25.9367 19.924C25.8717 19.894 25.8375 19.789 25.705 19.7373L4.33832 28.0831L4.80082 28.3023Z"
                            fill="#196DBD"
                        />
                        <path
                            d="M4.79665 28.301L26.235 19.8918C26.1117 19.8759 26.0217 19.941 25.9358 19.9243C25.8733 19.896 25.8392 19.7943 25.7133 19.7451L4.35165 28.0893L4.79665 28.301Z"
                            fill="#196DBC"
                        />
                        <path
                            d="M4.79249 28.2991L26.2292 19.8916C26.1092 19.8774 26.0208 19.9408 25.9358 19.9241C25.8758 19.8966 25.8425 19.7999 25.7225 19.7524L4.36499 28.0958L4.79249 28.2991Z"
                            fill="#196DBB"
                        />
                        <path
                            d="M4.78833 28.2964L26.2233 19.8914C26.1058 19.8798 26.0192 19.9398 25.9358 19.9239C25.8783 19.8973 25.8458 19.8056 25.7317 19.7598L4.37833 28.1014L4.78833 28.2964Z"
                            fill="#196CBA"
                        />
                        <path
                            d="M4.785 28.2951L26.2183 19.8917C26.1042 19.8817 26.0183 19.9401 25.9375 19.9242C25.8817 19.8984 25.85 19.8117 25.7417 19.7676L4.39166 28.1084L4.785 28.2951Z"
                            fill="#196CB9"
                        />
                        <path
                            d="M4.78083 28.2932L26.2117 19.8916C26.1 19.8832 26.0167 19.9391 25.9367 19.9241C25.8833 19.8999 25.8525 19.8174 25.75 19.7749L4.405 28.1141L4.78083 28.2932Z"
                            fill="#196BB8"
                        />
                        <path
                            d="M4.77664 28.2915L26.2058 19.8924C26.0966 19.8865 26.015 19.9399 25.9366 19.9249C25.8858 19.9015 25.8558 19.824 25.7591 19.7832L4.4183 28.1207L4.77664 28.2915Z"
                            fill="#196BB7"
                        />
                        <path
                            d="M4.77248 28.2889L26.2 19.8922C26.0942 19.888 26.0133 19.9397 25.9367 19.9247C25.8883 19.9022 25.8583 19.8297 25.7683 19.7905L4.43082 28.1272L4.77248 28.2889Z"
                            fill="#196BB6"
                        />
                        <path
                            d="M4.76915 28.2875L26.195 19.8925C26.0917 19.89 26.0133 19.9392 25.9375 19.925C25.8908 19.9042 25.8625 19.8358 25.7783 19.7983L4.44415 28.1333L4.76915 28.2875Z"
                            fill="#196AB5"
                        />
                        <path
                            d="M4.76499 28.2857L26.1883 19.8923C26.0883 19.8923 26.0108 19.939 25.9367 19.9248C25.8925 19.9048 25.865 19.8415 25.7867 19.8057L4.45749 28.1398L4.76499 28.2857Z"
                            fill="#196AB4"
                        />
                        <path
                            d="M4.76082 28.2843L26.1825 19.8926C26.085 19.8943 26.0091 19.9385 25.9366 19.9251C25.895 19.906 25.8675 19.8476 25.7958 19.8135L4.47165 28.1468L4.76082 28.2843Z"
                            fill="#196AB3"
                        />
                        <path
                            d="M4.75666 28.2816L26.1767 19.8925C26.0825 19.8958 26.0083 19.9383 25.9367 19.925C25.8975 19.9066 25.8708 19.8525 25.805 19.8208L4.48416 28.1525L4.75666 28.2816Z"
                            fill="#1969B2"
                        />
                        <path
                            d="M4.75333 28.2798L26.1708 19.8923C26.0792 19.8981 26.0067 19.9381 25.9367 19.9248C25.8992 19.9081 25.8742 19.8581 25.8133 19.8281L4.4975 28.1581L4.75333 28.2798Z"
                            fill="#1969B1"
                        />
                        <path
                            d="M4.74917 28.2784L26.165 19.8926C26.0767 19.9001 26.005 19.9376 25.9367 19.9251C25.9017 19.9093 25.8767 19.8643 25.8225 19.8359L4.51083 28.1651L4.74917 28.2784Z"
                            fill="#1968B0"
                        />
                        <path
                            d="M4.74498 28.2766L26.1591 19.8933C26.0733 19.9024 26.0041 19.9383 25.9366 19.9249C25.9042 19.9099 25.88 19.8699 25.8316 19.8433L4.52332 28.1716L4.74498 28.2766Z"
                            fill="#1968AF"
                        />
                        <path
                            d="M4.74082 28.2743L26.1533 19.8926C26.0708 19.9043 26.0025 19.9368 25.9367 19.9243C25.9067 19.9101 25.8833 19.8751 25.8408 19.8501L4.53665 28.1776L4.74082 28.2743Z"
                            fill="#1968AE"
                        />
                        <path
                            d="M4.73749 28.2724L26.1475 19.8924C26.0675 19.9058 26.0008 19.9366 25.9367 19.9241C25.9092 19.9116 25.8858 19.8808 25.85 19.8574L4.54999 28.1833L4.73749 28.2724Z"
                            fill="#1967AD"
                        />
                        <path
                            d="M4.73332 28.2707L26.1417 19.8932C26.065 19.9082 26 19.9374 25.9367 19.9249C25.9108 19.9132 25.8892 19.8874 25.8592 19.8657L4.56332 28.1899L4.73332 28.2707Z"
                            fill="#1967AC"
                        />
                        <path
                            d="M4.72916 28.2689L26.1358 19.893C26.0617 19.9097 25.9983 19.9364 25.9367 19.9247C25.9133 19.9139 25.8925 19.893 25.8683 19.873L4.57666 28.1964L4.72916 28.2689Z"
                            fill="#1966AB"
                        />
                        <path
                            d="M4.725 28.2666L26.1292 19.8924C26.0583 19.9116 25.9958 19.9357 25.9358 19.9241C25.915 19.9149 25.895 19.8982 25.8767 19.8799L4.59 28.2024L4.725 28.2666Z"
                            fill="#1966AA"
                        />
                        <path
                            d="M38.5992 24.3936C38.9492 24.5227 38.9658 25.0119 38.6258 25.1644L19.0542 33.9436C18.6092 34.1427 18.0992 34.1377 17.6592 33.9286L5.41666 28.1377L5.41749 29.0511L17.7983 34.9152C18.1 35.0586 18.61 35.0636 19.055 34.8644C19.055 34.8644 38.65 26.0719 38.695 26.0469C38.9575 25.9011 39.1367 25.6844 39.1367 25.1977C39.1367 24.5477 38.5992 24.3936 38.5992 24.3936Z"
                            fill="url(#paint5_linear_27_4417)"
                        />
                        <path
                            d="M38.695 26.0465C38.9575 25.9007 39.1367 25.684 39.1367 25.1974C39.1367 24.5557 38.6158 24.3982 38.6017 24.394V24.3949C38.9492 24.5257 38.965 25.0115 38.6258 25.164L19.2525 33.854L19.0925 33.9432C18.865 34.0457 18.62 34.0924 18.3758 34.0865C18.1308 34.0874 17.8858 34.0357 17.6592 33.9282L5.45499 28.1557L5.45582 29.0515L17.8367 34.9157C18.1383 35.059 18.6483 35.064 19.0925 34.8649C19.0925 34.8649 38.3892 26.2065 38.7183 26.0532C38.7042 26.049 38.695 26.0465 38.695 26.0465Z"
                            fill="url(#paint6_linear_27_4417)"
                        />
                        <path
                            d="M3.7675 28.279L4.615 28.6773C4.8075 28.7915 4.86 28.9965 5.00417 29.0531C5.065 29.0773 5.2525 28.989 5.4025 29.0473L6.25 29.4465V28.5331L5.4175 28.1348C5.265 28.0631 5.06583 28.1623 5.00333 28.1373C4.85 28.0773 4.80667 27.844 4.58167 27.7365L4.58417 27.7356L3.92083 27.4223C3.03 26.9856 2.5 27.4431 2.5 28.0548V31.5165C2.5 32.1606 2.87083 32.7473 3.45333 33.0223L4.5925 33.5706C4.81417 33.6706 5.0175 33.5648 5.15833 33.6448C5.21667 33.6781 5.265 33.8915 5.415 33.9665L6.25 34.369V33.4423L5.4175 33.0423C5.26583 32.969 5.2175 32.7523 5.15833 32.719C5.015 32.6381 4.80833 32.749 4.58417 32.6423L3.81 32.2706C3.51917 32.1323 3.33333 31.839 3.33333 31.5173V28.4848C3.33333 28.3315 3.43 28.1198 3.7675 28.279Z"
                            fill="#1966AA"
                        />
                        <path
                            d="M2.08332 22.3657L1.24332 21.9666C0.953323 21.8249 0.70999 21.7949 0.568323 21.8816C0.47249 21.9424 0.416656 22.0657 0.416656 22.2216V25.6832C0.416656 26.1632 0.69749 26.6066 1.13166 26.8124L2.08332 27.2707V22.3657Z"
                            fill="#301010"
                        />
                        <path
                            d="M36.0992 23.4715L24.8208 19.0273L3.32999 27.4123V28.334L15.1583 33.929C15.5992 34.1373 16.1092 34.1432 16.5542 33.9432C16.5542 33.9432 36.1692 25.159 36.2142 25.134C36.4767 24.9882 36.6408 24.7715 36.6408 24.2848C36.6408 23.6973 36.0992 23.4715 36.0992 23.4715Z"
                            fill="url(#paint7_linear_27_4417)"
                        />
                        <path
                            d="M15.2983 28.6657L2.80832 22.7524C1.85832 22.3032 1.66666 22.4982 1.66666 23.1099V25.7391C1.66666 26.3966 1.59249 26.5732 2.21499 26.8774C2.28499 26.9116 15.8225 33.3374 15.8225 33.3374L15.8242 33.3299L15.8258 33.3291V28.7657C15.6242 28.7649 15.4375 28.7316 15.2983 28.6657Z"
                            fill="url(#paint8_linear_27_4417)"
                        />
                        <path
                            d="M15.2983 28.6657L3.15666 22.9149L2.80832 22.7524C1.85832 22.3032 1.66666 22.4982 1.66666 23.1099V25.7391C1.66666 26.3966 1.59249 26.5732 2.21499 26.8774C2.28499 26.9116 15.8225 33.3374 15.8225 33.3374L15.8242 33.3299L15.8258 33.3291V28.7657C15.6242 28.7649 15.4375 28.7316 15.2983 28.6657Z"
                            fill="url(#paint9_radial_27_4417)"
                        />
                        <path
                            d="M35.3908 22.3258C35.3908 21.1216 35.9033 20.2266 36.2375 19.7666C36.2225 19.7758 36.21 19.7883 36.195 19.7966C36.15 19.8216 16.555 28.6141 16.555 28.6141C16.2742 28.7399 15.9733 28.7766 15.7092 28.7566C15.4825 28.9583 15 29.5383 15 30.8516C15 32.5916 15.8333 33.3366 15.8333 33.3366L35.9417 24.3424C35.9367 24.3316 35.9325 24.3258 35.9275 24.3149C35.9275 24.3149 35.3908 23.7549 35.3908 22.3258Z"
                            fill="url(#paint10_linear_27_4417)"
                        />
                        <path
                            d="M35.3908 22.3258C35.3908 21.1216 35.9033 20.2266 36.2375 19.7666C36.2225 19.7758 36.21 19.7883 36.195 19.7966C36.15 19.8216 16.555 28.6141 16.555 28.6141C16.2742 28.7399 15.9725 28.7766 15.7092 28.7566C15.4817 28.9574 15 29.5374 15 30.8516C15 32.5916 15.8333 33.3366 15.8333 33.3366L35.9417 24.3424C35.9367 24.3316 35.9325 24.3258 35.9275 24.3149C35.9275 24.3149 35.3908 23.7549 35.3908 22.3258Z"
                            fill="url(#paint11_radial_27_4417)"
                        />
                        <path
                            d="M36.0992 18.56L23.87 14.0566L2.91666 22.3041V22.8025L15.2983 28.6658C15.6 28.8091 16.11 28.8141 16.555 28.615L36.3725 19.7166C36.3725 19.3416 36.3725 19.0108 36.3717 18.9491C36.3708 18.7875 36.2792 18.6266 36.0992 18.56Z"
                            fill="#FFAB31"
                        />
                        <path
                            d="M24.015 14.1115C23.9942 14.104 23.9425 14.0832 23.87 14.0574C23.87 14.0574 23.2442 14.2415 23.1042 14.154C22.8067 13.9674 23.005 13.7399 23.005 13.7399C22.4308 13.529 21.8283 13.3074 21.8283 13.3074C21.4533 13.1657 21.0367 13.1657 20.6617 13.3157L0.95 20.909C0.626667 21.0315 0 21.3407 0 22.2407L0.416667 22.4199V22.2207C0.416667 22.0649 0.471667 21.9415 0.568333 21.8815C0.708333 21.7949 0.953333 21.8249 1.24333 21.9665L1.9025 22.2799C1.92583 22.2915 1.95333 22.3274 1.99583 22.3849C2.06417 22.4782 2.1675 22.6199 2.34917 22.6907C2.48583 22.7457 2.61083 22.7232 2.70167 22.7049L3.75 23.1957V22.6999L24.82 14.4074C24.82 14.4074 24.36 14.2407 24.015 14.1115Z"
                            fill="#FB8C00"
                        />
                        <path
                            d="M2.38749 22.5106L23.87 14.0572C23.68 13.9972 23.555 14.1139 23.4367 14.0914C23.3208 14.0381 23.27 13.8297 23.0058 13.7397L1.54749 22.1114L2.38749 22.5106Z"
                            fill="#FB8C00"
                        />
                        <path
                            d="M2.38415 22.5087L23.865 14.0571C23.6775 13.9987 23.5542 14.1137 23.4367 14.0912C23.3233 14.0396 23.2725 13.8346 23.0142 13.7471L1.56082 22.1171L2.38415 22.5087Z"
                            fill="#FB8B01"
                        />
                        <path
                            d="M2.38 22.5063L23.8592 14.0563C23.675 13.9996 23.5525 14.1121 23.4367 14.0904C23.325 14.0396 23.2758 13.8396 23.0233 13.7529L1.57333 22.1229L2.38 22.5063Z"
                            fill="#FA8A01"
                        />
                        <path
                            d="M2.37582 22.5049L23.8533 14.0566C23.6716 14.0016 23.5508 14.1124 23.4366 14.0907C23.3275 14.0407 23.2783 13.8457 23.0316 13.7607L1.58582 22.1291L2.37582 22.5049Z"
                            fill="#FA8902"
                        />
                        <path
                            d="M2.37249 22.5031L23.8475 14.0572C23.6683 14.0047 23.5492 14.1122 23.4358 14.0914C23.3292 14.0422 23.2808 13.8514 23.0392 13.7681L1.59833 22.1356L2.37249 22.5031Z"
                            fill="#F98802"
                        />
                        <path
                            d="M2.36831 22.5012L23.8416 14.0571C23.6658 14.0062 23.5475 14.1121 23.4358 14.0912C23.3308 14.0429 23.2833 13.8571 23.0483 13.7754L1.61081 22.1412L2.36831 22.5012Z"
                            fill="#F98703"
                        />
                        <path
                            d="M2.36499 22.4999L23.8367 14.0574C23.6633 14.0082 23.5475 14.1124 23.4367 14.0915C23.3342 14.0449 23.2875 13.8624 23.0575 13.7832L1.62332 22.1474L2.36499 22.4999Z"
                            fill="#F88604"
                        />
                        <path
                            d="M2.36083 22.4979L23.8308 14.0571C23.66 14.0096 23.5458 14.1112 23.4367 14.0912C23.3367 14.0454 23.29 13.8679 23.0658 13.7896L1.63583 22.1529L2.36083 22.4979Z"
                            fill="#F88504"
                        />
                        <path
                            d="M2.35748 22.4965L23.8258 14.0582C23.6583 14.0132 23.545 14.1124 23.4366 14.0915C23.3383 14.0465 23.2933 13.8732 23.075 13.7974L1.64832 22.159L2.35748 22.4965Z"
                            fill="#F88405"
                        />
                        <path
                            d="M2.35332 22.4941L23.82 14.0574C23.655 14.0141 23.5433 14.1116 23.4367 14.0907C23.3408 14.0466 23.2958 13.8782 23.0833 13.8032L1.66165 22.1657L2.35332 22.4941Z"
                            fill="#F78305"
                        />
                        <path
                            d="M2.35 22.4922L23.8142 14.0572C23.6517 14.0155 23.5417 14.1105 23.4367 14.0905C23.3433 14.0472 23.2992 13.8839 23.0917 13.8105L1.67416 22.1714L2.35 22.4922Z"
                            fill="#F78206"
                        />
                        <path
                            d="M2.34581 22.4904L23.8083 14.057C23.6491 14.017 23.54 14.1104 23.4358 14.0904C23.3441 14.0487 23.3008 13.8887 23.1 13.8179L1.68665 22.177L2.34581 22.4904Z"
                            fill="#F68107"
                        />
                        <path
                            d="M2.34249 22.4889L23.8033 14.0572C23.6467 14.0189 23.5392 14.1097 23.4367 14.0905C23.3475 14.0497 23.305 13.8947 23.1092 13.8247L1.69916 22.183L2.34249 22.4889Z"
                            fill="#F68007"
                        />
                        <path
                            d="M2.33831 22.4872L23.7975 14.058C23.6433 14.0222 23.5375 14.1105 23.4366 14.0913C23.35 14.0513 23.3075 13.9005 23.1183 13.833L1.71164 22.1888L2.33831 22.4872Z"
                            fill="#F57F08"
                        />
                        <path
                            d="M2.33498 22.4857L23.7917 14.0582C23.6408 14.024 23.5358 14.1107 23.4367 14.0915C23.3517 14.0523 23.3108 13.9065 23.1267 13.8398L1.72415 22.1957L2.33498 22.4857Z"
                            fill="#F57E08"
                        />
                        <path
                            d="M2.33083 22.4838L23.7867 14.058C23.6383 14.0255 23.535 14.1097 23.4367 14.0913C23.3542 14.0538 23.3133 13.9113 23.135 13.8472L1.73666 22.2013L2.33083 22.4838Z"
                            fill="#F57D09"
                        />
                        <path
                            d="M2.32748 22.4815L23.7808 14.0582C23.635 14.0273 23.5333 14.1098 23.4366 14.0915C23.3558 14.0548 23.3166 13.9173 23.1441 13.854L1.74915 22.2073L2.32748 22.4815Z"
                            fill="#F47D09"
                        />
                        <path
                            d="M2.32332 22.4797L23.775 14.058C23.6316 14.0288 23.5316 14.1097 23.4366 14.0913C23.3583 14.0555 23.3191 13.923 23.1525 13.8613L1.76248 22.213L2.32332 22.4797Z"
                            fill="#F47C0A"
                        />
                        <path
                            d="M2.31999 22.4783L23.77 14.0583C23.63 14.0316 23.5308 14.1091 23.4367 14.0916C23.3608 14.0566 23.3225 13.9283 23.1608 13.8691L1.77499 22.2191L2.31999 22.4783Z"
                            fill="#F37B0B"
                        />
                        <path
                            d="M2.31581 22.4763L23.7641 14.058C23.6266 14.033 23.5291 14.1088 23.4366 14.0913C23.3625 14.0572 23.325 13.9338 23.17 13.8755L1.78748 22.2247L2.31581 22.4763Z"
                            fill="#F37A0B"
                        />
                        <path
                            d="M2.31249 22.475L23.7592 14.0583C23.6242 14.035 23.5292 14.1083 23.4375 14.0916C23.3658 14.0591 23.3292 13.9391 23.1792 13.8833L1.79999 22.2316L2.31249 22.475Z"
                            fill="#F2790C"
                        />
                        <path
                            d="M2.30833 22.473L23.7525 14.058C23.6208 14.0363 23.5267 14.108 23.4358 14.0913C23.3667 14.0596 23.33 13.9446 23.1858 13.8896L1.8125 22.2371L2.30833 22.473Z"
                            fill="#F2780C"
                        />
                        <path
                            d="M2.30415 22.4708L23.7475 14.0583C23.6183 14.0383 23.5258 14.1083 23.4366 14.0916C23.3691 14.0608 23.3341 13.9508 23.1958 13.8975L1.82498 22.2433L2.30415 22.4708Z"
                            fill="#F2770D"
                        />
                        <path
                            d="M2.30083 22.4692L23.7417 14.0583C23.615 14.0408 23.5242 14.1075 23.4367 14.0908C23.3717 14.0608 23.3367 13.955 23.2042 13.9033L1.83749 22.2492L2.30083 22.4692Z"
                            fill="#F1760E"
                        />
                        <path
                            d="M2.29664 22.4673L23.7358 14.0581C23.6125 14.0423 23.5225 14.1073 23.4366 14.0906C23.3741 14.0615 23.34 13.9606 23.2133 13.9106L1.84998 22.2548L2.29664 22.4673Z"
                            fill="#F1750E"
                        />
                        <path
                            d="M2.29331 22.4655L23.7308 14.058C23.61 14.0438 23.5216 14.1071 23.4366 14.0905C23.3758 14.063 23.3425 13.9655 23.2216 13.918L1.86331 22.2613L2.29331 22.4655Z"
                            fill="#F0740F"
                        />
                        <path
                            d="M2.28916 22.464L23.725 14.0581C23.6067 14.0456 23.52 14.1065 23.4367 14.0906C23.3783 14.064 23.3458 13.9715 23.23 13.9248L1.87582 22.2673L2.28916 22.464Z"
                            fill="#F0730F"
                        />
                        <path
                            d="M2.28581 22.4623L23.7191 14.0589C23.6041 14.0481 23.5183 14.1073 23.4366 14.0914C23.3808 14.0656 23.3483 13.9773 23.2391 13.9331L1.88831 22.2731L2.28581 22.4623Z"
                            fill="#EF7210"
                        />
                        <path
                            d="M2.28165 22.4606L23.7133 14.0581C23.6008 14.0498 23.5167 14.1056 23.4358 14.0906C23.3817 14.0656 23.3508 13.9823 23.2467 13.939L1.90082 22.279L2.28165 22.4606Z"
                            fill="#EF7111"
                        />
                        <path
                            d="M2.27833 22.458L23.7083 14.058C23.5983 14.0513 23.5158 14.1055 23.4367 14.0905C23.385 14.0671 23.3542 13.988 23.2558 13.9463L1.91333 22.2846L2.27833 22.458Z"
                            fill="#EF7011"
                        />
                        <path
                            d="M2.27415 22.4565L23.7025 14.0581C23.5958 14.0531 23.5141 14.1056 23.4366 14.0906C23.3875 14.0681 23.3575 13.9931 23.265 13.9531L1.92581 22.2915L2.27415 22.4565Z"
                            fill="#EE6F12"
                        />
                        <path
                            d="M2.27082 22.4548L23.6975 14.0589C23.5933 14.0556 23.5133 14.1056 23.4375 14.0914C23.39 14.0698 23.3608 13.9998 23.2742 13.9614L1.93832 22.2973L2.27082 22.4548Z"
                            fill="#EE6E12"
                        />
                        <path
                            d="M2.26664 22.4529L23.6916 14.0587C23.59 14.0571 23.5116 14.1054 23.4366 14.0913C23.3916 14.0704 23.3633 14.0046 23.2825 13.9688L1.95081 22.3029L2.26664 22.4529Z"
                            fill="#ED6D13"
                        />
                        <path
                            d="M2.26331 22.4514L23.6858 14.0589C23.5875 14.0598 23.51 14.1056 23.4366 14.0914C23.3933 14.0714 23.3658 14.0106 23.2908 13.9756L1.96414 22.3089L2.26331 22.4514Z"
                            fill="#ED6C14"
                        />
                        <path
                            d="M2.25915 22.4496L23.68 14.0587C23.5842 14.0612 23.5092 14.1046 23.4367 14.0912C23.3958 14.0729 23.3692 14.0154 23.2992 13.9829L1.97665 22.3146L2.25915 22.4496Z"
                            fill="#EC6B14"
                        />
                        <path
                            d="M2.25583 22.4472L23.675 14.0589C23.5817 14.0631 23.5083 14.1047 23.4367 14.0914C23.3983 14.0739 23.3717 14.0214 23.3083 13.9897L1.98917 22.3206L2.25583 22.4472Z"
                            fill="#EC6A15"
                        />
                        <path
                            d="M2.25165 22.4454L23.6691 14.0587C23.5783 14.0646 23.5066 14.1037 23.4366 14.0912C23.4 14.0746 23.375 14.0271 23.3166 13.9971L2.00165 22.3271L2.25165 22.4454Z"
                            fill="#EC6915"
                        />
                        <path
                            d="M2.24833 22.4439L23.6642 14.0589C23.5767 14.0672 23.5058 14.1039 23.4375 14.0914C23.4033 14.0756 23.3783 14.0322 23.3258 14.0039L2.01416 22.3331L2.24833 22.4439Z"
                            fill="#EB6816"
                        />
                        <path
                            d="M2.24414 22.4424L23.6575 14.0591C23.5725 14.0691 23.5033 14.1041 23.4358 14.0907C23.4041 14.0757 23.38 14.0374 23.3333 14.0107L2.02664 22.3391L2.24414 22.4424Z"
                            fill="#EB6717"
                        />
                        <path
                            d="M2.24082 22.4406L23.6525 14.0589C23.57 14.0706 23.5025 14.1031 23.4367 14.0906C23.4067 14.0772 23.3833 14.0422 23.3425 14.0181L2.03915 22.3447L2.24082 22.4406Z"
                            fill="#EA6617"
                        />
                        <path
                            d="M2.23667 22.4387L23.6467 14.0596C23.5675 14.0729 23.5008 14.1037 23.4367 14.0912C23.4092 14.0787 23.3867 14.0487 23.3508 14.0254L2.05167 22.3504L2.23667 22.4387Z"
                            fill="#EA6518"
                        />
                        <path
                            d="M2.23247 22.4374L23.6408 14.0599C23.5641 14.0749 23.4991 14.104 23.4366 14.0915C23.4116 14.0799 23.3891 14.054 23.36 14.0332L2.06497 22.3574L2.23247 22.4374Z"
                            fill="#E96418"
                        />
                        <path
                            d="M2.22915 22.4349L23.6358 14.0591C23.5617 14.0766 23.4983 14.1024 23.4367 14.0907C23.4133 14.0799 23.3925 14.0591 23.3683 14.0391L2.07748 22.3632L2.22915 22.4349Z"
                            fill="#E96319"
                        />
                        <path
                            d="M2.225 22.4331L23.6292 14.0589C23.5583 14.0781 23.4958 14.1022 23.4358 14.0906C23.415 14.0814 23.395 14.0647 23.3767 14.0464L2.09 22.3689L2.225 22.4331Z"
                            fill="#E86219"
                        />
                        <path
                            d="M36.0992 18.5601C36.4492 18.6892 36.4658 19.1784 36.1258 19.3309L16.5542 28.1101C16.1092 28.3092 15.5992 28.3042 15.1592 28.0951L2.91666 22.3042L2.91749 23.2176L15.2983 29.0817C15.6 29.2251 16.11 29.2301 16.555 29.0309C16.555 29.0309 36.15 20.2384 36.195 20.2134C36.4575 20.0676 36.6367 19.8509 36.6367 19.3642C36.6367 18.7142 36.0992 18.5601 36.0992 18.5601Z"
                            fill="url(#paint12_linear_27_4417)"
                        />
                        <path
                            d="M1.2675 22.4459L2.115 22.8443C2.3075 22.9584 2.36 23.1634 2.50417 23.2201C2.565 23.2443 2.7525 23.1559 2.9025 23.2143L3.75 23.6134V22.7001L2.9175 22.3018V22.3026C2.765 22.2309 2.56583 22.3293 2.50333 22.3043C2.35 22.2443 2.30667 22.0109 2.08167 21.9034L2.08417 21.9026L1.42083 21.5893C0.53 21.1526 0 21.6101 0 22.2218V25.6834C0 26.3276 0.370833 26.9143 0.953333 27.1893L2.0925 27.7376C2.31417 27.8376 2.5175 27.7318 2.65833 27.8118C2.71667 27.8451 2.765 28.0584 2.915 28.1334L3.75 28.5359V27.6093L2.9175 27.2093C2.76583 27.1359 2.7175 26.9193 2.65833 26.8859C2.515 26.8051 2.30833 26.9159 2.08417 26.8093L1.31 26.4376C1.01917 26.2993 0.833333 26.0059 0.833333 25.6843V22.6518C0.833333 22.4984 0.93 22.2868 1.2675 22.4459Z"
                            fill="#E65100"
                        />
                        <path
                            d="M15.1592 28.0955L2.95499 22.3222L2.95582 23.218L15.3367 29.0822C15.4767 29.1489 15.6633 29.1814 15.8658 29.1822C16.0892 29.1772 16.33 29.1322 16.555 29.0314C16.555 29.0314 36.15 20.2389 36.195 20.2139C36.4575 20.068 36.6367 19.8514 36.6367 19.3647C36.6367 18.7147 36.0992 18.5605 36.0992 18.5605C36.4492 18.6897 36.4658 19.1789 36.1258 19.3314L16.6892 28.0489L16.5925 28.1097C16.3667 28.2105 16.125 28.258 15.8833 28.2547C15.8792 28.2547 15.8758 28.2555 15.8725 28.2555C15.6283 28.2555 15.385 28.2022 15.1592 28.0955Z"
                            fill="url(#paint13_linear_27_4417)"
                        />
                        <path
                            opacity="0.01"
                            d="M20.7008 13.3148L3.37666 19.9781C3.34166 20.639 3.6125 21.3315 4.18416 21.609C4.18833 21.6115 4.3025 21.6665 4.3075 21.669L5.32166 22.1573C5.4075 22.1956 5.53333 22.2306 5.65333 22.234C5.65833 22.2365 5.7975 22.2415 5.8025 22.2423C5.8075 22.2431 5.89333 22.3506 5.89833 22.3506C5.925 22.3806 5.9525 22.4065 5.98083 22.4306C6.01416 22.459 6.05166 22.4831 6.08916 22.504C6.10166 22.5115 6.12083 22.5198 6.13416 22.5265H6.13583L6.17666 22.5506C6.1825 22.5623 6.585 22.7631 6.59833 22.7698L7.8125 23.3465L7.88416 23.3806L17.2425 27.8073L36.165 19.3323C36.5058 19.1798 36.4892 18.6898 36.1383 18.5615L24.8383 14.3981L24.8217 14.3948C24.7308 14.3623 24.3567 14.2265 24.0533 14.1131C24.0325 14.1056 23.9808 14.0848 23.9083 14.059C23.9083 14.059 23.7283 14.1115 23.54 14.1473L23.2433 14.0898L22.99 13.9356C22.9817 13.8281 23.0433 13.7423 23.0433 13.7423C22.4692 13.5315 21.8667 13.3098 21.8667 13.3098C21.6817 13.2398 21.4867 13.2048 21.2917 13.2048C21.0917 13.2015 20.8908 13.239 20.7008 13.3148Z"
                            fill="black"
                        />
                        <path
                            opacity="0.03"
                            d="M20.7008 13.3148L3.37665 19.9782C3.35331 20.6273 3.62081 21.3015 4.18081 21.5807C4.18915 21.5857 4.29415 21.6365 4.30331 21.6415L5.29915 22.1207C5.37415 22.1548 5.51915 22.2015 5.62415 22.204C5.63498 22.209 5.76248 22.2148 5.77248 22.2165C5.78331 22.2182 5.86415 22.3132 5.87331 22.3132C5.90081 22.339 5.92915 22.3623 5.95748 22.3823C5.99165 22.4065 6.02998 22.4282 6.06665 22.4465C6.07748 22.4532 6.09998 22.4607 6.11165 22.4665H6.11498L6.15415 22.494C6.16665 22.5173 6.52581 22.7073 6.55415 22.7215L7.74331 23.2873L7.81998 23.3232L17.2691 27.7932L36.1633 19.3307C36.5042 19.1782 36.4875 18.6882 36.1366 18.5598L24.8366 14.3965L24.82 14.3932C24.7291 14.3607 24.355 14.2248 24.0516 14.1115C24.0308 14.104 23.9791 14.0832 23.9066 14.0573C23.9066 14.0573 23.7266 14.1098 23.5383 14.1457L23.2416 14.0882L22.9883 13.934C22.98 13.8265 23.0416 13.7407 23.0416 13.7407C22.4675 13.5298 21.865 13.3082 21.865 13.3082C21.68 13.2382 21.485 13.2032 21.29 13.2032C21.0916 13.2015 20.8908 13.239 20.7008 13.3148Z"
                            fill="black"
                        />
                        <path
                            opacity="0.04"
                            d="M20.7008 13.3148L3.37667 19.9781C3.36417 20.6148 3.62917 21.2715 4.17751 21.5523C4.19084 21.5598 4.28584 21.6073 4.30001 21.614L5.27751 22.0848C5.34167 22.114 5.50501 22.1731 5.59584 22.1756C5.61167 22.1823 5.72751 22.1898 5.74251 22.1923C5.75834 22.1956 5.83417 22.2765 5.84834 22.2765C5.87751 22.299 5.90584 22.3181 5.93417 22.3356C5.96834 22.3565 6.00834 22.3748 6.04334 22.3906C6.05334 22.3965 6.07834 22.4031 6.08917 22.4081H6.09334L6.13084 22.4398C6.14917 22.4748 6.46667 22.6548 6.50834 22.6756L7.67334 23.2306L7.75501 23.269L17.2958 27.7823L36.1625 19.3323C36.5033 19.1798 36.4867 18.6898 36.1358 18.5615L24.8358 14.3981L24.8192 14.3948C24.7283 14.3623 24.3542 14.2265 24.0508 14.1131C24.03 14.1056 23.9783 14.0848 23.9058 14.059C23.9058 14.059 23.7258 14.1115 23.5375 14.1473L23.2408 14.0898L22.9875 13.9356C22.9792 13.8281 23.0408 13.7423 23.0408 13.7423C22.4667 13.5315 21.8642 13.3098 21.8642 13.3098C21.6792 13.2398 21.4842 13.2048 21.2892 13.2048C21.0917 13.2015 20.8908 13.239 20.7008 13.3148Z"
                            fill="black"
                        />
                        <path
                            opacity="0.05"
                            d="M20.7008 13.3151L3.37665 19.9784C3.37582 20.6034 3.63665 21.2426 4.17415 21.5251C4.19165 21.5359 4.27832 21.5784 4.29665 21.5876L5.25582 22.0492C5.30998 22.0734 5.49165 22.1451 5.56748 22.1467C5.58832 22.1559 5.69332 22.1642 5.71332 22.1684C5.73498 22.1726 5.80582 22.2409 5.82415 22.2409C5.85415 22.2592 5.88332 22.2751 5.91248 22.2892C5.94665 22.3067 5.98748 22.3217 6.02248 22.3351C6.03082 22.3401 6.05998 22.3459 6.06832 22.3501L6.07415 22.3509L6.10998 22.3859C6.13498 22.4326 6.40998 22.6026 6.46582 22.6301L7.60665 23.1734L7.69332 23.2134L17.3258 27.7692L36.1642 19.3317C36.505 19.1792 36.4883 18.6892 36.1375 18.5609L24.8375 14.3976L24.8208 14.3942C24.73 14.3617 24.3558 14.2259 24.0525 14.1126C24.0317 14.1051 23.98 14.0842 23.9075 14.0584C23.9075 14.0584 23.7275 14.1109 23.5392 14.1467L23.2425 14.0892L22.9892 13.9351C22.9808 13.8276 23.0425 13.7417 23.0425 13.7417C22.4683 13.5309 21.8658 13.3092 21.8658 13.3092C21.6808 13.2392 21.4858 13.2042 21.2908 13.2042C21.0917 13.2017 20.8908 13.2392 20.7008 13.3151Z"
                            fill="black"
                        />
                        <path
                            opacity="0.06"
                            d="M20.7008 13.3151L3.37665 19.9784C3.38748 20.5917 3.64498 21.2126 4.17081 21.4967C4.19248 21.5101 4.26998 21.5484 4.29331 21.5592L5.23415 22.0126C5.27748 22.0317 5.47831 22.1159 5.53831 22.1176C5.56415 22.1292 5.65748 22.1384 5.68248 22.1434C5.70915 22.1484 5.77581 22.2034 5.79831 22.2034C5.82998 22.2184 5.85998 22.2309 5.88831 22.2417C5.92248 22.2551 5.96498 22.2676 5.99915 22.2776C6.00581 22.2817 6.03831 22.2867 6.04498 22.2901L6.05248 22.2909L6.08665 22.3301C6.11748 22.3876 6.35081 22.5476 6.41998 22.5826L7.53665 23.1151L7.62831 23.1576L17.3516 27.7567L36.1625 19.3317C36.5033 19.1792 36.4866 18.6892 36.1358 18.5609L24.8358 14.3976L24.8191 14.3942C24.7283 14.3617 24.3541 14.2259 24.0508 14.1126C24.03 14.1051 23.9783 14.0842 23.9058 14.0584C23.9058 14.0584 23.7258 14.1109 23.5375 14.1467L23.2408 14.0892L22.9875 13.9351C22.9791 13.8276 23.0408 13.7417 23.0408 13.7417C22.4666 13.5309 21.8641 13.3092 21.8641 13.3092C21.6791 13.2392 21.4841 13.2042 21.2891 13.2042C21.0916 13.2017 20.8908 13.2392 20.7008 13.3151Z"
                            fill="black"
                        />
                        <path
                            opacity="0.07"
                            d="M20.7008 13.3148L3.37665 19.9782C3.39915 20.5798 3.65248 21.1832 4.16665 21.4682C4.19248 21.484 4.26081 21.5182 4.28915 21.5315L5.21165 21.9757C5.24415 21.9898 5.46415 22.0865 5.50915 22.0873C5.54081 22.1015 5.62248 22.1115 5.65248 22.1173C5.68498 22.1232 5.74581 22.1657 5.77415 22.1657C5.80665 22.1773 5.83748 22.1857 5.86581 22.1932C5.89998 22.2023 5.94415 22.2123 5.97665 22.2198C5.98165 22.2232 6.01831 22.2273 6.02331 22.2298L6.03165 22.2307L6.06415 22.2732C6.10165 22.3423 6.29248 22.4923 6.37581 22.534L7.46831 23.0557L7.56498 23.1007L17.38 27.7432L36.1633 19.3307C36.5042 19.1782 36.4875 18.6882 36.1366 18.5598L24.8366 14.3965L24.82 14.3932C24.7291 14.3607 24.355 14.2248 24.0516 14.1115C24.0308 14.104 23.9791 14.0832 23.9066 14.0573C23.9066 14.0573 23.7266 14.1098 23.5383 14.1457L23.2416 14.0882L22.9883 13.934C22.98 13.8265 23.0416 13.7407 23.0416 13.7407C22.4675 13.5298 21.865 13.3082 21.865 13.3082C21.68 13.2382 21.485 13.2032 21.29 13.2032C21.0916 13.2015 20.8908 13.239 20.7008 13.3148Z"
                            fill="black"
                        />
                        <path
                            opacity="0.08"
                            d="M20.7008 13.3151L3.37665 19.9784C3.40998 20.5676 3.66081 21.1534 4.16331 21.4409C4.19415 21.4592 4.25248 21.4892 4.28581 21.5051L5.18998 21.9401C5.21165 21.9501 5.45081 22.0584 5.48081 22.0592C5.51748 22.0759 5.58748 22.0867 5.62248 22.0934C5.65998 22.1001 5.71665 22.1292 5.74915 22.1301C5.78248 22.1376 5.81415 22.1426 5.84248 22.1476C5.87748 22.1534 5.92248 22.1601 5.95415 22.1651C5.95748 22.1667 5.99748 22.1709 6.00081 22.1726L6.01081 22.1734L6.04081 22.2201C6.08415 22.3009 6.23248 22.4401 6.32998 22.4892L7.39831 22.9992L7.49998 23.0459L17.4066 27.7317L36.1617 19.3317C36.5025 19.1792 36.4858 18.6892 36.135 18.5609L24.835 14.3976L24.8183 14.3942C24.7275 14.3617 24.3533 14.2259 24.05 14.1126C24.0292 14.1051 23.9775 14.0842 23.905 14.0584C23.905 14.0584 23.725 14.1109 23.5366 14.1467L23.24 14.0892L22.9866 13.9351C22.9783 13.8276 23.04 13.7417 23.04 13.7417C22.4658 13.5309 21.8633 13.3092 21.8633 13.3092C21.6783 13.2392 21.4833 13.2042 21.2883 13.2042C21.0916 13.2017 20.8908 13.2392 20.7008 13.3151Z"
                            fill="black"
                        />
                        <path
                            opacity="0.09"
                            d="M20.7008 13.3148L3.37665 19.9782C3.42165 20.5557 3.66831 21.1232 4.15998 21.4123C4.19498 21.4332 4.24498 21.4598 4.28248 21.4773L5.16831 21.904C5.17915 21.909 5.43665 22.0298 5.45165 22.0298C5.49331 22.049 5.55248 22.0607 5.59248 22.0682C5.63581 22.0765 5.68665 22.0923 5.72415 22.0923C5.75915 22.0965 5.79165 22.0973 5.81998 22.099C5.85498 22.1007 5.90165 22.1048 5.93248 22.1073C5.93415 22.1082 5.97831 22.1115 5.97998 22.1123L5.99165 22.1132L6.01998 22.1632C6.06915 22.2557 6.17581 22.3848 6.28748 22.4407L7.33165 22.9398L7.43831 22.989L17.4366 27.7182L36.1642 19.3307C36.505 19.1782 36.4883 18.6882 36.1375 18.5598L24.8375 14.3965L24.8208 14.3932C24.73 14.3607 24.3558 14.2248 24.0525 14.1115C24.0317 14.104 23.98 14.0832 23.9075 14.0573C23.9075 14.0573 23.7275 14.1098 23.5391 14.1457L23.2425 14.0882L22.9891 13.934C22.9808 13.8265 23.0425 13.7407 23.0425 13.7407C22.4683 13.5298 21.8658 13.3082 21.8658 13.3082C21.6808 13.2382 21.4858 13.2032 21.2908 13.2032C21.0916 13.2015 20.8908 13.239 20.7008 13.3148Z"
                            fill="black"
                        />
                        <path
                            opacity="0.1"
                            d="M36.1375 18.5598L24.8375 14.3965L24.8208 14.3931C24.73 14.3606 24.3558 14.2248 24.0525 14.1115C24.0316 14.104 23.98 14.0831 23.9075 14.0573C23.9075 14.0573 23.7275 14.1098 23.5391 14.1456L23.2425 14.0881L22.9891 13.934C22.9808 13.8265 23.0425 13.7406 23.0425 13.7406C22.4683 13.5298 21.8658 13.3081 21.8658 13.3081C21.6808 13.2381 21.4858 13.2031 21.2908 13.2031C21.09 13.2031 20.8891 13.2406 20.6991 13.3165L3.37665 19.9781C3.43748 20.5898 3.71748 21.1831 4.27915 21.4498L5.42415 22.0006C5.56581 22.064 5.70498 22.0581 5.79748 22.0523C5.83248 22.0515 5.88081 22.0515 5.91081 22.0515L5.97081 22.0548L5.99748 22.109C6.05331 22.2131 6.11748 22.3323 6.24248 22.3948L7.26248 22.8823L7.37415 22.934L17.4633 27.7065L36.1633 19.3315C36.5042 19.1781 36.4875 18.689 36.1375 18.5598Z"
                            fill="black"
                        />
                        <path
                            d="M5.41667 16.5327L4.57667 16.1335C4.28667 15.9919 4.04333 15.9619 3.90167 16.0485C3.80583 16.1094 3.75 16.2327 3.75 16.3885V19.8502C3.75 20.3302 4.03083 20.7735 4.465 20.9794L5.41667 21.4377V16.5327Z"
                            fill="#101030"
                        />
                        <path
                            d="M39.4325 17.6385L28.1542 13.1943L6.66333 21.5793V22.501L18.4917 28.096C18.9325 28.3043 19.4425 28.3102 19.8875 28.1102C19.8875 28.1102 39.5025 19.326 39.5475 19.301C39.81 19.1552 39.9742 18.9385 39.9742 18.4518C39.9742 17.8643 39.4325 17.6385 39.4325 17.6385Z"
                            fill="url(#paint14_linear_27_4417)"
                        />
                        <path
                            d="M18.6317 22.8327L6.14167 16.9194C5.19167 16.4702 5 16.6652 5 17.2769V19.9061C5 20.5636 4.92583 20.7402 5.54833 21.0444C5.61833 21.0786 19.1558 27.5044 19.1558 27.5044L19.1575 27.4969L19.1592 27.4961V22.9327C18.9575 22.9319 18.7708 22.8986 18.6317 22.8327Z"
                            fill="url(#paint15_linear_27_4417)"
                        />
                        <path
                            d="M18.6317 22.8327L6.49 17.0819L6.14167 16.9194C5.19167 16.4702 5 16.6652 5 17.2769V19.9061C5 20.5636 4.92583 20.7402 5.54833 21.0444C5.61833 21.0786 19.1558 27.5044 19.1558 27.5044L19.1575 27.4969L19.1592 27.4961V22.9327C18.9575 22.9319 18.7708 22.8986 18.6317 22.8327Z"
                            fill="url(#paint16_radial_27_4417)"
                        />
                        <path
                            d="M38.7242 16.4928C38.7242 15.2886 39.2367 14.3936 39.5708 13.9336C39.5558 13.9428 39.5433 13.9553 39.5283 13.9636C39.4833 13.9886 19.8883 22.7811 19.8883 22.7811C19.6075 22.9069 19.3067 22.9436 19.0425 22.9236C18.8158 23.1253 18.3333 23.7053 18.3333 25.0186C18.3333 26.7586 19.1667 27.5036 19.1667 27.5036L39.275 18.5094C39.27 18.4986 39.2658 18.4928 39.2608 18.4819C39.2608 18.4819 38.7242 17.9219 38.7242 16.4928Z"
                            fill="url(#paint17_linear_27_4417)"
                        />
                        <path
                            d="M38.7242 16.4928C38.7242 15.2886 39.2367 14.3936 39.5708 13.9336C39.5558 13.9428 39.5433 13.9553 39.5283 13.9636C39.4833 13.9886 19.8883 22.7811 19.8883 22.7811C19.6075 22.9069 19.3058 22.9436 19.0425 22.9236C18.815 23.1244 18.3333 23.7044 18.3333 25.0186C18.3333 26.7586 19.1667 27.5036 19.1667 27.5036L39.275 18.5094C39.27 18.4986 39.2658 18.4928 39.2608 18.4819C39.2608 18.4819 38.7242 17.9219 38.7242 16.4928Z"
                            fill="url(#paint18_radial_27_4417)"
                        />
                        <path
                            d="M39.4325 12.7271L27.2033 8.22461L6.25 16.4713V16.9696L18.6317 22.8329C18.9333 22.9763 19.4433 22.9813 19.8883 22.7821L39.7058 13.8838C39.7058 13.5088 39.7058 13.1779 39.705 13.1163C39.7042 12.9546 39.6125 12.7938 39.4325 12.7271Z"
                            fill="#1E88E5"
                        />
                        <path
                            d="M37.0475 13.4678C37.0075 13.4903 21.1984 20.5703 17.9709 22.0153C17.9709 22.0153 18.6625 22.3262 18.75 22.3512L20.3409 21.6387C37.2942 14.0453 37.3117 14.0353 37.3509 14.0137C37.8542 13.7337 38.0992 13.277 38.0992 12.6178C38.0992 12.4695 38.0734 12.337 38.0384 12.2128L36.935 11.8062C36.9509 11.8128 37.4742 12.0395 37.4742 12.6178C37.4742 13.1053 37.31 13.322 37.0475 13.4678Z"
                            fill="#1E88E5"
                        />
                        <path
                            d="M37.0475 13.4675C37.0075 13.49 21.1984 20.57 17.9709 22.015C17.9709 22.015 18.5992 22.2983 18.6767 22.32L20.3167 21.5858C36.9534 14.1341 37.285 13.9841 37.3225 13.9633C37.8067 13.6925 38.0417 13.2566 38.0417 12.6183C38.0417 12.4516 38.0042 12.31 37.9559 12.1825L36.935 11.8066C36.9509 11.8133 37.4742 12.04 37.4742 12.6183C37.4742 13.105 37.31 13.3216 37.0475 13.4675Z"
                            fill="#1D83DD"
                        />
                        <path
                            d="M37.0475 13.4675C37.0075 13.49 21.1984 20.57 17.9709 22.015C17.9709 22.015 18.5367 22.27 18.6042 22.2891L20.2934 21.5325C36.6125 14.2233 37.2592 13.9316 37.2942 13.9125C37.76 13.6516 37.9834 13.2358 37.9834 12.6183C37.9834 12.4333 37.9334 12.2816 37.8734 12.1525L36.9342 11.8066C36.95 11.8133 37.4734 12.04 37.4734 12.6183C37.4742 13.105 37.31 13.3216 37.0475 13.4675Z"
                            fill="#1C7ED3"
                        />
                        <path
                            d="M37.0475 13.4678C37.0075 13.4903 21.1984 20.5703 17.9709 22.0153C17.9709 22.0153 18.4734 22.242 18.5317 22.2587L20.27 21.4803C36.2725 14.3128 37.2334 13.8812 37.2667 13.862C37.7142 13.612 37.9259 13.2145 37.9259 12.6178C37.9259 12.4145 37.8634 12.2528 37.7917 12.122L36.935 11.8062C36.9509 11.8128 37.4742 12.0395 37.4742 12.6178C37.4742 13.1053 37.31 13.322 37.0475 13.4678Z"
                            fill="#1A77C9"
                        />
                        <path
                            d="M37.0475 13.4678C37.0075 13.4903 21.1984 20.5703 17.9709 22.0153C17.9709 22.0153 18.41 22.2145 18.4592 22.2278L20.2459 21.427C35.9309 14.402 37.2059 13.8287 37.2384 13.8112C37.6675 13.5712 37.8684 13.1937 37.8684 12.6178C37.8684 12.3962 37.7934 12.2253 37.71 12.0912L36.9359 11.8062C36.9517 11.8128 37.475 12.0395 37.475 12.6178C37.4742 13.1053 37.31 13.322 37.0475 13.4678Z"
                            fill="#1971BD"
                        />
                        <path
                            d="M37.0475 13.4675C37.0075 13.49 21.1984 20.57 17.9709 22.015C17.9709 22.015 18.3475 22.1858 18.3859 22.1966L20.2217 21.3741C35.59 14.4908 37.1792 13.7775 37.21 13.7608C37.6209 13.5308 37.81 13.1733 37.81 12.6183C37.81 12.3783 37.7225 12.1975 37.6267 12.0616L36.935 11.8066C36.9509 11.8133 37.4742 12.04 37.4742 12.6183C37.4742 13.105 37.31 13.3216 37.0475 13.4675Z"
                            fill="#1769B1"
                        />
                        <path
                            d="M37.0475 13.4675C37.0075 13.49 21.1984 20.57 17.9709 22.015C17.9709 22.015 18.2842 22.1575 18.3134 22.1659L20.1984 21.3209C35.2492 14.58 37.1534 13.7259 37.1817 13.7092C37.5742 13.49 37.7517 13.1509 37.7517 12.6167C37.7517 12.3584 37.6517 12.1684 37.5442 12.0292L36.9342 11.8042C36.95 11.8109 37.4734 12.0375 37.4734 12.6159C37.4742 13.105 37.31 13.3217 37.0475 13.4675Z"
                            fill="#1560A2"
                        />
                        <path
                            d="M37.0475 13.4678C37.0075 13.4903 21.1984 20.5703 17.9709 22.0153C17.9709 22.0153 18.2209 22.1303 18.2409 22.1353L20.175 21.2687C34.9092 14.6695 37.1275 13.6745 37.1542 13.6595C37.5284 13.4503 37.695 13.1312 37.695 12.6178C37.695 12.3412 37.5825 12.1412 37.4634 12.0003L36.9359 11.8062C36.9517 11.8128 37.475 12.0395 37.475 12.6178C37.4742 13.1053 37.31 13.322 37.0475 13.4678Z"
                            fill="#145894"
                        />
                        <path
                            d="M37.0475 13.4675C37.0075 13.49 21.1984 20.57 17.9709 22.015C17.9709 22.015 18.1584 22.1016 18.1675 22.1041L20.1509 21.2158C34.5675 14.7591 37.1009 13.6233 37.1259 13.6091C37.4809 13.4108 37.6367 13.1108 37.6367 12.6183C37.6367 12.3233 37.5117 12.1133 37.3809 11.9708L36.9359 11.8066C36.9517 11.8133 37.475 12.04 37.475 12.6183C37.4742 13.105 37.31 13.3216 37.0475 13.4675Z"
                            fill="#114E83"
                        />
                        <path
                            d="M36.935 11.8066C36.9509 11.8133 37.4742 12.04 37.4742 12.6183C37.4742 13.105 37.31 13.3216 37.0475 13.4675C37.0075 13.49 21.1984 20.57 17.9709 22.015L18.095 22.0733L20.1275 21.1625C34.2275 14.8475 37.0742 13.5708 37.0975 13.5583C37.435 13.3708 37.5784 13.0891 37.5784 12.6183C37.5784 12.305 37.4409 12.0858 37.2975 11.94L36.935 11.8066Z"
                            fill="#0F4472"
                        />
                        <path
                            d="M27.3483 8.27854C27.3275 8.27104 27.2758 8.2502 27.2033 8.22437C27.2033 8.22437 26.5775 8.40854 26.4375 8.32104C26.14 8.13437 26.3383 7.90687 26.3383 7.90687C25.7642 7.69604 25.1617 7.47437 25.1617 7.47437C24.7867 7.3327 24.37 7.3327 23.995 7.4827L4.28334 15.076C3.96001 15.1985 3.33334 15.5077 3.33334 16.4077L3.75001 16.5869V16.3877C3.75001 16.2319 3.80501 16.1085 3.90168 16.0485C4.04168 15.9619 4.28668 15.9919 4.57668 16.1335L5.23584 16.4469C5.25918 16.4585 5.28668 16.4944 5.32918 16.5519C5.39751 16.6452 5.50084 16.7869 5.68251 16.8577C5.81918 16.9127 5.94418 16.8902 6.03501 16.8719L7.08334 17.3627V16.8669L28.1533 8.57437C28.1533 8.57437 27.6933 8.4077 27.3483 8.27854Z"
                            fill="#1976D2"
                        />
                        <path
                            d="M5.72083 16.6776L27.2033 8.22424C27.0133 8.16424 26.8883 8.2809 26.77 8.2584C26.6542 8.20507 26.6033 7.99674 26.3392 7.90674L4.88083 16.2784L5.72083 16.6776Z"
                            fill="#1976D2"
                        />
                        <path
                            d="M5.71667 16.6757L27.1975 8.22406C27.0108 8.16573 26.8867 8.28073 26.77 8.25823C26.6567 8.20656 26.6058 8.0024 26.3483 7.91406L4.89417 16.2841L5.71667 16.6757Z"
                            fill="#1976D1"
                        />
                        <path
                            d="M5.71333 16.6735L27.1917 8.22437C27.0075 8.16771 26.8858 8.28021 26.77 8.25854C26.6592 8.20771 26.6092 8.00854 26.3575 7.92188L4.9075 16.291L5.71333 16.6735Z"
                            fill="#1975D0"
                        />
                        <path
                            d="M5.70917 16.6717L27.1858 8.2242C27.005 8.17003 26.8842 8.28003 26.77 8.25837C26.6608 8.20837 26.6125 8.0142 26.3658 7.9292L4.92084 16.2967L5.70917 16.6717Z"
                            fill="#1975CF"
                        />
                        <path
                            d="M5.70501 16.6699L27.18 8.22402C27.0017 8.17152 26.8825 8.27902 26.77 8.25819C26.6633 8.20902 26.6158 8.01902 26.375 7.93652L4.93417 16.3032L5.70501 16.6699Z"
                            fill="#1974CE"
                        />
                        <path
                            d="M5.70084 16.6685L27.1742 8.22434C26.9992 8.1735 26.8817 8.27934 26.77 8.2585C26.6658 8.211 26.6183 8.02517 26.3842 7.94434L4.94751 16.3102L5.70084 16.6685Z"
                            fill="#1974CD"
                        />
                        <path
                            d="M5.69748 16.6658L27.1683 8.22416C26.9958 8.17583 26.88 8.27916 26.77 8.25833C26.6683 8.21166 26.6217 8.03083 26.3933 7.95166L4.96082 16.3158L5.69748 16.6658Z"
                            fill="#1974CC"
                        />
                        <path
                            d="M5.69333 16.6645L27.1625 8.22447C26.9925 8.17781 26.8783 8.27864 26.77 8.25864C26.6708 8.21281 26.625 8.03697 26.4025 7.95947L4.97333 16.3228L5.69333 16.6645Z"
                            fill="#1973CB"
                        />
                        <path
                            d="M5.68916 16.6625L27.1567 8.22415C26.99 8.17915 26.8775 8.27832 26.77 8.25749C26.6725 8.21332 26.6275 8.04165 26.4117 7.96582L4.98666 16.3283L5.68916 16.6625Z"
                            fill="#1973CA"
                        />
                        <path
                            d="M5.685 16.6603L27.1508 8.22447C26.9867 8.18197 26.8758 8.2778 26.77 8.2578C26.675 8.21447 26.6308 8.0478 26.4208 7.97363L5 16.3353L5.685 16.6603Z"
                            fill="#1972C9"
                        />
                        <path
                            d="M5.68167 16.6585L27.145 8.22429C26.9842 8.18346 26.8742 8.27762 26.77 8.25762C26.6775 8.21512 26.6342 8.05346 26.43 7.98096L5.01334 16.341L5.68167 16.6585Z"
                            fill="#1972C8"
                        />
                        <path
                            d="M5.67751 16.6566L27.1392 8.22411C26.9808 8.18495 26.8733 8.27745 26.77 8.25745C26.68 8.21578 26.6367 8.05911 26.4383 7.98828L5.02667 16.3474L5.67751 16.6566Z"
                            fill="#1972C7"
                        />
                        <path
                            d="M5.67334 16.6553L27.1333 8.22443C26.9783 8.18776 26.8717 8.27693 26.77 8.25776C26.6817 8.21776 26.64 8.06526 26.4475 7.99609L5.04001 16.3536L5.67334 16.6553Z"
                            fill="#1971C6"
                        />
                        <path
                            d="M5.66915 16.6526L27.1275 8.22425C26.975 8.18925 26.87 8.27675 26.77 8.25758C26.6841 8.21842 26.6433 8.07092 26.4566 8.00342L5.05331 16.3601L5.66915 16.6526Z"
                            fill="#1971C5"
                        />
                        <path
                            d="M5.66582 16.6509L27.1217 8.22505C26.9725 8.19172 26.8692 8.27672 26.77 8.25839C26.6867 8.22005 26.6458 8.07672 26.4658 8.01172L5.06665 16.3659L5.66582 16.6509Z"
                            fill="#1971C4"
                        />
                        <path
                            d="M5.66166 16.649L27.1158 8.22488C26.9692 8.19404 26.8675 8.27654 26.77 8.25821C26.6892 8.22071 26.6492 8.08238 26.475 8.01904L5.07916 16.3724L5.66166 16.649Z"
                            fill="#1970C3"
                        />
                        <path
                            d="M5.6575 16.6477L27.11 8.22519C26.9667 8.19602 26.8658 8.27686 26.77 8.25852C26.6917 8.22269 26.6525 8.08852 26.4842 8.02686L5.0925 16.3785L5.6575 16.6477Z"
                            fill="#1970C2"
                        />
                        <path
                            d="M5.65333 16.645L27.1042 8.22501C26.9633 8.19751 26.865 8.27585 26.77 8.25835C26.6933 8.22335 26.655 8.09418 26.4933 8.03418L5.10583 16.385L5.65333 16.645Z"
                            fill="#196FC1"
                        />
                        <path
                            d="M5.65 16.6432L27.0983 8.22484C26.9608 8.19984 26.8633 8.27567 26.77 8.25817C26.6958 8.224 26.6583 8.09984 26.5017 8.0415L5.11917 16.3915L5.65 16.6432Z"
                            fill="#196FC0"
                        />
                        <path
                            d="M5.64584 16.6418L27.0925 8.22515C26.9575 8.20182 26.8617 8.27515 26.77 8.25848C26.6983 8.22598 26.6617 8.10598 26.5108 8.04932L5.13251 16.3976L5.64584 16.6418Z"
                            fill="#196FBF"
                        />
                        <path
                            d="M5.64168 16.64L27.0867 8.22497C26.955 8.20331 26.86 8.27497 26.77 8.25831C26.7008 8.22664 26.6642 8.11164 26.52 8.05664L5.14584 16.4041L5.64168 16.64Z"
                            fill="#196EBE"
                        />
                        <path
                            d="M5.63748 16.6378L27.0808 8.22529C26.9517 8.20529 26.8591 8.27529 26.77 8.25862C26.7025 8.22779 26.6675 8.11779 26.5292 8.06445L5.15915 16.4103L5.63748 16.6378Z"
                            fill="#196EBE"
                        />
                        <path
                            d="M5.63416 16.6358L27.075 8.22497C26.9492 8.20747 26.8575 8.27413 26.77 8.25747C26.705 8.22747 26.6708 8.12247 26.5383 8.0708L5.17166 16.4166L5.63416 16.6358Z"
                            fill="#196DBD"
                        />
                        <path
                            d="M5.63 16.6344L27.0683 8.22528C26.945 8.20945 26.855 8.27445 26.7692 8.25778C26.7067 8.22945 26.6725 8.12778 26.5467 8.07861L5.185 16.4228L5.63 16.6344Z"
                            fill="#196DBC"
                        />
                        <path
                            d="M5.62583 16.6326L27.0625 8.2251C26.9425 8.21094 26.8542 8.27427 26.7692 8.2576C26.7092 8.2301 26.6758 8.13344 26.5558 8.08594L5.19833 16.4293L5.62583 16.6326Z"
                            fill="#196DBB"
                        />
                        <path
                            d="M5.62167 16.6299L27.0567 8.22493C26.9392 8.21326 26.8525 8.27326 26.7692 8.25743C26.7117 8.23076 26.6792 8.1391 26.565 8.09326L5.21167 16.4349L5.62167 16.6299Z"
                            fill="#196CBA"
                        />
                        <path
                            d="M5.61834 16.6286L27.0508 8.22524C26.9367 8.21524 26.8508 8.27357 26.77 8.25774C26.7142 8.23191 26.6825 8.14524 26.5742 8.10107L5.22501 16.4419L5.61834 16.6286Z"
                            fill="#196CB9"
                        />
                        <path
                            d="M5.61418 16.6269L27.045 8.22521C26.9333 8.21687 26.85 8.27271 26.77 8.25771C26.7167 8.23354 26.6858 8.15188 26.5833 8.10938L5.23834 16.4477L5.61418 16.6269Z"
                            fill="#196BB8"
                        />
                        <path
                            d="M5.60998 16.625L27.0391 8.22587C26.93 8.22003 26.8483 8.27337 26.77 8.25837C26.7191 8.23503 26.6891 8.15753 26.5925 8.1167L5.25165 16.4542L5.60998 16.625Z"
                            fill="#196BB7"
                        />
                        <path
                            d="M5.60583 16.6224L27.0333 8.22569C26.9275 8.22152 26.8467 8.27319 26.77 8.25819C26.7217 8.23569 26.6917 8.16319 26.6017 8.12402L5.26416 16.4607L5.60583 16.6224Z"
                            fill="#196BB6"
                        />
                        <path
                            d="M5.6025 16.621L27.0275 8.226C26.9242 8.2235 26.8458 8.27267 26.77 8.2585C26.7233 8.23767 26.695 8.16934 26.6108 8.13184L5.2775 16.4668L5.6025 16.621Z"
                            fill="#196AB5"
                        />
                        <path
                            d="M5.59833 16.6192L27.0217 8.22583C26.9217 8.22583 26.8442 8.27249 26.77 8.25833C26.7258 8.23833 26.6983 8.17499 26.62 8.13916L5.29083 16.4733L5.59833 16.6192Z"
                            fill="#196AB4"
                        />
                        <path
                            d="M5.59416 16.6178L27.0158 8.22614C26.9183 8.22781 26.8425 8.27197 26.77 8.25864C26.7283 8.23947 26.7008 8.18114 26.6292 8.14697L5.30499 16.4803L5.59416 16.6178Z"
                            fill="#196AB3"
                        />
                        <path
                            d="M5.59001 16.6151L27.01 8.22596C26.9158 8.2293 26.8417 8.2718 26.77 8.25846C26.7308 8.24013 26.7042 8.18596 26.6383 8.1543L5.3175 16.486L5.59001 16.6151Z"
                            fill="#1969B2"
                        />
                        <path
                            d="M5.58667 16.6133L27.0042 8.22579C26.9125 8.23162 26.84 8.27162 26.77 8.25829C26.7325 8.24162 26.7075 8.19162 26.6467 8.16162L5.33084 16.4916L5.58667 16.6133Z"
                            fill="#1969B1"
                        />
                        <path
                            d="M5.58251 16.6119L26.9983 8.2261C26.91 8.2336 26.8383 8.2711 26.77 8.2586C26.735 8.24277 26.71 8.19777 26.6558 8.16943L5.34418 16.4986L5.58251 16.6119Z"
                            fill="#1968B0"
                        />
                        <path
                            d="M5.57833 16.6101L26.9925 8.22676C26.9067 8.23592 26.8375 8.27176 26.77 8.25842C26.7375 8.24342 26.7133 8.20342 26.665 8.17676L5.35666 16.5051L5.57833 16.6101Z"
                            fill="#1968AF"
                        />
                        <path
                            d="M5.57416 16.6078L26.9867 8.22609C26.9042 8.23776 26.8358 8.27026 26.77 8.25776C26.74 8.24359 26.7167 8.20859 26.6742 8.18359L5.37 16.5111L5.57416 16.6078Z"
                            fill="#1968AE"
                        />
                        <path
                            d="M5.57083 16.6059L26.9808 8.22592C26.9008 8.23925 26.8342 8.27008 26.77 8.25758C26.7425 8.24508 26.7192 8.21425 26.6833 8.19092L5.38333 16.5168L5.57083 16.6059Z"
                            fill="#1967AD"
                        />
                        <path
                            d="M5.56667 16.6041L26.975 8.22574C26.8983 8.24074 26.8333 8.26991 26.77 8.25741C26.7442 8.24574 26.7225 8.21991 26.6925 8.19824L5.39667 16.5232L5.56667 16.6041Z"
                            fill="#1967AC"
                        />
                        <path
                            d="M5.5625 16.6027L26.9692 8.22605C26.895 8.24272 26.8317 8.26939 26.77 8.25772C26.7467 8.24689 26.7258 8.22605 26.7017 8.20605L5.41 16.5294L5.5625 16.6027Z"
                            fill="#1966AB"
                        />
                        <path
                            d="M5.55834 16.6L26.9633 8.22588C26.8925 8.24505 26.83 8.26921 26.77 8.25755C26.7492 8.24838 26.7292 8.23171 26.7108 8.21338L5.42334 16.5359L5.55834 16.6Z"
                            fill="#1966AA"
                        />
                        <path
                            d="M39.4325 12.7271C39.7825 12.8562 39.7992 13.3454 39.4592 13.4979L19.8875 22.2771C19.4425 22.4762 18.9325 22.4712 18.4925 22.2621L6.25 16.4712L6.25083 17.3846L18.6317 23.2487C18.9333 23.3921 19.4433 23.3971 19.8883 23.1979C19.8883 23.1979 39.4833 14.4054 39.5283 14.3804C39.7908 14.2346 39.97 14.0179 39.97 13.5312C39.97 12.8812 39.4325 12.7271 39.4325 12.7271Z"
                            fill="url(#paint19_linear_27_4417)"
                        />
                        <path
                            d="M39.5283 14.38C39.7908 14.2342 39.97 14.0175 39.97 13.5309C39.97 12.8892 39.4492 12.7317 39.435 12.7275C39.7825 12.8584 39.7983 13.345 39.4592 13.4975L20.0858 22.1875L19.9258 22.2767C19.6983 22.3792 19.4533 22.4259 19.2092 22.42C18.9642 22.4209 18.7192 22.3692 18.4925 22.2617L6.28833 16.4892L6.28916 17.385L18.67 23.2492C18.9717 23.3925 19.4817 23.3975 19.9258 23.1984C19.9258 23.1984 39.2225 14.54 39.5517 14.3867C39.5375 14.3825 39.5275 14.38 39.5283 14.38Z"
                            fill="url(#paint20_linear_27_4417)"
                        />
                        <path
                            d="M4.60084 16.6129L5.44834 17.0113C5.64084 17.1254 5.69334 17.3304 5.83751 17.3871C5.89834 17.4113 6.08584 17.3229 6.23584 17.3813L7.08334 17.7804V16.8671L6.25084 16.4688V16.4696C6.09834 16.3979 5.89918 16.4963 5.83668 16.4713C5.68334 16.4113 5.64001 16.1779 5.41501 16.0704L5.41751 16.0696L4.75418 15.7563C3.86334 15.3196 3.33334 15.7771 3.33334 16.3888V19.8504C3.33334 20.4946 3.70418 21.0813 4.28668 21.3563L5.42584 21.9046C5.64751 22.0046 5.85084 21.8988 5.99168 21.9788C6.05001 22.0121 6.09834 22.2254 6.24834 22.3004L7.08334 22.7029V21.7763L6.25084 21.3763C6.09918 21.3029 6.05084 21.0863 5.99168 21.0529C5.84834 20.9721 5.64168 21.0829 5.41751 20.9763L4.64334 20.6046C4.35251 20.4663 4.16668 20.1729 4.16668 19.8513V16.8188C4.16668 16.6654 4.26334 16.4538 4.60084 16.6129Z"
                            fill="#1966AA"
                        />
                        <path
                            d="M2.91667 10.6992L2.07667 10.3C1.78667 10.1584 1.54333 10.1284 1.40167 10.215C1.30583 10.2759 1.25 10.3992 1.25 10.555V14.0167C1.25 14.4967 1.53083 14.94 1.965 15.1459L2.91667 15.6042V10.6992Z"
                            fill="#103014"
                        />
                        <path
                            d="M36.9325 11.805L25.6542 7.36084L4.16333 15.7458V16.6675L15.9917 22.2625C16.4325 22.4708 16.9425 22.4767 17.3875 22.2767C17.3875 22.2767 37.0025 13.4925 37.0475 13.4675C37.31 13.3217 37.4742 13.105 37.4742 12.6183C37.4742 12.0308 36.9325 11.805 36.9325 11.805Z"
                            fill="url(#paint21_linear_27_4417)"
                        />
                        <path
                            d="M16.1317 16.9992L3.64167 11.0859C2.69167 10.6367 2.5 10.8317 2.5 11.4434V14.0726C2.5 14.7301 2.42583 14.9067 3.04833 15.2109C3.11833 15.2451 16.6558 21.6709 16.6558 21.6709L16.6575 21.6634L16.6592 21.6626V17.0992C16.4575 17.0984 16.2708 17.0651 16.1317 16.9992Z"
                            fill="url(#paint22_linear_27_4417)"
                        />
                        <path
                            d="M16.1317 16.9992L3.99 11.2484L3.64167 11.0859C2.69167 10.6367 2.5 10.8317 2.5 11.4434V14.0726C2.5 14.7301 2.42583 14.9067 3.04833 15.2109C3.11833 15.2451 16.6558 21.6709 16.6558 21.6709L16.6575 21.6634L16.6592 21.6626V17.0992C16.4575 17.0984 16.2708 17.0651 16.1317 16.9992Z"
                            fill="url(#paint23_radial_27_4417)"
                        />
                        <path
                            d="M36.2242 10.6593C36.2242 9.4551 36.7367 8.5601 37.0708 8.1001C37.0558 8.10926 37.0433 8.12176 37.0283 8.1301C36.9833 8.1551 17.3883 16.9476 17.3883 16.9476C17.1075 17.0734 16.8067 17.1101 16.5425 17.0901C16.3158 17.2918 15.8333 17.8718 15.8333 19.1851C15.8333 20.9251 16.6667 21.6701 16.6667 21.6701L36.775 12.6759C36.77 12.6651 36.7658 12.6593 36.7608 12.6484C36.7608 12.6484 36.2242 12.0884 36.2242 10.6593Z"
                            fill="url(#paint24_linear_27_4417)"
                        />
                        <path
                            d="M36.2242 10.6593C36.2242 9.4551 36.7367 8.5601 37.0708 8.1001C37.0558 8.10926 37.0433 8.12176 37.0283 8.1301C36.9833 8.1551 17.3883 16.9476 17.3883 16.9476C17.1075 17.0734 16.8058 17.1101 16.5425 17.0901C16.315 17.2909 15.8333 17.8709 15.8333 19.1851C15.8333 20.9251 16.6667 21.6701 16.6667 21.6701L36.775 12.6759C36.77 12.6651 36.7658 12.6593 36.7608 12.6484C36.7608 12.6484 36.2242 12.0884 36.2242 10.6593Z"
                            fill="url(#paint25_radial_27_4417)"
                        />
                        <path
                            d="M36.9325 6.89361L24.7033 2.39111L3.75 10.6378V11.1361L16.1317 16.9994C16.4333 17.1428 16.9433 17.1478 17.3883 16.9486L37.2058 8.05028C37.2058 7.67528 37.2058 7.34445 37.205 7.28278C37.2042 7.12111 37.1125 6.96028 36.9325 6.89361Z"
                            fill="#66C26A"
                        />
                        <path
                            d="M24.8483 2.44504C24.8275 2.43754 24.7758 2.41671 24.7033 2.39088C24.7033 2.39088 24.0775 2.57504 23.9375 2.48754C23.64 2.30088 23.8383 2.07338 23.8383 2.07338C23.2642 1.86254 22.6617 1.64088 22.6617 1.64088C22.2867 1.49921 21.87 1.49921 21.495 1.64921L1.78334 9.24254C1.46001 9.36504 0.833344 9.67421 0.833344 10.5742L1.25001 10.7534V10.5542C1.25001 10.3984 1.30501 10.275 1.40168 10.215C1.54168 10.1284 1.78668 10.1584 2.07668 10.3L2.73584 10.6134C2.75918 10.625 2.78668 10.6609 2.82918 10.7184C2.89751 10.8117 3.00084 10.9534 3.18251 11.0242C3.31918 11.0792 3.44418 11.0567 3.53501 11.0384L4.58334 11.5292V11.0334L25.6533 2.74088C25.6533 2.74088 25.1933 2.57421 24.8483 2.44504Z"
                            fill="#43A047"
                        />
                        <path
                            d="M3.22083 10.8441L24.7033 2.39074C24.5133 2.33074 24.3883 2.44741 24.27 2.42491C24.1542 2.37158 24.1033 2.16324 23.8392 2.07324L2.38083 10.4449L3.22083 10.8441Z"
                            fill="#43A047"
                        />
                        <path
                            d="M3.2175 10.8424L24.6992 2.39077C24.5117 2.33243 24.3875 2.44743 24.27 2.42493C24.1558 2.37243 24.1058 2.16743 23.8467 2.0791L2.39166 10.4499L3.2175 10.8424Z"
                            fill="#439F47"
                        />
                        <path
                            d="M3.21416 10.8409L24.6942 2.39094C24.5092 2.33344 24.3867 2.44677 24.27 2.4251C24.1583 2.37344 24.1083 2.1726 23.8533 2.08594L2.4025 10.4551L3.21416 10.8409Z"
                            fill="#429E46"
                        />
                        <path
                            d="M3.21166 10.8393L24.6892 2.39096C24.5067 2.33513 24.385 2.4468 24.27 2.42513C24.16 2.3743 24.1108 2.1768 23.8608 2.0918L2.41333 10.4601L3.21166 10.8393Z"
                            fill="#429D46"
                        />
                        <path
                            d="M3.20834 10.838L24.685 2.3905C24.5042 2.33633 24.3842 2.44633 24.27 2.42467C24.1617 2.37467 24.1133 2.18133 23.8683 2.09717L2.42334 10.4647L3.20834 10.838Z"
                            fill="#429C46"
                        />
                        <path
                            d="M3.20501 10.8364L24.68 2.39053C24.5017 2.33803 24.3825 2.44553 24.27 2.42469C24.1633 2.37553 24.1158 2.18636 23.875 2.10303L2.43417 10.4697L3.20501 10.8364Z"
                            fill="#419B45"
                        />
                        <path
                            d="M3.20167 10.8349L24.675 2.3907C24.4992 2.33986 24.3817 2.4457 24.27 2.42486C24.1658 2.37653 24.1183 2.1907 23.8825 2.10986L2.44501 10.4749L3.20167 10.8349Z"
                            fill="#419A45"
                        />
                        <path
                            d="M3.19834 10.8332L24.6708 2.39072C24.4975 2.34156 24.3808 2.44572 24.27 2.42489C24.1675 2.37822 24.12 2.19572 23.89 2.11572L2.45584 10.4799L3.19834 10.8332Z"
                            fill="#419945"
                        />
                        <path
                            d="M3.19582 10.8316L24.6658 2.39075C24.495 2.34325 24.3792 2.44492 24.27 2.42492C24.1692 2.37908 24.1225 2.19992 23.8975 2.12158L2.46582 10.4849L3.19582 10.8316Z"
                            fill="#409844"
                        />
                        <path
                            d="M3.19249 10.8299L24.6608 2.39077C24.4917 2.34494 24.3783 2.44494 24.27 2.42494C24.1708 2.37994 24.125 2.20494 23.9042 2.12744L2.47665 10.4899L3.19249 10.8299Z"
                            fill="#409744"
                        />
                        <path
                            d="M3.18915 10.829L24.6567 2.39066C24.49 2.34566 24.3775 2.44482 24.27 2.42399C24.1725 2.37982 24.1275 2.20816 23.9117 2.13232L2.48749 10.4948L3.18915 10.829Z"
                            fill="#409644"
                        />
                        <path
                            d="M3.18582 10.8275L24.6517 2.39083C24.4875 2.34749 24.3758 2.44499 24.27 2.42416C24.175 2.38083 24.13 2.21333 23.9192 2.13916L2.49832 10.5008L3.18582 10.8275Z"
                            fill="#3F9543"
                        />
                        <path
                            d="M3.1825 10.8259L24.6467 2.39085C24.485 2.34919 24.3742 2.44419 24.27 2.42419C24.1767 2.38169 24.1325 2.21752 23.9267 2.14502L2.50833 10.5059L3.1825 10.8259Z"
                            fill="#3F9443"
                        />
                        <path
                            d="M3.17917 10.8242L24.6417 2.39088C24.4817 2.35088 24.3733 2.44421 24.2692 2.42421C24.1775 2.38255 24.1342 2.22255 23.9325 2.15088L2.51917 10.5109L3.17917 10.8242Z"
                            fill="#3F9343"
                        />
                        <path
                            d="M3.17667 10.8226L24.6375 2.3909C24.48 2.35257 24.3725 2.44424 24.27 2.42424C24.18 2.38341 24.1375 2.22674 23.9408 2.15674L2.53 10.5159L3.17667 10.8226Z"
                            fill="#3E9242"
                        />
                        <path
                            d="M3.17333 10.8214L24.6325 2.39059C24.4775 2.35392 24.3708 2.44309 24.2692 2.42392C24.1817 2.38392 24.1392 2.23142 23.9475 2.16309L2.54083 10.5206L3.17333 10.8214Z"
                            fill="#3E9142"
                        />
                        <path
                            d="M3.17001 10.8199L24.6283 2.39159C24.4758 2.35659 24.3708 2.44409 24.27 2.42492C24.1842 2.38576 24.1425 2.23742 23.9558 2.16992L2.55084 10.5258L3.17001 10.8199Z"
                            fill="#3E9042"
                        />
                        <path
                            d="M3.16668 10.8183L24.6233 2.39161C24.4733 2.35745 24.3692 2.44411 24.27 2.42495C24.1858 2.38661 24.145 2.24161 23.9625 2.17578L2.56168 10.5308L3.16668 10.8183Z"
                            fill="#3D8F41"
                        />
                        <path
                            d="M3.16334 10.8166L24.6183 2.39164C24.47 2.35914 24.3675 2.44331 24.2692 2.42497C24.1867 2.38747 24.1467 2.24664 23.9692 2.18164L2.57251 10.5358L3.16334 10.8166Z"
                            fill="#3D8E41"
                        />
                        <path
                            d="M3.16084 10.8151L24.6142 2.39181C24.4683 2.36098 24.3667 2.44348 24.27 2.42514C24.19 2.38848 24.15 2.25098 23.9775 2.18848L2.58334 10.541L3.16084 10.8151Z"
                            fill="#3D8D41"
                        />
                        <path
                            d="M3.15751 10.8138L24.6092 2.39135C24.4658 2.36218 24.3658 2.44301 24.27 2.42468C24.1917 2.38885 24.1525 2.25551 23.985 2.19385L2.59418 10.5455L3.15751 10.8138Z"
                            fill="#3C8C40"
                        />
                        <path
                            d="M3.15416 10.8122L24.605 2.39137C24.4642 2.36387 24.365 2.44221 24.27 2.42471C24.1933 2.38971 24.155 2.25971 23.9917 2.19971L2.60416 10.5505L3.15416 10.8122Z"
                            fill="#3C8B40"
                        />
                        <path
                            d="M3.15082 10.8106L24.6 2.3914C24.4617 2.36557 24.3633 2.44223 24.27 2.42473C24.195 2.39057 24.1575 2.26473 23.9992 2.20557L2.61499 10.5556L3.15082 10.8106Z"
                            fill="#3C8A40"
                        />
                        <path
                            d="M3.14749 10.8089L24.595 2.39143C24.4583 2.36726 24.3617 2.44226 24.27 2.42476C24.1967 2.39143 24.16 2.26893 24.0067 2.21143L2.62582 10.5606L3.14749 10.8089Z"
                            fill="#3B893F"
                        />
                        <path
                            d="M3.14416 10.8074L24.5908 2.3916C24.4567 2.3691 24.3617 2.4416 24.27 2.42493C24.1992 2.39243 24.1625 2.2741 24.0142 2.21826L2.63666 10.5658L3.14416 10.8074Z"
                            fill="#3B893F"
                        />
                        <path
                            d="M3.14167 10.8058L24.5858 2.39162C24.4542 2.36995 24.36 2.44162 24.27 2.42495C24.2008 2.39329 24.165 2.27829 24.0208 2.22412L2.64667 10.5708L3.14167 10.8058Z"
                            fill="#3B883F"
                        />
                        <path
                            d="M3.13833 10.805L24.5808 2.39165C24.4517 2.37165 24.3583 2.44165 24.27 2.42498C24.2025 2.39415 24.1675 2.28331 24.0283 2.22998L2.6575 10.5758L3.13833 10.805Z"
                            fill="#3A873E"
                        />
                        <path
                            d="M3.135 10.8032L24.5767 2.39153C24.45 2.3732 24.3583 2.4407 24.27 2.42403C24.2042 2.39403 24.17 2.28736 24.0358 2.23486L2.66833 10.5815L3.135 10.8032Z"
                            fill="#3A863E"
                        />
                        <path
                            d="M3.13167 10.8017L24.5717 2.3917C24.4467 2.37503 24.3567 2.44087 24.27 2.4242C24.2067 2.39503 24.1725 2.2917 24.0433 2.2417L2.67917 10.5867L3.13167 10.8017Z"
                            fill="#3A853E"
                        />
                        <path
                            d="M3.12831 10.8001L24.5666 2.39173C24.4441 2.37673 24.355 2.44089 24.27 2.42423C24.2083 2.39589 24.1742 2.29673 24.05 2.24756L2.68915 10.5917L3.12831 10.8001Z"
                            fill="#39843E"
                        />
                        <path
                            d="M3.12581 10.7984L24.5625 2.39175C24.4425 2.37842 24.3542 2.44008 24.27 2.42425C24.21 2.39675 24.1766 2.30092 24.0575 2.25342L2.69998 10.5968L3.12581 10.7984Z"
                            fill="#39833D"
                        />
                        <path
                            d="M3.12248 10.7976L24.5575 2.39178C24.44 2.38011 24.3533 2.44011 24.27 2.42428C24.2116 2.39761 24.1791 2.30594 24.065 2.25928L2.71082 10.6018L3.12248 10.7976Z"
                            fill="#39823D"
                        />
                        <path
                            d="M3.11915 10.7956L24.5525 2.39146C24.4375 2.38063 24.3516 2.43979 24.27 2.42396C24.2141 2.39813 24.1816 2.30979 24.0716 2.26562L2.72165 10.6065L3.11915 10.7956Z"
                            fill="#38813D"
                        />
                        <path
                            d="M3.11583 10.794L24.5483 2.39148C24.435 2.38232 24.3508 2.43982 24.27 2.42398C24.2158 2.39898 24.1842 2.31482 24.0792 2.27148L2.73166 10.6115L3.11583 10.794Z"
                            fill="#38803C"
                        />
                        <path
                            d="M3.11249 10.7923L24.5433 2.39151C24.4325 2.38401 24.3492 2.43901 24.27 2.42401C24.2175 2.39984 24.1867 2.31901 24.0867 2.27734L2.74249 10.6165L3.11249 10.7923Z"
                            fill="#387F3C"
                        />
                        <path
                            d="M3.10916 10.7908L24.5383 2.39251C24.43 2.38668 24.3483 2.44001 24.27 2.42501C24.2192 2.40168 24.1892 2.32501 24.0942 2.28418L2.75333 10.6217L3.10916 10.7908Z"
                            fill="#377E3C"
                        />
                        <path
                            d="M3.10666 10.7892L24.5342 2.39254C24.4283 2.38837 24.3475 2.44004 24.27 2.42504C24.2208 2.40254 24.1917 2.32921 24.1008 2.29004L2.76416 10.6267L3.10666 10.7892Z"
                            fill="#377D3B"
                        />
                        <path
                            d="M3.10334 10.7881L24.5292 2.39222C24.4258 2.38972 24.3458 2.43889 24.27 2.42472C24.2233 2.40305 24.1942 2.33389 24.1083 2.29639L2.77417 10.6314L3.10334 10.7881Z"
                            fill="#377C3B"
                        />
                        <path
                            d="M3.1 10.7864L24.5242 2.39225C24.4225 2.39141 24.345 2.43891 24.27 2.42475C24.225 2.40391 24.1967 2.33891 24.1158 2.30225L2.785 10.6364L3.1 10.7864Z"
                            fill="#367B3B"
                        />
                        <path
                            d="M3.09667 10.7848L24.52 2.39227C24.4208 2.39227 24.3442 2.43894 24.27 2.42477C24.2267 2.40477 24.1992 2.34311 24.1233 2.30811L2.79584 10.6414L3.09667 10.7848Z"
                            fill="#367A3A"
                        />
                        <path
                            d="M3.09334 10.7831L24.515 2.3923C24.4183 2.39396 24.3425 2.43813 24.27 2.4248C24.2283 2.40563 24.2017 2.34813 24.13 2.31396L2.80667 10.6465L3.09334 10.7831Z"
                            fill="#36793A"
                        />
                        <path
                            d="M3.09082 10.7816L24.51 2.39247C24.4158 2.3958 24.3408 2.4383 24.2691 2.42497C24.23 2.40663 24.2033 2.35247 24.1367 2.3208L2.81665 10.6516L3.09082 10.7816Z"
                            fill="#35783A"
                        />
                        <path
                            d="M3.08748 10.7808L24.5058 2.39249C24.4142 2.39749 24.3408 2.43833 24.27 2.42499C24.2325 2.40749 24.2067 2.35749 24.145 2.32666L2.82748 10.6567L3.08748 10.7808Z"
                            fill="#357739"
                        />
                        <path
                            d="M3.08415 10.7792L24.5008 2.39252C24.4108 2.39919 24.3392 2.43752 24.27 2.42502C24.2342 2.40835 24.2092 2.36169 24.1525 2.33252L2.83832 10.6617L3.08415 10.7792Z"
                            fill="#347639"
                        />
                        <path
                            d="M3.08082 10.7775L24.4958 2.39255C24.4083 2.40088 24.3375 2.43755 24.2692 2.42505C24.235 2.40921 24.2108 2.36671 24.1583 2.33838L2.84915 10.6675L3.08082 10.7775Z"
                            fill="#347539"
                        />
                        <path
                            d="M3.07749 10.7759L24.4917 2.39257C24.4067 2.40257 24.3375 2.43757 24.27 2.42424C24.2375 2.41007 24.2142 2.3709 24.1667 2.34424L2.85916 10.6726L3.07749 10.7759Z"
                            fill="#347438"
                        />
                        <path
                            d="M3.07416 10.7743L24.4867 2.3926C24.4042 2.40343 24.3358 2.43676 24.27 2.42426C24.24 2.41093 24.2167 2.3751 24.1742 2.3501L2.87 10.6776L3.07416 10.7743Z"
                            fill="#337338"
                        />
                        <path
                            d="M3.07166 10.7735L24.4825 2.39262C24.4017 2.40512 24.335 2.43679 24.27 2.42429C24.2417 2.41096 24.2192 2.37929 24.1817 2.35596L2.88083 10.6826L3.07166 10.7735Z"
                            fill="#337238"
                        />
                        <path
                            d="M3.06833 10.7715L24.4775 2.3923C24.3992 2.40647 24.3333 2.43647 24.27 2.4248C24.2433 2.4123 24.2217 2.3848 24.1883 2.3623L2.89166 10.6873L3.06833 10.7715Z"
                            fill="#337137"
                        />
                        <path
                            d="M3.06501 10.7697L24.4725 2.39219C24.3967 2.40802 24.3325 2.43552 24.27 2.42385C24.245 2.41219 24.2242 2.38885 24.1958 2.36719L2.90167 10.6922L3.06501 10.7697Z"
                            fill="#327037"
                        />
                        <path
                            d="M3.06167 10.7682L24.4683 2.39236C24.395 2.40986 24.3317 2.43569 24.27 2.42402C24.2475 2.41402 24.2267 2.39319 24.2033 2.37402L2.91251 10.6974L3.06167 10.7682Z"
                            fill="#326F37"
                        />
                        <path
                            d="M3.05834 10.7666L24.4633 2.39238C24.3925 2.41155 24.33 2.43572 24.27 2.42405C24.2492 2.41488 24.2292 2.39822 24.2108 2.37988L2.92334 10.7024L3.05834 10.7666Z"
                            fill="#326E36"
                        />
                        <path
                            d="M36.9325 6.89355C37.2825 7.02272 37.2992 7.51189 36.9592 7.66439L17.3875 16.4436C16.9425 16.6427 16.4325 16.6377 15.9925 16.4286L3.75 10.6377L3.75083 11.5511L16.1317 17.4152C16.4333 17.5586 16.9433 17.5636 17.3883 17.3644C17.3883 17.3644 36.9833 8.57189 37.0283 8.54689C37.2908 8.40105 37.47 8.18439 37.47 7.69772C37.47 7.04772 36.9325 6.89355 36.9325 6.89355Z"
                            fill="url(#paint26_linear_27_4417)"
                        />
                        <path
                            d="M2.10084 10.7794L2.94834 11.1778C3.14084 11.2919 3.19334 11.4969 3.33751 11.5536C3.39834 11.5778 3.58584 11.4894 3.73584 11.5478L4.58334 11.9469V11.0336L3.75084 10.6353C3.59834 10.5636 3.39918 10.6628 3.33668 10.6378C3.18334 10.5778 3.14001 10.3444 2.91501 10.2369L2.91751 10.2361L2.25418 9.92278C1.36334 9.48611 0.833344 9.94361 0.833344 10.5553V14.0169C0.833344 14.6611 1.20418 15.2478 1.78668 15.5228L2.92584 16.0711C3.14751 16.1711 3.35084 16.0653 3.49168 16.1453C3.55001 16.1786 3.59834 16.3919 3.74834 16.4669L4.58334 16.8694V15.9428L3.75084 15.5428C3.59918 15.4694 3.55084 15.2528 3.49168 15.2194C3.34834 15.1386 3.14168 15.2494 2.91751 15.1428L2.14334 14.7711C1.85251 14.6328 1.66668 14.3394 1.66668 14.0178V10.9853C1.66668 10.8319 1.76334 10.6203 2.10084 10.7794Z"
                            fill="#326E36"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_27_4417"
                                x1="5.93749"
                                y1="32.3917"
                                x2="38.7633"
                                y2="32.3917"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#1E88E5" />
                                <stop offset="0.357" stop-color="#1E88E5" />
                                <stop offset="0.37" stop-color="#1E88E5" />
                                <stop offset="0.377" stop-color="#1B77C7" />
                                <stop offset="0.384" stop-color="#1A6AB2" />
                                <stop offset="0.389" stop-color="#1966AA" />
                                <stop offset="1" stop-color="#1863A6" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_27_4417"
                                x1="13.2558"
                                y1="29.6359"
                                x2="4.39916"
                                y2="48.4684"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.136" stop-color="#BFBEB0" />
                                <stop offset="0.169" stop-color="#E0DECF" />
                                <stop offset="0.271" stop-color="#E0DECF" />
                                <stop offset="0.277" stop-color="#D9D7C9" />
                                <stop offset="0.3" stop-color="#C7C5B8" />
                                <stop offset="0.323" stop-color="#BCBBAD" />
                                <stop offset="0.349" stop-color="#B8B7AA" />
                            </linearGradient>
                            <radialGradient
                                id="paint2_radial_27_4417"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(16.0601 34.6405) rotate(29.236) scale(13.9789 8.74372)"
                            >
                                <stop
                                    offset="0.875"
                                    stop-color="#B8B8AB"
                                    stop-opacity="0"
                                />
                                <stop
                                    offset="0.984"
                                    stop-color="#AFAFA3"
                                    stop-opacity="0.858"
                                />
                                <stop
                                    offset="1"
                                    stop-color="#ADADA1"
                                    stop-opacity="0.98"
                                />
                            </radialGradient>
                            <linearGradient
                                id="paint3_linear_27_4417"
                                x1="26.2358"
                                y1="27.4468"
                                x2="35.3433"
                                y2="47.6959"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.111" stop-color="#808076" />
                                <stop offset="0.128" stop-color="#86867C" />
                                <stop offset="0.151" stop-color="#97978C" />
                                <stop offset="0.177" stop-color="#B2B2A6" />
                                <stop offset="0.188" stop-color="#BFBFB2" />
                                <stop offset="0.285" stop-color="#BFBFB1" />
                                <stop offset="0.406" stop-color="#808077" />
                                <stop offset="0.498" stop-color="#86867D" />
                                <stop offset="0.621" stop-color="#96958E" />
                                <stop offset="0.762" stop-color="#B1B0AA" />
                                <stop offset="0.914" stop-color="#D7D4D0" />
                                <stop offset="1" stop-color="#EFEBE9" />
                            </linearGradient>
                            <radialGradient
                                id="paint4_radial_27_4417"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(42.7833 31.8654) rotate(-13.5624) scale(26.0596 12.1383)"
                            >
                                <stop
                                    offset="0.907"
                                    stop-color="#B8B8AB"
                                    stop-opacity="0"
                                />
                                <stop
                                    offset="0.944"
                                    stop-color="#B1B1A4"
                                    stop-opacity="0.393"
                                />
                                <stop
                                    offset="1"
                                    stop-color="#ADADA1"
                                    stop-opacity="0.98"
                                />
                            </radialGradient>
                            <linearGradient
                                id="paint5_linear_27_4417"
                                x1="5.55166"
                                y1="29.7069"
                                x2="39.2717"
                                y2="29.7069"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#0C66B3" />
                                <stop offset="0.357" stop-color="#0C66B4" />
                                <stop offset="0.365" stop-color="#066EC9" />
                                <stop offset="0.37" stop-color="#0471D1" />
                                <stop offset="0.373" stop-color="#096EC7" />
                                <stop offset="0.383" stop-color="#1568B2" />
                                <stop offset="0.389" stop-color="#1966AA" />
                                <stop offset="1" stop-color="#1863A6" />
                            </linearGradient>
                            <linearGradient
                                id="paint6_linear_27_4417"
                                x1="22.265"
                                y1="26.9299"
                                x2="29.3367"
                                y2="36.9774"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop />
                                <stop offset="0.371" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="paint7_linear_27_4417"
                                x1="3.43749"
                                y1="26.5582"
                                x2="36.2633"
                                y2="26.5582"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#FB8C00" />
                                <stop offset="0.357" stop-color="#FB8C00" />
                                <stop offset="0.37" stop-color="#FB8C00" />
                                <stop offset="0.373" stop-color="#F68408" />
                                <stop offset="0.382" stop-color="#EA701D" />
                                <stop offset="0.389" stop-color="#E66825" />
                                <stop offset="1" stop-color="#E65100" />
                            </linearGradient>
                            <linearGradient
                                id="paint8_linear_27_4417"
                                x1="10.7558"
                                y1="23.8024"
                                x2="1.89999"
                                y2="42.6349"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.136" stop-color="#BFBEB0" />
                                <stop offset="0.169" stop-color="#E0DECF" />
                                <stop offset="0.271" stop-color="#E0DECF" />
                                <stop offset="0.277" stop-color="#D9D7C9" />
                                <stop offset="0.3" stop-color="#C7C5B8" />
                                <stop offset="0.323" stop-color="#BCBBAD" />
                                <stop offset="0.349" stop-color="#B8B7AA" />
                            </linearGradient>
                            <radialGradient
                                id="paint9_radial_27_4417"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(13.5607 28.8072) rotate(29.236) scale(13.9789 8.74372)"
                            >
                                <stop
                                    offset="0.875"
                                    stop-color="#B8B8AB"
                                    stop-opacity="0"
                                />
                                <stop
                                    offset="0.984"
                                    stop-color="#AFAFA3"
                                    stop-opacity="0.858"
                                />
                                <stop
                                    offset="1"
                                    stop-color="#ADADA1"
                                    stop-opacity="0.98"
                                />
                            </radialGradient>
                            <linearGradient
                                id="paint10_linear_27_4417"
                                x1="23.7358"
                                y1="21.6133"
                                x2="32.8433"
                                y2="41.8624"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.111" stop-color="#808076" />
                                <stop offset="0.128" stop-color="#86867C" />
                                <stop offset="0.151" stop-color="#97978C" />
                                <stop offset="0.177" stop-color="#B2B2A6" />
                                <stop offset="0.188" stop-color="#BFBFB2" />
                                <stop offset="0.285" stop-color="#BFBFB1" />
                                <stop offset="0.406" stop-color="#808077" />
                                <stop offset="0.498" stop-color="#86867D" />
                                <stop offset="0.621" stop-color="#96958E" />
                                <stop offset="0.762" stop-color="#B1B0AA" />
                                <stop offset="0.914" stop-color="#D7D4D0" />
                                <stop offset="1" stop-color="#EFEBE9" />
                            </linearGradient>
                            <radialGradient
                                id="paint11_radial_27_4417"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(40.2836 26.0327) rotate(-13.5624) scale(26.0596 12.1383)"
                            >
                                <stop
                                    offset="0.907"
                                    stop-color="#B8B8AB"
                                    stop-opacity="0"
                                />
                                <stop
                                    offset="0.944"
                                    stop-color="#B1B1A4"
                                    stop-opacity="0.393"
                                />
                                <stop
                                    offset="1"
                                    stop-color="#ADADA1"
                                    stop-opacity="0.98"
                                />
                            </radialGradient>
                            <linearGradient
                                id="paint12_linear_27_4417"
                                x1="3.05166"
                                y1="23.8734"
                                x2="36.7717"
                                y2="23.8734"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#FB8C00" />
                                <stop offset="0.357" stop-color="#FB8C00" />
                                <stop offset="0.37" stop-color="#FB8C00" />
                                <stop offset="0.373" stop-color="#F68408" />
                                <stop offset="0.382" stop-color="#EA701D" />
                                <stop offset="0.389" stop-color="#E66825" />
                                <stop offset="1" stop-color="#E65100" />
                            </linearGradient>
                            <linearGradient
                                id="paint13_linear_27_4417"
                                x1="17.0642"
                                y1="23.5147"
                                x2="9.03165"
                                y2="30.6489"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop />
                                <stop offset="0.217" stop-opacity="0.092" />
                                <stop offset="0.239" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="paint14_linear_27_4417"
                                x1="6.77083"
                                y1="20.7252"
                                x2="39.5967"
                                y2="20.7252"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#1E88E5" />
                                <stop offset="0.357" stop-color="#1E88E5" />
                                <stop offset="0.37" stop-color="#1E88E5" />
                                <stop offset="0.377" stop-color="#1B77C7" />
                                <stop offset="0.384" stop-color="#1A6AB2" />
                                <stop offset="0.389" stop-color="#1966AA" />
                                <stop offset="1" stop-color="#1863A6" />
                            </linearGradient>
                            <linearGradient
                                id="paint15_linear_27_4417"
                                x1="14.0892"
                                y1="17.9694"
                                x2="5.2325"
                                y2="36.8019"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.136" stop-color="#BFBEB0" />
                                <stop offset="0.169" stop-color="#E0DECF" />
                                <stop offset="0.271" stop-color="#E0DECF" />
                                <stop offset="0.277" stop-color="#D9D7C9" />
                                <stop offset="0.3" stop-color="#C7C5B8" />
                                <stop offset="0.323" stop-color="#BCBBAD" />
                                <stop offset="0.349" stop-color="#B8B7AA" />
                            </linearGradient>
                            <radialGradient
                                id="paint16_radial_27_4417"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(16.8939 22.9742) rotate(29.236) scale(13.9789 8.74372)"
                            >
                                <stop
                                    offset="0.875"
                                    stop-color="#B8B8AB"
                                    stop-opacity="0"
                                />
                                <stop
                                    offset="0.984"
                                    stop-color="#AFAFA3"
                                    stop-opacity="0.858"
                                />
                                <stop
                                    offset="1"
                                    stop-color="#ADADA1"
                                    stop-opacity="0.98"
                                />
                            </radialGradient>
                            <linearGradient
                                id="paint17_linear_27_4417"
                                x1="27.0692"
                                y1="15.7803"
                                x2="36.1767"
                                y2="36.0294"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.111" stop-color="#808076" />
                                <stop offset="0.128" stop-color="#86867C" />
                                <stop offset="0.151" stop-color="#97978C" />
                                <stop offset="0.177" stop-color="#B2B2A6" />
                                <stop offset="0.188" stop-color="#BFBFB2" />
                                <stop offset="0.285" stop-color="#BFBFB1" />
                                <stop offset="0.406" stop-color="#808077" />
                                <stop offset="0.498" stop-color="#86867D" />
                                <stop offset="0.621" stop-color="#96958E" />
                                <stop offset="0.762" stop-color="#B1B0AA" />
                                <stop offset="0.914" stop-color="#D7D4D0" />
                                <stop offset="1" stop-color="#EFEBE9" />
                            </linearGradient>
                            <radialGradient
                                id="paint18_radial_27_4417"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(43.6169 20.2) rotate(-13.5624) scale(26.0596 12.1383)"
                            >
                                <stop
                                    offset="0.907"
                                    stop-color="#B8B8AB"
                                    stop-opacity="0"
                                />
                                <stop
                                    offset="0.944"
                                    stop-color="#B1B1A4"
                                    stop-opacity="0.393"
                                />
                                <stop
                                    offset="1"
                                    stop-color="#ADADA1"
                                    stop-opacity="0.98"
                                />
                            </radialGradient>
                            <linearGradient
                                id="paint19_linear_27_4417"
                                x1="6.385"
                                y1="18.0404"
                                x2="40.105"
                                y2="18.0404"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#0C66B3" />
                                <stop offset="0.357" stop-color="#0C66B4" />
                                <stop offset="0.365" stop-color="#066EC9" />
                                <stop offset="0.37" stop-color="#0471D1" />
                                <stop offset="0.373" stop-color="#096EC7" />
                                <stop offset="0.383" stop-color="#1568B2" />
                                <stop offset="0.389" stop-color="#1966AA" />
                                <stop offset="1" stop-color="#1863A6" />
                            </linearGradient>
                            <linearGradient
                                id="paint20_linear_27_4417"
                                x1="23.0983"
                                y1="15.2634"
                                x2="30.17"
                                y2="25.3109"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop />
                                <stop offset="0.371" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="paint21_linear_27_4417"
                                x1="4.27083"
                                y1="14.8917"
                                x2="37.0967"
                                y2="14.8917"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#43A047" />
                                <stop offset="0.357" stop-color="#43A047" />
                                <stop offset="0.37" stop-color="#43A047" />
                                <stop offset="0.372" stop-color="#3F9A43" />
                                <stop offset="0.382" stop-color="#338537" />
                                <stop offset="0.389" stop-color="#2E7D32" />
                                <stop offset="1" stop-color="#2E7D32" />
                            </linearGradient>
                            <linearGradient
                                id="paint22_linear_27_4417"
                                x1="11.5892"
                                y1="12.1359"
                                x2="2.73333"
                                y2="30.9684"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.136" stop-color="#BFBEB0" />
                                <stop offset="0.169" stop-color="#E0DECF" />
                                <stop offset="0.271" stop-color="#E0DECF" />
                                <stop offset="0.277" stop-color="#D9D7C9" />
                                <stop offset="0.3" stop-color="#C7C5B8" />
                                <stop offset="0.323" stop-color="#BCBBAD" />
                                <stop offset="0.349" stop-color="#B8B7AA" />
                            </linearGradient>
                            <radialGradient
                                id="paint23_radial_27_4417"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(14.3937 17.1409) rotate(29.236) scale(13.9789 8.74372)"
                            >
                                <stop
                                    offset="0.875"
                                    stop-color="#B8B8AB"
                                    stop-opacity="0"
                                />
                                <stop
                                    offset="0.984"
                                    stop-color="#AFAFA3"
                                    stop-opacity="0.858"
                                />
                                <stop
                                    offset="1"
                                    stop-color="#ADADA1"
                                    stop-opacity="0.98"
                                />
                            </radialGradient>
                            <linearGradient
                                id="paint24_linear_27_4417"
                                x1="24.5692"
                                y1="9.94676"
                                x2="33.6767"
                                y2="30.1959"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.111" stop-color="#808076" />
                                <stop offset="0.128" stop-color="#86867C" />
                                <stop offset="0.151" stop-color="#97978C" />
                                <stop offset="0.177" stop-color="#B2B2A6" />
                                <stop offset="0.188" stop-color="#BFBFB2" />
                                <stop offset="0.285" stop-color="#BFBFB1" />
                                <stop offset="0.406" stop-color="#808077" />
                                <stop offset="0.498" stop-color="#86867D" />
                                <stop offset="0.621" stop-color="#96958E" />
                                <stop offset="0.762" stop-color="#B1B0AA" />
                                <stop offset="0.914" stop-color="#D7D4D0" />
                                <stop offset="1" stop-color="#EFEBE9" />
                            </linearGradient>
                            <radialGradient
                                id="paint25_radial_27_4417"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(41.1172 14.3664) rotate(-13.5624) scale(26.0596 12.1383)"
                            >
                                <stop
                                    offset="0.907"
                                    stop-color="#B8B8AB"
                                    stop-opacity="0"
                                />
                                <stop
                                    offset="0.944"
                                    stop-color="#B1B1A4"
                                    stop-opacity="0.393"
                                />
                                <stop
                                    offset="1"
                                    stop-color="#ADADA1"
                                    stop-opacity="0.98"
                                />
                            </radialGradient>
                            <linearGradient
                                id="paint26_linear_27_4417"
                                x1="3.885"
                                y1="12.2069"
                                x2="37.605"
                                y2="12.2069"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#43A047" />
                                <stop offset="0.357" stop-color="#43A047" />
                                <stop offset="0.37" stop-color="#43A047" />
                                <stop offset="0.372" stop-color="#3F9A43" />
                                <stop offset="0.382" stop-color="#338537" />
                                <stop offset="0.389" stop-color="#2E7D32" />
                                <stop offset="1" stop-color="#2E7D32" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <p class="heading !text-3xl lg:!text-4xl">Resources</p>
            </div>
            <ul class="flex flex-col gap-6">
                <li
                    class="flex gap-3 items-center text-slate-100 text-xl font-medium"
                >
                    <Tick />
                    Stream setup checklist
                </li>
                <li
                    class="flex gap-3 items-center text-slate-100 text-xl font-medium"
                >
                    <Tick />
                    Software & hardware list
                </li>
                <li
                    class="flex gap-3 items-center text-slate-100 text-xl font-medium"
                >
                    <Tick />
                    Growth strategies
                </li>
            </ul>
        </div>
        <!-- 3 -->
        <div
            class="flex flex-col gap-8 xl:p-12 xl:bg-transparent-blue rounded-2xl"
        >
            <div class="flex flex-col gap-4 md:flex-row">
                <div>
                    <svg
                        width="40"
                        height="41"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24.6167 33.3083L33.6525 36.3692C34.51 36.6592 35.3033 35.7925 34.9375 34.9642L31.2125 26.5283L24.6167 33.3083Z"
                            fill="#BCDEE8"
                        />
                        <path
                            d="M20 35.3332C29.665 35.3332 37.5 28.804 37.5 20.7498C37.5 12.6957 29.665 6.1665 20 6.1665C10.335 6.1665 2.5 12.6957 2.5 20.7498C2.5 28.804 10.335 35.3332 20 35.3332Z"
                            fill="url(#paint0_radial_27_3818)"
                        />
                        <defs>
                            <radialGradient
                                id="paint0_radial_27_3818"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(20 20.7496) rotate(180) scale(17.15 14.3717)"
                            >
                                <stop offset="0.514" stop-color="#EDF6F9" />
                                <stop offset="0.638" stop-color="#E9F4F7" />
                                <stop offset="0.765" stop-color="#DDEEF2" />
                                <stop offset="0.892" stop-color="#C8E3EA" />
                                <stop offset="1" stop-color="#B1D7E0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <p class="heading !text-3xl lg:!text-4xl">Community</p>
            </div>
            <ul class="flex flex-col gap-6">
                <li
                    class="flex gap-3 items-center text-slate-100 text-xl font-medium"
                >
                    <Tick />
                    Access to the Discord server
                </li>
                <li
                    class="flex gap-3 items-center text-slate-100 text-xl font-medium"
                >
                    <Tick />
                    On-going support & advice
                </li>
                <li
                    class="flex gap-3 items-center text-slate-100 text-xl font-medium"
                >
                    <Tick />
                    Network & learn from alumini
                </li>
            </ul>
        </div>
    </section>
    <!-- Lessons Section -->
    <section
        class="flex flex-col gap-8 px-6 md:grid md:grid-cols-2 max-w-sm md:max-w-screen-xl mx-auto"
    >
        <div
            class="flex flex-col gap-8 items-start lg:bg-lines lg:bg-contain lg:bg-bottom lg:bg-no-repeat lg:bg-transparent-blue rounded-2xl bg-blend-overlay md:p-12 bg-opacity-25"
        >
            <div class="flex flex-col gap-4">
                <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.38999 27.3095C3.35699 26.3635 2.46499 25.1965 2.13999 23.8335C1.75499 22.2175 2.20799 20.5085 2.92499 19.0095C4.97299 14.7305 9.12499 11.7025 13.639 10.2445C18.153 8.78651 23.016 8.75551 27.731 9.28251C30.787 9.62351 33.902 10.2245 36.506 11.8615C38.851 13.3355 40.62 15.5465 42.343 17.7155C43.426 19.0795 44.573 20.8215 43.906 22.4305C43.469 23.4845 42.342 24.1115 41.22 24.3165C40.097 24.5215 38.945 24.3855 37.804 24.3595C33.224 24.2535 28.858 25.9035 24.628 27.4645C20.392 29.0285 15.966 30.6715 11.374 30.4615C8.83799 30.3445 6.23599 29.0005 4.38999 27.3095Z"
                        fill="url(#paint0_radial_64_1481)"
                    />
                    <path
                        d="M4.38999 27.3095C3.35699 26.3635 2.46499 25.1965 2.13999 23.8335C1.75499 22.2175 2.20799 20.5085 2.92499 19.0095C4.97299 14.7305 9.12499 11.7025 13.639 10.2445C18.153 8.78651 23.016 8.75551 27.731 9.28251C30.787 9.62351 33.902 10.2245 36.506 11.8615C38.851 13.3355 40.62 15.5465 42.343 17.7155C43.426 19.0795 44.573 20.8215 43.906 22.4305C43.469 23.4845 42.342 24.1115 41.22 24.3165C40.097 24.5215 38.945 24.3855 37.804 24.3595C33.224 24.2535 28.858 25.9035 24.628 27.4645C20.392 29.0285 15.966 30.6715 11.374 30.4615C8.83799 30.3445 6.23599 29.0005 4.38999 27.3095Z"
                        fill="url(#paint1_radial_64_1481)"
                    />
                    <path
                        d="M20.663 36.6816C21.359 37.4116 22.362 37.7646 23.351 37.9616C24.436 38.1776 25.579 38.2336 26.633 37.8986C27.687 37.5636 28.64 36.7886 28.991 35.7396C29.142 35.2886 29.168 34.7586 28.899 34.3656C28.582 33.9016 27.968 33.7656 27.411 33.6896C25.941 33.4876 24.45 33.4416 22.97 33.5506C22.23 33.6056 21.493 33.6986 20.763 33.8306C20.114 33.9476 19.937 34.2036 19.931 34.8916C19.926 35.5496 20.213 36.2076 20.663 36.6816Z"
                        fill="url(#paint2_radial_64_1481)"
                    />
                    <path
                        d="M26.8801 38.5619C28.0061 39.7439 29.6301 40.3149 31.2311 40.6339C32.9871 40.9839 34.8381 41.0749 36.5451 40.5319C38.2511 39.9889 39.7951 38.7349 40.3631 37.0369C40.6071 36.3069 40.6491 35.4489 40.2151 34.8129C39.7021 34.0619 38.7071 33.8419 37.8061 33.7179C35.4261 33.3909 33.0121 33.3169 30.6171 33.4939C29.4191 33.5819 28.2261 33.7339 27.0441 33.9469C25.9931 34.1369 25.7071 34.5499 25.6971 35.6639C25.6871 36.7289 26.1501 37.7949 26.8801 38.5619Z"
                        fill="url(#paint3_radial_64_1481)"
                    />
                    <path
                        d="M12.957 33.9651C11.704 32.9981 10.62 31.6441 10.502 30.0661C10.366 28.2501 11.573 26.5371 13.123 25.5801C14.673 24.6231 16.519 24.2891 18.325 24.0491C20.131 23.8091 21.974 23.6391 23.663 22.9581C24.877 22.4681 26.14 21.7051 27.4 22.0581C27.936 22.2081 28.42 22.5561 28.975 22.5931C29.727 22.6431 30.383 22.1211 30.954 21.6291C31.709 20.9781 32.464 20.3281 33.219 19.6771C34.273 18.7691 35.384 17.8301 36.739 17.5131C38.094 17.1961 39.757 17.7281 40.242 19.0321C40.519 19.7771 40.462 20.7751 41.16 21.1561C41.728 21.4671 42.427 21.1351 43.074 21.1761C43.778 21.2211 44.389 21.7231 44.749 22.3301C45.109 22.9371 45.261 23.6411 45.402 24.3331C45.886 26.7011 46.31 29.1681 45.733 31.5151C45.156 33.8621 43.319 36.0681 40.915 36.3171C39.345 36.4801 37.826 35.8151 36.322 35.3351C33.05 34.2921 29.513 34.1121 26.148 34.7881C24.714 35.0761 23.375 35.6641 21.951 35.9651C20.494 36.2731 18.975 36.2751 17.514 35.9921C15.867 35.6771 14.287 34.9911 12.957 33.9651Z"
                        fill="url(#paint4_radial_64_1481)"
                    />
                    <path
                        d="M12.957 33.9651C11.704 32.9981 10.62 31.6441 10.502 30.0661C10.366 28.2501 11.573 26.5371 13.123 25.5801C14.673 24.6231 16.519 24.2891 18.325 24.0491C20.131 23.8091 21.974 23.6391 23.663 22.9581C24.877 22.4681 26.14 21.7051 27.4 22.0581C27.936 22.2081 28.42 22.5561 28.975 22.5931C29.727 22.6431 30.383 22.1211 30.954 21.6291C31.709 20.9781 32.464 20.3281 33.219 19.6771C34.273 18.7691 35.384 17.8301 36.739 17.5131C38.094 17.1961 39.757 17.7281 40.242 19.0321C40.519 19.7771 40.462 20.7751 41.16 21.1561C41.728 21.4671 42.427 21.1351 43.074 21.1761C43.778 21.2211 44.389 21.7231 44.749 22.3301C45.109 22.9371 45.261 23.6411 45.402 24.3331C45.886 26.7011 46.31 29.1681 45.733 31.5151C45.156 33.8621 43.319 36.0681 40.915 36.3171C39.345 36.4801 37.826 35.8151 36.322 35.3351C33.05 34.2921 29.513 34.1121 26.148 34.7881C24.714 35.0761 23.375 35.6641 21.951 35.9651C20.494 36.2731 18.975 36.2751 17.514 35.9921C15.867 35.6771 14.287 34.9911 12.957 33.9651Z"
                        fill="url(#paint5_radial_64_1481)"
                    />
                    <path
                        d="M17.0409 23.2534C17.1159 23.5114 17.2159 23.7894 17.4439 23.9274C17.6289 24.0394 17.8579 24.0344 18.0729 24.0224C19.9619 23.9134 21.8179 23.4724 23.6319 22.9294C24.2309 22.7504 24.8339 22.5564 25.3709 22.2324C25.9079 21.9084 26.3799 21.4374 26.5989 20.8434C26.8609 20.1294 26.7319 19.3374 26.5989 18.5874C26.4629 17.8194 26.3269 17.0514 26.1899 16.2834C26.1589 16.1074 26.1149 15.9124 25.9679 15.8134C25.7779 15.6864 25.5259 15.7864 25.3239 15.8934C24.3029 16.4324 23.3369 17.0794 22.2809 17.5434C21.2249 18.0074 20.0419 18.2814 18.9199 18.0244C18.2689 17.8754 16.8819 17.4024 16.6949 18.4494C16.5229 19.4154 16.5639 20.4984 16.6799 21.4674C16.7519 22.0714 16.8719 22.6694 17.0409 23.2534Z"
                        fill="url(#paint6_radial_64_1481)"
                    />
                    <path
                        d="M10.55 22.5724C10.367 21.9734 10.392 21.2194 10.894 20.8444C11.213 20.6054 11.641 20.5834 12.04 20.5714C13.141 20.5384 14.242 20.5044 15.343 20.4714C15.674 20.4614 16.032 20.4584 16.302 20.6504C16.585 20.8504 16.698 21.2104 16.793 21.5434C17.04 22.4104 17.287 23.2774 17.534 24.1434C16.674 24.3474 15.779 24.5014 14.934 24.7614C14.307 24.9544 13.952 25.1644 13.262 25.0104C12.3 24.7974 10.55 23.7494 10.55 22.5724Z"
                        fill="url(#paint7_radial_64_1481)"
                    />
                    <path
                        d="M25.293 26.3663C25.115 26.9913 25.241 27.7363 25.716 28.1633C26.084 28.4943 26.814 28.3563 27.299 28.4153C29.266 28.6533 31.061 28.6793 32.943 28.0393C34.013 27.6753 35.058 27.1623 35.877 26.3613C36.696 25.5603 37.272 24.4443 37.262 23.2783C37.261 23.1593 37.464 22.8513 37.398 22.7533C37.287 22.5883 37.892 22.1933 37.698 22.1873C35.975 22.1353 33.208 22.8373 31.516 23.1773C29.832 23.5163 28.198 24.0553 26.62 24.7503C25.983 25.0323 25.488 25.6823 25.293 26.3663Z"
                        fill="url(#paint8_radial_64_1481)"
                    />
                    <path
                        d="M5.23997 27.8605C4.86597 27.4775 4.51197 26.9835 4.59497 26.4555C4.65597 26.0615 4.96097 25.7355 5.31797 25.5585C5.67597 25.3815 6.08297 25.3325 6.48097 25.3145C7.77397 25.2575 9.08097 25.5115 10.259 26.0485C10.509 26.1625 10.756 26.2915 10.954 26.4815C11.152 26.6715 11.295 26.9335 11.29 27.2075C11.285 27.4845 11.136 27.7345 11.015 27.9835C10.746 28.5365 10.7 29.0765 10.59 29.6665C10.503 30.1335 10.108 30.1585 9.70697 30.1045C8.63597 29.9615 7.59397 29.5785 6.67697 29.0095C6.15297 28.6865 5.66897 28.3005 5.23997 27.8605Z"
                        fill="url(#paint9_radial_64_1481)"
                    />
                    <path
                        d="M13.227 13.5556C13.883 13.9316 14.305 14.6836 14.283 15.4396C15.149 14.0536 16.048 13.5886 17.289 12.5246C16.865 12.6046 16.507 11.8386 16.076 11.8136C15.971 11.8076 15.971 11.8046 15.867 11.7956C15.763 11.7866 15.659 11.7776 15.555 11.7686C14.596 11.6846 13.597 11.5056 12.635 11.5226C12.047 11.5326 11.764 11.8656 11.555 12.3796C11.392 12.7796 11.241 13.1866 11.079 13.5856C11.755 13.2336 12.543 13.1636 13.227 13.5556Z"
                        fill="url(#paint10_radial_64_1481)"
                    />
                    <path
                        d="M17.2889 12.5245C17.6829 12.5805 18.0119 12.5965 18.4079 12.5565C18.8039 12.5175 19.3109 12.7035 19.5999 12.9775C20.0529 13.4075 20.3569 14.2245 20.4769 14.8365C20.6039 15.4835 21.6799 14.4985 22.2579 14.1825C22.9659 13.7955 23.82 13.4555 24.2839 12.7955C24.7479 12.1355 25.0319 10.9755 24.4759 10.3905C24.0079 9.89852 22.9549 9.94152 22.2769 9.91452C21.2799 9.87552 20.2829 9.83552 19.2869 9.79652C18.6059 9.76952 17.7489 9.54652 17.0779 9.63152C15.4619 9.83652 15.8189 12.3065 17.2889 12.5245Z"
                        fill="url(#paint11_radial_64_1481)"
                    />
                    <path
                        d="M24.553 12.5111C25.013 12.2001 25.495 11.8801 26.046 11.8031C26.596 11.7261 27.235 11.9721 27.421 12.4951C27.479 12.6561 27.516 12.8631 27.679 12.9151C27.831 12.9641 27.978 12.8381 28.089 12.7231C28.321 12.4811 28.554 12.2401 28.786 11.9981C28.836 11.9461 28.887 11.8931 28.92 11.8281C29.102 11.4691 28.646 10.9971 28.869 10.6621C28.989 10.4831 29.284 10.3781 29.235 10.1691C29.202 10.0271 29.026 9.98015 28.881 9.96115C27.791 9.81915 26.693 9.74315 25.594 9.73415C25.317 9.73215 25.04 9.73315 24.762 9.74015C24.666 9.74215 24.43 9.70815 24.346 9.75215C24.197 9.83015 24.251 9.78315 24.305 9.93715C24.453 10.3571 24.699 10.6671 24.755 11.1351C24.791 11.4171 24.833 12.3221 24.553 12.5111Z"
                        fill="url(#paint12_radial_64_1481)"
                    />
                    <path
                        d="M31.347 19.258C34.1498 19.258 36.422 17.5495 36.422 15.442C36.422 13.3345 34.1498 11.626 31.347 11.626C28.5441 11.626 26.272 13.3345 26.272 15.442C26.272 17.5495 28.5441 19.258 31.347 19.258Z"
                        fill="url(#paint13_radial_64_1481)"
                    />
                    <path
                        d="M35.684 30.6771C36.724 30.8301 37.658 30.1131 38.309 29.3191L40.318 26.8281C40.955 25.9801 41.748 25.2001 42.167 24.2801C42.586 23.3651 42.263 22.2051 41.488 21.5871C41.303 21.4241 41.068 21.3471 40.816 21.1241C40.59 20.9021 40.469 20.6171 40.39 20.3501C40.23 19.8141 40.193 19.2761 39.956 18.8531C39.476 17.9831 38.384 17.5771 37.389 17.6231C36.376 17.6711 35.422 18.1941 34.591 18.8151C33.755 19.4481 32.966 20.1801 32.153 20.8711L30.939 21.9211C30.525 22.2661 30.068 22.6261 29.478 22.7651C28.869 22.9241 28.264 22.6521 27.806 22.4421C27.334 22.2201 26.864 22.1441 26.363 22.2181C25.362 22.3571 24.438 22.9331 23.407 23.3001C22.375 23.6631 21.304 23.8611 20.242 24.0061C18.124 24.2961 15.967 24.4201 14.039 25.2841C13.081 25.7081 12.224 26.3421 11.58 27.1661C10.933 27.9791 10.53 29.0101 10.586 30.0601C10.589 30.1051 10.555 30.1441 10.509 30.1471C10.465 30.1501 10.427 30.1161 10.423 30.0731C10.326 28.9781 10.713 27.8771 11.362 27.0021C11.998 26.1071 12.914 25.4341 13.9 24.9801C15.894 24.0581 18.094 23.9111 20.184 23.5961C21.234 23.4391 22.273 23.2321 23.255 22.8731C24.231 22.5261 25.171 21.9401 26.307 21.7771C26.865 21.6881 27.491 21.8001 27.983 22.0411C28.478 22.2681 28.926 22.4641 29.386 22.3461C29.848 22.2431 30.271 21.9311 30.67 21.5981L31.885 20.5571C32.703 19.8691 33.485 19.1481 34.355 18.4941C35.222 17.8561 36.232 17.2901 37.376 17.2381C38.477 17.1961 39.703 17.6321 40.285 18.6771C40.567 19.2011 40.594 19.7641 40.742 20.2471C40.811 20.4901 40.913 20.7111 41.07 20.8671C41.214 21.0061 41.495 21.1231 41.716 21.3111C42.611 22.0321 42.967 23.3591 42.485 24.4141C42.263 24.9361 41.916 25.3711 41.577 25.7841L40.555 27.0191L38.503 29.4861C37.825 30.2861 36.815 31.0661 35.653 30.8801C35.597 30.8711 35.559 30.8191 35.568 30.7631C35.573 30.7061 35.628 30.6691 35.684 30.6771Z"
                        fill="#891D46"
                    />
                    <path
                        d="M38.25 21.9447C37.933 22.0907 37.678 22.3507 37.541 22.6577C37.402 22.9677 37.414 23.3187 37.527 23.6317C37.646 23.9507 37.881 24.2007 38.2 24.3527C38.501 24.4927 38.939 24.7707 38.867 25.2267C38.862 25.2617 38.829 25.2857 38.793 25.2807C38.76 25.2757 38.737 25.2457 38.739 25.2127L38.74 25.2047C38.762 24.8727 38.424 24.6727 38.109 24.5257C37.768 24.3767 37.459 24.0747 37.321 23.7117C36.991 22.9747 37.476 22.0397 38.22 21.8587C38.244 21.8527 38.269 21.8677 38.275 21.8917C38.28 21.9137 38.269 21.9357 38.25 21.9447Z"
                        fill="#891D46"
                    />
                    <path
                        d="M37.458 23.4683C37.103 24.0523 37.234 24.8343 36.831 25.4813C36.451 26.0923 35.922 26.6063 35.318 26.9933C35.014 27.1843 34.703 27.3603 34.363 27.4913C34.028 27.6203 33.689 27.7163 33.394 27.8783C32.785 28.1693 32.514 28.9493 32.779 29.5473C32.805 29.6053 32.778 29.6743 32.72 29.7003C32.662 29.7263 32.593 29.6993 32.567 29.6413L32.566 29.6393C32.254 28.9243 32.601 28.0193 33.294 27.6963C33.621 27.5213 33.969 27.4303 34.293 27.3073C34.614 27.1883 34.923 27.0183 35.218 26.8373C35.807 26.4693 36.32 25.9813 36.693 25.3943C37.071 24.8253 36.95 24.0423 37.34 23.3953C37.36 23.3623 37.403 23.3513 37.436 23.3713C37.469 23.3913 37.48 23.4343 37.46 23.4673L37.458 23.4683Z"
                        fill="#891D46"
                    />
                    <path
                        d="M32.172 20.3814C32.564 20.0604 33.09 20.2264 33.37 20.4914C33.667 20.7534 33.867 21.1014 33.961 21.4744C34.165 22.2264 33.845 23.0584 33.233 23.4984C33.197 23.5244 33.146 23.5164 33.12 23.4804C33.095 23.4454 33.102 23.3964 33.135 23.3694C33.677 22.9414 33.922 22.1834 33.715 21.5404C33.62 21.2204 33.43 20.9254 33.176 20.7214C32.937 20.5124 32.586 20.4664 32.401 20.6414C32.331 20.7074 32.221 20.7044 32.155 20.6354C32.089 20.5654 32.092 20.4554 32.161 20.3894C32.165 20.3874 32.169 20.3844 32.172 20.3814Z"
                        fill="#891D46"
                    />
                    <path
                        d="M33.1311 27.9652C32.2581 28.4192 31.2721 28.6062 30.3021 28.6622C29.3281 28.7252 28.3561 28.6552 27.3971 28.5512C26.9231 28.4932 26.4241 28.4842 25.9461 28.2772C25.4561 28.0822 25.1321 27.5652 25.1051 27.0592C25.0581 26.5492 25.2391 26.0412 25.5291 25.6452C25.8151 25.2402 26.1751 24.9102 26.5301 24.5852C26.5491 24.5672 26.5791 24.5682 26.5971 24.5872C26.6141 24.6062 26.6131 24.6352 26.5951 24.6532C25.9281 25.3082 25.1961 26.0912 25.3001 27.0402C25.3401 27.4962 25.6111 27.9092 26.0351 28.0712C26.4531 28.2452 26.9401 28.2532 27.4191 28.2992C29.3201 28.4472 31.2931 28.5872 33.0591 27.8152C33.1011 27.7972 33.1501 27.8162 33.1681 27.8582C33.1871 27.8982 33.1691 27.9452 33.1311 27.9652Z"
                        fill="#891D46"
                    />
                    <path
                        d="M18.801 26.8729C18.773 27.5259 19.162 28.1439 19.683 28.5239C20.218 28.9049 20.899 29.0539 21.57 29.0709C22.93 29.1319 24.291 28.7059 25.436 27.9559C25.494 27.9179 25.571 27.9339 25.609 27.9909C25.645 28.0459 25.632 28.1189 25.581 28.1589C24.449 29.0379 22.995 29.4759 21.555 29.4469C20.837 29.4139 20.089 29.2419 19.484 28.7929C18.888 28.3529 18.468 27.6169 18.551 26.8519C18.558 26.7829 18.62 26.7339 18.689 26.7409C18.756 26.7489 18.804 26.8079 18.801 26.8729Z"
                        fill="#891D46"
                    />
                    <path
                        d="M40.206 27.0194C40.877 26.9564 41.56 27.1004 42.145 27.4244C42.436 27.5854 42.712 27.7874 42.927 28.0564C43.142 28.3174 43.288 28.6824 43.22 29.0404C43.062 29.7494 42.479 30.1424 42.38 30.7664C42.24 31.3654 42.361 32.0324 42.731 32.5324C42.752 32.5614 42.746 32.6014 42.718 32.6224C42.69 32.6434 42.65 32.6374 42.628 32.6104C42.221 32.0854 42.074 31.3794 42.209 30.7284C42.313 30.0464 42.909 29.5774 43.001 29.0054C43.085 28.4174 42.546 27.9304 42.018 27.6614C41.474 27.3764 40.844 27.2624 40.241 27.3334C40.154 27.3444 40.076 27.2824 40.065 27.1964C40.054 27.1094 40.116 27.0314 40.202 27.0204L40.206 27.0194Z"
                        fill="#891D46"
                    />
                    <path
                        d="M43.077 28.8415C43.438 28.6725 43.865 28.6795 44.214 28.8535C44.563 29.0285 44.818 29.3625 44.897 29.7365C44.903 29.7665 44.884 29.7955 44.855 29.8015C44.826 29.8075 44.798 29.7895 44.791 29.7615C44.705 29.4245 44.458 29.1345 44.148 28.9975C43.838 28.8595 43.464 28.8735 43.171 29.0285C43.12 29.0555 43.058 29.0355 43.031 28.9855C43.004 28.9345 43.024 28.8725 43.074 28.8455C43.074 28.8435 43.077 28.8415 43.077 28.8415Z"
                        fill="#891D46"
                    />
                    <path
                        d="M4.931 27.4942C4.525 27.3282 4.36 26.8512 4.425 26.4582C4.478 26.0402 4.794 25.7092 5.129 25.5152C5.826 25.1342 6.604 25.0422 7.367 25.0342C8.897 25.0462 10.44 25.6302 11.558 26.7262C11.649 26.8162 11.651 26.9622 11.561 27.0542C11.471 27.1462 11.325 27.1472 11.233 27.0572C11.231 27.0552 11.227 27.0512 11.227 27.0512C10.241 26.0152 8.809 25.4072 7.36 25.3502C6.643 25.3302 5.878 25.4052 5.249 25.7252C4.943 25.8922 4.681 26.1542 4.627 26.4912C4.562 26.8202 4.688 27.2052 4.998 27.3412C5.04 27.3602 5.059 27.4092 5.041 27.4512C5.022 27.4922 4.972 27.5112 4.931 27.4942Z"
                        fill="#891D46"
                    />
                    <path
                        d="M5.45001 17.0082C5.57301 17.8702 5.20201 18.6982 4.77801 19.4082C4.34701 20.1262 3.83701 20.7982 3.57901 21.5772C3.31201 22.3472 3.40701 23.2192 3.81601 23.9132C4.23001 24.6012 4.90501 25.1662 5.70501 25.2492C5.77401 25.2562 5.82401 25.3182 5.81601 25.3862C5.80801 25.4542 5.74701 25.5052 5.67901 25.4972L5.67201 25.4962C4.78201 25.3872 4.05701 24.7532 3.63201 24.0182C3.20201 23.2662 3.11901 22.3292 3.41201 21.5212C3.69601 20.7092 4.22401 20.0392 4.65901 19.3362C5.08901 18.6412 5.45501 17.8452 5.34901 17.0212C5.34501 16.9932 5.36401 16.9682 5.39201 16.9642C5.42001 16.9612 5.44501 16.9812 5.45001 17.0082Z"
                        fill="#891D46"
                    />
                    <path
                        d="M13.933 25.3365C12.939 25.3385 11.9 24.9295 11.26 24.1395C10.61 23.3665 10.295 22.3965 10.157 21.4405C10.017 20.4715 10.145 19.4845 10.402 18.5625C10.66 17.6355 11.041 16.7575 11.447 15.8975C11.461 15.8665 11.498 15.8535 11.528 15.8685C11.558 15.8825 11.571 15.9175 11.558 15.9475C10.825 17.6745 10.182 19.5455 10.504 21.3885C10.648 22.2985 10.966 23.2025 11.558 23.8815C12.142 24.5735 13.032 24.9075 13.933 24.8985C14.054 24.8975 14.153 24.9945 14.154 25.1155C14.155 25.2365 14.058 25.3355 13.937 25.3365H13.933Z"
                        fill="#891D46"
                    />
                    <path
                        d="M6.58202 20.0606C6.77902 17.9186 7.81502 15.8626 9.43202 14.4226C10.233 13.7196 11.273 13.1256 12.421 13.2346C12.99 13.2966 13.521 13.5686 13.919 13.9776C14.315 14.3796 14.576 14.9776 14.471 15.5756C14.456 15.6696 14.367 15.7336 14.273 15.7176C14.179 15.7016 14.115 15.6136 14.131 15.5196L14.132 15.5166C14.31 14.5506 13.357 13.6336 12.389 13.5246C11.373 13.4066 10.374 13.9326 9.58902 14.6026C7.99602 15.9726 6.94202 17.9686 6.71402 20.0736C6.71002 20.1096 6.67802 20.1356 6.64202 20.1316C6.60502 20.1286 6.57902 20.0966 6.58202 20.0606Z"
                        fill="#891D46"
                    />
                    <path
                        d="M12.849 20.4851C12.854 19.2741 13.068 18.0611 13.495 16.9231C13.926 15.7891 14.514 14.7061 15.345 13.7931C16.154 12.8791 17.434 12.2451 18.708 12.4891C19.99 12.6631 21 14.1191 20.472 15.3681C20.445 15.4321 20.372 15.4611 20.308 15.4341C20.246 15.4081 20.218 15.3341 20.241 15.2721C20.633 14.2021 19.754 12.9611 18.645 12.8261C17.514 12.6251 16.389 13.2061 15.611 14.0451C14.82 14.8951 14.229 15.9481 13.803 17.0391C13.387 18.1401 13.141 19.3081 13.099 20.4901C13.097 20.5591 13.039 20.6131 12.97 20.6111C12.902 20.6091 12.849 20.5521 12.849 20.4851Z"
                        fill="#891D46"
                    />
                    <path
                        d="M17.497 16.3515C16.473 18.7455 16.522 21.5395 17.581 23.8455C17.648 23.9915 17.584 24.1655 17.438 24.2325C17.292 24.2995 17.118 24.2355 17.051 24.0895C17.049 24.0845 17.046 24.0785 17.044 24.0735C16.061 21.5505 16.206 18.6635 17.383 16.2995C17.398 16.2685 17.436 16.2555 17.467 16.2715C17.497 16.2855 17.51 16.3215 17.497 16.3515Z"
                        fill="#891D46"
                    />
                    <path
                        d="M25.802 22.002C26.307 21.303 26.679 20.384 26.572 19.55C26.444 18.674 26.053 17.81 26.023 16.838C25.96 14.933 26.976 13.027 28.637 12.053C30.302 11.1 32.46 11.125 34.088 12.127C35.717 13.128 36.701 15.046 36.572 16.933C36.567 17.002 36.508 17.054 36.439 17.049C36.372 17.044 36.321 16.987 36.323 16.92C36.381 15.131 35.407 13.356 33.899 12.439C32.385 11.524 30.364 11.527 28.85 12.419C27.326 13.293 26.347 15.06 26.391 16.827C26.402 17.704 26.775 18.564 26.907 19.504C26.972 20.004 26.851 20.485 26.69 20.925C26.52 21.368 26.3 21.788 25.996 22.16C25.952 22.213 25.874 22.221 25.82 22.178C25.769 22.136 25.759 22.062 25.798 22.008L25.802 22.002Z"
                        fill="#891D46"
                    />
                    <path
                        d="M28.89 18.9055C29.361 17.6345 30.538 16.6475 31.898 16.4105C33.259 16.1775 34.724 16.7085 35.628 17.7865C35.701 17.8725 35.689 18.0015 35.603 18.0745C35.517 18.1475 35.388 18.1355 35.315 18.0495C35.314 18.0475 35.311 18.0455 35.31 18.0435C34.541 17.0545 33.206 16.5055 31.94 16.6805C30.674 16.8545 29.511 17.7485 29.018 18.9555C29.004 18.9905 28.964 19.0075 28.928 18.9935C28.894 18.9785 28.877 18.9395 28.89 18.9055Z"
                        fill="#891D46"
                    />
                    <path
                        d="M31.059 16.7581C30.543 16.2821 30.314 15.5491 30.457 14.8801C30.603 14.2111 31.109 13.6551 31.743 13.4461C31.79 13.4301 31.841 13.4561 31.857 13.5031C31.872 13.5491 31.848 13.5981 31.803 13.6151C31.243 13.8291 30.818 14.3561 30.725 14.9311C30.629 15.5061 30.865 16.1241 31.3 16.4831C31.378 16.5471 31.389 16.6621 31.325 16.7401C31.261 16.8181 31.146 16.8291 31.068 16.7651C31.065 16.7631 31.061 16.7601 31.059 16.7581Z"
                        fill="#891D46"
                    />
                    <path
                        d="M39.408 18.1715C39.314 17.9025 39.479 17.6465 39.597 17.4305C39.739 17.2145 39.936 17.0355 40.168 16.9225C40.633 16.6995 41.195 16.7565 41.595 17.0465C41.624 17.0675 41.631 17.1085 41.61 17.1385C41.59 17.1665 41.551 17.1735 41.522 17.1555C41.145 16.9235 40.645 16.9235 40.282 17.1375C40.101 17.2435 39.952 17.4025 39.853 17.5855C39.73 17.7675 39.754 17.9745 39.658 18.1735L39.652 18.1865C39.62 18.2525 39.541 18.2795 39.475 18.2475C39.443 18.2315 39.42 18.2035 39.408 18.1715Z"
                        fill="#891D46"
                    />
                    <path
                        d="M21.896 17.969C21.37 18.131 20.762 18.036 20.308 17.683C19.862 17.326 19.615 16.713 19.736 16.13C19.853 15.543 20.276 15.102 20.713 14.782C21.16 14.454 21.666 14.244 22.146 14.042C22.631 13.844 23.101 13.642 23.51 13.354C23.908 13.057 24.237 12.652 24.442 12.198C24.638 11.741 24.695 11.22 24.559 10.73C24.429 10.24 24.162 9.78598 23.829 9.38998C23.804 9.36098 23.806 9.31798 23.835 9.29198C23.864 9.26698 23.908 9.27098 23.934 9.29898C24.276 9.70398 24.587 10.154 24.745 10.678C24.913 11.198 24.877 11.782 24.68 12.295C24.286 13.348 23.265 14.023 22.295 14.391C21.811 14.598 21.332 14.784 20.927 15.077C20.52 15.361 20.177 15.745 20.063 16.199C19.947 16.648 20.121 17.162 20.481 17.477C20.833 17.801 21.371 17.938 21.859 17.826C21.898 17.817 21.938 17.841 21.947 17.88C21.955 17.92 21.932 17.958 21.896 17.969Z"
                        fill="#891D46"
                    />
                    <path
                        d="M28.868 12.0894C28.608 11.6284 28.604 11.0464 28.852 10.5924C29.1 10.1384 29.558 9.83241 30.048 9.73841C30.077 9.73241 30.105 9.75141 30.111 9.78041C30.116 9.80841 30.098 9.83541 30.071 9.84241C29.616 9.95241 29.209 10.2624 29.012 10.6734C28.813 11.0824 28.847 11.5884 29.084 11.9624C29.121 12.0204 29.104 12.0984 29.045 12.1354C28.987 12.1724 28.909 12.1554 28.872 12.0974C28.871 12.0954 28.869 12.0914 28.868 12.0894Z"
                        fill="#891D46"
                    />
                    <path
                        d="M17.55 12.8478C16.594 12.8088 15.854 11.9528 15.868 11.0558C15.894 10.1568 16.672 9.37584 17.55 9.38484C17.591 9.38484 17.624 9.41884 17.624 9.46084C17.624 9.50084 17.59 9.53384 17.55 9.53484C16.768 9.55984 16.114 10.3138 16.139 11.0558C16.154 11.7998 16.846 12.4778 17.55 12.4548C17.659 12.4508 17.75 12.5358 17.754 12.6438C17.758 12.7528 17.673 12.8438 17.565 12.8478C17.561 12.8478 17.555 12.8478 17.55 12.8478Z"
                        fill="#891D46"
                    />
                    <path
                        d="M10.7591 13.6147C10.9091 13.1347 11.2701 12.8347 11.4711 12.4627C11.6661 12.1237 11.6631 11.5547 11.2461 11.3957C11.2251 11.3877 11.2141 11.3637 11.2221 11.3427C11.2301 11.3227 11.2521 11.3127 11.2721 11.3177C11.5081 11.3817 11.6721 11.6117 11.7101 11.8427C11.7541 12.0767 11.7191 12.3197 11.6181 12.5367C11.4181 12.9537 11.0871 13.2847 11.0001 13.6777C10.9861 13.7457 10.9191 13.7887 10.8511 13.7737C10.7831 13.7587 10.7401 13.6927 10.7551 13.6247C10.7571 13.6227 10.7581 13.6177 10.7591 13.6147Z"
                        fill="#891D46"
                    />
                    <path
                        d="M6.98999 14.1141C6.94999 14.5451 7.18499 14.9831 7.54899 15.1871C7.91099 15.3921 8.39399 15.3581 8.71499 15.1191C8.76999 15.0781 8.84899 15.0891 8.88999 15.1451C8.93099 15.2001 8.91999 15.2791 8.86399 15.3201C8.86199 15.3221 8.85899 15.3241 8.85699 15.3251C8.43299 15.5991 7.87199 15.5971 7.45999 15.3351C7.04899 15.0701 6.82699 14.5701 6.89599 14.1031C6.89999 14.0771 6.92399 14.0591 6.94999 14.0631C6.97499 14.0661 6.99299 14.0891 6.98999 14.1141Z"
                        fill="#891D46"
                    />
                    <path
                        d="M2.41002 20.7405C2.93402 20.6355 3.42802 21.1015 3.54602 21.6245C3.56402 21.6915 3.52402 21.7605 3.45702 21.7785C3.39002 21.7965 3.32102 21.7565 3.30302 21.6895C3.30102 21.6835 3.30002 21.6715 3.29902 21.6655C3.27002 21.2355 2.92202 20.7445 2.41402 20.7655C2.40702 20.7665 2.40102 20.7615 2.40002 20.7545C2.40002 20.7475 2.40402 20.7415 2.41002 20.7405Z"
                        fill="#891D46"
                    />
                    <path
                        d="M24.1669 12.7789C24.6909 12.2899 25.3309 11.8049 26.1169 11.7619C26.4959 11.7399 26.9139 11.8309 27.2139 12.1019C27.5089 12.3569 27.7169 12.7529 27.6569 13.1569C27.6489 13.2069 27.6029 13.2419 27.5529 13.2339C27.5069 13.2269 27.4739 13.1859 27.4749 13.1399C27.4799 12.8129 27.3119 12.4959 27.0559 12.2909C26.8009 12.0869 26.4669 11.9899 26.1279 12.0009C25.4349 12.0159 24.8179 12.4419 24.2879 12.9119C24.2509 12.9449 24.1939 12.9419 24.1609 12.9039C24.1279 12.8679 24.1319 12.8119 24.1669 12.7789Z"
                        fill="#891D46"
                    />
                    <path
                        d="M35.066 12.9621C35.385 13.0801 35.767 13.0591 36.084 12.8951C36.401 12.7321 36.653 12.4251 36.751 12.0661C36.753 12.0591 36.761 12.0541 36.768 12.0561C36.775 12.0581 36.779 12.0651 36.778 12.0721C36.714 12.4471 36.487 12.7991 36.154 13.0151C35.821 13.2301 35.393 13.3031 34.993 13.2011C34.926 13.1841 34.885 13.1171 34.901 13.0491C34.918 12.9821 34.985 12.9411 35.053 12.9571C35.057 12.9581 35.062 12.9601 35.066 12.9621Z"
                        fill="#891D46"
                    />
                    <path
                        d="M6.23596 26.7611C7.84297 26.3741 9.65796 26.9601 10.75 28.2671C10.823 28.3541 10.812 28.4841 10.725 28.5571C10.638 28.6301 10.508 28.6191 10.435 28.5321C10.433 28.5291 10.43 28.5261 10.428 28.5231C9.50797 27.2921 7.82996 26.6251 6.26996 26.9191C6.22596 26.9271 6.18397 26.8991 6.17597 26.8551C6.16797 26.8131 6.19496 26.7721 6.23596 26.7611Z"
                        fill="#891D46"
                    />
                    <path
                        d="M20.76 33.7616C21.712 33.6796 22.624 33.2936 23.371 32.7076C23.748 32.4216 24.068 32.0516 24.495 31.7726C24.915 31.4586 25.521 31.4446 25.986 31.5836C26.919 31.8506 27.859 31.9896 28.813 31.9596C29.762 31.9336 30.705 31.7526 31.594 31.4286C31.7 31.3896 31.817 31.4446 31.856 31.5506C31.895 31.6566 31.84 31.7736 31.734 31.8126C31.734 31.8126 31.731 31.8136 31.729 31.8146C30.791 32.1316 29.804 32.2966 28.818 32.3006C27.834 32.3106 26.841 32.1366 25.919 31.8486C25.463 31.7126 25.011 31.7106 24.622 31.9756C24.229 32.2176 23.896 32.5796 23.496 32.8716C22.707 33.4606 21.754 33.8386 20.771 33.8996C20.733 33.9016 20.7 33.8736 20.698 33.8356C20.694 33.7976 20.723 33.7656 20.76 33.7616Z"
                        fill="#891D46"
                    />
                    <path
                        d="M16.753 33.5728C16.145 33.3138 15.651 32.7858 15.433 32.1408C15.216 31.4958 15.283 30.7568 15.628 30.1478C15.683 30.0498 15.807 30.0138 15.906 30.0688C16.004 30.1238 16.04 30.2478 15.985 30.3468C15.983 30.3508 15.979 30.3568 15.976 30.3608C15.654 30.8428 15.542 31.4818 15.694 32.0628C15.845 32.6438 16.259 33.1658 16.811 33.4488C16.845 33.4658 16.858 33.5078 16.841 33.5418C16.825 33.5738 16.786 33.5868 16.753 33.5728Z"
                        fill="#891D46"
                    />
                    <path
                        d="M41.44 21.3589C41.577 21.1659 41.818 21.1549 42.013 21.0859C42.22 21.0369 42.432 21.0139 42.642 21.0169C43.062 21.0229 43.477 21.1309 43.835 21.3369C43.866 21.3549 43.877 21.3949 43.859 21.4269C43.842 21.4569 43.805 21.4679 43.774 21.4539C43.42 21.2919 43.028 21.2299 42.649 21.2599C42.459 21.2749 42.272 21.3129 42.095 21.3739C41.905 21.4139 41.775 21.5609 41.569 21.5739L41.56 21.5749C41.485 21.5799 41.42 21.5229 41.415 21.4469C41.413 21.4139 41.423 21.3839 41.44 21.3589Z"
                        fill="#891D46"
                    />
                    <path
                        d="M37.911 35.7485C38.091 35.3245 38.414 35.0054 38.62 34.6104C38.844 34.2304 39.032 33.8285 39.137 33.4045C39.343 32.5785 39.187 31.5745 38.49 31.0205C38.461 30.9985 38.456 30.9575 38.478 30.9285C38.5 30.9005 38.54 30.8955 38.569 30.9155C39.349 31.4875 39.56 32.5565 39.375 33.4585C39.281 33.9165 39.099 34.3504 38.881 34.7564C38.644 35.1494 38.453 35.5745 38.116 35.8915C38.065 35.9395 37.984 35.9375 37.935 35.8855C37.9 35.8485 37.892 35.7935 37.911 35.7485Z"
                        fill="#891D46"
                    />
                    <path
                        d="M36.2521 30.9023C36.1321 31.0703 36.0481 31.3103 36.1651 31.6053C36.2671 31.8873 36.3771 32.2493 36.3441 32.5863C36.3031 33.2633 35.9221 33.9083 35.3361 34.2303C35.3041 34.2473 35.2641 34.2363 35.2471 34.2043C35.2301 34.1733 35.2411 34.1353 35.2701 34.1163C35.7931 33.7883 36.1021 33.1743 36.1011 32.5783C36.1071 32.2703 36.0111 32.0113 35.8821 31.7013C35.8241 31.5473 35.7701 31.3613 35.7911 31.1633C35.8201 30.9953 35.8741 30.7053 36.1351 30.6803C36.2091 30.6733 36.2751 30.7273 36.2821 30.8013C36.2851 30.8353 36.2761 30.8673 36.2581 30.8923L36.2521 30.9023Z"
                        fill="#891D46"
                    />
                    <path
                        d="M23.358 32.7182C23.662 32.6072 23.978 32.7182 24.275 32.7812C24.573 32.8682 24.859 33.0092 25.099 33.2102C25.577 33.6092 25.857 34.2642 25.705 34.8742C25.696 34.9092 25.661 34.9312 25.625 34.9222C25.591 34.9142 25.57 34.8792 25.576 34.8462C25.679 34.2912 25.385 33.7202 24.948 33.4012C24.726 33.2392 24.468 33.1302 24.198 33.0702C23.927 32.9862 23.651 33.0482 23.37 32.9672C23.3 32.9502 23.257 32.8792 23.275 32.8082C23.286 32.7672 23.321 32.7332 23.358 32.7182Z"
                        fill="#891D46"
                    />
                    <path
                        d="M14.56 28.1176C14.486 28.6756 14.489 29.3106 14.957 29.6276C15.403 29.9436 15.975 30.0986 16.526 30.1136C17.639 30.1596 18.743 29.5266 19.214 28.5516C19.263 28.4506 19.385 28.4076 19.487 28.4566C19.588 28.5056 19.631 28.6276 19.582 28.7296C19.581 28.7316 19.579 28.7356 19.578 28.7376C18.984 29.8466 17.719 30.4806 16.514 30.3856C15.912 30.3426 15.32 30.1626 14.83 29.7886C14.582 29.5986 14.419 29.2916 14.384 28.9886C14.343 28.6846 14.383 28.3876 14.424 28.1006C14.429 28.0626 14.463 28.0356 14.501 28.0406C14.537 28.0456 14.564 28.0806 14.56 28.1176Z"
                        fill="#891D46"
                    />
                    <path
                        d="M19.58 28.7521C20.211 29.1611 20.993 29.2651 21.745 29.2491C22.733 29.2291 23.717 29.0181 24.626 28.6321C24.938 28.5001 25.271 28.3131 25.371 27.9891C25.46 27.6981 25.333 27.3911 25.294 27.0891C25.238 26.6541 25.373 26.2121 25.589 25.8301C25.805 25.4481 26.1 25.1181 26.392 24.7911C24.744 24.4791 23.028 24.5381 21.405 24.9611C20.84 25.1081 20.281 25.3021 19.789 25.6151C19.307 25.9221 18.679 26.4741 18.638 27.0861C18.593 27.7511 19.042 28.4041 19.58 28.7521Z"
                        fill="url(#paint14_radial_64_1481)"
                    />
                    <path
                        opacity="0.059"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.694 35.6975 25.691 35.7315 25.694 35.7655C25.704 35.8965 25.722 36.0265 25.747 36.1555C25.872 36.7915 26.174 37.4075 26.591 37.9325C27.747 37.2015 28.904 36.8045 30.061 36.6565C30.972 36.5395 31.883 36.5765 32.793 36.7275C33.771 36.8895 34.747 37.1815 35.723 37.5525C36.812 37.9665 37.902 38.4765 38.992 38.9965C39.265 38.7645 39.515 38.5085 39.735 38.2305C39.746 38.2145 39.757 38.1985 39.768 38.1835C39.919 37.9625 40.052 37.7295 40.164 37.4865C40.23 37.3285 40.287 37.1645 40.334 36.9955C40.392 36.7835 40.424 36.5595 40.439 36.3335C39.246 36.3435 38.08 35.9315 36.926 35.5425C36.71 35.4695 36.495 35.3985 36.28 35.3295C34.655 34.8145 32.964 34.5125 31.262 34.4225C29.548 34.3315 27.822 34.4555 26.14 34.7935C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.118"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.7 35.6935 25.694 35.7265 25.699 35.7575C25.716 35.8785 25.74 35.9975 25.772 36.1175C25.926 36.7065 26.248 37.2775 26.677 37.7665C27.83 37.0735 28.983 36.6995 30.137 36.5645C31.042 36.4575 31.946 36.4985 32.85 36.6485C33.822 36.8105 34.793 37.0975 35.762 37.4625C36.846 37.8705 37.931 38.3735 39.018 38.8715C39.294 38.6575 39.548 38.4195 39.775 38.1595C39.786 38.1435 39.797 38.1275 39.807 38.1125C39.953 37.8915 40.081 37.6585 40.187 37.4145C40.239 37.2665 40.282 37.1125 40.316 36.9535C40.358 36.7535 40.374 36.5425 40.376 36.3275C39.192 36.3255 38.035 35.9145 36.89 35.5295C36.676 35.4575 36.462 35.3865 36.248 35.3195C34.633 34.8105 32.954 34.5115 31.264 34.4225C29.55 34.3315 27.824 34.4555 26.142 34.7935C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.176"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.706 35.6895 25.697 35.7215 25.704 35.7495C25.728 35.8605 25.758 35.9695 25.796 36.0795C25.98 36.6215 26.32 37.1475 26.761 37.5995C27.91 36.9455 29.061 36.5935 30.21 36.4715C31.109 36.3745 32.007 36.4185 32.903 36.5675C33.87 36.7285 34.834 37.0115 35.796 37.3695C36.875 37.7715 37.955 38.2675 39.039 38.7445C39.317 38.5475 39.576 38.3285 39.809 38.0865C39.819 38.0705 39.83 38.0555 39.84 38.0395C39.982 37.8185 40.104 37.5845 40.205 37.3415C40.243 37.2035 40.272 37.0595 40.293 36.9105C40.318 36.7235 40.32 36.5235 40.308 36.3215C39.134 36.3075 37.986 35.8965 36.849 35.5165C36.636 35.4455 36.424 35.3755 36.211 35.3085C34.607 34.8055 32.939 34.5105 31.261 34.4215C29.547 34.3305 27.821 34.4545 26.139 34.7925C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.235"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.712 35.6865 25.7 35.7165 25.71 35.7425C25.741 35.8435 25.778 35.9425 25.821 36.0425C26.035 36.5365 26.394 37.0195 26.847 37.4345C27.992 36.8185 29.14 36.4895 30.286 36.3805C31.178 36.2935 32.07 36.3405 32.96 36.4895C33.921 36.6505 34.88 36.9275 35.834 37.2805C36.908 37.6765 37.984 38.1655 39.064 38.6205C39.345 38.4415 39.609 38.2405 39.848 38.0155C39.858 37.9995 39.869 37.9845 39.879 37.9685C40.016 37.7465 40.132 37.5135 40.229 37.2705C40.252 37.1425 40.268 37.0085 40.276 36.8695C40.285 36.6945 40.272 36.5075 40.246 36.3175C39.081 36.2925 37.942 35.8815 36.814 35.5055C36.603 35.4355 36.391 35.3655 36.18 35.2995C34.586 34.8035 32.931 34.5115 31.264 34.4225C29.55 34.3315 27.824 34.4555 26.142 34.7935C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.294"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.719 35.6825 25.703 35.7115 25.715 35.7345C25.753 35.8255 25.796 35.9135 25.846 36.0045C26.089 36.4515 26.467 36.8895 26.932 37.2675C28.074 36.6895 29.218 36.3845 30.361 36.2875C31.247 36.2105 32.132 36.2615 33.015 36.4095C33.971 36.5695 34.923 36.8425 35.871 37.1895C36.94 37.5805 38.011 38.0615 39.088 38.4945C39.372 38.3335 39.64 38.1505 39.886 37.9435C39.896 37.9275 39.906 37.9125 39.916 37.8965C40.048 37.6745 40.159 37.4405 40.25 37.1985C40.259 37.0805 40.261 36.9565 40.256 36.8265C40.249 36.6635 40.22 36.4895 40.18 36.3105C39.024 36.2735 37.894 35.8635 36.774 35.4905C36.564 35.4205 36.354 35.3525 36.145 35.2875C34.562 34.7975 32.918 34.5085 31.263 34.4215C29.549 34.3305 27.823 34.4545 26.141 34.7925C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.353"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.725 35.6785 25.706 35.7065 25.72 35.7265C25.765 35.8075 25.814 35.8855 25.87 35.9665C26.143 36.3665 26.54 36.7605 27.017 37.1005C28.155 36.5605 29.297 36.2785 30.436 36.1945C31.316 36.1275 32.195 36.1815 33.071 36.3285C34.021 36.4885 34.968 36.7565 35.908 37.0965C36.972 37.4815 38.039 37.9555 39.111 38.3675C39.398 38.2245 39.67 38.0595 39.922 37.8705C39.931 37.8545 39.942 37.8395 39.951 37.8235C40.078 37.6015 40.184 37.3675 40.27 37.1255C40.265 37.0175 40.253 36.9035 40.234 36.7835C40.21 36.6325 40.167 36.4705 40.113 36.3045C38.967 36.2555 37.845 35.8455 36.734 35.4775C36.526 35.4085 36.317 35.3405 36.109 35.2765C34.536 34.7925 32.904 34.5075 31.261 34.4205C29.547 34.3295 27.821 34.4535 26.139 34.7915C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.412"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.731 35.6755 25.709 35.7015 25.725 35.7195C25.777 35.7905 25.832 35.8575 25.894 35.9295C26.197 36.2815 26.613 36.6315 27.101 36.9355C28.235 36.4335 29.374 36.1745 30.51 36.1035C31.384 36.0465 32.256 36.1035 33.125 36.2505C34.07 36.4095 35.01 36.6735 35.943 37.0075C37.002 37.3865 38.064 37.8535 39.133 38.2435C39.423 38.1185 39.699 37.9715 39.958 37.7995C39.967 37.7835 39.977 37.7685 39.986 37.7525C40.109 37.5305 40.209 37.2965 40.29 37.0545C40.27 36.9565 40.245 36.8525 40.213 36.7425C40.173 36.6045 40.115 36.4545 40.047 36.2995C38.91 36.2385 37.797 35.8295 36.695 35.4655C36.488 35.3975 36.281 35.3305 36.074 35.2675C34.512 34.7895 32.891 34.5085 31.26 34.4215C29.546 34.3305 27.82 34.4545 26.138 34.7925C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.471"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.737 35.6715 25.711 35.6965 25.73 35.7115C25.789 35.7725 25.851 35.8295 25.919 35.8915C26.251 36.1965 26.686 36.5025 27.187 36.7685C28.318 36.3055 29.453 36.0685 30.586 36.0105C31.453 35.9635 32.32 36.0245 33.182 36.1705C34.121 36.3295 35.056 36.5875 35.982 36.9165C37.036 37.2895 38.093 37.7485 39.159 38.1185C39.452 38.0115 39.733 37.8825 39.997 37.7285C40.006 37.7125 40.016 37.6975 40.024 37.6815C40.142 37.4595 40.237 37.2245 40.312 36.9835C40.278 36.8955 40.239 36.8015 40.194 36.7015C40.137 36.5755 40.064 36.4385 39.983 36.2955C38.856 36.2235 37.752 35.8145 36.658 35.4535C36.453 35.3855 36.247 35.3195 36.041 35.2575C34.489 34.7865 32.881 34.5075 31.261 34.4215C29.547 34.3305 27.821 34.4545 26.139 34.7925C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.529"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.743 35.6675 25.714 35.6915 25.736 35.7035C25.802 35.7545 25.87 35.8015 25.944 35.8535C26.306 36.1115 26.76 36.3725 27.273 36.6025C28.4 36.1775 29.532 35.9635 30.662 35.9185C31.523 35.8815 32.383 35.9455 33.239 36.0905C34.173 36.2495 35.101 36.5025 36.02 36.8255C37.069 37.1925 38.122 37.6445 39.184 37.9925C39.48 37.9035 39.765 37.7925 40.036 37.6565C40.044 37.6405 40.054 37.6255 40.062 37.6095C40.175 37.3865 40.264 37.1525 40.335 36.9115C40.287 36.8335 40.234 36.7495 40.176 36.6595C40.103 36.5455 40.015 36.4205 39.92 36.2905C38.802 36.2065 37.707 35.7975 36.621 35.4415C36.417 35.3745 36.213 35.3095 36.008 35.2475C34.467 34.7825 32.87 34.5075 31.262 34.4225C29.548 34.3315 27.822 34.4555 26.14 34.7935C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.588"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.749 35.6645 25.717 35.6865 25.741 35.6965C25.814 35.7375 25.888 35.7735 25.968 35.8165C26.36 36.0275 26.833 36.2435 27.357 36.4365C28.481 36.0495 29.61 35.8585 30.736 35.8265C31.591 35.7995 32.445 35.8675 33.293 36.0115C34.221 36.1695 35.144 36.4185 36.055 36.7345C37.099 37.0965 38.147 37.5405 39.206 37.8675C39.505 37.7965 39.794 37.7035 40.072 37.5855C40.08 37.5695 40.09 37.5545 40.098 37.5385C40.206 37.3155 40.29 37.0805 40.356 36.8405C40.293 36.7725 40.227 36.6985 40.156 36.6175C40.066 36.5155 39.964 36.4035 39.855 36.2845C38.746 36.1885 37.66 35.7805 36.583 35.4285C36.381 35.3625 36.178 35.2985 35.975 35.2375C34.444 34.7785 32.859 34.5075 31.263 34.4225C29.549 34.3315 27.823 34.4555 26.141 34.7935C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.647"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.756 35.6605 25.72 35.6815 25.746 35.6885C25.826 35.7195 25.907 35.7455 25.993 35.7785C26.415 35.9415 26.906 36.1145 27.443 36.2705C28.563 35.9215 29.689 35.7535 30.812 35.7345C31.661 35.7175 32.508 35.7885 33.35 35.9325C34.273 36.0905 35.189 36.3335 36.093 36.6445C37.132 37.0005 38.176 37.4375 39.231 37.7425C39.532 37.6895 39.826 37.6145 40.11 37.5135C40.118 37.4975 40.127 37.4825 40.135 37.4665C40.239 37.2435 40.317 37.0085 40.377 36.7685C40.3 36.7115 40.22 36.6465 40.136 36.5755C40.029 36.4865 39.912 36.3865 39.79 36.2795C38.691 36.1715 37.613 35.7645 36.545 35.4155C36.344 35.3505 36.143 35.2865 35.941 35.2265C34.421 34.7735 32.847 34.5055 31.263 34.4215C29.549 34.3305 27.823 34.4545 26.141 34.7925C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.706"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.762 35.6575 25.723 35.6765 25.751 35.6805C25.838 35.7015 25.925 35.7175 26.017 35.7405C26.468 35.8565 26.979 35.9845 27.527 36.1035C28.643 35.7935 29.766 35.6485 30.886 35.6415C31.729 35.6345 32.569 35.7085 33.404 35.8515C34.321 36.0085 35.232 36.2475 36.129 36.5525C37.163 36.9025 38.202 37.3325 39.254 37.6165C39.558 37.5815 39.857 37.5245 40.147 37.4415C40.154 37.4255 40.164 37.4105 40.171 37.3945C40.27 37.1715 40.343 36.9355 40.398 36.6965C40.307 36.6495 40.213 36.5945 40.115 36.5335C39.992 36.4565 39.86 36.3685 39.724 36.2735C38.634 36.1545 37.566 35.7465 36.506 35.4025C36.306 35.3375 36.106 35.2755 35.906 35.2155C34.396 34.7685 32.834 34.5045 31.263 34.4215C29.549 34.3305 27.823 34.4545 26.141 34.7925C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.765"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.768 35.6535 25.726 35.6715 25.757 35.6735C25.85 35.6845 25.944 35.6895 26.042 35.7035C26.523 35.7725 27.052 35.8565 27.613 35.9375C28.726 35.6655 29.846 35.5435 30.962 35.5495C31.798 35.5525 32.633 35.6305 33.461 35.7725C34.373 35.9295 35.277 36.1635 36.167 36.4615C37.196 36.8055 38.231 37.2285 39.278 37.4905C39.585 37.4735 39.888 37.4345 40.185 37.3695C40.192 37.3535 40.201 37.3385 40.208 37.3225C40.302 37.0995 40.37 36.8635 40.419 36.6235C40.313 36.5865 40.205 36.5415 40.095 36.4905C39.955 36.4255 39.809 36.3505 39.659 36.2675C38.579 36.1365 37.519 35.7295 36.467 35.3895C36.269 35.3255 36.07 35.2635 35.871 35.2055C34.372 34.7655 32.822 34.5045 31.262 34.4215C29.548 34.3305 27.822 34.4545 26.14 34.7925C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.824"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.774 35.6495 25.729 35.6665 25.762 35.6655C25.862 35.6665 25.962 35.6615 26.067 35.6655C26.578 35.6865 27.126 35.7265 27.698 35.7715C28.807 35.5375 29.924 35.4385 31.037 35.4575C31.867 35.4705 32.695 35.5515 33.516 35.6935C34.423 35.8495 35.321 36.0795 36.203 36.3715C37.227 36.7105 38.257 37.1255 39.301 37.3665C39.611 37.3675 39.918 37.3465 40.221 37.2985C40.228 37.2825 40.237 37.2675 40.243 37.2515C40.332 37.0275 40.395 36.7925 40.439 36.5525C40.319 36.5255 40.197 36.4905 40.074 36.4495C39.917 36.3975 39.756 36.3345 39.593 36.2635C38.522 36.1205 37.471 35.7145 36.428 35.3775C36.231 35.3145 36.034 35.2535 35.836 35.1955C34.348 34.7615 32.809 34.5035 31.261 34.4215C29.547 34.3305 27.821 34.4545 26.139 34.7925C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.882"
                        d="M25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.78 35.6465 25.732 35.6615 25.767 35.6575C25.874 35.6485 25.981 35.6325 26.091 35.6275C26.631 35.6015 27.199 35.5965 27.783 35.6045C28.888 35.4085 30.002 35.3325 31.112 35.3655C31.936 35.3885 32.758 35.4725 33.572 35.6135C34.473 35.7695 35.365 35.9935 36.241 36.2805C37.26 36.6135 38.285 37.0215 39.326 37.2405C39.639 37.2595 39.951 37.2565 40.26 37.2265C40.266 37.2105 40.275 37.1955 40.281 37.1795C40.366 36.9555 40.422 36.7195 40.462 36.4805C40.327 36.4635 40.192 36.4385 40.056 36.4065C39.883 36.3665 39.707 36.3155 39.529 36.2565C38.468 36.1015 37.425 35.6955 36.391 35.3635C36.196 35.3005 36 35.2405 35.804 35.1845C34.326 34.7565 32.799 34.5025 31.263 34.4205C29.549 34.3295 27.823 34.4535 26.141 34.7915C26.017 34.8165 25.898 34.8535 25.777 34.8825Z"
                        fill="#752836"
                    />
                    <path
                        opacity="0.941"
                        d="M25.777 34.8824C25.719 35.0954 25.691 35.3494 25.688 35.6644C25.786 35.6424 25.735 35.6564 25.772 35.6504C25.886 35.6314 25.999 35.6054 26.115 35.5904C26.685 35.5174 27.271 35.4684 27.868 35.4394C28.97 35.2824 30.081 35.2284 31.187 35.2744C32.005 35.3074 32.82 35.3954 33.627 35.5354C34.523 35.6904 35.409 35.9104 36.277 36.1904C37.291 36.5174 38.312 36.9184 39.349 37.1164C39.665 37.1534 39.981 37.1684 40.297 37.1564C40.303 37.1404 40.312 37.1254 40.318 37.1094C40.398 36.8854 40.449 36.6494 40.483 36.4104C40.334 36.4034 40.185 36.3884 40.036 36.3664C39.846 36.3394 39.655 36.3004 39.464 36.2534C38.412 36.0864 37.379 35.6814 36.352 35.3534C36.158 35.2914 35.964 35.2324 35.769 35.1764C34.302 34.7544 32.786 34.5034 31.262 34.4234C29.548 34.3324 27.822 34.4564 26.14 34.7944C26.017 34.8164 25.898 34.8534 25.777 34.8824Z"
                        fill="#752836"
                    />
                    <path
                        d="M25.777 35.6415C25.898 35.6125 26.017 35.5765 26.14 35.5515C27.823 35.2135 29.548 35.0895 31.262 35.1805C32.976 35.2715 34.678 35.5765 36.314 36.0985C37.634 36.5195 38.967 37.0625 40.334 37.0835C40.34 37.0675 40.348 37.0525 40.354 37.0365C40.429 36.8125 40.475 36.5755 40.504 36.3375C39.077 36.3635 37.689 35.7775 36.314 35.3395C34.678 34.8185 32.976 34.5125 31.262 34.4215C29.548 34.3305 27.822 34.4545 26.14 34.7925C26.017 34.8175 25.899 34.8535 25.777 34.8825C25.719 35.0955 25.691 35.3495 25.688 35.6645C25.792 35.6385 25.738 35.6505 25.777 35.6415Z"
                        fill="#752836"
                    />
                    <defs>
                        <radialGradient
                            id="paint0_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(18.78 9.87751) scale(23.291 23.291)"
                        >
                            <stop offset="0.013" stop-color="#E6DDE4" />
                            <stop offset="0.503" stop-color="#F2B0CC" />
                            <stop offset="1" stop-color="#F1709F" />
                        </radialGradient>
                        <radialGradient
                            id="paint1_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(23.7001 16.5811) rotate(-5.91184) scale(22.2234 11.2044)"
                        >
                            <stop stop-color="#E6DDE4" stop-opacity="0" />
                            <stop
                                offset="0.151"
                                stop-color="#E4D8E0"
                                stop-opacity="0.151"
                            />
                            <stop
                                offset="0.325"
                                stop-color="#E0CAD4"
                                stop-opacity="0.325"
                            />
                            <stop
                                offset="0.509"
                                stop-color="#D8B3C1"
                                stop-opacity="0.509"
                            />
                            <stop
                                offset="0.702"
                                stop-color="#CD93A6"
                                stop-opacity="0.702"
                            />
                            <stop
                                offset="0.898"
                                stop-color="#BF6A84"
                                stop-opacity="0.898"
                            />
                            <stop offset="1" stop-color="#B75270" />
                        </radialGradient>
                        <radialGradient
                            id="paint2_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(21.288 38.6216) scale(8.048 8.048)"
                        >
                            <stop offset="0.005" stop-color="#9B4A59" />
                            <stop offset="0.071" stop-color="#974655" />
                            <stop offset="0.622" stop-color="#752836" />
                        </radialGradient>
                        <radialGradient
                            id="paint3_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(36.0461 38.9119) scale(12.386 12.386)"
                        >
                            <stop stop-color="#CD6D84" />
                            <stop offset="0.192" stop-color="#BD6276" />
                            <stop offset="0.627" stop-color="#9B4A59" />
                        </radialGradient>
                        <radialGradient
                            id="paint4_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(27.2678 20.873) rotate(-92.602) scale(16.9785 19.0435)"
                        >
                            <stop offset="0.013" stop-color="#E6DDE4" />
                            <stop offset="0.503" stop-color="#F2B0CC" />
                            <stop offset="1" stop-color="#F1709F" />
                        </radialGradient>
                        <radialGradient
                            id="paint5_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(30.8154 24.7813) rotate(-8.32537) scale(20.2578 11.774)"
                        >
                            <stop stop-color="#E6DDE4" stop-opacity="0" />
                            <stop
                                offset="0.025"
                                stop-color="#E6DDE4"
                                stop-opacity="0.1"
                            />
                            <stop offset="1" stop-color="#B75270" />
                        </radialGradient>
                        <radialGradient
                            id="paint6_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(20.8496 16.0504) rotate(-6.45566) scale(9.99177 9.14342)"
                        >
                            <stop stop-color="#E6DDE4" stop-opacity="0" />
                            <stop
                                offset="0.151"
                                stop-color="#E4D8E0"
                                stop-opacity="0.151"
                            />
                            <stop
                                offset="0.325"
                                stop-color="#E0CAD4"
                                stop-opacity="0.325"
                            />
                            <stop
                                offset="0.509"
                                stop-color="#D8B3C1"
                                stop-opacity="0.509"
                            />
                            <stop
                                offset="0.702"
                                stop-color="#CD93A6"
                                stop-opacity="0.702"
                            />
                            <stop
                                offset="0.898"
                                stop-color="#BF6A84"
                                stop-opacity="0.898"
                            />
                            <stop offset="1" stop-color="#B75270" />
                        </radialGradient>
                        <radialGradient
                            id="paint7_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(13.6687 20.0067) rotate(-93.9338) scale(4.94778 7.99746)"
                        >
                            <stop stop-color="#E6DDE4" stop-opacity="0" />
                            <stop
                                offset="0.151"
                                stop-color="#E4D8E0"
                                stop-opacity="0.151"
                            />
                            <stop
                                offset="0.325"
                                stop-color="#E0CAD4"
                                stop-opacity="0.325"
                            />
                            <stop
                                offset="0.509"
                                stop-color="#D8B3C1"
                                stop-opacity="0.509"
                            />
                            <stop
                                offset="0.702"
                                stop-color="#CD93A6"
                                stop-opacity="0.702"
                            />
                            <stop
                                offset="0.898"
                                stop-color="#BF6A84"
                                stop-opacity="0.898"
                            />
                            <stop offset="1" stop-color="#B75270" />
                        </radialGradient>
                        <radialGradient
                            id="paint8_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(29.4307 18.4722) rotate(82.7844) scale(9.58684 11.8609)"
                        >
                            <stop
                                offset="0.629"
                                stop-color="#E6DDE4"
                                stop-opacity="0"
                            />
                            <stop
                                offset="0.681"
                                stop-color="#E2D2DA"
                                stop-opacity="0.07"
                            />
                            <stop
                                offset="0.773"
                                stop-color="#D8B3C1"
                                stop-opacity="0.194"
                            />
                            <stop
                                offset="0.894"
                                stop-color="#C78298"
                                stop-opacity="0.358"
                            />
                            <stop
                                offset="1"
                                stop-color="#B75270"
                                stop-opacity="0.5"
                            />
                        </radialGradient>
                        <radialGradient
                            id="paint9_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(7.16897 26.9625) scale(5.643 5.643)"
                        >
                            <stop stop-color="#9B4A59" stop-opacity="0" />
                            <stop
                                offset="0.107"
                                stop-color="#974655"
                                stop-opacity="0.107"
                            />
                            <stop offset="1" stop-color="#752836" />
                        </radialGradient>
                        <radialGradient
                            id="paint10_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(14.4018 10.2138) rotate(-4.53669) scale(5.32618 4.80793)"
                        >
                            <stop
                                offset="0.111"
                                stop-color="#E6DDE4"
                                stop-opacity="0"
                            />
                            <stop
                                offset="0.245"
                                stop-color="#E4D8E0"
                                stop-opacity="0.151"
                            />
                            <stop
                                offset="0.4"
                                stop-color="#E0CAD4"
                                stop-opacity="0.325"
                            />
                            <stop
                                offset="0.564"
                                stop-color="#D8B3C1"
                                stop-opacity="0.509"
                            />
                            <stop
                                offset="0.735"
                                stop-color="#CD93A6"
                                stop-opacity="0.702"
                            />
                            <stop
                                offset="0.909"
                                stop-color="#BF6A84"
                                stop-opacity="0.898"
                            />
                            <stop offset="1" stop-color="#B75270" />
                        </radialGradient>
                        <radialGradient
                            id="paint11_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(21.0721 8.46939) rotate(16.1587) scale(7.42104 6.69933)"
                        >
                            <stop
                                offset="0.111"
                                stop-color="#E6DDE4"
                                stop-opacity="0"
                            />
                            <stop
                                offset="0.245"
                                stop-color="#E4D8E0"
                                stop-opacity="0.151"
                            />
                            <stop
                                offset="0.4"
                                stop-color="#E0CAD4"
                                stop-opacity="0.325"
                            />
                            <stop
                                offset="0.564"
                                stop-color="#D8B3C1"
                                stop-opacity="0.509"
                            />
                            <stop
                                offset="0.735"
                                stop-color="#CD93A6"
                                stop-opacity="0.702"
                            />
                            <stop
                                offset="0.909"
                                stop-color="#BF6A84"
                                stop-opacity="0.898"
                            />
                            <stop offset="1" stop-color="#B75270" />
                        </radialGradient>
                        <radialGradient
                            id="paint12_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(26.9224 8.66403) rotate(-4.53668) scale(4.32814 3.90701)"
                        >
                            <stop
                                offset="0.111"
                                stop-color="#E6DDE4"
                                stop-opacity="0"
                            />
                            <stop
                                offset="0.245"
                                stop-color="#E4D8E0"
                                stop-opacity="0.151"
                            />
                            <stop
                                offset="0.4"
                                stop-color="#E0CAD4"
                                stop-opacity="0.325"
                            />
                            <stop
                                offset="0.564"
                                stop-color="#D8B3C1"
                                stop-opacity="0.509"
                            />
                            <stop
                                offset="0.735"
                                stop-color="#CD93A6"
                                stop-opacity="0.702"
                            />
                            <stop
                                offset="0.909"
                                stop-color="#BF6A84"
                                stop-opacity="0.898"
                            />
                            <stop offset="1" stop-color="#B75270" />
                        </radialGradient>
                        <radialGradient
                            id="paint13_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(31.2281 17.2498) rotate(95.6229) scale(5.35856 10.6714)"
                        >
                            <stop
                                offset="0.227"
                                stop-color="#E6DDE4"
                                stop-opacity="0"
                            />
                            <stop
                                offset="0.329"
                                stop-color="#E2D2DA"
                                stop-opacity="0.07"
                            />
                            <stop
                                offset="0.511"
                                stop-color="#D8B3C1"
                                stop-opacity="0.194"
                            />
                            <stop
                                offset="0.75"
                                stop-color="#C78298"
                                stop-opacity="0.358"
                            />
                            <stop
                                offset="0.958"
                                stop-color="#B75270"
                                stop-opacity="0.5"
                            />
                        </radialGradient>
                        <radialGradient
                            id="paint14_radial_64_1481"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(22.512 24.0111) rotate(-8.87075) scale(5.78677 4.82973)"
                        >
                            <stop
                                offset="0.397"
                                stop-color="#E6DDE4"
                                stop-opacity="0"
                            />
                            <stop
                                offset="0.482"
                                stop-color="#E2D2DA"
                                stop-opacity="0.07"
                            />
                            <stop
                                offset="0.632"
                                stop-color="#D8B3C1"
                                stop-opacity="0.194"
                            />
                            <stop
                                offset="0.829"
                                stop-color="#C78298"
                                stop-opacity="0.358"
                            />
                            <stop
                                offset="1"
                                stop-color="#B75270"
                                stop-opacity="0.5"
                            />
                        </radialGradient>
                    </defs>
                </svg>
                <p class="heading">Lessons</p>
            </div>
            <div class="sub-heading max-w-md self-center md:self-start">
                What you’ll learn by the end of the course
            </div>
        </div>
        <ul class="flex flex-col gap-6">
            <li
                class="flex flex-col bg-transparent-blue p-6 rounded-2xl gap-4 md:p-12"
            >
                <p class="text-xl font-medium text-slate-400">
                    What to use & how to set it up
                </p>
                <p class="text-3xl font-bold">Software</p>
                <p class="text-xl">
                    There is a range of software available to stream from, and
                    most <have />
                </p>
            </li>
            <li
                class="flex flex-col bg-transparent-blue p-6 rounded-2xl gap-4 md:p-12"
            >
                <p class="text-xl font-medium text-slate-400">
                    What to use & how to set it up
                </p>
                <p class="text-3xl font-bold">Software</p>
                <p class="text-xl">
                    There is a range of software available to stream from, and
                    most <have />
                </p>
            </li>
            <li
                class="flex flex-col bg-transparent-blue p-6 rounded-2xl gap-4 md:p-12"
            >
                <p class="text-xl font-medium text-slate-400">
                    What to use & how to set it up
                </p>
                <p class="text-3xl font-bold">Software</p>
                <p class="text-xl">
                    There is a range of software available to stream from, and
                    most <have />
                </p>
            </li>
            <li
                class="flex flex-col bg-transparent-blue p-6 rounded-2xl gap-4 md:p-12"
            >
                <p class="text-xl font-medium text-slate-400">
                    What to use & how to set it up
                </p>
                <p class="text-3xl font-bold">Software</p>
                <p class="text-xl">
                    There is a range of software available to stream from, and
                    most <have />
                </p>
            </li>
        </ul>
    </section>
    <!-- Streamer References Section -->
    <section class="px-6 flex flex-col gap-16 items-center">
        <div class="flex flex-col text-center gap-8">
            <p class="heading">What’s the word on the street?</p>
            <p class="sub-heading max-w-md self-center">
                Here’s what a few Software & Game Dev streamers on Twitch have
                to say
            </p>
        </div>
        <div
            class="flex flex-col gap-16 max-w-sm md:max-w-screen-xl md:flex-row"
        >
            <!-- 1 -->
            <div class="flex flex-col gap-4 items-center md:items-start">
                <div class="flex gap-4">
                    <div class="relative">
                        <img src="/images/badcop.png" alt="" />
                        <Twitch class="absolute -bottom-1 -right-1" />
                    </div>
                    <div class="flex flex-col z-10">
                        <p class="text-lg font-bold">TheCoppinger</p>
                        <p class="text-lg font-medium text-slate-300">
                            1.9K followers
                        </p>
                    </div>
                </div>
                <p class="text-xl font-medium text-center md:text-start">
                    Charlie is objectively one of the worst streamers I’ve ever
                    come across
                </p>
            </div>
            <!-- 2 -->
            <div class="flex flex-col gap-4 items-center md:items-start">
                <div class="flex gap-4">
                    <div class="relative">
                        <img src="/images/badcop.png" alt="" />
                        <Twitch class="absolute -bottom-1 -right-1" />
                    </div>
                    <div class="flex flex-col z-10">
                        <p class="text-lg font-bold">TheCoppinger</p>
                        <p class="text-lg font-medium text-slate-300">
                            1.9K followers
                        </p>
                    </div>
                </div>
                <p class="text-xl font-medium text-center md:text-start">
                    Charlie is objectively one of the worst streamers I’ve ever
                    come across
                </p>
            </div>
            <!-- 3 -->
            <div class="flex flex-col gap-4 items-center md:items-start">
                <div class="flex gap-4">
                    <div class="relative">
                        <img src="/images/badcop.png" alt="" />
                        <Twitch class="absolute -bottom-1 -right-1" />
                    </div>
                    <div class="flex flex-col z-10">
                        <p class="text-lg font-bold">TheCoppinger</p>
                        <p class="text-lg font-medium text-slate-300">
                            1.9K followers
                        </p>
                    </div>
                </div>
                <p class="text-xl font-medium text-center md:text-start">
                    Charlie is objectively one of the worst streamers I’ve ever
                    come across
                </p>
            </div>
        </div>
    </section>
    <section class="px-6 flex flex-col gap-8 items-center">
        <div class="flex flex-col text-center gap-8 mb-8">
            <p class="heading">What do I mean by community?</p>
            <p class="sub-heading max-w-md self-center">
                I asked my chat, and here are some of the responses
            </p>
        </div>
        <div
            class="w-full flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
            <ul
                class="flex shrink-0 items-center justify-center md:justify-start gap-8 animate-infinite-scroll pl-8"
            >
                <ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                >
            </ul>
            <ul
                class="flex shrink-0 items-center justify-center md:justify-start gap-8 animate-infinite-scroll pl-8"
            >
                <ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                >
            </ul>
        </div>
        <div
            class="w-full flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
            <ul
                class="flex shrink-0 items-center justify-center md:justify-start gap-8 animate-infinite-scroll-reverse pl-8"
            >
                <ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                >
            </ul>
            <ul
                class="flex shrink-0 items-center justify-center md:justify-start gap-8 animate-infinite-scroll-reverse pl-8"
            >
                <ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                ><ChatReference username="badcop" followAge="2 years"
                    >You are the worst streamer I have ever come across, fr man</ChatReference
                >
            </ul>
        </div>
    </section>
    <!-- Final C2A -->
    <section
        class="flex flex-col gap-8 px-6 text-center justify-center items-center mb-16"
    >
        <div class="h-24">
            <img class="h-full" src="/images/saint-bill.png" alt="" />
        </div>
        <p class="text-3xl text-slate-400 font-medium">
            In the immortal words of Bill O’Reilly
        </p>
        <p class="heading">Do it live</p>
        <a href="/" class="primary-button flex gap-2 items-center"
            >Sign me up <Confetti />
        </a>
    </section>
    <footer
        class="flex flex-col gap-4 mt-20 mb-40 text-center justify-center items-center"
    >
        <Logo />
        <div class="flex gap-2">
            <p class="text-slate-400 font-medium">Fuck it, we’ll do it live</p>
            <div class="h-8">
                <img class="h-full" src="/images/saint-bill.png" alt="" />
            </div>
        </div>
        <div class="flex gap-4">
            <Twitter />
            <Discord />
        </div>
    </footer>
</div>
