import React from "react";
import { Navigation } from 'modules/Navigation';
import { useDeviceDetect } from "hooks/useDeviceDetect";

export default function WithNavLayout({ children }) {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {!isMobile && <Navigation />}
      <>{children}</>
    </>
  )
};
