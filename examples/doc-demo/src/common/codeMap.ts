// demo code map
export default {
    dir: [
        `
      <icon icon="@icon/arrow.svg" width="50" height="50" dir="left" title="left"></icon>
      <icon icon="@icon/arrow.svg" width="50" height="50" dir="up" title="up"></icon>
      <icon icon="@icon/arrow.svg" width="50" height="50" title="right"></icon>
      <icon icon="@icon/arrow.svg" width="50" height="50" dir="down" title="down"></icon>
      `
    ],
    fill: [
        `
      <icon icon="@icon/arrow.svg" width="50" height="50"></icon>
      <icon icon="@icon/arrow.svg" width="50" height="50" :fill="false"></icon>
      `
    ],
    'r-color': [
        `
        <icon icon="@icon/clock.svg" color="#8A99B2 r-#1C2330" width="100" height="100"></icon>
      `
    ],
    color: [
        `
      <icon icon="@icon/arrow.svg" width="50" height="50"></icon>
      <icon icon="@icon/arrow.svg" width="50" height="50" color="red"></icon>
      <icon icon="@icon/arrow.svg" width="50" height="50" color="green"></icon>
      <icon icon="@icon/arrow.svg" width="50" height="50" color="blue"></icon>
      `
    ],
    size: [
        `
      <icon icon="@icon/arrow.svg"></icon>
      <icon icon="@icon/arrow.svg" width="50" height="50"></icon>
      <icon icon="@icon/arrow.svg" height="50"></icon>
      <icon icon="@icon/arrow.svg" scale="15"></icon>
      <icon icon="@icon/arrow.svg" width="10em" height="10em"></icon>
      `
    ],
    'multi-color': [
        `<icon icon="@icon/check.svg" :fill="false" width="100" height="100" color="r-#42b983 white"></icon>`
    ],
    'multi-color2': [
        `<icon icon="@icon/colorwheel.svg" width="200" height="200" :color="datas[0]"></icon>`,
        `
      <template>
        <icon icon="@icon/colorwheel.svg" width="200" height="200" :color="colors"></icon>
      </template>

      <script>
        export default {
          data () {
            return {
              colors: '#FBAD20 #F5EB13 #B8D433 #6BC9C6 #058BC5 #34469D #7E4D9F #C63D96 #ED1944'
            }
          }
        }
      </script>
      `
    ],
    'original-color': [
        `
        <icon icon="@icon/colorwheel.svg" width="100" height="100" original></icon>
        <!-- overwrite original color -->
        <icon icon="@icon/colorwheel.svg" width="100" height="100" original color="_ black _ black _"></icon>
        <icon icon="@icon/colorwheel.svg" width="100" height="100" original color="_ r-black _ r-red _"></icon>
        <icon icon="@icon/gift.svg" width="100" height="100" original></icon>
      `
    ],
    gradient: [
        `<icon icon="@icon/vue.svg" width="15rem" height="15rem" color="url(#gradient-1) url(#gradient-2)"></icon>`,
        `
      <template>
        <svg style="width: 0; position: absolute; opacity: 0">
          <defs>
              <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stop-color="#57f0c2"/>
                  <stop offset="95%" stop-color="#147d58"/>
              </linearGradient>
              <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stop-color="#7295c2"/>
                  <stop offset="95%" stop-color="#252e3d"/>
              </linearGradient>
          </defs>
        </svg>

        #{{tpl}}
      </template>
      `
    ],
    uid: [
        `
      <icon icon="@icon/mask.svg" width="100" height="100"></icon>
      <icon icon="@icon/sora/fit/mask.svg" width="100" height="100" color="url(#svgicon_sora_fit_mask_a) red green" ></icon>
      `
    ]
} as { [key: string]: string[] }
