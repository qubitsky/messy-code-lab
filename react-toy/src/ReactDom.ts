import { ReactElement } from "./ReactElement";
import { instantiateComponent } from "./InnerComponent";

export function render(
  element: ReactElement,
  container: HTMLElement & {
    firstChild?: any;
  }
) {
  if (container.firstChild) {
    const prevRootComponent = container.firstChild._internalInstance;
    if (prevRootComponent) {
      const prevElement = prevRootComponent.currentElement;
      if (prevElement.type === element.type) {
        prevRootComponent.receive(element);
      }
    }
  }

  const rootComponent = instantiateComponent(element);
  const rootNode = rootComponent?.mount();
  container.appendChild(rootNode);
  rootNode._internalInstance = rootComponent;
  return rootComponent;
}

export function unmount(container) {
  const rootNode = container.firstChild;
  const rootComponent = rootNode._internalInstance;
  // 卸载树并清空容器
  rootComponent?.unmount();
  container.innerHTML = "";
}
