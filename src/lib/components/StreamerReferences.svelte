<script>
    import Twitch from "../svgs/Twitch.svelte";
</script>

<!-- Streamer References Section -->
<section class="px-6 flex flex-col gap-16 items-center">
    <div class="flex flex-col text-center gap-8">
        <p class="heading">What’s the word on the street?</p>
        <p class="sub-heading max-w-md self-center">
            Here’s what a few Software & Game Dev streamers on Twitch have to
            say
        </p>
    </div>
    <div class="flex flex-col gap-16 max-w-sm md:max-w-screen-xl md:flex-row">
        <!-- 1 -->
        <div class="flex flex-col gap-4 items-center md:items-start w-full">
            <div class="flex gap-4">
                <div class="relative">
                    <img
                        src="/images/dillon.jpg"
                        alt=""
                        class="rounded-full h-16 w-16"
                    />
                    <Twitch class="absolute -bottom-1 -right-1" />
                </div>
                <div class="flex flex-col z-10 justify-center">
                    <p class="text-lg font-bold">dmmulroy</p>
                    <p class="text-lg font-medium text-slate-300">
                        1.5K followers
                    </p>
                </div>
            </div>
            <p class="text-xl font-medium text-center md:text-start">
                Charlie is without a doubt one of my favorite streamers. He is
                an expert at community building, teaching and learning in
                public, and creating all around great vibes.
            </p>
        </div>
        <!-- 2 -->
        <div class="flex flex-col gap-4 items-center md:items-start w-full">
            <div class="flex gap-4">
                <div class="relative">
                    <img
                        src="/images/tg_khalil.png"
                        alt=""
                        class="rounded-full h-16 w-16"
                    />
                    <Twitch class="absolute -bottom-1 -right-1" />
                </div>
                <div class="flex flex-col z-10 justify-center">
                    <p class="text-lg font-bold">TG_Khalil</p>
                    <p class="text-lg font-medium text-slate-300">
                        979 followers
                    </p>
                </div>
            </div>
            <p class="text-xl font-medium text-center md:text-start">
                A powerhouse of creativity, empathy & grit, super patient and
                always infotaining. Truly, a legend is what you are! Aside from
                that, completely bonkers too. Hard to not love!!
            </p>
        </div>
        <!-- 3 -->
        <div class="flex flex-col gap-4 items-center md:items-start w-full">
            <div class="flex gap-4">
                <div class="relative">
                    <img
                        src="/images/codefork.png"
                        alt=""
                        class="rounded-full h-16 w-16"
                    />
                    <Twitch class="absolute -bottom-1 -right-1" />
                </div>
                <div class="flex flex-col z-10 justify-center">
                    <p class="text-lg font-bold">Codefork</p>
                    <p class="text-lg font-medium text-slate-300">
                        159 followers
                    </p>
                </div>
            </div>
            <p class="text-xl font-medium text-center md:text-start">
                Charlie is a great mentor and friend and will accelerate your
                growth as a streamer and get you started with building a
                community you can call home.
            </p>
        </div>
    </div>
</section>
