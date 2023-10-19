import { ReactElement } from "./ReactElement";

export function mountHost({ type, props }: ReactElement) {
  const node = document.createElement(type);
  const { children, ...restProps } = props;
  // 设置属性
  Object.keys(restProps).forEach((propName) => {
    node.setAttribute(propName, restProps[propName]);
  });
  if (children) {
    // 挂载子元素
    children.forEach((childElement) => {
      const childNode = mount(childElement);
      if (childNode) {
        node.appendChild(childNode);
      }
    });
  }
  return node;
}

export function mount(element: ReactElement) {
  const type = element.type;
  switch (typeof type) {
    case "string":
      return mountHost(element);
  }
}
