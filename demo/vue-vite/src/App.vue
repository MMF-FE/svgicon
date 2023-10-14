<script setup lang="ts">
import { ref } from 'vue'
import { Props } from '@yzfe/vue3-svgicon'
import icons from './icons/icons'
import awesome from './icons/awesome'
import { computed } from 'vue'
import IconVue from '@icon/vue.svg?component'
import VueIconUrl from '@icon/vue.svg?url'

const dirList = ['', 'left', 'right', 'up', 'down']

const iconIndex = ref(0)

const iconProps = ref<Partial<Props>>({
    width: '50',
    height: '50',
    color: '',
    fill: true,
    original: true,
    scale: void 0,
    dir: void 0,
})

const className = 'test'

const iconData = computed(() => {
    return icons[iconIndex.value]
})

const iconClick = () => {
    console.log('icon click')
}
</script>

<template>
    <div id="app">
        <div class="content">
            <div class="icon">
                <icon v-bind="iconProps" :data="iconData"></icon>
            </div>
            <div class="form">
                <select v-model="iconIndex" placeholder="icon">
                    <option
                        v-for="(v, ix) in icons"
                        :key="v.name"
                        :label="v.name"
                        :value="ix"
                    ></option>
                </select>
                <select v-model="iconProps.dir" placeholder="direction">
                    <option
                        v-for="v in dirList"
                        :key="v"
                        :label="v"
                        :value="v"
                    ></option>
                </select>
                <input
                    v-model="iconProps.width"
                    type="text"
                    placeholder="width"
                />
                <input
                    v-model="iconProps.height"
                    type="text"
                    placeholder="height"
                />
                <input
                    v-model="iconProps.color"
                    type="text"
                    placeholder="color"
                />
                <input
                    v-model="iconProps.scale"
                    type="text"
                    placeholder="scale"
                />
                <label class="checkbox">
                    <input v-model="iconProps.fill" type="checkbox" />
                    <span>Fill</span>
                </label>
                <label class="checkbox">
                    <input v-model="iconProps.original" type="checkbox" />
                    <span>Use Original Color</span>
                </label>
            </div>
        </div>

        <div>
            <p>Test inherit</p>
            <div class="test-inherit">
                <img :src="VueIconUrl" width="50" height="50" alt="" />
                <IconVue original width="50" height="50"></IconVue>
                <icon
                    ref="mask"
                    v-show="iconProps.dir === 'left'"
                    data="@icon/sora/fit/mask.svg"
                    class="my-class"
                    :class="className"
                    data-id="myid"
                    aria-busy="hello"
                    v-bind="iconProps"
                    @click="iconClick"
                ></icon>
                <icon
                    data="@icon/sora/fit/mask.svg"
                    v-bind="iconProps"
                    @click="iconClick"
                ></icon>
                <icon
                    data="@icon/sora/fit/mask.svg"
                    @click="iconClick"
                    v-bind="iconProps"
                    original
                ></icon>
                <icon
                    data="@icon/gift.svg"
                    v-bind="iconProps"
                    original
                    :stop-colors="['blue', 'green']"
                    :replace="(svg: string) => svg.replace('blue', 'red')"
                >
                </icon>
            </div>
        </div>

        <div class="grid">
            <div v-for="v in awesome" :key="v.name" class="grid-item">
                <icon :data="v" v-bind="iconProps"></icon>
                <p class="name">{{ v.name }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#app {
    margin-top: 60px;
    color: #2c3e50;
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.content {
    display: flex;
    width: 650px;
    margin: 0 auto;
}

.icon {
    display: flex;
    height: 300px;
    border-radius: 3px;
    background-color: #efefef;
    flex: 1;
    align-items: center;
    justify-content: center;
}

.form {
    flex: 1;
    display: grid;
    grid-auto-rows: 28px;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-left: 10px;
    justify-content: flex-start;
}

.test-inherit {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.grid {
    display: grid;
    width: 100%;
    margin-top: 30px;
    grid-template-columns: repeat(auto-fit, minmax(2 * 100px, 1fr));
    grid-auto-rows: 120px;
    overflow: hidden;
    border-width: 1px 0 0 1px;

    * {
        outline: none;
    }
}

.grid-item {
    // display: flex;
    // align-items: center;
    // justify-content: center;
}
</style>
