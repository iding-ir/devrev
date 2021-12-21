import { useEffect, useState } from "react";

import { IData } from "./types";
import Chart from "./components/Chart/Chart";

function App() {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://mocki.io/v1/18936d28-2f79-4840-b146-5622e8ad1e77"
      );

      const data = await res.json();

      setData(data);
    };

    fetchData();
  }, []);

  return <Chart data={data} />;
}

export default App;
