const buildDetailPageName =
  <T extends string>(prefix: T) =>
  <R extends string>(suffix: R) =>
    `${prefix}-${suffix}` as const;

// 所有 TikTok Sight 页面注册
/**
 * 格式：大驼峰；对于详情页使用后缀区分，中划线隔离
 * 要求：不允许重复
 */
const TikTokSightPageNameDefine = {
  // Homepage
  WebHomepage: 'WebHomepage', // url_path = /

  // Trend hashtag
  TrendHashtagList: 'TrendHashtagList', // url_path = /top-tikTok-hashtag
  TrendHashtagDetail: buildDetailPageName('TrendHashtagDetail'), // url_path = /hashtag/${name}?id=${id}

  // Trend song
  TrendMusicList: 'TrendSongList', // url_path = /top-tikTok-song
  TrendMusicDetail: buildDetailPageName('TrendSongDetail'), // url_path = /song/${name}?id=${id}
} as const;

export type TikTokSightPageNameType = typeof TikTokSightPageNameDefine;

export type TikTokSightPageNameKeys = keyof TikTokSightPageNameType;

export type TikTokSightPageName = {
  [P in TikTokSightPageNameKeys]: TikTokSightPageNameType[P] extends <T extends string>(args: T) => infer R
    ? R
    : TikTokSightPageNameType[P];
}[TikTokSightPageNameKeys];

export default TikTokSightPageNameDefine;
