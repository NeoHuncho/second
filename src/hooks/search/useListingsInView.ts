import { useEffect, useRef, useState } from "react";
import type Swiper from "swiper";
import useBreakpoints from "../ui/useBreakpoints";

export default function useListingsInView() {
  const breakpoints = useBreakpoints();
  const [listingsInView, setListingsInView] = useState(0);
  useEffect(() => {
    if (!breakpoints.xsBreakpoint) setListingsInView(2);
    else if (!breakpoints.smBreakpoint) setListingsInView(3);
    else if (!breakpoints.mdBreakpoint) setListingsInView(4);
    else if (!breakpoints.lgBreakpoint) setListingsInView(5);
    else if (!breakpoints.xlBreakpoint) setListingsInView(6);
    else if (!breakpoints.xxlBreakpoint) setListingsInView(7);
    else if (breakpoints.xxlBreakpoint) setListingsInView(8);
  }, [breakpoints]);
  return listingsInView;
}
