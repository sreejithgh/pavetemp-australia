// VICTORIA

var labels_victoria = [
  "Melbourne",
  "Swan Hill",
  "Bairnsdale",
  "Ballarat",
  "Benalla",
  "Bendigo",
  "Charlton",
  "Frankston",
  "Geelong",
  "Horsham",
];

var agpt_victoria = [24, 27, 22, 20, 26, 24, 25, 23, 23, 24];
var pavetemp_victoria = [25, 27, 22, 20, 27, 24, 26, 23, 22, 24];

var trace1_victoria = {
  x: labels_victoria,
  y: agpt_victoria,
  type: "bar",
  name: "AGPT",
  text: agpt_victoria.map(String),
  textposition: "auto",
  hoverinfo: "none",
  opacity: 0.5,
  marker: {
    color: "rgb(250,150,150)",
    line: {
      color: "rgb(8,48,107)",
      width: 1.5,
    },
  },
};

var trace2_victoria = {
  x: labels_victoria,
  y: pavetemp_victoria,
  type: "bar",
  name: "PaveTemp",
  text: pavetemp_victoria.map(String),
  textposition: "auto",
  hoverinfo: "none",
  marker: {
    color: "rgba(250,50,50,.5)",
    line: {
      color: "rgb(8,48,107)",
      width: 1.5,
    },
  },
};

var data_victoria = [trace1_victoria, trace2_victoria];

var layout_victoria = {
  title: {
    text: "<b>VICTORIA </b> <br> AGPT vs PaveTemp Outputs",
    font: {
      size: 18,
      // color: "rgba(200, 0, 0,.9)",
    },
  },
  yaxis: {
    title: "<b>WMAPT, &#8451;</b>",
    // color: "rgba(200,100, 20,.9)",
    // showgrid: true,
    zeroline: true,
    showline: true,
    range: [0, 45],
  },
};

var config_victoria = {
  responsive: true,
  toImageButtonOptions: {
    format: "svg", // one of png, svg, jpeg, webp
    filename: "victoria-wmapt",
    height: 600,
    width: 1100,
    scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
  },
  displaylogo: false,
};

Plotly.newPlot(
  "myDiv_victoria",
  data_victoria,
  layout_victoria,
  config_victoria
);

// TASMANIA AND SOUTH AUSTRALIAs

var labels_tasmaniasouthaustralia = [
  "Devonport",
  "Hobart",
  "Launceston",
  "Queenstown",
  "St Helens",
  "Adelaide",
  "Ceduna",
  "Keith",
  "Murray Bridge",
  "Port Augusta",
];

var agpt_tasmaniasouthaustralia = [20, 20, 20, 17, 20, 27, 26, 25, 26, 30];
var pavetemp_tasmaniasouthaustralia = [20, 20, 19, 16, 21, 27, 27, 25, 27, 30];

var trace1_tasmaniasouthaustralia = {
  x: labels_tasmaniasouthaustralia,
  y: agpt_tasmaniasouthaustralia,
  type: "bar",
  name: "AGPT",
  text: agpt_tasmaniasouthaustralia.map(String),
  textposition: "auto",
  hoverinfo: "none",
  opacity: 0.5,
  marker: {
    color: "rgb(250,170,180)",
    line: {
      color: "rgb(8,48,107)",
      width: 1.5,
    },
  },
};

var trace2_tasmaniasouthaustralia = {
  x: labels_tasmaniasouthaustralia,
  y: pavetemp_tasmaniasouthaustralia,
  type: "bar",
  name: "PaveTemp",
  text: pavetemp_tasmaniasouthaustralia.map(String),
  textposition: "auto",
  hoverinfo: "none",
  marker: {
    color: "rgba(200,50,75,.5)",
    line: {
      color: "rgb(8,48,107)",
      width: 1.5,
    },
  },
};

var data_tasmaniasouthaustralia = [
  trace1_tasmaniasouthaustralia,
  trace2_tasmaniasouthaustralia,
];

var layout_tasmaniasouthaustralia = {
  title: {
    text: "<b>TASMANIA AND SOUTH AUSTRALIA</b> <br> AGPT vs PaveTemp Outputs",
    font: {
      size: 18,
      // color: "rgba(250,150,170,1)",
    },
  },
  yaxis: {
    title: "<b>WMAPT, &#8451;</b>",
    // color: "rgba(70,30, 60,.5)",
    // showgrid: true,
    zeroline: true,
    showline: true,
    range: [0, 45],
  },
};

var config_tasmaniasouthaustralia = {
  responsive: true,
  toImageButtonOptions: {
    format: "svg", // one of png, svg, jpeg, webp
    filename: "tasmaniasouthaustralia-wmapt",
    height: 600,
    width: 1100,
    scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
  },
  displaylogo: false,
};

