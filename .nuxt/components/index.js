export const Business = () => import('../..\\components\\business\\index.vue' /* webpackChunkName: "components/business" */).then(c => wrapFunctional(c.default || c))
export const Content = () => import('../..\\components\\content\\Content.vue' /* webpackChunkName: "components/content" */).then(c => wrapFunctional(c.default || c))
export const ContentLastContent = () => import('../..\\components\\content\\LastContent.vue' /* webpackChunkName: "components/content-last-content" */).then(c => wrapFunctional(c.default || c))
export const ContentMaincontent = () => import('../..\\components\\content\\Maincontent.vue' /* webpackChunkName: "components/content-maincontent" */).then(c => wrapFunctional(c.default || c))
export const FollowAdvertisting = () => import('../..\\components\\follow\\Advertisting.vue' /* webpackChunkName: "components/follow-advertisting" */).then(c => wrapFunctional(c.default || c))
export const FollowFashion = () => import('../..\\components\\follow\\Fashion.vue' /* webpackChunkName: "components/follow-fashion" */).then(c => wrapFunctional(c.default || c))
export const Follow = () => import('../..\\components\\follow\\Follow.vue' /* webpackChunkName: "components/follow" */).then(c => wrapFunctional(c.default || c))
export const Lifestyle = () => import('../..\\components\\lifestyle\\index.vue' /* webpackChunkName: "components/lifestyle" */).then(c => wrapFunctional(c.default || c))
export const Fooddrink = () => import('../..\\components\\fooddrink\\index.vue' /* webpackChunkName: "components/fooddrink" */).then(c => wrapFunctional(c.default || c))
export const PostCatagory = () => import('../..\\components\\post\\PostCatagory.vue' /* webpackChunkName: "components/post-catagory" */).then(c => wrapFunctional(c.default || c))
export const Service = () => import('../..\\components\\service\\index.vue' /* webpackChunkName: "components/service" */).then(c => wrapFunctional(c.default || c))
export const Socialmedia = () => import('../..\\components\\socialmedia\\index.vue' /* webpackChunkName: "components/socialmedia" */).then(c => wrapFunctional(c.default || c))
export const SvgsDribbbleIcon = () => import('../..\\components\\svgs\\DribbbleIcon.vue' /* webpackChunkName: "components/svgs-dribbble-icon" */).then(c => wrapFunctional(c.default || c))
export const SvgsFacebookIcon = () => import('../..\\components\\svgs\\FacebookIcon.vue' /* webpackChunkName: "components/svgs-facebook-icon" */).then(c => wrapFunctional(c.default || c))
export const SvgsInstagramIcon = () => import('../..\\components\\svgs\\InstagramIcon.vue' /* webpackChunkName: "components/svgs-instagram-icon" */).then(c => wrapFunctional(c.default || c))
export const SvgsLinkedinIcon = () => import('../..\\components\\svgs\\LinkedinIcon.vue' /* webpackChunkName: "components/svgs-linkedin-icon" */).then(c => wrapFunctional(c.default || c))
export const SvgsTwitterIcon = () => import('../..\\components\\svgs\\TwitterIcon.vue' /* webpackChunkName: "components/svgs-twitter-icon" */).then(c => wrapFunctional(c.default || c))
export const SvgsYoutubeIcon = () => import('../..\\components\\svgs\\YoutubeIcon.vue' /* webpackChunkName: "components/svgs-youtube-icon" */).then(c => wrapFunctional(c.default || c))
export const Technology = () => import('../..\\components\\technology\\index.vue' /* webpackChunkName: "components/technology" */).then(c => wrapFunctional(c.default || c))
export const TechnologyMaincontent = () => import('../..\\components\\technology\\Maincontent.vue' /* webpackChunkName: "components/technology-maincontent" */).then(c => wrapFunctional(c.default || c))
export const Travel = () => import('../..\\components\\travel\\index.vue' /* webpackChunkName: "components/travel" */).then(c => wrapFunctional(c.default || c))
export const Typepost = () => import('../..\\components\\typepost\\index.vue' /* webpackChunkName: "components/typepost" */).then(c => wrapFunctional(c.default || c))
export const Typetag = () => import('../..\\components\\typetag\\index.vue' /* webpackChunkName: "components/typetag" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
