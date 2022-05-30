import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faHouse, faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse);
library.add(faEnvelope);
library.add(faAngleRight);

Vue.component('font-awesome-icon', FontAwesomeIcon);
