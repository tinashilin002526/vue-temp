import Vue from 'vue'
import App from './App.vue'
<% if(UIfrag==='eleUI'){%>
import ElementUI from 'element-ui'
<% } %>


<% if(UIfrag==='eleUI'){%>
Vue.use(ElementUI)
<% } %>
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
