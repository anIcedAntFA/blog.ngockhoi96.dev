export const scrollBehaviors = {
  INSIDE: 'inside',
  OUTSIDE: 'outside',
} as const;

export type ScrollBehaviorKey = keyof typeof scrollBehaviors;

export type ScrollBehavior = (typeof scrollBehaviors)[ScrollBehaviorKey];
