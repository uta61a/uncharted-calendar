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
const MACHINE_COPY_MAX_CHARS = 4000;
const I18N = {
  ja: {
    calendarsTitle: "Uncharted Calendar",
    settingsTitle: "Settings",
    menu: "メニュー",
    menuOpen: "メニューを開く",
    settings: "設定",
    calendars: "カレンダー",
    goal: "目標",
    addGoalButton: "目標を追加",
    addGoalFrameButton: "目標枠を追加",
    addGoalMemoButton: "メモを追加",
    goalPlaceholder: "目標を入力",
    goalSubtitlePlaceholder: "目標",
    memoSubtitlePlaceholder: "メモ",
    goalMemoPlaceholder: "内容を入力",
    goalDragHandle: "ドラッグして並べ替え",
    goalEdit: "編集",
    goalEditDone: "完了",
    goalDeleted: "目標を削除しました。",
    log: "ログ",
    plan: "プラン",
    globalMemo: "メモ",
    dataManagement: "データ管理",
    import: "インポート",
    importPreview: "内容を確認",
    importConfirm: "インポートする",
    importCancel: "キャンセル",
    importPreviewTitle: "インポート内容の確認",
    importIncluded: "取り込む",
    importDuplicate: "重複・取り込まない",
    importExcluded: "取り込まない",
    importInvalid: "内容または日時を確認してください",
    importCategoryGoal: "目標（目標・メモ）",
    importCategoryLog: "ログ",
    importCategoryPlan: "プラン",
    importCategoryMemo: "メモ",
    importGoalItem: "目標",
    importGoalMemoItem: "目標メモ",
    importTextLabel: "内容",
    importPreviewEmpty: "このファイルにインポート可能な項目はありません。",
    importSelectionEmpty: "インポートする項目を選択してください。",
    exportTitle: "Export",
    importTitle: "Import",
    record: "記録",
    history: "履歴",
    textExport: "エクスポート",
    calendar: "カレンダー",
    currentTime: "現在",
    historyMode: "履歴",
    currentModeEnabled: "現在モードに切り替えました。",
    historyModeEnabled: "履歴モードに切り替えました。",
    logSection: "ログ",
    planSection: "プラン",
    logInputLabel: "行動記録",
    logDateTimeLabel: "日時",
    planInputLabel: "行動記録",
    starImportance: "重要度",
    starLevelLabel: "星{level}",
    saveLogButton: "記録する",
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
    markerFilter: "スターで絞り込み",
    markerFilterAll: "すべて",
    markerEmpty: "この条件に当てはまる項目はありません。",
    markerAction: "タップして重要度を変更。現在: 星{level}",
    openCalendar: "カレンダーを開く",
    closeCalendar: "折りたたむ",
    all: "すべて",
    customRange: "範囲指定",
    startDate: "開始日",
    endDate: "終了日",
    exportMarker: "重要度",
    copy: "コピーする",
    saveHumanText: "ファイルに保存",
    copyMachineText: "コピーする",
    machineCopyCount: "文字数: {count} / {limit}",
    machineCopyLimitReached: "文字数: {count} / {limit}。超過分はファイルに保存してください。",
    machineCopyTooLarge: "{limit}文字を超えています。ファイルに保存してください。",
    exportRange: "範囲指定",
    exportHuman: "人間用",
    exportMachine: "インポート専用",
    logType: "記録",
    planType: "予定",
    memoType: "メモ",
    globalMemoInputLabel: "行動記録",
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
    invalidImportData: "インポート専用ファイルを選択してください。",
    noImportItems: "この分類でインポートできるデータがありません。",
    importDone: "{count}件をインポートしました。",
    importFileLabel: "JSONファイル",
    importClipboardLabel: "JSONテキスト",
    importClipboardPlaceholder: "インポート用のテキストを貼り付け",
    importClipboardPreview: "内容を確認",
    invalidImportText: "有効なインポート用テキストを貼り付けてください。",
  },
  en: {
    calendarsTitle: "Uncharted Calendar",
    settingsTitle: "Settings",
    menu: "Menu",
    menuOpen: "Open menu",
    settings: "Settings",
    calendars: "Calendar",
    goal: "Goal",
    addGoalButton: "Add Goal",
    addGoalFrameButton: "Add Goal Frame",
    addGoalMemoButton: "Add Memo",
    goalPlaceholder: "Enter a goal",
    goalSubtitlePlaceholder: "Goal",
    memoSubtitlePlaceholder: "Memo",
    goalMemoPlaceholder: "Enter memo",
    goalDragHandle: "Drag to reorder",
    goalEdit: "Edit",
    goalEditDone: "Done",
    goalDeleted: "Goal deleted.",
    log: "Log",
    plan: "Plan",
    globalMemo: "Memo",
    dataManagement: "Data Management",
    import: "Import",
    importPreview: "Review contents",
    importConfirm: "Import",
    importCancel: "Cancel",
    importPreviewTitle: "Review import contents",
    importIncluded: "Will import",
    importDuplicate: "Duplicate - skipped",
    importExcluded: "Skip import",
    importInvalid: "Check content, date, or time",
    importCategoryGoal: "Goals (goals and memos)",
    importCategoryLog: "Logs",
    importCategoryPlan: "Plans",
    importCategoryMemo: "Memos",
    importGoalItem: "Goal",
    importGoalMemoItem: "Goal memo",
    importTextLabel: "Content",
    importPreviewEmpty: "There are no importable items in this file.",
    importSelectionEmpty: "Select at least one item to import.",
    exportTitle: "Export",
    importTitle: "Import",
    record: "Log",
    history: "History",
    textExport: "Export",
    calendar: "Calendar",
    currentTime: "Now",
    historyMode: "History",
    currentModeEnabled: "Switched to now mode.",
    historyModeEnabled: "Switched to history mode.",
    logSection: "Log",
    planSection: "Plan",
    logInputLabel: "Action Log",
    logDateTimeLabel: "Date and time",
    planInputLabel: "Action Log",
    starImportance: "Importance",
    starLevelLabel: "{level} star(s)",
    saveLogButton: "Record",
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
    markerFilter: "Filter by stars",
    markerFilterAll: "All",
    markerEmpty: "No items match this filter.",
    markerAction: "Tap to change importance. Current: {level} star(s)",
    openCalendar: "Open calendar",
    closeCalendar: "Collapse",
    all: "All",
    customRange: "Custom range",
    startDate: "Start date",
    endDate: "End date",
    exportMarker: "Importance",
    copy: "Copy",
    saveHumanText: "Save File",
    copyMachineText: "Copy",
    machineCopyCount: "Characters: {count} / {limit}",
    machineCopyLimitReached: "Characters: {count} / {limit}. Save larger data as a file.",
    machineCopyTooLarge: "Over {limit} characters. Save the data as a file instead.",
    exportRange: "Range",
    exportHuman: "Readable",
    exportMachine: "Import-Only",
    logType: "Log",
    planType: "Plan",
    memoType: "Memo",
    globalMemoInputLabel: "Action Log",
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
    invalidImportData: "Please choose an import-only file.",
    noImportItems: "There are no items to import for this category.",
    importDone: "Imported {count} items.",
    importFileLabel: "JSON File",
    importClipboardLabel: "JSON Text",
    importClipboardPlaceholder: "Paste import text here",
    importClipboardPreview: "Review contents",
    invalidImportText: "Please paste valid import text.",
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
  goalEditToolbar: document.getElementById("goalEditToolbar"),
  goalEditModeButton: document.getElementById("goalEditModeButton"),
  goalFrameActions: document.getElementById("goalFrameActions"),
  goalView: document.getElementById("goalView"),
  goalList: document.getElementById("goalList"),
  addGoalFrameButton: document.getElementById("addGoalFrameButton"),
  addGoalMemoButton: document.getElementById("addGoalMemoButton"),
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
  logStarRating: document.getElementById("logStarRating"),
  planTextInput: document.getElementById("planTextInput"),
  planStarRating: document.getElementById("planStarRating"),
  memoStarRating: document.getElementById("memoStarRating"),
  savePlanButton: document.getElementById("savePlanButton"),
  planSectionHeading: document.getElementById("planSectionHeading"),
  planPanel: document.querySelector(".record-plan-panel"),
  planInputLabel: document.getElementById("planInputLabel"),
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
  prevPeriodButton: document.getElementById("prevPeriodButton"),
  nextPeriodButton: document.getElementById("nextPeriodButton"),
  toggleCalendarButton: document.getElementById("toggleCalendarButton"),
  selectedDateLabel: document.getElementById("selectedDateLabel"),
  markerFilterGroup: document.getElementById("markerFilterGroup"),
  selectedEntries: document.getElementById("selectedEntries"),
  bottomNav: document.getElementById("bottomNav"),
  goalTabButton: document.getElementById("goalTabButton"),
  primaryTabButton: document.getElementById("primaryTabButton"),
  calendarTabButton: document.getElementById("calendarTabButton"),
  textTabButton: document.getElementById("textTabButton"),
  exportTabButton: document.getElementById("exportTabButton"),
  textExportOutput: document.getElementById("textExportOutput"),
  exportRangeSelect: document.getElementById("exportRangeSelect"),
  exportDateRange: document.getElementById("exportDateRange"),
  exportStartDateInput: document.getElementById("exportStartDateInput"),
  exportEndDateInput: document.getElementById("exportEndDateInput"),
  exportMarkerHeading: document.getElementById("exportMarkerHeading"),
  exportMarkerSelect: document.getElementById("exportMarkerSelect"),
  copyTextButton: document.getElementById("copyTextButton"),
  saveHumanTextButton: document.getElementById("saveHumanTextButton"),
  saveMachineTextButton: document.getElementById("saveMachineTextButton"),
  copyMachineTextButton: document.getElementById("copyMachineTextButton"),
  machineCopyInfo: document.getElementById("machineCopyInfo"),
  exportRangeHeading: document.getElementById("exportRangeHeading"),
  exportStartDateLabel: document.getElementById("exportStartDateLabel"),
  exportEndDateLabel: document.getElementById("exportEndDateLabel"),
  exportHumanHeading: document.getElementById("exportHumanHeading"),
  exportMachineHeading: document.getElementById("exportMachineHeading"),
  importFileLabel: document.getElementById("importFileLabel"),
  importFileInput: document.getElementById("importFileInput"),
  importDataButton: document.getElementById("importDataButton"),
  importClipboardLabel: document.getElementById("importClipboardLabel"),
  importClipboardInput: document.getElementById("importClipboardInput"),
  importClipboardButton: document.getElementById("importClipboardButton"),
  importPreviewPanel: document.getElementById("importPreviewPanel"),
  importPreviewTitle: document.getElementById("importPreviewTitle"),
  importPreviewList: document.getElementById("importPreviewList"),
  confirmImportButton: document.getElementById("confirmImportButton"),
  cancelImportButton: document.getElementById("cancelImportButton"),
  toastContainer: document.getElementById("toastContainer"),
  themeColorLabel: document.getElementById("themeColorLabel"),
  themeColorNameLabel: document.getElementById("themeColorNameLabel"),
  themeColorInput: document.getElementById("themeColorInput"),
  languageLabel: document.getElementById("languageLabel"),
  languageSelect: document.getElementById("languageSelect"),
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
let recordDateKey = dateKeyFromDate(now);
let recordVisibleMonthKey = monthKeyFromDate(now);
let currentView = "goal";
let currentMode = "log";
let calendarScope = "log";
let recordScope = "log";
let isCalendarExpanded = false;
let isRecordCalendarExpanded = false;
let textExportMode = "all";
let exportStartDateKey = selectedDateKey;
let exportEndDateKey = selectedDateKey;
let exportMarkerLevel = 0;
let pendingImport = null;
let isLogNowMode = false;
let markerFilterLevel = 0;
let recordStarLevel = 1;
let focusGoalId = "";
let focusGoalMemoFrameId = "";
let activeGoalDrag = null;
let isGoalEditMode = false;
let language = loadLanguage();
let themeColor = loadThemeColor();
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
      type: "goal",
      subtitle: "",
      memoText: "",
      createdAt: nowIso,
      updatedAt: nowIso,
    }];
    goals = goals.map((goal) => goal.frameId ? goal : { ...goal, frameId: frames[0].id });
    saveGoalFrames(frames);
    saveGoals(goals);
    return frames;
  }
  const normalizedFrames = frames.map((frame) => ({
    ...frame,
    type: frame.type === "memo" ? "memo" : "goal",
    subtitle: typeof frame.subtitle === "string" ? frame.subtitle : "",
    memoText: typeof frame.memoText === "string" ? frame.memoText : "",
  }));
  if (normalizedFrames.some((frame, index) => frame.type !== frames[index].type
      || frame.subtitle !== frames[index].subtitle
      || frame.memoText !== frames[index].memoText)) {
    frames = normalizedFrames;
    saveGoalFrames(frames);
  }
  let fallbackFrame = frames.find((frame) => frame.type !== "memo");
  if (!fallbackFrame && goals.some((goal) => !goal.frameId)) {
    fallbackFrame = {
      id: crypto.randomUUID(),
      type: "goal",
      subtitle: "",
      memoText: "",
      createdAt: nowIso,
      updatedAt: nowIso,
    };
    frames = [...frames, fallbackFrame];
    saveGoalFrames(frames);
  }
  const fallbackFrameId = fallbackFrame?.id || frames[0].id;
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
  const nextFrames = frames.filter((frame) => frame.type === "memo" || usedFrameIds.has(frame.id));
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

