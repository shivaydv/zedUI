import React from "react";
import { Analytics as Vercel } from "@vercel/analytics/next";
import MSClarity from "./MsClarity";
import { GoogleAnalytics } from "@next/third-parties/google";

const Analytics = () => {
  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
      <MSClarity />
      <Vercel />
    </>
  );
};

export default Analytics;
