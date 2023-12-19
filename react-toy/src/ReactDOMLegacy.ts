import { createContainer, updateContainer } from "./ReactFiberReconciler";

type Container = Element;

export function legacyCreateRootFromDOMContainer(container: Container) {
  return createRootImpl(container);
}

function createRootImpl(container: Container) {
  const root = createContainer(container);
  return root;
}

export function render(children, container) {
  const root = (container._reactRootContainer =
    legacyCreateRootFromDOMContainer(container));
  const fiberRoot = root._internalRoot;

  updateContainer(children, fiberRoot);
}
