export const TAKE_LENGTH = 8

/** Presentation only: both takes replay exactly the same shield path. */
export function replayFrame(elapsed: number) {
  const safeTime = Number.isFinite(elapsed) ? elapsed : 0
  const progress = Math.max(0, Math.min(safeTime / TAKE_LENGTH, 1))
  return {
    progress,
    finished: progress === 1,
    shieldX: 100 + Math.min(progress / 0.68, 1) * 450,
    runnerX: 73 + progress * 470,
  }
}