function normalizeMarkerLevel(level) {
  const value = Number(level);
  return Number.isInteger(value) && value >= 1 && value <= 3 ? value : 1;
}

function markerStars(item) {
  return "★".repeat(normalizeMarkerLevel(item.markerLevel));
}

function ensureEntryMarkerDefaults() {
  [
    [loadLogs, saveLogs],
    [loadPlans, savePlans],
    [loadGlobalMemos, saveGlobalMemos],
  ].forEach(([loadItems, saveItems]) => {
    let changed = false;
    const items = loadItems().map((item) => {
      const level = Number(item.markerLevel);
      if (Number.isInteger(level) && level >= 1 && level <= 3) return item;
      changed = true;
      return { ...item, markerLevel: 1 };
    });
    if (changed) saveItems(items);
  });
}

function updateEntryMarker(type, id) {
  const storage = {
    log: [loadLogs, saveLogs],
    plan: [loadPlans, savePlans],
    memo: [loadGlobalMemos, saveGlobalMemos],
  }[type];
  if (!storage) return;
  const [loadItems, saveItems] = storage;
  const items = loadItems();
  const item = items.find((entry) => entry.id === id);
  if (!item) return;
  item.markerLevel = normalizeMarkerLevel(item.markerLevel) % 3 + 1;
  saveItems(items);
  renderSelectedEntries();
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

function getVisibleMonth(monthKey = visibleMonthKey) {
  const range = getMonthRange();
  return range.find((month) => month.key === monthKey) || range[0];
}

function getSelectedWeekCells(cells, month, activeDateKey = selectedDateKey) {
  const selectedParts = parseDateKey(activeDateKey);
  const selectedIndex = cells.findIndex((cell) => cell.type === "day" && cell.dateKey === activeDateKey);
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
  const activeDateKey = options.selectedDateKey || selectedDateKey;
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
    button.className = `day-button${cell.count ? " has-entry" : ""}${cell.dateKey === activeDateKey ? " is-selected" : ""}${cell.isOutsideMonth ? " is-outside-month" : ""}${isSelectionDisabled ? " is-selection-disabled" : ""}`;
    button.disabled = isSelectionDisabled;
    button.innerHTML = `
      <span class="day-number">${cell.day}</span>
      <span class="entry-count">${cell.count ? formatCount(cell.count) : ""}</span>
    `;
    button.addEventListener("click", () => {
      if (typeof options.onSelect === "function") {
        options.onSelect(cell.dateKey);
      } else {
        selectedDateKey = cell.dateKey;
        visibleMonthKey = cell.dateKey.slice(0, 7);
      }
      renderAll();
    });
    grid.appendChild(button);
  });
  container.appendChild(grid);
}

function renderCalendar() {
  const month = getVisibleMonth();
  const recordMonth = getVisibleMonth(recordVisibleMonthKey);
  const logMap = logsByDate();
  const planMap = plansByDate();
  const memoMap = getMemoMapForScope(calendarScope);
  const textMemoMap = getAllMemoMap();
  const recordCells = buildMonthCells(recordMonth.year, recordMonth.month, logMap, planMap, textMemoMap, !isRecordCalendarExpanded);
  const mainCells = buildMonthCells(month.year, month.month, logMap, planMap, memoMap, !isCalendarExpanded);
  const targets = [
    [els.recordCalendarMonthLabel, els.recordCalendarGrid, els.recordToggleCalendarButton, recordCells, recordMonth, isRecordCalendarExpanded, {
      disableSelection: isLogNowMode,
      selectedDateKey: recordDateKey,
      onSelect: (dateKey) => {
        recordDateKey = dateKey;
        recordVisibleMonthKey = dateKey.slice(0, 7);
        syncSharedDateInputToRecordDate();
      },
    }],
    [els.calendarMonthLabel, els.calendarGrid, els.toggleCalendarButton, mainCells, month, isCalendarExpanded, {
      selectedDateKey,
      onSelect: (dateKey) => {
        selectedDateKey = dateKey;
        visibleMonthKey = dateKey.slice(0, 7);
      },
    }],
  ];

  targets.forEach(([labelEl, gridEl, toggleButton, cells, targetMonth, isExpanded, options]) => {
    if (!labelEl || !gridEl || !toggleButton) return;
    const visibleCells = isExpanded ? cells : getSelectedWeekCells(cells, targetMonth, options.selectedDateKey);
    const section = document.createElement("section");
    section.className = "calendar-month-section";
    gridEl.innerHTML = "";
    labelEl.textContent = formatMonthLabel(targetMonth.year, targetMonth.month);
    renderWeekdays(section);
    renderCalendarCells(section, visibleCells, options);
    gridEl.appendChild(section);
    toggleButton.textContent = isExpanded ? t("closeCalendar") : t("openCalendar");
    toggleButton.setAttribute("aria-expanded", String(isExpanded));
  });
}

