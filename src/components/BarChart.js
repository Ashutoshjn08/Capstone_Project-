//https://color.adobe.com/search?q=chart%20bar&page=2
import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import logo from "../logo.png";

function BarChart(props) {
  const [customView, setCustomView] = useState(5);
  let productsArray = [];

  if (props.products[0]) {
    productsArray = props.products;
  } else {
    productsArray = JSON.parse(localStorage.getItem("products"));
  }

  let views = productsArray.map((product) => {
    return { view: product.view, name: product.title, id: product.id };
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
    topSelectedview.push(topViewed[i].view);
    topSelectedProduct.push({ name: topViewed[i].name, id: topViewed[i].id });
    topBackgrountColor.push(backgroundColor[i]);
    topBorderColor.push(borderColor[i]);
  }

  let topSelectProductShort = topSelectedProduct.map((product) => {
    return `${product.name.slice(0, 20)}...`;
  });

  return (
    

      <div className={views.length>10 ? "container main-bar-div" : "display-none"}>
        <div className="bar-div">
          <Bar
            data={{
              labels: topSelectProductShort,
              datasets: [
                {
                  label: "Views",
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
          <label
            style={{ padding: "0 18px", color: "white", fontSize: "25px" }}
          >
            <span style={{ padding: "5px" }}>
              <b>Top</b>
            </span>
            <input
              style={{ fontSize: "15px" }}
              type="number"
              min="3"
              max="10"
              id="top-viewed-input"
              onChange={(e) => {
                e.target.value <= 10 && e.target.value >= 3
                  ? setCustomView(e.target.value)
                  : setCustomView(5);
              }}
            />
            <span style={{ padding: "5px" }}>
              <b>viewed products</b> (only 3 to 10)
            </span>
          </label>
          <br />
          <br />
          <ul style={{ listStyleType: "none" }}>
            {topSelectedProduct.map((ele, ind) => (
              <li id="div-top-list-li" key={ele.id}>
                <span
                  style={{
                    color: topBorderColor[ind],
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >{`${ind + 1}. `}</span>
                <a
                  style={{
                    color: topBorderColor[ind],
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                  href={`/product/${ele.id}`}
                >
                  <b>{ele.name}</b>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
   
  );
}

export default BarChart;
