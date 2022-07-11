import React, { useEffect, useRef, FC } from "react";
import { css } from "@emotion/css";
import Image from "next/image";

interface ImageProps {
  img: any;
}

export const ParallaxHorizontalScrollPage = (props: any) => {
  const screenRef = useRef<HTMLDivElement>(null);
  const type = typeof props.props;

  useEffect(() => {
    screenRef.current!.onwheel = (ev) => {
      ev.preventDefault();
      let delta = (ev.deltaY / Math.abs(ev.deltaY)) * window.innerWidth;
      if (delta > 0) {
        delta += screenRef.current!.scrollLeft;
        delta = Math.floor(delta / window.innerWidth) * window.innerWidth;
      } else {
        delta += screenRef.current!.scrollLeft;
        delta = Math.ceil(delta / window.innerWidth) * window.innerWidth;
      }
      screenRef.current!.scrollLeft = delta;
    };
  }, []);
  return (
    <div ref={screenRef} className={styles.screen}>
      <div className={styles.container}>
        <div className={styles.page("#0085d1")}>
          {type === "object" ? (
            <>
              {Object.values(props.props).map((item: any) => {
                return (
                  <div
                    style={{
                      position: "relative",
                      width: "500px",
                      height: "300px",
                    }}
                  >
                    <Image src={item} layout="fill" />;
                  </div>
                );
              })}
            </>
          ) : (
            <div
              style={{
                position: "relative",
                width: "500px",
                height: "300px",
              }}
            >
              <Image src={props.props} layout="fill" />;
            </div>
          )}
        </div>
        {/* <div className={styles.page("#db0063")}>
          <div className={styles.text}>Page 2</div>
        </div>
        <div className={styles.page("#ffcd43")}>
          <div className={styles.text}>Page 3</div>
        </div> */}
      </div>
    </div>
  );
};

const styles = {
  screen: css`
    position: relative;
    width: 100%;
    overflow: auto;
    scroll-behavior: smooth;
  `,
  container: css`
    width: 200vw;
    display: flex;
  `,
  page: (bgColor: string) => css`
    position: relative;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${bgColor};
  `,
  text: css`
    font-size: 3rem;
    color: white;
  `,
};
