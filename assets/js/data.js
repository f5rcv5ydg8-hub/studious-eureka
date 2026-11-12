/* Site content: all copy is bilingual. Keep facts conservative and cite the
   official/latest local practice in the UI where behaviour may vary. */
window.SITE_DATA = (function () {
  const t = (zh, en) => ({ zh, en });

  const countries = [
    {
      id: "CN", iso: "CHN", region: t("东亚", "East Asia"), name: t("中国", "China"),
      greeting: t(
        "正式商务场合以握手为主，交换名片时双手递出、双手接过，并先阅读再收好。称呼常用“姓 + 职务”，初次见面避免直呼其名。",
        "A firm handshake is standard. Offer and receive business cards with both hands, read the card before putting it away, and address people by surname plus title until invited otherwise."
      ),
      card: t(
        "名片最好中英双语，递出时让文字正面朝向对方。收到后不要折叠、写字或随手塞进后裤袋。",
        "Use bilingual cards when possible and present them with the text facing the recipient. Never fold, write on, or casually pocket a card you receive."
      ),
      taboo: t(
        "避免送钟、伞、梨等带有不吉利谐音的礼物；不要在公开场合让对方失面子。数字“4”在部分场合被回避。",
        "Avoid gifts such as clocks, umbrellas, or pears whose names carry unlucky associations. Never cause someone to lose face in public; the number four is avoided in some settings."
      ),
      negotiation: t(
        "关系与信任通常先于合同，决策往往是集体作出的。谈判节奏偏耐心，价格与条款要留出回旋空间，避免高压式成交。",
        "Relationships and trust usually come before the contract, and decisions are often collective. Expect a patient pace, leave room on price and terms, and avoid high-pressure closing."
      ),
      story: {
        title: t("1972 年尼克松访华：一双筷子的准备", "Nixon in China, 1972: preparing the chopsticks"),
        lead: t(
          "1972 年 2 月，美国总统尼克松抵达北京，这是新中国成立后美国总统首次访华。人民大会堂的国宴成为全球媒体的焦点。",
          "In February 1972, US President Richard Nixon arrived in Beijing for the first visit by a US president to the People's Republic of China. The state banquet in the Great Hall of the People became a global media event."
        ),
        body: [
          t(
            "据随行记者与回忆录记载，尼克松在访华前练习使用筷子。宴会上他用筷子夹菜的细节被镜头捕捉，成为这次“破冰之旅”中最具人情味的画面之一。",
            "According to accompanying journalists and later memoirs, Nixon practised using chopsticks before the trip. Footage of him eating with them became one of the most human images of the visit that broke the ice."
          ),
          t(
            "这则轶事常被用来说明：跨文化准备不只是背几句问候语，也包括对对方日常习惯的尊重。一个愿意学习的小动作，往往比完美的辞令更容易被记住。",
            "The anecdote is often used to show that cross-cultural preparation is not only about memorising greetings. It also means respecting everyday habits; a small gesture of willingness to learn is often remembered longer than perfect wording."
          )
        ],
        note: t("史实注记：事件与细节依据公开史料及随行报道整理。", "Historical note: based on public records and contemporaneous reporting.")
      }
    },
    {
      id: "JP", iso: "JPN", region: t("东亚", "East Asia"), name: t("日本", "Japan"),
      greeting: t(
        "见面多以鞠躬致意，交换名片时双手递出、双手接过，并微微鞠躬。名片被视为个人的延伸，不能折叠或在上面随意书写。",
        "Bowing is the customary greeting. Exchange business cards with both hands and a slight bow. A card is treated as an extension of the person: never fold it or write on it."
      ),
      card: t(
        "名片应准备日文或英文版本，递出时文字朝向对方、略低于对方视线。收到名片后先认真阅读，再放入名片夹。",
        "Prepare Japanese or English cards, present them with the text facing the recipient and slightly below eye level, then read the card carefully before placing it in a card holder."
      ),
      taboo: t(
        "避免直接说“不”或让对方当众难堪；送礼避开“4”“9”等数字。不要给服务人员小费，也不要随意拆除礼物的包装。",
        "Avoid a blunt no or causing public embarrassment. Gifts should avoid numbers such as four and nine. Do not tip service staff, and do not unwrap a gift casually."
      ),
      negotiation: t(
        "日方重视事前沟通（根回し）与集体共识，正式会议上往往只是确认。准备充分、耐心推进，避免用强硬姿态逼单。",
        "Japanese teams value prior informal alignment (nemawashi) and group consensus; formal meetings often confirm what has already been agreed. Prepare thoroughly, be patient, and avoid hard closing tactics."
      ),
      story: {
        title: t("从“名刺”到名片：一张纸的分量", "From meishi to business card: the weight of a piece of paper"),
        lead: t(
          "在日本，名片被称为“名刺”。它不仅是联系方式，也是所属组织、职级与个人身份的公开展示。",
          "In Japan a business card is called meishi. It is more than contact details: it publicly presents the organisation, rank, and identity of the person."
        ),
        body: [
          t(
            "江户末期至明治初期，日本使节出访欧美时开始系统学习西式外交礼仪，同时保留鞠躬、交换名刺等传统。两种礼仪体系在近代外交场合逐渐并存。",
            "From the late Edo period into the early Meiji era, Japanese missions to Europe and the United States studied Western diplomatic protocol while retaining traditions such as bowing and exchanging meishi. The two systems gradually came to coexist in modern diplomacy."
          ),
          t(
            "今天，日本商务人士在一次会面中交换数十张名片并不罕见。递接时的双手、角度与阅读动作，构成了对方判断你是否重视这次会面的细节。",
            "Today it is not unusual for Japanese businesspeople to exchange dozens of cards in a single meeting. The hands, angle, and moment of reading all signal how seriously you take the encounter."
          )
        ],
        note: t("文化观察：本页为礼仪背景说明，不指向单一历史事件。", "Cultural note: this page explains background rather than a single historical event.")
      }
    },
    {
      id: "KR", iso: "KOR", region: t("东亚", "East Asia"), name: t("韩国", "South Korea"),
      greeting: t(
        "握手并微微鞠躬，名片用双手递接。称呼通常使用职级或“姓 + 先生/女士”，初次见面不宜直呼其名。",
        "Shake hands with a slight bow and exchange cards with both hands. Address people by rank or surname plus honorific; avoid first names on a first meeting."
      ),
      card: t(
        "递名片时右手递、左手轻托，或双手递出；收到后先看再收。职位与资历会影响称呼和座次。",
        "Present a card with the right hand supported by the left, or with both hands. Read it before putting it away. Rank and seniority shape forms of address and seating."
      ),
      taboo: t(
        "避免用红笔写对方名字；在长辈或上级面前饮酒时要侧身。不要送“4”相关的礼物，也不要在正式场合过度玩笑。",
        "Avoid writing a person's name in red. When drinking in front of elders or seniors, turn slightly away. Avoid gifts associated with the number four, and keep humour restrained in formal settings."
      ),
      negotiation: t(
        "层级意识较强，重要决定往往需要上级确认。关系建立后推进较快，但要注意尊重职级与正式流程。",
        "Hierarchy matters and important decisions often require senior approval. Once relationships are established, things can move quickly, but rank and formal process should still be respected."
      ),
      story: {
        title: t("2002 年韩日世界杯：体育外交的礼仪舞台", "The 2002 Korea–Japan World Cup: protocol on a sporting stage"),
        lead: t(
          "2002 年，韩国与日本共同举办国际足联世界杯。这是世界杯首次由两个国家联合主办，也是两国在经历复杂历史后的一次大型合作。",
          "In 2002, South Korea and Japan co-hosted the FIFA World Cup. It was the first World Cup jointly hosted by two countries and a major collaboration between neighbours with a complex history."
        ),
        body: [
          t(
            "开幕式与赛事礼宾需要在两种语言、两套文化习惯之间协调。从国歌次序到贵宾座次，每一个细节都被提前反复确认。",
            "Opening-ceremony and match protocol had to be coordinated across two languages and two sets of cultural habits. From the order of anthems to VIP seating, every detail was confirmed in advance."
          ),
          t(
            "这届赛事常被用来说明：体育场合的礼仪不是背景板，而是主办方专业度与国家形象的直接呈现。对商务场合同样如此，细节决定对方如何理解你的诚意。",
            "The tournament is often cited to show that protocol at sporting events is not decoration: it directly presents the host's professionalism and national image. The same is true in business, where details shape how your sincerity is read."
          )
        ],
        note: t("史实注记：赛事信息依据国际足联公开资料。", "Historical note: tournament details follow FIFA public records.")
      }
    },
    {
      id: "SG", iso: "SGP", region: t("东南亚", "Southeast Asia"), name: t("新加坡", "Singapore"),
      greeting: t(
        "握手是最通用的商务问候，英语在商务场合广泛使用。新加坡是多民族社会，交往前先确认对方的称呼、宗教与饮食禁忌。",
        "A handshake is the most common business greeting, and English is widely used. Singapore is a multi-ethnic society: check names, religious practice, and dietary needs before hosting."
      ),
      card: t(
        "名片可用英文；递接时用双手更显尊重。初次见面使用 Mr./Ms. + 姓氏，待对方示意后再改用名字。",
        "English-language cards are fine; using both hands shows respect. Address people as Mr or Ms plus surname until invited to use a first name."
      ),
      taboo: t(
        "地铁内饮食、吸烟和乱丢垃圾会被重罚；避免拿种族、宗教或政治开玩笑。公共场所不要随意嚼口香糖。",
        "Eating or drinking on the MRT, smoking, and littering carry heavy fines. Avoid jokes about race, religion, or politics, and do not chew gum casually in public spaces."
      ),
      negotiation: t(
        "商务风格务实、高效、规则清晰，重视合同与法治。决策通常较快，但需要对条款和合规性做足准备。",
        "The business style is pragmatic, efficient, and rule-based, with strong respect for contracts and the law. Decisions can be quick, but terms and compliance must be well prepared."
      ),
      story: {
        title: t("1978 年邓小平访新：一次关于治理的观察", "Deng Xiaoping in Singapore, 1978: observing governance"),
        lead: t(
          "1978 年 11 月，邓小平访问新加坡，李光耀在总统府设宴接待。这次访问发生在改革开放启动前夕，双方就城市管理、招商引资与对外开放交换了看法。",
          "In November 1978, Deng Xiaoping visited Singapore and was hosted by Lee Kuan Yew at the Istana. The visit came just before China's reform and opening-up, and the two sides discussed urban management, investment promotion, and opening to the outside world."
        ),
        body: [
          t(
            "据公开回忆，新加坡在公共住房、工业园区与城市清洁方面的做法给中方代表团留下印象。礼仪之外，真正被带走的是可操作的经验。",
            "Public accounts recall that Singapore's approach to public housing, industrial parks, and urban cleanliness impressed the Chinese delegation. Beyond ceremony, what was taken away was practical experience."
          ),
          t(
            "这则故事提醒我们：高规格接待只是开始，跨文化交往的价值在于把观察转化为行动。商务会面亦然，礼宾细节服务于长期合作。",
            "The story is a reminder that a warm reception is only the beginning; the value of cross-cultural exchange lies in turning observation into action. In business too, protocol serves the longer relationship."
          )
        ],
        note: t("史实注记：访问时间与接待地点依据公开史料。", "Historical note: dates and venue follow public records.")
      }
    },
    {
      id: "TH", iso: "THA", region: t("东南亚", "Southeast Asia"), name: t("泰国", "Thailand"),
      greeting: t(
        "传统问候是双手合十的“Wai”，商务场合也常见握手，但是否握手通常由对方先示意。递交物品用右手，左手轻托右臂更礼貌。",
        "The traditional greeting is the wai, with palms together. Handshakes are common in business, but let the other person initiate. Offer items with the right hand, supported at the forearm by the left."
      ),
      card: t(
        "名片双手递出，略低头致意。称呼使用 Khun + 名字，不论男女，既礼貌又通用。",
        "Present cards with both hands and a slight bow of the head. Address people as Khun plus first name; it is polite and works for any gender."
      ),
      taboo: t(
        "不要触摸他人头部，也不要用脚指向人或佛像。王室与佛教极为受尊崇，避免任何不敬的玩笑或讨论。",
        "Do not touch anyone's head or point at people or Buddha images with your feet. The monarchy and Buddhism are deeply respected; avoid irreverent jokes or discussion."
      ),
      negotiation: t(
        "泰国商务文化重视和谐与“sanuk”（愉快），应避免正面冲突和公开批评。决策节奏可能较慢，耐心与关系维护很关键。",
        "Thai business culture values harmony and sanuk, a sense of enjoyment. Avoid direct confrontation and public criticism. Decisions may take time; patience and relationship-building matter."
      ),
      story: {
        title: t("1960 年艾森豪威尔访泰：传统礼仪的公共时刻", "Eisenhower in Thailand, 1960: tradition on a public stage"),
        lead: t(
          "1960 年 6 月，美国总统艾森豪威尔访问曼谷，成为冷战时期美国在东南亚的一次重要外交行程。泰国以盛大而讲究的礼仪接待了来访代表团。",
          "In June 1960, US President Dwight Eisenhower visited Bangkok as part of a significant Cold War diplomatic tour in Southeast Asia. Thailand received the delegation with elaborate ceremonial protocol."
        ),
        body: [
          t(
            "公开影像显示，访问包含王室与政府层面的正式会面、阅兵与传统表演。泰方在宗教与王室礼仪上的安排，构成了接待的核心部分。",
            "Public footage shows formal meetings at royal and government levels, reviews, and traditional performances. Thai arrangements around religion and the monarchy formed the core of the reception."
          ),
          t(
            "对今天的商务访客而言，这个故事的意义在于：在泰国，尊重王室、佛教与等级秩序不是可选项，而是建立信任的前提。",
            "For today's business visitor, the lesson is that respect for the monarchy, Buddhism, and hierarchy in Thailand is not optional; it is a precondition for trust."
          )
        ],
        note: t("史实注记：访问时间与行程依据公开档案与报道。", "Historical note: dates and itinerary follow public archives and reporting.")
      }
    },
    {
      id: "IN", iso: "IND", region: t("南亚", "South Asia"), name: t("印度", "India"),
      greeting: t(
        "常见问候是双手合十并说“Namaste”，商务场合握手也普遍。对长辈或上级可在称呼后加“ji”表示尊重。",
        "A common greeting is Namaste with palms together; handshakes are also widespread in business. Adding ji after a name shows respect, especially for elders or seniors."
      ),
      card: t(
        "名片双手递出，收到后认真阅读。初次见面使用 Mr./Ms. + 姓氏，除非对方主动邀请使用名字。",
        "Offer cards with both hands and read the card you receive. Use Mr or Ms plus surname until invited to use a first name."
      ),
      taboo: t(
        "不要用左手递物或进食；牛在印度教文化中神圣，进入寺庙通常需脱鞋。饮食安排要确认素食、清真等需求。",
        "Avoid using the left hand to give or eat. Cattle are sacred in Hindu culture, and shoes are usually removed in temples. Confirm vegetarian, halal, and other dietary needs in advance."
      ),
      negotiation: t(
        "关系与信任通常比速度更重要，决策可能需要多层确认。价格敏感度较高，时间安排也更具弹性，需耐心推进。",
        "Relationships and trust often matter more than speed, and decisions may require several layers of confirmation. Price sensitivity is high and schedules can be flexible; be patient."
      ),
      story: {
        title: t("2015 年国际瑜伽日：Namaste 的公共外交", "International Yoga Day, 2015: Namaste as public diplomacy"),
        lead: t(
          "2014 年，联合国大会通过决议，将每年 6 月 21 日定为国际瑜伽日。2015 年，印度总理莫迪在纽约联合国总部与多国代表一起参加瑜伽活动。",
          "In 2014 the UN General Assembly designated 21 June as International Yoga Day. In 2015, Indian Prime Minister Narendra Modi joined diplomats and UN representatives in a yoga session in New York."
        ),
        body: [
          t(
            "这场活动把印度传统的身体实践推到了全球公共外交的舞台。合十、问候与共同练习，构成了比演讲更柔和的形象表达。",
            "The event put an Indian bodily practice on the stage of global public diplomacy. Palms together, greeting, and practising together formed a softer image than a speech alone."
          ),
          t(
            "它也被视为“文化即外交”的案例：当礼仪与日常生活相连时，跨文化沟通往往比正式谈判更容易建立情感连接。",
            "It is often cited as an example of culture as diplomacy: when protocol connects to everyday life, cross-cultural communication can build emotional connection more easily than formal negotiation."
          )
        ],
        note: t("史实注记：联合国决议与活动时间依据公开资料。", "Historical note: UN resolution and event date follow public records.")
      }
    },
    {
      id: "AE", iso: "ARE", region: t("西亚", "West Asia"), name: t("阿联酋", "United Arab Emirates"),
      greeting: t(
        "商务场合以握手为主，男士通常等待女士先伸手。问候长辈或上级时先致意，递接物品使用右手。",
        "A handshake is standard in business, with men usually waiting for a woman to offer her hand first. Greet elders or seniors first, and use the right hand to give or receive items."
      ),
      card: t(
        "名片最好英文与阿拉伯文对照，双手递出。收到后先阅读，不要立即塞进口袋。",
        "Bilingual English–Arabic cards are ideal; present them with both hands. Read a card before putting it away."
      ),
      taboo: t(
        "避免用左手递物；斋月期间不要在公共场所白天饮食。不要主动与异性握手，也不要拍摄政府建筑或当地人。",
        "Avoid the left hand for giving or receiving. Do not eat or drink in public during Ramadan. Do not offer to shake hands with someone of the opposite sex unless they initiate, and do not photograph government buildings or local people without permission."
      ),
      negotiation: t(
        "关系与信任是合作前提，会面常从咖啡和寒暄开始。决策可能集中在高层，耐心、尊重宗教时间与明确承诺都很重要。",
        "Relationships and trust are prerequisites; meetings often begin with coffee and conversation. Decisions may be concentrated at senior levels. Be patient, respect prayer times, and make commitments clear."
      ),
      story: {
        title: t("1971 年联邦成立：咖啡与椰枣的待客之道", "The 1971 federation: coffee, dates, and hospitality"),
        lead: t(
          "1971 年 12 月 2 日，阿布扎比、迪拜等酋长国在扎耶德·本·苏尔坦·阿勒纳哈扬的主持下组成阿拉伯联合酋长国。联邦的建立本身就是一场漫长的协商。",
          "On 2 December 1971, Abu Dhabi, Dubai, and the other emirates formed the United Arab Emirates under the leadership of Sheikh Zayed bin Sultan Al Nahyan. The federation itself was the product of long negotiation."
        ),
        body: [
          t(
            "在海湾地区的待客传统中，阿拉伯咖啡（gahwa）与椰枣是迎接客人的基本礼节。主人通常先为最年长或最重要的客人斟咖啡，客人用右手接过并轻轻摇晃杯子表示够了。",
            "In Gulf hospitality, Arabic coffee (gahwa) and dates are a basic welcome. The host usually serves the eldest or most senior guest first; guests accept with the right hand and may gently shake the cup to signal that they have had enough."
          ),
          t(
            "这套看似简单的动作，实际上是关系、等级与尊重的微型仪式。理解它，比记住一句问候语更能帮助访客融入当地商务场合。",
            "This simple sequence is a miniature ritual of relationship, hierarchy, and respect. Understanding it helps a visitor far more than memorising a single greeting."
          )
        ],
        note: t("史实注记：联邦成立日期依据公开史料；待客习俗为区域文化概述。", "Historical note: the federation date follows public records; hospitality customs are a regional overview.")
      }
    },
    {
      id: "SA", iso: "SAU", region: t("西亚", "West Asia"), name: t("沙特阿拉伯", "Saudi Arabia"),
      greeting: t(
        "握手时使用右手，问候节奏较慢，常伴随多次寒暄。男性不宜主动与女性握手，除非对方先伸手。",
        "Shake hands with the right hand. Greetings are unhurried and often include repeated pleasantries. Men should not offer to shake hands with women unless the woman initiates."
      ),
      card: t(
        "名片用英文即可，双手或右手递出。称呼使用 Mr. + 姓氏，并加上适当头衔。",
        "English-language cards are acceptable; present them with both hands or the right hand. Address people as Mr plus surname and use appropriate titles."
      ),
      taboo: t(
        "严禁饮酒；避免用左手递物或进食。尊重每日礼拜时间，斋月期间不要在公开场合饮食或吸烟。",
        "Alcohol is prohibited. Avoid the left hand for giving or eating. Respect daily prayer times, and do not eat, drink, or smoke in public during Ramadan."
      ),
      negotiation: t(
        "关系导向明显，建立信任比快速报价更重要。决策通常由高层拍板，需尊重宗教节奏，合同细节也要留出弹性。",
        "Relationship-driven: building trust matters more than a fast quote. Decisions are usually made at senior levels. Respect religious rhythms and allow flexibility in contract details."
      ),
      story: {
        title: t("1945 年昆西号会面：礼物与立场", "The Quincy meeting, 1945: gifts and positions"),
        lead: t(
          "1945 年 2 月 14 日，美国总统罗斯福与沙特国王伊本·沙特在苏伊士运河附近的“昆西号”巡洋舰上会面。这次会面被视为美沙关系的重要起点。",
          "On 14 February 1945, US President Franklin Roosevelt met King Ibn Saud aboard the USS Quincy near the Suez Canal. The meeting is widely regarded as a foundational moment in US–Saudi relations."
        ),
        body: [
          t(
            "据公开记载，双方互赠礼物：沙方赠予剑等传统礼品，美方则提供了飞机与医疗物资方面的支持。会面中的待客安排与礼物交换，都是外交礼仪的一部分。",
            "Public accounts describe an exchange of gifts: traditional items such as a sword from the Saudi side, and support including an aircraft and medical supplies from the US side. Hospitality and gift exchange were part of the diplomatic protocol."
          ),
          t(
            "这则故事说明，礼物在外交中很少只是物品。它传递立场、尊重与关系的优先级；在商务场合，理解礼物背后的含义同样重要。",
            "The story shows that gifts in diplomacy are rarely just objects. They signal position, respect, and the priority of a relationship. In business, reading what a gift means matters just as much."
          )
        ],
        note: t("史实注记：会面时间、地点与礼物依据公开史料整理。", "Historical note: date, location, and gifts follow public records.")
      }
    },
    {
      id: "DE", iso: "DEU", region: t("欧洲", "Europe"), name: t("德国", "Germany"),
      greeting: t(
        "握手是标准问候，力度适中、眼神接触。称呼使用 Herr/Frau + 姓氏及头衔（如 Dr.），除非对方明确邀请使用名字。",
        "A handshake is the standard greeting, with a firm grip and eye contact. Address people as Herr or Frau plus surname and title (for example Dr) until explicitly invited to use a first name."
      ),
      card: t(
        "名片通常包含完整职称与联系方式，双手递出。收到后认真阅读，不要随意涂写。",
        "Cards usually include full titles and contact details; present them with both hands. Read the card you receive and do not write on it."
      ),
      taboo: t(
        "德国商务非常重视守时，迟到需提前说明。不要用玩笑打破严肃议程，也不要在初次见面时打听私人生活。",
        "Punctuality matters greatly; explain in advance if you will be late. Do not use jokes to break a serious agenda, and avoid personal questions on a first meeting."
      ),
      negotiation: t(
        "准备充分、逻辑严密、直接表达分歧是常态。合同条款会被严格审视，承诺一旦作出通常要求精确执行。",
        "Thorough preparation, rigorous logic, and direct disagreement are normal. Contract terms are examined closely, and commitments are expected to be executed precisely."
      ),
      story: {
        title: t("1970 年华沙之跪：姿态也是外交语言", "The Warsaw Genuflection, 1970: gesture as diplomatic language"),
        lead: t(
          "1970 年 12 月 7 日，西德总理维利·勃兰特在华沙犹太人隔离区起义纪念碑前献花圈。在事先没有安排的情况下，他跪了下来。",
          "On 7 December 1970, West German Chancellor Willy Brandt laid a wreath at the Monument to the Ghetto Heroes in Warsaw. Without prior arrangement, he knelt."
        ),
        body: [
          t(
            "这一举动通过电视画面传遍世界，成为战后德国承担历史责任的象征。对当时的德国国内舆论而言，它也引发了激烈争论。",
            "The gesture was broadcast around the world and became a symbol of postwar Germany's acceptance of historical responsibility. It was also fiercely debated within Germany at the time."
          ),
          t(
            "外交礼仪通常强调克制与可预期，但有时一个超出脚本的动作，反而比长篇声明更有力量。商务沟通同样如此：姿态、停顿与眼神，往往在语言之外完成意义的传递。",
            "Diplomatic protocol usually values restraint and predictability, yet sometimes an unscripted gesture speaks louder than a long statement. The same is true in business: posture, pauses, and eye contact carry meaning beyond words."
          )
        ],
        note: t("史实注记：事件时间与地点依据公开史料。", "Historical note: date and location follow public records.")
      }
    },
    {
      id: "FR", iso: "FRA", region: t("欧洲", "Europe"), name: t("法国", "France"),
      greeting: t(
        "商务场合以握手开始和结束，熟人间才可能行贴面礼（la bise）。称呼使用 Monsieur/Madame + 姓氏，直到对方邀请改用名字。",
        "Business meetings begin and end with a handshake; la bise is for people who know each other well. Use Monsieur or Madame plus surname until invited to use a first name."
      ),
      card: t(
        "名片简洁、英文或法文皆可；双手递出并稍作停留。初次见面不宜过早使用名字或过度热情。",
        "Keep cards clean and simple, in French or English; present them with both hands and a brief pause. Avoid first names or excessive familiarity on a first meeting."
      ),
      taboo: t(
        "不要一上来只谈价格和合同；法国商务午餐常被视为建立关系的一部分。避免用英语假设对方不愿说法语，先询问更稳妥。",
        "Do not rush straight into price and contracts; the business lunch is often part of building the relationship. Do not assume English is unwelcome, but asking first is safer than assuming."
      ),
      negotiation: t(
        "法国商务沟通带有辩论传统，重视逻辑与立场表达。决策层级清晰，关系与午餐场合往往影响谈判节奏。",
        "French business communication has a debating tradition and values logic and the clear expression of positions. Decision-making is hierarchical, and relationships and lunch settings often shape the pace."
      ),
      story: {
        title: t("1961 年肯尼迪访法：国宴的秩序", "Kennedy in France, 1961: the order of a state dinner"),
        lead: t(
          "1961 年 5 月至 6 月，美国总统肯尼迪访问巴黎，与戴高乐就欧洲安全与冷战议题会谈。法方以高规格国宴接待，礼宾安排成为媒体关注的一部分。",
          "In May and June 1961, US President John F. Kennedy visited Paris for talks with Charles de Gaulle on European security and the Cold War. France received him with a high-profile state dinner, and the protocol drew media attention."
        ),
        body: [
          t(
            "法式国宴讲究座次、菜单、上菜顺序与祝酒时机。谁坐在主人右侧、何时举杯、以何种称呼致辞，都有既定规则。",
            "French state dinners attend closely to seating, menu, service order, and the moment for toasts. Who sits on the host's right, when glasses are raised, and how guests are addressed all follow established rules."
          ),
          t(
            "这些规则并非繁文缛节，而是把关系、等级与尊重可视化。理解一套礼宾秩序，往往比学会几句客套话更能帮助跨文化沟通。",
            "These rules are not empty formality: they make relationships, hierarchy, and respect visible. Understanding a protocol order often helps cross-cultural communication more than a few polite phrases."
          )
        ],
        note: t("史实注记：访问时间与会谈背景依据公开史料。", "Historical note: dates and context follow public records.")
      }
    },
    {
      id: "GB", iso: "GBR", region: t("欧洲", "Europe"), name: t("英国", "United Kingdom"),
      greeting: t(
        "握手轻短，问候克制，常用天气或交通等轻松话题开场。称呼使用 Mr./Ms. + 姓氏，直到对方邀请使用名字。",
        "Handshakes are brief and greetings restrained; light topics such as weather or transport are common openers. Use Mr or Ms plus surname until invited to use a first name."
      ),
      card: t(
        "名片简洁，双手或单手递出均可。初次见面不宜过度自夸或过度热情。",
        "Keep cards simple; one or two hands are both acceptable. Avoid excessive self-promotion or over-familiarity on a first meeting."
      ),
      taboo: t(
        "不要插队；避免追问收入、政治立场或私人生活。英式幽默常含自嘲与轻描淡写，不要照字面理解。",
        "Do not jump queues, and avoid asking about income, politics, or private life. British humour often relies on self-deprecation and understatement; do not take it literally."
      ),
      negotiation: t(
        "沟通委婉、克制，常以“也许”“我建议”表达不同意见。合同细节会被认真审视，强硬推销通常适得其反。",
        "Communication is indirect and restrained; disagreement may appear as perhaps or I would suggest. Contract details are examined carefully, and hard selling usually backfires."
      ),
      story: {
        title: t("1965 年丘吉尔国葬：礼宾中的例外", "Churchill's funeral, 1965: an exception in protocol"),
        lead: t(
          "1965 年 1 月，英国为温斯顿·丘吉尔举行国葬。伊丽莎白二世女王出席并在圣保罗大教堂参加仪式，这一安排被视为对战时领袖的高度敬意。",
          "In January 1965, the United Kingdom held a state funeral for Winston Churchill. Queen Elizabeth II attended the service at St Paul's Cathedral, an arrangement widely read as a mark of deep respect for the wartime leader."
        ),
        body: [
          t(
            "英国王室与政府在礼宾上有极其细致的分工：从灵柩路线、教堂座次到各国代表的位次，都需要提前协调。例外之所以有意义，正因为它发生在严格的秩序之中。",
            "The British monarchy and government divide ceremonial duties with great precision, from the route of the coffin to seating in the cathedral and the precedence of foreign representatives. An exception gains meaning precisely because it occurs within a strict order."
          ),
          t(
            "对商务场合的启示是：理解规则，才知道何时可以破例；而在没有把握时，遵循既定礼宾永远比自作主张更安全。",
            "The business lesson is that you need to know the rules before you can depart from them. When unsure, following established protocol is always safer than improvising."
          )
        ],
        note: t("史实注记：葬礼时间与女王出席依据公开史料。", "Historical note: date and royal attendance follow public records.")
      }
    },
    {
      id: "US", iso: "USA", region: t("北美洲", "North America"), name: t("美国", "United States"),
      greeting: t(
        "握手有力并保持眼神接触，初次见面就可能使用名字。问候直接、节奏快，寒暄通常简短。",
        "Use a firm handshake and eye contact; first names may be used quickly. Greetings are direct and fast, and small talk is usually brief."
      ),
      card: t(
        "名片双手或单手递出均可，收到后不必长时间阅读。称呼先用 Mr./Ms. + 姓氏，待对方说“Call me…”后再改。",
        "Cards may be given with one or both hands, and there is no need to study them at length. Start with Mr or Ms plus surname, then switch when invited to call me by a first name."
      ),
      taboo: t(
        "商务场合迟到通常需要说明；避免过度劝酒、打听年龄或婚姻状况。政治、宗教与个人隐私不宜作为破冰话题。",
        "Explain if you are late. Avoid pushing alcohol or asking about age or marital status. Politics, religion, and private life are risky icebreakers."
      ),
      negotiation: t(
        "直接、效率优先，重视数据、责任与合同条款。决策往往较快，但法务与合规审查可能比预期更细。",
        "Direct and efficiency-driven, with emphasis on data, accountability, and contract terms. Decisions can be fast, but legal and compliance review may be more detailed than expected."
      ),
      story: {
        title: t("1978 年戴维营：把对手请到同一张桌子", "Camp David, 1978: bringing rivals to one table"),
        lead: t(
          "1978 年 9 月，美国总统卡特邀请埃及总统萨达特与以色列总理贝京到戴维营进行秘密会谈。经过近两周的密集磋商，双方达成《戴维营协议》。",
          "In September 1978, US President Jimmy Carter invited Egyptian President Anwar Sadat and Israeli Prime Minister Menachem Begin to Camp David for secret talks. After nearly two weeks of intensive negotiation, they reached the Camp David Accords."
        ),
        body: [
          t(
            "会谈的成功不仅来自条款设计，也来自场所与节奏的安排：远离媒体、共同用餐、散步与非正式交流，为僵局提供了缓冲。",
            "The breakthrough came not only from the terms but from the setting and rhythm: distance from the media, shared meals, walks, and informal conversation created room to absorb deadlock."
          ),
          t(
            "这则故事常被用来说明“环境也是礼仪”。在商务谈判中，选择什么场合、如何安排休息与用餐，往往会影响对方是否愿意继续谈下去。",
            "The story is often used to show that setting is part of protocol. In business negotiation, the choice of venue and the arrangement of breaks and meals can affect whether the other side is willing to keep talking."
          )
        ],
        note: t("史实注记：会谈时间与结果依据公开史料。", "Historical note: dates and outcome follow public records.")
      }
    },
    {
      id: "BR", iso: "BRA", region: t("南美洲", "South America"), name: t("巴西", "Brazil"),
      greeting: t(
        "握手是基本问候，熟人间常伴随拥抱或拍背。交谈距离较近，热情与肢体语言是关系的一部分。",
        "A handshake is the basic greeting, while hugs or a pat on the back are common among people who know each other. Conversational distance is closer, and warmth and body language are part of the relationship."
      ),
      card: t(
        "名片双手递出，收到后认真看一眼。称呼使用 Sr./Sra. + 姓氏，熟络后可改用名字。",
        "Present cards with both hands and glance at the card you receive. Use Sr or Sra plus surname, then move to first names as the relationship warms."
      ),
      taboo: t(
        "避免用西班牙语假定对方会说西语，巴西的官方语言是葡萄牙语。不要轻易用强硬方式说“不”，也不要拿阿根廷等邻国开玩笑。",
        "Do not assume Spanish will do: the official language is Portuguese. Avoid a hard no and avoid jokes about Argentina or other neighbours."
      ),
      negotiation: t(
        "关系先于交易，面对面沟通与个人信任非常重要。时间安排相对灵活，决策可能较慢，耐心和灵活性比强硬推进更有效。",
        "Relationships come before transactions, and face-to-face contact and personal trust matter greatly. Schedules are flexible and decisions can be slower; patience and flexibility work better than pressure."
      ),
      story: {
        title: t("里奥布兰科男爵：用谈判划定边界", "Baron Rio Branco: drawing borders through negotiation"),
        lead: t(
          "若泽·玛丽亚·达席尔瓦·帕拉纽斯·儒尼奥尔，即里奥布兰科男爵，于 1902 年至 1912 年担任巴西外交部长。他通过谈判与仲裁解决了巴西与邻国的大部分边界争议。",
          "José Maria da Silva Paranhos Júnior, the Baron of Rio Branco, served as Brazil's foreign minister from 1902 to 1912. Through negotiation and arbitration he settled most of Brazil's border disputes with its neighbours."
        ),
        body: [
          t(
            "在当时的南美，边界问题极易引发冲突。里奥布兰科选择以地图、历史文献与双边谈判为依据，而不是以军事对抗解决问题。",
            "At the time, border questions in South America could easily turn into conflict. Rio Branco chose maps, historical documents, and bilateral negotiation rather than military confrontation."
          ),
          t(
            "他被视为巴西外交礼仪与专业主义的象征。这个故事提醒商务人士：真正的谈判能力，往往体现在准备、耐心与对长期关系的重视上。",
            "He is remembered as a symbol of Brazilian diplomacy and professionalism. The story reminds businesspeople that real negotiating skill often shows in preparation, patience, and attention to long-term relationships."
          )
        ],
        note: t("史实注记：任期与边界谈判依据公开史料。", "Historical note: tenure and border negotiations follow public records.")
      }
    }
  ];

  const quiz = [
    {
      id: "cn-tf-card", country: "CN", type: "tf",
      q: t("在中国商务场合，交换名片时应双手递出、双手接过。", "In Chinese business settings, business cards should be offered and received with both hands."),
      options: [t("正确", "True"), t("错误", "False")], answer: [0],
      explain: t("双手递接体现尊重；收到后应先阅读，再妥善收好。", "Using both hands signals respect. Read the card before putting it away.")
    },
    {
      id: "cn-tf-pocket", country: "CN", type: "tf",
      q: t("收到名片后，为节省时间可以直接放进后裤袋。", "To save time, you can put a received business card straight into your back pocket."),
      options: [t("正确", "True"), t("错误", "False")], answer: [1],
      explain: t("把名片塞进后裤袋通常被视为不尊重。应先阅读，再放入名片夹或上衣口袋。", "Putting a card in a back pocket is generally seen as disrespectful. Read it first, then place it in a card holder or jacket pocket.")
    },
    {
      id: "jp-tf-bow", country: "JP", type: "tf",
      q: t("在日本交换名片时，双手递出并微微鞠躬是常见礼仪。", "In Japan, offering a business card with both hands and a slight bow is common etiquette."),
      options: [t("正确", "True"), t("错误", "False")], answer: [0],
      explain: t("名片被视为个人的延伸，双手递接并配合轻微鞠躬是基本做法。", "A card is treated as an extension of the person; both hands and a slight bow are standard.")
    },
    {
      id: "jp-tf-no", country: "JP", type: "tf",
      q: t("在日本商务谈判中，直接说“No”是最礼貌的拒绝方式。", "In Japanese business negotiation, saying a direct no is the most polite way to decline."),
      options: [t("正确", "True"), t("错误", "False")], answer: [1],
      explain: t("日方更常用委婉表达与事前沟通来避免正面冲突，直接拒绝往往让对方面子受损。", "Japanese communication often prefers indirect phrasing and prior alignment to avoid confrontation; a blunt no can cause a loss of face.")
    },
    {
      id: "th-tf-left", country: "TH", type: "tf",
      q: t("在泰国，可以用左手递送名片，因为左手更方便。", "In Thailand, you may hand over a business card with your left hand because it is more convenient."),
      options: [t("正确", "True"), t("错误", "False")], answer: [1],
      explain: t("左手在泰国文化中通常被视为不洁，递物应使用右手，左手可轻托右臂。", "The left hand is traditionally regarded as unclean; offer items with the right hand, supported at the forearm by the left.")
    },
    {
      id: "th-tf-head", country: "TH", type: "tf",
      q: t("在泰国，触摸他人头部是表示友好的礼貌动作。", "In Thailand, touching someone's head is a friendly and polite gesture."),
      options: [t("正确", "True"), t("错误", "False")], answer: [1],
      explain: t("头部被视为身体最神圣的部位，触摸他人头部通常被视为冒犯。", "The head is considered the most sacred part of the body; touching another person's head is usually offensive.")
    },
    {
      id: "ae-tf-right", country: "AE", type: "tf",
      q: t("在阿联酋商务场合，递接物品应使用右手。", "In UAE business settings, items should be given and received with the right hand."),
      options: [t("正确", "True"), t("错误", "False")], answer: [0],
      explain: t("右手用于递接物品和进食；左手通常被视为不洁。", "The right hand is used for giving, receiving, and eating; the left is generally considered unclean.")
    },
    {
      id: "sa-tf-ramadan", country: "SA", type: "tf",
      q: t("斋月期间，在沙特公共场所白天饮食是合适的。", "During Ramadan in Saudi Arabia, eating in public during the day is appropriate."),
      options: [t("正确", "True"), t("错误", "False")], answer: [1],
      explain: t("斋月期间白天在公共场所饮食、吸烟通常不被接受，应尊重当地宗教实践。", "Eating, drinking, or smoking in public during Ramadan is generally not acceptable; respect local religious practice.")
    },
    {
      id: "de-tf-time", country: "DE", type: "tf",
      q: t("德国商务场合通常非常重视守时。", "German business settings generally place strong emphasis on punctuality."),
      options: [t("正确", "True"), t("错误", "False")], answer: [0],
      explain: t("守时是专业性的基本表现；如可能迟到，应尽早说明。", "Punctuality is a basic sign of professionalism; if you may be late, explain as early as possible.")
    },
    {
      id: "fr-tf-handshake", country: "FR", type: "tf",
      q: t("法国商务会面通常以握手开始和结束。", "French business meetings usually begin and end with a handshake."),
      options: [t("正确", "True"), t("错误", "False")], answer: [0],
      explain: t("握手是法国商务场合的标准问候；贴面礼更多用于熟人之间。", "The handshake is standard in French business; la bise is more common among people who know each other well.")
    },
    {
      id: "us-tf-late", country: "US", type: "tf",
      q: t("在美国商务会议中，迟到 15 分钟通常不需要解释。", "In a US business meeting, arriving 15 minutes late usually needs no explanation."),
      options: [t("正确", "True"), t("错误", "False")], answer: [1],
      explain: t("美国商务场合通常重视时间，迟到应提前告知并简要说明。", "US business culture generally values time; if you are late, notify the other party in advance and briefly explain.")
    },
    {
      id: "sg-tf-mrt", country: "SG", type: "tf",
      q: t("在新加坡地铁内饮食或嚼口香糖可能被罚款。", "Eating, drinking, or chewing gum on Singapore's MRT may result in a fine."),
      options: [t("正确", "True"), t("错误", "False")], answer: [0],
      explain: t("新加坡对公共秩序有严格规定，地铁内饮食与嚼口香糖都可能面临处罚。", "Singapore enforces strict public-order rules; eating, drinking, and chewing gum on the MRT can lead to penalties.")
    },
    {
      id: "cn-single-seat", country: "CN", type: "single",
      q: t("中国商务宴请中，主宾通常坐在主人的哪一侧？", "At a Chinese business banquet, on which side of the host does the guest of honour usually sit?"),
      options: [t("右侧", "The right side"), t("左侧", "The left side"), t("门口", "Facing the door"), t("末位", "The far end")], answer: [0],
      explain: t("中式圆桌常以右为尊，主宾通常安排在主人右侧，便于主人照应。", "At a Chinese round table, the right is often the place of honour; the principal guest sits to the host's right.")
    },
    {
      id: "jp-single-nemawashi", country: "JP", type: "single",
      q: t("日本商务中的“根回し”最接近以下哪种做法？", "Which practice is closest to nemawashi in Japanese business?"),
      options: [t("事先与相关方沟通以形成共识", "Talking to relevant parties in advance to build consensus"), t("正式提交报价", "Submitting a formal quotation"), t("交换名片", "Exchanging business cards"), t("鞠躬的角度", "The angle of a bow")], answer: [0],
      explain: t("根回し指在正式会议前与相关方私下沟通，减少阻力并形成共识。", "Nemawashi means informal alignment with relevant parties before a formal meeting, reducing resistance and building consensus.")
    },
    {
      id: "kr-single-drink", country: "KR", type: "single",
      q: t("与韩国长辈或上级一起饮酒时，更得体的做法是？", "When drinking with a Korean elder or senior, which is more appropriate?"),
      options: [t("侧身避开对方再饮", "Turn slightly away before drinking"), t("正面对着对方一饮而尽", "Face them directly and drain the glass"), t("用左手递杯", "Offer the glass with your left hand"), t("让对方先干杯", "Make them empty their glass first")], answer: [0],
      explain: t("在长辈或上级面前饮酒时侧身，是韩国常见的尊重表达；递接酒杯也常用双手。", "Turning slightly away while drinking in front of elders or seniors is a common sign of respect; glasses are often given and received with both hands.")
    },
    {
      id: "in-single-greeting", country: "IN", type: "single",
      q: t("印度商务场合常见的传统问候方式是？", "Which traditional greeting is common in Indian business settings?"),
      options: [t("双手合十并说 Namaste", "Palms together with Namaste"), t("拥抱并拍背", "A hug and a pat on the back"), t("贴面礼", "Cheek kisses"), t("碰拳", "A fist bump")], answer: [0],
      explain: t("Namaste 是印度最常见的传统问候；商务场合握手也很普遍。", "Namaste is the most common traditional greeting; handshakes are also widespread in business.")
    },
    {
      id: "br-single-relation", country: "BR", type: "single",
      q: t("巴西商务文化中，通常更被重视的是？", "What is usually valued more in Brazilian business culture?"),
      options: [t("个人关系与信任", "Personal relationships and trust"), t("严格按分钟推进", "Strict minute-by-minute scheduling"), t("只通过邮件沟通", "Communicating only by email"), t("避免面对面", "Avoiding face-to-face contact")], answer: [0],
      explain: t("巴西商务文化重视关系与面对面沟通，信任建立后合作推进会更顺。", "Brazilian business culture values relationships and face-to-face contact; trust makes cooperation flow more smoothly.")
    },
    {
      id: "gb-single-style", country: "GB", type: "single",
      q: t("英国商务沟通的典型特点更接近？", "Which best describes typical British business communication?"),
      options: [t("委婉、克制、常用轻描淡写", "Indirect, restrained, and prone to understatement"), t("高声强硬、直接打断", "Loud, forceful, and interruptive"), t("完全沉默", "Completely silent"), t("只谈价格", "Focused only on price")], answer: [0],
      explain: t("英式沟通常以委婉语和轻描淡写表达不同意见，需结合语境理解。", "British communication often uses indirect language and understatement to express disagreement; context matters.")
    },
    {
      id: "de-single-title", country: "DE", type: "single",
      q: t("德国商务场合初次见面，更稳妥的称呼方式是？", "On a first meeting in Germany, which form of address is safer?"),
      options: [t("Herr/Frau + 姓氏及头衔", "Herr or Frau plus surname and title"), t("直接叫名字", "First name"), t("用昵称", "A nickname"), t("只叫职务简称", "A shortened job title")], answer: [0],
      explain: t("德国商务场合重视正式称谓，尤其在有博士等头衔时。", "German business settings value formal address, especially when academic titles such as Dr are involved.")
    },
    {
      id: "th-single-wai", country: "TH", type: "single",
      q: t("泰国传统的见面问候礼是？", "What is the traditional Thai greeting?"),
      options: [t("双手合十的 Wai", "The wai, with palms together"), t("握手", "A handshake"), t("拥抱", "A hug"), t("鞠躬", "A bow")], answer: [0],
      explain: t("Wai 是泰国传统问候；商务场合也可能握手，但通常由对方先示意。", "The wai is the traditional Thai greeting; handshakes occur in business, but usually let the other person initiate.")
    },
    {
      id: "ae-single-coffee", country: "AE", type: "single",
      q: t("阿联酋商务会面开始时，常见的做法是？", "What commonly happens at the start of a UAE business meeting?"),
      options: [t("先寒暄并饮用阿拉伯咖啡", "Greetings and Arabic coffee first"), t("直接进入价格谈判", "Go straight to price negotiation"), t("立即签署合同", "Sign the contract immediately"), t("先拍照", "Take photos first")], answer: [0],
      explain: t("海湾地区待客常以咖啡与椰枣开场，寒暄是建立关系的一部分。", "Gulf hospitality often opens with coffee and dates; conversation is part of building the relationship.")
    },
    {
      id: "sa-single-avoid", country: "SA", type: "single",
      q: t("在沙特商务场合，以下哪项应避免？", "Which of the following should be avoided in Saudi business settings?"),
      options: [t("用左手递物", "Giving items with the left hand"), t("用右手握手", "Shaking hands with the right hand"), t("尊重礼拜时间", "Respecting prayer times"), t("穿着保守", "Dressing conservatively")], answer: [0],
      explain: t("左手通常被视为不洁；递接物品、进食应使用右手。", "The left hand is generally considered unclean; use the right hand for giving, receiving, and eating.")
    },
    {
      id: "fr-single-lunch", country: "FR", type: "single",
      q: t("法国商务午餐通常被视为？", "How is a French business lunch usually regarded?"),
      options: [t("建立关系的重要场合", "An important setting for building relationships"), t("五分钟解决的工作餐", "A five-minute working meal"), t("只谈价格的场合", "A setting only for price talks"), t("不允许饮酒的场合", "A setting where alcohol is banned")], answer: [0],
      explain: t("法国商务午餐常被用来建立关系与判断合作默契，不宜匆匆结束。", "The French business lunch is often used to build relationships and assess fit; it should not be rushed.")
    },
    {
      id: "us-single-contract", country: "US", type: "single",
      q: t("美国商务谈判通常更重视？", "What does US business negotiation tend to emphasise?"),
      options: [t("明确的合同条款与责任", "Clear contract terms and accountability"), t("长时间寒暄", "Long warm-up conversation"), t("集体沉默", "Collective silence"), t("严格按职级座次", "Strict rank-based seating")], answer: [0],
      explain: t("美国商务沟通通常直接、效率优先，合同条款与责任划分会被明确讨论。", "US business communication is usually direct and efficiency-oriented; contract terms and responsibilities are discussed explicitly.")
    },
    {
      id: "jp-multi-etiquette", country: "JP", type: "multi",
      q: t("以下哪些是日本商务场合的常见礼仪？", "Which of the following are common Japanese business etiquette practices?"),
      options: [t("双手递接名片", "Exchange cards with both hands"), t("会前与相关方沟通", "Align with relevant parties before a meeting"), t("当面直接拒绝对方", "Reject the other side bluntly in person"), t("守时", "Be punctual")], answer: [0, 1, 3],
      explain: t("双手名片、事前沟通与守时都是常见做法；直接拒绝通常会被避免。", "Both-handed cards, prior alignment, and punctuality are common; blunt rejection is usually avoided.")
    },
    {
      id: "ae-multi-middle-east", country: "AE", type: "multi",
      q: t("在中东商务场合，以下哪些做法更合适？", "Which practices are more appropriate in Middle Eastern business settings?"),
      options: [t("用右手递接物品", "Give and receive with the right hand"), t("尊重每日礼拜时间", "Respect daily prayer times"), t("斋月白天在公共场所饮食", "Eat in public during Ramadan"), t("避免用左手递物", "Avoid giving items with the left hand")], answer: [0, 1, 3],
      explain: t("右手递接、尊重礼拜与避免左手都是基本礼仪；斋月白天公开饮食不合适。", "Right-hand exchange, respect for prayer, and avoiding the left hand are basics; public eating during Ramadan is not appropriate.")
    },
    {
      id: "de-multi-business", country: "DE", type: "multi",
      q: t("以下哪些符合德国商务习惯？", "Which of the following fit German business habits?"),
      options: [t("守时", "Punctuality"), t("使用正式称谓", "Formal forms of address"), t("会前充分准备资料", "Thorough preparation before meetings"), t("用玩笑打破严肃议程", "Using jokes to break a serious agenda")], answer: [0, 1, 2],
      explain: t("德国商务重视守时、正式称谓与准备充分；严肃议程中不宜随意开玩笑。", "German business values punctuality, formal address, and preparation; jokes are not appropriate in a serious agenda.")
    },
    {
      id: "th-multi-etiquette", country: "TH", type: "multi",
      q: t("以下哪些符合泰国礼仪？", "Which of the following fit Thai etiquette?"),
      options: [t("用合十礼问候", "Greet with the wai"), t("不触摸他人头部", "Do not touch someone's head"), t("不用脚指向人或佛像", "Do not point at people or Buddha images with your feet"), t("用左手递名片", "Offer a card with the left hand")], answer: [0, 1, 2],
      explain: t("合十礼、头部禁忌与脚部禁忌都重要；递物应使用右手。", "The wai, head taboo, and foot taboo all matter; offer items with the right hand.")
    },
    {
      id: "br-multi-culture", country: "BR", type: "multi",
      q: t("以下哪些符合巴西商务文化？", "Which of the following fit Brazilian business culture?"),
      options: [t("重视个人关系", "Value personal relationships"), t("熟人见面可能拥抱或拍背", "Hugs or back pats are common among acquaintances"), t("会议通常严格按分钟开始", "Meetings usually start exactly on time"), t("重视面对面沟通", "Value face-to-face communication")], answer: [0, 1, 3],
      explain: t("巴西商务文化重关系、重面对面交流，熟人间的身体问候也较常见；时间安排相对灵活。", "Brazilian business culture values relationships and face-to-face contact, with warmer physical greetings among acquaintances; schedules are relatively flexible.")
    },
    {
      id: "kr-multi-etiquette", country: "KR", type: "multi",
      q: t("以下哪些符合韩国商务礼仪？", "Which of the following fit Korean business etiquette?"),
      options: [t("双手递接名片", "Exchange cards with both hands"), t("称呼时考虑年龄与职级", "Consider age and rank in forms of address"), t("与长辈饮酒时侧身", "Turn slightly away when drinking with elders"), t("初次见面直呼名字", "Use first names on a first meeting")], answer: [0, 1, 2],
      explain: t("双手名片、职级称呼与侧身饮酒都体现尊重；初次见面不宜直呼名字。", "Both-handed cards, rank-aware address, and turning away while drinking show respect; first names are not appropriate on a first meeting.")
    }
  ];

  const articles = [
    {
      id: "cards", no: "01", cat: "basics", minutes: 4,
      title: t("名片与称呼：第一张考卷", "Cards and forms of address: the first test"),
      summary: t("从递接姿势到称谓选择，名片是跨文化商务中最容易被记住的细节。", "From the way you present a card to the name you use, these are the details people remember."),
      tags: [t("基础", "Basics"), t("东亚", "East Asia"), t("欧洲", "Europe")],
      countries: ["CN", "JP", "KR", "DE", "FR"],
      terms: ["business-card", "title", "etiquette"],
      points: [
        t("双手递出、双手接过，文字正面朝向对方。", "Offer and receive with both hands, with the text facing the recipient."),
        t("收到后先阅读，再放入名片夹，不要折叠或写字。", "Read first, then place it in a holder; never fold or write on it."),
        t("初次见面使用“姓 + 职务/先生/女士”，待对方邀请再改口。", "Use surname plus title or honorific until invited to do otherwise.")
      ],
      body: [
        t("在东亚商务场合，名片不只是联系方式，而是个人身份与组织的延伸。递出时让文字正面朝向对方，双手递出并略作停顿；收到后先读一遍，再放入名片夹，而不是随手塞进后裤袋。", "In East Asian business settings a card is more than contact details; it extends the person and the organisation. Present it with the text facing the recipient, using both hands and a brief pause. Read the card before placing it in a holder rather than pocketing it."),
        t("称谓是最容易出错的部分。中文常用“姓 + 职务”，日语常用“姓 + 様/さん”，德语常用 Herr/Frau + 头衔，法语用 Monsieur/Madame。除非对方明确邀请，初次见面不要直呼名字。", "Forms of address are where mistakes happen most. Chinese often uses surname plus job title, Japanese surname plus 様 or さん, German Herr or Frau plus title, and French Monsieur or Madame. Unless invited, avoid first names on a first meeting."),
        t("名片最好准备中英双语或当地语言版本，并确保职位、部门与联系方式准确。不要把名片折叠、写字或当作便签使用，这在日本和韩国尤其失礼。", "Prepare bilingual or local-language cards and make sure titles, departments, and contact details are accurate. Do not fold, write on, or use a card as a note; this is especially rude in Japan and Korea.")
      ]
    },
    {
      id: "greeting", no: "02", cat: "greeting", minutes: 5,
      title: t("问候与身体语言：握手之外", "Greetings and body language: beyond the handshake"),
      summary: t("握手、鞠躬、合十与贴面礼各有边界；距离、眼神和触碰同样在说话。", "Handshakes, bows, wais, and cheek kisses each have boundaries; distance, eye contact, and touch also speak."),
      tags: [t("问候", "Greetings"), t("身体语言", "Body language")],
      countries: ["US", "GB", "FR", "DE", "TH", "IN", "AE", "BR"],
      terms: ["namaste", "wai", "la-bise", "small-talk"],
      points: [
        t("不确定时放慢动作，观察对方是否先伸手或合十。", "When unsure, slow down and see whether the other person offers a hand or a wai first."),
        t("东亚的鞠躬、东南亚的合十与欧美的握手，不宜混用。", "Do not mix bows, wais, and handshakes without reading the setting."),
        t("中东异性握手通常由对方先示意；避免主动伸手。", "In the Middle East, let the other person initiate a cross-gender handshake.")
      ],
      body: [
        t("握手是最通用的商务问候，但力度、时长与眼神接触因文化而异。英美商务场合通常要求有力握手与眼神接触；东亚的握手往往配合轻微鞠躬；法国、德国的握手更简短克制。", "The handshake is the most portable business greeting, but grip, duration, and eye contact vary. Anglo-American settings often expect a firm grip and eye contact; East Asian handshakes may come with a slight bow; French and German handshakes tend to be brief and restrained."),
        t("泰国的 Wai、印度的 Namaste 都是双手合十的问候。是否握手通常由对方先示意更稳妥。中东地区异性之间的握手尤其需要谨慎，避免主动伸手造成尴尬。", "Thailand's wai and India's namaste both use palms together. It is safer to let the other person initiate a handshake. Cross-gender handshakes in the Middle East require particular care; do not offer your hand first."),
        t("身体距离也有文化差异。拉美与中东的交谈距离通常更近，北欧与东亚则相对更远。不要因为对方靠近就后退，也不要贸然拍背、搭肩或触碰头部。", "Conversational distance also varies. Latin American and Middle Eastern conversations often sit closer, while Nordic and East Asian norms may leave more space. Do not retreat abruptly, and avoid backslaps, shoulder grabs, or touching the head without clear signals.")
      ]
    },
    {
      id: "dining", no: "03", cat: "dining", minutes: 5,
      title: t("商务宴请与酒桌：座次、右手与不强劝", "Business dining: seating, the right hand, and no pressure"),
      summary: t("一顿饭可以拉近距离，也可能因为座次、敬酒或饮食禁忌而失分。", "A meal can build closeness, or lose points over seating, toasts, or dietary rules."),
      tags: [t("宴请", "Dining"), t("礼仪", "Etiquette")],
      countries: ["CN", "JP", "KR", "AE", "SA", "FR", "US"],
      terms: ["precedence", "toast", "halal"],
      points: [
        t("中式圆桌常以右为尊，主宾坐在主人右侧。", "At a Chinese round table, the right side is often the place of honour."),
        t("中东用右手进食与递物，确认清真与无酒精需求。", "In the Middle East, eat and pass with the right hand; confirm halal and alcohol-free needs."),
        t("不要强劝酒；不确定时以茶或水代替，并提前说明。", "Do not push alcohol; tea or water is fine when you explain in advance.")
      ],
      body: [
        t("中式宴请的座次、敬酒顺序与点菜方式都传递关系信息。主宾通常坐在主人右侧，主人先举杯，客人回敬。不要强劝酒，也不要在别人未动筷时先吃。", "Chinese banquet seating, toast order, and ordering all carry relational meaning. The principal guest usually sits to the host's right; the host raises the first toast and guests reciprocate. Do not press alcohol, and wait for others to start eating."),
        t("在日本，互相斟酒是常见礼节，但不要给自己倒酒；在韩国，与长辈饮酒时侧身并双手递接酒杯更显尊重。中东商务餐通常不使用酒精，右手进食，并需确认清真与斋月安排。", "In Japan it is common to pour for others rather than yourself; in Korea, turning slightly away and using both hands when drinking with elders shows respect. Middle Eastern business meals are usually alcohol-free, use the right hand, and require confirmation of halal and Ramadan arrangements."),
        t("西式商务餐的座次、餐具顺序与祝酒时机也有规则。法国商务午餐常被视为关系场合，不宜匆匆结束；美国商务午餐则可能更短、更直接。提前询问饮食禁忌，是最稳妥的礼貌。", "Western business meals also have rules for seating, cutlery, and toasts. A French business lunch is often a relationship occasion and should not be rushed; a US business lunch may be shorter and more direct. Asking about dietary needs in advance is the safest courtesy.")
      ]
    },
    {
      id: "negotiation", no: "04", cat: "negotiation", minutes: 6,
      title: t("谈判风格与决策：关系、共识与合同", "Negotiation styles: relationships, consensus, and contracts"),
      summary: t("有人先建立关系再谈条款，有人先看条款再谈关系；节奏本身就是信息。", "Some build the relationship before the terms; others start with the terms. Pace itself is information."),
      tags: [t("谈判", "Negotiation"), t("决策", "Decision-making")],
      countries: ["CN", "JP", "DE", "US", "BR", "AE"],
      terms: ["consensus", "high-context", "low-context", "win-win"],
      points: [
        t("高语境文化更依赖关系、语气与场合；低语境文化更依赖明确文字。", "High-context cultures rely more on relationships, tone, and setting; low-context cultures on explicit text."),
        t("集体决策需要更长的内部流程，不要把沉默当作同意。", "Collective decisions need longer internal processes; do not read silence as agreement."),
        t("合同在不同文化中的角色不同：有人视其为终点，有人视其为关系框架。", "Contracts play different roles: an endpoint in some cultures, a relational framework in others.")
      ],
      body: [
        t("谈判风格常被放在“高语境/低语境”的框架里理解。高语境文化更依赖关系、语境与非语言信号，低语境文化更依赖明确的文字与数据。这不是二元对立，而是沟通重心的差异。", "Negotiation styles are often read through the high-context and low-context lens. High-context cultures lean more on relationships, setting, and non-verbal signals; low-context cultures lean more on explicit text and data. This is not a binary, but a difference in emphasis."),
        t("中国、日本与海湾国家的决策往往涉及多层协商，正式会议可能只是确认。德国与美国则更强调准备、条款与责任划分，分歧会被直接摆上桌面。巴西等关系导向文化更看重面对面信任，时间安排也更具弹性。", "In China, Japan, and the Gulf, decisions often involve multiple layers, and a formal meeting may only confirm what has already been aligned. Germany and the US emphasise preparation, terms, and accountability, with disagreement placed directly on the table. Relationship-driven cultures such as Brazil value face-to-face trust and more flexible schedules."),
        t("无论对方风格如何，最稳妥的做法都是：提前准备事实与底线，保留倾听空间，把“为什么”讲清楚，并在会后用书面方式确认共识。不要用沉默、拖延或模糊承诺去试探对方。", "Whatever the other side's style, the safest approach is to prepare facts and walk-away points, leave room for listening, explain the why, and confirm agreements in writing afterwards. Do not use silence, delay, or vague promises as a test.")
      ]
    },
    {
      id: "time", no: "05", cat: "time", minutes: 4,
      title: t("时间观念与日程：守时也是一种语言", "Time and scheduling: punctuality as a language"),
      summary: t("德国、日本与新加坡把守时当作专业性；另一些文化更看重关系的节奏。", "Germany, Japan, and Singapore treat punctuality as professionalism; other cultures pace relationships differently."),
      tags: [t("时间", "Time"), t("日程", "Scheduling")],
      countries: ["DE", "JP", "SG", "US", "AE", "BR", "IN"],
      terms: ["punctuality", "power-distance"],
      points: [
        t("在德国、日本、新加坡，迟到通常需要提前说明。", "In Germany, Japan, and Singapore, lateness usually needs advance notice."),
        t("中东与拉美的时间安排可能更弹性，但不要因此迟到。", "Schedules in the Gulf and Latin America may be flexible, but do not use that as an excuse to be late."),
        t("斋月、周五礼拜与当地节假日会改变会议节奏，需提前确认。", "Ramadan, Friday prayers, and local holidays change meeting rhythms; confirm in advance.")
      ],
      body: [
        t("守时在不同文化中的含义并不相同。对德国、日本、新加坡与美国商务人士而言，准时到达是专业性与尊重的基本信号；迟到即使只有十分钟，也可能影响对方对你可靠性的判断。", "Punctuality carries different meanings. For German, Japanese, Singaporean, and US businesspeople, arriving on time is a basic signal of professionalism and respect; even ten minutes can affect how reliable you seem."),
        t("在中东、拉美与部分南亚场合，会议开始时间可能更具弹性，寒暄与关系建立会占据更多时间。但这不意味着访客可以迟到；作为客人，准时到达仍然是安全的做法。", "In the Gulf, Latin America, and parts of South Asia, meeting start times may be more flexible and relationship-building may take longer. That does not mean a visitor may arrive late; as a guest, punctuality remains the safe choice."),
        t("安排日程时，要避开周五礼拜、当地节假日与斋月白天的高强度安排。重要会议最好留出缓冲，并在会前用邮件确认时间、地点、参会人与语言安排。", "When scheduling, avoid Friday prayers, local holidays, and intensive daytime meetings during Ramadan. Leave buffers around important meetings and confirm time, venue, attendees, and language by email beforehand.")
      ]
    },
    {
      id: "gifts", no: "06", cat: "gifts", minutes: 5,
      title: t("礼物与禁忌：心意、包装与合规", "Gifts and taboos: intent, wrapping, and compliance"),
      summary: t("礼物在商务场合从来不只是物品；它同时传递关系、等级与边界。", "A business gift is never just an object; it signals relationship, hierarchy, and boundaries."),
      tags: [t("礼物", "Gifts"), t("禁忌", "Taboos")],
      countries: ["CN", "JP", "KR", "IN", "AE", "SA", "DE", "US"],
      terms: ["compliance", "face", "taboo"],
      points: [
        t("中国避开钟、伞、梨等谐音不吉的礼物；日本避开“4”“9”。", "In China avoid clocks, umbrellas, and pears; in Japan avoid four and nine."),
        t("中东避免酒精与含猪制品；印度注意牛与皮革制品。", "In the Middle East avoid alcohol and pork products; in India be mindful of cattle and leather."),
        t("先查公司合规政策，再考虑礼物价值与包装。", "Check company compliance policy before considering value or wrapping.")
      ],
      body: [
        t("在中国，礼物常被视为关系的一部分，但要避开钟、伞、梨等带有不吉利谐音的物品，也要注意“4”的忌讳。日本送礼讲究包装与场合，避开“4”“9”，收到礼物通常不会当面拆开。韩国也有类似的数字忌讳，红笔写名字尤其要避免。", "In China gifts are often part of the relationship, but avoid clocks, umbrellas, pears, and other unlucky homophones, as well as the number four. Japan pays close attention to wrapping and occasion, avoids four and nine, and usually does not open a gift in front of the giver. Korea has similar number taboos, and writing a name in red should be avoided."),
        t("印度教文化中牛是神圣的，皮革制品可能引起不适；许多印度同事是素食者。中东商务场合应避免酒精与含猪制品，礼物也不宜过于昂贵，以免造成压力。", "In Hindu culture cattle are sacred, and leather goods may cause discomfort; many Indian colleagues are vegetarian. In the Middle East avoid alcohol and pork products, and keep gifts modest so they do not create pressure."),
        t("在德国、美国等市场，商务礼物的合规边界更重要。先查公司政策与当地反腐败法规，再考虑礼物价值、包装与赠送时机。最稳妥的礼物往往是与工作相关、价值适度、可公开说明的物品。", "In markets such as Germany and the US, compliance boundaries matter more. Check company policy and local anti-bribery rules before considering value, wrapping, and timing. The safest gifts are usually work-related, modest, and easy to disclose openly.")
      ]
    },
    {
      id: "religion", no: "07", cat: "religion", minutes: 5,
      title: t("宗教、节日与斋月：把时间安排得体", "Religion, holidays, and Ramadan: scheduling with care"),
      summary: t("礼拜时间、斋月与宗教节日会改变一天的节奏；提前确认比临场应对更专业。", "Prayer times, Ramadan, and religious holidays reshape the day; checking in advance is more professional than improvising."),
      tags: [t("宗教", "Religion"), t("节日", "Holidays"), t("斋月", "Ramadan")],
      countries: ["AE", "SA", "IN", "TH", "DE", "FR", "SG"],
      terms: ["halal", "ramadan", "protocol"],
      points: [
        t("斋月白天避免在公共场所饮食、吸烟，会议安排留出开斋时间。", "During Ramadan avoid public eating, drinking, and smoking, and leave room around iftar."),
        t("周五礼拜时段不宜安排高强度会议。", "Avoid intensive meetings around Friday prayers."),
        t("印度注意素食与寺庙脱鞋；泰国尊重佛教与王室。", "In India respect vegetarian norms and temple shoe rules; in Thailand respect Buddhism and the monarchy.")
      ],
      body: [
        t("在海湾国家，每日礼拜时间会短暂打断工作节奏，周五中午尤其明显。斋月期间，白天禁食、办公时间缩短，开斋后的晚餐反而是重要的社交时段。把会议安排在上午，并为开斋留出时间，通常更受欢迎。", "In the Gulf, daily prayer briefly interrupts the working rhythm, especially around midday on Friday. During Ramadan, daytime fasting and shorter office hours mean the iftar dinner becomes an important social occasion. Morning meetings with space left around iftar are usually welcome."),
        t("印度是一个宗教与语言高度多样的国家。商务餐饮要确认素食、清真、不饮酒等需求；进入寺庙通常需要脱鞋，部分场所禁止皮革制品。泰国则以佛教与王室为核心，佛像、寺庙与王室形象都需要尊重。", "India is highly diverse in religion and language. Confirm vegetarian, halal, and alcohol-free needs for business meals; shoes are usually removed in temples, and some sites prohibit leather. Thailand centres on Buddhism and the monarchy, and Buddha images, temples, and royal imagery all require respect."),
        t("在德国、法国、新加坡等多元社会，宗教节日同样会影响同事的日程。最稳妥的做法不是猜测，而是提前询问：“这段时间有没有需要避开的宗教节日或作息安排？”这句话本身就会显得专业。", "In diverse societies such as Germany, France, and Singapore, religious holidays also affect colleagues' schedules. The safest approach is not to guess but to ask in advance: “Are there any religious holidays or scheduling needs I should work around?” The question itself signals professionalism.")
      ]
    },
    {
      id: "communication", no: "08", cat: "communication", minutes: 5,
      title: t("跨文化沟通：委婉语、沉默与书面确认", "Cross-cultural communication: indirectness, silence, and written confirmation"),
      summary: t("“We'll think about it”可能不是同意；沉默也可能不是拒绝。把话说清，也把话听懂。", "“We'll think about it” may not mean yes; silence may not mean no. Speak clearly and listen carefully."),
      tags: [t("沟通", "Communication"), t("邮件", "Email")],
      countries: ["GB", "JP", "CN", "DE", "US", "BR"],
      terms: ["high-context", "low-context", "saving-face", "cultural-intelligence"],
      points: [
        t("高语境沟通更依赖语境与关系，低语境沟通更依赖明确文字。", "High-context communication relies on setting and relationships; low-context relies on explicit text."),
        t("不要把沉默、拖延或“再研究一下”直接理解为同意。", "Do not read silence, delay, or “we'll study it” as agreement."),
        t("会后用邮件复述共识、责任人与时间点，能减少误解。", "After the meeting, restate agreements, owners, and dates by email to reduce misunderstanding.")
      ],
      body: [
        t("英国、日本与中国的商务沟通往往更依赖语境。不同意见可能以“也许”“我们再研究一下”“有一定难度”等形式出现；沉默也可能是思考、保留意见或等待上级。与其猜测，不如用开放式问题确认：“您更担心哪一部分？”", "Business communication in the UK, Japan, and China often relies more on context. Disagreement may appear as perhaps, we'll study it further, or that could be difficult; silence may mean thinking, reservation, or waiting for a senior view. Instead of guessing, ask an open question: “Which part concerns you most?”"),
        t("德国、美国与荷兰等低语境文化更习惯直接表达分歧，并把合同条款写得明确。直接不等于粗鲁；在这些场合，含糊其辞反而可能被视为不专业。关键是根据对方风格调整表达，而不是放弃自己的清晰度。", "Low-context cultures such as Germany, the US, and the Netherlands are more used to direct disagreement and explicit contract terms. Directness is not rudeness; in these settings, vagueness can read as unprofessional. The key is to adapt expression to the other side without giving up clarity."),
        t("跨文化沟通最实用的工具是书面确认。会后用一封简短邮件复述：我们同意了什么、谁负责、什么时候完成、还有哪些未决问题。这既是对高语境沟通的补充，也是对低语境沟通的尊重。", "The most practical tool in cross-cultural communication is written confirmation. After a meeting, send a short email restating what was agreed, who owns what, when it is due, and what remains open. It supplements high-context communication and respects low-context expectations.")
      ]
    }
  ];

  const glossary = [
    { id: "force-majeure", term: "Force Majeure", zh: "不可抗力", cat: "contract",
      def: t("合同中指无法预见、无法避免且无法克服的事件，发生时一方可部分或全部免除履约责任。", "A contract clause covering unforeseeable, unavoidable events that may excuse performance in whole or in part."),
      example: t("疫情导致工厂停工，双方依据不可抗力条款重新协商交付时间。", "A pandemic halted the factory, so the parties renegotiated delivery under the force majeure clause.") },
    { id: "letter-of-intent", term: "Letter of Intent", zh: "意向书", cat: "contract",
      def: t("在正式合同前签署的文件，表达合作意向与主要条件，部分条款可能具有约束力。", "A pre-contract document stating intent and key terms; some provisions may be binding."),
      example: t("双方先签意向书，再进入尽职调查与正式谈判。", "The parties signed an LOI before due diligence and formal negotiation.") },
    { id: "memorandum-of-understanding", term: "Memorandum of Understanding", zh: "谅解备忘录", cat: "contract",
      def: t("记录双方共识与合作框架的文件，通常不如正式合同具有强制力。", "A document recording shared understanding and a cooperation framework, usually less enforceable than a formal contract.") },
    { id: "due-diligence", term: "Due Diligence", zh: "尽职调查", cat: "finance",
      def: t("在投资或合作前，对财务、法律、运营与合规风险进行系统核查。", "A systematic review of financial, legal, operational, and compliance risks before an investment or partnership."),
      example: t("并购前的尽职调查发现了未披露的环保责任。", "Due diligence before the acquisition uncovered an undisclosed environmental liability.") },
    { id: "non-disclosure-agreement", term: "Non-Disclosure Agreement", zh: "保密协议", cat: "contract",
      def: t("约定双方不得披露在合作中获得的机密信息的法律文件，常简称为 NDA。", "A legal agreement preventing disclosure of confidential information exchanged during cooperation; commonly called an NDA.") },
    { id: "incoterms", term: "Incoterms", zh: "国际贸易术语", cat: "finance",
      def: t("国际商会制定的贸易术语，用于划分买卖双方在运输、保险、清关与风险转移上的责任。", "International Chamber of Commerce rules allocating transport, insurance, customs, and risk responsibilities between buyer and seller.") },
    { id: "bill-of-lading", term: "Bill of Lading", zh: "提单", cat: "finance",
      def: t("承运人签发的运输单据，同时具有货物收据、运输合同与物权凭证的作用。", "A carrier-issued document that serves as a receipt, a contract of carriage, and a document of title.") },
    { id: "letter-of-credit", term: "Letter of Credit", zh: "信用证", cat: "finance",
      def: t("银行按买方申请开立的付款承诺，在卖方提交符合约定的单据时付款。", "A bank's payment undertaking, opened at the buyer's request, paid when the seller presents compliant documents.") },
    { id: "arbitration", term: "Arbitration", zh: "仲裁", cat: "contract",
      def: t("由双方选定的仲裁机构或仲裁员对争议作出有约束力裁决的争议解决方式。", "A dispute-resolution process in which chosen arbitrators issue a binding decision.") },
    { id: "jurisdiction", term: "Jurisdiction", zh: "司法管辖权", cat: "contract",
      def: t("法院或仲裁机构审理特定争议的权力；合同通常会约定适用法律与管辖地。", "The authority of a court or tribunal to hear a dispute; contracts usually specify governing law and forum.") },
    { id: "counterparty", term: "Counterparty", zh: "交易对手", cat: "contract",
      def: t("合同或交易中的另一方，通常需要评估其信用与履约能力。", "The other party to a contract or transaction, whose credit and performance capacity are usually assessed.") },
    { id: "stakeholder", term: "Stakeholder", zh: "利益相关方", cat: "meeting",
      def: t("会受项目或决策影响的个人或组织，包括客户、员工、供应商与监管机构。", "Any person or organisation affected by a project or decision, including customers, employees, suppliers, and regulators.") },
    { id: "quorum", term: "Quorum", zh: "法定人数", cat: "meeting",
      def: t("会议作出有效决议所需的最低出席人数。", "The minimum attendance required for a meeting to make valid decisions.") },
    { id: "proxy", term: "Proxy", zh: "代理/委托书", cat: "meeting",
      def: t("授权他人代为出席、投票或签署文件的安排，也可指代理人本身。", "An arrangement authorising someone to attend, vote, or sign on another's behalf, or the authorised person.") },
    { id: "agenda", term: "Agenda", zh: "议程", cat: "meeting",
      def: t("会议讨论事项与顺序的清单，提前发送有助于各方准备。", "A list of items and their order for a meeting; sending it in advance helps preparation.") },
    { id: "minutes", term: "Minutes", zh: "会议纪要", cat: "meeting",
      def: t("对会议讨论、决定与行动项的正式记录，会后确认可减少争议。", "The formal record of discussion, decisions, and action items; confirming them afterwards reduces disputes.") },
    { id: "consensus", term: "Consensus", zh: "共识", cat: "meeting",
      def: t("各方在充分沟通后形成的共同意见，不必然等于全体一致。", "A shared position reached after discussion; it does not necessarily mean unanimous agreement.") },
    { id: "escalation", term: "Escalation", zh: "升级处理", cat: "meeting",
      def: t("当问题在现有层级无法解决时，提交给更高层或专门团队处理。", "Referring an issue to a higher level or specialist team when it cannot be resolved at the current level.") },
    { id: "deliverable", term: "Deliverable", zh: "交付物", cat: "meeting",
      def: t("项目约定需要提交的具体成果，如报告、原型、代码或方案。", "A concrete output agreed for a project, such as a report, prototype, code, or proposal.") },
    { id: "milestone", term: "Milestone", zh: "里程碑", cat: "meeting",
      def: t("项目中的关键节点，用于标记阶段性成果或决策点。", "A key point in a project marking a stage outcome or decision gate.") },
    { id: "kpi", term: "KPI", zh: "关键绩效指标", cat: "meeting",
      def: t("用于衡量目标达成情况的核心量化指标。", "A core quantitative measure used to track progress toward an objective.") },
    { id: "roi", term: "ROI", zh: "投资回报率", cat: "finance",
      def: t("投资收益与投入成本的比率，常用于评估项目或投资的价值。", "The ratio of return to cost, often used to assess the value of a project or investment.") },
    { id: "bottom-line", term: "Bottom Line", zh: "底线/净利润", cat: "finance",
      def: t("字面指净利润，也常引申为最重要的结论或不可让步的底线。", "Literally net profit; also used for the key conclusion or a non-negotiable limit.") },
    { id: "win-win", term: "Win-Win", zh: "双赢", cat: "culture",
      def: t("双方都能获得可接受收益的谈判结果，强调长期合作而非零和。", "A negotiation outcome acceptable to both sides, emphasising long-term cooperation over zero-sum thinking.") },
    { id: "face", term: "Face", zh: "面子", cat: "culture",
      def: t("在东亚文化中，个人与组织的社会尊严与声誉；公开批评会造成“失面子”。", "Social dignity and reputation in East Asian cultures; public criticism can cause a loss of face.") },
    { id: "guanxi", term: "Guanxi", zh: "关系", cat: "culture",
      def: t("中文语境中的个人关系网络，常影响信任、资源与商业机会。", "A Chinese term for personal relationship networks that can shape trust, resources, and opportunities.") },
    { id: "nemawashi", term: "Nemawashi", zh: "根回し（事前沟通）", cat: "culture",
      def: t("日本商务中在正式会议前与相关方私下沟通、铺垫共识的做法。", "The Japanese practice of informal alignment with relevant parties before a formal meeting.") },
    { id: "wasta", term: "Wasta", zh: "关系网络", cat: "culture",
      def: t("阿拉伯语中借助个人关系与中间人推动事务的做法，常译为“关系”或“人情”。", "An Arabic term for using personal connections and intermediaries to get things done.") },
    { id: "jeitinho", term: "Jeitinho", zh: "变通之道", cat: "culture",
      def: t("巴西文化中灵活绕过规则、寻找非正式解决办法的倾向。", "A Brazilian cultural tendency to find a flexible, informal way around obstacles.") },
    { id: "sanuk", term: "Sanuk", zh: "愉快", cat: "culture",
      def: t("泰语中“让事情变得有趣、愉快”的观念，也影响商务沟通的氛围。", "A Thai concept of making things enjoyable, which also shapes the tone of business communication.") },
    { id: "namaste", term: "Namaste", zh: "合十礼", cat: "culture",
      def: t("印度常见的问候语，双手合十于胸前并微微低头，表示敬意。", "A common Indian greeting with palms together at the chest and a slight bow, expressing respect.") },
    { id: "wai", term: "Wai", zh: "泰式合十礼", cat: "culture",
      def: t("泰国传统问候动作，双手合十并低头；手的位置越高，通常表示越尊敬。", "The traditional Thai greeting with palms together and a bow; a higher hand position usually signals greater respect.") },
    { id: "la-bise", term: "La Bise", zh: "贴面礼", cat: "culture",
      def: t("法国及部分欧洲地区熟人之间的贴面问候，商务初次见面通常仍以握手为主。", "A cheek-kiss greeting used among acquaintances in France and parts of Europe; first business meetings usually use a handshake.") },
    { id: "rsvp", term: "RSVP", zh: "请赐复", cat: "culture",
      def: t("法语“Répondez s'il vous plaît”的缩写，用于邀请函中请对方确认是否出席。", "Abbreviation of the French phrase asking recipients to confirm attendance.") },
    { id: "dress-code", term: "Dress Code", zh: "着装规范", cat: "culture",
      def: t("活动或场合对着装的要求；不确定时可选择略正式一档。", "The expected dress standard for an event; when unsure, err slightly more formal.") },
    { id: "business-casual", term: "Business Casual", zh: "商务休闲", cat: "culture",
      def: t("介于正式西装与休闲装之间的着装规范，通常指衬衫、西裤、皮鞋，不打领带。", "A dress standard between formal business attire and casual wear, often shirt, trousers, and leather shoes without a tie.") },
    { id: "black-tie", term: "Black Tie", zh: "黑领结正装", cat: "culture",
      def: t("正式晚宴着装规范，通常指无尾礼服、黑领结与相应配饰。", "A formal evening dress code, typically a tuxedo, black bow tie, and matching accessories.") },
    { id: "punctuality", term: "Punctuality", zh: "守时", cat: "culture",
      def: t("按约定时间到达或完成的行为；在不同文化中对时间弹性的容忍度不同。", "Arriving or delivering at the agreed time; tolerance for flexibility varies across cultures.") },
    { id: "small-talk", term: "Small Talk", zh: "寒暄", cat: "culture",
      def: t("会议前的轻松交谈，用于建立关系；话题选择需避开隐私、政治与宗教。", "Light conversation before a meeting used to build rapport; avoid privacy, politics, and religion.") },
    { id: "cultural-intelligence", term: "Cultural Intelligence", zh: "文化智商", cat: "culture",
      def: t("在跨文化情境中识别、理解并调整自身行为的能力，常缩写为 CQ。", "The ability to recognise, understand, and adapt behaviour across cultural settings; often abbreviated CQ.") },
    { id: "high-context", term: "High-Context", zh: "高语境", cat: "culture",
      def: t("沟通信息更多依赖语境、关系与非语言信号，而非明确文字。", "Communication that relies more on context, relationships, and non-verbal signals than explicit text.") },
    { id: "low-context", term: "Low-Context", zh: "低语境", cat: "culture",
      def: t("沟通信息更多依赖明确、直接的语言与书面表达。", "Communication that relies more on explicit, direct language and written expression.") },
    { id: "power-distance", term: "Power Distance", zh: "权力距离", cat: "culture",
      def: t("社会对权力与等级差异的接受程度，会影响称呼、座次与决策方式。", "The extent to which a society accepts hierarchy, shaping address, seating, and decision-making.") },
    { id: "saving-face", term: "Saving Face", zh: "保全面子", cat: "culture",
      def: t("避免让对方在公开场合难堪，以维护关系与尊严的沟通策略。", "A communication strategy that avoids public embarrassment to preserve relationships and dignity.") },
    { id: "protocol", term: "Protocol", zh: "礼宾程序", cat: "culture",
      def: t("正式场合中的位次、称呼、仪式与流程规则，常用于外交与高规格接待。", "Rules of precedence, address, ceremony, and procedure in formal settings, especially diplomacy.") },
    { id: "precedence", term: "Precedence", zh: "位次", cat: "culture",
      def: t("正式场合中按职务、资历或外交等级排列的先后顺序。", "The order of rank based on position, seniority, or diplomatic status at formal occasions.") },
    { id: "courtesy-call", term: "Courtesy Call", zh: "礼节性拜访", cat: "culture",
      def: t("以表达尊重与建立关系为目的的正式拜访，通常不涉及具体谈判。", "A formal visit intended to show respect and build relationships, usually without substantive negotiation.") },
    { id: "joint-venture", term: "Joint Venture", zh: "合资企业", cat: "finance",
      def: t("由两方或多方共同出资、共担风险并共享收益设立的业务实体。", "A business entity established by two or more parties sharing investment, risk, and returns.") },
    { id: "escrow", term: "Escrow", zh: "第三方托管", cat: "finance",
      def: t("由中立第三方保管资金或文件，待约定条件满足后再释放。", "Funds or documents held by a neutral third party and released when agreed conditions are met.") },
    { id: "indemnity", term: "Indemnity", zh: "赔偿保证", cat: "contract",
      def: t("一方承诺补偿另一方因特定事件遭受的损失或责任。", "A promise by one party to compensate the other for specified losses or liabilities.") },
    { id: "liability", term: "Liability", zh: "责任", cat: "contract",
      def: t("合同或法律下应承担的义务与赔偿风险；合同常设责任上限。", "Obligations and exposure under contract or law; contracts often set a liability cap.") },
    { id: "warranty", term: "Warranty", zh: "保证条款", cat: "contract",
      def: t("一方对产品或服务品质、状态作出的承诺，违反时可触发补救。", "A promise about the quality or condition of goods or services, with remedies if breached.") },
    { id: "confidentiality", term: "Confidentiality", zh: "保密义务", cat: "contract",
      def: t("不得披露或滥用特定信息的合同义务，常与 NDA 配合使用。", "A contractual duty not to disclose or misuse specified information, often paired with an NDA.") },
    { id: "termination", term: "Termination", zh: "终止", cat: "contract",
      def: t("合同按约定条件结束；需区分违约终止与便利终止。", "The ending of a contract under its terms; distinguish termination for breach from termination for convenience.") },
    { id: "liquidated-damages", term: "Liquidated Damages", zh: "违约金", cat: "contract",
      def: t("合同中预先约定的违约赔偿金额，通常需合理且可预估。", "A pre-agreed sum payable for breach, usually required to be reasonable and foreseeable.") },
    { id: "governing-law", term: "Governing Law", zh: "适用法律", cat: "contract",
      def: t("合同解释与争议解决所依据的法律体系。", "The legal system under which a contract is interpreted and disputes are resolved.") }
  ];

  const ui = {
    brand: t("礼仪经纬", "Etiquette Atlas"),
    brandSub: t("国际商务礼仪与文化指南", "International Business Etiquette Guide"),
    skip: t("跳到主要内容", "Skip to main content"),
    langLabel: t("语言", "Language"),
    langZh: t("中", "中"),
    langEn: t("EN", "EN"),
    langBoth: t("中英", "中英"),
    navHome: t("首页", "Home"),
    navAtlas: t("国家百科", "Country atlas"),
    navQuiz: t("情境模拟", "Quiz"),
    navData: t("知识库", "Knowledge"),
    navGlossary: t("术语词典", "Glossary"),
    navAgent: t("Agent", "Agent"),
    heroEyebrow: t("跨文化商务学习工具", "A cross-cultural field guide"),
    heroTitle: t("国际商务礼仪与文化指南", "International Business Etiquette Guide"),
    heroLead: t("把名片、座次、称谓与谈判节奏，变成可以练习的选择题，也可以随时查阅的条目。先选一个国家，或者直接开始一组情境测验。", "Turn cards, seating, forms of address, and negotiation rhythm into questions you can practise — or entries you can look up. Start with a country, or jump straight into a quiz."),
    heroPrimary: t("开始情境模拟", "Start a quiz"),
    heroSecondary: t("打开世界地图", "Open the world map"),
    statCountries: t("国家/地区", "Countries"),
    statQuestions: t("情境题", "Quiz items"),
    statTerms: t("术语", "Terms"),
    statModes: t("语言模式", "Language modes"),
    briefingTitle: t("今日速览", "Country briefing"),
    briefingHint: t("点击换一个国家", "Switch country"),
    briefingSwap: t("换一个", "Next"),
    briefingGreeting: t("问候", "Greeting"),
    briefingTaboo: t("禁忌", "Taboo"),
    briefingNegotiation: t("谈判", "Negotiation"),
    briefingStory: t("读外交小故事", "Read the story"),
    featuresEyebrow: t("核心模块", "Core modules"),
    featuresTitle: t("四种方式，进入同一套文化知识", "Four ways into the same body of knowledge"),
    featuresLead: t("不需要安装，也不需要登录。所有内容都在本地运行，适合个人学习、课堂演示与企业培训原型。", "No install and no sign-in. Everything runs locally, for self-study, classroom demos, and training prototypes."),
    fQuizTitle: t("情境模拟", "Situational quiz"),
    fQuizDesc: t("判断、单选、多选三种题型。作答后选项立即锁定，正确项变绿、错误项变红，并给出解析。", "True/false, single-choice, and multiple-choice. Answers lock instantly, correct options turn green, wrong ones red, with an explanation."),
    fDataTitle: t("知识库", "Knowledge base"),
    fDataDesc: t("按名片、问候、宴请、谈判、时间、礼物、宗教与沟通八个主题翻阅，支持搜索与关联词条。", "Browse eight themes — cards, greetings, dining, negotiation, time, gifts, religion, and communication — with search and linked terms."),
    fAtlasTitle: t("国家百科", "Country atlas"),
    fAtlasDesc: t("在世界地图上点选国家，查看商务禁忌、问候方式、谈判风格，并跳转到该国的外交小故事。", "Click a country on the world map to see taboos, greetings, negotiation style, and a linked diplomatic story."),
    fGlossaryTitle: t("术语词典", "Glossary"),
    fGlossaryDesc: t("悬停术语查看中英释义；在页面中选中任意词，也可以调用全局词典。", "Hover a term for a bilingual definition, or select any word on the page to call the global dictionary."),
    agentBannerTitle: t("让 Agent 帮你出题、查词、列清单", "Let the Agent build a quiz, explain a term, or draft a checklist"),
    agentBannerDesc: t("默认使用本站知识库离线回答；也可以在设置中接入兼容 OpenAI 的在线模型。", "By default it answers offline from this site's knowledge base. You can optionally connect an OpenAI-compatible model in settings."),
    agentBannerCta: t("打开 Agent", "Open the Agent"),
    atlasEyebrow: t("国家/地区百科", "Country atlas"),
    atlasTitle: t("在世界地图上，找到下一场会议", "Find your next meeting on the world map"),
    atlasLead: t("点击带蓝色标记的国家，查看问候、禁忌与谈判风格。小国不易点击时，也可以使用下方的国家列表。", "Click a country marked in blue for greetings, taboos, and negotiation style. Use the list below when a country is too small to click."),
    atlasMapHint: t("地图数据：Natural Earth 1:110m，公共领域", "Map data: Natural Earth 1:110m, public domain"),
    atlasLegendTarget: t("有词条", "Has an entry"),
    atlasLegendOther: t("其他", "Other"),
    atlasListTitle: t("全部国家/地区", "All entries"),
    atlasDetailEmpty: t("从地图或列表中选择一个国家/地区。", "Choose a country or region from the map or the list."),
    atlasGreeting: t("问候方式", "Greeting"),
    atlasCard: t("名片与称呼", "Cards & address"),
    atlasTaboo: t("商务禁忌", "Business taboos"),
    atlasNegotiation: t("谈判风格", "Negotiation style"),
    atlasRegion: t("区域", "Region"),
    atlasStoryBtn: t("搜索外交小故事", "Search the diplomatic story"),
    atlasQuizBtn: t("开始该国测验", "Quiz this country"),
    quizEyebrow: t("情境模拟", "Situational quiz"),
    quizTitle: t("先做选择，再看解析", "Choose first, then read the explanation"),
    quizLead: t("每组题从本地题库随机抽取。判断题与单选题点击后立即判定；多选题需要先勾选，再提交答案。", "Each set is drawn at random from the local bank. True/false and single-choice are judged on click; multiple-choice requires selecting and submitting."),
    quizType: t("题型", "Question type"),
    quizTypeAll: t("全部", "All"),
    quizTypeTf: t("判断题", "True / false"),
    quizTypeSingle: t("单选题", "Single choice"),
    quizTypeMulti: t("多选题", "Multiple choice"),
    quizCountry: t("国家/地区", "Country"),
    quizCountryAll: t("全部", "All"),
    quizAmount: t("题量", "Length"),
    quizAmount5: t("5 题", "5 items"),
    quizAmount10: t("10 题", "10 items"),
    quizAmountAll: t("全部", "All"),
    quizStart: t("开始测验", "Start quiz"),
    quizAgentBtn: t("让 Agent 生成一套", "Ask the Agent"),
    quizQuestion: t("第", "Question"),
    quizOf: t("/", "of"),
    quizSubmit: t("提交答案", "Submit answer"),
    quizNext: t("下一题", "Next question"),
    quizFinish: t("查看结果", "See results"),
    quizCorrect: t("回答正确", "Correct"),
    quizWrong: t("回答错误", "Not quite"),
    quizAnswerIs: t("正确答案：", "Correct answer: "),
    quizExplain: t("解析", "Explanation"),
    quizResultTitle: t("这组题完成了", "Set complete"),
    quizResultLead: t("错题可以在结果页单独重练；也可以换一组题重新开始。", "You can retry only the missed items, or start a fresh set."),
    quizScore: t("得分", "Score"),
    quizRetry: t("再来一组", "New set"),
    quizReviewWrong: t("只练错题", "Retry missed"),
    quizBackSetup: t("返回设置", "Back to setup"),
    quizEmpty: t("当前筛选下没有题目，请换一个题型或国家。", "No questions match this filter. Try another type or country."),
    quizSelectHint: t("多选题：请选择所有正确选项后提交。", "Multiple choice: select all correct options, then submit."),
    quizTrue: t("正确", "True"),
    quizFalse: t("错误", "False"),
    quizNoAnswer: t("未作答", "Not answered"),
    dataEyebrow: t("知识库", "Knowledge base"),
    dataTitle: t("把礼仪放回具体情境", "Put etiquette back into context"),
    dataLead: t("八篇主题笔记，覆盖从第一次见面到合同签署的关键场景。支持按主题筛选和关键词搜索。", "Eight notes covering the journey from first meeting to signed contract, with theme filters and keyword search."),
    dataSearch: t("搜索主题、场景或关键词", "Search topics, situations, or keywords"),
    dataAll: t("全部", "All"),
    dataEmpty: t("没有找到匹配的文章，试试更短的关键词。", "No matching articles. Try a shorter keyword."),
    dataRead: t("阅读全文", "Read"),
    dataMinutes: t("分钟", "min"),
    dataKeyPoints: t("要点", "Key points"),
    dataRelatedCountries: t("相关国家/地区", "Related countries"),
    dataRelatedTerms: t("相关术语", "Related terms"),
    dataPractice: t("练习相关题目", "Practise related questions"),
    dataAskAgent: t("问 Agent", "Ask the Agent"),
    dataBack: t("返回知识库", "Back to knowledge"),
    dataClose: t("关闭", "Close"),
    glossaryEyebrow: t("术语词典", "Glossary"),
    glossaryTitle: t("悬停一个词，读懂一层文化", "Hover a term, read a layer of culture"),
    glossaryLead: t("术语卡与正文中的蓝色词都可以悬停查看释义。选中页面上的普通词汇后，点击浮出的“译”按钮即可调用全局词典。", "Terms on cards and in blue inside the text reveal definitions on hover. Select ordinary text to call the global dictionary with the floating translate button."),
    glossarySearch: t("搜索术语、中文或释义", "Search terms, Chinese, or definitions"),
    glossaryAll: t("全部", "All"),
    glossaryEmpty: t("没有找到匹配的术语，试试更短的关键词。", "No matching terms. Try a shorter keyword."),
    glossaryExample: t("例句", "Example"),
    glossaryHint: t("提示：在正文中选中任意词，也可以翻译。", "Tip: select any word in the body text to translate it."),
    catContract: t("合同", "Contracts"),
    catFinance: t("金融/贸易", "Finance & trade"),
    catMeeting: t("会议", "Meetings"),
    catCulture: t("文化", "Culture"),
    agentEyebrow: t("Agent", "Agent"),
    agentTitle: t("一个懂本站内容的商务礼仪助手", "A business etiquette assistant that knows this site"),
    agentLead: t("它可以在本地知识库中检索、生成测验、解释术语、整理出差清单。无需联网即可使用；接入在线模型后可生成新题。", "It can search the local knowledge base, build quizzes, explain terms, and draft trip checklists. It works offline; connect a model to generate new questions."),
    agentPlaceholder: t("例如：帮我生成一套关于日本的测验", "Try: build me a quiz about Japan"),
    agentSend: t("发送", "Send"),
    agentLocalBadge: t("本地知识库", "Local knowledge base"),
    agentOnlineBadge: t("在线模型", "Online model"),
    agentSettings: t("设置", "Settings"),
    agentWelcome: t("你好，我可以基于本站的 13 个国家/地区、8 篇知识库文章和术语库回答问题。你可以让我出题、解释术语，或者整理一份出差前清单。", "Hello. I can answer from this site's 13 country entries, eight knowledge articles, and glossary. Ask me for a quiz, a term explanation, or a pre-trip checklist."),
    agentQuick1: t("生成一套关于日本的测验", "Build a quiz about Japan"),
    agentQuick2: t("去德国出差前要准备什么？", "What should I prepare for a trip to Germany?"),
    agentQuick3: t("解释 Force Majeure", "Explain Force Majeure"),
    agentQuick4: t("比较中美谈判风格", "Compare Chinese and US negotiation styles"),
    agentLocalNote: t("当前为离线模式，回答来自本站内容。", "Offline mode: answers come from this site."),
    agentThinking: t("正在整理…", "Thinking…"),
    agentError: t("在线模型没有返回结果，已切换为本地知识库回答。", "The online model did not return a result; falling back to the local knowledge base."),
    agentSettingsTitle: t("连接在线模型（可选）", "Connect an online model (optional)"),
    agentSettingsLead: t("填写兼容 OpenAI Chat Completions 的接口。密钥只保存在本机浏览器；正式部署时请使用代理，避免在前端暴露密钥。", "Enter an OpenAI-compatible Chat Completions endpoint. The key is stored only in this browser; for production, use a proxy so the key is not exposed in the frontend."),
    agentEndpoint: t("接口地址", "Endpoint"),
    agentModel: t("模型名称", "Model"),
    agentKey: t("API Key", "API key"),
    agentUseOnline: t("启用在线模型", "Use the online model"),
    agentSave: t("保存设置", "Save"),
    agentClose: t("关闭", "Close"),
    agentClear: t("清空对话", "Clear chat"),
    agentGenQuiz: t("用 AI 生成新题", "Generate new questions with AI"),
    agentGenQuizHint: t("需要先在设置中启用在线模型；未启用时会从本地题库生成。", "Requires the online model; otherwise it builds a set from the local bank."),
    researchEyebrow: t("研究目标", "Research goals"),
    researchTitle: t("这不只是一张知识清单", "More than a list of facts"),
    researchLead: t("页面同时是一个可以继续扩展的教学原型：内容、题库与术语都可以替换成你所在行业自己的版本。", "The page is also an extendable teaching prototype: content, questions, and terms can be replaced with your own industry version."),
    research1Title: t("行业化指南", "Industry-specific guide"),
    research1Desc: t("以金融、物流、制造等行业为切口，整理针对特定场景的跨文化交际指南。当前版本提供通用框架与可替换的数据结构。", "Build cross-cultural guides for finance, logistics, manufacturing, and other sectors. This version provides a general framework and replaceable data structure."),
    research2Title: t("互动式学习", "Interactive learning"),
    research2Desc: t("用情境题、即时反馈与错题重练，观察互动式学习在商务培训中的参与度与记忆效果。", "Use scenario questions, instant feedback, and retry-missed items to study engagement and retention in business training."),
    research3Title: t("可扩展内容", "Extendable content"),
    research3Desc: t("国家、文章、术语与题库集中在 data.js，便于增补新市场、新行业与新语言。", "Countries, articles, terms, and questions live in data.js, making it easy to add markets, industries, and languages."),
    footerNote: t("静态站点 · 无需后端 · 可部署到 GitHub Pages / Cloudflare Pages / Netlify", "Static site · no backend · deployable to GitHub Pages / Cloudflare Pages / Netlify"),
    footerDisclaimer: t("教学内容用于跨文化商务学习，具体礼仪请以当地最新实践与机构政策为准。本站为 AI 辅助生成的静态学习原型。", "For cross-cultural learning. Confirm specific etiquette against current local practice and organisational policy. This is an AI-assisted static learning prototype."),
    footerRights: t("礼仪经纬 · 学习原型", "Etiquette Atlas · learning prototype"),
    toastCopied: t("已复制", "Copied"),
    toastNoData: t("该国家/地区的词条正在整理中。", "The entry for this country or region is still being prepared."),
    toastNoTerm: t("本地词典未收录这个词。可以试试 Agent。", "This word is not in the local dictionary. Try the Agent."),
    toastAskAgent: t("去问 Agent", "Ask the Agent"),
    toastSaved: t("设置已保存", "Settings saved"),
    toastSaveFail: t("浏览器阻止了本地存储，设置仅在本次会话有效。", "The browser blocked local storage; settings apply only to this session."),
    mapTitle: t("世界地图", "World map"),
    quizBadgeTf: t("判断", "T/F"),
    quizBadgeSingle: t("单选", "Single"),
    quizBadgeMulti: t("多选", "Multi"),
    resultPerfect: t("全部答对。可以换一组更难的题，或者去国家百科继续看细节。", "All correct. Try another set, or explore the country atlas."),
    resultGood: t("基础不错。把错题重练一遍，会比重新做整套更有效。", "A solid base. Retrying the missed items will help more than starting over."),
    resultKeep: t("先回到知识库补一下相关主题，再回来重练会更轻松。", "Review the related knowledge articles first, then retry."),
    answerLabel: t("你的选择", "Your selection"),
    correctLabel: t("正确答案", "Correct answer"),
    closeLabel: t("关闭", "Close"),
    menuLabel: t("菜单", "Menu")
  };

  return { countries, quiz, articles, glossary, ui };
})();
