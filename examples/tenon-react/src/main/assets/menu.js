export const GrammarMenu = {
  title: '语法篇',
  items: [{
    url: './grammar.js',
    name: 'Common Grammar'
  },{
    url: './hook-test.js',
    name: 'Use Hook'
  },{
    url: './grammar-style.js',
    name: 'Grammar Of Style'
  }]
}

export const ComponentMenu = {
  title: '组件篇',
  items: [{
    url: './component-view.js',
    name: 'Base Component View'
  },{
    url: './component-text.js',
    name: 'Base Component Text'
  },{
    url: './component-image.js',
    name: 'Base Component Image'
  },{
    url: './component-button.js',
    name: 'Base Component Button'
  }, {
    url: './component-input.js',
    name: 'Base Component Input'
  },  {
    url: './component-textarea.js',
    name: 'Base Component Textarea'
  },{
    url: './component-switch.js',
    name: 'Base Component Switch'
  },{
    url: './component-scroller.js',
    name: 'Base Component Scroller'
  }]
}

export const HighComponent = {
  title: '高阶组件篇',
  items: [{
    url: './ex-component-list.js',
    name: 'Component List'
  },{
    url: './ex-component-viewpager.js',
    name: 'Component Viewpager'
  },{
    url: './ex-component-popup.js',
    name: 'Component Popup'
  },{
    url: './ex-component-test.js',
    name: 'Component Test'
  }]
}

export const Animation = {
  title: '动画篇',
  items: [{
    url: './animation-basic.js',
    name: 'Animation Basic'
  },{
    url: './animation-keyframe.js',
    name: 'Animation Keyframe'
  },{
    url: './animation-steps.js',
    name: 'Animation Step'
  },{
    url: './animation-transition.js',
    name: 'Animation Transition'
  },]
}

export const Plugin = {
  title: '插件篇',
  items: [{
    url: './plugin-error.js',
    name: '错误捕获'
  },{
    url: './store-demo.js',
    name: '页面状态管理'
  },{
    url: './store-muti-main.js',
    name: '多页面级状态管理'
  }]
}

export const Style = {
  title: '样式篇',
  items: [{
    url: './style-basic.js',
    name: '基础样式'
  },{
    url: './style-layout.js',
    name: '布局样式'
  }]
}
export const Other = {
  title: '其它',
  items: [{
    url: './lifecycle.js',
    name: 'Lifecycle'
  },{
    url: './page-config.js',
    name: 'PageConfig'
  }]
}


// export const menus =  [GrammarMenu, ComponentMenu, HighComponent, Style, Animation, Plugin, Other]
export const menus =  [GrammarMenu, ComponentMenu,HighComponent, Animation, Other]