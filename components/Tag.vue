<template>
    <span href="#"
        class="hover:bg-zinc-400 text-sm w-fit p-4 py-2 font-bold mb-1 text-white" :class='value'>
       {{item}}
    </span>
</template>

<script setup>
// const data = [["Ajax",'bg-violet-100'], ["SPA",'bg-blue-100'],["JavaScript",'bg-rose-100']]
defineProps({
    value: String,
    item: String,
    index: Number
})
</script>