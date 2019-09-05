import thrush from "@unction/thrush";
import reduceValues from "@unction/reducevalues";

export default function pipe<A, B, C> (unctions: Array<A>) {
  return function pipeUnctions (initial: B): C {
    return reduceValues(thrush)(initial)(unctions);
  };
}
