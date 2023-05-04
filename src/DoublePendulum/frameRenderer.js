function frameRenderer(size, weight1, weight2, path) {
    const drawCircle = (x, y, radius, color, alpha) => {
        this.save();
        this.beginPath();
        this.arc(x + size.width/2, y + size.height/2, radius, 0, Math.PI * 2);
        this.fillStyle = color;
        this.globalAlpha = alpha;
        this.fill();
        this.closePath();
        this.restore();
  };
  this.clearRect(0, 0, size.width, size.height);
    
    
  
    this.fillStyle = "white";
    this.fillRect(0, 0, size.width, size.height);
    this.beginPath();
    this.moveTo(225, 225);
    this.lineTo(weight1.x*100+size.width/2, weight1.y*100 + size.height/2);
    //ctx.arc(props.x1*100 + 150, props.y1*100, 10, 0, 2*Math.PI);
    this.lineTo(weight2.x*100+size.width/2, weight2.y*100 + size.height/2);
    this.stroke();
    this.moveTo(size.width/2, 0);
    this.lineTo(size.width/2, size.height);
    this.stroke();
    this.moveTo(0, size.height/2);
    this.lineTo(size.width, size.height/2);
    this.stroke();
  
    drawCircle(0,0, 5, "#FF0000");
    drawCircle(weight1.x*100, weight1.y*100, weight1.radius, "#444");
    drawCircle(weight2.x*100, weight2.y*100, weight2.radius, "#444");
    path.forEach(point => drawCircle(point.x*100, point.y*100, 0.75, "#303030"));
}

export default frameRenderer;
