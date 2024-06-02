// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faUserSecret} from "@fortawesome/free-solid-svg-icons";
    // install in package json for free icon
    // "@fortawesome/free-brands-svg-icons": "^6.5.2" ,
    // "@fortawesome/free-regular-svg-icons": "^6.5.2",
    // "@fortawesome/free-solid-svg-icons": "^6.5.2",
library.add(faUserSecret)
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
