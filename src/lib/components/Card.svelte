<script>
    export let title;
    export let description;
    export let imgSrc;
    export let alt;
    export let href = "/";
</script>

<a {href}>
    <article class="border-1.5 rounded-md overflow-hidden bg-white hover:bg-gray-100 transition-all duration-150">
        <div class="py-1 px-2">
            <h2 class="font-bold text-lg">
                {title}
            </h2>
            <p>{description}</p>
        </div>
        <img class="w-full h-48 object-cover" src={imgSrc} {alt}>
    </article>
</a>