import React, { memo, MouseEvent } from "react";
import { Switch } from "antd";
import { ThemeWrapper } from "./styled";
import SvgIcon from "src/components/SvgIcon/index"

interface DocType extends Document {
  startViewTransition: (callback?: unknown) => any;
}

const DarkIcon = memo(() => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6864"
      width="10"
      height="10"
      fill="#fff"
    >
      <path
        d="M676.64 72.373333a21.333333 21.333333 0 0 0-28.426667 24.96c7.733333 32 17.333333 77.973333 17.333334 108.64a407.36 407.36 0 0 1-585.173334 366.4 21.333333 21.333333 0 0 0-30.293333 23.04 469.333333 469.333333 0 0 0 485.333333 385.333334c243.84-11.84 439.413333-212.16 445.76-456.213334a469.333333 469.333333 0 0 0-304.533333-452.16zM512 906.666667a395.306667 395.306667 0 0 1-357.333333-226.4 2.186667 2.186667 0 0 1 2.453333-3.04 480 480 0 0 0 100.96 10.666666 482.506667 482.506667 0 0 0 481.92-481.92v-11.68a2.186667 2.186667 0 0 1 3.466667-1.813333 395.52 395.52 0 0 1 81.44 78.986667A390.826667 390.826667 0 0 1 906.666667 512a395.146667 395.146667 0 0 1-394.666667 394.666667zM202.293333 262.72a8.96 8.96 0 0 0 2.88 0.426667 75.946667 75.946667 0 0 1 75.733334 75.733333 7.626667 7.626667 0 0 0 0.48 2.88 11.52 11.52 0 0 0 22.186666 0 8.746667 8.746667 0 0 0 0.426667-2.88 76 76 0 0 1 75.733333-75.733333 8.746667 8.746667 0 0 0 2.88-0.426667 11.573333 11.573333 0 0 0 0-22.24 8.746667 8.746667 0 0 0-2.88-0.426667A75.946667 75.946667 0 0 1 304 164.32a8.746667 8.746667 0 0 0-0.426667-2.88 11.52 11.52 0 0 0-22.186666 0 7.626667 7.626667 0 0 0-0.48 2.88A75.893333 75.893333 0 0 1 205.386667 240a8.96 8.96 0 0 0-2.88 0.426667 11.573333 11.573333 0 0 0 0 22.24z"
        p-id="6865"
      ></path>
    </svg>
  );
});
const LightIcon = memo(() => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="8687"
      width="10"
      height="10"
      fill="#fff"
    >
      <path
        d="M520.021333 208.284444c-165.987556 0-301.041778 135.04-301.041777 301.027556 0 165.987556 135.04 301.027556 301.041777 301.027556 166.001778 0 301.056-135.025778 301.056-301.027556 0-165.987556-135.054222-301.027556-301.056-301.027556z m0 545.194667c-134.613333 0-244.152889-109.525333-244.152889-244.152889 0-134.627556 109.525333-244.138667 244.152889-244.138666 134.641778 0 244.167111 109.511111 244.167111 244.138666 0 134.641778-109.525333 244.152889-244.167111 244.152889z"
        fill=""
        p-id="8688"
      ></path>
      <path
        d="M493.027556 317.240889a164.949333 164.949333 0 0 0-141.212445 80.426667 14.250667 14.250667 0 0 0 24.476445 14.535111 136.32 136.32 0 0 1 116.736-66.517334 14.222222 14.222222 0 1 0 0-28.444444zM350.307556 433.265778a14.307556 14.307556 0 0 0-17.095112 10.595555c-2.773333 11.747556-4.323556 19.015111-4.323555 32.284445a14.222222 14.222222 0 1 0 28.444444 0c0-10.183111 1.095111-15.260444 3.569778-25.784889a14.222222 14.222222 0 0 0-10.595555-17.095111zM531.484444 846.222222a28.444444 28.444444 0 0 0-28.444444 28.444445v85.333333a28.444444 28.444444 0 0 0 56.888889 0v-85.333333a28.444444 28.444444 0 0 0-28.444445-28.444445zM531.484444 177.777778a28.444444 28.444444 0 0 0 28.444445-28.444445v-85.333333a28.444444 28.444444 0 0 0-56.888889 0v85.333333a28.444444 28.444444 0 0 0 28.444444 28.444445zM242.56 745.642667l-60.330667 60.330666a28.444444 28.444444 0 1 0 40.220445 40.220445l60.330666-60.330667a28.444444 28.444444 0 1 0-40.220444-40.220444zM775.552 281.315556c7.281778 0 14.549333-2.773333 20.110222-8.334223l60.330667-60.330666a28.444444 28.444444 0 1 0-40.220445-40.220445l-60.330666 60.330667a28.444444 28.444444 0 0 0 20.110222 48.554667zM242.56 272.981333c5.560889 5.560889 12.828444 8.334222 20.110222 8.334223a28.444444 28.444444 0 0 0 20.110222-48.554667l-60.330666-60.330667a28.444444 28.444444 0 1 0-40.220445 40.220445l60.330667 60.330666zM795.662222 745.642667a28.444444 28.444444 0 1 0-40.220444 40.220444l60.330666 60.359111c5.560889 5.560889 12.828444 8.334222 20.110223 8.334222s14.549333-2.773333 20.110222-8.334222c11.093333-11.107556 11.093333-29.112889 0-40.220444l-60.330667-60.359111zM149.333333 490.666667h-85.333333a28.444444 28.444444 0 0 0 0 56.888889h85.333333a28.444444 28.444444 0 0 0 0-56.888889zM960 490.666667h-85.333333a28.444444 28.444444 0 0 0 0 56.888889h85.333333a28.444444 28.444444 0 0 0 0-56.888889z"
        fill=""
        p-id="8689"
      ></path>
    </svg>
  );
});

const ThemeSwitch = memo(() => {
  const toggleTheme = (e: boolean, event: MouseEvent) => {
    const transition = (document as DocType).startViewTransition(() => {
      if (!e) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });

    transition.ready.then((res: any) => {
      const { clientX, clientY } = event;

      // 半径
      const radius = Math.hypot(
        Math.max(clientX, window.innerWidth - clientX),
        Math.max(clientY, window.innerHeight - clientY)
      );

      const isDark = document.documentElement.classList.contains("dark");

      const clipPath = [
        `circle(0px at ${clientX}px ${clientY}px)`,
        `circle(${radius}px at ${clientX}px ${clientY}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: isDark ? clipPath.reverse() : clipPath,
        },
        {
          duration: 500,
          pseudoElement: isDark
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <ThemeWrapper color="yellow">
      <SvgIcon />
      <Switch
        defaultChecked
        onChange={toggleTheme}
        checkedChildren={<DarkIcon />}
        unCheckedChildren={<LightIcon />}
      />
    </ThemeWrapper>
  );
});

export default ThemeSwitch;
