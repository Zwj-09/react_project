import React, { memo, useRef } from "react";
import ThemeSwitch from "@/components/ThemeSwitch";
import LazyLoad from "@/components/lazyLoad/index";
import myRequest from "@/service/request";

const Home: React.FunctionComponent = memo(() => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    console.log("asdas", divRef.current);

    myRequest.request({
      url: "/upload/file",
      method: "post",
    });
  };

  return (
    <div>
      <div ref={divRef} onClick={handleClick}>
        asctfvahsgjc sa
      </div>

      <ThemeSwitch />

      <LazyLoad />
    </div>
  );
});

export default Home;