Plotly.newPlot(
  "myDiv_tasmaniasouthaustralia",
  data_tasmaniasouthaustralia,
  layout_tasmaniasouthaustralia,
  config_tasmaniasouthaustralia
);
// NEWSOUTH WALES AND AUSTRALIAN CAPITAL TERRITORY

var labels_actandnsw = [
  "Albury",
  "Bathurst",
  "Canberra",
  "Finley",
  "Forbes",
  "Kempsey",
  "Lismore",
  "Orange",
  "Richmond",
  "Young",
];

var agpt_actandnsw = [26, 22, 23, 27, 28, 29, 30, 20, 28, 25];
var pavetemp_actandnsw = [27, 22, 23, 26, 29, 28, 29, 21, 28, 25];

var trace1_actandnsw = {
  x: labels_actandnsw,
  y: agpt_actandnsw,
  type: "bar",
  name: "AGPT",
  text: agpt_actandnsw.map(String),
  textposition: "auto",
  hoverinfo: "none",
  opacity: 0.5,
  marker: {
    color: "rgb(200,100,200)",
    line: {
      color: "rgb(8,48,107)",
      width: 1.5,
    },
  },
};

var trace2_actandnsw = {
  x: labels_actandnsw,
  y: pavetemp_actandnsw,
  type: "bar",
  name: "PaveTemp",
  text: pavetemp_actandnsw.map(String),
  textposition: "auto",
  hoverinfo: "none",
  marker: {
    color: "rgba(250,75,150,.5)",
    line: {
      color: "rgb(8,48,107)",
      width: 1.5,
    },
  },
};

var data_actandnsw = [trace1_actandnsw, trace2_actandnsw];

var layout_actandnsw = {
  title: {
    text:
      "<b>NEWSOUTH WALES AND AUSTRALIAN CAPITAL TERRITORY</b> <br> AGPT vs PaveTemp Outputs",
    font: {
      size: 18,
      // color: "rgba(250,150,170,1)",
    },
  },
  yaxis: {
    title: "<b>WMAPT, &#8451;</b>",
    // color: "rgba(70,30, 60,.5)",
    // showgrid: true,
    zeroline: true,
    showline: true,
    range: [0, 45],
  },
};

var config_actandnsw = {
  responsive: true,
  toImageButtonOptions: {
    format: "svg", // one of png, svg, jpeg, webp
    filename: "actandnsw-wmapt",
    height: 600,
    width: 1100,
    scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
  },
  displaylogo: false,
};

Plotly.newPlot(
  "myDiv_actandnsw",
  data_actandnsw,
  layout_actandnsw,
  config_actandnsw
);

// WESTERN AUSTRALIA

var labels_westernaustralia = [
  "Albany",
  "Broome",
  "Bunbury",
  "Cape Leeuwin",
  "Carnarvon",
  "Esperance",
  "Eucla",
  "Geraldton",
  "Kalgoorlie",
  "Kununurra",
];

var agpt_westernaustralia = [24, 40, 26, 26, 34, 26, 27, 31, 30, 42];
var pavetemp_westernaustralia = [23, 40, 27, 26, 34, 25, 26, 30, 30, 41];

var trace1_westernaustralia = {
  x: labels_westernaustralia,
  y: agpt_westernaustralia,
  type: "bar",
  name: "AGPT",
  text: agpt_westernaustralia.map(String),
  textposition: "auto",
  hoverinfo: "none",
  opacity: 0.5,
  marker: {
    color: "rgb(180,140,50)",
    line: {
      color: "rgb(8,48,107)",
      width: 1.5,
    },
  },
};

var trace2_westernaustralia = {
  x: labels_westernaustralia,
  y: pavetemp_westernaustralia,
  type: "bar",
  name: "PaveTemp",
  text: pavetemp_westernaustralia.map(String),
  textposition: "auto",
  hoverinfo: "none",
  marker: {
    color: "rgba(240,120,75,.5)",
    line: {
      color: "rgb(8,48,107)",
      width: 1.5,
    },
  },
};

var data_westernaustralia = [trace1_westernaustralia, trace2_westernaustralia];

var layout_westernaustralia = {
  title: {
    text: "<b>WESTERN AUSTRALIA</b> <br> AGPT vs PaveTemp Outputs",
    font: {
      size: 18,
      // color: "rgba(250,150,170,1)",
    },
  },
  yaxis: {
    title: "<b>WMAPT, &#8451;</b>",
    // color: "rgba(70,30, 60,.5)",
    // showgrid: true,
    zeroline: true,
    showline: true,
    range: [0, 45],
  },
};

var config_westernaustralia = {
  responsive: true,
  toImageButtonOptions: {
    format: "svg", // one of png, svg, jpeg, webp
    filename: "westernaustralia-wmapt",
    height: 600,
    width: 1100,
    scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
  },
  displaylogo: false,
};

