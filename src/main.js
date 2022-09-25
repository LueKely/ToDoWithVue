import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';

import './assets/todostyle.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faB } from '@fortawesome/free-solid-svg-icons';
/* import specific icons */

import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faB);
library.add(faPencil);
library.add(faTrash);
library.add(faWind);
library.add(faWrench);
library.add(faGithub);
library.add(faTwitter);
library.add(faFacebook);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
