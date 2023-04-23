import { useState } from "react";
import type { DeliveryMethod } from "../../../common/types/types";

const useLocation = () => {
  const [deliveryMethod, setDeliveryMethod] =
    useState<DeliveryMethod>("delivery");

  return { deliveryMethod, setDeliveryMethod };
};
export default useLocation;
