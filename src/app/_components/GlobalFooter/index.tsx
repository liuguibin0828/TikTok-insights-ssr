import { TikTokSightPageName } from '@/utils/const';
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';


interface GlobalFooterProps {
  baseRoute?: string;
  logoOnly?: boolean;
  wrapperStyle?: string;
  styleConfig?: Record<string, any>;
  pageName?: TikTokSightPageName;
  footerStyle?: React.CSSProperties;
}

const GlobalFooter = ({
  wrapperStyle,
  footerStyle,
}: GlobalFooterProps) => {

  return (
    <>
      <footer
        className={`${styles.headerContainer} ${wrapperStyle}`}
        style={footerStyle}
      >
        <div className={styles.grid}>
          <Link
            href="/top-tikTok-hashtag"
            className={styles.card}
          >
            <h2>
              TikTok Hashtag <span>-&gt;</span>
            </h2>
            <p>Discover new trends on TikTok through hashtag.</p>
          </Link>

          <Link
            href="/top-tikTok-song"
            className={styles.card}
          >
            <h2>
              TikTok Songs <span>-&gt;</span>
            </h2>
            <p>Get Inspired through songs trending on TikTok.</p>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default GlobalFooter;
