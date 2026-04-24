export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  gradient: string
  badge: string
  badgeColor: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Step {
  step: number
  title: string
  description: string
  icon: string
}

export interface Industry {
  title: string
  icon: string
  description: string
  color: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}