Plotly.newPlot(
  "myDiv_westernaustralia",
  data_westernaustralia,
  layout_westernaustralia,
  config_westernaustralia
);
// QUEENSLAND AND NORTHERN TERRITORY

var labels_qldnorthernterritory = [
  "Beaudesert",
  "Brisbane Region",
  "Cairns",
  "Clermont",
  "Maryborough",
  "Rockhampton",
  "Alice Springs",
  "Daly Waters",
  "Darwin",
  "Katherine",
];

var agpt_qldnorthernterritory = [31, 32, 37, 35, 32, 35, 33, 40, 41, 40];
var pavetemp_qldnorthernterritory = [30, 32, 37, 35, 32, 34, 35, 39, 40, 41];

var trace1_qldnorthernterritory = {
  x: labels_qldnorthernterritory,
  y: agpt_qldnorthernterritory,
  type: "bar",
  name: "AGPT",
  text: agpt_qldnorthernterritory.map(String),
  textposition: "auto",
  hoverinfo: "none",
  opacity: 0.5,
  marker: {
    color: "rgb(75,150,150)",
    line: {
      color: "rgb(8,48,107)",
      width: 1.5,
    },
  },
};

var trace2_qldnorthernterritory = {
  x: labels_qldnorthernterritory,
  y: pavetemp_qldnorthernterritory,
  type: "bar",
  name: "PaveTemp",
  text: pavetemp_qldnorthernterritory.map(String),
  textposition: "auto",
  hoverinfo: "none",
  marker: {
    color: "rgba(100,120,200,.5)",
    line: {
      color: "rgb(8,48,107)",
      width: 1.5,
    },
  },
};

var data_qldnorthernterritory = [
  trace1_qldnorthernterritory,
  trace2_qldnorthernterritory,
];

var layout_qldnorthernterritory = {
  title: {
    text:
      "<b>QUEENSLAND AND NORTHERN TERRITORY</b> <br> AGPT vs PaveTemp Outputs",
    font: {
      size: 18,
      // color: "rgba(250,150,170,1)",
    },
  },
  yaxis: {
    title: "<b>WMAPT, &#8451;</b>",
    // color: "rgba(70,30, 60,.5)",
    // showgrid: true,
    zeroline: true,
    showline: true,
    range: [0, 45],
  },
};

var config_qldnorthernterritory = {
  responsive: true,
  toImageButtonOptions: {
    format: "svg", // one of png, svg, jpeg, webp
    filename: "qldnorthernterritory-wmapt",
    height: 600,
    width: 1100,
    scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
  },
  displaylogo: false,
};

Plotly.newPlot(
  "myDiv_qldnorthernterritory",
  data_qldnorthernterritory,
  layout_qldnorthernterritory,
  config_qldnorthernterritory
);
// NEW ZEALAND

var labels_newzealand = [
  "Auckland",
  "Christchurch",
  "Dunedin",
  "Napier",
  "New Plymouth",
  "Nelson",
  "Westport",
  "Wellington",
  "Palmerston North",
];

var agpt_newzealand = [23, 19, 18, 21, 21, 21, 19, 20, 21];
var pavetemp_newzealand = [24, 18, 16, 22, 22, 21, 19, 21, 21];

var trace1_newzealand = {
  x: labels_newzealand,
  y: agpt_newzealand,
  type: "bar",
  name: "AGPT",
  text: agpt_newzealand.map(String),
  textposition: "auto",
  hoverinfo: "none",
  opacity: 0.5,
  marker: {
    color: "rgb(50,150,170)",
    line: {
      color: "rgb(8,48,107)",
      width: 1.5,
    },
  },
};

var trace2_newzealand = {
  x: labels_newzealand,
  y: pavetemp_newzealand,
  type: "bar",
  name: "PaveTemp",
  text: pavetemp_newzealand.map(String),
  textposition: "auto",
  hoverinfo: "none",
  marker: {
    color: "rgba(25,220,10,.5)",
    line: {
      color: "rgb(8,48,107)",
      width: 1.5,
    },
  },
};

var data_newzealand = [trace1_newzealand, trace2_newzealand];

var layout_newzealand = {
  title: {
    text: "<b>NEW ZEALAND</b> <br> AGPT vs PaveTemp Outputs",
    font: {
      size: 18,
      // color: "rgba(250,150,170,1)",
    },
  },
  yaxis: {
    title: "<b>WMAPT, &#8451;</b>",
    // color: "rgba(70,30, 60,.5)",
    // showgrid: true,
    zeroline: true,
    showline: true,
    range: [0, 45],
  },
};

var config_newzealand = {
  responsive: true,
  toImageButtonOptions: {
    format: "svg", // one of png, svg, jpeg, webp
    filename: "newzealand-wmapt",
    height: 600,
    width: 1100,
    scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
  },
  displaylogo: false,
};

Plotly.newPlot(
  "myDiv_newzealand",
  data_newzealand,
  layout_newzealand,
  config_newzealand
);
