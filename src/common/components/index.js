import Vue from "vue";



let componentMap = [
   
 
];

componentMap.forEach(item=>{
    Vue.component(item.name,item);
})