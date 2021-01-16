//https://color.adobe.com/search?q=chart%20bar&page=2
import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";

function BarChart(props) {
  const [customView, setCustomView] = useState(5);

  let views = props.products.map((product) => {
    return { view: product.view, name: product.title };
  });

  let topViewed = views.sort((a, b) => b.view - a.view);

  let backgroundColor = [
    "rgb(4, 104, 191, 0.7)",
    "rgb(4, 119, 191, 0.7)",
    "rgb(80, 191, 180, 0.7)",
    "rgb(242, 196, 56, 0.7)",
    "rgb(242, 130, 65, 0.7)",
    "rgb(4, 104, 191, 0.7)",
    "rgb(4, 119, 191, 0.7)",
    "rgb(80, 191, 180, 0.7)",
    "rgb(242, 196, 56, 0.7)",
    "rgb(242, 130, 65, 0.7)",
  ];

  let borderColor = [
    "rgb(4, 104, 191)",
    "rgb(4, 119, 191)",
    "rgb(80, 191, 180)",
    "rgb(242, 196, 56)",
    "rgb(242, 130, 65)",
    "rgb(4, 104, 191)",
    "rgb(4, 119, 191)",
    "rgb(80, 191, 180)",
    "rgb(242, 196, 56)",
    "rgb(242, 130, 65)",
  ];

  let topSelectedview = [];
  let topSelectedProduct = [];
  let topBackgrountColor = [];
  let topBorderColor = [];

  for (let i = 0; i < customView; i++) {
    debugger;
    topSelectedview.push(topViewed[i].view);
    topSelectedProduct.push(topViewed[i].name);
    topBackgrountColor.push(backgroundColor[i]);
    topBorderColor.push(borderColor[i]);
  }

  let topSelectProductShort = topSelectedProduct.map((product) => {
    return `${product.slice(0, 20)}...`;
  });

  return (
    <div className="main-bar-div">
      <div className="bar-div">
        <Bar
          data={{
            labels: topSelectProductShort,
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: topBackgrountColor,
                borderColor: topBorderColor,
                borderWidth: 3,
                data: topSelectedview,
              },
            ],
          }}
          height={600}
          width={600}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
      <div id="div-top-list">
        <label style={{ padding: "0 18px" }}>
          <span style={{ padding: "5px" }}>
            <b>Top</b>
          </span>
          <input
            type="number"
            min="3"
            max="10"
            id="top-viewed-input"
            onChange={(e) => setCustomView(e.target.value)}
          />
          <span style={{ padding: "5px" }}>
            <b>viewed products</b>
          </span>
        </label>
        <br />
        <br />
        <ul>
          {topSelectedProduct.map((ele) => (
            <li id="div-top-list-li" key={ele}>
              {ele}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BarChart;
