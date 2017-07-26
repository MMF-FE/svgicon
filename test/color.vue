<template>
  <div>
    <svg style="width: 0; position: absolute; opacity: 0">
      <defs>
        <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stop-color="#57f0c2" />
          <stop offset="95%" stop-color="#147d58" />
        </linearGradient>
        <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stop-color="#7295c2" />
          <stop offset="95%" stop-color="#252e3d" />
        </linearGradient>
      </defs>
    </svg>
    <svgicon ref="color" icon="arrow" width="50" height="50" color="green"></svgicon>
    <svgicon ref="multiColor" icon="vue" color="red green"></svgicon>
    <svgicon ref="rColor1" icon="arrow" color="r-red"></svgicon>
    <svgicon ref="rColor2" icon="vue" color="red r-green"></svgicon>
    <svgicon ref="gradient" icon="vue" color="url(#gradient-1) url(#gradient-2)"></svgicon>
  </div>
</template>
