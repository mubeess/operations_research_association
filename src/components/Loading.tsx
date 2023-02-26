import React from "react";
import "./styles/loading.css";
import ClipLoader from "react-spinners/ClipLoader";

import LoadingImage from "../assets/Images/load.gif";
import { DotLoader } from "react-spinners";
interface LoadingProps {
  loading: boolean;
}

export default function Loading({ loading }: LoadingProps) {
  return (
    <div className={`loading ${loading ? "active" : null}`}>
      {/* <img src={LoadingImage} /> */}
      <DotLoader
        color='#33745d'
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
