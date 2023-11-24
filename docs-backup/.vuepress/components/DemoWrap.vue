<template>
    <div class="demo-wrap">
        <h4>{{ $attrs.title }}</h4>
        <div class="grid">
            <slot></slot>
        </div>
    </div>
</template>
<style>
.grid {
    --color-bg-primary: #efefef;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-auto-rows: 1fr;
    gap: 10px;
    padding: 20px;
    margin: 20px 0;
    border-radius: 4px;
    background-color: #efefef;
    place-items: center;
}
</style>