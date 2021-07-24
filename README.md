# Vue.js
**Vue.js** is a javascript framework.
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
