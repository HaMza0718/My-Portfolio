import { useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";

/**
 * Boots react-scroll events/spy using the project's existing setup so
 * header links and page scroll stay in sync. Native mouse-wheel scrolling
 * stays browser-driven with CSS scroll-behavior for smooth glide.
 */
const useSmoothScroll = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    const onResize = () => {
      scrollSpy.update();
    };

    window.addEventListener("resize", onResize);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("resize", onResize);
    };
  }, []);
};

export default useSmoothScroll;
