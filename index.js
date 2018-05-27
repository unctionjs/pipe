import thrush from "@unction/thrush";
import reduceValues from "@unction/reducevalues";
export default function pipe(unctions) {
  return function pipeUnctions(initial) {
    return reduceValues(thrush)(initial)(unctions);
  };
}
