import Vue from 'vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import {
  faHouse,
  faTv,
  faStore,
  faUsers,
  faGamepad,
  faSortDown,
  faBell,
  faBars,
  faMagnifyingGlass,
  faEllipsis,
  faChevronRight,
  faArrowLeftLong,
  faArrowRightLong,
  faUserGroup,
  faUser,
  faCamera,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(
  faFacebook,
  faFacebookMessenger,
  faHouse,
  faTv,
  faStore,
  faUsers,
  faGamepad,
  faSortDown,
  faBell,
  faBars,
  faMagnifyingGlass,
  faEllipsis,
  faChevronRight,
  faArrowLeftLong,
  faArrowRightLong,
  faUserGroup,
  faUser,
  faCamera,
  faXmark
)

/* add font awesome icon component */
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.productionTip = false
