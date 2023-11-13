<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
    import { onMount } from "svelte";

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    onMount(() => {
        tl.to(".streamer", {
            opacity: 1,
            transform: "rotate(0deg)",
        })
            .to(".camera", {
                transform: "rotate(-35deg)",
                opacity: 1,
            })
            .to(".light", {
                transform: "rotate(45deg)",
                opacity: 1,
            });
        ScrollTrigger.create({
            animation: tl,
            trigger: ".streamer-container",
            start: "top 50%",
            end: "bottom 50%",
            animation: tl,
            scrub: true,
        });
    });
</script>

<div class="streamer-container flex flex-col justify-center items-center">
    <div class="relative">
        <img
            class="light opacity-0 absolute origin-bottom-left -top-20 z-0 -right-10 rotate-90 h-[244px]"
            src="/images/elgato-light.png"
            alt=""
        />
        <img
            class="camera absolute opacity-0 top-6 z-0 left-0 origin-bottom-right -rotate-[90deg] h-[167px]"
            src="/images/camera.png"
            alt=""
        />
        <img
            class="streamer relative opacity-0 z-0 h-[200px] origin-bottom-left transform rotate-45"
            src="/images/streamer.png"
            alt=""
        />
    </div>
    <div class="relative">
        <div
            class="flex border-2 border-[#9146FF] px-8 py-4 gap-4 rounded-2xl justify-center items-center relative bg-slate-950"
        >
            <svg
                width="28"
                height="32"
                viewBox="0 0 28 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M25.2268 14.9031L20.7701 19.3796H16.3135L12.4139 23.2966V19.3796H7.40015V2.59253H25.2268V14.9031Z"
                    fill="white"
                />
                <path
                    d="M6.28592 0.354248L0.715088 5.94995V26.0945H7.40009V31.6902L12.9709 26.0945H17.4276L27.4551 16.0222V0.354248H6.28592ZM25.2267 14.9031L20.7701 19.3796H16.3134L12.4138 23.2966V19.3796H7.40009V2.59253H25.2267V14.9031Z"
                    fill="#9146FF"
                />
                <path
                    d="M21.8843 6.50952H19.656V13.2244H21.8843V6.50952Z"
                    fill="#9146FF"
                />
                <path
                    d="M15.7564 6.50952H13.5281V13.2244H15.7564V6.50952Z"
                    fill="#9146FF"
                />
            </svg>
            <div class="flex flex-col z-10">
                <p class="text-lg font-bold">TheCoppinger</p>
                <p class="text-lg font-medium text-slate-300">1.9K followers</p>
            </div>
        </div>
        <div class="absolute grid place-items-center inset-center">
            <div class="absolute twitch-glow h-[240px] w-[240px] -top-40 z-0" />
        </div>
    </div>
</div>
