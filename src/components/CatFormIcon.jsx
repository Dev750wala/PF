import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import React from 'react'

const CatFormIcon = () => {
  return (
        <DotLottieReact
            className="bg-transparent lottie-container"
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                zIndex: 1000,
            }}
            src="https://lottie.host/459c2b90-6a6d-48e7-b53f-b5db2fcf33b0/3gWxoj8mNk.lottie"
            loop
            autoplay
        />
    )
}

export default CatFormIcon

