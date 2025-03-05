let ctx = document.getElementById("circle-canvas").getContext("2d");
ctx.arc(100, 100, 80, 0,2  * Math.PI);
ctx.lineWidth = 5; ctx.strokeStyle = '#17b38c'; ctx.stroke();