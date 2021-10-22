const canvas = d3.select("div");

const svg = canvas.append("svg").attr("width", "100vw").attr("height", "100vh");

const x = 400;
const y = 200;

const width = 400;
const height = 200;

const rect = svg
  .append("rect")
  .attr("x", x)
  .attr("y", y)
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "#0d002f")
  .style("opacity", 0.5);

let topLeft = [x, y];
let topRight = [x + width, y];
let bottomLeft = [x, y + height];
let bottomRight = [x + width, y + height];

console.log(topLeft, topRight, bottomLeft, bottomRight);
// generateCoordinateDisplay();

const centerCalculation = () => {
  return [width / 2 + x, height / 2 + y];
};

const [c1, c2] = centerCalculation();

const centerText = svg
  .append("text")
  .text("(" + c1 + "," + c2 + ")")
  .attr("dx", c1)
  .attr("dy", c2);

  const degree = Math.floor(Math.random()*360);
  const radians = () => {
    return (degree * Math.PI) / 180;
  };

  topLeft = calculateCoordinates(topLeft);
  topRight = calculateCoordinates(topRight);
  bottomLeft = calculateCoordinates(bottomLeft);
  bottomRight = calculateCoordinates(bottomRight);

  function calculateCoordinates(arr) {
    const x =
      c1 +
      (arr[0] - c1) * Math.cos(radians()) -
      (arr[1] - c2) * Math.sin(radians());
    const y =
      c2 +
      (arr[0] - c1) * Math.sin(radians()) +
      (arr[1] - c2) * Math.cos(radians());

    return [x, y];
  }

  console.log(topLeft, topRight, bottomLeft, bottomRight);

    const groupMain = svg
      .selectAll("g")
      .data([topLeft, topRight, bottomLeft, bottomRight]);

    const groupCoordinate = groupMain.enter().append("g");

    const gpText = groupCoordinate
      .append("text")
      .text((d, i) => {
        return "(" + d[0] + "," + d[1] + ")";
      })
      .attr("dx", (d) => {
        return d[0];
      })
      .attr("dy", (d) => {
        return d[1];
      });

  rect.attr("transform", "rotate(" + parseInt(degree) + "," + c1 + "," + c2 + ")");




