import React from "react";
import Image from "next/image";


export default function Cart() {
  return(
    <div>
      <div>
        <h2>Cart</h2>
        <Image 
          src="/close.svg"
          width={24}
          height={24}
          layout="responsive"
        />
      </div>
    </div>
  );
}