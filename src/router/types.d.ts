export type RouterType = {
  path: string;
  component: () => JSX.Element;
};
export type RouteConfig = {
  path?: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  component:
    | ((props: any) => JSX.Element)
    | React.LazyExoticComponent<(props: any) => JSX.Element>;
  routes?: RouteConfig[];
};
