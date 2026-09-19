const KEYS = {
  goals: "uncharted-calendar-goals",
  goalFrames: "uncharted-calendar-goal-frames",
  logs: "time-log-calendar-entries",
  plans: "time-plan-calendar-plans",
  globalMemos: "time-management-calendar-global-memos",
  language: "time-management-calendar-language",
  themeColor: "time-management-calendar-theme-color",
};
const LEGACY_MEMO_KEYS = ["time-log-calendar-memos", "time-plan-calendar-memos"];

const START_YEAR = 2026;
const START_MONTH_INDEX = 7;
const YEARS_AHEAD = 2;
const WEEKDAYS = {
  ja: ["日", "月", "火", "水", "木", "金", "土"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};
const DEFAULT_THEME_COLOR = "#7b659e";
const I18N = {
  ja: {
    calendarsTitle: "UNCHARTED CALENDAR",
    settingsTitle: "設定",
    menu: "メニュー",
    menuOpen: "メニューを開く",
    settings: "設定",
    calendars: "カレンダー",
    goal: "目標",
    addGoalButton: "目標を追加",
    addGoalFrameButton: "枠を追加",
    goalPlaceholder: "目標を入力",
    goalDeleted: "目標を削除しました。",
    log: "ログ",
    plan: "プラン",
    globalMemo: "メモ",
    text: "エクスポート",
    import: "インポート",
    exportTitle: "EXPORT",
    importTitle: "IMPORT",
    actionLog: "行動記録",
    record: "記録",
    history: "履歴",
    textExport: "エクスポート",
    calendar: "カレンダー",
    currentTime: "現在",
    historyMode: "履歴",
    currentModeEnabled: "現在モードに切り替えました。",
    historyModeEnabled: "履歴モードに切り替えました。",
    oneDay: "1日",
    oneWeek: "1週間",
    oneMonth: "1ヶ月",
    planTab: "予定",
    logSection: "ログ",
    planSection: "プラン",
    logInputLabel: "行動記録",
    logDateTimeLabel: "日時",
    planInputLabel: "予定",
    saveLogButton: "記録する",
    savePlanButton: "予定する",
    countLabel: "{count}件",
    language: "言語",
    themeColor: "背景色",
    themeColorName: "テーマ色",
    japanese: "日本語",
    english: "English",
    themeColorChanged: "背景色を変更しました。",
    languageChanged: "言語を変更しました。",
    resetData: "内部情報のリセット",
    resetDataButton: "初期化する",
    resetDialogTitle: "本当に削除しますか？",
    resetDataWarning: "削除する前にエクスポートして外部へ保存することをお勧めします。",
    resetConfirmLabel: "削除する場合は delete と入力してください。",
    resetConfirmButton: "削除する",
    cancel: "キャンセル",
    resetDataTypeError: "データを全て削除する場合は delete と入力してください。",
    resetDataDone: "内部情報を初期化しました。",
    dayEmpty: "この日の項目はまだありません。",
    dayTitle: "{month}月{day}日",
    openCalendar: "カレンダーを開く",
    closeCalendar: "折りたたむ",
    all: "すべて",
    copy: "コピーする",
    saveHumanText: "ファイルに保存",
    saveMachineText: "インポート専用ファイルを保存",
    exportScope: "分類",
    exportRange: "範囲指定",
    exportHuman: "人間用",
    exportMachine: "インポート専用",
    logType: "記録",
    planType: "予定",
    memoType: "メモ",
    globalMemoInputLabel: "内容",
    saveGlobalMemoButton: "メモを保存",
    saveMemoButton: "メモを保存",
    date: "日付",
    cost: "負担",
    benefit: "利益",
    deleteConfirm: "本当に削除しますか？",
    logDeleted: "記録を削除しました。",
    planDeleted: "予定を削除しました。",
    globalMemoDeleted: "メモを削除しました。",
    saveLogPrompt: "記録内容を入力してください。",
    datePrompt: "日時を入力してください。",
    futureLogError: "未来の日時は記録できません。",
    logSaved: "{date} {time} の記録を保存しました。",
    planPrompt: "予定を入力してください。",
    pastPlanError: "過去の日時には予定を保存できません。",
    planSaved: "{date} {time} の予定を保存しました。",
    memoPrompt: "メモを入力してください。",
    memoDeleted: "メモを削除しました。",
    globalMemoSaved: "メモを保存しました。",
    noCopyText: "コピーできるテキストがありません。",
    noExportText: "保存できるテキストがありません。",
    copied: "テキストをクリップボードにコピーしました。",
    copyFailed: "コピーに失敗しました。手動でコピーしてください。",
    fileSaved: "保存ファイルを作成しました。",
    importScopeTitle: "インポート",
    invalidImportData: "インポート専用ファイルを選択してください。",
    noImportItems: "この分類でインポートできるデータがありません。",
    importDone: "{count}件をインポートしました。",
    importFileLabel: "インポート専用ファイル",
    importFilePrompt: "インポート専用ファイルを選択してください。",
  },
  en: {
    calendarsTitle: "UNCHARTED CALENDAR",
    settingsTitle: "Settings",
    menu: "Menu",
    menuOpen: "Open menu",
    settings: "Settings",
    calendars: "Calendar",
    goal: "Goal",
    addGoalButton: "Add Goal",
    addGoalFrameButton: "Add Frame",
    goalPlaceholder: "Enter a goal",
    goalDeleted: "Goal deleted.",
    log: "Log",
    plan: "Plan",
    globalMemo: "Memo",
    text: "Export",
    import: "Import",
    exportTitle: "EXPORT",
    importTitle: "IMPORT",
    actionLog: "Action Log",
    record: "Log",
    history: "History",
    textExport: "Export",
    calendar: "Calendar",
    currentTime: "Now",
    historyMode: "History",
    currentModeEnabled: "Switched to now mode.",
    historyModeEnabled: "Switched to history mode.",
    oneDay: "1 Day",
    oneWeek: "1 Week",
    oneMonth: "1 Month",
    planTab: "Plan",
    logSection: "Log",
    planSection: "Plan",
    logInputLabel: "Action Log",
    logDateTimeLabel: "Date and time",
    planInputLabel: "Plan",
    saveLogButton: "Save Log",
    savePlanButton: "Save Plan",
    countLabel: "{count} item",
    language: "Language",
    themeColor: "Background Color",
    themeColorName: "Theme Color",
    japanese: "Japanese",
    english: "English",
    themeColorChanged: "Background color updated.",
    languageChanged: "Language updated.",
    resetData: "Reset Internal Data",
    resetDataButton: "Reset",
    resetDialogTitle: "Are you sure you want to delete everything?",
    resetDataWarning: "We recommend exporting text and saving it outside this browser before deleting.",
    resetConfirmLabel: "Type delete to continue.",
    resetConfirmButton: "Delete",
    cancel: "Cancel",
    resetDataTypeError: "Type delete to delete all data.",
    resetDataDone: "Internal data has been reset.",
    dayEmpty: "No plans, logs, or memos for this day yet.",
    dayTitle: "{month}/{day}",
    openCalendar: "Open calendar",
    closeCalendar: "Collapse",
    all: "All",
    copy: "Copy",
    saveHumanText: "Save File",
    saveMachineText: "Save Import-Only File",
    exportScope: "Category",
    exportRange: "Range",
    exportHuman: "Readable",
    exportMachine: "Import-Only",
    logType: "Log",
    planType: "Plan",
    memoType: "Memo",
    globalMemoInputLabel: "Content",
    saveGlobalMemoButton: "Save Memo",
    saveMemoButton: "Save Memo",
    date: "Date",
    cost: "Cost",
    benefit: "Benefit",
    deleteConfirm: "Are you sure you want to delete this?",
    logDeleted: "Log deleted.",
    planDeleted: "Plan deleted.",
    globalMemoDeleted: "Memo deleted.",
    saveLogPrompt: "Please enter a log.",
    datePrompt: "Please enter a date and time.",
    futureLogError: "Future times cannot be logged.",
    logSaved: "Saved log for {date} {time}.",
    planPrompt: "Please enter a plan.",
    pastPlanError: "Plans cannot be saved for past times.",
    planSaved: "Saved plan for {date} {time}.",
    memoPrompt: "Please enter a memo.",
    memoDeleted: "Memo deleted.",
    globalMemoSaved: "Memo saved.",
    noCopyText: "There is nothing to copy.",
    noExportText: "There is nothing to save.",
    copied: "Copied to clipboard.",
    copyFailed: "Copy failed. Please copy it manually.",
    fileSaved: "Save file created.",
    importScopeTitle: "Import",
    invalidImportData: "Please choose an import-only file.",
    noImportItems: "There are no items to import for this category.",
    importDone: "Imported {count} items.",
    importFileLabel: "Import-Only File",
    importFilePrompt: "Please choose an import-only file.",
  },
};

const els = {
  appTitle: document.getElementById("appTitle"),
  drawerButton: document.getElementById("drawerButton"),
  drawerCloseButton: document.getElementById("drawerCloseButton"),
  drawer: document.getElementById("drawer"),
  drawerBackdrop: document.getElementById("drawerBackdrop"),
  drawerMenuLabel: document.getElementById("drawerMenuLabel"),
  drawerLinks: Array.from(document.querySelectorAll(".drawer-link")),
  settingsIconButton: document.getElementById("settingsIconButton"),
  currentHourMinute: document.getElementById("currentHourMinute"),
  currentSeconds: document.getElementById("currentSeconds"),
  currentMeta: document.getElementById("currentMeta"),
  heroSection: document.getElementById("heroSection"),
  goalView: document.getElementById("goalView"),
  goalList: document.getElementById("goalList"),
  addGoalFrameButton: document.getElementById("addGoalFrameButton"),
  calendarsView: document.getElementById("calendarsView"),
  recordLogScopeButton: document.getElementById("recordLogScopeButton"),
  recordPlanScopeButton: document.getElementById("recordPlanScopeButton"),
  recordMemoScopeButton: document.getElementById("recordMemoScopeButton"),
  calendarView: document.getElementById("calendarView"),
  calendarLogScopeButton: document.getElementById("calendarLogScopeButton"),
  calendarPlanScopeButton: document.getElementById("calendarPlanScopeButton"),
  calendarMemoScopeButton: document.getElementById("calendarMemoScopeButton"),
  textView: document.getElementById("textView"),
  importView: document.getElementById("importView"),
  settingsView: document.getElementById("settingsView"),
  activityInput: document.getElementById("activityInput"),
  logDateTimeInput: document.getElementById("logDateTimeInput"),
  setLogNowButton: document.getElementById("setLogNowButton"),
  saveLogButton: document.getElementById("saveLogButton"),
  logSectionHeading: document.getElementById("logSectionHeading"),
  logPanel: document.querySelector(".record-log-panel"),
  logDateTimeLabel: document.getElementById("logDateTimeLabel"),
  logInputLabel: document.getElementById("logInputLabel"),
  logCostInput: document.getElementById("logCostInput"),
  logBenefitInput: document.getElementById("logBenefitInput"),
  logCostLabel: document.getElementById("logCostLabel"),
  logBenefitLabel: document.getElementById("logBenefitLabel"),
  planTextInput: document.getElementById("planTextInput"),
  costInput: document.getElementById("costInput"),
  benefitInput: document.getElementById("benefitInput"),
  savePlanButton: document.getElementById("savePlanButton"),
  planSectionHeading: document.getElementById("planSectionHeading"),
  planPanel: document.querySelector(".record-plan-panel"),
  planInputLabel: document.getElementById("planInputLabel"),
  costLabel: document.getElementById("costLabel"),
  benefitLabel: document.getElementById("benefitLabel"),
  globalMemoInput: document.getElementById("globalMemoInput"),
  globalMemoInputPanel: document.getElementById("globalMemoInputPanel"),
  saveGlobalMemoButton: document.getElementById("saveGlobalMemoButton"),
  globalMemoSectionHeading: document.getElementById("globalMemoSectionHeading"),
  globalMemoInputLabel: document.getElementById("globalMemoInputLabel"),
  recordCalendarMonthLabel: document.getElementById("recordCalendarMonthLabel"),
  recordCalendarGrid: document.getElementById("recordCalendarGrid"),
  recordPrevPeriodButton: document.getElementById("recordPrevPeriodButton"),
  recordNextPeriodButton: document.getElementById("recordNextPeriodButton"),
  recordToggleCalendarButton: document.getElementById("recordToggleCalendarButton"),
  calendarMonthLabel: document.getElementById("calendarMonthLabel"),
  calendarGrid: document.getElementById("calendarGrid"),
  textCalendarMonthLabel: document.getElementById("textCalendarMonthLabel"),
  textCalendarGrid: document.getElementById("textCalendarGrid"),
  prevPeriodButton: document.getElementById("prevPeriodButton"),
  nextPeriodButton: document.getElementById("nextPeriodButton"),
  toggleCalendarButton: document.getElementById("toggleCalendarButton"),
  textPrevPeriodButton: document.getElementById("textPrevPeriodButton"),
  textNextPeriodButton: document.getElementById("textNextPeriodButton"),
  textToggleCalendarButton: document.getElementById("textToggleCalendarButton"),
  selectedDateLabel: document.getElementById("selectedDateLabel"),
  selectedEntries: document.getElementById("selectedEntries"),
  bottomNav: document.getElementById("bottomNav"),
  goalTabButton: document.getElementById("goalTabButton"),
  primaryTabButton: document.getElementById("primaryTabButton"),
  calendarTabButton: document.getElementById("calendarTabButton"),
  textTabButton: document.getElementById("textTabButton"),
  exportTabButton: document.getElementById("exportTabButton"),
  textExportOutput: document.getElementById("textExportOutput"),
  exportScopeHeading: document.getElementById("exportScopeHeading"),
  exportScopeAllButton: document.getElementById("exportScopeAllButton"),
  exportScopeLogButton: document.getElementById("exportScopeLogButton"),
  exportScopePlanButton: document.getElementById("exportScopePlanButton"),
  exportScopeMemoButton: document.getElementById("exportScopeMemoButton"),
  exportScopeGoalButton: document.getElementById("exportScopeGoalButton"),
  exportDayButton: document.getElementById("exportDayButton"),
  exportWeekButton: document.getElementById("exportWeekButton"),
  exportMonthButton: document.getElementById("exportMonthButton"),
  exportAllButton: document.getElementById("exportAllButton"),
  copyTextButton: document.getElementById("copyTextButton"),
  saveHumanTextButton: document.getElementById("saveHumanTextButton"),
  saveMachineTextButton: document.getElementById("saveMachineTextButton"),
  exportRangeHeading: document.getElementById("exportRangeHeading"),
  exportHumanHeading: document.getElementById("exportHumanHeading"),
  exportMachineHeading: document.getElementById("exportMachineHeading"),
  importLabel: document.getElementById("importLabel"),
  importFileLabel: document.getElementById("importFileLabel"),
  importFileInput: document.getElementById("importFileInput"),
  importDataButton: document.getElementById("importDataButton"),
  toastContainer: document.getElementById("toastContainer"),
  themeColorLabel: document.getElementById("themeColorLabel"),
  themeColorNameLabel: document.getElementById("themeColorNameLabel"),
  themeColorInput: document.getElementById("themeColorInput"),
  languageLabel: document.getElementById("languageLabel"),
  languageJaButton: document.getElementById("languageJaButton"),
  languageEnButton: document.getElementById("languageEnButton"),
  resetDataLabel: document.getElementById("resetDataLabel"),
  resetDataButton: document.getElementById("resetDataButton"),
  resetDialogBackdrop: document.getElementById("resetDialogBackdrop"),
  resetDialogTitle: document.getElementById("resetDialogTitle"),
  resetDialogMessage: document.getElementById("resetDialogMessage"),
  resetConfirmLabel: document.getElementById("resetConfirmLabel"),
  resetConfirmInput: document.getElementById("resetConfirmInput"),
  cancelResetButton: document.getElementById("cancelResetButton"),
  confirmResetButton: document.getElementById("confirmResetButton"),
};

let now = new Date();
let selectedDateKey = dateKeyFromDate(now);
let visibleMonthKey = monthKeyFromDate(now);
let currentView = "goal";
let currentMode = "log";
let calendarScope = "log";
let recordScope = "log";
let isCalendarExpanded = false;
let textExportMode = "all";
let textScope = "all";
let isLogNowMode = false;
let focusGoalId = "";
let language = loadLanguage();
let themeColor = loadThemeColor();
let lastThemeMode = "plan";
const activeToasts = new Map();
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function loadLanguage() {
  const saved = localStorage.getItem(KEYS.language);
  return saved === "en" || saved === "ja" ? saved : "ja";
}

function t(key, params = {}) {
  const text = I18N[language][key] || I18N.ja[key] || key;
  return text.replace(/\{(\w+)\}/g, (_, token) => String(params[token] ?? ""));
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.error(`Could not read ${key}`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function isHexColor(value) {
  return /^#[0-9a-f]{6}$/i.test(value);
}

function loadThemeColor() {
  const saved = readStorage(KEYS.themeColor, "");
  if (isHexColor(saved)) return saved;
  const legacy = readStorage("time-management-calendar-theme-colors", {});
  if (isHexColor(legacy.other)) return legacy.other;
  if (isHexColor(legacy.plan)) return legacy.plan;
  if (isHexColor(legacy.log)) return legacy.log;
  return DEFAULT_THEME_COLOR;
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((value) => pad(Math.max(0, Math.min(255, Math.round(value))).toString(16))).join("")}`;
}

function mixColors(color, target, amount) {
  const start = hexToRgb(color);
  const end = hexToRgb(target);
  return rgbToHex({
    r: start.r + (end.r - start.r) * amount,
    g: start.g + (end.g - start.g) * amount,
    b: start.b + (end.b - start.b) * amount,
  });
}

function colorAlpha(color, alpha) {
  const { r, g, b } = hexToRgb(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getThemePalette() {
  const base = themeColor;
  return {
    base,
    deep: mixColors(base, "#000000", 0.28),
    bg: `linear-gradient(160deg, ${mixColors(base, "#ffffff", 0.92)} 0%, ${mixColors(base, "#ffffff", 0.84)} 52%, ${mixColors(base, "#ffffff", 0.9)} 100%)`,
    entryBg: `linear-gradient(180deg, ${mixColors(base, "#ffffff", 0.96)} 0%, ${mixColors(base, "#ffffff", 0.82)} 100%)`,
    entryBorder: colorAlpha(base, 0.34),
    entryRing: colorAlpha(base, 0.12),
    outline: colorAlpha(base, 0.28),
    shadow: `0 20px 50px ${colorAlpha(base, 0.16)}`,
  };
}

function applyThemeColors() {
  const root = document.documentElement;
  const palette = getThemePalette();
  root.style.setProperty("--theme-bg", palette.bg);
  root.style.setProperty("--theme-entry-bg", palette.entryBg);
  root.style.setProperty("--theme-entry-border", palette.entryBorder);
  root.style.setProperty("--theme-entry-ring", palette.entryRing);
  root.style.setProperty("--theme-outline", palette.outline);
  root.style.setProperty("--theme-shadow", palette.shadow);
}

function dateKeyFromDate(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function monthKeyFromDate(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
}

function parseDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return { year, month, day };
}

function dateFromKey(dateKey) {
  const { year, month, day } = parseDateKey(dateKey);
  return new Date(year, month - 1, day);
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function parseDateTimeInput(value) {
  if (!value) return null;
  const [datePart, timePart] = value.split("T");
  if (!datePart || !timePart) return null;
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour, minute] = timePart.split(":").map(Number);
  if ([year, month, day, hour, minute].some(Number.isNaN)) return null;
  return { year, month, day, hour, minute };
}

function partsToDate(parts) {
  return new Date(parts.year, parts.month - 1, parts.day, parts.hour || 0, parts.minute || 0, 0);
}

function localDateTimeValue(date = new Date()) {
  return `${dateKeyFromDate(date)}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function formatTime(date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function formatSlashDate(parts) {
  return `${parts.year}/${pad(parts.month)}/${pad(parts.day)}`;
}

function formatDateHeader(dateKey) {
  const [, month, day] = dateKey.split("-");
  if (language === "ja") return `${Number(month)}月${Number(day)}日`;
  return `${Number(month)}/${Number(day)}`;
}

function formatCount(count) {
  if (language === "ja") return t("countLabel", { count });
  return `${count} ${count === 1 ? "item" : "items"}`;
}

function formatClockDate(date) {
  if (language === "ja") return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function loadGoals() {
  return readStorage(KEYS.goals, []);
}

function saveGoals(goals) {
  writeStorage(KEYS.goals, goals);
}

function loadGoalFramesRaw() {
  return readStorage(KEYS.goalFrames, []);
}

function saveGoalFrames(frames) {
  writeStorage(KEYS.goalFrames, frames);
}

function ensureGoalFrames() {
  let frames = loadGoalFramesRaw();
  let goals = loadGoals();
  const nowIso = new Date().toISOString();
  if (!frames.length) {
    if (!goals.length) return [];
    frames = [{
      id: crypto.randomUUID(),
      createdAt: nowIso,
      updatedAt: nowIso,
    }];
    goals = goals.map((goal) => goal.frameId ? goal : { ...goal, frameId: frames[0].id });
    saveGoalFrames(frames);
    saveGoals(goals);
    return frames;
  }
  const fallbackFrameId = frames[0].id;
  let didMigrate = false;
  goals = goals.map((goal) => {
    if (goal.frameId) return goal;
    didMigrate = true;
    return { ...goal, frameId: fallbackFrameId };
  });
  if (didMigrate) saveGoals(goals);
  return frames;
}

function pruneEmptyGoalFrames() {
  const frames = ensureGoalFrames();
  const goals = loadGoals();
  const usedFrameIds = new Set(goals.map((goal) => goal.frameId).filter(Boolean));
  const nextFrames = frames.filter((frame) => usedFrameIds.has(frame.id));
  if (nextFrames.length !== frames.length) saveGoalFrames(nextFrames);
  return nextFrames;
}

function loadLogs() {
  return readStorage(KEYS.logs, []);
}

function saveLogs(logs) {
  writeStorage(KEYS.logs, logs);
}

function loadPlans() {
  return readStorage(KEYS.plans, []);
}

function savePlans(plans) {
  writeStorage(KEYS.plans, plans);
}

function loadGlobalMemos() {
  return readStorage(KEYS.globalMemos, []);
}

function saveGlobalMemos(memos) {
  writeStorage(KEYS.globalMemos, memos);
}

function memoDateKey(memo) {
  if (memo.dateKey) return memo.dateKey;
  if (!memo.createdAt) return "";
  const createdAt = new Date(memo.createdAt);
  return Number.isNaN(createdAt.getTime()) ? "" : dateKeyFromDate(createdAt);
}

function migrateLegacyMemos() {
  const migrated = [];
  LEGACY_MEMO_KEYS.forEach((key) => {
    const raw = localStorage.getItem(key);
    if (!raw) return;
    try {
      const memoMap = JSON.parse(raw);
      Object.entries(memoMap || {}).forEach(([dateKey, value]) => {
        const values = Array.isArray(value) ? value : [value];
        values.forEach((memo, index) => {
          const text = typeof memo === "string" ? memo : String(memo?.text || "");
          if (!text.trim()) return;
          migrated.push({
            id: typeof memo === "object" && memo?.id ? memo.id : `legacy-${dateKey}-${index}-${key}`,
            text,
            dateKey,
            createdAt: typeof memo === "object" && memo?.createdAt ? memo.createdAt : `${dateKey}T00:00:00.000Z`,
          });
        });
      });
      localStorage.removeItem(key);
    } catch (error) {
      console.warn("Could not migrate legacy memo storage", error);
    }
  });
  if (migrated.length) {
    saveGlobalMemos([...loadGlobalMemos(), ...migrated]);
  }
}

function loadAllMemos() {
  return loadGlobalMemos()
    .map((memo, index) => ({
      ...memo,
      dateKey: memoDateKey(memo),
      source: "global",
      insertionIndex: index,
      sortDate: memo.createdAt || "",
    }))
    .sort((a, b) => {
      const dateOrder = b.sortDate.localeCompare(a.sortDate);
      if (dateOrder) return dateOrder;
      return b.insertionIndex - a.insertionIndex;
    });
}

function getLocationLabel() {
  if (!timeZone || !timeZone.includes("/")) return "Local";
  const [country, ...cityParts] = timeZone.split("/");
  return `${country.replaceAll("_", " ")}, ${cityParts.join(" ").replaceAll("_", " ")}`;
}

function showToast(message, type = "success") {
  const key = `${type}:${message}`;
  if (activeToasts.has(key)) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  els.toastContainer.appendChild(toast);
  activeToasts.set(key, toast);
  window.setTimeout(() => {
    activeToasts.delete(key);
    toast.remove();
  }, 3000);
}

function renderClock() {
  now = new Date();
  els.currentHourMinute.textContent = formatTime(now);
  els.currentSeconds.textContent = pad(now.getSeconds());
  els.currentMeta.textContent = `${formatClockDate(now)} ${getLocationLabel()}`;
}

function getMaxDate() {
  return new Date(now.getFullYear() + YEARS_AHEAD, now.getMonth(), now.getDate(), 23, 59, 59);
}

function getMonthRange() {
  const months = [];
  const cursor = new Date(START_YEAR, START_MONTH_INDEX, 1);
  const end = new Date(getMaxDate().getFullYear(), getMaxDate().getMonth(), 1);
  while (cursor <= end) {
    months.push({
      year: cursor.getFullYear(),
      month: cursor.getMonth() + 1,
      key: monthKeyFromDate(cursor),
    });
    cursor.setMonth(cursor.getMonth() + 1);
  }
  return months;
}

function formatMonthLabel(year, month) {
  if (language === "ja") return `${year}年${month}月`;
  return new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(new Date(year, month - 1, 1));
}

function logsByDate() {
  return loadLogs().reduce((map, item) => {
    if (!map[item.dateKey]) map[item.dateKey] = [];
    map[item.dateKey].push(item);
    return map;
  }, {});
}

function plansByDate() {
  return loadPlans().reduce((map, item) => {
    if (!map[item.dateKey]) map[item.dateKey] = [];
    map[item.dateKey].push(item);
    return map;
  }, {});
}

function countItems(dateKey, logMap, planMap, memoMap) {
  if (calendarScope === "log") return logMap[dateKey]?.length || 0;
  if (calendarScope === "plan") return planMap[dateKey]?.length || 0;
  return memoMap[dateKey]?.length || 0;
}

function countTextItems(dateKey, logMap, planMap, memoMap) {
  if (textScope === "log") return logMap[dateKey]?.length || 0;
  if (textScope === "plan") return planMap[dateKey]?.length || 0;
  if (textScope === "memo") return memoMap[dateKey]?.length || 0;
  return (logMap[dateKey]?.length || 0) + (planMap[dateKey]?.length || 0) + (memoMap[dateKey]?.length || 0);
}

function getMemoMapForScope(scope = currentMode) {
  return scope === "memo" ? getAllMemoMap() : {};
}

function getAllMemoMap() {
  return loadAllMemos().reduce((map, memo) => {
    if (!memo.dateKey) return map;
    if (!map[memo.dateKey]) map[memo.dateKey] = [];
    map[memo.dateKey].push(memo);
    return map;
  }, {});
}

function buildMonthCells(year, month, logMap, planMap, memoMap, includeAdjacentMonths = true, countFn = countItems) {
  if (!includeAdjacentMonths) {
    const firstDay = new Date(year, month - 1, 1).getDay();
    const lastDate = new Date(year, month, 0).getDate();
    const cells = [];
    for (let i = 0; i < firstDay; i += 1) cells.push({ type: "placeholder" });
    for (let day = 1; day <= lastDate; day += 1) {
      const dateKey = `${year}-${pad(month)}-${pad(day)}`;
      cells.push({ type: "day", day, dateKey, count: countFn(dateKey, logMap, planMap, memoMap), isOutsideMonth: false });
    }
    while (cells.length % 7 !== 0) cells.push({ type: "placeholder" });
    return cells;
  }

  const firstOfMonth = new Date(year, month - 1, 1);
  const firstVisibleDate = addDays(firstOfMonth, -firstOfMonth.getDay());
  const lastOfMonth = new Date(year, month, 0);
  const lastVisibleDate = addDays(lastOfMonth, 6 - lastOfMonth.getDay());
  const cells = [];
  for (let cursor = new Date(firstVisibleDate); cursor <= lastVisibleDate; cursor = addDays(cursor, 1)) {
    const dateKey = dateKeyFromDate(cursor);
    cells.push({
      type: "day",
      day: cursor.getDate(),
      dateKey,
      count: countFn(dateKey, logMap, planMap, memoMap),
      isOutsideMonth: cursor.getMonth() !== month - 1,
    });
  }
  return cells;
}

function buildTextCalendarCells(year, month, logMap, planMap, memoMap) {
  const monthOnlyCells = buildMonthCells(year, month, logMap, planMap, memoMap, false, countTextItems);
  const fullCells = buildMonthCells(year, month, logMap, planMap, memoMap, true, countTextItems);
  if (!isCalendarExpanded) return fullCells;
  if (textExportMode !== "week") return monthOnlyCells;

  const selectedDate = dateFromKey(selectedDateKey);
  const weekStart = addDays(selectedDate, -selectedDate.getDay());
  const weekKeys = new Set(dateKeysBetween(weekStart, addDays(weekStart, 6)));
  const selectedWeekCrossesMonth = fullCells.some((cell) => (
    cell.type === "day" && cell.isOutsideMonth && weekKeys.has(cell.dateKey)
  ));
  if (!selectedWeekCrossesMonth) return monthOnlyCells;

  return fullCells.map((cell) => {
    if (cell.type !== "day") return cell;
    if (!cell.isOutsideMonth || weekKeys.has(cell.dateKey)) return cell;
    return { type: "placeholder" };
  });
}

function getVisibleMonth() {
  const range = getMonthRange();
  return range.find((month) => month.key === visibleMonthKey) || range[0];
}

function getSelectedWeekCells(cells, month) {
  const selectedParts = parseDateKey(selectedDateKey);
  const selectedIndex = cells.findIndex((cell) => cell.type === "day" && cell.dateKey === selectedDateKey);
  if (selectedParts.year !== month.year || selectedParts.month !== month.month || selectedIndex < 0) {
    return cells.slice(0, 7);
  }
  const weekStart = Math.floor(selectedIndex / 7) * 7;
  return cells.slice(weekStart, weekStart + 7);
}

function renderWeekdays(container) {
  const row = document.createElement("div");
  row.className = "weekday-row";
  row.setAttribute("aria-hidden", "true");
  row.innerHTML = WEEKDAYS[language].map((day) => `<span>${day}</span>`).join("");
  container.appendChild(row);
}

function renderCalendarCells(container, cells, options = {}) {
  const isSelectionDisabled = options.disableSelection === true;
  const grid = document.createElement("div");
  grid.className = "calendar-grid";
  cells.forEach((cell) => {
    if (cell.type === "placeholder") {
      const placeholder = document.createElement("div");
      placeholder.className = "day-placeholder";
      grid.appendChild(placeholder);
      return;
    }
    const button = document.createElement("button");
    button.type = "button";
    button.className = `day-button${cell.count ? " has-entry" : ""}${cell.dateKey === selectedDateKey ? " is-selected" : ""}${cell.isOutsideMonth ? " is-outside-month" : ""}${isSelectionDisabled ? " is-selection-disabled" : ""}`;
    button.disabled = isSelectionDisabled;
    button.innerHTML = `
      <span class="day-number">${cell.day}</span>
      <span class="entry-count">${cell.count ? formatCount(cell.count) : ""}</span>
    `;
    button.addEventListener("click", () => {
      selectedDateKey = cell.dateKey;
      visibleMonthKey = cell.dateKey.slice(0, 7);
      syncSharedDateInputToSelectedDate();
      renderAll();
    });
    grid.appendChild(button);
  });
  container.appendChild(grid);
}

function renderCalendar() {
  const month = getVisibleMonth();
  const logMap = logsByDate();
  const planMap = plansByDate();
  const memoMap = getMemoMapForScope(calendarScope);
  const textMemoMap = getAllMemoMap();
  const textLogMap = textScope === "log" || textScope === "all" ? logMap : {};
  const textPlanMap = textScope === "plan" || textScope === "all" ? planMap : {};
  const textScopedMemoMap = textScope === "memo" || textScope === "all" ? textMemoMap : {};
  const mainCells = buildMonthCells(month.year, month.month, logMap, planMap, memoMap, !isCalendarExpanded);
  const textCells = buildTextCalendarCells(month.year, month.month, textLogMap, textPlanMap, textScopedMemoMap);
  const targets = [
    [els.recordCalendarMonthLabel, els.recordCalendarGrid, els.recordToggleCalendarButton, buildMonthCells(month.year, month.month, logMap, planMap, textMemoMap, !isCalendarExpanded), { disableSelection: isLogNowMode }],
    [els.calendarMonthLabel, els.calendarGrid, els.toggleCalendarButton, mainCells, {}],
    [els.textCalendarMonthLabel, els.textCalendarGrid, els.textToggleCalendarButton, textCells, {}],
  ];

  targets.forEach(([labelEl, gridEl, toggleButton, cells, options]) => {
    if (!labelEl || !gridEl || !toggleButton) return;
    const visibleCells = isCalendarExpanded ? cells : getSelectedWeekCells(cells, month);
    const section = document.createElement("section");
    section.className = "calendar-month-section";
    gridEl.innerHTML = "";
    labelEl.textContent = formatMonthLabel(month.year, month.month);
    renderWeekdays(section);
    renderCalendarCells(section, visibleCells, options);
    gridEl.appendChild(section);
    toggleButton.textContent = isCalendarExpanded ? t("closeCalendar") : t("openCalendar");
    toggleButton.setAttribute("aria-expanded", String(isCalendarExpanded));
  });
}

function itemDate(item) {
  return item.isoDateTime || item.createdAt || `${item.dateKey}T${item.time || "00:00"}:00`;
}

function effortBenefitDetail(item) {
  const cons = item.cons || item.cost || "";
  const pros = item.pros || item.benefit || "";
  const parts = [];
  if (cons) parts.push(`${t("cost")}: ${cons}`);
  if (pros) parts.push(`${t("benefit")}: ${pros}`);
  if (!parts.length && item.reward) parts.push(`${t("cost")}＝${t("benefit")}: ${item.reward}`);
  return parts.join(" / ");
}

function memoDisplayTime(memo) {
  if (memo.time) return memo.time;
  const source = memo.isoDateTime || memo.createdAt || "";
  if (!source) return "";
  const date = new Date(source);
  return Number.isNaN(date.getTime()) ? "" : formatTime(date);
}

function renderEntryCard(type, item, options = {}) {
  const showType = options.showType !== false;
  const label = type === "log" ? t("logType") : type === "plan" ? t("planType") : t("memoType");
  const detail = type === "log" || type === "plan" ? effortBenefitDetail(item) : "";
  const entryTime = type === "memo" ? memoDisplayTime(item) : item.time;
  const dataAttr = type === "log"
    ? `data-log-id="${item.id}"`
    : type === "plan"
      ? `data-plan-id="${item.id}"`
      : `data-global-memo-id="${item.id}"`;
  return `
    <article class="entry-card ${type}">
      ${dataAttr ? `<button class="entry-delete" type="button" ${dataAttr} aria-label="${t("deleteConfirm")}">×</button>` : ""}
      ${showType ? `<span class="entry-type">${label}</span>` : ""}
      ${entryTime ? `<span class="entry-time">${escapeHtml(entryTime)}</span>` : ""}
      <p class="entry-text">${escapeHtml(item.text)}</p>
      ${detail ? `<p class="entry-detail">${escapeHtml(detail)}</p>` : ""}
    </article>
  `;
}

function getDayItems(dateKey, scope = currentMode) {
  const logs = scope === "log" ? loadLogs()
    .filter((item) => item.dateKey === dateKey)
    .map((item) => ({ type: "log", item })) : [];
  const plans = scope === "plan" ? loadPlans()
    .filter((item) => item.dateKey === dateKey)
    .map((item) => ({ type: "plan", item })) : [];
  const memos = scope === "memo" ? loadAllMemos()
    .filter((item) => item.dateKey === dateKey)
    .map((item) => ({ type: "memo", item })) : [];
  const mainItems = [...logs, ...plans, ...memos].sort((a, b) => itemDate(a.item).localeCompare(itemDate(b.item)));
  return mainItems;
}

function dateKeysBetween(startDate, endDate) {
  const keys = [];
  for (let cursor = new Date(startDate); cursor <= endDate; cursor = addDays(cursor, 1)) {
    keys.push(dateKeyFromDate(cursor));
  }
  return keys;
}

function allDateKeysForScope(scope) {
  if (scope === "log") return Array.from(new Set(loadLogs().map((item) => item.dateKey))).sort();
  if (scope === "plan") return Array.from(new Set(loadPlans().map((item) => item.dateKey))).sort();
  const memoKeys = loadGlobalMemos()
    .map(memoDateKey)
    .filter(Boolean);
  if (scope === "memo") return Array.from(new Set(memoKeys)).sort();
  return Array.from(new Set([
    ...loadLogs().map((item) => item.dateKey),
    ...loadPlans().map((item) => item.dateKey),
    ...memoKeys,
  ])).filter(Boolean).sort();
}

function getTextExportDateKeys(scope) {
  const selectedDate = dateFromKey(selectedDateKey);
  if (textExportMode === "day") return [selectedDateKey];
  if (textExportMode === "week") {
    const start = addDays(selectedDate, -selectedDate.getDay());
    return dateKeysBetween(start, addDays(start, 6));
  }
  if (textExportMode === "month") {
    return dateKeysBetween(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1),
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0),
    );
  }
  return allDateKeysForScope(scope);
}

function getTextExportItems(dateKey, scope) {
  if (scope === "all") {
    return [
      ...getTextExportItems(dateKey, "log").map((item) => `[${t("log")}] ${item}`),
      ...getTextExportItems(dateKey, "plan").map((item) => `[${t("plan")}] ${item}`),
      ...getTextExportItems(dateKey, "memo"),
    ];
  }
  if (scope === "log") {
    const logs = loadLogs()
      .filter((item) => item.dateKey === dateKey)
      .sort((a, b) => itemDate(a).localeCompare(itemDate(b)))
      .map((item) => {
        const detail = effortBenefitDetail(item);
        return `${item.time} ${item.text}${detail ? `（${detail}）` : ""}`;
      });
    return logs;
  }
  if (scope === "plan") {
    const plans = loadPlans()
      .filter((item) => item.dateKey === dateKey)
      .sort((a, b) => itemDate(a).localeCompare(itemDate(b)))
      .map((item) => {
        const detail = effortBenefitDetail(item);
        return `${item.time} ${item.text}${detail ? `（${detail}）` : ""}`;
      });
    return plans;
  }
  return loadGlobalMemos()
    .filter((memo) => memoDateKey(memo) === dateKey)
    .map((memo) => `[${t("memoType")}] ${memo.text}`);
}

function getHumanGoalExportText() {
  const frames = ensureGoalFrames();
  const goals = loadGoals();
  const sections = frames.map((frame, frameIndex) => {
    const frameGoals = goals
      .filter((goal) => goal.frameId === frame.id)
      .map((goal) => String(goal.text || "").trim())
      .filter(Boolean);
    if (!frameGoals.length) return "";
    return [`${t("goal")} ${frameIndex + 1}`, ...frameGoals.map((goal, index) => `${index + 1}. ${goal}`)].join("\n");
  }).filter(Boolean);
  if (!sections.length) return "";
  return [t("goal"), ...sections].join("\n\n");
}

function getHumanExportText(scope = textScope) {
  if (scope === "goal") return getHumanGoalExportText();
  const dateKeys = getTextExportDateKeys(scope);
  const datedText = dateKeys.map((dateKey) => {
    const items = getTextExportItems(dateKey, scope);
    if (!items.length) return "";
    return [formatDateHeader(dateKey), ...items].join("\n");
  }).filter(Boolean).join("\n\n");
  if (scope !== "all") return datedText;
  return [getHumanGoalExportText(), datedText].filter(Boolean).join("\n\n");
}

function getMachineExportRange() {
  return {
    mode: textExportMode,
    selectedDate: selectedDateKey,
    dateKeys: textScope === "goal" ? [] : getTextExportDateKeys(textScope),
  };
}

function getMachineExportItems(dateKey, scope) {
  if (scope === "all") {
    return [
      ...getMachineExportItems(dateKey, "log"),
      ...getMachineExportItems(dateKey, "plan"),
      ...getMachineExportItems(dateKey, "memo"),
    ].sort((a, b) => itemDate(a).localeCompare(itemDate(b)));
  }
  if (scope === "log") {
    return loadLogs()
      .filter((item) => item.dateKey === dateKey)
      .sort((a, b) => itemDate(a).localeCompare(itemDate(b)))
      .map((item) => ({
        type: "log",
        dateKey: item.dateKey,
        time: item.time,
        text: item.text,
        cost: item.cons || item.cost || "",
        benefit: item.pros || item.benefit || "",
        isoDateTime: item.isoDateTime || "",
      }));
  }
  if (scope === "plan") {
    return loadPlans()
      .filter((item) => item.dateKey === dateKey)
      .sort((a, b) => itemDate(a).localeCompare(itemDate(b)))
      .map((item) => ({
        type: "plan",
        dateKey: item.dateKey,
        time: item.time,
        text: item.text,
        cost: item.cons || item.cost || "",
        benefit: item.pros || item.benefit || "",
        isoDateTime: item.isoDateTime || "",
        createdAt: item.createdAt || "",
      }));
  }
  return loadGlobalMemos()
    .filter((memo) => memoDateKey(memo) === dateKey)
    .map((memo) => ({
      type: "memo",
      dateKey: memoDateKey(memo),
      time: memoDisplayTime(memo),
      text: memo.text,
      isoDateTime: memo.isoDateTime || "",
      createdAt: memo.createdAt || "",
    }));
}

function getMachineExportGoals() {
  return loadGoals()
    .map((goal) => ({
      type: "goal",
      frameId: goal.frameId || "",
      text: String(goal.text || "").trim(),
      createdAt: goal.createdAt || "",
      updatedAt: goal.updatedAt || "",
    }))
    .filter((goal) => goal.text);
}

function getMachineExportData() {
  const range = getMachineExportRange();
  const dates = range.dateKeys.map((dateKey) => ({
    dateKey,
    items: getMachineExportItems(dateKey, textScope),
  })).filter((group) => group.items.length);
  const includeGoals = textScope === "all" || textScope === "goal";
  return {
    format: "uncharted-calendar-import",
    version: 1,
    exportedAt: new Date().toISOString(),
    scope: textScope,
    range: range.mode,
    selectedDate: range.selectedDate,
    goalFrames: includeGoals ? ensureGoalFrames() : [],
    goals: includeGoals ? getMachineExportGoals() : [],
    dates,
  };
}

function isValidDateKey(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return false;
  const date = dateFromKey(value);
  return !Number.isNaN(date.getTime()) && dateKeyFromDate(date) === value;
}

function isValidTime(value) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(value || "");
}

function isoFromImportDateTime(dateKey, time) {
  if (!isValidDateKey(dateKey)) return "";
  const safeTime = isValidTime(time) ? time : "00:00";
  return new Date(`${dateKey}T${safeTime}:00`).toISOString();
}

function parseImportData(rawText) {
  try {
    const data = JSON.parse(rawText);
    if (data?.format !== "uncharted-calendar-import" || !Array.isArray(data.dates)) return null;
    return data;
  } catch (error) {
    return null;
  }
}

function getImportItems(data, scope) {
  const goalItems = Array.isArray(data?.goals) && (scope === "all" || scope === "goal")
    ? data.goals
      .filter((goal) => goal?.text)
      .map((goal) => ({ ...goal, type: "goal" }))
    : [];
  const datedItems = data.dates.flatMap((group) => {
    const groupDateKey = isValidDateKey(group?.dateKey) ? group.dateKey : "";
    return Array.isArray(group?.items)
      ? group.items
        .filter((item) => scope === "all" ? ["log", "plan", "memo"].includes(item?.type) : item?.type === scope)
        .map((item) => ({
          ...item,
          dateKey: isValidDateKey(item.dateKey) ? item.dateKey : groupDateKey,
        }))
      : [];
  }).filter((item) => item.dateKey && item.text);
  return [...goalItems, ...datedItems];
}

function normalizeImportScope(scope) {
  return ["all", "log", "plan", "memo", "goal"].includes(scope) ? scope : "";
}

function inferImportScope(data) {
  const exportedScope = normalizeImportScope(data?.scope);
  if (exportedScope) return exportedScope;
  const types = new Set(
    [
      ...(Array.isArray(data?.goals) && data.goals.length ? ["goal"] : []),
      ...data.dates.flatMap((group) => Array.isArray(group?.items)
      ? group.items.map((item) => item?.type).filter(Boolean)
      : []),
    ],
  );
  if (types.size === 1) return normalizeImportScope(Array.from(types)[0]) || "all";
  return "all";
}

function importSignature(item) {
  if (item.type === "goal") return ["goal", item.text || ""].join("\u0001");
  if (item.type === "log" || item.type === "plan") {
    return [
      item.dateKey,
      item.time || "",
      item.text || "",
      item.cons || item.cost || "",
      item.pros || item.benefit || "",
    ].join("\u0001");
  }
  return [item.dateKey, item.time || "", item.text || ""].join("\u0001");
}

function importGoals(items, frames = []) {
  const existing = loadGoals();
  const signatures = new Set(existing.map((item) => importSignature({ ...item, type: "goal" })));
  const candidates = [];
  items.forEach((item) => {
    const candidate = {
      ...item,
      text: String(item.text || "").replace(/\s+/g, " ").trim(),
    };
    const signature = importSignature({ ...candidate, type: "goal" });
    if (!candidate.text || signatures.has(signature)) return;
    signatures.add(signature);
    candidates.push(candidate);
  });
  const importedFrameIds = new Set(candidates.map((item) => item.frameId).filter(Boolean));
  const frameIdMap = {};
  const currentFrames = ensureGoalFrames();
  const nextFrames = [...currentFrames];
  const frameSource = Array.isArray(frames) ? frames : [];
  const needsFallbackFrame = candidates.some((item) => !item.frameId) && !currentFrames.length;
  let fallbackFrameId = currentFrames[0]?.id || "";
  if (needsFallbackFrame) {
    const nowIso = new Date().toISOString();
    const fallbackFrame = {
      id: crypto.randomUUID(),
      createdAt: nowIso,
      updatedAt: nowIso,
    };
    fallbackFrameId = fallbackFrame.id;
    nextFrames.push(fallbackFrame);
  }
  importedFrameIds.forEach((oldFrameId) => {
    const frame = frameSource.find((item) => item.id === oldFrameId);
    const nextFrame = {
      id: crypto.randomUUID(),
      createdAt: frame?.createdAt || new Date().toISOString(),
      updatedAt: frame?.updatedAt || frame?.createdAt || new Date().toISOString(),
    };
    frameIdMap[oldFrameId] = nextFrame.id;
    nextFrames.push(nextFrame);
  });
  if (Object.keys(frameIdMap).length || needsFallbackFrame) saveGoalFrames(nextFrames);
  const imported = [];
  candidates.forEach((item) => {
    const nowIso = new Date().toISOString();
    const next = {
      id: crypto.randomUUID(),
      frameId: frameIdMap[item.frameId] || fallbackFrameId,
      text: item.text,
      createdAt: item.createdAt || nowIso,
      updatedAt: item.updatedAt || item.createdAt || nowIso,
    };
    imported.push(next);
  });
  if (imported.length) saveGoals([...existing, ...imported]);
  return imported;
}

function importLogs(items) {
  const existing = loadLogs();
  const signatures = new Set(existing.map((item) => importSignature({ ...item, type: "log" })));
  const imported = [];
  items.forEach((item) => {
    const time = isValidTime(item.time) ? item.time : "00:00";
    const next = {
      id: crypto.randomUUID(),
      dateKey: item.dateKey,
      time,
      text: String(item.text),
      cons: String(item.cost || item.cons || ""),
      pros: String(item.benefit || item.pros || ""),
      isoDateTime: item.isoDateTime || isoFromImportDateTime(item.dateKey, time),
    };
    const signature = importSignature({ ...next, type: "log" });
    if (signatures.has(signature)) return;
    signatures.add(signature);
    imported.push(next);
  });
  if (imported.length) saveLogs([...existing, ...imported]);
  return imported;
}

function importPlans(items) {
  const existing = loadPlans();
  const signatures = new Set(existing.map((item) => importSignature({ ...item, type: "plan" })));
  const imported = [];
  items.forEach((item) => {
    const time = isValidTime(item.time) ? item.time : "00:00";
    const next = {
      id: crypto.randomUUID(),
      dateKey: item.dateKey,
      time,
      text: String(item.text),
      cons: String(item.cost || item.cons || ""),
      pros: String(item.benefit || item.pros || ""),
      isoDateTime: item.isoDateTime || isoFromImportDateTime(item.dateKey, time),
      createdAt: item.createdAt || new Date().toISOString(),
    };
    const signature = importSignature({ ...next, type: "plan" });
    if (signatures.has(signature)) return;
    signatures.add(signature);
    imported.push(next);
  });
  if (imported.length) savePlans([...existing, ...imported]);
  return imported;
}

function importMemos(items) {
  const existing = loadGlobalMemos();
  const signatures = new Set(existing.map((item) => importSignature({ ...item, type: "memo" })));
  const imported = [];
  items.forEach((item) => {
    const next = {
      id: crypto.randomUUID(),
      dateKey: item.dateKey,
      time: isValidTime(item.time) ? item.time : memoDisplayTime(item),
      text: String(item.text),
      isoDateTime: item.isoDateTime || "",
      createdAt: item.createdAt || `${item.dateKey}T00:00:00.000Z`,
    };
    const signature = importSignature({ ...next, type: "memo" });
    if (signatures.has(signature)) return;
    signatures.add(signature);
    imported.push(next);
  });
  if (imported.length) saveGlobalMemos([...existing, ...imported]);
  return imported;
}

async function importSelectedFile() {
  const file = els.importFileInput.files?.[0];
  if (!file) {
    showToast(t("invalidImportData"), "error");
    els.importFileInput.focus();
    return;
  }
  const rawText = await file.text();
  const data = parseImportData(rawText.trim());
  if (!data) {
    showToast(t("invalidImportData"), "error");
    els.importFileInput.focus();
    return;
  }
  const fileScope = inferImportScope(data);
  const items = getImportItems(data, fileScope);
  const imported = fileScope === "all"
    ? [
      ...importGoals(items.filter((item) => item.type === "goal"), data.goalFrames),
      ...importLogs(items.filter((item) => item.type === "log")),
      ...importPlans(items.filter((item) => item.type === "plan")),
      ...importMemos(items.filter((item) => item.type === "memo")),
    ]
    : fileScope === "goal"
      ? importGoals(items, data.goalFrames)
      : fileScope === "log"
        ? importLogs(items)
        : fileScope === "plan"
          ? importPlans(items)
          : importMemos(items);
  if (!imported.length) {
    showToast(t("noImportItems"), "error");
    return;
  }
  const lastDatedImport = [...imported].reverse().find((item) => item.dateKey);
  if (lastDatedImport) {
    selectedDateKey = lastDatedImport.dateKey;
    visibleMonthKey = lastDatedImport.dateKey.slice(0, 7);
  }
  els.importFileInput.value = "";
  renderAll();
  showToast(t("importDone", { count: imported.length }));
}

function bindDeleteButtons(container) {
  container.querySelectorAll(".entry-delete").forEach((button) => {
    button.addEventListener("click", () => {
      if (!window.confirm(t("deleteConfirm"))) return;
      if (button.dataset.logId) {
        saveLogs(loadLogs().filter((item) => item.id !== button.dataset.logId));
        showToast(t("logDeleted"));
      }
      if (button.dataset.planId) {
        savePlans(loadPlans().filter((item) => item.id !== button.dataset.planId));
        showToast(t("planDeleted"));
      }
      if (button.dataset.globalMemoId) {
        saveGlobalMemos(loadGlobalMemos().filter((memo) => memo.id !== button.dataset.globalMemoId));
        showToast(t("globalMemoDeleted"));
      }
      if (button.dataset.goalId) {
        saveGoals(loadGoals().filter((goal) => goal.id !== button.dataset.goalId));
        pruneEmptyGoalFrames();
        showToast(t("goalDeleted"));
      }
      renderAll();
    });
  });
}

function renderGoals() {
  const frames = pruneEmptyGoalFrames();
  const goals = loadGoals();
  const goalsByFrame = goals.reduce((map, goal) => {
    const frameId = goal.frameId || frames[0]?.id || "";
    if (!map[frameId]) map[frameId] = [];
    map[frameId].push(goal);
    return map;
  }, {});
  els.goalList.innerHTML = frames.map((frame) => {
    const frameGoals = goalsByFrame[frame.id]?.length
      ? goalsByFrame[frame.id]
      : [];
    if (!frameGoals.length) return "";
    return `
    <section class="panel goal-frame-panel" data-goal-frame-id="${frame.id}">
      <div class="panel-heading">
        <h2>${t("goal")}</h2>
      </div>
      <div class="goal-lines">
        ${frameGoals.map((goal) => `
          <div class="goal-line">
            ${goal.id ? `<button class="entry-delete" type="button" data-goal-id="${goal.id}" aria-label="${t("deleteConfirm")}">×</button>` : ""}
            <input class="goal-input" maxlength="200" type="text" data-goal-id="${goal.id}" data-goal-frame-id="${frame.id}" placeholder="${t("goalPlaceholder")}" value="${escapeHtml(String(goal.text || "").replace(/\s+/g, " ").trim())}">
          </div>
        `).join("")}
      </div>
      <div class="goal-inner-action">
        <button class="ghost-button detail-link-button add-goal-line-button" type="button" data-goal-frame-id="${frame.id}">${t("addGoalButton")}</button>
      </div>
    </section>
  `;
  }).filter(Boolean).join("");
  bindDeleteButtons(els.goalList);
  els.goalList.querySelectorAll(".goal-input").forEach((input) => {
    input.addEventListener("input", updateGoalBox);
  });
  els.goalList.querySelectorAll(".add-goal-line-button").forEach((button) => {
    button.addEventListener("click", () => addGoalLine(button.dataset.goalFrameId));
  });
  if (focusGoalId) {
    const target = els.goalList.querySelector(`[data-goal-id="${focusGoalId}"]`);
    if (target) target.focus({ preventScroll: true });
    focusGoalId = "";
  }
}

function renderSelectedEntries() {
  const { month, day } = parseDateKey(selectedDateKey);
  els.selectedDateLabel.textContent = t("dayTitle", { month, day });
  const items = getDayItems(selectedDateKey, calendarScope);
  els.selectedEntries.innerHTML = items.length
    ? items.map(({ type, item }) => renderEntryCard(type, item, { showType: false })).join("")
    : `<p class="empty-state">${t("dayEmpty")}</p>`;
  bindDeleteButtons(els.selectedEntries);
}

function renderCalendarScopeControls() {
  const controls = [
    ["log", els.calendarLogScopeButton, t("log")],
    ["plan", els.calendarPlanScopeButton, t("plan")],
    ["memo", els.calendarMemoScopeButton, t("globalMemo")],
  ];
  controls.forEach(([scope, button, label]) => {
    button.textContent = label;
    button.classList.toggle("is-active", calendarScope === scope);
    button.setAttribute("aria-pressed", String(calendarScope === scope));
  });
}

function renderRecordScopeControls() {
  const controls = [
    ["log", els.recordLogScopeButton, t("log")],
    ["plan", els.recordPlanScopeButton, t("plan")],
    ["memo", els.recordMemoScopeButton, t("globalMemo")],
  ];
  controls.forEach(([scope, button, label]) => {
    button.textContent = label;
    button.classList.toggle("is-active", recordScope === scope);
    button.setAttribute("aria-pressed", String(recordScope === scope));
  });
  els.logPanel.hidden = recordScope !== "log";
  els.planPanel.hidden = recordScope !== "plan";
  els.globalMemoInputPanel.hidden = currentView !== "calendars" || recordScope !== "memo";
}

function renderTextExport() {
  const exportScopeButtons = [
    ["all", els.exportScopeAllButton, t("all")],
    ["log", els.exportScopeLogButton, t("log")],
    ["plan", els.exportScopePlanButton, t("plan")],
    ["memo", els.exportScopeMemoButton, t("globalMemo")],
    ["goal", els.exportScopeGoalButton, t("goal")],
  ];
  exportScopeButtons.forEach(([scope, button, label]) => {
    button.textContent = label;
    button.classList.toggle("is-active", textScope === scope);
  });
  els.exportDayButton.classList.toggle("is-active", textExportMode === "day");
  els.exportWeekButton.classList.toggle("is-active", textExportMode === "week");
  els.exportMonthButton.classList.toggle("is-active", textExportMode === "month");
  els.exportAllButton.classList.toggle("is-active", textExportMode === "all");
  els.textExportOutput.value = getHumanExportText();
}

function renderImport() {
  els.importLabel.textContent = t("importScopeTitle");
  els.importFileLabel.textContent = t("importFileLabel");
  els.importDataButton.textContent = t("import");
}

function renderDrawerState() {
  els.drawerLinks.forEach((button) => {
    const target = button.dataset.drawerTarget;
    const activeTarget = currentView === "calendar" ? "calendars" : currentView;
    button.classList.toggle("is-active", target === activeTarget);
  });
}

function getTitleKey(view) {
  return {
    goal: "calendarsTitle",
    calendars: "calendarsTitle",
    calendar: "calendarsTitle",
    text: "exportTitle",
    import: "importTitle",
    settings: "settingsTitle",
  }[view] || "calendarsTitle";
}

function renderBottomNav() {
  const isProductArea = ["goal", "calendars", "calendar", "text", "import"].includes(currentView);
  els.bottomNav.hidden = !isProductArea;
  if (!isProductArea) return;

  if (currentView === "text" || currentView === "import") {
    els.goalTabButton.hidden = true;
    els.primaryTabButton.hidden = false;
    els.calendarTabButton.hidden = true;
    els.textTabButton.hidden = true;
    els.exportTabButton.hidden = true;
    els.primaryTabButton.textContent = currentView === "text" ? t("text") : t("import");
    els.goalTabButton.classList.remove("is-active");
    els.primaryTabButton.classList.add("is-active");
    els.calendarTabButton.classList.remove("is-active");
    els.textTabButton.classList.remove("is-active");
    els.goalTabButton.setAttribute("aria-selected", "false");
    els.primaryTabButton.setAttribute("aria-selected", "true");
    els.calendarTabButton.setAttribute("aria-selected", "false");
    els.textTabButton.setAttribute("aria-selected", "false");
    els.exportTabButton.setAttribute("aria-selected", "false");
    return;
  }

  els.goalTabButton.hidden = false;
  els.primaryTabButton.hidden = false;
  els.calendarTabButton.hidden = false;
  els.textTabButton.hidden = false;
  els.exportTabButton.hidden = true;
  els.goalTabButton.textContent = t("goal");
  els.primaryTabButton.textContent = t("record");
  els.calendarTabButton.textContent = t("history");
  els.textTabButton.hidden = true;
  els.textTabButton.classList.remove("is-active");

  const goalActive = currentView === "goal";
  const primaryActive = currentView === "calendars";
  const secondaryActive = currentView === "calendar";
  els.goalTabButton.classList.toggle("is-active", goalActive);
  els.primaryTabButton.classList.toggle("is-active", primaryActive);
  els.calendarTabButton.classList.toggle("is-active", secondaryActive);
  els.exportTabButton.classList.remove("is-active");
  els.goalTabButton.setAttribute("aria-selected", String(goalActive));
  els.primaryTabButton.setAttribute("aria-selected", String(primaryActive));
  els.calendarTabButton.setAttribute("aria-selected", String(secondaryActive));
  els.textTabButton.setAttribute("aria-selected", "false");
  els.exportTabButton.setAttribute("aria-selected", "false");
}

function renderStaticText() {
  document.documentElement.lang = language;
  document.title = t("calendarsTitle");
  els.drawerMenuLabel.textContent = t("menu");
  els.drawerButton.setAttribute("aria-label", t("menuOpen"));
  els.settingsIconButton.setAttribute("aria-label", t("settings"));
  els.themeColorLabel.textContent = t("themeColor");
  els.themeColorNameLabel.textContent = t("themeColorName");
  els.themeColorInput.value = themeColor;
  els.languageLabel.textContent = t("language");
  els.languageJaButton.textContent = t("japanese");
  els.languageEnButton.textContent = t("english");
  els.resetDataLabel.textContent = t("resetData");
  els.resetDataButton.textContent = t("resetDataButton");
  els.languageJaButton.classList.toggle("is-active", language === "ja");
  els.languageEnButton.classList.toggle("is-active", language === "en");
  els.resetDialogTitle.textContent = t("resetDialogTitle");
  els.resetDialogMessage.textContent = t("resetDataWarning");
  els.resetConfirmLabel.textContent = t("resetConfirmLabel");
  els.cancelResetButton.textContent = t("cancel");
  els.confirmResetButton.textContent = t("resetConfirmButton");
  els.addGoalFrameButton.textContent = t("addGoalFrameButton");
  els.globalMemoSectionHeading.textContent = t("memoType");
  els.globalMemoInputLabel.textContent = t("globalMemoInputLabel");
  els.saveGlobalMemoButton.textContent = t("saveGlobalMemoButton");
  els.drawerLinks.forEach((button) => {
    const key = button.dataset.drawerTarget;
    button.textContent = t(key);
  });
  els.exportDayButton.textContent = t("oneDay");
  els.exportWeekButton.textContent = t("oneWeek");
  els.exportMonthButton.textContent = t("oneMonth");
  els.exportAllButton.textContent = t("all");
  els.copyTextButton.textContent = t("copy");
  els.saveHumanTextButton.textContent = t("saveHumanText");
  els.saveMachineTextButton.textContent = t("saveMachineText");
  els.exportScopeHeading.textContent = t("exportScope");
  els.exportRangeHeading.textContent = t("exportRange");
  els.exportHumanHeading.textContent = t("exportHuman");
  els.exportMachineHeading.textContent = t("exportMachine");
  els.importDataButton.textContent = t("import");
  els.logSectionHeading.textContent = t("logSection");
  els.logDateTimeLabel.textContent = t("logDateTimeLabel");
  els.logInputLabel.textContent = t("logInputLabel");
  els.logCostLabel.textContent = t("cost");
  els.logBenefitLabel.textContent = t("benefit");
  els.saveLogButton.textContent = t("saveLogButton");
  els.setLogNowButton.textContent = isLogNowMode ? t("historyMode") : t("currentTime");
  els.setLogNowButton.classList.toggle("is-current-mode", isLogNowMode);
  els.logDateTimeInput.classList.toggle("is-current-mode", isLogNowMode);
  els.logDateTimeInput.readOnly = isLogNowMode;
  els.planSectionHeading.textContent = t("planSection");
  els.planInputLabel.textContent = t("planInputLabel");
  els.costLabel.textContent = t("cost");
  els.benefitLabel.textContent = t("benefit");
  els.savePlanButton.textContent = t("savePlanButton");
  els.appTitle.textContent = t(getTitleKey(currentView));
  renderBottomNav();
}

function setTheme() {
  const themedView = ["calendars", "calendar"].includes(currentView);
  const themeMode = currentView === "goal" || currentView === "text" || currentView === "import" || currentView === "settings"
      ? "memo"
      : currentView === "calendars"
        ? recordScope
      : themedView
        ? calendarScope === "memo" ? "memo" : calendarScope
        : "";
  document.body.classList.toggle("theme-log", themeMode === "log");
  document.body.classList.toggle("theme-plan", themeMode === "plan");
  document.body.classList.toggle("theme-memo", themeMode === "memo");
  const palette = getThemePalette();
  document.body.style.setProperty("--accent", palette.base);
  document.body.style.setProperty("--accent-deep", palette.deep);
  document.body.style.setProperty("--shadow", palette.shadow);
}

function setView(view, mode = currentMode) {
  if (mode === "log" || mode === "plan" || mode === "memo") {
    if (view === "calendar") calendarScope = mode;
  }
  if (mode === "log" || mode === "plan") {
    currentMode = mode;
  }
  if ((view === "calendars" && recordScope === "log") || (view === "calendar" && calendarScope === "log") || (["text", "import"].includes(view) && currentMode === "log")) {
    lastThemeMode = "log";
  } else if ((view === "calendars" && recordScope === "plan") || (view === "calendar" && calendarScope === "plan") || (["text", "import"].includes(view) && currentMode === "plan")) {
    lastThemeMode = "plan";
  } else if ((view === "calendars" && recordScope === "memo") || view === "import" || (view === "calendar" && calendarScope === "memo")) {
    lastThemeMode = "memo";
  }
  currentView = view;
  els.appTitle.textContent = t(getTitleKey(view));
  [
    ["goal", els.goalView],
    ["calendars", els.calendarsView],
    ["calendar", els.calendarView],
    ["text", els.textView],
    ["import", els.importView],
    ["settings", els.settingsView],
  ].forEach(([name, el]) => {
    el.hidden = name !== view;
  });
  els.heroSection.hidden = view === "settings";
  setTheme();
  renderBottomNav();
  renderDrawerState();
  closeDrawer();
  renderAll();
}

function openDrawer() {
  els.drawer.classList.add("is-open");
  els.drawer.setAttribute("aria-hidden", "false");
  els.drawerBackdrop.hidden = false;
  els.drawerButton.setAttribute("aria-expanded", "true");
}

function closeDrawer() {
  els.drawer.classList.remove("is-open");
  els.drawer.setAttribute("aria-hidden", "true");
  els.drawerBackdrop.hidden = true;
  els.drawerButton.setAttribute("aria-expanded", "false");
}

function addLog(text, date, cons = "", pros = "") {
  const parts = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
  const log = {
    id: crypto.randomUUID(),
    dateKey: dateKeyFromDate(date),
    time: formatTime(date),
    text,
    cons,
    pros,
    isoDateTime: date.toISOString(),
  };
  saveLogs([...loadLogs(), log]);
  selectedDateKey = log.dateKey;
  visibleMonthKey = log.dateKey.slice(0, 7);
  showToast(t("logSaved", { date: formatSlashDate(parts), time: log.time }));
  renderAll();
}

function saveLog() {
  const text = els.activityInput.value.trim();
  const date = getSharedRecordDate();
  if (!text) {
    showToast(t("saveLogPrompt"), "error");
    els.activityInput.focus();
    return;
  }
  if (!date) {
    showToast(t("datePrompt"), "error");
    els.logDateTimeInput.focus();
    return;
  }
  if (!isLogNowMode && date.getTime() > Date.now()) {
    showToast(t("futureLogError"), "error");
    els.logDateTimeInput.focus();
    return;
  }
  addLog(text, date, els.logCostInput.value.trim(), els.logBenefitInput.value.trim());
  els.activityInput.value = "";
  els.logCostInput.value = "";
  els.logBenefitInput.value = "";
}

function syncLogNowInput() {
  const current = new Date();
  els.logDateTimeInput.value = localDateTimeValue(current);
  selectedDateKey = dateKeyFromDate(current);
  visibleMonthKey = monthKeyFromDate(current);
}

function syncSharedDateInputToSelectedDate() {
  if (isLogNowMode) return;
  const parts = parseDateTimeInput(els.logDateTimeInput.value);
  const fallback = new Date();
  const hour = parts?.hour ?? fallback.getHours();
  const minute = parts?.minute ?? fallback.getMinutes();
  els.logDateTimeInput.value = `${selectedDateKey}T${pad(hour)}:${pad(minute)}`;
}

function getSharedRecordDate() {
  if (isLogNowMode) syncLogNowInput();
  const parts = parseDateTimeInput(els.logDateTimeInput.value);
  return parts ? partsToDate(parts) : null;
}

function syncSelectedDateFromSharedInput() {
  if (isLogNowMode) return;
  const parts = parseDateTimeInput(els.logDateTimeInput.value);
  if (!parts) return;
  const date = partsToDate(parts);
  selectedDateKey = dateKeyFromDate(date);
  visibleMonthKey = monthKeyFromDate(date);
  renderAll();
}

function setLogDateTimeMode() {
  isLogNowMode = !isLogNowMode;
  if (isLogNowMode) {
    syncLogNowInput();
    showToast(t("currentModeEnabled"));
  } else {
    syncSharedDateInputToSelectedDate();
    showToast(t("historyModeEnabled"));
  }
  renderAll();
}

function savePlan() {
  const text = els.planTextInput.value.trim();
  const date = getSharedRecordDate();
  if (!text) {
    showToast(t("planPrompt"), "error");
    els.planTextInput.focus();
    return;
  }
  if (!date) {
    showToast(t("datePrompt"), "error");
    els.logDateTimeInput.focus();
    return;
  }
  if (!isLogNowMode && date.getTime() < Date.now() - 1000) {
    showToast(t("pastPlanError"), "error");
    els.logDateTimeInput.focus();
    return;
  }
  const plan = {
    id: crypto.randomUUID(),
    dateKey: dateKeyFromDate(date),
    time: formatTime(date),
    text,
    cons: els.costInput.value.trim(),
    pros: els.benefitInput.value.trim(),
    isoDateTime: date.toISOString(),
    createdAt: new Date().toISOString(),
  };
  savePlans([...loadPlans(), plan]);
  selectedDateKey = plan.dateKey;
  visibleMonthKey = plan.dateKey.slice(0, 7);
  els.planTextInput.value = "";
  els.costInput.value = "";
  els.benefitInput.value = "";
  showToast(t("planSaved", { date: formatDateHeader(plan.dateKey), time: plan.time }));
  renderAll();
}

function saveMemoFromInput(input) {
  const text = input.value.trim();
  const date = getSharedRecordDate();
  if (!text) {
    showToast(t("memoPrompt"), "error");
    input.focus();
    return;
  }
  if (!date) {
    showToast(t("datePrompt"), "error");
    els.logDateTimeInput.focus();
    return;
  }
  saveGlobalMemos([...loadGlobalMemos(), {
      id: crypto.randomUUID(),
      text,
      dateKey: dateKeyFromDate(date),
      time: formatTime(date),
      isoDateTime: date.toISOString(),
      createdAt: new Date().toISOString(),
    }]);
  input.value = "";
  showToast(t("globalMemoSaved"));
  renderAll();
}

function saveGlobalMemo() {
  saveMemoFromInput(els.globalMemoInput);
}

function createEmptyGoal(frameId) {
  const goalId = crypto.randomUUID();
  const nowIso = new Date().toISOString();
  const goal = {
    id: goalId,
    frameId,
    text: "",
    createdAt: nowIso,
    updatedAt: nowIso,
  };
  saveGoals([...loadGoals(), goal]);
  focusGoalId = goalId;
  return goal;
}

function addGoalLine(frameId) {
  const frames = ensureGoalFrames();
  const targetFrameId = frames.some((frame) => frame.id === frameId) ? frameId : frames[0].id;
  createEmptyGoal(targetFrameId);
  renderAll();
}

function addGoalFrame() {
  const nowIso = new Date().toISOString();
  const frame = {
    id: crypto.randomUUID(),
    createdAt: nowIso,
    updatedAt: nowIso,
  };
  saveGoalFrames([...ensureGoalFrames(), frame]);
  createEmptyGoal(frame.id);
  renderAll();
}

function updateGoalBox(event) {
  const input = event.currentTarget;
  const text = input.value;
  const goals = loadGoals();
  const nowIso = new Date().toISOString();
  if (!input.dataset.goalId) {
    const goal = {
      id: crypto.randomUUID(),
      frameId: input.dataset.goalFrameId || ensureGoalFrames()[0].id,
      text,
      createdAt: nowIso,
      updatedAt: nowIso,
    };
    saveGoals([...goals, goal]);
    input.dataset.goalId = goal.id;
    return;
  }
  saveGoals(goals.map((goal) => goal.id === input.dataset.goalId
    ? { ...goal, text, updatedAt: nowIso }
    : goal));
}

function getWeekRowIndex(cells) {
  const selectedIndex = cells.findIndex((cell) => cell.type === "day" && cell.dateKey === selectedDateKey);
  return selectedIndex >= 0 ? Math.floor(selectedIndex / 7) : 0;
}

function firstDateKeyOfMonth(month) {
  return `${month.key}-01`;
}

function lastDateKeyOfMonth(month) {
  const lastDate = new Date(month.year, month.month, 0).getDate();
  return `${month.key}-${pad(lastDate)}`;
}

function moveVisiblePeriod(direction) {
  const range = getMonthRange();
  let monthIndex = range.findIndex((item) => item.key === visibleMonthKey);
  if (monthIndex < 0) monthIndex = 0;
  if (isCalendarExpanded) {
    const next = range[monthIndex + direction];
    if (!next) return;
    visibleMonthKey = next.key;
    selectedDateKey = direction > 0 ? firstDateKeyOfMonth(next) : lastDateKeyOfMonth(next);
    renderAll();
    return;
  }
  let month = range[monthIndex];
  let cells = buildMonthCells(month.year, month.month, logsByDate(), plansByDate(), getMemoMapForScope());
  let rowIndex = getWeekRowIndex(cells) + direction;
  if (rowIndex < 0) {
    monthIndex -= 1;
    if (monthIndex < 0) return;
    month = range[monthIndex];
    cells = buildMonthCells(month.year, month.month, logsByDate(), plansByDate(), getMemoMapForScope());
    selectedDateKey = lastDateKeyOfMonth(month);
    visibleMonthKey = month.key;
    renderAll();
    return;
  }
  if (rowIndex >= Math.ceil(cells.length / 7)) {
    monthIndex += 1;
    if (monthIndex >= range.length) return;
    month = range[monthIndex];
    cells = buildMonthCells(month.year, month.month, logsByDate(), plansByDate(), getMemoMapForScope());
    selectedDateKey = firstDateKeyOfMonth(month);
    visibleMonthKey = month.key;
    renderAll();
    return;
  }
  const dayCells = cells.slice(rowIndex * 7, rowIndex * 7 + 7).filter((cell) => cell.type === "day");
  const targetDay = direction < 0 ? dayCells[dayCells.length - 1] : dayCells[0];
  if (!targetDay) return;
  selectedDateKey = targetDay.dateKey;
  visibleMonthKey = range[monthIndex].key;
  renderAll();
}

async function copyText() {
  const text = els.textExportOutput.value.trim();
  if (!text) {
    showToast(t("noCopyText"), "error");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    showToast(t("copied"));
  } catch (error) {
    console.error("Copy failed", error);
    els.textExportOutput.focus();
    els.textExportOutput.select();
    showToast(t("copyFailed"), "error");
  }
}

function getExportFileName(kind, extension) {
  return `uncharted-calendar-${textScope}-${textExportMode}-${selectedDateKey}-${kind}.${extension}`;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function saveHumanExportFile() {
  const text = getHumanExportText().trim();
  if (!text) {
    showToast(t("noExportText"), "error");
    return;
  }
  downloadFile(getExportFileName("readable", "txt"), `${text}\n`, "text/plain;charset=utf-8");
  showToast(t("fileSaved"));
}

function saveMachineExportFile() {
  const data = getMachineExportData();
  if (!data.dates.some((group) => group.items.length)) {
    showToast(t("noExportText"), "error");
    return;
  }
  downloadFile(
    getExportFileName("import", "json"),
    `${JSON.stringify(data, null, 2)}\n`,
    "application/json;charset=utf-8",
  );
  showToast(t("fileSaved"));
}

function setLanguage(nextLanguage) {
  if (nextLanguage !== "ja" && nextLanguage !== "en") return;
  language = nextLanguage;
  localStorage.setItem(KEYS.language, language);
  renderAll();
  showToast(t("languageChanged"));
}

function setThemeColor(color, notify = false) {
  if (!isHexColor(color)) return;
  themeColor = color;
  writeStorage(KEYS.themeColor, themeColor);
  applyThemeColors();
  setTheme();
  renderStaticText();
  if (notify) showToast(t("themeColorChanged"));
}

function openResetDialog() {
  els.resetConfirmInput.value = "";
  els.resetDialogBackdrop.hidden = false;
  window.requestAnimationFrame(() => els.resetConfirmInput.focus());
}

function closeResetDialog() {
  els.resetDialogBackdrop.hidden = true;
  els.resetConfirmInput.value = "";
}

function resetInternalData() {
  if (els.resetConfirmInput.value.trim() !== "delete") {
    showToast(t("resetDataTypeError"), "error");
    els.resetConfirmInput.focus();
    return;
  }
  [KEYS.goals, KEYS.goalFrames, KEYS.logs, KEYS.plans, KEYS.globalMemos, ...LEGACY_MEMO_KEYS].forEach((key) => {
    localStorage.removeItem(key);
  });
  closeResetDialog();
  now = new Date();
  selectedDateKey = dateKeyFromDate(now);
  visibleMonthKey = monthKeyFromDate(now);
  currentMode = "log";
  calendarScope = "log";
  textExportMode = "all";
  textScope = "all";
  isLogNowMode = false;
  lastThemeMode = "plan";
  initializeDateInputs();
  setView("goal");
  showToast(t("resetDataDone"));
}

function handleEnter(event) {
  if (event.key !== "Enter" || event.isComposing) return;
  if (event.shiftKey) return;
  event.preventDefault();
  if ([els.activityInput, els.logCostInput, els.logBenefitInput].includes(event.currentTarget)) saveLog();
  if ([els.planTextInput, els.costInput, els.benefitInput].includes(event.currentTarget)) savePlan();
  if (event.currentTarget === els.globalMemoInput) saveGlobalMemo();
}

function renderAll() {
  applyThemeColors();
  renderStaticText();
  renderClock();
  renderGoals();
  renderCalendar();
  renderRecordScopeControls();
  renderCalendarScopeControls();
  renderSelectedEntries();
  renderTextExport();
  renderImport();
}

function initializeDateInputs() {
  syncLogNowInput();
}

function initialize() {
  migrateLegacyMemos();
  isCalendarExpanded = false;
  initializeDateInputs();
  els.drawerButton.addEventListener("click", openDrawer);
  els.drawerCloseButton.addEventListener("click", closeDrawer);
  els.drawerBackdrop.addEventListener("click", closeDrawer);
  els.drawerLinks.forEach((button) => button.addEventListener("click", () => setView(button.dataset.drawerTarget)));
  els.settingsIconButton.addEventListener("click", () => setView("settings"));
  els.goalTabButton.addEventListener("click", () => setView("goal"));
  els.primaryTabButton.addEventListener("click", () => {
    if (currentView === "text") {
      setView("text", currentMode);
      return;
    }
    if (currentView === "import") {
      setView("import", currentMode);
      return;
    }
    setView("calendars", currentMode);
  });
  els.calendarTabButton.addEventListener("click", () => {
    if (currentView === "text") {
      setView("text", currentMode);
      return;
    }
    if (currentView === "import") {
      setView("import", currentMode);
      return;
    }
    setView("calendar", calendarScope);
  });
  els.textTabButton.addEventListener("click", () => {
    if (currentView === "text") {
      setView("text", currentMode);
      return;
    }
    if (currentView === "import") {
      setView("import", currentMode);
      return;
    }
    setView("calendar", "plan");
  });
  els.exportTabButton.addEventListener("click", () => {
    setView("text");
  });
  els.saveLogButton.addEventListener("click", saveLog);
  els.addGoalFrameButton.addEventListener("click", addGoalFrame);
  els.savePlanButton.addEventListener("click", savePlan);
  els.setLogNowButton.addEventListener("click", setLogDateTimeMode);
  els.saveGlobalMemoButton.addEventListener("click", saveGlobalMemo);
  els.recordLogScopeButton.addEventListener("click", () => {
    recordScope = "log";
    currentMode = "log";
    renderAll();
  });
  els.recordPlanScopeButton.addEventListener("click", () => {
    recordScope = "plan";
    currentMode = "plan";
    renderAll();
  });
  els.recordMemoScopeButton.addEventListener("click", () => {
    recordScope = "memo";
    renderAll();
  });
  els.calendarLogScopeButton.addEventListener("click", () => setView("calendar", "log"));
  els.calendarPlanScopeButton.addEventListener("click", () => setView("calendar", "plan"));
  els.calendarMemoScopeButton.addEventListener("click", () => setView("calendar", "memo"));
  [els.activityInput, els.logCostInput, els.logBenefitInput, els.planTextInput, els.costInput, els.benefitInput, els.globalMemoInput].forEach((input) => {
    input.addEventListener("keydown", handleEnter);
  });
  els.logDateTimeInput.addEventListener("change", syncSelectedDateFromSharedInput);
  els.logDateTimeInput.addEventListener("input", syncSelectedDateFromSharedInput);
  els.toggleCalendarButton.addEventListener("click", () => {
    isCalendarExpanded = !isCalendarExpanded;
    renderAll();
  });
  els.recordToggleCalendarButton.addEventListener("click", () => {
    isCalendarExpanded = !isCalendarExpanded;
    renderAll();
  });
  els.textToggleCalendarButton.addEventListener("click", () => {
    isCalendarExpanded = !isCalendarExpanded;
    renderAll();
  });
  els.prevPeriodButton.addEventListener("click", () => moveVisiblePeriod(-1));
  els.nextPeriodButton.addEventListener("click", () => moveVisiblePeriod(1));
  els.recordPrevPeriodButton.addEventListener("click", () => moveVisiblePeriod(-1));
  els.recordNextPeriodButton.addEventListener("click", () => moveVisiblePeriod(1));
  els.textPrevPeriodButton.addEventListener("click", () => moveVisiblePeriod(-1));
  els.textNextPeriodButton.addEventListener("click", () => moveVisiblePeriod(1));
  els.exportDayButton.addEventListener("click", () => {
    textExportMode = "day";
    renderAll();
  });
  els.exportWeekButton.addEventListener("click", () => {
    textExportMode = "week";
    renderAll();
  });
  els.exportMonthButton.addEventListener("click", () => {
    textExportMode = "month";
    renderAll();
  });
  els.exportAllButton.addEventListener("click", () => {
    textExportMode = "all";
    renderAll();
  });
  els.exportScopeAllButton.addEventListener("click", () => {
    textScope = "all";
    renderAll();
  });
  els.exportScopeLogButton.addEventListener("click", () => {
    textScope = "log";
    renderAll();
  });
  els.exportScopePlanButton.addEventListener("click", () => {
    textScope = "plan";
    renderAll();
  });
  els.exportScopeMemoButton.addEventListener("click", () => {
    textScope = "memo";
    renderAll();
  });
  els.exportScopeGoalButton.addEventListener("click", () => {
    textScope = "goal";
    renderAll();
  });
  els.copyTextButton.addEventListener("click", copyText);
  els.saveHumanTextButton.addEventListener("click", saveHumanExportFile);
  els.saveMachineTextButton.addEventListener("click", saveMachineExportFile);
  els.importDataButton.addEventListener("click", importSelectedFile);
  els.themeColorInput.addEventListener("input", () => setThemeColor(els.themeColorInput.value));
  els.themeColorInput.addEventListener("change", () => setThemeColor(els.themeColorInput.value, true));
  els.languageJaButton.addEventListener("click", () => setLanguage("ja"));
  els.languageEnButton.addEventListener("click", () => setLanguage("en"));
  els.resetDataButton.addEventListener("click", openResetDialog);
  els.cancelResetButton.addEventListener("click", () => closeResetDialog());
  els.confirmResetButton.addEventListener("click", resetInternalData);
  els.resetDialogBackdrop.addEventListener("click", (event) => {
    if (event.target === els.resetDialogBackdrop) closeResetDialog();
  });
  els.resetConfirmInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") resetInternalData();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!els.resetDialogBackdrop.hidden) {
        closeResetDialog();
        return;
      }
      closeDrawer();
    }
  });
  window.setInterval(() => {
    renderClock();
    if (isLogNowMode) {
      syncLogNowInput();
    }
  }, 1000);
  setView("goal");
}

initialize();
