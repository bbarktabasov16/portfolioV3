"use client";

import { useState, useEffect } from "react";
import App from "./App";
import Preloader from "@/components/Preloader/Preloader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, []);

  return <>{loading ? <Preloader /> : <App />}</>;
};

export default Home;
