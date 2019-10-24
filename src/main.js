import Vue from 'vue';
import App from './App.vue';
import Header from './components/Header_footer/Header.vue';

Vue.component('app-header', Header);

Vue.filter('to-uppercase', value => {
  return value.toUpperCase();
});

export const bus = new Vue();

Vue.mixin({
  created() {
    console.log('Created');
  }
}); // on each component, this mixin will be called

Vue.directive('awesome', {
  bind(el, binding) {
    el.innerHTML = binding.value;

    el.style.color = binding.modifiers.red ? 'red' : 'blue';
    el.style.fontSize = binding.modifiers.small ? '12px' : '30px';
  }
  //   inserted(el, binding, vnode){
  //       // actions take place after parent element is created
  //   }
  //   update(el, binding, vnode, oldVnode) {
  //     console.log(vnode);
  //     console.log('update');
  //     //actions occur when an update happens
  // //   }
  // componentUpdated(){
  //     happens after an update occurs
  // }
  //   unbind(){
  //       when a directive is unbound from an element
  //   }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
