import { ReactElement } from "./ReactElement";

export function instantiateComponent(element: ReactElement) {
  const type = element.type;
  switch (typeof type) {
    case "string":
      return new DOMComponent(element);
    case "function":
      return new FnComponent(element);
    default:
      return null;
  }
}

export class DOMComponent {
  currentElement: any;
  domNode: any;
  constructor(element) {
    this.currentElement = element;
  }

  mount() {
    const { type, props } = this.currentElement;
    const node = document.createElement(type);
    const { children, ...restProps } = props;
    // 设置属性
    Object.keys(restProps).forEach((propName) => {
      node.setAttribute(propName, restProps[propName]);
    });
    if (children) {
      // 挂载子元素
      const renderedChildren = children.map((child) => {
        if (typeof child === "string") {
          return {
            mount() {
              return document.createTextNode(child);
            },
          };
        } else {
          return instantiateComponent(child);
        }
      });
      const childNodes = renderedChildren
        .filter(Boolean)
        .map((child) => child.mount());
      childNodes.forEach((childNode) => node.appendChild(childNode));
    }
    return node;
  }
  unmount() {}
}

export class FnComponent {
  currentElement: any;
  renderedComponent: any;
  constructor(element) {
    this.currentElement = element;
  }
  mount() {
    const { type, props } = this.currentElement;
    const renderedElement = type(props);
    const renderedComponent = instantiateComponent(renderedElement);
    this.renderedComponent = renderedComponent;
    return renderedComponent?.mount();
  }
  unmount() {}
}
