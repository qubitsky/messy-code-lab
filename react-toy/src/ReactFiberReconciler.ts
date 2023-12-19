import { ReactElement } from "./ReactElement";
import { createFiberRoot } from "./ReactFiberRoot";
import { requestUpdateLane, scheduleUpdateOnFiber } from "./ReactFiberWorkLoop";

type Container = Element;

type FiberRoot = any;

export function requestEventTime() {}
export function createUpdate(time, lane): any {}
export function enqueueUpdate(fiber, update) {}

export function updateContainer(element: ReactElement, container: FiberRoot) {
  const current = container.current;
  const eventTime = requestEventTime();
  const lane = requestUpdateLane(current);
  const update = createUpdate(eventTime, lane);
  update.payload = { element };
  enqueueUpdate(current, update);
  scheduleUpdateOnFiber(current, lane);
}

export function createContainer(containerInfo: Container) {
  return createFiberRoot(containerInfo);
}
