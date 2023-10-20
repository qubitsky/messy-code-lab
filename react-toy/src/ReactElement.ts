export interface ReactElement {
  type: any;
  props: any;
  key?: any;
}
export const createElement = (type, props: any = {}, children?: any[]) => {
  if (children) {
    props.children = children;
  }
  return {
    type,
    props,
  };
};
