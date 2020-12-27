module.exports = class Mutex {
  constructor() {
    this.locks_queue = Promise.resolve() // will be used to queue successive locks between processings
  }

  lock() {
    // the promise resolver that will be run in order to allow subsequent processings in the queue to happen
    let release_lock = () => {
      // do nothing
    }

    console.log(this)

    this.locks_queue = this.locks_queue.then(() => {
      // after the previous lock release, we return a new promise waiting for manual resolution (unlocking)
      return new Promise(release_lock)
    })

    return new Promise(resolve => { // we return a new promise for which the resolution will translate to the unlocking of the mutex
      release_lock = resolve // this assignation will allow for the locks queue to be progressively processed uppon each unlock
    })
  }
}
