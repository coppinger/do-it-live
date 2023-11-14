<script>
    export let username;
    export let followAge;
</script>

<li
    class="flex flex-col gap-4 shrink-0 bg-transparent-blue rounded-2xl p-8 box"
>
    <div class="flex gap-4 p-4">
        <!-- Helper for grabbing pfps -->
        <!-- <a href={`https://twitch.tv/${username}`} target="_blank"
            >profile link</a
        > -->
        <div class="relative overflow-hidden rounded-full">
            <img
                src={`/images/${username.toLowerCase()}.png`}
                alt={`${username}'s profile picture'`}
            />
        </div>
        <div class="flex flex-col z-10">
            <p class="text-lg font-bold">{username}</p>
            <p class="text-lg font-medium text-slate-300">
                following for {followAge}
            </p>
        </div>
    </div>
    <p class="text-xl font-medium max-w-xs">
        <slot />
    </p>
</li>
