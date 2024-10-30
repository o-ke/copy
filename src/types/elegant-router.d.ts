
declare module '@/elegant-router/types' {
   type elegantConstRoute  =  import('@elegant-router/vue').ElegantConstRoute

  /**
   * route map
   */
  export type RouteMap = {
    "root": "/";
    "not-found": "/:pathMatch(.*)*";
    "403": "/403";
    "404": "/404";
    "500": "/500";
    "home": "/home";
    "iframe-page": "/iframe-page/:url";
    "login": "/login/:modules(pwd-login|code-login|register|reset-pwd|bind-wechat)?";
  };

  /**
   * route key
   */
  export type RouteKey = keyof RouteMap;

  /**
   * route path
   */
  export type RoutePath = RouteMap[RouteKey];

  /**
   *
   */
  export type LastLeveRouteKey = Extract<RouteKey,
    | "403",
    | "404",
    | "500",
    | "iframe-page",
    | "login",
    | "home"

  >
}
