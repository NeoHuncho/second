import { Card, Loader } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import { appearMotion } from "../../animate/Animate";
import { CheckIcon, ErrorIcon } from "../../assets/icons";
import type { LoadingTypes, Shop, Shops } from "../../types/types";

type Props = {
  values: Shop[];
};

const LoadingShops = ({ values }: Props) => {
  return (
    <div className="flex w-full justify-center">
      <Card className="w-fit" shadow="sm" p="lg" radius="md" withBorder>
        <div className="flex  items-center justify-center gap-12">
          {values.map((value) => (
            <div
              key={value.name}
              id={value.name}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative h-8 w-20">
                <Image alt={value.name} src={value.image} fill />
              </div>
              {value.status === "success" ? (
                <motion.div
                  className="flex items-center justify-center"
                  {...appearMotion}
                >
                  <CheckIcon color="green" size={35} />
                </motion.div>
              ) : value.status === "loading" ? (
                <Loader />
              ) : (
                <motion.div
                  className="flex items-center justify-center"
                  {...appearMotion}
                >
                  <ErrorIcon size={35} />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default LoadingShops;
