import { useMediaQuery } from "@mantine/hooks";
import Breakpoints from "../../styles/breakPoints";

const useBreakpoints = () => {
  const xxsBreakpoint = useMediaQuery(Breakpoints.xxs);
  const xsBreakpoint = useMediaQuery(Breakpoints.xs);
  const smBreakpoint = useMediaQuery(Breakpoints.sm);
  const mdBreakpoint = useMediaQuery(Breakpoints.md);
  const lgBreakpoint = useMediaQuery(Breakpoints.lg);
  const xlBreakpoint = useMediaQuery(Breakpoints.xl);
  const xxlBreakpoint = useMediaQuery(Breakpoints.xxl);

  return {
    xxsBreakpoint,
    xsBreakpoint,
    mdBreakpoint,
    smBreakpoint,
    lgBreakpoint,
    xlBreakpoint,
    xxlBreakpoint,
  };
};

export default useBreakpoints;
