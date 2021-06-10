import React from "react";
import Image from "next/image";

export default function PlantCard({src, name, price}) {
  return(
    <div>
      <Image
        src={src}
        width={295}
        height={295}
        objectFit={"cover"}
      />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  )
}
