<template>
    <div id="app">
        <div class="icon-list">
            <div class="icon-item" v-for="v in icons" :key="v.name">
                <div class="icon">
                    <icon :data="v" original title="original"></icon>
                    <icon :data="v" title="fill"></icon>
                    <icon :data="v" :fill="false" title="stroke"></icon>
                </div>
                <p>{{ v.name }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import icons from './icons'

@Component({
    components: {}
})
export default class App extends Vue {
    protected icons = icons

    mounted() {}
}
</script>

<style lang="scss">
$item-size: 100px;

.icon-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(2 * $item-size, 1fr));
    grid-auto-rows: 100px;
    overflow: hidden;
    margin-top: 10px;
    border: 1px solid #dcdcdc;
    border-width: 1px 0 0 1px;

    * {
        outline: none;
    }
}

.icon-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border: 1px solid #dcdcdc;
    border-width: 0 1px 1px 0;
    color: #2a2a2a;

    .icon {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
    }

    .svg-icon {
        width: 32px;
        height: 32px;
    }

    p {
        margin: 0;
        color: black;
        text-align: center;
        font-size: 14px;
    }
}
</style>
