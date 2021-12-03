/* eslint-disable no-mixed-spaces-and-tabs */
import Vue from 'vue'
import Router from 'vue-router'

import Auth from '../components/Auth'
import Profile from '../components/Profile'
import Solar from '../components/Solar'

import NotFound from '../components/NotFound'

Vue.use(Router);

let router = new Router({
	routes: [
		{
			path: '/',
			name: 'Profile',
			component: Profile
		},
		{
			path: '/auth',
			name: 'Auth',
			component: Auth
		},
		{
			path: '/solar',
			name: 'Solar',
			component: Solar
		},
		{
			path: '*',
			name: 'NotFound',
			component: NotFound
		}
	],
	mode: "history",
})

export default router;