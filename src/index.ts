import { Options, setOptions } from "./utils/options";
import { trueSort as trueSort_ } from "./sorters/true-sort";

export const trueSort = <T>(data: T, options?: Options): T => {
  if (options !== undefined) {
    setOptions(options);
  }
  return trueSort_(data);
};

export default trueSort;
