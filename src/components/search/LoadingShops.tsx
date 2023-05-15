import { Card, Loader, Text } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";
import { appearMotion } from "../../animate/Animate";
import { Icon } from "../../assets/icons";

import type { Shop } from "../../types/types";
import useLocalStorage from "../../stores/useLocalStorage";

type Props = {
  values: Shop[];
};

const LoadingShops = ({ values }: Props) => {
  const { deliveryMethod } = useLocalStorage();
  return (
    <div className="flex w-full justify-center">
      <Card className="w-fit" shadow="sm" p="md" radius="md" withBorder>
        <div className="flex  items-center justify-center gap-12">
          {values.map((value) => (
            <div
              key={value.name}
              id={value.name}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative h-8 w-20">
                <Image
                  className="select-none object-contain"
                  alt={value.name}
                  src={value.image}
                  fill
                />
              </div>
              {value.isDeliveryOnly && deliveryMethod === "location" ? (
                <motion.div
                  className="flex items-center justify-center"
                  {...appearMotion}
                >
                  <Text className="text-3xl" weight={600}>
                    📦
                  </Text>
                </motion.div>
              ) : value.status === "loading" ? (
                <Loader />
              ) : value.status === "success" ? (
                <motion.div
                  className="flex items-center justify-center"
                  {...appearMotion}
                >
                  <Icon name="FillCheckCircle" color="green" size={35} />
                </motion.div>
              ) : value.status === "no_results" ? (
                <motion.div
                  aria-label="Aucun résultat"
                  className="flex items-center justify-center"
                  {...appearMotion}
                >
                  <Icon name="Error" size={35} />
                </motion.div>
              ) : (
                <motion.div
                  className="flex items-center justify-center"
                  {...appearMotion}
                >
                  <Icon name="FillWarning" size={35} />
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
