import type { Filter } from "../../../../../common/types/types";

const conditionsLeboncoin: Partial<Record<Filter, string>> = {
  conditionNew: "1",
  conditionNewWithTags: "1",
  conditionVeryGood: "2",
  conditionGood: "3",
  conditionParts: "4",
  conditionAcceptable: "5",
  conditionReconditioned: "6",
};

const conditionLeboncoinListings: Partial<Record<Filter, string>> = {
  conditionNew: "etatneuf",
  conditionNewWithTags: "etatneuf",
  conditionVeryGood: "tresbonetat",
  conditionGood: "bonetat",
  conditionAcceptable: "bonetat",
  conditionParts: "bonetat",
  conditionReconditioned: "tresbonetat",
};

const conditionsVinted: Partial<Record<Filter, string>> = {
  conditionNewWithTags: "status_ids%5B%5D=6",
  conditionNew: "status_ids%5B%5D=1",
  conditionVeryGood: "status_ids%5B%5D=2",
  conditionGood: "status_ids%5B%5D=3",
  conditionAcceptable: "status_ids%5B%5D=4",
  conditionParts: "status_ids%5B%5D=4",
  conditionReconditioned: "status_ids%5B%5D=2",
};
export { conditionsLeboncoin, conditionsVinted ,conditionLeboncoinListings};
