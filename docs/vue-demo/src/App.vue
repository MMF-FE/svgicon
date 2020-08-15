<template>
    <div id="app">
        <div class="content">
            <div class="icon">
                <icon v-bind="props"></icon>
            </div>
            <div class="form">
                <select v-model="props.data" placeholder="direction">
                    <option
                        v-for="v in icons"
                        :key="v.name"
                        :label="v.name"
                        :value="v"
                    ></option>
                </select>
                <select v-model="props.dir" placeholder="direction">
                    <option
                        v-for="v in dirList"
                        :key="v"
                        :label="v"
                        :value="v"
                    ></option>
                </select>
                <input v-model="props.width" type="text" placeholder="width" />
                <input
                    v-model="props.height"
                    type="text"
                    placeholder="height"
                />
                <input v-model="props.color" type="text" placeholder="color" />
                <input v-model="props.scale" type="text" placeholder="scale" />
                <label class="checkbox">
                    <input v-model="props.fill" type="checkbox" />
                    <span>Fill</span>
                </label>
                <label class="checkbox">
                    <input v-model="props.original" type="checkbox" />
                    <span>Use Original Color</span>
                </label>
            </div>
        </div>

        <div>
            <p>Test Unique ID</p>
            <icon
                v-show="props.dir === 'left'"
                data="@icon/sora/fit/mask.svg"
                original
            ></icon>
            <icon data="@icon/sora/fit/mask.svg" original></icon>
        </div>
    </div>
</template>
<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
