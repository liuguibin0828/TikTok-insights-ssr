import TikTokSightPageNameDefine, { TikTokSightPageName } from '@/utils/const';

export interface RouteMeta {
  description: string;
  thumb: string;
}

export interface RouteNewGuideMeta {
  newGuideText: string;
  buttonText: string;
  link?: string;
}

export interface Route {
  id: string;
  pageName: TikTokSightPageName;
  title: string;
  path: string;
  order: number;
  isNew: boolean;
  isUpdate: boolean;
  parentId?: string | null;
  meta?: RouteMeta;
  newGuideMeta?: RouteNewGuideMeta;
  position: 'left' | 'right';
  isLink?: boolean;
  hasChildren?: boolean;
}

const ugcTopContent: Route[] = [
  {
    id: '10',
    pageName: TikTokSightPageNameDefine.TrendHashtagList,
    title: 'Top TikTok Hashtags',
    path: '/top-tikTok-hashtag',
    parentId: null,
    isNew: false,
    isUpdate: false,
    order: 1,
    position: 'left',
  },
  {
    id: '20',
    pageName: TikTokSightPageNameDefine.TrendMusicList,
    title: 'Top TikTok Songs',
    path: '/top-tikTok-song',
    position: 'left',
    parentId: null,
    isNew: false,
    isUpdate: false,
    order: 2,
  },
];

// order is critical!
export const routeList = [
  ...ugcTopContent,
];
