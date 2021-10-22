const canvas = d3.select("div");

const svg = canvas.append("svg").attr("width", 1200).attr("height", 1200);

const controlGroup = svg.append("g")
const controlLine = controlGroup
  .append("line")
  .attr("x1", 100)
  .attr("x2", 400)
  .attr("y1", 50)
  .attr("y2", 50)
  .attr("stroke", "#003");

const controlMove = controlGroup.append("circle")
.attr("r",8)
.attr("cy",50)
.attr("cx",100)
.attr("stroke","#00f455")
.attr("stroke-width",6)
.attr("fill","#7040da")
.call(
  d3.drag().on("start",started).on("end",ended).on("drag",draged)
)


const dropCollection = []

function started(e) {
   d3.select(this).raise().attr("stroke","#43d");
}
function ended(e) {
  d3.select(this).attr("stroke", "#00f455");
}

function draged(e) {
  if(e.x>=400 || e.x<=100){
   dropCollection = []
   return;
  }
  d3.select(this).transition().delay(100).duration(100).attr("cx", e.x);
  dropCollection.push(e.x);
  const controlingPoint = svg.append('g').attr("transform", "translate(" + 600 + ", " + 0 + ")")
    .selectAll("circle")
    .data(dropCollection)
    controlingPoint.enter().append('circle').transition().delay(100).duration(100).attr("r",(d)=>d).attr('cx',(d)=>d+700).attr('cy',(d)=>d+600)
}
