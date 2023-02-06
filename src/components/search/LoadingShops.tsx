import { Card, Image, Loader } from "@mantine/core";
import { motion } from "framer-motion";
import { CheckIcon } from "../../assets/icons";
type LoadingStates = {
  leboncoin: boolean;
  vinted: boolean;
};

type LoadingShopsProps = {
  loadingStates: LoadingStates;
  shops?: string[];
};

const LoadingShops = ({ loadingStates, shops }: LoadingShopsProps) => {
  return (
    <div className="flex w-full justify-center">
      <Card className="w-fit" shadow="sm" p="lg" radius="md" withBorder>
        <div className="flex  items-center justify-center gap-16">
          {!shops || shops.includes("leboncoin") ? (
            <div className="flex flex-col items-center gap-3">
              <Image
                src="https://imgs.search.brave.com/rpgqOoSrKg6qvtKAAAv1QysVnwo2ZEq4Sg0wTVKFFYc/rs:fit:1200:520:1/g:ce/aHR0cHM6Ly9pbW1v/Mi5wcm8vaW1hZ2Vz/L3dwLWltYWdlcy8y/MDE4LzAyL2xlYm9u/Y29pbi1lMTU2MTcz/NTkxODcwOS0xNjAw/eDUyMC5wbmc"
                alt="leboncoin"
                width={100}
                height={40}
                fit="contain"
              />
              {loadingStates.leboncoin ? <Loader /> : null}
              {/* {loadingStates.leboncoin ? (
                <CheckIcon color="green" size={35} />
              ) : null} */}
            </div>
          ) : null}
          {!shops || shops.includes("vinted") ? (
            <div className="flex flex-col items-center gap-3">
              <Image
                src="https://imgs.search.brave.com/zRtJU3HNNEPyGrrwigWjIDpcxpIVcuO06svBSBoBvT0/rs:fit:1200:615:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tWUFpOWZHb0tj/NjQvWHFSaU4xOVZU/dkkvQUFBQUFBQUFZ/UTgvR0UwOGY2Zkln/XzBHT19ycHQtUkVK/Q0tLUU5JT25wbDZB/Q05jQkdBc1lIUS9z/MTYwMC9WaW50ZWRf/bG9nby5wbmc"
                alt="vinted"
                width={100}
                height={40}
                fit="contain"
              />
              {/* {loadingStates.vinted ? <Loader /> : null} */}
              {loadingStates.vinted ? (
                <motion.div
                className="flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckIcon color="green" size={35} />
                </motion.div>
              ) : null}
            </div>
          ) : null}
        </div>
      </Card>
    </div>
  );
};

export default LoadingShops;
