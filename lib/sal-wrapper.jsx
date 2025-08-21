"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import sal from "sal.js";

const SalWrapper = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    sal();
  }, [pathname]);

  return <>{children}</>;
};

export default SalWrapper;
