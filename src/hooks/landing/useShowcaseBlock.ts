import repairablePhones from "../../../backend/static/landingShowcase/showcaseItem/repairablePhones";

export default function useShowcaseBlock() {
  const slides = {
    repairablePhones: repairablePhones,
  };
  return { slides };
}
