'use client'
import styles from "./page.module.css";
import MainTitle from "./title";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main>
      <div className={styles.description}>
        <MainTitle />
        <div style={{
          marginTop: 80,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",

        }}>
        <Spline scene="https://prod.spline.design/5JypQuGG0lIkcwIT/scene.splinecode" />
        <Spline scene="https://prod.spline.design/TPpa5eskoSP1Ven5/scene.splinecode" />
        <Spline scene="https://prod.spline.design/5JypQuGG0lIkcwIT/scene.splinecode" />
        </div>
      </div>
       
      <div className={styles.buttonWrap} >
        <text style={{
          color: "rgb(188, 181, 245)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: 24,
          fontFamily: "Bebas Neue",
          marginTop: -80,
          zIndex: 4,
          marginRight: 120
        }}>LISTEN</text>
        <text style={{
          color: "rgb(188, 181, 245)",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: 24,
          fontFamily: "Bebas Neue",
          marginTop: -80,
          zIndex: 4
        }}>BOOK NOW</text>
      </div>
      <div
        style={{
          marginTop: 180,
          marginBottom: 80,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 22,
        }}
      >
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
    </main>
  );
}
