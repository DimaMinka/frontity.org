import { css } from "frontity";

function createBordersProcessors(obj: {
  [prop: string]: ReturnType<typeof css>;
}) {
  return Object.entries(obj).map(([className, style]) => ({
    name: "borders",
    test: element => {
      return (
        element.type === "element" &&
        element.props.className?.split(/ +/).includes(className)
      );
    },

    process: element => {
      // Do nothing if this element is not an `element` (just a type guard).
      if (element.type !== "element") return element;

      // Return the new component
      return {
        ...element,
        props: {
          ...element.props,
          css: css`
            ${element.props.css || ""}
            ${style}
          `
        }
      };
    }
  }));
}

export default createBordersProcessors({
  "has-all-borders": css`
    border: 1px solid rgba(15, 28, 100, 0.12);
  `,
  "has-left-border": css`
    border-left: 1px solid rgba(15, 28, 100, 0.12);
  `,
  "has-right-border": css`
    border-right: 1px solid rgba(15, 28, 100, 0.12);
  `,
  "has-bottom-border": css`
    border-bottom: 1px solid rgba(15, 28, 100, 0.12);
  `,
  "has-top-border": css`
    border-top: 1px solid rgba(15, 28, 100, 0.12);
  `
});