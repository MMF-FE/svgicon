<template>
    <!-- #region demo -->
    <demo-wrap :title="$attrs.title">
        <icon data="@icon/colorwheel.svg" width="80" height="80" original />
        <!-- overwrite original color -->
        <icon
            data="@icon/colorwheel.svg"
            width="80"
            height="80"
            original
            color="_ black _ black _"
        />
        <icon
            data="@icon/colorwheel.svg"
            width="80"
            height="80"
            original
            color="_ r-black _ r-red _"
        />
        <icon data="@icon/gift.svg" width="80" height="80" original />
    </demo-wrap>
    <!-- #endregion demo -->
</template>