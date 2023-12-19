export interface ReactElement {
  type: any;
  props: any;
  key?: any;
}

export const createElement = (type, props, ...children) => {
  if (!props) {
    props = {};
  }
  if (children) {
    props.children = children;
  }
  return { type, props };
};
