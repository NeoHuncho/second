import AddressDropdown from "./AddressDropdown";
import AddressRangeSlider from "./AddressRangeSlider";
import { ActionIcon } from "@mantine/core";
import { Icon } from "../../assets/icons";

type Props = {
  setOpened: (opened: boolean) => void;
  address: string;
};

const LocationOptions = ({ setOpened, address }: Props) => {
  return (
    <div>
      <div className="flex w-full flex-col items-center  justify-center gap-5">
        {address && (
          <ActionIcon
            onClick={() => setOpened(false)}
            className="absolute right-0 top-0"
          >
            <Icon name="Close" />
          </ActionIcon>
        )}
        <AddressDropdown />
        <AddressRangeSlider />
      </div>
    </div>
  );
};
export default LocationOptions;
