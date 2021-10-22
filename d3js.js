const canvas = d3.select("div");

const svg = canvas.append("svg").attr("width", "100vw").attr("height", "100vh");

const Group = svg.append("g");

const posArr = [];
for (let i = 0; i < 500; i++) {
  posArr.push({ x: i * 10, y: 0 });
}
const negArr = [];

for(let i=1;i<500;i++){
  negArr.push({ x: -i * 10, y: 0 });
}

const arr = negArr.concat(posArr);

const scaleBarTop = Group.append("rect")
  .attr("width", "100vw")
  .attr("height", "50px")
  .attr("fill", "#2e1725")
  .attr("x", 50)
  .attr("y", 0)
  .style("opacity", 0.7);

const scaleBarLeft = Group.append("rect")
  .attr("width", 50)
  .attr("height", "100vh")
  .attr("fill", "#2e1725")
  .attr("x", 0)
  .attr("y", 0)
  .style("opacity", 0.7);

const grp = Group.selectAll("g").data(arr);

const g = grp.enter().append("g");

const text1 = g
  .append("text")
  .attr("dx", (d) => d.x*5 )
  .attr("dy", 25)
  .attr("fill","#FFF")
  .text((d) => d.x);

const text2 = g
  .append("text")
  .attr("dx", 15)
  .attr("dy", (d) => d.x * 5)
  .attr("fill", "#FFF")
  .text((d) => d.x);


   

  const layout = svg
    .append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("height", 300)
    .attr("width", 600)
    .attr("fill", "#d4450F")
    .style("opacity",0.5)
    .style("cursor", "pointer");

 


  text1.attr("transform", "translate(" + 25 + ",0)");
  text2.attr("transform", "translate(0," + 25+ ")");



 function dragstarted (event){
   d3.select(this).raise().attr("stroke", "#003dd7");
 };     

 function draged(event) {
     d3.select(this)
       .attr("x",  event.x-175)
       .attr("y",  event.y-175);

        text1.attr("transform", "translate(" +   (event.x-175) + ",0)");
        text2.attr("transform", "translate(0," + (event.y-175) + ")");
 }
  function dragended(event) {
    d3.select(this).attr("stroke", null);
  }
  layout.call(
    d3.drag().on("start", dragstarted).on("drag", draged).on("end", dragended)
  );