function itemDate(item) {
  return item.isoDateTime || item.createdAt || `${item.dateKey}T${item.time || "00:00"}:00`;
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
  const entryTime = type === "memo" ? memoDisplayTime(item) : item.time;
  const detail = String(item.detail || "");
  const markerLevel = normalizeMarkerLevel(item.markerLevel);
  const stars = markerStars(item);
  const dataAttr = type === "log"
    ? `data-log-id="${item.id}"`
    : type === "plan"
      ? `data-plan-id="${item.id}"`
      : `data-global-memo-id="${item.id}"`;
  return `
    <article class="entry-card ${type}" data-entry-kind="${type}" data-entry-id="${escapeHtml(String(item.id))}" tabindex="0" aria-label="${t("markerAction", { level: markerLevel || 0 })}">
      ${dataAttr ? `<button class="entry-delete" type="button" ${dataAttr} aria-label="${t("deleteConfirm")}">×</button>` : ""}
      ${showType ? `<span class="entry-type">${label}</span>` : ""}
      ${entryTime ? `<span class="entry-time">${escapeHtml(entryTime)}</span>` : ""}
      ${stars ? `<span class="entry-marker" aria-label="${t("markerAction", { level: markerLevel })}">${stars}</span>` : ""}
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
  if (textExportMode === "custom") {
    if (!isValidDateKey(exportStartDateKey) || !isValidDateKey(exportEndDateKey)
        || exportStartDateKey > exportEndDateKey) return [];
    return dateKeysBetween(dateFromKey(exportStartDateKey), dateFromKey(exportEndDateKey));
  }
  return allDateKeysForScope(scope);
}

function matchesExportMarker(item) {
  return exportMarkerLevel === 0 || normalizeMarkerLevel(item.markerLevel) === exportMarkerLevel;
}

function getTextExportItems(dateKey, scope) {
  if (scope === "all" || scope === "entries") {
    return [
      ...getTextExportItems(dateKey, "log").map((item) => `[${t("log")}] ${item}`),
      ...getTextExportItems(dateKey, "plan").map((item) => `[${t("plan")}] ${item}`),
      ...getTextExportItems(dateKey, "memo"),
    ];
  }
  if (scope === "log") {
    const logs = loadLogs()
      .filter((item) => item.dateKey === dateKey && matchesExportMarker(item))
      .sort((a, b) => itemDate(a).localeCompare(itemDate(b)))
      .map((item) => {
        const stars = markerStars(item);
        return `${item.time}${stars ? ` ${stars}` : ""} ${item.text}`;
      });
    return logs;
  }
  if (scope === "plan") {
    const plans = loadPlans()
      .filter((item) => item.dateKey === dateKey && matchesExportMarker(item))
      .sort((a, b) => itemDate(a).localeCompare(itemDate(b)))
      .map((item) => {
        const stars = markerStars(item);
        return `${item.time}${stars ? ` ${stars}` : ""} ${item.text}`;
      });
    return plans;
  }
  return loadGlobalMemos()
    .filter((memo) => memoDateKey(memo) === dateKey && matchesExportMarker(memo))
    .map((memo) => {
      const time = memoDisplayTime(memo);
      const stars = markerStars(memo);
      return `[${t("memoType")}] ${time ? `${time} ` : ""}${stars ? `${stars} ` : ""}${memo.text}`;
    });
}

function getHumanGoalExportText() {
  const frames = ensureGoalFrames();
  const goals = loadGoals();
  const sections = frames.map((frame, frameIndex) => {
    const subtitle = String(frame.subtitle || "").trim();
    if (frame.type === "memo") {
      const memoText = String(frame.memoText || "").trim();
      if (!memoText) return "";
      return [`${subtitle || t("memoSubtitlePlaceholder")}`, memoText].join("\n");
    }
    const frameGoals = goals
      .filter((goal) => goal.frameId === frame.id)
      .map((goal) => String(goal.text || "").trim())
      .filter(Boolean);
    if (!frameGoals.length) return "";
    return [`${subtitle || `${t("goal")} ${frameIndex + 1}`}`, ...frameGoals.map((goal, index) => `${index + 1}. ${goal}`)].join("\n");
  }).filter(Boolean);
  if (!sections.length) return "";
  return [t("goal"), ...sections].join("\n\n");
}

function getHumanExportText(scope = "all") {
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

function getMachineExportItems(dateKey, scope) {
  if (scope === "all" || scope === "entries") {
    return [
      ...getMachineExportItems(dateKey, "log"),
      ...getMachineExportItems(dateKey, "plan"),
      ...getMachineExportItems(dateKey, "memo"),
    ].sort((a, b) => itemDate(a).localeCompare(itemDate(b)));
  }
  if (scope === "log") {
    return loadLogs()
      .filter((item) => item.dateKey === dateKey && matchesExportMarker(item))
      .sort((a, b) => itemDate(a).localeCompare(itemDate(b)))
      .map((item) => ({
        type: "log",
        time: item.time,
        text: item.text,
        markerLevel: normalizeMarkerLevel(item.markerLevel),
      }));
  }
  if (scope === "plan") {
    return loadPlans()
      .filter((item) => item.dateKey === dateKey && matchesExportMarker(item))
      .sort((a, b) => itemDate(a).localeCompare(itemDate(b)))
      .map((item) => ({
        type: "plan",
        time: item.time,
        text: item.text,
        markerLevel: normalizeMarkerLevel(item.markerLevel),
      }));
  }
  return loadGlobalMemos()
    .filter((memo) => memoDateKey(memo) === dateKey && matchesExportMarker(memo))
    .map((memo) => ({
      type: "memo",
      time: memoDisplayTime(memo),
      text: memo.text,
      markerLevel: normalizeMarkerLevel(memo.markerLevel),
    }));
}

function getMachineExportGoals() {
  return loadGoals()
    .map((goal) => ({
      frameId: goal.frameId || "",
      text: String(goal.text || "").trim(),
    }))
    .filter((goal) => goal.text);
}

function getMachineExportData() {
  const dateKeys = getTextExportDateKeys("all");
  const goals = getMachineExportGoals();
  const goalFrames = ensureGoalFrames()
    .filter((frame) => (frame.type === "memo" && String(frame.memoText || "").trim())
      || (frame.type !== "memo" && goals.some((goal) => goal.frameId === frame.id)))
    .map(({ id, type, subtitle, memoText }) => ({ id, type, subtitle, memoText }));
  const dates = dateKeys.map((dateKey) => ({
    dateKey,
    items: getMachineExportItems(dateKey, "all"),
  })).filter((group) => group.items.length);
  return {
    format: "uncharted-calendar-import",
    version: 2,
    goalFrames,
    goals,
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
    if (data?.format !== "uncharted-calendar-import"
      || ![1, 2].includes(data.version)
      || !Array.isArray(data.dates)) return null;
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
        .filter((item) => ["all", "entries"].includes(scope)
          ? ["log", "plan", "memo"].includes(item?.type)
          : item?.type === scope)
        .map((item) => ({
          ...item,
          dateKey: isValidDateKey(item.dateKey) ? item.dateKey : groupDateKey,
        }))
      : [];
  }).filter((item) => item.dateKey && item.text);
  return [...goalItems, ...datedItems];
}

function normalizeImportScope(scope) {
  return ["all", "entries", "log", "plan", "memo", "goal"].includes(scope) ? scope : "";
}

function inferImportScope(data) {
  const exportedScope = normalizeImportScope(data?.scope);
  if (exportedScope) return exportedScope;
  const types = new Set(
    [
      ...(Array.isArray(data?.goals) && data.goals.length ? ["goal"] : []),
      ...(Array.isArray(data?.goalFrames)
        && data.goalFrames.some((frame) => frame.type === "memo" && String(frame.memoText || "").trim())
        ? ["goal"]
        : []),
      ...data.dates.flatMap((group) => Array.isArray(group?.items)
      ? group.items.map((item) => item?.type).filter(Boolean)
      : []),
    ],
  );
  if (types.size === 1) return normalizeImportScope(Array.from(types)[0]) || "all";
  return "all";
}

function importSignature(item) {
  if (item.type === "goal") {
    return ["goal", String(item.text || "").replace(/\s+/g, " ").trim()].join("\u0001");
  }
  const dateKey = item.dateKey || memoDateKey(item);
  const time = item.type === "memo"
    ? memoDisplayTime(item)
    : (isValidTime(item.time) ? item.time : "00:00");
  return [
    item.type,
    dateKey,
    time,
    normalizeMarkerLevel(item.markerLevel),
    String(item.text || ""),
  ].join("\u0001");
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
  const currentGoalFrames = currentFrames.filter((frame) => frame.type !== "memo");
  const nextFrames = [...currentFrames];
  const frameSource = Array.isArray(frames) ? frames : [];
  const importedFrames = [];
  const memoFrameSignatures = new Set(currentFrames
    .filter((frame) => frame.type === "memo")
    .map((frame) => String(frame.memoText || "").trim()));
  frameSource.filter((frame) => frame.type === "memo" && String(frame.memoText || "").trim()).forEach((frame) => {
    const signature = String(frame.memoText || "").trim();
    if (memoFrameSignatures.has(signature)) return;
    memoFrameSignatures.add(signature);
    const nextFrame = {
      ...frame,
      id: crypto.randomUUID(),
      type: "memo",
      subtitle: String(frame.subtitle || ""),
      memoText: String(frame.memoText || ""),
      createdAt: frame.createdAt || new Date().toISOString(),
      updatedAt: frame.updatedAt || frame.createdAt || new Date().toISOString(),
    };
    nextFrames.push(nextFrame);
    importedFrames.push(nextFrame);
  });
  const needsFallbackFrame = candidates.some((item) => !item.frameId) && !currentGoalFrames.length;
  let fallbackFrameId = currentGoalFrames[0]?.id || "";
  if (needsFallbackFrame) {
    const nowIso = new Date().toISOString();
    const fallbackFrame = {
      id: crypto.randomUUID(),
      type: "goal",
      subtitle: "",
      memoText: "",
      createdAt: nowIso,
      updatedAt: nowIso,
    };
    fallbackFrameId = fallbackFrame.id;
    nextFrames.push(fallbackFrame);
  }
  importedFrameIds.forEach((oldFrameId) => {
    const frame = frameSource.find((item) => item.id === oldFrameId);
    const nextFrame = {
      ...frame,
      id: crypto.randomUUID(),
      type: "goal",
      subtitle: String(frame?.subtitle || ""),
      memoText: "",
      createdAt: frame?.createdAt || new Date().toISOString(),
      updatedAt: frame?.updatedAt || frame?.createdAt || new Date().toISOString(),
    };
    frameIdMap[oldFrameId] = nextFrame.id;
    nextFrames.push(nextFrame);
    importedFrames.push(nextFrame);
  });
  if (nextFrames.length !== currentFrames.length || Object.keys(frameIdMap).length || needsFallbackFrame) saveGoalFrames(nextFrames);
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
  return [...imported, ...importedFrames];
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
      isoDateTime: item.isoDateTime || isoFromImportDateTime(item.dateKey, time),
      markerLevel: normalizeMarkerLevel(item.markerLevel),
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
      isoDateTime: item.isoDateTime || isoFromImportDateTime(item.dateKey, time),
      createdAt: item.createdAt || new Date().toISOString(),
      markerLevel: normalizeMarkerLevel(item.markerLevel),
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
      markerLevel: normalizeMarkerLevel(item.markerLevel),
    };
    const signature = importSignature({ ...next, type: "memo" });
    if (signatures.has(signature)) return;
    signatures.add(signature);
    imported.push(next);
  });
  if (imported.length) saveGlobalMemos([...existing, ...imported]);
  return imported;
}

function getExistingImportSignatures() {
  return {
    goal: new Set(loadGoals().map((item) => importSignature({ ...item, type: "goal" }))),
    goalMemo: new Set(ensureGoalFrames()
      .filter((frame) => frame.type === "memo")
      .map((frame) => String(frame.memoText || "").trim())
      .filter(Boolean)),
    log: new Set(loadLogs().map((item) => importSignature({ ...item, type: "log" }))),
    plan: new Set(loadPlans().map((item) => importSignature({ ...item, type: "plan" }))),
    memo: new Set(loadGlobalMemos().map((item) => importSignature({ ...item, type: "memo" }))),
  };
}

function makeImportPreview(data, scope) {
  const items = getImportItems(data, scope);
  const previewItems = [];
  if (scope === "all" || scope === "goal") {
    items.filter((item) => item.type === "goal").forEach((item) => {
      previewItems.push({ key: crypto.randomUUID(), kind: "goal", item, excluded: false });
    });
    (Array.isArray(data.goalFrames) ? data.goalFrames : [])
      .filter((frame) => frame.type === "memo" && String(frame.memoText || "").trim())
      .forEach((frame) => {
        previewItems.push({
          key: crypto.randomUUID(),
          kind: "goalMemo",
          item: { ...frame, memoText: String(frame.memoText || ""), subtitle: String(frame.subtitle || "") },
          excluded: false,
        });
      });
  }
  items.filter((item) => ["log", "plan", "memo"].includes(item.type)).forEach((item) => {
    previewItems.push({
      key: crypto.randomUUID(),
      kind: item.type,
      item: {
        ...item,
        dateKey: item.dateKey,
        time: isValidTime(item.time) ? item.time : (isValidTime(memoDisplayTime(item)) ? memoDisplayTime(item) : "00:00"),
        markerLevel: normalizeMarkerLevel(item.markerLevel),
      },
      excluded: false,
    });
  });
  return { data, scope, items: previewItems };
}

function getPreviewSignature(previewItem) {
  if (previewItem.kind === "goalMemo") return String(previewItem.item.memoText || "").trim();
  return importSignature({ ...previewItem.item, type: previewItem.kind });
}

function refreshImportPreviewStatuses() {
  if (!pendingImport) return;
  const signatures = getExistingImportSignatures();
  const seen = Object.fromEntries(Object.keys(signatures).map((key) => [key, new Set(signatures[key])]));
  pendingImport.items.forEach((previewItem) => {
    const signature = getPreviewSignature(previewItem);
    previewItem.duplicate = seen[previewItem.kind].has(signature);
    previewItem.invalid = previewItem.kind === "goal"
      ? !String(previewItem.item.text || "").trim()
      : previewItem.kind === "goalMemo"
        ? !String(previewItem.item.memoText || "").trim()
        : (!String(previewItem.item.text || "").trim()
          || !isValidDateKey(previewItem.item.dateKey)
          || !isValidTime(previewItem.item.time));
    if (!previewItem.duplicate && !previewItem.invalid && !previewItem.excluded) seen[previewItem.kind].add(signature);
    const card = els.importPreviewList.querySelector(`[data-import-key="${previewItem.key}"]`);
    if (!card) return;
    const status = card.querySelector(".import-preview-status");
    const checkbox = card.querySelector("input[type='checkbox']");
    status.textContent = previewItem.duplicate
      ? t("importDuplicate")
      : previewItem.invalid
        ? t("importInvalid")
        : previewItem.excluded
          ? t("importExcluded")
          : t("importIncluded");
    status.classList.toggle("is-duplicate", previewItem.duplicate);
    status.classList.toggle("is-included", !previewItem.duplicate && !previewItem.invalid && !previewItem.excluded);
    checkbox.checked = !previewItem.duplicate && !previewItem.invalid && !previewItem.excluded;
    checkbox.disabled = previewItem.duplicate || previewItem.invalid;
    card.classList.toggle("is-duplicate", previewItem.duplicate);
    card.classList.toggle("is-excluded", previewItem.excluded && !previewItem.duplicate && !previewItem.invalid);
  });
  const selectedCount = pendingImport.items.filter((item) => !item.duplicate && !item.invalid && !item.excluded).length;
  els.confirmImportButton.disabled = selectedCount === 0;
}

function renderImportPreview() {
  const groups = [
    ["goal", ["goal", "goalMemo"]],
    ["log", ["log"]],
    ["plan", ["plan"]],
    ["memo", ["memo"]],
  ];
  els.importPreviewList.replaceChildren();
  if (!pendingImport || !pendingImport.items.length) {
    const empty = document.createElement("p");
    empty.className = "import-preview-empty";
    empty.textContent = t("importPreviewEmpty");
    els.importPreviewList.append(empty);
    els.confirmImportButton.disabled = true;
    return;
  }
  groups.forEach(([category, kinds]) => {
    const items = pendingImport.items.filter((item) => kinds.includes(item.kind));
    if (!items.length) return;
    const section = document.createElement("section");
    section.className = "import-preview-category";
    const heading = document.createElement("h4");
    heading.textContent = t(`importCategory${category[0].toUpperCase()}${category.slice(1)}`);
    section.append(heading);
    items.forEach((previewItem) => {
      const { item, kind, key } = previewItem;
      const card = document.createElement("article");
      card.className = "import-preview-item";
      card.dataset.importKey = key;
      const top = document.createElement("div");
      top.className = "import-preview-item-top";
      const selection = document.createElement("label");
      selection.className = "import-preview-selection";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = true;
      checkbox.dataset.importKey = key;
      const typeLabel = document.createElement("span");
      typeLabel.textContent = t(kind === "goal" ? "importGoalItem" : kind === "goalMemo" ? "importGoalMemoItem" : kind === "log" ? "log" : kind === "plan" ? "plan" : "globalMemo");
      selection.append(checkbox, typeLabel);
      const status = document.createElement("span");
      status.className = "import-preview-status";
      top.append(selection, status);
      card.append(top);
      if (["log", "plan", "memo"].includes(kind)) {
        const meta = document.createElement("div");
        meta.className = "import-preview-meta";
        const dateTime = document.createElement("span");
        dateTime.className = "import-preview-datetime";
        dateTime.textContent = `${formatDateHeader(item.dateKey)} ${item.time}`;
        const stars = document.createElement("span");
        stars.className = "import-preview-stars";
        stars.textContent = "★".repeat(normalizeMarkerLevel(item.markerLevel));
        meta.append(dateTime, stars);
        card.append(meta);
      }
      if (kind === "goalMemo" && item.subtitle) {
        const subtitle = document.createElement("p");
        subtitle.className = "import-preview-subtitle";
        subtitle.textContent = item.subtitle;
        card.append(subtitle);
      }
      const content = document.createElement("details");
      content.className = "import-preview-content";
      const summary = document.createElement("summary");
      const body = kind === "goalMemo" ? item.memoText : item.text;
      const summaryLabel = document.createElement("span");
      summaryLabel.className = "import-preview-summary-label";
      summaryLabel.textContent = String(body || "").replace(/\s+/g, " ").trim() || t("importTextLabel");
      summary.title = String(body || "");
      summary.append(summaryLabel);
      const fullText = document.createElement("p");
      fullText.className = "import-preview-full-text";
      fullText.textContent = String(body || "");
      content.append(summary, fullText);
      card.append(content);
      section.append(card);
    });
    els.importPreviewList.append(section);
  });
  els.importPreviewList.querySelectorAll("details.import-preview-content").forEach((content) => {
    const summary = content.querySelector("summary");
    if (summary.scrollWidth > summary.clientWidth) {
      content.classList.add("is-expandable");
      return;
    }
    const text = document.createElement("p");
    text.className = "import-preview-content is-static";
    text.textContent = summary.textContent;
    content.replaceWith(text);
  });
  refreshImportPreviewStatuses();
}

function handleImportPreviewInput(event) {
  const control = event.target;
  if (!(control instanceof HTMLInputElement) || control.type !== "checkbox") return;
  const previewItem = pendingImport?.items.find((item) => item.key === control.dataset.importKey);
  if (!previewItem) return;
  previewItem.excluded = !control.checked;
  refreshImportPreviewStatuses();
}

function showImportPreview(rawText, focusTarget, invalidMessage) {
  const data = parseImportData(rawText.trim());
  if (!data) {
    showToast(t(invalidMessage), "error");
    focusTarget.focus();
    return;
  }
  const fileScope = inferImportScope(data);
  pendingImport = makeImportPreview(data, fileScope);
  els.importPreviewTitle.textContent = t("importPreviewTitle");
  els.importPreviewPanel.hidden = false;
  renderImportPreview();
  els.importPreviewPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function prepareImportPreview() {
  const file = els.importFileInput.files?.[0];
  if (!file) {
    showToast(t("invalidImportData"), "error");
    els.importFileInput.focus();
    return;
  }
  const rawText = await file.text();
  showImportPreview(rawText, els.importFileInput, "invalidImportData");
}

function prepareClipboardImportPreview() {
  const rawText = els.importClipboardInput.value;
  if (!rawText.trim()) {
    showToast(t("invalidImportText"), "error");
    els.importClipboardInput.focus();
    return;
  }
  showImportPreview(rawText, els.importClipboardInput, "invalidImportText");
}

function cancelImportPreview() {
  pendingImport = null;
  els.importFileInput.value = "";
  els.importClipboardInput.value = "";
  els.importPreviewPanel.hidden = true;
  els.importPreviewList.replaceChildren();
}

function confirmSelectedImport() {
  if (!pendingImport) return;
  refreshImportPreviewStatuses();
  const selected = pendingImport.items.filter((item) => !item.duplicate && !item.invalid && !item.excluded);
  if (!selected.length) {
    showToast(t("importSelectionEmpty"), "error");
    return;
  }
  const { data, scope } = pendingImport;
  const goalItems = selected.filter((entry) => entry.kind === "goal").map((entry) => ({ ...entry.item, type: "goal" }));
  const datedItems = selected.filter((entry) => ["log", "plan", "memo"].includes(entry.kind))
    .map((entry) => ({ ...entry.item, type: entry.kind }));
  const selectedFrames = [
    ...(Array.isArray(data.goalFrames) ? data.goalFrames.filter((frame) => frame.type !== "memo" && goalItems.some((item) => item.frameId === frame.id)) : []),
    ...selected.filter((entry) => entry.kind === "goalMemo").map((entry) => ({ ...entry.item, type: "memo" })),
  ];
  const imported = scope === "all"
    ? [
      ...importGoals(goalItems, selectedFrames),
      ...importLogs(datedItems.filter((item) => item.type === "log")),
      ...importPlans(datedItems.filter((item) => item.type === "plan")),
      ...importMemos(datedItems.filter((item) => item.type === "memo")),
    ]
      : scope === "goal"
      ? importGoals(goalItems, selectedFrames)
      : scope === "log"
        ? importLogs(datedItems)
        : scope === "plan"
          ? importPlans(datedItems)
          : scope === "entries"
            ? [
              ...importLogs(datedItems.filter((item) => item.type === "log")),
              ...importPlans(datedItems.filter((item) => item.type === "plan")),
              ...importMemos(datedItems.filter((item) => item.type === "memo")),
            ]
            : importMemos(datedItems);
  if (!imported.length) {
    showToast(t("noImportItems"), "error");
    return;
  }
  const lastDatedImport = [...imported].reverse().find((item) => item.dateKey);
  if (lastDatedImport) {
    selectedDateKey = lastDatedImport.dateKey;
    visibleMonthKey = lastDatedImport.dateKey.slice(0, 7);
  }
  pendingImport = null;
  els.importFileInput.value = "";
  els.importClipboardInput.value = "";
  els.importPreviewPanel.hidden = true;
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
      if (button.dataset.goalMemoFrameId) {
        saveGoalFrames(loadGoalFramesRaw().filter((frame) => frame.id !== button.dataset.goalMemoFrameId));
        showToast(t("memoDeleted"));
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
  els.goalFrameActions.hidden = !isGoalEditMode;
  const frameMarkup = frames.map((frame, frameIndex) => {
    const frameGoals = goalsByFrame[frame.id]?.length
      ? goalsByFrame[frame.id]
      : [];
    const isMemoFrame = frame.type === "memo";
    if (!isMemoFrame && !frameGoals.length) return "";
    if (isMemoFrame && !isGoalEditMode && !String(frame.memoText || "").trim()) return "";
    const subtitle = String(frame.subtitle || (isMemoFrame ? t("memoSubtitlePlaceholder") : `${t("goal")} ${frameIndex + 1}`));
    const shownGoals = isGoalEditMode ? frameGoals : frameGoals.filter((goal) => String(goal.text || "").trim());
    return {
      type: isMemoFrame ? "memo" : "goal",
      html: `
    <section class="panel goal-frame-panel ${isMemoFrame ? "goal-memo-frame" : ""}" data-goal-frame-id="${frame.id}">
      <div class="panel-heading">
        ${isGoalEditMode ? `<button class="goal-drag-handle" type="button" aria-label="${t("goalDragHandle")}" title="${t("goalDragHandle")}"></button>` : ""}
        ${isGoalEditMode
          ? `<input class="goal-frame-subtitle" type="text" maxlength="80" data-goal-frame-subtitle-id="${frame.id}" aria-label="${t("goalSubtitlePlaceholder")}" value="${escapeHtml(subtitle)}">`
          : `<h2 class="goal-frame-title">${escapeHtml(subtitle)}</h2>`}
        ${isGoalEditMode && isMemoFrame ? `<button class="entry-delete goal-frame-delete" type="button" data-goal-memo-frame-id="${frame.id}" aria-label="${t("deleteConfirm")}">×</button>` : ""}
      </div>
      ${isMemoFrame
        ? isGoalEditMode
          ? `<textarea class="memo-textarea goal-memo-input" maxlength="5000" data-goal-memo-text-id="${frame.id}" placeholder="${t("goalMemoPlaceholder")}">${escapeHtml(String(frame.memoText || ""))}</textarea>`
          : String(frame.memoText || "").trim() ? `<p class="goal-memo-display">${escapeHtml(String(frame.memoText))}</p>` : ""
        : `<div class="goal-lines">
            ${shownGoals.map((goal) => `
              <div class="goal-line" data-goal-line-id="${goal.id}">
                ${isGoalEditMode ? `<button class="goal-drag-handle" type="button" aria-label="${t("goalDragHandle")}" title="${t("goalDragHandle")}"></button>` : ""}
                ${isGoalEditMode && goal.id ? `<button class="entry-delete" type="button" data-goal-id="${goal.id}" aria-label="${t("deleteConfirm")}">×</button>` : ""}
                ${isGoalEditMode
                  ? `<input class="goal-input" maxlength="200" type="text" data-goal-id="${goal.id}" data-goal-frame-id="${frame.id}" placeholder="${t("goalPlaceholder")}" value="${escapeHtml(String(goal.text || "").replace(/\s+/g, " ").trim())}">`
                  : `<p class="goal-display">${escapeHtml(String(goal.text || ""))}</p>`}
              </div>
            `).join("")}
          </div>
          ${isGoalEditMode ? `<div class="goal-inner-action">
            <button class="ghost-button detail-link-button add-goal-line-button" type="button" data-goal-frame-id="${frame.id}">${t("addGoalButton")}</button>
          </div>` : ""}`}
    </section>
  `,
    };
  }).filter(Boolean);
  const isLandscapeLayout = window.matchMedia("(orientation: landscape)").matches;
  els.goalList.innerHTML = isLandscapeLayout
    ? ["goal", "memo"].map((type) => `
        <div class="goal-column goal-column-${type}">
          ${frameMarkup.filter((frame) => frame.type === type).map((frame) => frame.html).join("")}
        </div>
      `).join("")
    : frameMarkup.map((frame) => frame.html).join("");
  bindDeleteButtons(els.goalList);
  els.goalList.querySelectorAll(".goal-input").forEach((input) => {
    input.addEventListener("input", updateGoalBox);
  });
  els.goalList.querySelectorAll(".goal-frame-subtitle").forEach((input) => {
    input.addEventListener("input", updateGoalFrameSubtitle);
  });
  els.goalList.querySelectorAll(".goal-memo-input").forEach((input) => {
    input.addEventListener("input", (event) => {
      updateGoalMemoBox(event);
      resizeGoalMemo(event.currentTarget);
    });
    resizeGoalMemo(input);
  });
  els.goalList.querySelectorAll(".add-goal-line-button").forEach((button) => {
    button.addEventListener("click", () => addGoalLine(button.dataset.goalFrameId));
  });
  if (focusGoalId) {
    const target = els.goalList.querySelector(`[data-goal-id="${focusGoalId}"]`);
    if (target) target.focus({ preventScroll: true });
    focusGoalId = "";
  }
  if (focusGoalMemoFrameId) {
    const target = els.goalList.querySelector(`[data-goal-memo-text-id="${focusGoalMemoFrameId}"]`);
    if (target) target.focus({ preventScroll: true });
    focusGoalMemoFrameId = "";
  }
}

function renderSelectedEntries() {
  const { month, day } = parseDateKey(selectedDateKey);
  els.selectedDateLabel.textContent = t("dayTitle", { month, day });
  const allItems = getDayItems(selectedDateKey, calendarScope);
  const items = markerFilterLevel
    ? allItems.filter(({ item }) => normalizeMarkerLevel(item.markerLevel) === markerFilterLevel)
    : allItems;
  els.markerFilterGroup.setAttribute("aria-label", t("markerFilter"));
  Array.from(els.markerFilterGroup.options).forEach((option) => {
    const level = Number(option.value);
    option.textContent = level === 0 ? t("markerFilterAll") : "★".repeat(level);
  });
  els.markerFilterGroup.value = String(markerFilterLevel);
  els.selectedEntries.innerHTML = items.length
    ? items.map(({ type, item }) => renderEntryCard(type, item, { showType: false })).join("")
    : `<p class="empty-state">${markerFilterLevel ? t("markerEmpty") : t("dayEmpty")}</p>`;
  bindDeleteButtons(els.selectedEntries);
  els.selectedEntries.querySelectorAll(".entry-card").forEach((card) => {
    const toggleMarker = () => updateEntryMarker(card.dataset.entryKind, card.dataset.entryId);
    card.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      toggleMarker();
    });
    card.addEventListener("keydown", (event) => {
      if (event.target !== card || !["Enter", " "].includes(event.key)) return;
      event.preventDefault();
      toggleMarker();
    });
  });
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

function renderStarRatingControls() {
  [els.logStarRating, els.planStarRating, els.memoStarRating].forEach((container) => {
    container.setAttribute("aria-label", t("starImportance"));
    container.querySelector(".star-rating-label").textContent = t("starImportance");
    container.querySelectorAll("[data-star-level]").forEach((button) => {
      const level = Number(button.dataset.starLevel);
      const isActive = level === recordStarLevel;
      button.textContent = "★".repeat(level);
      button.setAttribute("aria-label", t("starLevelLabel", { level }));
      button.setAttribute("aria-pressed", String(isActive));
      button.classList.toggle("is-active", isActive);
    });
  });
}

function renderTextExport() {
  els.exportRangeSelect.setAttribute("aria-label", t("exportRange"));
  els.exportRangeSelect.options[0].textContent = t("all");
  els.exportRangeSelect.options[1].textContent = t("customRange");
  els.exportRangeSelect.value = textExportMode;
  els.exportDateRange.hidden = textExportMode !== "custom";
  if (els.exportStartDateInput.value !== exportStartDateKey) els.exportStartDateInput.value = exportStartDateKey;
  if (els.exportEndDateInput.value !== exportEndDateKey) els.exportEndDateInput.value = exportEndDateKey;
  els.exportMarkerHeading.textContent = t("exportMarker");
  els.exportMarkerSelect.setAttribute("aria-label", t("exportMarker"));
  Array.from(els.exportMarkerSelect.options).forEach((option) => {
    const level = Number(option.value);
    option.textContent = level ? "★".repeat(level) : t("markerFilterAll");
  });
  els.exportMarkerSelect.value = String(exportMarkerLevel);
  const machineCopyText = JSON.stringify(getMachineExportData());
  const machineCopyLength = Array.from(machineCopyText).length;
  els.copyMachineTextButton.textContent = t("copyMachineText");
  els.copyMachineTextButton.disabled = machineCopyLength > MACHINE_COPY_MAX_CHARS;
  els.copyMachineTextButton.setAttribute("aria-label", t("copyMachineText"));
  els.machineCopyInfo.textContent = t(machineCopyLength > MACHINE_COPY_MAX_CHARS
    ? "machineCopyLimitReached"
    : "machineCopyCount", {
    count: machineCopyLength,
    limit: MACHINE_COPY_MAX_CHARS,
  });
  els.machineCopyInfo.classList.toggle("is-over-limit", machineCopyLength > MACHINE_COPY_MAX_CHARS);
  els.textExportOutput.value = getHumanExportText();
}

function renderImport() {
  els.importFileLabel.textContent = t("importFileLabel");
  els.importClipboardLabel.textContent = t("importClipboardLabel");
  els.importClipboardInput.placeholder = t("importClipboardPlaceholder");
  els.importDataButton.textContent = t("importPreview");
  els.importClipboardButton.textContent = t("importClipboardPreview");
  els.confirmImportButton.textContent = t("importConfirm");
  els.cancelImportButton.textContent = t("importCancel");
  els.importPreviewTitle.textContent = t("importPreviewTitle");
  if (pendingImport) renderImportPreview();
}

function renderDrawerState() {
  els.drawerLinks.forEach((button) => {
    const target = button.dataset.drawerTarget;
    const activeTarget = currentView === "calendar" ? "calendars" : currentView === "import" ? "text" : currentView;
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
    els.primaryTabButton.hidden = true;
    els.calendarTabButton.hidden = true;
    els.textTabButton.hidden = false;
    els.exportTabButton.hidden = false;
    els.goalTabButton.classList.remove("is-active");
    els.primaryTabButton.classList.remove("is-active");
    els.calendarTabButton.classList.remove("is-active");
    els.textTabButton.classList.toggle("is-active", currentView === "text");
    els.exportTabButton.classList.toggle("is-active", currentView === "import");
    els.goalTabButton.setAttribute("aria-selected", "false");
    els.primaryTabButton.setAttribute("aria-selected", "false");
    els.calendarTabButton.setAttribute("aria-selected", "false");
    els.textTabButton.setAttribute("aria-selected", String(currentView === "text"));
    els.exportTabButton.setAttribute("aria-selected", String(currentView === "import"));
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
  els.languageSelect.value = language;
  els.languageSelect.options[0].textContent = t("japanese");
  els.languageSelect.options[1].textContent = t("english");
  els.resetDataLabel.textContent = t("resetData");
  els.resetDataButton.textContent = t("resetDataButton");
  els.resetDialogTitle.textContent = t("resetDialogTitle");
  els.resetDialogMessage.textContent = t("resetDataWarning");
  els.resetConfirmLabel.textContent = t("resetConfirmLabel");
  els.cancelResetButton.textContent = t("cancel");
  els.confirmResetButton.textContent = t("resetConfirmButton");
  els.addGoalFrameButton.textContent = t("addGoalFrameButton");
  els.addGoalMemoButton.textContent = t("addGoalMemoButton");
  els.globalMemoSectionHeading.textContent = t("memoType");
  els.globalMemoInputLabel.textContent = t("globalMemoInputLabel");
  els.saveGlobalMemoButton.textContent = t("saveLogButton");
  els.drawerLinks.forEach((button) => {
    const key = button.dataset.drawerLabel || button.dataset.drawerTarget;
    button.textContent = t(key);
  });
  els.textTabButton.textContent = t("textExport");
  els.exportTabButton.textContent = t("import");
  els.copyTextButton.textContent = t("copy");
  els.saveHumanTextButton.textContent = t("saveHumanText");
  els.saveMachineTextButton.textContent = t("saveHumanText");
  els.exportRangeHeading.textContent = t("exportRange");
  els.exportStartDateLabel.textContent = t("startDate");
  els.exportEndDateLabel.textContent = t("endDate");
  els.exportHumanHeading.textContent = t("exportHuman");
  els.exportMachineHeading.textContent = t("exportMachine");
  els.logSectionHeading.textContent = t("logSection");
  els.logDateTimeLabel.textContent = t("logDateTimeLabel");
  els.logInputLabel.textContent = t("logInputLabel");
  els.saveLogButton.textContent = t("saveLogButton");
  els.setLogNowButton.textContent = isLogNowMode ? t("historyMode") : t("currentTime");
  els.setLogNowButton.classList.toggle("is-current-mode", isLogNowMode);
  els.logDateTimeInput.classList.toggle("is-current-mode", isLogNowMode);
  els.logDateTimeInput.readOnly = isLogNowMode;
  els.planSectionHeading.textContent = t("planSection");
  els.planInputLabel.textContent = t("planInputLabel");
  els.savePlanButton.textContent = t("saveLogButton");
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
  if (view !== "goal") isGoalEditMode = false;
  if (mode === "log" || mode === "plan" || mode === "memo") {
    if (view === "calendar") calendarScope = mode;
  }
  if (mode === "log" || mode === "plan") {
    currentMode = mode;
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
  els.heroSection.hidden = ["settings", "text", "import"].includes(view);
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

function addLog(text, date) {
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
    markerLevel: normalizeMarkerLevel(recordStarLevel),
    isoDateTime: date.toISOString(),
  };
  saveLogs([...loadLogs(), log]);
  recordDateKey = log.dateKey;
  recordVisibleMonthKey = log.dateKey.slice(0, 7);
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
  els.activityInput.value = "";
  addLog(text, date);
}

function syncLogNowInput() {
  const current = new Date();
  els.logDateTimeInput.value = localDateTimeValue(current);
  recordDateKey = dateKeyFromDate(current);
  recordVisibleMonthKey = monthKeyFromDate(current);
}

function syncSharedDateInputToRecordDate() {
  if (isLogNowMode) return;
  const parts = parseDateTimeInput(els.logDateTimeInput.value);
  const fallback = new Date();
  const hour = parts?.hour ?? fallback.getHours();
  const minute = parts?.minute ?? fallback.getMinutes();
  els.logDateTimeInput.value = `${recordDateKey}T${pad(hour)}:${pad(minute)}`;
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
  recordDateKey = dateKeyFromDate(date);
  recordVisibleMonthKey = monthKeyFromDate(date);
  renderAll();
}

function setLogDateTimeMode() {
  isLogNowMode = !isLogNowMode;
  if (isLogNowMode) {
    syncLogNowInput();
    showToast(t("currentModeEnabled"));
  } else {
    syncSharedDateInputToRecordDate();
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
    markerLevel: normalizeMarkerLevel(recordStarLevel),
    isoDateTime: date.toISOString(),
    createdAt: new Date().toISOString(),
  };
  savePlans([...loadPlans(), plan]);
  recordDateKey = plan.dateKey;
  recordVisibleMonthKey = plan.dateKey.slice(0, 7);
  els.planTextInput.value = "";
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
  const memoDateKey = dateKeyFromDate(date);
  saveGlobalMemos([...loadGlobalMemos(), {
      id: crypto.randomUUID(),
      text,
      dateKey: memoDateKey,
      time: formatTime(date),
      isoDateTime: date.toISOString(),
      createdAt: new Date().toISOString(),
      markerLevel: normalizeMarkerLevel(recordStarLevel),
    }]);
  recordDateKey = memoDateKey;
  recordVisibleMonthKey = memoDateKey.slice(0, 7);
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
  const targetFrameId = frames.some((frame) => frame.id === frameId && frame.type !== "memo")
    ? frameId
    : frames.find((frame) => frame.type !== "memo")?.id;
  if (!targetFrameId) return;
  createEmptyGoal(targetFrameId);
  renderAll();
}

function addGoalFrame() {
  const nowIso = new Date().toISOString();
  const frame = {
    id: crypto.randomUUID(),
    type: "goal",
    subtitle: "",
    memoText: "",
    createdAt: nowIso,
    updatedAt: nowIso,
  };
  saveGoalFrames([...ensureGoalFrames(), frame]);
  createEmptyGoal(frame.id);
  renderAll();
}

function addGoalMemoFrame() {
  const nowIso = new Date().toISOString();
  const frame = {
    id: crypto.randomUUID(),
    type: "memo",
    subtitle: "",
    memoText: "",
    createdAt: nowIso,
    updatedAt: nowIso,
  };
  saveGoalFrames([...ensureGoalFrames(), frame]);
  focusGoalMemoFrameId = frame.id;
  renderAll();
}

function updateGoalFrameSubtitle(event) {
  const input = event.currentTarget;
  const nowIso = new Date().toISOString();
  saveGoalFrames(loadGoalFramesRaw().map((frame) => frame.id === input.dataset.goalFrameSubtitleId
    ? { ...frame, subtitle: input.value, updatedAt: nowIso }
    : frame));
}

function updateGoalMemoBox(event) {
  const input = event.currentTarget;
  const nowIso = new Date().toISOString();
  saveGoalFrames(loadGoalFramesRaw().map((frame) => frame.id === input.dataset.goalMemoTextId
    ? { ...frame, memoText: input.value, updatedAt: nowIso }
    : frame));
}

function resizeGoalMemo(input) {
  input.style.height = "auto";
  const borderHeight = input.offsetHeight - input.clientHeight;
  input.style.height = `${Math.max(input.scrollHeight + borderHeight, 110)}px`;
}

function sortableGoalTarget(target) {
  const line = target.closest(".goal-line");
  if (line && els.goalList.contains(line)) return { kind: "goal", element: line };
  const frame = target.closest(".goal-frame-panel");
  if (frame && els.goalList.contains(frame)) return { kind: "frame", element: frame };
  return null;
}

function startGoalDrag(event) {
  if (!isGoalEditMode || event.button !== 0 || activeGoalDrag) return;
  if (!event.target.closest(".goal-drag-handle")) return;
  const sortable = sortableGoalTarget(event.target);
  if (!sortable) return;
  event.preventDefault();
  activeGoalDrag = {
    ...sortable,
    pointerId: event.pointerId,
  };
  activeGoalDrag.element.classList.add("is-dragging");
  document.body.classList.add("is-goal-reordering");
  activeGoalDrag.element.setPointerCapture?.(activeGoalDrag.pointerId);
}

function moveGoalDrag(event) {
  if (!activeGoalDrag) return;
  event.preventDefault();
  const pointTarget = document.elementFromPoint(event.clientX, event.clientY) || event.target;
  const hoveredElement = activeGoalDrag.kind === "frame"
    ? pointTarget.closest(".goal-frame-panel")
    : pointTarget.closest(".goal-line");
  const hovered = hoveredElement && els.goalList.contains(hoveredElement)
    ? { kind: activeGoalDrag.kind, element: hoveredElement }
    : null;
  if (!hovered || hovered.kind !== activeGoalDrag.kind || hovered.element === activeGoalDrag.element) return;
  const source = activeGoalDrag.element;
  const target = hovered.element;
  if (source.parentElement !== target.parentElement) return;
  const rect = target.getBoundingClientRect();
  const insertAfter = event.clientY > rect.top + rect.height / 2;
  target.parentElement.insertBefore(source, insertAfter ? target.nextSibling : target);
}

function finishGoalDrag() {
  if (!activeGoalDrag) return;
  const drag = activeGoalDrag;
  activeGoalDrag = null;
  drag.element.classList.remove("is-dragging");
  document.body.classList.remove("is-goal-reordering");
  if (drag.kind === "frame") {
    const frames = loadGoalFramesRaw();
    const nextOrder = frames.slice();
    ["goal", "memo"].forEach((type) => {
      const column = els.goalList.querySelector(`.goal-column-${type}`);
      if (!column) return;
      const ids = Array.from(column.querySelectorAll(":scope > .goal-frame-panel"))
        .map((element) => element.dataset.goalFrameId);
      const reordered = ids.map((id) => frames.find((frame) => frame.id === id)).filter(Boolean);
      let index = 0;
      frames.forEach((frame, frameIndex) => {
        if ((frame.type === "memo" ? "memo" : "goal") === type && reordered[index]) {
          nextOrder[frameIndex] = reordered[index++];
        }
      });
    });
    saveGoalFrames(nextOrder);
    return;
  }
  const frameId = drag.element.closest(".goal-frame-panel")?.dataset.goalFrameId;
  const order = Array.from(drag.element.parentElement.querySelectorAll(":scope > .goal-line"))
    .map((element) => element.dataset.goalLineId);
  const allGoals = loadGoals();
  const frameGoals = allGoals.filter((goal) => goal.frameId === frameId);
  const goalMap = new Map(frameGoals.map((goal) => [goal.id, goal]));
  const orderedGoals = order.map((id) => goalMap.get(id)).filter(Boolean);
  let index = 0;
  saveGoals(allGoals.map((goal) => goal.frameId === frameId ? orderedGoals[index++] : goal));
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

function getWeekRowIndex(cells, activeDateKey = selectedDateKey) {
  const selectedIndex = cells.findIndex((cell) => cell.type === "day" && cell.dateKey === activeDateKey);
  return selectedIndex >= 0 ? Math.floor(selectedIndex / 7) : 0;
}

function firstDateKeyOfMonth(month) {
  return `${month.key}-01`;
}

function lastDateKeyOfMonth(month) {
  const lastDate = new Date(month.year, month.month, 0).getDate();
  return `${month.key}-${pad(lastDate)}`;
}

function moveVisiblePeriod(direction, target = "main") {
  const range = getMonthRange();
  const isRecordTarget = target === "record";
  let targetVisibleMonthKey = isRecordTarget ? recordVisibleMonthKey : visibleMonthKey;
  let targetDateKey = isRecordTarget ? recordDateKey : selectedDateKey;
  let monthIndex = range.findIndex((item) => item.key === targetVisibleMonthKey);
  if (monthIndex < 0) monthIndex = 0;
  const isExpanded = isRecordTarget ? isRecordCalendarExpanded : isCalendarExpanded;
  const applyTargetDate = (dateKey, monthKey = dateKey.slice(0, 7)) => {
    if (isRecordTarget) {
      recordDateKey = dateKey;
      recordVisibleMonthKey = monthKey;
      syncSharedDateInputToRecordDate();
      return;
    }
    selectedDateKey = dateKey;
    visibleMonthKey = monthKey;
  };
  if (isExpanded) {
    const next = range[monthIndex + direction];
    if (!next) return;
    applyTargetDate(direction > 0 ? firstDateKeyOfMonth(next) : lastDateKeyOfMonth(next), next.key);
    renderAll();
    return;
  }
  let month = range[monthIndex];
  let cells = buildMonthCells(month.year, month.month, logsByDate(), plansByDate(), getMemoMapForScope());
  let rowIndex = getWeekRowIndex(cells, targetDateKey) + direction;
  if (rowIndex < 0) {
    monthIndex -= 1;
    if (monthIndex < 0) return;
    month = range[monthIndex];
    cells = buildMonthCells(month.year, month.month, logsByDate(), plansByDate(), getMemoMapForScope());
    applyTargetDate(lastDateKeyOfMonth(month), month.key);
    renderAll();
    return;
  }
  if (rowIndex >= Math.ceil(cells.length / 7)) {
    monthIndex += 1;
    if (monthIndex >= range.length) return;
    month = range[monthIndex];
    cells = buildMonthCells(month.year, month.month, logsByDate(), plansByDate(), getMemoMapForScope());
    applyTargetDate(firstDateKeyOfMonth(month), month.key);
    renderAll();
    return;
  }
  const dayCells = cells.slice(rowIndex * 7, rowIndex * 7 + 7).filter((cell) => cell.type === "day");
  const targetDay = direction < 0 ? dayCells[dayCells.length - 1] : dayCells[0];
  if (!targetDay) return;
  applyTargetDate(targetDay.dateKey, range[monthIndex].key);
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
  const rangeName = textExportMode === "custom"
    ? `${exportStartDateKey}-to-${exportEndDateKey}`
    : "all-dates";
  return `uncharted-calendar-all-${rangeName}-${exportMarkerLevel || "all-stars"}-${kind}.${extension}`;
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
  if (!machineExportHasItems(data)) {
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

function machineExportHasItems(data) {
  return data.dates.some((group) => group.items.length)
    || data.goals.length > 0
    || data.goalFrames.some((frame) => frame.type === "memo" && String(frame.memoText || "").trim());
}

async function copyMachineExportData() {
  const data = getMachineExportData();
  if (!machineExportHasItems(data)) {
    showToast(t("noExportText"), "error");
    return;
  }
  const text = JSON.stringify(data);
  const length = Array.from(text).length;
  if (length > MACHINE_COPY_MAX_CHARS) {
    showToast(t("machineCopyTooLarge", { limit: MACHINE_COPY_MAX_CHARS }), "error");
    return;
  }
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      throw new Error("Clipboard API unavailable");
    }
    showToast(t("copied"));
  } catch (error) {
    const temporaryInput = document.createElement("textarea");
    temporaryInput.value = text;
    temporaryInput.setAttribute("readonly", "");
    temporaryInput.style.position = "fixed";
    temporaryInput.style.opacity = "0";
    document.body.appendChild(temporaryInput);
    temporaryInput.select();
    const copied = document.execCommand("copy");
    temporaryInput.remove();
    if (copied) {
      showToast(t("copied"));
    } else {
      console.error("Import data copy failed", error);
      showToast(t("copyFailed"), "error");
    }
  }
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
  recordDateKey = dateKeyFromDate(now);
  recordVisibleMonthKey = monthKeyFromDate(now);
  currentMode = "log";
  calendarScope = "log";
  textExportMode = "all";
  exportStartDateKey = selectedDateKey;
  exportEndDateKey = selectedDateKey;
  exportMarkerLevel = 0;
  markerFilterLevel = 0;
  recordStarLevel = 1;
  isLogNowMode = false;
  isRecordCalendarExpanded = false;
  initializeDateInputs();
  setView("goal");
  showToast(t("resetDataDone"));
}

function handleEnter(event) {
  if (event.key !== "Enter" || event.isComposing || event.repeat) return;
  if (event.shiftKey) return;
  event.preventDefault();
  if (event.currentTarget === els.activityInput) saveLog();
  if (event.currentTarget === els.planTextInput) savePlan();
  if (event.currentTarget === els.globalMemoInput) saveGlobalMemo();
}

function renderAll() {
  applyThemeColors();
  renderStaticText();
  renderGoalEditControls();
  renderClock();
  renderGoals();
  renderCalendar();
  renderRecordScopeControls();
  renderStarRatingControls();
  renderCalendarScopeControls();
  renderSelectedEntries();
  renderTextExport();
  renderImport();
}

function renderGoalEditControls() {
  els.goalEditToolbar.hidden = currentView !== "goal";
  els.goalEditModeButton.textContent = t(isGoalEditMode ? "goalEditDone" : "goalEdit");
  els.goalEditModeButton.setAttribute("aria-pressed", String(isGoalEditMode));
  els.goalEditModeButton.classList.toggle("is-active", isGoalEditMode);
}

function toggleGoalEditMode() {
  isGoalEditMode = !isGoalEditMode;
  renderAll();
}

function initializeDateInputs() {
  syncLogNowInput();
}

function initialize() {
  migrateLegacyMemos();
  ensureEntryMarkerDefaults();
  isCalendarExpanded = false;
  initializeDateInputs();
  window.matchMedia("(orientation: landscape)").addEventListener("change", () => {
    renderGoals();
    if (pendingImport) renderImportPreview();
  });
  els.drawerButton.addEventListener("click", openDrawer);
  els.drawerCloseButton.addEventListener("click", closeDrawer);
  els.drawerBackdrop.addEventListener("click", closeDrawer);
  els.drawerLinks.forEach((button) => button.addEventListener("click", () => setView(button.dataset.drawerTarget)));
  els.settingsIconButton.addEventListener("click", () => setView("settings"));
  els.goalTabButton.addEventListener("click", () => setView("goal"));
  els.primaryTabButton.addEventListener("click", () => setView("calendars", currentMode));
  els.calendarTabButton.addEventListener("click", () => {
    setView("calendar", calendarScope);
  });
  els.textTabButton.addEventListener("click", () => {
    setView("text");
  });
  els.exportTabButton.addEventListener("click", () => {
    setView("import");
  });
  els.saveLogButton.addEventListener("click", saveLog);
  els.goalEditModeButton.addEventListener("click", toggleGoalEditMode);
  els.goalList.addEventListener("pointerdown", startGoalDrag);
  document.addEventListener("pointermove", moveGoalDrag, { passive: false });
  document.addEventListener("pointerup", finishGoalDrag);
  document.addEventListener("pointercancel", finishGoalDrag);
  els.addGoalFrameButton.addEventListener("click", addGoalFrame);
  els.addGoalMemoButton.addEventListener("click", addGoalMemoFrame);
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
  els.markerFilterGroup.addEventListener("change", () => {
    markerFilterLevel = Number(els.markerFilterGroup.value);
    renderSelectedEntries();
  });
  [els.activityInput, els.planTextInput, els.globalMemoInput].forEach((input) => {
    input.addEventListener("keydown", handleEnter);
  });
  [els.logStarRating, els.planStarRating, els.memoStarRating].forEach((container) => {
    container.addEventListener("click", (event) => {
      const button = event.target.closest("[data-star-level]");
      if (!button) return;
      recordStarLevel = normalizeMarkerLevel(button.dataset.starLevel);
      renderStarRatingControls();
    });
  });
  els.logDateTimeInput.addEventListener("change", syncSelectedDateFromSharedInput);
  els.logDateTimeInput.addEventListener("input", syncSelectedDateFromSharedInput);
  els.toggleCalendarButton.addEventListener("click", () => {
    isCalendarExpanded = !isCalendarExpanded;
    renderAll();
  });
  els.recordToggleCalendarButton.addEventListener("click", () => {
    isRecordCalendarExpanded = !isRecordCalendarExpanded;
    renderAll();
  });
  els.prevPeriodButton.addEventListener("click", () => moveVisiblePeriod(-1));
  els.nextPeriodButton.addEventListener("click", () => moveVisiblePeriod(1));
  els.recordPrevPeriodButton.addEventListener("click", () => moveVisiblePeriod(-1, "record"));
  els.recordNextPeriodButton.addEventListener("click", () => moveVisiblePeriod(1, "record"));
  els.exportRangeSelect.addEventListener("change", () => {
    textExportMode = els.exportRangeSelect.value;
    renderAll();
  });
  [els.exportStartDateInput, els.exportEndDateInput].forEach((input) => {
    input.addEventListener("input", () => {
      exportStartDateKey = els.exportStartDateInput.value || selectedDateKey;
      exportEndDateKey = els.exportEndDateInput.value || selectedDateKey;
      if (exportStartDateKey > exportEndDateKey) {
        if (input === els.exportStartDateInput) {
          exportEndDateKey = exportStartDateKey;
        } else {
          exportStartDateKey = exportEndDateKey;
        }
      }
      renderAll();
    });
  });
  els.exportMarkerSelect.addEventListener("change", () => {
    exportMarkerLevel = Number(els.exportMarkerSelect.value);
    renderAll();
  });
  els.copyTextButton.addEventListener("click", copyText);
  els.copyMachineTextButton.addEventListener("click", copyMachineExportData);
  els.saveHumanTextButton.addEventListener("click", saveHumanExportFile);
  els.saveMachineTextButton.addEventListener("click", saveMachineExportFile);
  els.importDataButton.addEventListener("click", prepareImportPreview);
  els.importClipboardButton.addEventListener("click", prepareClipboardImportPreview);
  els.importFileInput.addEventListener("change", () => {
    pendingImport = null;
    els.importPreviewPanel.hidden = true;
    els.importPreviewList.replaceChildren();
  });
  els.confirmImportButton.addEventListener("click", confirmSelectedImport);
  els.cancelImportButton.addEventListener("click", cancelImportPreview);
  els.importPreviewList.addEventListener("change", handleImportPreviewInput);
  els.themeColorInput.addEventListener("input", () => setThemeColor(els.themeColorInput.value));
  els.themeColorInput.addEventListener("change", () => setThemeColor(els.themeColorInput.value, true));
  els.languageSelect.addEventListener("change", () => setLanguage(els.languageSelect.value));
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
