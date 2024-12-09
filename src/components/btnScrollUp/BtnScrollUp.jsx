import React, { useCallback, useEffect, useState } from "react";
import "./btnscrollup.css";
const BtnScrollUp = () => {
  const [active, setActive] = useState(false);
  const onScroll = useCallback(() => window.scrollY, []);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (document.documentElement.clientHeight < window.scrollY) {
        setActive(true);
      } else setActive(false);
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`btn_scroll_up ${active ? "active" : ""}`}
      onClick={handlerScrollUp}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-arrow-up"
      >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
      </svg>
    </div>
  );
};

export default BtnScrollUp;
