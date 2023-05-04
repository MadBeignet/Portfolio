//import "./canvas.css";
import "./DoublePendulum.css";
import { useRef, useEffect } from "react";
import frameRenderer from "./frameRenderer";

function DoublePendulum() {
  const rect = { top: 100, left: 100 };
  let Running = false;
  let isDown = 0;
  let path = [];
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);

  // const g = useRef({g: 0.02});
  const g = 9.8;
  //const [g, setGVal] = useState(9.8);
  //const [m1, setM1] = useState(0.1);
  //const [m2, setM2] = useState(0.1);
  //const [l1, setL1] = useState(10);
  //const [l2, setL2] = useState(10);
  const deltaT = 0.03;
  const p1Ref = useRef({
    l: 1,
    m: 0.1,
    theta: 0,
    thetaV: 0,
    thetaA: 0,
    x: Math.cos(Math.PI / 4),
    y: Math.sin(Math.PI / 4),
    radius: 10,
  });

  const p2Ref = useRef({
    l: 1,
    m: 0.1,
    theta: 45,
    thetaV: 0,
    thetaA: 0,
    x: p1Ref.current.x + Math.sin(Math.PI / 4),
    y: p1Ref.current.y + Math.cos(Math.PI / 4),
    radius: 10,
  });
  const size = { width: 450, height: 450 };
