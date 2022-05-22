var ctx = document.getElementById("myChart").getContext("2d");
var cty = document.getElementById("myPie").getContext("2d");
const value = [9, 30, 26, 21, 12];
// const context = ["9%", "30%", "26%", "21%", "12%",]
// Chart.defaults.global.defaultFontColor = "#fff";
var myChart = new Chart(cty, {
  type: "doughnut",
  data: {
    labels: [
      "Agriculture",
      "Electricity",
      "Transportation",
      "Industry",
      "Commercial and Residental",
    ],
    datasets: [
      {
        label: "Average carbon footprint per year",
        data: [9, 30, 26, 21, 12],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255 , 0.5)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Mumbai", "Pune", "Aurangabad", "Ahmednagar", "Nashik"],
    datasets: [
      {
        label: "Average carbon footprint per year",
        data: [0.560758008, 0.456334856, 0.589773707, 0.563625533, 0.327060533],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255 , 0.5)",
        ],
        color: "#fff",
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});