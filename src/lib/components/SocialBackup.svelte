<script>
    import Twitch from "../svgs/Twitch.svelte";
    import ChatReference from "./ChatReference.svelte";
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
                    <img src="/images/badcop.png" alt="" class="rounded-full" />
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
                Charlie is objectively one of the worst streamers I’ve ever come
                across
            </p>
        </div>
        <!-- 2 -->
        <div class="flex flex-col gap-4 items-center md:items-start w-full">
            <div class="flex gap-4">
                <div class="relative">
                    <img src="/images/badcop.png" alt="" class="rounded-full" />
                    <Twitch class="absolute -bottom-1 -right-1" />
                </div>
                <div class="flex flex-col z-10">
                    <p class="text-lg font-bold">TG_Khalil</p>
                    <p class="text-lg font-medium text-slate-300">
                        979 followers
                    </p>
                </div>
            </div>
            <p class="text-xl font-medium text-center md:text-start">
                ⚡ A powerhouse of creativity, empathy & grit, super patient and
                always infotaining. Truly, a legend is what you are! ✨ Aside
                from that, completely bonkers too. Hard to not love!!
            </p>
        </div>
        <!-- 3 -->
        <div class="flex flex-col gap-4 items-center md:items-start w-full">
            <div class="flex gap-4">
                <div class="relative">
                    <img
                        src="/images/codefork.png"
                        alt=""
                        class="rounded-full"
                    />
                    <Twitch class="absolute -bottom-1 -right-1" />
                </div>
                <div class="flex flex-col z-10">
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
<section class="px-6 flex flex-col gap-8 items-center">
    <div class="flex flex-col text-center gap-8 mb-8">
        <p class="heading">What do I mean by community?</p>
        <p class="sub-heading max-w-md self-center">
            I asked my chat, and here are some of their responses
        </p>
    </div>
    <div
        class="w-full flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_24px,_black_calc(100%-24px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
    >
        <ul
            class="flex shrink-0 items-center justify-center md:justify-start gap-8 animate-infinite-scroll pl-8"
        >
            <ChatReference username="mysticharry_" followAge="3 months"
                >Charlie, what a guy! Not only is he a great streamer, but he
                has an incredible work ethic! He is so friendly and welcoming to
                everyone that comes into chat. The perfect person to go to for
                advice and I am glad to call him a good friend! 🤝</ChatReference
            ><ChatReference username="mk_slug" followAge="3 months"
                >This person is one of the reasons we want to exist, he shows us
                it is not hard and that you need to keep pushing forwared in
                life. He made and united the greatest community on the internet
                ❤️
            </ChatReference><ChatReference
                username="threecreepio"
                followAge="1 year"
                >s̸̏͑ǒ̷͘m̴͆͝e̸̊̽t̶̃̊h̸̰͘ĭ̴ng's wrong̸̛̀ w̶͝ith my̌͝ ̶̰̊k̴̤̀e̷̒̈y̴board</ChatReference
            ><ChatReference username="JacobsM1" followAge="3 months"
                >Charlie is the best dude ever. Lent me his Lamborghini and
                never asked for it back.</ChatReference
            ><ChatReference username="Koderen" followAge="4 days"
                >What else can I add about this individual? Take a look a look
                at this masterpiece ❤️</ChatReference
            ><ChatReference username="TG_Khalil" followAge="3 months"
                >⚡ A powerhouse of creativity, empathy & grit, super patient
                and always infotaining. Truly, a legend is what you are! ✨
                Aside from that, completely bonkers too. Hard to not love!!
            </ChatReference><ChatReference
                username="dnbull"
                followAge="4 months"
                >The streaming sage of software and game development. Brimming
                with wisdom, he's far more than your average streamer. He is
                inspiring, educated and simply amazing.</ChatReference
            ><ChatReference username="dyrenh" followAge="1 year"
                >Charlie is a good, kind human, even though he lives on the
                wrong side of the planet and ruins my sleep schedule.</ChatReference
            ><ChatReference username="brett" followAge="1 year"
                >If Charlie has million number of fans i am one of them . if
                Charlie has ten fans i am one of them. if Charlie have only one
                fan and that is me . if Charlie has no fans, that means i am no
                more on the earth . if world against the Charlie, i am against
                the world. i love #Charlie till my last breath.. .. Die Hard fan
                of Charlie . Hit Like If you Think Charlie Best streamer & Smart
                In the world</ChatReference
            >
            <li
                class="flex flex-col gap-4 shrink-0 bg-transparent-blue rounded-2xl overflow-hidden"
            >
                <img
                    src="/images/theo-block.jpg"
                    alt="A screenshot of the Twitter user @t3gg's profile, indicating they've blocked the viewier (me)."
                />
            </li>
        </ul>
        <ul
            class="flex shrink-0 items-center justify-center md:justify-start gap-8 animate-infinite-scroll pl-8"
        >
            <ChatReference username="mysticharry_" followAge="3 months"
                >Charlie, what a guy! Not only is he a great streamer, but he
                has an incredible work ethic! He is so friendly and welcoming to
                everyone that comes into chat. The perfect person to go to for
                advice and I am glad to call him a good friend! 🤝</ChatReference
            ><ChatReference username="mk_slug" followAge="3 months"
                >This person is one of the reasons we want to exist, he shows us
                it is not hard and that you need to keep pushing forwared in
                life. He made and united the greatest community on the internet
                ❤️
            </ChatReference><ChatReference
                username="threecreepio"
                followAge="1 year"
                >s̸̏͑ǒ̷͘m̴͆͝e̸̊̽t̶̃̊h̸̰͘ĭ̴ng's wrong̸̛̀ w̶͝ith my̌͝ ̶̰̊k̴̤̀e̷̒̈y̴board</ChatReference
            ><ChatReference username="JacobsM1" followAge="3 months"
                >Charlie is the best dude ever. Lent me his Lamborghini and
                never asked for it back.</ChatReference
            ><ChatReference username="Koderen" followAge="4 days"
                >What else can I add about this individual? Take a look a look
                at this masterpiece ❤️</ChatReference
            ><ChatReference username="dnbull" followAge="4 months"
                >The streaming sage of software and game development. Brimming
                with wisdom, he's far more than your average streamer. He is
                inspiring, educated and simply amazing.</ChatReference
            ><ChatReference username="dyrenh" followAge="1 year"
                >Charlie is a good, kind human, even though he lives on the
                wrong side of the planet and ruins my sleep schedule.</ChatReference
            ><ChatReference username="brett" followAge="1 year"
                >If Charlie has million number of fans i am one of them . if
                Charlie has ten fans i am one of them. if Charlie have only one
                fan and that is me . if Charlie has no fans, that means i am no
                more on the earth . if world against the Charlie, i am against
                the world. i love #Charlie till my last breath.. .. Die Hard fan
                of Charlie . Hit Like If you Think Charlie Best streamer & Smart
                In the world</ChatReference
            >
            <li
                class="flex flex-col gap-4 shrink-0 bg-transparent-blue rounded-2xl overflow-hidden"
            >
                <img
                    src="/images/theo-block.jpg"
                    alt="A screenshot of the Twitter user @t3gg's profile, indicating they've blocked the viewier (me)."
                />
            </li>
        </ul>
    </div>
    <div
        class="w-full flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_24px,_black_calc(100%-24px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
    >
        <ul
            class="flex shrink-0 items-center justify-center md:justify-start gap-8 animate-infinite-scroll-reverse pl-8"
        >
            <ChatReference username="naomieo" followAge="3 months"
                >loved appearance on kyootbot</ChatReference
            ><ChatReference username="jefe_" followAge="2 years"
                >I barely know this man by the name of Charlie, but I
                acknowledge his street cred.
            </ChatReference><ChatReference
                username="spagrettigorl69"
                followAge="2 years">So handsome!</ChatReference
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
            <ChatReference username="naomieo" followAge="3 months"
                >loved appearance on kyootbot</ChatReference
            ><ChatReference username="jefe_" followAge="2 years"
                >I barely know this man by the name of Charlie, but I
                acknowledge his street cred.
            </ChatReference><ChatReference
                username="spagrettigorl69"
                followAge="2 years">So handsome!</ChatReference
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
