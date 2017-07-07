
<template>
  <div id="my-app">
    <h2>{{ title }}</h2>
    <img>
    <copyright></copyright>
  </div>
</template>

<script>
import Copyright from '../components/copyright'
import '../css/reset.css'
import './app.css'


export default {
 data() {
   return {
     title: 'Hello World!'
   }
 },
 components: {
   copyright: Copyright,
 }
}
</script>

