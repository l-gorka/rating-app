'use client'

import {Textarea} from "@nextui-org/react";

export default function TextField({value}) {
  return (
    <Textarea
      isReadOnly
      label="Description"
      variant="bordered"
      // labelPlacement="outside"
      defaultValue={value}
      placeholder="Enter your description"
    />
  );
}
