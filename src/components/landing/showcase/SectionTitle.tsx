import { Title } from "@mantine/core";
import React from "react";

export default function SectionTitle({ text }: { text: string }) {
  return (
    <div className="flex w-full justify-center">
      <div className=" flex w-fit rounded-lg bg-purple px-5 py-2">
        <Title align="center" color="white" order={4}>
          {text}
        </Title>
      </div>
    </div>
  );
}
