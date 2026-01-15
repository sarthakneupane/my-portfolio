export default function ScrollDownIndicator({ targetId }) {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <div
        className="animate-bounce text-orange-500 text-3xl cursor-pointer"
        onClick={() => {
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        &#x2193; {/* Down arrow */}
      </div>
    </div>
  );
}
