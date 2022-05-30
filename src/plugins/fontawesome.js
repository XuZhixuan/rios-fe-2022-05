import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faHouse, faEnvelope, faAngleRight, faAngleUp, faAngleDown, faLink } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse);
library.add(faEnvelope);
library.add(faAngleRight);
library.add(faAngleUp);
library.add(faAngleDown);
library.add(faLink);

Vue.component('font-awesome-icon', FontAwesomeIcon);
