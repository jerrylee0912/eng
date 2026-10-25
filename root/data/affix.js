// 字首／字尾單元。單字格式：["字首|字根", IPA, 中文, 原字(含意思與詞性), 例句]，"|" 切開詞綴與其餘部分
// 原字：拆掉詞綴後的「本來的字」，例如 mis|place 的原字是 place 放置(v.) → 放錯。字源字以（字源：…）標示
// lv: 1=最簡單 2=中等 3=進階
window.AFFIX = {
  prefixes: [
  {p:"un",g:"不；相反",em:"🙅",lv:1,tip:"un = 說「不要！」。happy 加 un 就變成不快樂。",words:[
    ["un|happy","ʌnˈhæpi","不快樂的","happy 快樂的(adj.)","She looks unhappy today."],
    ["un|lock","ʌnˈlɑk","開鎖","lock 鎖上(v.)","Please unlock the door."],
    ["un|do","ʌnˈdu","復原；解開","do 做(v.)","I can't undo my mistake."],
    ["un|fair","ʌnˈfɛr","不公平的","fair 公平的(adj.)","That is unfair!"],
    ["un|kind","ʌnˈkaɪnd","不友善的","kind 友善的(adj.)","Don't be unkind to others."]]},
  {p:"re",g:"再一次；回",em:"🔁",lv:1,tip:"re = 重播鍵 ⏪。再來一次、回到原處。",words:[
    ["re|do","riˈdu","重做","do 做(v.)","Please redo your homework."],
    ["re|play","riˈpleɪ","重播","play 播放；玩(v.)","Let's replay the video."],
    ["re|write","riˈraɪt","重寫","write 寫(v.)","I rewrote my story."],
    ["re|turn","rɪˈtɜrn","返回","turn 轉(v.)","He will return at five."],
    ["re|view","rɪˈvju","複習","view 觀看(v.)","Let's review the lesson."]]},
  {p:"pre",g:"先；之前",em:"⏮️",lv:1,tip:"pre = 預告片 preview：事情發生「之前」先看。",words:[
    ["pre|view","ˈprivju","預告","view 觀看(v.)","We watched the movie preview."],
    ["pre|pare","prɪˈpɛr","準備","pare（字源：備好）","Mom is preparing dinner."],
    ["pre|school","ˈpriskul","幼稚園","school 學校(n.)","My brother goes to preschool."],
    ["pre|test","ˈpritɛst","前測","test 測驗(n.)","We took a pretest today."]]},
  {p:"mis",g:"錯誤",em:"❌",lv:1,tip:"mis = miss（失誤）。做錯了、弄錯了。",words:[
    ["mis|take","mɪˈsteɪk","錯誤","take 拿(v.)","I made a mistake."],
    ["mis|spell","mɪsˈspɛl","拼錯","spell 拼字(v.)","I often misspell this word."],
    ["mis|place","mɪsˈpleɪs","放錯地方","place 放置(v.)","I misplaced my keys."],
    ["mis|understand","ˌmɪsʌndərˈstænd","誤會","understand 了解(v.)","Sorry, I misunderstood you."]]},
  {p:"over",g:"過度；在上面",em:"🔝",lv:1,tip:"over = 超過頭了。吃太多 overeat。",words:[
    ["over|eat","ˌoʊvərˈit","吃太多","eat 吃(v.)","Don't overeat at night."],
    ["over|time","ˈoʊvərˌtaɪm","加班","time 時間(n.)","Dad worked overtime last night."],
    ["over|weight","ˌoʊvərˈweɪt","過重的","weight 重量(n.)","The bag is overweight."],
    ["over|come","ˌoʊvərˈkʌm","克服","come 來(v.)","You can overcome your fear."]]},
  {p:"under",g:"在下面；不足",em:"⬇️",lv:1,tip:"under = 在底下。underline 就是畫在底下的線。",words:[
    ["under|line","ˈʌndərˌlaɪn","底線","line 線(n.)","Underline the key word."],
    ["under|wear","ˈʌndərˌwɛr","內衣","wear 穿(v.)","Put your underwear in the drawer."],
    ["under|ground","ˈʌndərˌgraʊnd","地下的","ground 地面(n.)","The subway is underground."],
    ["under|stand","ˌʌndərˈstænd","了解","stand 站(v.)","I understand the question."]]},

  {p:"dis",g:"分開；不",em:"✂️",lv:2,tip:"dis = 剪刀分開。like 的相反就是 dislike。",words:[
    ["dis|like","dɪsˈlaɪk","不喜歡","like 喜歡(v.)","I dislike carrots."],
    ["dis|appear","ˌdɪsəˈpɪr","消失","appear 出現(v.)","The sun disappeared behind a cloud."],
    ["dis|agree","ˌdɪsəˈgri","不同意","agree 同意(v.)","I disagree with you."],
    ["dis|cover","dɪˈskʌvər","發現","cover 蓋住(v.)","Columbus discovered America."]]},
  {p:"in / im",g:"往內；不",em:"⬇️",lv:2,tip:"in 有兩個意思：往內（inside）和不（impossible）。b、m、p 前面變 im。",words:[
    ["in|side","ˌɪnˈsaɪd","裡面","side 邊(n.)","The cat is inside the box."],
    ["in|come","ˈɪnˌkʌm","收入","come 來(v.)","Her income is high."],
    ["im|possible","ɪmˈpɑsəbəl","不可能的","possible 可能的(adj.)","It is impossible to fly like a bird."],
    ["in|visible","ɪnˈvɪzəbəl","看不見的","visible 看得見的(adj.)","The ghost is invisible."]]},
  {p:"ex / e",g:"向外",em:"⬆️",lv:2,tip:"ex = 出口 EXIT：往外走。",words:[
    ["ex|it","ˈɛgzɪt","出口","it（字源：走）","Use the exit on the left."],
    ["ex|port","ɪkˈspɔrt","出口（貨）","port 搬運(v.)","Taiwan exports tea."],
    ["ex|change","ɪksˈtʃeɪndʒ","交換","change 改變；兌換(v.)","Let's exchange gifts."],
    ["ex|press","ɪkˈsprɛs","表達","press 壓(v.)","Words express our feelings."]]},
  {p:"sub",g:"在下面",em:"🔽",lv:2,tip:"sub = 潛水艇 submarine：在海面下。",words:[
    ["sub|way","ˈsʌbˌweɪ","地鐵","way 路(n.)","I take the subway to school."],
    ["sub|marine","ˈsʌbməˌrin","潛水艇","marine 海的(adj.)","A submarine goes under the sea."],
    ["sub|title","ˈsʌbˌtaɪtl","字幕","title 標題(n.)","I watch movies with subtitles."],
    ["sub|tract","səbˈtrækt","減去","tract（字源：拉）","Subtract 3 from 10."]]},
  {p:"inter",g:"之間；互相",em:"↔️",lv:2,tip:"inter = 兩者之間：internet 是把大家連在一起的網路。",words:[
    ["inter|net","ˈɪntərˌnɛt","網際網路","net 網(n.)","I use the internet every day."],
    ["inter|view","ˈɪntərˌvju","面談；訪問","view 觀看(v.)","She has a job interview today."],
    ["inter|national","ˌɪntərˈnæʃənəl","國際的","national 國家的(adj.)","It is an international airport."],
    ["inter|section","ˌɪntərˈsɛkʃən","十字路口","section 區段(n.)","Turn left at the intersection."]]},
  {p:"super",g:"超級；在上",em:"🦸",lv:2,tip:"super = 超人 Superman，超級厲害。",words:[
    ["super|man","ˈsupərˌmæn","超人","man 男人(n.)","Superman can fly."],
    ["super|market","ˈsupərˌmɑrkɪt","超級市場","market 市場(n.)","We buy food at the supermarket."],
    ["super|star","ˈsupərˌstɑr","超級巨星","star 星星；明星(n.)","He is a superstar."],
    ["super|power","ˈsupərˌpaʊər","超能力","power 力量(n.)","My superpower is running fast."]]},
  {p:"auto",g:"自己；自動",em:"🤖",lv:2,tip:"auto = 自己會動：automatic。",words:[
    ["auto|matic","ˌɔtəˈmætɪk","自動的","matic（字源：思考、行動）","The door is automatic."],
    ["auto|graph","ˈɔtəˌgræf","親筆簽名","graph（字源：書寫）","Can I have your autograph?"],
    ["auto|mobile","ˈɔtəmoʊˌbil","汽車","mobile 可移動的(adj.)","An automobile is a car."],
    ["auto|pilot","ˈɔtoʊˌpaɪlət","自動駕駛","pilot 飛行員(n.)","The plane is on autopilot."]]},
  {p:"anti",g:"反對；對抗",em:"🚫",lv:2,tip:"anti = 打叉叉，對抗什麼就加什麼。",words:[
    ["anti|virus","ˌæntiˈvaɪrəs","防毒的","virus 病毒(n.)","Install antivirus software."],
    ["anti|social","ˌæntiˈsoʊʃəl","反社交的","social 社交的(adj.)","He is shy, not antisocial."],
    ["anti|clockwise","ˌæntiˈklɑkˌwaɪz","逆時針","clockwise 順時針的(adj.)","Turn the knob anticlockwise."]]},

  {p:"pro",g:"向前；贊成",em:"➡️",lv:3,tip:"pro = 往前衝。",words:[
    ["pro|tect","prəˈtɛkt","保護","tect（字源：覆蓋）","Helmets protect your head."],
    ["pro|duce","prəˈdus","生產","duce（字源：引導）","Cows produce milk."],
    ["pro|mote","prəˈmoʊt","推廣；升職","mote（字源：移動）","The shop promotes new toys."],
    ["pro|ject","ˈprɑdʒɛkt","專題；計畫","ject（字源：丟）","We did a science project."]]},
  {p:"con / com",g:"一起",em:"🤝",lv:3,tip:"con/com = 一起。connect 是連在一起。",words:[
    ["con|nect","kəˈnɛkt","連接","nect（字源：綁）","Connect the two wires."],
    ["com|pare","kəmˈpɛr","比較","pare（字源：同等）","Compare the two pictures."],
    ["com|munity","kəˈmjunəti","社區","munity（字源：共同分擔）","Our community has a park."],
    ["com|pany","ˈkʌmpəni","公司","pany（字源：麵包）","My dad works for a big company."]]},
  {p:"trans",g:"跨越；轉變",em:"🌉",lv:3,tip:"trans = 跨過橋 🌉：transport 運過去。",words:[
    ["trans|port","trænˈspɔrt","運輸","port 搬運(v.)","Trucks transport food."],
    ["trans|late","trænsˈleɪt","翻譯","late（字源：帶）","Can you translate this word?"],
    ["trans|form","trænsˈfɔrm","轉變","form 形狀(n.)","A caterpillar transforms into a butterfly."],
    ["trans|fer","trænsˈfɜr","轉移","fer（字源：攜帶）","I transfer to another bus here."]]},
  {p:"de",g:"向下；離開；相反",em:"📉",lv:3,tip:"de = 往下掉、拿掉。",words:[
    ["de|crease","dɪˈkris","減少","crease（字源：增長）","The number of birds decreased."],
    ["de|frost","diˈfrɔst","解凍","frost 霜(n.)","Defrost the chicken first."],
    ["de|scribe","dɪˈskraɪb","描述","scribe（字源：寫）","Describe your best friend."],
    ["de|stroy","dɪˈstrɔɪ","摧毀","stroy（字源：建造）","The storm destroyed the house."]]},
  {p:"post",g:"之後",em:"⏭️",lv:3,tip:"post = 之後：P.S. 就是信寫完之後。",words:[
    ["post|pone","poʊstˈpoʊn","延後","pone（字源：放）","The game was postponed."],
    ["post|script","ˈpoʊsˌskrɪpt","附註 P.S.","script 書寫文字(n.)","Add a postscript to the letter."],
    ["post|war","poʊstˈwɔr","戰後的","war 戰爭(n.)","It was a postwar town."]]},
  {p:"per",g:"穿透；完全",em:"🏹",lv:3,tip:"per = 穿過去、做到底。",words:[
    ["per|fect","ˈpɜrfɪkt","完美的","fect（字源：做）","Your drawing is perfect."],
    ["per|form","pərˈfɔrm","表演","form 形式(n.)","They perform on stage."],
    ["per|mit","pərˈmɪt","允許","mit（字源：送）","Dogs are not permitted here."],
    ["per|manent","ˈpɜrmənənt","永久的","manent（字源：停留）","A permanent marker does not fade."]]},
  {p:"ad",g:"朝向",em:"🎯",lv:3,tip:"ad = 朝目標前進。",words:[
    ["ad|mit","ədˈmɪt","承認","mit（字源：送）","He admitted his mistake."],
    ["ad|vance","ədˈvæns","前進","vance（字源：在前）","Technology advances fast."],
    ["ad|venture","ədˈvɛntʃər","冒險","venture 冒險(n.)","We had an adventure in the forest."],
    ["ad|jective","ˈædʒɪktɪv","形容詞","ject（字源：丟）","'Big' is an adjective."]]},
  {p:"ob",g:"面對；擋住",em:"🚧",lv:3,tip:"ob = 擋在面前。",words:[
    ["ob|ey","oʊˈbeɪ","服從","ey（字源：聽）","Dogs obey their owners."],
    ["ob|serve","əbˈzɜrv","觀察","serve（字源：注意）","Observe the bird carefully."],
    ["ob|ject","ˈɑbdʒɪkt","物體","ject（字源：丟）","What is that object?"],
    ["ob|struct","əbˈstrʌkt","阻擋","struct（字源：建造）","A truck obstructed the road."]]},
  {p:"contra",g:"相反",em:"🔀",lv:3,tip:"contra = 唱反調。",words:[
    ["contra|dict","ˌkɑntrəˈdɪkt","反駁","dict（字源：說）","Don't contradict your teacher."],
    ["contra|st","ˈkɑntræst","對比","st（字源：站）","There is a contrast between day and night."],
    ["contra|ry","ˈkɑntrɛri","相反的","ry（字尾：…的）","On the contrary, I like it."]]}
  ],

  suffixes: [
  {p:"-er / -or",g:"做…的人／東西",em:"🧑",lv:1,tip:"teach 教 + er 人 = 老師。",words:[
    ["teach|er","ˈtitʃər","老師","teach 教(v.)","My teacher is kind."],
    ["play|er","ˈpleɪər","玩的人；選手","play 玩；比賽(v.)","He is a good player."],
    ["sing|er","ˈsɪŋər","歌手","sing 唱歌(v.)","She is a famous singer."],
    ["act|or","ˈæktər","演員","act 表演(v.)","The actor is on TV."],
    ["visit|or","ˈvɪzɪtər","訪客","visit 拜訪(v.)","We have a visitor today."]]},
  {p:"-ful",g:"充滿…的",em:"😊",lv:1,tip:"ful = full 滿。help 幫助 + ful 滿 = 很有幫助的。",words:[
    ["help|ful","ˈhɛlpfəl","有幫助的","help 幫助(v.)","Thanks, you are very helpful."],
    ["care|ful","ˈkɛrfəl","小心的","care 小心；在意(n.)","Be careful on the road."],
    ["color|ful","ˈkʌlərfəl","色彩豐富的","color 顏色(n.)","The kite is colorful."],
    ["beauti|ful","ˈbjutɪfəl","美麗的","beauty 美麗(n.)","What a beautiful flower!"],
    ["thank|ful","ˈθæŋkfəl","感恩的","thank 感謝(v.)","I am thankful for my friends."]]},
  {p:"-less",g:"沒有…的",em:"🚫",lv:1,tip:"less = 少。care 小心 + less = 不小心。",words:[
    ["care|less","ˈkɛrləs","粗心的","care 小心；在意(n.)","Don't be careless."],
    ["home|less","ˈhoʊmləs","無家可歸的","home 家(n.)","He helps homeless dogs."],
    ["hope|less","ˈhoʊpləs","絕望的","hope 希望(n.)","The game seems hopeless."],
    ["end|less","ˈɛndləs","無盡的","end 結束；盡頭(n.)","The road looks endless."]]},
  {p:"-ly",g:"…地（形容動作）",em:"🐢",lv:1,tip:"形容詞 + ly = 副詞：slow → slowly 慢慢地。",words:[
    ["slow|ly","ˈsloʊli","慢慢地","slow 慢的(adj.)","Please speak slowly."],
    ["quick|ly","ˈkwɪkli","快速地","quick 快的(adj.)","Eat quickly, or you will be late."],
    ["happi|ly","ˈhæpəli","快樂地","happy 快樂的(adj.)","The kids played happily."],
    ["careful|ly","ˈkɛrfəli","小心地","careful 小心的(adj.)","Cross the street carefully."]]},
  {p:"-y",g:"…的（形容詞）",em:"🌧️",lv:1,tip:"名詞 + y = 形容詞：rain → rainy 下雨的。",words:[
    ["rain|y","ˈreɪni","下雨的","rain 雨(n.)","It is a rainy day."],
    ["sun|ny","ˈsʌni","晴朗的","sun 太陽(n.)","Today is sunny."],
    ["fun|ny","ˈfʌni","好笑的","fun 樂趣(n.)","That joke is funny."],
    ["wind|y","ˈwɪndi","有風的","wind 風(n.)","It is windy today."],
    ["sleep|y","ˈslipi","想睡的","sleep 睡覺(v.)","I feel sleepy."]]},

  {p:"-ness",g:"…的狀態（名詞）",em:"💭",lv:2,tip:"形容詞 + ness = 名詞：kind → kindness 善良。",words:[
    ["happi|ness","ˈhæpinəs","快樂","happy 快樂的(adj.)","Her face is full of happiness."],
    ["kind|ness","ˈkaɪndnəs","善良","kind 善良的(adj.)","Thank you for your kindness."],
    ["dark|ness","ˈdɑrknəs","黑暗","dark 黑暗的(adj.)","I am afraid of darkness."],
    ["sad|ness","ˈsædnəs","悲傷","sad 難過的(adj.)","I felt sadness when he left."]]},
  {p:"-able / -ible",g:"可以…的",em:"✅",lv:2,tip:"able = 能夠。wash 洗 + able = 可以洗的。",words:[
    ["wash|able","ˈwɑʃəbəl","可洗的","wash 洗(v.)","This shirt is washable."],
    ["drink|able","ˈdrɪŋkəbəl","可飲用的","drink 喝(v.)","Is the water drinkable?"],
    ["comfort|able","ˈkʌmftərbəl","舒服的","comfort 舒適；安慰(n.)","This sofa is comfortable."],
    ["poss|ible","ˈpɑsəbəl","可能的","poss（字源：能夠）","It is possible to win."]]},
  {p:"-ment",g:"動作的結果（名詞）",em:"📦",lv:2,tip:"動詞 + ment = 名詞：move → movement 運動。",words:[
    ["move|ment","ˈmuvmənt","運動；移動","move 移動(v.)","Watch the movement of the clock."],
    ["pay|ment","ˈpeɪmənt","付款","pay 付錢(v.)","Payment is by cash."],
    ["govern|ment","ˈgʌvərnmənt","政府","govern 統治(v.)","The government built a new park."],
    ["excite|ment","ɪkˈsaɪtmənt","興奮","excite 使興奮(v.)","Her face showed excitement."]]},
  {p:"-tion / -ion",g:"動作／狀態（名詞）",em:"📝",lv:2,tip:"動詞 + tion/ion = 名詞：act → action 行動。唸 /ʃən/。",words:[
    ["ac|tion","ˈækʃən","行動","act 行動(v.)","Take action now."],
    ["educa|tion","ˌɛdʒəˈkeɪʃən","教育","educate 教育(v.)","Education is important."],
    ["collec|tion","kəˈlɛkʃən","收藏","collect 收集(v.)","I have a stamp collection."],
    ["direc|tion","dəˈrɛkʃən","方向","direct 指引(v.)","Which direction is the station?"]]},
  {p:"-ist",g:"專家；…者",em:"🎨",lv:2,tip:"ist = 專門做這件事的人。",words:[
    ["art|ist","ˈɑrtɪst","藝術家","art 藝術(n.)","The artist paints a tree."],
    ["scien|tist","ˈsaɪəntɪst","科學家","science 科學(n.)","A scientist studies nature."],
    ["pian|ist","piˈænɪst","鋼琴家","piano 鋼琴(n.)","The pianist plays softly."],
    ["dent|ist","ˈdɛntɪst","牙醫","dent（字源：牙齒）","The dentist checks my teeth."]]},

  {p:"-ous",g:"充滿…的（形容詞）",em:"⚠️",lv:3,tip:"ous = 有很多那種特質。danger + ous = 危險的。",words:[
    ["danger|ous","ˈdeɪndʒərəs","危險的","danger 危險(n.)","Fire is dangerous."],
    ["fam|ous","ˈfeɪməs","有名的","fame 名聲(n.)","He is a famous singer."],
    ["nerv|ous","ˈnɜrvəs","緊張的","nerve 神經(n.)","I am nervous before a test."],
    ["delici|ous","dɪˈlɪʃəs","美味的","delight 愉悅(n.)","The cake is delicious."]]},
  {p:"-ive",g:"有…傾向的",em:"🌟",lv:3,tip:"ive = 喜歡做那件事。act + ive = 活躍的。",words:[
    ["act|ive","ˈæktɪv","活躍的","act 行動(v.)","Kids are active."],
    ["creat|ive","kriˈeɪtɪv","有創意的","create 創造(v.)","She is a creative girl."],
    ["attract|ive","əˈtræktɪv","吸引人的","attract 吸引(v.)","That is an attractive poster."],
    ["nat|ive","ˈneɪtɪv","本地的","nat（字源：出生）","He is a native speaker of English."]]},
  {p:"-al",g:"…的（形容詞）",em:"🎵",lv:3,tip:"al 把名詞變形容詞：music → musical。",words:[
    ["music|al","ˈmjuzɪkəl","音樂的","music 音樂(n.)","We saw a musical show."],
    ["natur|al","ˈnætʃərəl","自然的","nature 自然(n.)","Honey is a natural food."],
    ["nation|al","ˈnæʃənəl","國家的","nation 國家(n.)","The national flag is red."],
    ["person|al","ˈpɜrsənəl","個人的","person 人(n.)","This is my personal diary."]]}
  ]
};
