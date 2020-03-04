import FrontityOrg from "../types";
import Theme from "./components";

const frontityOrg: FrontityOrg = {
  name: "frontity-org-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      colors: {
        frontity: "#1f38c5",
        primary: "#0f1c64",
        voidblu: "#0c112b",
        grass: "#82c315",
        wall: "#f6f6f9",
        purple: "#1f38c5",
        orange: "#f4c053",
        red: "#f76d64",
        turqoise: "#6ac8c9",
        lightgreen: "#8ACB88"
      }
    }
  },
  actions: {
    theme: {}
  },
  libraries: {
    theme: {
      colors: {
        addAlpha: (hex, alpha) =>
          `rgba(${hex
            .match(/^#(.{2})(.{2})(.{2})$/)
            .slice(1)
            .map(value => Number(`0x${value}`))
            .concat(alpha)
            .join(", ")})`
      }
    }
  }
};

export default frontityOrg;
