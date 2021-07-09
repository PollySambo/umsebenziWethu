import Home from './components/Home'
import Signin from './components/SignIn'
import Register from './components/Register'
import Navbar from './components/navbar.vue'
import TrackingProcess from './components/TrackingProcess.vue'
import BusinessNumber from './components/BusinessNumer.vue'
import Documents from './components/Documents.vue'
import PersonalDetails from './components/PersonalDetails.vue'
import Choosesector from './components/Choosesector.vue'
import Psector from './components/psector.vue'
import Gsector from './components/gsector.vue'
import AcceptanceTab from './components/AcceptanceTab.vue'
import Accept from './components/Accept.vue'
import Payment from './components/payment.vue'

export default [
    { path: '/', component: Home },
    { path: '/signin', component: Signin },
    { path: '/register', component: Register },
    { path: '/trackingProcess', component: TrackingProcess },
    {
        path: '/navbar',
        component: Navbar
    },
    { path: '/businessnumber', component: BusinessNumber },
    { path: '/documents', component: Documents },
    { path: '/choosesector', component: Choosesector },
    { path: '/personalDetails', component: PersonalDetails },
    { path: '/psector', component: Psector },
    { path: '/gsector', component: Gsector },
    { path: '/acceptanceTab', component: AcceptanceTab },
    { path: '/accept', component: Accept },
    { path: '/payment', component: Payment },
]