import { ReactType } from "react";
import Source from "@frontity/source/types";
import Router from "@frontity/router";
import Html2React from "@frontity/html2react/types";
import { Package } from "frontity/types";

interface FrontityOrg extends Package {
  name: "frontity-org-theme";
  roots: {
    theme: ReactType;
  };
  state: {
    theme: {
      colors: {
        frontity: string;
        primary: string;
        voidblu: string;
        grass: string;
        wall: string;
        purple: string;
        orange: string;
        red: string;
        turqoise: string;
        lightgreen: string;
      };
    };
    source?: Source["state"]["source"];
    router?: Router["state"]["router"];
  };
  actions: {
    theme: {};
  };
  libraries: {
    html2react?: Html2React["libraries"]["html2react"];
    theme: {
      colors: {
        addAlpha: (hex: string, alpha: number) => string;
      };
    };
  };
}

export default FrontityOrg;
