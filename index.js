import thrush from "@unction/thrush"
import reduceValues from "@unction/reducevalues"

export default function pipe (unctions: Array<mixed => mixed>): Function {
  return function pipeUnctions (initial: mixed): mixed {
    return reduceValues(
      thrush
    )(
      initial
    )(
      unctions
    )
  }
}
