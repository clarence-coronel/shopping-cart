import { useEffect, useState } from "react";
import useData from "./hooks/useData";
import MainLayout from "./component/Layout/MainLayout";

function App() {
  const { data, loading, error } = useData();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <MainLayout>
      <span className="text-red-400"> Test</span>
    </MainLayout>
  );
}

export default App;
