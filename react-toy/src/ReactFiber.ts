import { NoFlags } from "./ReactFiberFlags";

const NoLanes = 0;

export interface Fiber {
  // fiber的类型
  tag: number;
  key: string;
  elementType: any;

  return: Fiber | null;
  child: Fiber | null;
  sibling: Fiber | null;

  updateQueue: any;
  memoizedState: any;
}

export function FiberNode(
  tag: any,
  pendingProps: any,
  key: null | string,
  mode: any
) {
  // Instance
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.type = null;
  this.stateNode = null;

  // Fiber
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;

  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.dependencies = null;

  this.mode = mode;

  // Effects
  this.flags = NoFlags;
  this.subtreeFlags = NoFlags;
  this.deletions = null;

  this.lanes = NoLanes;
  this.childLanes = NoLanes;

  this.alternate = null;
}
