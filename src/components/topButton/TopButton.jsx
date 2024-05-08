import { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import "./TopButton.scss";

export default function TopButton() {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = function () {
        if (window.scrollY === 0) {
          setIsScrolling(false);
        } else {
          setIsScrolling(true);
        }
      };
    }

    return () => {
      if (typeof window !== "undefined") {
        window.onscroll = null;
      }
    };
  }, []);

  return (
    <button className={isScrolling && "topBtn"} onClick={scrollToTop}>
      <IoIosArrowRoundUp />
    </button>
  );
}
