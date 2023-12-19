import { initializeUpdateQueue } from "./ReactUpdateQueue";
import { FiberNode } from "./ReactFiber";

type Container = Element;

function FiberRootNode(containerInfo: Container, tag?, hydrate?) {
  this.tag = tag;
  // dom 节点
  this.containerInfo = containerInfo;
  this.pendingChildren = null;
  // FiberNode
  this.current = null;
  this.pingCache = null;
  this.finishedWork = null;
  // this.timeoutHandle = noTimeout;
  this.context = null;
  this.pendingContext = null;
  this.hydrate = hydrate;
  this.callbackNode = null;
  // this.callbackPriority = NoLanePriority;
  // this.eventTimes = createLaneMap(NoLanes);
  // this.expirationTimes = createLaneMap(NoTimestamp);

  // this.pendingLanes = NoLanes;
  // this.suspendedLanes = NoLanes;
  // this.pingedLanes = NoLanes;
  // this.expiredLanes = NoLanes;
  // this.mutableReadLanes = NoLanes;
  // this.finishedLanes = NoLanes;

  // this.entangledLanes = NoLanes;
  // this.entanglements = createLaneMap(NoLanes);

  // if (supportsHydration) {
  //   this.mutableSourceEagerHydrationData = null;
  // }

  // if (enableSchedulerTracing) {
  //   this.interactionThreadID = unstable_getThreadID();
  //   this.memoizedInteractions = new Set();
  //   this.pendingInteractionMap = new Map();
  // }
  // if (enableSuspenseCallback) {
  //   this.hydrationCallbacks = null;
  // }
}

export function createFiberRoot(containerInfo: Container) {
  const root = new FiberRootNode(containerInfo);
  const uninitializedFiber = createHostRootFiber();
  root.current = uninitializedFiber;
  uninitializedFiber.stateNode = root;

  initializeUpdateQueue(uninitializedFiber);

  return root;
}

function createHostRootFiber() {
  return new FiberNode(3, null, null, 0);
}
