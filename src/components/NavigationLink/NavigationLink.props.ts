import { RouteLocationRaw } from 'vue-router'

export interface NavigationLinkProps {
  title: string
  to: RouteLocationRaw
  // to: string | RouteLocationPathRaw | RouteLocationNamedRaw
}
