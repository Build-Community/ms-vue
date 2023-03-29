import Vue from 'vue'
import App from './App.vue'

import {
  applyPolyfills,
  defineCustomElements as defineProductMgmtExp
} from 'ms-st/loader'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/ms-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineProductMgmtExp(window);
});


new Vue({
  render: h => h(App),
}).$mount('#app')