import { Fiber } from "./ReactFiber";

export function requestUpdateLane(fiber: Fiber) {
  // Special cases
  return 1;
}

export function scheduleUpdateOnFiber(fiber: Fiber, lane: any) {
  const root = markUpdateLaneFromFiberToRoot(fiber, lane);

  performSyncWorkOnRoot(root);
}
function markUpdateLaneFromFiberToRoot(fiber, lane) {}
function getNextLanes(fiber, lanes) {}
function renderRootSync(fiber, lanes) {}
function commitRoot(root) {}
function ensureRootIsScheduled(fiber) {}

function performSyncWorkOnRoot(root: any) {
  const lanes = getNextLanes(root, 0);
  const exitStatus = renderRootSync(root, lanes);
  commitRoot(root);
  ensureRootIsScheduled(root);
}
