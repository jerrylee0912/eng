// 學習地圖規劃：全部字根（含尚未完成的）。詳細單字資料在 batchN.js
window.BATCHES = [];
window.PLAN = {
  stages: [
    { id: 1, title: "起步村", star: "⭐", desc: "最常見、動作最具體的字根。先把「字首方向感」練起來。", color: "#27ae60",
      roots: [
        { id: "port", name: "port", mean: "搬運", emoji: "📦" },
        { id: "spect", name: "spect", mean: "看", emoji: "👀" },
        { id: "aud", name: "aud", mean: "聽", emoji: "👂" },
        { id: "dict", name: "dict", mean: "說", emoji: "🗣️" },
        { id: "scrib", name: "scrib/script", mean: "寫", emoji: "✍️" },
        { id: "ject", name: "ject", mean: "丟", emoji: "🎯" },
        { id: "press", name: "press", mean: "壓", emoji: "👇" },
        { id: "struct", name: "struct", mean: "建造", emoji: "🏗️" },
        { id: "duct", name: "duct/duc", mean: "引導", emoji: "🧭" },
        { id: "mit", name: "mit/miss", mean: "送、派", emoji: "📮" }
      ] },
    { id: 2, title: "探險森林", star: "⭐⭐", desc: "國中常見單字的好朋友。字首變化更多，開始會「猜單字」了。", color: "#2f80ed",
      roots: [
        { id: "vis", name: "vis/vid", mean: "看", emoji: "📺" },
        { id: "vert", name: "vert/vers", mean: "轉", emoji: "🔄" },
        { id: "rupt", name: "rupt", mean: "破", emoji: "💥" },
        { id: "tract", name: "tract", mean: "拉", emoji: "🧲" },
        { id: "form", name: "form", mean: "形狀", emoji: "🔷" },
        { id: "pend", name: "pend", mean: "掛、懸", emoji: "🎐" },
        { id: "cap", name: "cap/cept", mean: "拿、抓", emoji: "🧤" },
        { id: "ced", name: "ced/cess", mean: "走、前進", emoji: "🚶" },
        { id: "fer", name: "fer", mean: "帶、承載", emoji: "🎒" },
        { id: "pos", name: "pos/pon", mean: "放", emoji: "📍" }
      ] },
    { id: 3, title: "高山城堡", star: "⭐⭐⭐", desc: "較抽象的字根，常出現在課文與閱讀測驗。", color: "#9b59b6",
      roots: [
        { id: "vent", name: "vent/ven", mean: "來", emoji: "🚪" },
        { id: "tend", name: "tend/tens", mean: "伸展", emoji: "🙆" },
        { id: "plic", name: "plic/ply", mean: "折疊", emoji: "📄" },
        { id: "cur", name: "cur/curs", mean: "跑、流", emoji: "🏃" },
        { id: "gress", name: "grad/gress", mean: "步、走", emoji: "👣" },
        { id: "sist", name: "sist/stat", mean: "站立", emoji: "🧍" },
        { id: "tain", name: "ten/tain", mean: "握住", emoji: "✊" },
        { id: "fact", name: "fact/fect", mean: "做", emoji: "🔨" },
        { id: "sens", name: "sent/sens", mean: "感覺", emoji: "💓" },
        { id: "flect", name: "flect/flex", mean: "彎曲", emoji: "🤸" }
      ] },
    { id: 4, title: "科學王國", star: "🔬", desc: "希臘字根：科學、科技、生活用字，學了很有成就感。", color: "#e67e22",
      roots: [
        { id: "graph", name: "graph/gram", mean: "寫、畫", emoji: "🖋️" },
        { id: "phon", name: "phon", mean: "聲音", emoji: "🎤" },
        { id: "tele", name: "tele", mean: "遠", emoji: "📡" },
        { id: "photo", name: "photo", mean: "光", emoji: "📷" },
        { id: "therm", name: "therm", mean: "熱", emoji: "🌡️" },
        { id: "bio", name: "bio", mean: "生命", emoji: "🌱" },
        { id: "geo", name: "geo", mean: "地球", emoji: "🌍" },
        { id: "chron", name: "chron", mean: "時間", emoji: "⏰" },
        { id: "hydr", name: "hydr/aqua", mean: "水", emoji: "💧" },
        { id: "scope", name: "scope/meter", mean: "觀察、測量", emoji: "🔭" }
      ] },
    { id: 5, title: "數字與人生", star: "🏆", desc: "數字字首＋人與生活的字根，完成後單字量大躍進。", color: "#e74c3c",
      roots: [
        { id: "num", name: "uni/bi/tri", mean: "數字字首", emoji: "🔢" },
        { id: "cred", name: "cred", mean: "相信", emoji: "🤞" },
        { id: "log", name: "log/logy", mean: "話、學問", emoji: "💬" },
        { id: "nat", name: "nat/nasc", mean: "出生", emoji: "👶" },
        { id: "mort", name: "mort", mean: "死", emoji: "🪦" },
        { id: "spir", name: "spir", mean: "呼吸", emoji: "🌬️" },
        { id: "ped", name: "ped/pod", mean: "腳", emoji: "🦶" },
        { id: "man", name: "man/manu", mean: "手", emoji: "✋" },
        { id: "vita", name: "viv/vita", mean: "活", emoji: "💚" },
        { id: "anthrop", name: "anthrop", mean: "人類", emoji: "🧑‍🤝‍🧑" }
      ] }
  ],
  // 字首小抄（第 0 關）：方向感是學字根的鑰匙
  prefixes: [
    { p: "in / im", g: "往內；不", e: ["import 進口", "inside 裡面", "impossible 不可能"], em: "⬇️" },
    { p: "ex / e", g: "向外", e: ["export 出口", "exit 出口", "express 表達"], em: "⬆️" },
    { p: "re", g: "回；再", e: ["return 回來", "review 複習", "rewrite 重寫"], em: "↩️" },
    { p: "pre", g: "先、前", e: ["predict 預測", "preview 預告", "prepare 準備"], em: "⏮️" },
    { p: "post", g: "後", e: ["postscript 附註 P.S.", "postpone 延後"], em: "⏭️" },
    { p: "pro", g: "向前；贊成", e: ["project 計畫", "produce 生產", "progress 進步"], em: "➡️" },
    { p: "sub / su", g: "在下面", e: ["subway 地鐵", "submarine 潛水艇", "support 支持"], em: "🔽" },
    { p: "con / com", g: "一起", e: ["connect 連接", "compare 比較", "construct 建造"], em: "🤝" },
    { p: "trans", g: "跨越；轉變", e: ["transport 運輸", "translate 翻譯", "transform 變形"], em: "🌉" },
    { p: "de", g: "向下；離開；相反", e: ["describe 描述", "decrease 減少", "destroy 摧毀"], em: "📉" },
    { p: "dis", g: "分開；不", e: ["discover 發現", "disappear 消失", "dismiss 解散"], em: "✂️" },
    { p: "per", g: "穿透、完全", e: ["perspective 透視", "perfect 完美", "permit 允許"], em: "🏹" },
    { p: "ad / a", g: "朝向", e: ["admit 承認", "adjective 形容詞", "aspect 方面"], em: "🎯" },
    { p: "ob", g: "面對；擋住", e: ["object 物體", "obstruct 阻擋", "obey 服從"], em: "🚧" },
    { p: "inter", g: "之間；互相", e: ["internet 網路", "interview 訪問", "international 國際的"], em: "↔️" },
    { p: "contra / counter", g: "相反", e: ["contradict 反駁", "counter 反擊；櫃檯"], em: "🔀" },
    { p: "mis", g: "錯誤", e: ["mistake 錯誤", "misunderstand 誤會"], em: "❌" },
    { p: "over / under", g: "過度 / 不足", e: ["overeat 吃太多", "underline 底線"], em: "↕️" }
  ]
};
