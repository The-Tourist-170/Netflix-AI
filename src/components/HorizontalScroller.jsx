import React, { useRef } from "react";

export default function HorizontalScroller({ children }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group">
      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                   bg-black/60 backdrop-blur-3xl text-red-800 font-bold text-3xl
                   p-3 rounded-full hover:bg-black/80 opacity-0 group-hover:opacity-100
                   transition shadow-lg"
        onClick={() => scroll("left")}
        aria-label="Scroll Left"
      >
        &#8592;
      </button>
      {/* Scrollable List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll hide-scrollbar scroll-smooth space-x-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {children}
      </div>
      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                   bg-black/60 backdrop-blur-md text-red-800 font-bold text-3xl
                   p-3 rounded-full hover:bg-black/80 opacity-0 group-hover:opacity-100
                   transition shadow-lg"
        onClick={() => scroll("right")}
        aria-label="Scroll Right"
      >
        &#8594;
      </button>
    </div>
  );
}