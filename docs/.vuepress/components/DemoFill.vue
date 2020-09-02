<template>
    <!-- #region demo -->
    <demo-wrap :title="$attrs.title">
        <icon data="@fa/solid/arrow-up.svg" width="36" height="36" />
        <icon
            :fill="false"
            class="stroke-icon"
            data="@fa/solid/arrow-up.svg"
            width="36"
            height="36"
        />
    </demo-wrap>
    <!-- #endregion demo -->
</template>
<!-- #region css -->
<style>
.stroke-icon path[pid='0'] {
    stroke-width: 10px;
}
</style>
<!-- #endregion css -->
