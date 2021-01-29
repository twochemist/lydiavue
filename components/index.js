export { default as Logo } from '../..\\components\\Logo.vue'
export { default as NavBar } from '../..\\components\\NavBar.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo'}" */).then(c => c.default || c)
export const LazyNavBar = import('../..\\components\\NavBar.vue' /* webpackChunkName: "components_NavBar'}" */).then(c => c.default || c)
