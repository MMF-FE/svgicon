<template>
    <div id="app">
        <div class="filters">
            <div class="left">
                <el-checkbox-group
                    class="fill-type"
                    v-model="fillType"
                    size="small"
                >
                    <el-checkbox-button
                        v-for="type in fillTypeList"
                        :key="type"
                        :label="type"
                    ></el-checkbox-button>
                </el-checkbox-group>
            </div>
            <div class="right">
                <el-input
                    v-model="query"
                    class="search-input"
                    size="small"
                    placeholder="Search Icons"
                >
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
        </div>
        <div class="page-section">
            <div v-show="fillType.length > 0" class="icon-list">
                <div class="icon-item" v-for="v in icons" :key="v.name">
                    <div class="icon">
                        <icon v-if="isShowFill" :data="v" title="fill"></icon>
                        <icon
                            v-if="isShowOriginal"
                            :data="v"
                            original
                            title="original"
                        ></icon>
                        <icon
                            v-if="isShowStroke"
                            :data="v"
                            :fill="false"
                            title="stroke"
                        ></icon>
                    </div>
                    <p class="icon-name">
                        {{ v.name }}
                        <br />
                        <span v-if="iconMeta[v.name]">
                            {{ iconMeta[v.name].name }}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import icons from './icons'
import iconMeta from '@meta'

type FillType = 'fill' | 'original' | 'stroke'

@Component({
    components: {}
})
export default class App extends Vue {
    protected fillType: FillType[] = ['original']
    protected query = ''
    protected fillTypeList: FillType[] = ['fill', 'original', 'stroke']
    protected iconMeta = iconMeta

    protected get icons() {
        if (this.query) {
            return icons.filter(v => {
                let meta = this.iconMeta[v.name]
                let name = meta ? meta.name + v.name : v.name
                return name.includes(this.query)
            })
        }

        return icons
    }

    protected get isShowFill() {
        return this.fillType.includes('fill')
    }

    protected get isShowOriginal() {
        return this.fillType.includes('original')
    }

    protected get isShowStroke() {
        return this.fillType.includes('stroke')
    }
}
</script>

<style lang="scss" src="./app.scss"></style>
