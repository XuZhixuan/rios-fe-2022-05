import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faHouse,
  faEnvelope,
  faAngleUp,
  faAngleDown,
  faAngleRight,
  faLink,
  faPaintRoller
} from '@fortawesome/free-solid-svg-icons';

library.add([faHouse, faEnvelope, faAngleUp, faAngleDown, faAngleRight, faLink, faPaintRoller]);

Vue.component('font-awesome-icon', FontAwesomeIcon);
