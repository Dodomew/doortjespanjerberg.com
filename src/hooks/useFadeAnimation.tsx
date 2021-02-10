// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, { FunctionComponent, useEffect, useState } from "react";

interface FadeProps {
  show: boolean;
}

const Fade: FunctionComponent<FadeProps> = ({ show, children }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    <>
      {render && (
        <div
          style={{ animation: `${show ? "fadeIn" : "fadeOut"} 0.2s` }}
          onAnimationEnd={onAnimationEnd}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Fade;
