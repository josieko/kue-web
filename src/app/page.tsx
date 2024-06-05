"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import MainTitle from "./title";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const [blurValue, setBlurValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 300;
      const blur = Math.min((scrollPosition / maxScroll) * 8);
      setBlurValue(blur);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main
        className={styles.description}
        style={{ filter: `blur(${blurValue}px)` }}
      >
        <MainTitle />
        <div className={styles.menuFruit}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Spline scene="https://prod.spline.design/5JypQuGG0lIkcwIT/scene.splinecode" />
            <text className={styles.menuText}>ABOUT</text>
          </div>
          <div
            style={{
              height: 200,
              width: 200,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Spline scene="https://prod.spline.design/TPpa5eskoSP1Ven5/scene.splinecode" />
            <a href="#listen">
              <text className={styles.menuText}>LISTEN</text>
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Spline scene="https://prod.spline.design/Pr31Ej9wVrHQqoC9/scene.splinecode" />
            <text className={styles.menuText}>BOOKING</text>
          </div>
        </div>
      </main>
      <div className={styles.listenSection}>
        <div className={styles.mixCLoudPlayerWrapper}>
          <a>
            <iframe
              width="440"
              height="120"
              src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fkuej%2Fsummer-snack-240%2F"
              frameborder="0"
            ></iframe>
          </a>
          <a>
            <iframe
              width="440"
              height="120"
              src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fkuej%2Fsummer-snack-11%2F"
              frameborder="0"
            ></iframe>
          </a>
        </div>
      </div>
      <div className={styles.footerWrapper}>
        <ul>
          <li>
            <text className={styles.footerText}>Made by JosieKo</text>
          </li>
        </ul>
      </div>
    </>
  );
}
