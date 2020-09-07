import { defineComponent, h } from 'vue';
import { getPropKeys, svgIcon } from '@yzfe/svgicon';
export { setOptions } from '@yzfe/svgicon';

var VueSvgIcon = defineComponent({
    props: getPropKeys(),
    render: function () {
        var result = svgIcon(this.$props);
        return h('svg', {
            viewBox: result.box,
            style: result.style,
            class: result.className,
            innerHTML: result.path,
        });
    },
});
var VueSvgIconPlugin = {
    install: function (app, options) {
        app.component(options.tagName, VueSvgIcon);
    },
};

export { VueSvgIcon, VueSvgIconPlugin };
//# sourceMappingURL=index.esm.js.map
