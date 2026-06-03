export type AssetGroup =
  | "us-equity" // 美股蓝筹 + ETF
  | "crypto" // 加密货币
  | "china-equity" // 中概股 / 港股
  | "commodity-fx" // 商品 + 外汇
  | "macro"; // 宏观信号（恐慌指数 / 利率 / 美元指数）

export interface TickerDef {
  symbol: string; // Yahoo Finance symbol
  displayName: string; // 中文展示名
  displayNameEn?: string; // English display name (falls back to displayName if absent)
  group: AssetGroup;
}

export function getDisplayName(t: TickerDef, locale: "zh" | "en"): string {
  return locale === "en" ? (t.displayNameEn ?? t.displayName) : t.displayName;
}

const ASSET_GROUP_LABELS_ZH: Record<AssetGroup, string> = {
  "us-equity": "美股 / ETF",
  crypto: "加密货币",
  "china-equity": "中概 / 港股",
  "commodity-fx": "商品 / 外汇",
  macro: "宏观信号",
};

const ASSET_GROUP_LABELS_EN: Record<AssetGroup, string> = {
  "us-equity": "US Stocks / ETF",
  crypto: "Crypto",
  "china-equity": "China / HK",
  "commodity-fx": "Commodities / FX",
  macro: "Macro",
};

export function getAssetGroupLabels(
  locale: "zh" | "en",
): Record<AssetGroup, string> {
  return locale === "en" ? ASSET_GROUP_LABELS_EN : ASSET_GROUP_LABELS_ZH;
}

export const ASSET_GROUP_ORDER: AssetGroup[] = [
  "macro",
  "us-equity",
  "crypto",
  "china-equity",
  "commodity-fx",
];

export const WATCHLIST: TickerDef[] = [
  // === 宏观信号（恐慌指数 / 利率 / 美元）===
  { symbol: "^VIX", displayName: "VIX 恐慌指数", displayNameEn: "VIX (Volatility)", group: "macro" },
  { symbol: "^TNX", displayName: "10Y 美债收益率 (%)", displayNameEn: "10Y Treasury Yield (%)", group: "macro" },
  { symbol: "DX-Y.NYB", displayName: "美元指数 DXY", displayNameEn: "DXY (US Dollar Index)", group: "macro" },
  // === 大盘参照 ===
  { symbol: "SPY", displayName: "S&P 500 ETF", group: "us-equity" },
  { symbol: "QQQ", displayName: "Nasdaq 100 ETF", group: "us-equity" },
  // === 当前持仓（按截图仓位排序）===
  { symbol: "NVDA", displayName: "Nvidia (17.62%)", displayNameEn: "Nvidia (17.62%)", group: "us-equity" },
  { symbol: "ORCL", displayName: "Oracle (10.87%)", displayNameEn: "Oracle (10.87%)", group: "us-equity" },
  { symbol: "MU", displayName: "Micron Technology (8.24%)", displayNameEn: "Micron Technology (8.24%)", group: "us-equity" },
  { symbol: "MRVL", displayName: "Marvell Technology (7.91%)", displayNameEn: "Marvell Technology (7.91%)", group: "us-equity" },
  { symbol: "PL", displayName: "Planet Labs (6.22%)", displayNameEn: "Planet Labs (6.22%)", group: "us-equity" },
  { symbol: "ASTS", displayName: "AST SpaceMobile (5.84%)", displayNameEn: "AST SpaceMobile (5.84%)", group: "us-equity" },
  { symbol: "RKLB", displayName: "Rocket Lab (5.25%)", displayNameEn: "Rocket Lab (5.25%)", group: "us-equity" },
  { symbol: "AMD", displayName: "AMD (5.14%)", displayNameEn: "AMD (5.14%)", group: "us-equity" },
  { symbol: "RDW", displayName: "Redwire (5.06%)", displayNameEn: "Redwire (5.06%)", group: "us-equity" },
  { symbol: "ASTC", displayName: "Astrotech (4.70%)", displayNameEn: "Astrotech (4.70%)", group: "us-equity" },
  { symbol: "GOOG", displayName: "Alphabet Class C (3.35%)", displayNameEn: "Alphabet Class C (3.35%)", group: "us-equity" },
  { symbol: "AVGO", displayName: "Broadcom (2.86%)", displayNameEn: "Broadcom (2.86%)", group: "us-equity" },
  { symbol: "AAPL", displayName: "Apple (2.70%)", displayNameEn: "Apple (2.70%)", group: "us-equity" },
  { symbol: "CSCO", displayName: "Cisco Systems (2.45%)", displayNameEn: "Cisco Systems (2.45%)", group: "us-equity" },
  { symbol: "TSLA", displayName: "Tesla (2.13%)", displayNameEn: "Tesla (2.13%)", group: "us-equity" },
  { symbol: "AMZN", displayName: "Amazon (2.08%)", displayNameEn: "Amazon (2.08%)", group: "us-equity" },
  { symbol: "MSFT", displayName: "Microsoft (1.88%)", displayNameEn: "Microsoft (1.88%)", group: "us-equity" },
  { symbol: "IBM", displayName: "IBM (1.72%)", displayNameEn: "IBM (1.72%)", group: "us-equity" },
  { symbol: "QCOM", displayName: "Qualcomm (1.66%)", displayNameEn: "Qualcomm (1.66%)", group: "us-equity" },
  { symbol: "CDNS", displayName: "Cadence Design Systems (1.52%)", displayNameEn: "Cadence Design Systems (1.52%)", group: "us-equity" },
  { symbol: "META", displayName: "Meta Platforms (0.79%)", displayNameEn: "Meta Platforms (0.79%)", group: "us-equity" },
];
