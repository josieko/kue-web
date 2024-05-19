import styles from "./page.module.css";
import MainTitle from "./title";

export default function Home() {
  return (
    <main>
      <div className={styles.description}>
        <MainTitle />
      </div>
      <div className={styles.buttonWrap}>
        <button className={styles.button}>Latest Mixes</button>
      </div>
      <div
        style={{
          marginTop: 800,
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
