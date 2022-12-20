import React from "react";
import { Navigation } from 'modules/Navigation';

export default function WithNavLayout({ children }) {
  return (
    <>
      <Navigation />
      <>{children}</>
    </>
  )
};
