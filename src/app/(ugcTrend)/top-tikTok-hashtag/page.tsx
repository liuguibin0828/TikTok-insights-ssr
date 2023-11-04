import { Button } from 'antd'
import styles from './page.module.css'

export default function HashtagTrend() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by TikTok Insights;
        </p>
      </div>

      <div className={styles.center}>
        <h2>Welcome to Top TikTok hashtag &nbsp;</h2>
        <Button type='primary'>Go to songs</Button>
      </div>
    </main>
  )
}
