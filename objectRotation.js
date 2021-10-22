const canvas = d3.select("div");

const svg = canvas.append("svg").attr("width","100vw").attr("height","100vh");


const objectGroup = svg.append("g");

const block = objectGroup.append("rect").attr("width",300).attr("height",200).attr("fill","yellowgreen")
.attr("x","500").attr("y","200")



const rotationGroup = objectGroup.append("g")
      .attr("transform", "translate(" + (parseInt(block.attr('width'))/2+parseInt(block.attr('x')))/2 + ", " + (parseInt(block.attr("y"))-parseInt(block.attr("height"))) + ")");

const rotateLine = rotationGroup
  .append("line")
  .attr(
    "x1",
    (parseInt(block.attr("width")) / 2 + parseInt(block.attr("x"))) / 2
  )
  .attr("y1", block.attr("y") - 100)
  .attr(
    "x2",
    (parseInt(block.attr("width")) / 2 + parseInt(block.attr("x"))) / 2
  )
  .attr("y2", block.attr("y"))
  .attr("stroke", "yellowgreen").attr("stroke-width",3);

  const rotateCircle = rotationGroup
    .append("circle")
    .attr("r", 5)
    .attr(
      "cx",
      (parseInt(block.attr("width")) / 2 + parseInt(block.attr("x"))) / 2
    )
    .attr("cy", block.attr("y") - 100)
    .attr("fill", "yellowgreen").call(
        d3.drag().on("start",startedDraging)
        .on("drag",draging)
        .on("end",endedDraging)
    )


    function startedDraging(e){
         d3.select(this).raise().attr("stroke","blue");
    }

    function draging(e){
         objectGroup.attr(
           "transform",
           "rotate(" +
             angleBetweenPoints(
               e.x-300,
               e.y-200,
               parseInt(block.attr("width")) + parseInt(block.attr("x")),
               parseInt(block.attr("y")) + parseInt(block.attr("height"))
             ) +
             "," +
             (parseInt(block.attr("width")) / 2 + parseInt(block.attr("x"))) /
               2+
             "," +
             (parseInt(block.attr("y")) + block.attr("height") / 2) +
             ")"
         );
    }
    function endedDraging(e){
              d3.select(this).attr("stroke", null);
    }

    function angleBetweenPoints(p1, p2,p3,p4) {
        return Math.atan2(p4 - p2, p3 - p1);
    }

const blockName = objectGroup
  .append("text")
  .text("The Block")
  .attr(
    "dx",
    parseInt(block.attr("width")) / 2 +
      parseInt(block.attr("x"))-25
  )
  .attr("dy", parseInt(block.attr("y")) + block.attr("height") / 2)


