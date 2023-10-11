function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    theta -= 90;
    if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
  }
  
  function lineDistance(x1, x2, y1, y2) {
    var xs, ys;
    xs = x2 - x1;
    xs = xs * xs;
  
    ys = y2 - y1;
    ys = ys * ys;
    return Math.sqrt(xs + ys);
  }
  