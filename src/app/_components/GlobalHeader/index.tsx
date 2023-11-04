import { TikTokSightPageName } from '@/utils/const';
import { TreeData, convertToTreeData } from '@/utils/func';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, {
  useMemo
} from 'react';
import { Route, routeList } from './const';
import styles from './index.module.scss';


interface FixedHeaderPcProps {
  baseRoute?: string;
  logoOnly?: boolean;
  wrapperStyle?: string;
  styleConfig?: Record<string, any>;
  pageName?: TikTokSightPageName;
  headerStyle?: React.CSSProperties;
}

const GlobalHeader = ({
  wrapperStyle,
  headerStyle,
}: FixedHeaderPcProps) => {

  const routes = useMemo(() => {
    return routeList.slice().sort((a, b) => a.order - b.order)
  }, []);

  const routesTree = convertToTreeData(routes);

  const renderRootRoute = (route: TreeData<Route>) => {
    return (
      <li
        key={route.id}
        className={styles.navItem}
      >
        <Link
          key={route.id}
          href={`${route.path}`}
          className={cx(styles.navTitle)}
        >
          <p>
            <span>{route.title}</span>
          </p>
        </Link>
      </li>
    );
  };

  return (
    <>
      <header
        className={`${styles.headerContainer} ${wrapperStyle}`}
        style={headerStyle}
      >
        <div className={styles.leftArea}>
          <Link
            href="/"
          >
            <Image
              src="/logo.png"
              alt="TikTok Sight Logo"
              className={styles.vercelLogo}
              width={40}
              height={40}
              priority
            />
          </Link>

          <ul className={styles.navList}>
            {routesTree?.map(route => renderRootRoute(route))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default GlobalHeader;
