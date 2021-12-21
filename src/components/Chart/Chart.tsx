import { CSSProperties } from "react";

import { IData } from "../../types";
import styles from "./styles.module.css";

interface IProps {
  data: IData[];
}

const style: CSSProperties = {
  borderRadius: "50%",
  backgroundColor: `rgba(130, 130, 130, ${Math.random()})`,
  border: "1px solid #666",
  position: "absolute",
  transform: "translate(-50%, -50%)",
};

const Chart = ({ data }: IProps) => {
  const render = () => {
    return data.map(({ title, salary, compratio, headcount }: IData) => {
      return (
        <div
          key={title}
          style={{
            ...style,
            width: salary / 2,
            height: salary / 2,
            top: `calc(300px + ${compratio}px)`,
            left: `calc(300px + ${headcount}px)`,
          }}
        ></div>
      );
    });
  };

  return <div className={styles.chart}>{render()}</div>;
};

export default Chart;
