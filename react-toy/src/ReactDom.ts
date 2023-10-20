import { ReactElement } from "./ReactElement";
import { instantiateComponent } from "./InnerComponent";

export function render(
  element: ReactElement,
  container: HTMLElement & {
    firstChild?: any;
  }
) {
  const rootComponent = instantiateComponent(element);
  const rootNode = rootComponent?.mount();
  container.appendChild(rootNode);
  rootNode._internalInstance = rootComponent;
  return rootComponent;
}
