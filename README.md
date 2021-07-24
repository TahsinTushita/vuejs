# Vue.js
**Vue.js** is a javascript framework. It's popular for being approachable, versatile and performant.
### Add Vue using CDN
This script needs to be added in our html file.
```html
<script src="https://unpkg.com/vue@3"></script>
```

 - For creating an app and mounting it
```html
<script>
    const appName = Vue.createApp({
        data(){
            return {
                header: "Vue is ready to party!!!!"
            }
        }
    })
    .mount("#div-id")
</script>
```
 - For displaying this data in the page use the double mustache syntax
```html
<div id="shopping-list">
    <h1>{{header}}</h1>
</div>
```
 - To check out Vues **reactivity system**, we can create an input field and use Vues v-diective model that helps in **two-way data binding** meaning if you change the input, the header's gonna change and if you change the header, the input's gonna change.
 ```html
 <input v-model="header">
```
### Vue.js devtools
We need to install the **beta version(version 6)** of the **Vue.js devtools** extenion from the chrome web store. The beta version is not available for firefox yet. Then we need to go to manage extensions for this and check **Allow access to file URLs**. 
 - It injects our Vue intances into the console for us so that we can test and manipulate them without relying on setting them to a variable. 
 - Helps to keep up with our routes
 - Helps to keep up with our Vuex store