const f1 = (theta1, theta2, omega1, omega2, mass1, mass2, length1, length2) => {
    return (-g * (2 * mass1 + mass2) * Math.sin(theta1) +
          -mass2 * g * Math.sin(theta1 - 2 * theta2) +
          -2 *
            Math.sin(theta1 - theta2) *
            mass2 *
            (omega2 ** 2 * length2 +
              omega1 ** 2 *
                length1 *
                Math.cos(theta1 - theta2))) /
        (length1 *
          (2 * mass1 +
            mass2 -
            mass2 * Math.cos(2 * theta1 - 2 * theta2)));
          };
  const f2 = (theta1, theta2, omega1, omega2, mass1, mass2, length1, length2) => {
    return (2 *
          Math.sin(theta1 - theta2) *
          (omega1 ** 2 * length1 * (mass1 + mass2) +
            g * (mass1 + mass2) * Math.cos(theta1) +
            omega2 ** 2 *
              length2 *
              mass2 *
              Math.cos(theta1 - theta2))) /
        (length2 *
          (2 * mass1 +
            mass2 -
            mass2 * Math.cos(2 * theta1 - 2 * theta2)));
          };
  
      
  const lagrange = (vals) => {
    
    let L_1 = 10;
    let L_2 = 10;
    let m_1 = 0.1;
    let m_2 = 0.1;

    let t1 = vals[0];
    let t2 = vals[1];
    let o1 = vals[2];
    let o2 = vals[3];
    
    //let a1 = (L_2/L_1) * (m_2 / (m_1 + m_2)) * Math.cos(t1-t2);
    //let a2 = (L_1/L_2) * Math.cos(t1-t2);
    //let f1 = -(L_2 / L_1) * (m_2 / (m_1 + m_2)) * (o2^2) * Math.sin(t1-t2) - (g / L_1) * Math.sin(t1);
    //let f2 = (L_1 / L_2) * (o1^2) * Math.sin(t1-t2) - (g / L_2) * Math.sin(t2);
    //let g1 = (f1 - a1 * f2) / (1 - a1 * a2);
    //let g2 = (f2 - a2 * f1) / (1 - a1 * a2);
    let g1 = f1(t1, t2, o1, o2, m_1, m_2, L_1, L_2);
    let g2 = f2(t1, t2, o1, o2, m_1, m_2, L_1, L_2);
    return [o1, o2, g1, g2];
  };
  const updateBall = () => {
    const weight1 = p1Ref.current;
    const weight2 = p2Ref.current;
    //console.log("Running: " + Running);
    if (Running) {
      //setbutton("⏸");
      
      //console.log("Running");

      let vals = [weight1.theta, weight2.theta, weight1.thetaV, weight2.thetaV];
      let k1 = lagrange(vals);
      //console.log(k1);
      let k2 = lagrange(k1.map((num, idx) => {
        return vals[idx] + num * deltaT / 2;
      }));

      let k3 = lagrange( k2.map((num, idx) => {
        return vals[idx] + num * deltaT / 2;
      }));
      let k4 = lagrange(k3.map((num, idx) => {
        return vals[idx] + num * deltaT;
      }));
      let new_vals = vals.map((num, idx) => {
        return num + (k1[idx] + 2 * k2[idx] + 2 * k3[idx] + k4[idx]) * deltaT / 6;
      });
      //let new_vals = vals + (k1 + 2 * k2 + 2 * k3 + k4) * deltaT / 6;

      weight1.theta = new_vals[0];
      weight2.theta = new_vals[1];
      weight1.thetaV = new_vals[2];
      weight2.thetaV = new_vals[3];
      // console.log(weight1.theta);
      // console.log(weight2.theta);

      //weight1.thetaV += weight1.thetaA;
      //weight1.theta += weight1.thetaV;
      //weight2.thetaV += weight2.thetaA;
      //weight2.theta += weight2.thetaV;

      // g = ω′[:, k] + f(t[k], θ[1,k],θ[2,k],ω[1, k], ω[2,k]) * Δt / 2;
      //  ω′[:, k + 1] =  ω′[:, k] + f(t[k] + Δt / 2,θ[1,k], θ[2,k] ,g[1], g[2]) * Δt
      //let gval1 = weight1.thetaA + f1(weight1.theta, weight2.theta, weight1.thetaV, weight2.thetaV, weight1.m, weight2.m, weight1.l, weight2.l);
      //let gval2 = weight2.thetaA + f2(weight1.theta, weight2.theta, weight1.thetaV, weight2.thetaV, weight1.m, weight2.m, weight1.l, weight2.l);
      //weight1.thetaA += f1(weight1.theta, weight2.theta, gval1, gval2, weight1.m, weight2.m, weight1.l, weight2.l);
      //weight2.thetaA += f2(weight1.theta, weight2.theta, gval1, gval2, weight1.m, weight2.m, weight1.l, weight2.l);
      // weight2.thetaA =
      //   (2 *
      //     Math.sin(weight1.theta - weight2.theta) *
      //     (weight1.thetaV ** 2 * weight1.l * (weight1.m + weight2.m) +
      //       g * (weight1.m + weight2.m) * Math.cos(weight1.theta) +
      //       weight2.thetaV ** 2 *
      //         weight2.l *
      //         weight2.m *
      //         Math.cos(weight1.theta - weight2.theta))) /
      //   (weight2.l *
      //     (2 * weight1.m +
      //       weight2.m -
      //       weight2.m * Math.cos(2 * weight1.theta - 2 * weight2.theta)));

      // weight1.thetaA =
      //   (-g * (2 * weight1.m + weight2.m) * Math.sin(weight1.theta) +
      //     -weight2.m * g * Math.sin(weight1.theta - 2 * weight2.theta) +
      //     -2 *
      //       Math.sin(weight1.theta - weight2.theta) *
      //       weight2.m *
      //       (weight2.thetaV ** 2 * weight2.l +
      //         weight1.thetaV ** 2 *
      //           weight1.l *
      //           Math.cos(weight1.theta - weight2.theta))) /
      //   (weight1.l *
      //     (2 * weight1.m +
      //       weight2.m -
      //       weight2.m * Math.cos(2 * weight1.theta - 2 * weight2.theta)));
      
      weight1.x = Math.sin(weight1.theta);
      weight1.y = Math.cos(weight1.theta);
      weight2.x = weight1.x + Math.sin(weight2.theta);
      weight2.y = weight1.y + Math.cos(weight2.theta);
      path.push({ x: weight2.x, y: weight2.y });
      if (path.length > 1000) {
        path.shift();
      }
    } else {
      //console.log(isDown);
    }
  };
  const updateBallCoords = (coords) => {
    const weight1 = p1Ref.current;
    const weight2 = p2Ref.current;
    let angle = 0;
    switch (isDown) {
      case 1:
        angle =
          Math.PI / 2 -
          Math.atan2(coords.y - size.height / 2, coords.x - size.width / 2);
        weight1.theta = angle;
        weight1.x = Math.sin(angle);
        weight1.y = Math.cos(angle);
        weight2.x = weight1.x + Math.sin(weight2.theta);
        weight2.y = weight1.y + Math.cos(weight2.theta);
        break;
      case 2:
        angle = Math.atan2(
          coords.x - weight1.x * 100 - 225,
          coords.y - weight1.y * 100 - 225
        );
        //console.log("test1: " + (coords.x - weight1.x * 100 - 225));
        weight2.theta = angle;
        weight2.x = weight1.x + Math.sin(angle);
        weight2.y = weight1.y + Math.cos(angle);
        //isDown++;
        break;
      default:
        break;
      // nothing
    }
  };

  const renderFrame = () => {
    const ctx = canvasRef.current.getContext("2d");
    updateBall();
    frameRenderer.call(ctx, size, p1Ref.current, p2Ref.current, path);
  };

  const tick = () => {
    if (!canvasRef.current) return;
    renderFrame();
    requestIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  });

  const handleMouseEvent = (e) => {
    //console.log("hello");
    //console.log(isDown);
    if (!Running && isDown < 2) {
      isDown++;
      updateBallCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const Enable = () => {
    //setTimeout(() => {setRunning(isDown >=2)}, 1000);
    //setTimeout(() => {setRunning(isDown >=2)}, 1000);
    if (isDown === 2) {
      setTimeout(() => {
        Running = true;
        isDown++; /**/
      }, 1000);
    }
    //console.log("Running" + Running);
  };

  const Pause = () => {
    Running = !Running && isDown >= 2;
  };
  //const incG = () => setGVal(g + 0.01);
  //const decG = () => setGVal(g - 0.01 < 0 ? g : g - 0.01);

  var obj = (
    <canvas
      id="pendulum"
      {...size}
      ref={canvasRef}
      onMouseOut={Enable}
      onMouseUp={Enable}
      onMouseDown={handleMouseEvent}
    />
  );

  return (
    <div>
      {obj}
       <button className="pause-button" onClick={Pause}>
        ⏸ : ▶
      </button>
      <h1 id="instructions">Click graph to place the first and second weight</h1>
      {/*
      <div id="buttons" align="center">
        <span id="variable" align="center">
          <button onClick={incG}>+</button>
          <p>g: {g.toFixed(2)}</p>

          <button onClick={decG}>-</button>
        </span>
        <span id="variable" align="center">
          <button
            onClick={() => {
              setM1(m1 + 0.02);
              p1Ref.current.m += 0.02;
            }}
          >
            +
          </button>
          <p>m1: {m1.toFixed(2)}</p>

          <button
            onClick={() => {
              setM1(m1 - 0.02 < 0 ? m1 : m1 - 0.02);
              p1Ref.current.m =
                p1Ref.current.m - 0.02 < 0
                  ? p1Ref.current.m
                  : p1Ref.current.m - 0.02;
            }}
          >
            -
          </button>
        </span>
        <span id="variable" align="center">
          <button
            onClick={() => {
              setM2(m2 + 0.02);
              p2Ref.current.m += 0.02;
            }}
          >
            +
          </button>
          <p>m2: {m2.toFixed(2)}</p>

          <button
            onClick={() => {
              setM2(m2 - 0.02 < 0 ? m2 : m2 - 0.02);
              p2Ref.current.m =
                p2Ref.current.m - 0.02 < 0
                  ? p2Ref.current.m
                  : p2Ref.current.m - 0.02;
            }}
          >
            -
          </button>
        </span>
        <span id="variable" align="center">
          <button onClick={() => setL1(l1 + 1)}>+</button>
          <p>l1: {l1.toFixed(2)}</p>

          <button onClick={() => setL1(l1 - 1 < 0 ? l1 : l1 - 1)}>-</button>
        </span>
        <span id="variable" align="center">
          <button onClick={() => setL2(l2 + 1)}>+</button>
          <p>l2: {l2.toFixed(2)}</p>

          <button onClick={() => setL2(l2 - 1 < 0 ? l2 : l2 - 1)}>-</button>
        </span>
      </div> */}
    </div>
  );
}

export default DoublePendulum;
