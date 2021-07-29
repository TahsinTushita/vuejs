# Vue.js 3
**Vue.js** is a javascript/typescript framework. It's popular for being approachable, versatile and performant and is used for making standalone widgets or web applications.

### Vue 3 New Features

- **The Composition API** - code reusability, organization and readability
- Multiple root elements inside template
- **Teleport component** - render content from one component in a different place in the DOM (modals)
- **Suspense Component**
  - used to handle asynchronus components
  - can provide fall-back content (spinner) until data is loaded
- Provides Typescript support

### Add Vue using CDN
This script needs to be added in our html file.
```html
<script src="https://unpkg.com/vue@3"></script>
```

 - For creating an app and mounting it to a certain part of the app, write the div-id inside the **mount** method to control whatever is inside that div with Vue. 
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
   
   The app can also be created in a separate js file and linked with a script inside the <body> tag.
   ```html
   <script src="srcFileName.js"></script>
   ```
   
 - For displaying this data in the page we can use the double mustache syntax. Remember that the variables created in **data** can only be accessed inside the div where we mounted the app.
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
For separete js file, the html can be written inside the **template** option that Vue provides.
```js
template: "<h2>This is the template</h2>"
```
 - js functions can be used inside the double mustache
 - Only 1 expression is allowed
 - Variables can't be declared and if statements aren't allowed
 - Ternary expression is allowed, as well as OR
 
### List rendering in Vue 3
 - We can make an array in the data and render it using **v-for** loop. A unique key should be used for items. It also supports objects. 
   ```js
   items: [
       {id: 1, label: "item 1"},
       {id: 2, label: "item 2"},
       {id: 3, label: "item 3"},
   ]
   ```
   ```html
   <ul>
       <li v-for="(item, index) in listName" :key="item.id">{{index}} {{item.label}}</li>
   </ul>
   ```
 - To check out these list items from the console, we can write
    ```console
    $vm.data.items
    ```
 ### Form input bindings
 - **v-model** supports modifiers like **lazy, number, trim**.
   - lazy > it syncs the data after change events instead of each input event
   - number > it typecasts the user input a number
   - trim > trims whitespaces from the input
   ```html
   <input type="text" v-model.lazy="newItem" placeholder="Add an item">
   ```
 - It can be used with **text, multiline text, checkbox, radio, select**

### User Events
**v-on** lets us respond to every event that javascript can. It supports **event modiefiers** and **key modifiers**. The shorthand syntax for v-on is **@**.
 - v-on for click events.
   ```html
   <button v-else v-on:click="methodName" class="btn btn-secondary">Add Item</button>
   ```
 - v-on with key modifier.
   ```html
   <input @keyup.enter="methodName"
            type="text" v-model="newItem" placeholder="Add an item">
   ```
 - Vue provides an event parameter by default to the methods that we use with user events. If we want to pass both the event paramater and another custom parameter in the method, it should be written like this -
   ```html
   <div class="box" @mouseover="handleEvent($event, 5)">mouseover (enter)</div>
   ```
     
### Methods
Vuejs has an option named **mathods** for writing methods. Methods are used for manipulating data while Computed properties are used for transforming them.
```js
methods: {
    methodName(){
       this.items.push({
            id: this.items.length + 1,
            label: this.newItem})
            this.newItem = ""
    }
}
```
   
### Conditional Rendering
 - **v-if**, **v-else**, **v-else-if** and **v-show** is used for conditional rendering of elements.
   ```html
   <button v-if="property_name_for_condition" @click="doEdit(false)">Cancel</button>
   <button v-else @click="doEdit(true)">Add Item</button>
   <button v-show="property_name_for_condition">Show</button>
   ```
 - **v-show** works by toggling an elements **display** css property meaning the element is always present in the DOM. **v-if** removes the element from the DOM if the condition is not satisfied. 
 
### Attribute Binding
**v-bind** is used to bind attributes to elements. The shorthand syntax for this is **:**.
```html
<button v-on:click="saveItem" v-bind:disabled="newItem.length === 0">Save Item</button>
```

### Dynamic CSS classes
 - There are 2 ways for adding dynamic classes from the main.css file. It's possible to toggle multiple classes with both of these syntaxes.
   - **Object syntax**
     ```html
     <li
      v-for="(item, index) in items" :key="item.id" :class="{class_name: property_of_the_item}">
      {{item.label}}
      </li>
     ```
   - **Array syntax**
     ```html
     <li
      v-for="(item, index) in items" :key="item.id" 
      :class="[property_of_the_item ? 'class_name_1' : 'class_name_2']">
      {{item.label}}
     </li>
     ```
- For adding a regular class that's not to an element, we can use the **class** property or pass a stiring to our bound classes.
  ```html
     <li
      v-for="(item, index) in items" :key="item.id" 
      class="static_class"
      :class="[property_of_the_item ? 'class_name_1' : 'class_name_2']>
      {{item.label}}
     </li>
  ```
  ```html
     <li
      v-for="(item, index) in items" :key="item.id"
      :class="[property_of_the_item ? 'class_name_1' : 'class_name_2',
              'static_class']">
      {{item.label}}
     </li>
  ```
   
### Computed Properties
 - The option for writing computed properties is **computed**. 
 - They're used only for tranforming data for the presentation layer, that's why it's recommended to use a spread operator so that we don't accidentally manipulate any data here.
 - They can re-render themselves.
   ```html
   <p>{{characterCount}}/200</p>
   ```
   ```js
   computed: {
       characterCount(){
           return this.newItem.length
       }
   }
   ```
