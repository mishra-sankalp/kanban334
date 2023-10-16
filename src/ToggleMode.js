import React from "react";

function ToggleMode() {
  const toggleTheme = () => {
    alert("jh");
  };
  return (
    <div>
      <button className="btn" onClick={() => toggleTheme()}>
        Dark Theme
      </button>
    </div>
  );
}

export default ToggleMode;
