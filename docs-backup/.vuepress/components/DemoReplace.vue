<template>
    <!-- #region demo -->
    <demo-wrap :title="$attrs.title">
        <icon
            class="icon"
            data="@icon/colorwheel.svg"
            width="80"
            height="80"
            original
            :replace="(svg) => svg.replace('#34469D', 'var(--color-white)')"
        />
    </demo-wrap>
    <!-- #endregion demo -->
</template>
<style lang="css">
.icon {
    --color-white: #fff;
}
</style>