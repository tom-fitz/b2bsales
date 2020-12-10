import Vue from 'vue'
import Router from 'vue-router'
import {auth} from '@/main'

import Home from "../Home/Home"
import Login from "../Admin/login"
import About from "../Home/About"
import Testimonial from "../Home/Testimonial"
import Contact from "../Home/Contact"
import SalesTips from "../Home/Sales-Tips"
import Accelerators from "../Home/Accelerators"
import Founders from "../Home/Founders"
import SalesTipPost from "../Home/SalesTipPost"
import Universities from "../Home/Universities"
import Investors from "../Home/Investors"
import OneDayCourse from "../Home/OneDayCourse"
import TwoDayCourse from "../Home/TwoDayCourse"
import OfficeHours from "../Home/OfficeHours"
// Admin Pages
import Admin from "../Admin/Admin"
import AdminAbout from "../Admin/modules/admin-about"
import AdminTestimonials from "../Admin/modules/admin-testimonials"
import AdminSalesTips from "../Admin/modules/admin-sales-tip"
import AdminAccelerators from "../Admin/modules/admin-accelerators"
import AdminSalesTipPost from "../Admin/modules/admin-sales-tip-post"
import AdminFounders from "../Admin/modules/admin-founders"
import AdminUniversities from "../Admin/modules/admin-universities"
import AdminInvestors from "../Admin/modules/admin-investors"
import AdminOneDay from "../Admin/modules/admin-one-day"
import AdminTwoDay from "../Admin/modules/admin-two-day"
import AdminOfficeHours from "../Admin/modules/admin-office-hours"
import AdminLogos from "../Admin/modules/admin-logos"
import AdminPrivacy from "../Admin/modules/admin-privacy-policy"
import AdminTerms from "../Admin/modules/admin-terms"

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
            meta: {
                admin: false
            }
        },
        {
            path: '/home',
            name: 'Home',
            meta: {
                admin: false
            },
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/sales-tips',
            name: 'SalesTactics',
            component: SalesTips
        },
        {
            path: '/sales-tip/:id',
            name: 'SalesTipPost',
            component: SalesTipPost
        },
        {
            path: '/testimonial',
            name: 'Testimonial',
            component: Testimonial
        },
        {
            path: '/accelerators',
            name: 'Accelerators',
            component: Accelerators
        },
        {
            path: '/founders',
            name: 'Founders',
            component: Founders
        },
        {
          path: '/universities',
          name: 'Universities',
          component: Universities
        },
        {
          path: '/investors',
          name: 'Investors',
          component: Investors
        },
        {
          path: '/one-day-course',
          name: 'OneDayCourse',
          component: OneDayCourse
        },
        {
          path: '/two-day-course',
          name: 'TwoDayCourse',
          component: TwoDayCourse
        },
        {
          path: '/sales-office-hours',
          name: 'OfficeHours',
          component: OfficeHours
        },
        {
            path: '/privacy-policy',
            name: 'PrivacyPolicy',
            component: () => import(/* webpackChunkName: "privacy" */ "../Home/Privacy")
        },
        {
            path: '/terms-of-service',
            name: 'Terms',
            component: () => import(/* webpackChunkName: "terms" */ "../Home/Terms")
        },
        {
            path: '/calendar/office-hours',
            name: 'Calendar-Office-Hours',
            component: () => import(/* webpackChunkName: "calendar-office-hours" */ "../Home/Calendar-OfficeHours")
        },
        {
            path: '/admin',
            redirect: 'admin/about',
            name: 'Admin',
            meta: {
                requiresAuth: true,
                admin: true
            },
            component: Admin,
            children: [
                {
                    path: 'testimonials',
                    name: 'Admin-Testimonials',
                    component: AdminTestimonials,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                },
                {
                    path: 'about',
                    name: 'Admin-About',
                    component: AdminAbout,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                },
                {
                    path: 'sales-tips',
                    name: 'Admin-Sales-Tips',
                    component: AdminSalesTips,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                },
                {
                    path: 'sales-tip/:id',
                    name: 'Admin-Sales-Tip-Post',
                    component: AdminSalesTipPost,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                },
                {
                    path: 'accelerators',
                    name: 'Admin-Accelerators',
                    component: AdminAccelerators,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                },
                {
                    path: 'founders',
                    name: 'Admin-Founders',
                    component: AdminFounders,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                },
                {
                    path: 'universities',
                    name: 'Admin-Universities',
                    component: AdminUniversities,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                },
                {
                    path: 'investors',
                    name: 'Admin-Investors',
                    component: AdminInvestors,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                },
                {
                    path: 'one-day-course',
                    name: 'Admin-One-Day',
                    component: AdminOneDay,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                },
                {
                    path: 'two-day-course',
                    name: 'Admin-Two-Day',
                    component: AdminTwoDay,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                },
                {
                    path: 'office-hours',
                    name: 'Admin-Office-Hours',
                    component: AdminOfficeHours,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                },
                {
                    path: 'logos',
                    name: 'Admin-Logos',
                    component: AdminLogos,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                },
                {
                    path: 'privacy',
                    name: 'Admin-Privacy',
                    component: AdminPrivacy,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                },
                {
                    path: 'terms',
                    name: 'Admin-Terms',
                    component: AdminTerms,
                    meta: {
                        requiresAuth: true,
                        admin: true
                    },
                }
            ]
        }
    ],
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !auth.currentUser){
        next('/login');
    }else{
        next();
    }
});


export default router
