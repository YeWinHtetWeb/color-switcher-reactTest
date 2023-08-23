/* eslint-disable react/prop-types */
export const ColorItem = ({ color, setColor }) => (
  <div
    className="color-item"
    style={{ "--bg-color": color }}
    onClick={setColor}
  ></div>
);
