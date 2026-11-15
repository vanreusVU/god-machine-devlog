import test from 'node:test'
import assert from 'node:assert/strict'
import { replayFrame, TAKE_LENGTH } from '../src/components/replay.ts'

test('the replay can be scrubbed forward and backward without changing its recorded path', () => {
  const before = replayFrame(3)
  replayFrame(7)
  replayFrame(1)
  assert.deepEqual(replayFrame(3), before)
})

test('the current soldier stays behind the replayed shield through the entire second take', () => {
  for (let elapsed = 0; elapsed <= TAKE_LENGTH; elapsed += 0.025) {
    const frame = replayFrame(elapsed)
    assert.ok(frame.runnerX < frame.shieldX, `Runner overtook the shield at ${elapsed}s`)
  }
  assert.equal(replayFrame(TAKE_LENGTH).finished, true)
  assert.equal(replayFrame(0).finished, false)
})

test('invalid and out-of-range times cannot move soldiers outside the scene', () => {
  assert.deepEqual(replayFrame(-10), replayFrame(0))
  assert.deepEqual(replayFrame(Number.NaN), replayFrame(0))
  assert.deepEqual(replayFrame(Number.POSITIVE_INFINITY), replayFrame(0))
  assert.deepEqual(replayFrame(1000), replayFrame(TAKE_LENGTH))
})
