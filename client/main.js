var csInterface = new CSInterface();
var appSkin = csInterface.hostEnvironment.appSkinInfo;
var sysPath = csInterface.getSystemPath(SystemPath.EXTENSION);
var logPath = sysPath + "/log/";
var hostPath = sysPath + "/host/";
var appName = csInterface.hostEnvironment.appName;

// loadUniversalJSXLibraries();
console.log(`Loading for ${appName}`);
// loadJSX(`${appName}.jsx`);
console.log(appUI);



Vue.component('adobe-toolbar', {
  template : `
  <div class="adobe-toolbar">
    <slot></slot>
  </div>
  `,
})

Vue.component('adobe-btn', {
  props: ['icon', 'toggle'],
  template : `
  <div :class="toggle ?  'adobe-btn-switch' : 'adobe-btn'">
    <span :class="'adobe-icon-' + icon"></span>
  </div>
  `,
  data() {
    return {
      toggleState : {default: false},
    }
  },
  computed: {
    isSwitched() {
      return this.toggleState;
    }
  }
})

Vue.component('adobe-toolbar-divider', {
  template : `
    <div class="adobe-toolbar-divider"></div>
  `,
})

Vue.component('adobe-checkbox', {
  template : `
  <div class="adobe adobe-checkboxGroup">
    <span :class="state == 'on' ? 'adobe-icon-checkBoxOn' : 'adobe-icon-checkBoxOff'"></span>
    <span class="adobe-checkbox-suffix"><slot></slot></span>
  </div>
  `,
  props : ['state'],
})


var app = new Vue({
  el: '#app',
  data: {

  },
  methods: {

  },
});
