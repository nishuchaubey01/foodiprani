import React, { useState, useEffect } from "react";

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = now.toLocaleDateString(undefined, options);
      setCurrentDate(formattedDate);
    };

    updateDate();

    // Update the date every second
    const interval = setInterval(updateDate, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>{currentDate}</h2>
      <br />
    </div>
  );
};

export default DateComponent;
