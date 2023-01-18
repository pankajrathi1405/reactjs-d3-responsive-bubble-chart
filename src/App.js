import React from "react";
import "./styles.css";
import BubbleChart from "@weknow/react-bubble-chart-d3";
import useScreenSize from "use-screen-size";

export default function App() {
  const size = useScreenSize();
  const bubbleClick = (label) => {
    console.log("Custom bubble click func");
  };
  const legendClick = (label) => {
    console.log("Customer legend click func");
  };

  return (
    <div>
      <BubbleChart
        graph={{
          zoom: 1
        }}
        width={size.width}
        height={2300}
        padding={5} // optional value, number that set the padding between bubbles
        showLegend={false} // optional value, pass false to disable the legend.
        //Custom bubble/legend click functions such as searching using the label, redirecting to other page
        bubbleClickFunc={bubbleClick()}
        legendClickFun={legendClick()}
        data={[
          { label: "Taxes", value: 100000 },
          { label: "Home Mortgage", value: 120000 },
          { label: "Home Upkeeping", value: 24000 },
          { label: "Health Insurance", value: 24000 },
          { label: "Auto Loan", value: 60000 },
          { label: "Other Payments", value: 100000 },
          { label: "Travel", value: 30000 },
          { label: "Life Exp. (food, clothes, util...)", value: 144000 }
        ]}
      />
    </div>
  );
}
