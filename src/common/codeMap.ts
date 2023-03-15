// demo code map
export default {
    dir: [
        `
      <icon name="arrow" width="50" height="50" dir="left" title="left"></icon>
      <icon name="arrow" width="50" height="50" dir="up" title="up"></icon>
      <icon name="arrow" width="50" height="50" title="right"></icon>
      <icon name="arrow" width="50" height="50" dir="down" title="down"></icon>
      `,
    ],
    fill: [
        `
      <icon name="arrow" width="50" height="50"></icon>
      <icon name="arrow" width="50" height="50" :fill="false"></icon>
      `,
    ],
    'r-color': [
        `
        <icon name="clock" color="#8A99B2 r-#1C2330" width="100" height="100"></icon>
        <icon name="clock" color="#8A99B2 r-var(--color-primary)" width="100" height="100"></icon>
      `,
    ],
    color: [
        `
      <icon name="arrow" width="50" :height="50"></icon>
      <icon name="arrow" width="50" height="50" color="red"></icon>
      <icon name="arrow" width="50" height="50" color="green"></icon>
      <icon name="arrow" width="50" height="50" color="blue"></icon>
      `,
    ],
    size: [
        `
      <icon name="arrow"></icon>
      <icon name="arrow" width="50" height="50"></icon>
      <icon name="arrow" height="50"></icon>
      <icon name="arrow" scale="15"></icon>
      <icon name="arrow" width="10em" height="10em"></icon>
      `,
    ],
    'multi-color': [
        `<icon name="check" :fill="false" width="100" height="100" color="r-#42b983 white"></icon>`,
    ],
    'multi-color2': [
        `<icon name="colorwheel" width="200" height="200" :color="datas[0]"></icon>`,
        `
      <template>
        <icon name="colorwheel" width="200" height="200" :color="colors"></icon>
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
      `,
    ],
    'original-color': [
        `
        <icon name="colorwheel" width="100" height="100" original></icon>
        <!-- overwrite original color -->
        <icon name="colorwheel" width="100" height="100" original color="_ black _ black _"></icon>
        <icon name="colorwheel" width="100" height="100" original color="_ r-black _ r-red _"></icon>
        <icon name="gift" width="100" height="100" original></icon>
      `,
    ],
    gradient: [
        `<icon name="vue" width="15rem" height="15rem" color="url(#gradient-1) url(#gradient-2)"></icon>`,
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
      `,
    ],
    namespace: [
        `
      <icon name="arrow" width="50" height="50"></icon>
      <icon name="sora/arrow" width="50" height="50"></icon>
      <icon name="sora/fit/arrow" width="50" height="50"></icon>
      `,
    ],
    uid: [
        `
      <icon name="mask" width="100" height="100"></icon>
      <icon name="sora/fit/mask" width="100" height="100" color="url(#svgicon_sora_fit_mask_a) red green" ></icon>
      `,
    ],
    async: [
        `
        <icon name="download" width="40" height="40" color="red" ></icon>
        <icon name="download" width="40" height="40" color="green" ></icon>
        <icon name="download" width="40" height="40" color="blue" ></icon>
        <icon name="good" width="40" height="40" class="good"></icon>
        <icon name="notFound" width="40" height="40"></icon>
      `,
        `
      <template> #{{tpl}}</template>

      <script>
        export default {
          mounted () {
            require.ensure([], () => {
              require('icons-async')
            }, 'async-icons')
          }
        }
      </script>
      `,
    ],
} as { [key: string]: string[] }
