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
          { label: "Kidney beans", value: 62.14, color: "#853238" },
          { label: "Ground beef", value: 57.49, color: "#bc9172" },
          { label: "Rice", value: 56.46, color: "#d9d2c5" },
          { label: "Capsicum", value: 44.48, color: "#aa5315" },
          { label: "Cream", value: 40.0, color: "#d7dbe2" },
          { label: "Olive oil", value: 38.49, color: "#dad95e" },
          { label: "Tomato paste", value: 33.02, color: "#b52323" },
          { label: "Tomato puree", value: 32.71, color: "#952a21" },
          { label: "Onion paste", value: 31.41, color: "#d9cda4" },
          { label: "Soy sauce", value: 31.07, color: "#1c1412" },
          { label: "Glucose", value: 20.8, color: "#e2dfe1" },
          { label: "Nutritional yeast", value: 19.57, color: "#c5b56d" },
          { label: "Lemon juice", value: 19.04, color: "#dad4bd" },
          { label: "Salt", value: 17.1, color: "#e5e6e5" },
          { label: "Shallots", value: 16.26, color: "#efcbbe" },
          { label: "Coriander leaves", value: 12.81, color: "#379218" },
          { label: "Cumin", value: 12.81, color: "#ba8f4e" },
          { label: "Coriander seed", value: 12.6, color: "#ad8e67" },
          { label: "Garlic powder", value: 12.39, color: "#d9c3a6" },
          { label: "Paprika", value: 12.16, color: "#c03123" },
          { label: "Fresh garlic", value: 11.93, color: "#e6e1bc" },
          { label: "Chili powder", value: 10.32, color: "#b12e2f" },
          { label: "Pepper", value: 8.14, color: "#72523f" },
          { label: "Celery seed", value: 8.09, color: "#a18d4c" },
          { label: "Cinnamon", value: 7.83, color: "#a85b2f" },
          { label: "Marjoram", value: 7.72, color: "#6e6e51" }
        ]}
      />
    </div>
  );
}
