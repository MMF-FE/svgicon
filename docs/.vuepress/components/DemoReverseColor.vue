<template>
    <!-- #region demo -->
    <demo-wrap :title="$attrs.title">
        <icon
            data="@fa/solid/arrow-up.svg"
            width="50"
            height="50"
            color="r-red"
        />
        <icon
            data="@icon/clock.svg"
            width="50"
            height="50"
            color="#8A99B2 r-#1C2330"
        />
        <!-- use css var -->
        <icon
            data="@icon/clock.svg"
            width="50"
            height="50"
            color="#8A99B2 r-var(--color-bg-primary)"
        />
        <icon
            data="@icon/vue.svg"
            width="50"
            height="50"
            :fill="false"
            color="#42b983 r-#42b983"
        />
    </demo-wrap>
    <!-- #endregion demo -->
</template>