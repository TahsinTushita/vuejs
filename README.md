# Vue.js 3
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
                   header: "Vue is ready!"
               }
           }
       })
       .mount("#div-id")
   </script>
   ```
 - For displaying this data in the page we can use the double mustache syntax.
   ```html
   <div id="shopping-list">
       <h1>{{header}}</h1>
   </div>
   ```
 - To check out Vues **reactivity system**, we can create an input field and use Vues v-diective model that helps in **two-way data binding** meaning if you change the input, the header's gonna change and if you change the header, the input's gonna change. It can also be manipulated from the console.
   ```html
   <input v-model="header">
   ```

### Vue.js devtools
We need to install the **beta version(version 6)** of the **Vue.js devtools** extenion from the chrome web store. The beta version is not available for firefox yet. Then we need to go to manage extensions for this and check **Allow access to file URLs**. 
 - It injects our Vue intances into the console for us so that we can test and manipulate them without relying on setting them to a variable. 
 - Helps to keep up with our routes
 - Helps to keep up with our Vuex store
 
 ### Template syntax and expressions
  - js functions can be used inside the double mustache
  - Only 1 expression is allowed
  - Variables can't be declared and if statements aren't allowed
  - Ternary expression is allowed, as well as OR
 
 ### List rendering in Vue 3
  - We can make an array in the data and render it using **v-for** loop. A unique key should be used for items. It also supports objects. 
    ```html
    items: [
        {id: 1, label: "item 1"},
        {id: 2, label: "item 2"},
        {id: 3, label: "item 3"},
    ]
    ```
    ```html
    <ul>
        <li v-for="(item, index) in items" :key="item.id">{{index}} {{item.label}}</li>
    </ul>
    ```
  - To check out these list items from the console, we can write
    ```
    $vm.data.items
    ```
 ### Form input bindings
 - v-model supports modifiers like **lazy, number, trim**.
   - lazy > it syncs the data after change events instead of each input event
   - number > it typecasts the user input a number
   - trim > trims whitespaces from the input
   ```html
   <input type="text" v-model.lazy="newItem" placeholder="Add an item">
   ```
 - It can be used with **text, multiline text, checkbox, radio, select**

