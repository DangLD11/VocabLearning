```javascript
/* =========================================================
   VOCABULARY STREAK
   VIỆT → ANH

   FORMAT TỪ VỰNG:

   {
       vi: "nghĩa tiếng Việt",

       en: [
           "nghĩa tiếng Anh 1",
           "nghĩa tiếng Anh 2",
           "nghĩa tiếng Anh 3"
       ]
   }


   NGƯỜI CHƠI PHẢI NHẬP ĐỦ TẤT CẢ.

   Ví dụ:

       en: [
           "happy",
           "joyful",
           "gleeful"
       ]


   Người chơi phải nhập:

       happy = joyful = gleeful


   Thứ tự không quan trọng:

       gleeful = happy = joyful

   cũng đúng.


   Không phân biệt:

       HAPPY
       Happy
       happy


   đều được xem là giống nhau.
========================================================= */



const vocabulary = [

    {
        vi: "đột nhập",
        en: [
            "break into"
        ]
    },


    {
        vi: "không còn nữa",
        en: [
            "no longer",
            "not anymore"
        ]
    },


    {
        vi: "tài sản",
        en: [
            "possession",
            "property",
            "valuable",
            "asset"
        ]
    },


    {
        vi: "gặp gỡ",
        en: [
            "meet up with"
        ]
    },


    {
        vi: "giữ liên lạc",
        en: [
            "keep in touch"
        ]
    },


    {
        vi: "theo dõi",
        en: [
            "keep an eye on",
            "keep track of"
        ]
    },


    {
        vi: "phần lớn",
        en: [
            "majority",
            "most"
        ]
    },


    {
        vi: "có khả năng xảy ra",
        en: [
            "probable"
        ]
    },


    {
        vi: "có lẽ",
        en: [
            "probably"
        ]
    },


    {
        vi: "làm hài lòng",
        en: [
            "satisfy"
        ]
    },


    {
        vi: "hài lòng",
        en: [
            "satisfied"
        ]
    },


    {
        vi: "sự hài lòng",
        en: [
            "satisfaction"
        ]
    },


    {
        vi: "kẹt xe",
        en: [
            "traffic jam",
            "traffic congestion",
            "gridlocked"
        ]
    },


    {
        vi: "tuyển dụng",
        en: [
            "recruit",
            "take on",
            "employ"
        ]
    },


    {
        vi: "biến mất",
        en: [
            "disappear",
            "vanish",
            "extinct",
            "dwindle"
        ]
    },


    {
        vi: "dừng lại",
        en: [
            "cease",
            "stop",
            "halt"
        ]
    },


    {
        vi: "xâm lược",
        en: [
            "invasion",
            "invade"
        ]
    },


    {
        vi: "chiến lược",
        en: [
            "strategy",
            "scheme",
            "approach"
        ]
    },


    {
        vi: "mục tiêu",
        en: [
            "objective"
        ]
    },


    {
        vi: "khách quan",
        en: [
            "objective"
        ]
    },


    {
        vi: "chủ quan",
        en: [
            "subjective"
        ]
    },


    {
        vi: "trước khi",
        en: [
            "prior to",
            "before",
            "in advance"
        ]
    },


    {
        vi: "chịu trách nhiệm cho",
        en: [
            "in charge of",
            "take responsibility for",
            "responsible for",
            "assume"
        ]
    },


    {
        vi: "khó chịu",
        en: [
            "offensive",
            "unpleasant"
        ]
    },


    {
        vi: "đáng ngạc nhiên",
        en: [
            "incredible"
        ]
    },


    {
        vi: "học thuyết",
        en: [
            "theory"
        ]
    },


    {
        vi: "kỳ lạ",
        en: [
            "bizarre"
        ]
    },


    {
        vi: "chẳng ích gì",
        en: [
            "there is no point in"
        ]
    },


    {
        vi: "nói lầm bầm",
        en: [
            "mumble"
        ]
    },


    {
        vi: "bắt kịp với",
        en: [
            "catch up with",
            "keep up with",
            "keep pace with"
        ]
    },


    {
        vi: "hướng về phía nào",
        en: [
            "make for"
        ]
    },


    {
        vi: "tấp xe vào lề",
        en: [
            "pull in"
        ]
    },


    {
        vi: "xe cán, tông xe",
        en: [
            "run over"
        ]
    },


    {
        vi: "đưa tiễn ai đó",
        en: [
            "see someone off"
        ]
    },


    {
        vi: "khởi hành",
        en: [
            "set out",
            "set off"
        ]
    },


    {
        vi: "đón ai",
        en: [
            "pick someone up"
        ]
    },


    {
        vi: "thả ai xuống",
        en: [
            "drop someone off"
        ]
    },


    {
        vi: "rộng",
        en: [
            "broad"
        ]
    },


    {
        vi: "chiều rộng",
        en: [
            "breadth"
        ]
    },


    {
        vi: "mở rộng",
        en: [
            "broaden"
        ]
    },


    {
        vi: "cư trú",
        en: [
            "inhabit"
        ]
    },


    {
        vi: "cư dân",
        en: [
            "inhabitant"
        ]
    },


    {
        vi: "không thể nhận ra",
        en: [
            "unrecognizable"
        ]
    },


    {
        vi: "nhận ra, công nhận",
        en: [
            "recognize"
        ]
    },


    {
        vi: "sự công nhận",
        en: [
            "recognition"
        ]
    },


    {
        vi: "thế giới",
        en: [
            "world"
        ]
    },


    {
        vi: "toàn thế giới",
        en: [
            "worldwide"
        ]
    },


    {
        vi: "tiết lộ bí mật",
        en: [
            "let the cat out of the bag"
        ]
    },


    {
        vi: "kết thúc công việc",
        en: [
            "call it a day"
        ]
    },


    {
        vi: "kịp lúc",
        en: [
            "in the nick of time"
        ]
    },


    {
        vi: "hào hứng",
        en: [
            "thrill",
            "excitement"
        ]
    },


    {
        vi: "vấn đề nhạy cảm",
        en: [
            "the elephant in the room"
        ]
    },


    {
        vi: "trở ngại",
        en: [
            "hurdle",
            "impediment",
            "obstacle",
            "stumbling block"
        ]
    },


    {
        vi: "thỉnh thoảng",
        en: [
            "once in a blue moon",
            "occasionally",
            "once in a while",
            "from time to time",
            "at times"
        ]
    },


    {
        vi: "đừng than vãn những thứ không thay đổi được",
        en: [
            "don't cry over spilled milk"
        ]
    },


    {
        vi: "rất vui mừng, hạnh phúc",
        en: [
            "over the moon",
            "on cloud nine",
            "very happy"
        ]
    },


    {
        vi: "không khỏe",
        en: [
            "under the weather"
        ]
    },


    {
        vi: "cố gắng, nỗ lực",
        en: [
            "have a go",
            "make an attempt to",
            "in an effort to"
        ]
    },


    {
        vi: "liên quan",
        en: [
            "relevant"
        ]
    },


    {
        vi: "hạn chế",
        en: [
            "curb"
        ]
    },


    {
        vi: "đắt tiền",
        en: [
            "cost an arm and a leg",
            "pay through the nose"
        ]
    },


    {
        vi: "ôn lại kiến thức",
        en: [
            "brush up on",
            "revise"
        ]
    },


    {
        vi: "mất điện",
        en: [
            "a power cut",
            "blackout",
            "a power outage"
        ]
    },


    {
        vi: "bắt đầu làm việc gì",
        en: [
            "get round to"
        ]
    },


    {
        vi: "dừng tham gia hoạt động",
        en: [
            "pull out"
        ]
    },


    {
        vi: "bắt đầu thói quen",
        en: [
            "take to"
        ]
    },


    {
        vi: "chán",
        en: [
            "fed up with",
            "bored with",
            "tired of"
        ]
    },


    {
        vi: "tổ chức tiệc",
        en: [
            "throw a party"
        ]
    },


    {
        vi: "trầm tư suy nghĩ",
        en: [
            "meditative"
        ]
    },


    {
        vi: "vui vẻ",
        en: [
            "gleeful"
        ]
    },


    {
        vi: "nghiêm khắc",
        en: [
            "stern",
            "strict"
        ]
    },


    {
        vi: "tuyệt vọng",
        en: [
            "desperate"
        ]
    },


    {
        vi: "trở nên phổ biến",
        en: [
            "catch on",
            "become popular",
            "in vogue"
        ]
    },


    {
        vi: "đo lường",
        en: [
            "measure",
            "measurement"
        ]
    },


    {
        vi: "dồi dào",
        en: [
            "abundant",
            "plentiful"
        ]
    },


    {
        vi: "đáng kể",
        en: [
            "considerable",
            "significant"
        ]
    },


    {
        vi: "dập lửa",
        en: [
            "put out",
            "extinguish"
        ]
    },


    {
        vi: "ghé thăm",
        en: [
            "drop by",
            "drop in",
            "come over",
            "call on",
            "call by",
            "stop by",
            "pop in",
            "pop by",
            "pay a visit to",
            "pay someone a visit"
        ]
    },


    {
        vi: "phát hành / làm nổi bật",
        en: [
            "bring out"
        ]
    },


    {
        vi: "xuất hiện trong tâm trí ai đó",
        en: [
            "enter someone's mind"
        ]
    },


    {
        vi: "chợt nghĩ",
        en: [
            "cross someone's mind"
        ]
    },


    {
        vi: "quên mất",
        en: [
            "slip someone's mind"
        ]
    },


    {
        vi: "trống rỗng",
        en: [
            "go blank"
        ]
    },


    {
        vi: "hy vọng điều gì",
        en: [
            "in the hope of"
        ]
    },


    {
        vi: "thích cái này hơn cái kia",
        en: [
            "prefer doing to doing"
        ]
    },


    {
        vi: "chú ý đến",
        en: [
            "take notice of"
        ]
    },


    {
        vi: "bị đuổi học",
        en: [
            "expelled from"
        ]
    },


    {
        vi: "theo như",
        en: [
            "as far as"
        ]
    },


    {
        vi: "miễn là",
        en: [
            "as long as"
        ]
    },


    {
        vi: "bùng nổ",
        en: [
            "outbreak"
        ]
    },


    {
        vi: "vui vẻ",
        en: [
            "light-hearted"
        ]
    },


    {
        vi: "hiền hậu",
        en: [
            "warm-hearted"
        ]
    },


    {
        vi: "hào phóng",
        en: [
            "big-hearted"
        ]
    },


    {
        vi: "hết lòng",
        en: [
            "whole-hearted"
        ]
    },


    {
        vi: "chắc hẳn đã",
        en: [
            "must have"
        ]
    },


    {
        vi: "lẽ ra nên",
        en: [
            "should have"
        ]
    },


    {
        vi: "có thể đã",
        en: [
            "can have",
            "could have"
        ]
    },


    {
        vi: "xem là điều hiển nhiên",
        en: [
            "take something for granted"
        ]
    },


    {
        vi: "truyền cảm hứng",
        en: [
            "thought-provoking"
        ]
    },


    {
        vi: "quy định, luật lệ",
        en: [
            "regulation",
            "rule"
        ]
    },


    {
        vi: "cãi lại / trả treo",
        en: [
            "talk back to"
        ]
    },


    {
        vi: "tranh cãi",
        en: [
            "fall out",
            "dispute",
            "row",
            "quarrel",
            "argument",
            "squabble"
        ]
    },


    {
        vi: "hồi tưởng",
        en: [
            "think back on"
        ]
    },


    {
        vi: "dựa vào",
        en: [
            "fall back on"
        ]
    },


    {
        vi: "biểu diễn",
        en: [
            "put on a play"
        ]
    },


    {
        vi: "trả thù",
        en: [
            "get back at"
        ]
    },


    {
        vi: "nịnh bợ",
        en: [
            "make up to"
        ]
    },


    {
        vi: "mắc bệnh",
        en: [
            "go down with",
            "come down with",
            "contract disease"
        ]
    },


    {
        vi: "nghĩ ra",
        en: [
            "come up with"
        ]
    },


    {
        vi: "ngã",
        en: [
            "fall over"
        ]
    },


    {
        vi: "lùi",
        en: [
            "fall back"
        ]
    },


    {
        vi: "rơi",
        en: [
            "fall off"
        ]
    },


    {
        vi: "đối mặt với / gặp phải khó khăn",
        en: [
            "come up against"
        ]
    },


    {
        vi: "dự định",
        en: [
            "be about to"
        ]
    },


    {
        vi: "thường xuyên",
        en: [
            "on a regular basis"
        ]
    },


    {
        vi: "bảo mật",
        en: [
            "confidential"
        ]
    },


    {
        vi: "phá hủy",
        en: [
            "tear down",
            "burn down",
            "pull down"
        ]
    },


    {
        vi: "thờ ơ",
        en: [
            "indifferent to"
        ]
    },


    {
        vi: "người tị nạn",
        en: [
            "refugee"
        ]
    },


    {
        vi: "có thói quen",
        en: [
            "in the habit of"
        ]
    },


    {
        vi: "dù thế nào đi chăng nữa",
        en: [
            "no matter how",
            "however"
        ]
    },


    {
        vi: "lẫn nhau",
        en: [
            "each other",
            "one another"
        ]
    },


    {
        vi: "món hời / trả giá",
        en: [
            "bargain"
        ]
    },


    {
        vi: "tiết lộ",
        en: [
            "reveal"
        ]
    },


    {
        vi: "hoảng loạn",
        en: [
            "in panic"
        ]
    },


    {
        vi: "làm cho thông gió",
        en: [
            "ventilate"
        ]
    },


    {
        vi: "thoáng mát",
        en: [
            "breezy"
        ]
    },


    {
        vi: "có gió lùa",
        en: [
            "draughty"
        ]
    },


    {
        vi: "thực tiễn",
        en: [
            "utilitarian",
            "practical",
            "no-frills"
        ]
    },


    {
        vi: "lắp ráp",
        en: [
            "assemble"
        ]
    },


    {
        vi: "lộn xộn",
        en: [
            "chaos",
            "clutter",
            "mess"
        ]
    },


    {
        vi: "rõ ràng",
        en: [
            "discernible"
        ]
    },


    {
        vi: "tăng lên",
        en: [
            "augment"
        ]
    },


    {
        vi: "làm trầm trọng",
        en: [
            "exacerbate"
        ]
    },


    {
        vi: "không thể tránh khỏi / tất yếu",
        en: [
            "inevitable"
        ]
    },


    {
        vi: "sự cạn kiệt",
        en: [
            "depletion"
        ]
    },


    {
        vi: "sự tàn phá",
        en: [
            "devastation"
        ]
    },


    {
        vi: "sự chìm xuống",
        en: [
            "sinking"
        ]
    },


    {
        vi: "nỗ lực",
        en: [
            "in a bid to",
            "pull someone's socks up"
        ]
    },


    {
        vi: "chiến dịch",
        en: [
            "campaign"
        ]
    },


    {
        vi: "tưởng tượng",
        en: [
            "envision"
        ]
    },


    {
        vi: "đầu tư",
        en: [
            "invest in"
        ]
    },


    {
        vi: "có lợi cho ai",
        en: [
            "do someone good"
        ]
    },


    {
        vi: "đi đến kết luận",
        en: [
            "come to a conclusion"
        ]
    },


    {
        vi: "trình bày sự việc",
        en: [
            "give an account of"
        ]
    },


    {
        vi: "làm cho ai hiểu",
        en: [
            "drive it home to someone"
        ]
    },


    {
        vi: "tức giận",
        en: [
            "get hot under the collar",
            "become furious"
        ]
    },


    {
        vi: "rõ ràng",
        en: [
            "obvious",
            "apparent",
            "clear"
        ]
    },


    {
        vi: "vượt ngoài tầm kiểm soát",
        en: [
            "run riot"
        ]
    },


    {
        vi: "truyền tải",
        en: [
            "convey"
        ]
    },


    {
        vi: "thu nhỏ, co lại",
        en: [
            "shrink"
        ]
    },


    {
        vi: "sa thải",
        en: [
            "dismiss",
            "sack",
            "lay off"
        ]
    },


    {
        vi: "người kiêu ngạo",
        en: [
            "snob"
        ]
    },


    {
        vi: "gây ra",
        en: [
            "bring on",
            "cause",
            "result in",
            "lead to",
            "trigger"
        ]
    },


    {
        vi: "bận rộn",
        en: [
            "up to someone's ears",
            "up to someone's neck",
            "overwhelming",
            "swamped with"
        ]
    },


    {
        vi: "mục đích",
        en: [
            "with a view to",
            "with an eye to"
        ]
    },


    {
        vi: "phạm tội",
        en: [
            "commit a crime"
        ]
    },


    {
        vi: "chọc ai đó",
        en: [
            "pull someone's leg"
        ]
    },


    {
        vi: "xem xét, cân nhắc",
        en: [
            "take into account",
            "take into consideration"
        ]
    },


    {
        vi: "vô tình gặp",
        en: [
            "run into",
            "come across"
        ]
    },


    {
        vi: "bắt buộc",
        en: [
            "oblige",
            "obligation",
            "obligatory",
            "compulsory",
            "mandatory"
        ]
    },


    {
        vi: "động lực",
        en: [
            "incentive",
            "motivation"
        ]
    },


    {
        vi: "đối thủ",
        en: [
            "opponent",
            "rival"
        ]
    },


    {
        vi: "xóa bỏ, loại bỏ",
        en: [
            "eliminate",
            "eradicate",
            "get rid of",
            "do away with",
            "phase out"
        ]
    },


    {
        vi: "ủy ban",
        en: [
            "committee"
        ]
    },


    {
        vi: "cam kết",
        en: [
            "pledge"
        ]
    },


    {
        vi: "người quan trọng",
        en: [
            "the apple of someone's eye"
        ]
    },


    {
        vi: "thay mặt cho",
        en: [
            "on behalf of"
        ]
    },


    {
        vi: "học bù",
        en: [
            "catch up on"
        ]
    },


    {
        vi: "cân nhắc kỹ",
        en: [
            "contemplate"
        ]
    },


    {
        vi: "phân biệt",
        en: [
            "differentiate"
        ]
    },


    {
        vi: "khác",
        en: [
            "differ"
        ]
    },


    {
        vi: "cuộc đình công",
        en: [
            "strike"
        ]
    },


    {
        vi: "sự va chạm",
        en: [
            "collision"
        ]
    },


    {
        vi: "hối lộ",
        en: [
            "bribery"
        ]
    },


    {
        vi: "kĩ lưỡng, phức tạp",
        en: [
            "elaborate",
            "thorough"
        ]
    },


    {
        vi: "ban đầu",
        en: [
            "initial"
        ]
    },


    {
        vi: "người phạm lỗi",
        en: [
            "offender"
        ]
    },


    {
        vi: "khai báo",
        en: [
            "make a statement"
        ]
    },


    {
        vi: "bắt cóc",
        en: [
            "kidnap"
        ]
    },


    {
        vi: "tống tiền",
        en: [
            "blackmail"
        ]
    },


    {
        vi: "thiếu hụt",
        en: [
            "deficiency"
        ]
    },


    {
        vi: "bắt giữ",
        en: [
            "arrest"
        ]
    },


    {
        vi: "tuyên án",
        en: [
            "sentence"
        ]
    },


    {
        vi: "bất kể",
        en: [
            "regardless of",
            "irrespective of"
        ]
    },


    {
        vi: "che đậy",
        en: [
            "disguise"
        ]
    },


    {
        vi: "bạn đồng hành",
        en: [
            "companion"
        ]
    },


    {
        vi: "nghiêm trọng",
        en: [
            "crippling"
        ]
    },


    {
        vi: "lừa kêu",
        en: [
            "braying"
        ]
    },


    {
        vi: "cừu kêu",
        en: [
            "bleating"
        ]
    },


    {
        vi: "đàn cá",
        en: [
            "shoals of fish",
            "schools of fish"
        ]
    },


    {
        vi: "đàn kiến / ong",
        en: [
            "swarms of ants",
            "swarms of bees"
        ]
    },


    {
        vi: "đàn vịt / chim",
        en: [
            "flocks of ducks",
            "flocks of birds"
        ]
    },


    {
        vi: "đàn gia súc",
        en: [
            "herds of cattle"
        ]
    },


    {
        vi: "đống quần áo",
        en: [
            "jumble of clothes"
        ]
    },


    {
        vi: "tiền chuộc",
        en: [
            "ransom"
        ]
    },


    {
        vi: "ngỗ ngược",
        en: [
            "unruly"
        ]
    },


    {
        vi: "đám đông",
        en: [
            "mob"
        ]
    },


    {
        vi: "cản trở",
        en: [
            "hinder",
            "deter"
        ]
    },


    {
        vi: "cần thiết",
        en: [
            "indispensable"
        ]
    },


    {
        vi: "rút lui",
        en: [
            "retreat"
        ]
    },


    {
        vi: "đầu hàng",
        en: [
            "surrender"
        ]
    },


    {
        vi: "thành công",
        en: [
            "come up trumps",
            "bring off",
            "home and dry",
            "succeed",
            "bear fruit"
        ]
    },


    {
        vi: "hoài nghi",
        en: [
            "skeptical"
        ]
    },


    {
        vi: "lo lắng",
        en: [
            "dismay",
            "consternation"
        ]
    },


    {
        vi: "hợp lý",
        en: [
            "plausible",
            "reasonable"
        ]
    },


    {
        vi: "dễ bị tổn thương",
        en: [
            "susceptible",
            "vulnerable"
        ]
    },


    {
        vi: "khéo léo",
        en: [
            "tactful",
            "diplomatic"
        ]
    },


    {
        vi: "lỗi thời",
        en: [
            "out of practice"
        ]
    },


    {
        vi: "sự tưởng tượng",
        en: [
            "imagination"
        ]
    },


    {
        vi: "linh hoạt",
        en: [
            "versatile",
            "flexible"
        ]
    },


    {
        vi: "tiêu hết tiền",
        en: [
            "get through"
        ]
    },


    {
        vi: "giúp ai vượt qua khó khăn",
        en: [
            "help someone out"
        ]
    },


    {
        vi: "thuế hải quan",
        en: [
            "customs duty"
        ]
    },


    {
        vi: "viễn cảnh",
        en: [
            "prospect"
        ]
    },


    {
        vi: "đổi lượt",
        en: [
            "take turns"
        ]
    },


    {
        vi: "hít vào",
        en: [
            "inhale"
        ]
    },


    {
        vi: "thở ra",
        en: [
            "exhale"
        ]
    },


    {
        vi: "làm ai đó tỉnh lại",
        en: [
            "bring someone to"
        ]
    },


    {
        vi: "bất tỉnh",
        en: [
            "pass out",
            "faint",
            "unconscious"
        ]
    },


    {
        vi: "hội ý",
        en: [
            "confer"
        ]
    },


    {
        vi: "xuất viện",
        en: [
            "discharged from"
        ]
    },


    {
        vi: "người nhập cư",
        en: [
            "immigrant"
        ]
    },


    {
        vi: "sự nhập cư",
        en: [
            "immigration"
        ]
    },


    {
        vi: "hiểu lầm",
        en: [
            "get one's wires crossed"
        ]
    },


    {
        vi: "nuốt lời",
        en: [
            "go back on someone's word"
        ]
    },


    {
        vi: "hoàn toàn không",
        en: [
            "by no means"
        ]
    },


    {
        vi: "chắc chắn",
        en: [
            "by all means"
        ]
    },


    {
        vi: "dao động",
        en: [
            "fluctuate"
        ]
    },


    {
        vi: "hóa ra",
        en: [
            "turn out"
        ]
    },


    {
        vi: "là do",
        en: [
            "put down to"
        ]
    },


    {
        vi: "hứng chịu / nhận lấy lời chỉ trích",
        en: [
            "come in for"
        ]
    },


    {
        vi: "đề xuất",
        en: [
            "put forward"
        ]
    },


    {
        vi: "tôi đồng ý",
        en: [
            "you can say that again",
            "i'll say"
        ]
    },


    {
        vi: "thay thế cho ai",
        en: [
            "stand in for"
        ]
    },


    {
        vi: "nhìn thoáng qua",
        en: [
            "glimpse of"
        ]
    },


    {
        vi: "xem xét kĩ",
        en: [
            "vet"
        ]
    },


    {
        vi: "thích nghi",
        en: [
            "adapt to"
        ]
    },


    {
        vi: "thừa kế",
        en: [
            "come into",
            "inherit"
        ]
    },


    {
        vi: "người thừa kế",
        en: [
            "heir"
        ]
    },


    {
        vi: "gọi điện cho ai",
        en: [
            "call up someone"
        ]
    },


    {
        vi: "lọc, khử",
        en: [
            "purge"
        ]
    },


    {
        vi: "tuổi thọ",
        en: [
            "life expectancy"
        ]
    },


    {
        vi: "đảm nhận vị trí ai đó",
        en: [
            "step into someone's shoes"
        ]
    },


    {
        vi: "một người quan trọng",
        en: [
            "a fat cat"
        ]
    },


    {
        vi: "thuộc về trí tuệ",
        en: [
            "intellectual"
        ]
    },


    {
        vi: "bị lỗi",
        en: [
            "defective",
            "faulty"
        ]
    },


    {
        vi: "phong trào",
        en: [
            "movement"
        ]
    },


    {
        vi: "phát triển hơn",
        en: [
            "outgrow"
        ]
    },


    {
        vi: "vượt trội",
        en: [
            "outclassed"
        ]
    },


    {
        vi: "đông",
        en: [
            "outnumbered"
        ]
    },


    {
        vi: "nhanh hơn",
        en: [
            "outraced"
        ]
    },


    {
        vi: "lấy lại phong độ, khẳng định năng lực",
        en: [
            "come into someone's own"
        ]
    },


    {
        vi: "trọng tài",
        en: [
            "umpire"
        ]
    },


    {
        vi: "người kể lại",
        en: [
            "narrator"
        ]
    },


    {
        vi: "ăn ngấu nghiến",
        en: [
            "bolt"
        ]
    },


    {
        vi: "đói cồn cào",
        en: [
            "hunger pangs"
        ]
    },


    {
        vi: "đặc quyền",
        en: [
            "privilege"
        ]
    },


    {
        vi: "khét tiếng",
        en: [
            "notorious"
        ]
    },


    {
        vi: "nổi tiếng",
        en: [
            "noted"
        ]
    },


    {
        vi: "thì thầm",
        en: [
            "put a bug in someone's ear"
        ]
    },


    {
        vi: "đe dọa",
        en: [
            "threaten"
        ]
    },


    {
        vi: "tò mò",
        en: [
            "inquisitive"
        ]
    }

];



/* =========================================================
   GAME VARIABLES
========================================================= */


let questionPool = [];

let currentQuestion = null;

let streak = 0;

let correct = 0;

let gameRunning = true;


/*
    Danh sách từ sai.

    Lưu vào localStorage để khi refresh trang
    vẫn còn danh sách từ sai.
*/

let wrongWords =
    JSON.parse(
        localStorage.getItem(
            "vocabWrongWords"
        )
    ) || [];



/* =========================================================
   DOM
========================================================= */


const promptElement =
    document.getElementById(
        "prompt"
    );


const answerInput =
    document.getElementById(
        "answer"
    );


const feedbackElement =
    document.getElementById(
        "feedback"
    );


const streakElement =
    document.getElementById(
        "streak"
    );


const correctElement =
    document.getElementById(
        "correct"
    );


const remainingElement =
    document.getElementById(
        "remaining"
    );


const totalElement =
    document.getElementById(
        "total"
    );


const wrongCountElement =
    document.getElementById(
        "wrongCount"
    );


const gameCard =
    document.getElementById(
        "gameCard"
    );


const gameOver =
    document.getElementById(
        "gameOver"
    );


const wrongPanel =
    document.getElementById(
        "wrongPanel"
    );


const wrongList =
    document.getElementById(
        "wrongList"
    );



/* =========================================================
   NORMALIZE
========================================================= */


/*
    Chuẩn hóa một đáp án.

    Ví dụ:

    "  HAPPY  "
        ↓
    "happy"


    Không bỏ dấu tiếng Anh,
    chỉ xử lý khoảng trắng và chữ hoa/thường.
*/


function normalize(text) {

    return String(text)

        .toLowerCase()

        .trim()

        .replace(
            /\s+/g,
            " "
        );

}



/* =========================================================
   TÁCH ĐÁP ÁN
========================================================= */


/*
    Người chơi nhập:

        happy = joyful = gleeful

    Hàm này biến thành:

        [
            "happy",
            "joyful",
            "gleeful"
        ]
*/


function parseAnswers(text) {

    return text

        .split("=")

        .map(
            item =>
                normalize(item)
        )

        .filter(
            item =>
                item.length > 0
        );

}



/* =========================================================
   SORT / COMPARE
========================================================= */


/*
    Sắp xếp để không quan trọng thứ tự.

    Ví dụ:

        happy = joyful = gleeful

    và:

        gleeful = happy = joyful

    đều trở thành cùng một mảng sau khi sort.
*/


function sortedAnswers(answers) {

    return [...answers].sort();

}



/*
    So sánh hai danh sách đáp án.
*/


function answersAreEqual(
    userAnswers,
    correctAnswers
) {

    const user =
        sortedAnswers(
            userAnswers
        );


    const correct =
        sortedAnswers(
            correctAnswers
        );


    /*
        Phải bằng số lượng.
    */

    if (
        user.length !==
        correct.length
    ) {

        return false;

    }


    /*
        Phải giống từng phần tử.
    */

    for (
        let i = 0;
        i < user.length;
        i++
    ) {

        if (
            user[i] !==
            correct[i]
        ) {

            return false;

        }

    }


    return true;

}



/* =========================================================
   SHUFFLE
========================================================= */


function shuffle(array) {

    const result =
        [...array];


    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            result[i],
            result[j]
        ] =
        [
            result[j],
            result[i]
        ];

    }


    return result;

}



/* =========================================================
   UPDATE STATS
========================================================= */


function updateStats() {

    streakElement.textContent =
        streak;


    correctElement.textContent =
        correct;


    remainingElement.textContent =
        questionPool.length +
        (
            currentQuestion
                ? 1
                : 0
        );


    totalElement.textContent =
        vocabulary.length;


    wrongCountElement.textContent =
        wrongWords.length;

}



/* =========================================================
   SAVE WRONG WORDS
========================================================= */


function saveWrongWords() {

    localStorage.setItem(

        "vocabWrongWords",

        JSON.stringify(
            wrongWords
        )

    );

}



/* =========================================================
   ADD WRONG WORD
========================================================= */


function addWrongWord(
    question,
    userAnswer
) {

    /*
        Kiểm tra từ này đã nằm
        trong danh sách sai chưa.
    */

    const existing =
        wrongWords.find(
            item =>
                item.vi ===
                question.vi
        );


    /*
        Nếu đã có thì không tạo
        bản sao mới.
    */

    if (existing) {

        existing.attempts =
            existing.attempts || [];


        if (
            !existing.attempts.includes(
                userAnswer || "(trống)"
            )
        ) {

            existing.attempts.push(
                userAnswer || "(trống)"
            );

        }

    }

    else {

        wrongWords.push({

            vi: question.vi,

            en: [...question.en],

            attempts: [

                userAnswer || "(trống)"

            ]

        });

    }


    saveWrongWords();

    renderWrongWords();

    updateStats();

}



/* =========================================================
   NEXT QUESTION
========================================================= */


function nextQuestion() {

    if (!gameRunning) {

        return;

    }


    /*
        Nếu hết pool:

        Trộn lại toàn bộ danh sách.

        Vì vậy game không bao giờ
        tự kết thúc chỉ vì hết từ.
    */

    if (
        questionPool.length === 0
    ) {

        questionPool =
            shuffle(
                vocabulary
            );

    }


    /*
        Lấy một từ.
    */

    currentQuestion =
        questionPool.pop();


    /*
        Hiện tiếng Việt.
    */

    promptElement.textContent =
        currentQuestion.vi;


    /*
        Xóa ô nhập.
    */

    answerInput.value = "";


    feedbackElement.textContent =
        "";


    feedbackElement.className =
        "feedback";


    answerInput.focus();


    updateStats();

}



/* =========================================================
   CHECK ANSWER
========================================================= */


function checkAnswer() {

    if (
        !gameRunning ||
        !currentQuestion
    ) {

        return;

    }


    const rawAnswer =
        answerInput.value;


    /*
        Chuyển đáp án người chơi
        thành mảng.
    */

    const userAnswers =
        parseAnswers(
            rawAnswer
        );


    /*
        Chuyển đáp án đúng
        thành mảng chuẩn hóa.
    */

    const correctAnswers =
        currentQuestion.en.map(
            answer =>
                normalize(answer)
        );


    /*
        Kiểm tra.
    */

    const isCorrect =
        answersAreEqual(
            userAnswers,
            correctAnswers
        );



    /* =====================================================
       ĐÚNG
    ===================================================== */

    if (isCorrect) {

        streak++;

        correct++;


        feedbackElement.textContent =
            "✓ Chính xác!";


        feedbackElement.className =
            "feedback ok";


        updateStats();


        /*
            Đợi một chút để người chơi
            thấy thông báo đúng.
        */

        setTimeout(
            () => {

                nextQuestion();

            },
            250
        );


        return;

    }



    /* =====================================================
       SAI
    ===================================================== */


    addWrongWord(

        currentQuestion,

        rawAnswer

    );


    gameRunning = false;


    gameCard.classList.add(
        "hidden"
    );


    gameOver.classList.remove(
        "hidden"
    );


    document.getElementById(
        "finalStreak"
    ).textContent =
        streak;



    /*
        Hiển thị đáp án đúng.

        Dùng "=" thay vì dấu phẩy
        để đúng với format người chơi
        cần nhập.
    */

    document.getElementById(
        "overText"
    ).innerHTML =

        `
        <strong>Đáp án đúng:</strong>
        <br>
        ${escapeHTML(
            currentQuestion.en.join(
                " = "
            )
        )}

        <br><br>

        <strong>Bạn đã nhập:</strong>
        <br>
        ${escapeHTML(
            rawAnswer ||
            "(trống)"
        )}
        `;


    updateStats();

}



/* =========================================================
   ESCAPE HTML
========================================================= */


function escapeHTML(text) {

    return String(text)

        .replace(
            /[&<>"']/g,
            character => {

                const map = {

                    "&": "&amp;",

                    "<": "&lt;",

                    ">": "&gt;",

                    '"': "&quot;",

                    "'": "&#039;"

                };


                return map[
                    character
                ];

            }
        );

}



/* =========================================================
   RENDER WRONG WORDS
========================================================= */


function renderWrongWords() {

    if (
        wrongWords.length === 0
    ) {

        wrongList.innerHTML = `

            <p style="
                color:#8490a0;
            ">
                Chưa có từ sai.
            </p>

        `;

        return;

    }


    wrongList.innerHTML =

        wrongWords
            .map(
                (item, index) => {

                    return `

                    <div class="wrong-item">

                        <div class="wrong-number">
                            #${index + 1}
                        </div>

                        <div class="wrong-vi">
                            ${escapeHTML(
                                item.vi
                            )}
                        </div>

                        <div class="wrong-en">

                            Đáp án:

                            <strong>
                                ${escapeHTML(
                                    item.en.join(
                                        " = "
                                    )
                                )}
                            </strong>

                        </div>

                        <div class="wrong-your">

                            Bạn đã nhập:

                            ${escapeHTML(
                                (
                                    item.attempts ||
                                    []
                                ).join(
                                    " | "
                                )
                            )}

                        </div>

                    </div>

                    `;

                }
            )
            .join("");

}



/* =========================================================
   START GAME
========================================================= */


function startGame(
    words = vocabulary
) {

    /*
        Trộn danh sách.
    */

    questionPool =
        shuffle(
            words
        );


    currentQuestion =
        null;


    streak = 0;


    correct = 0;


    gameRunning = true;


    /*
        Hiện game.
    */

    gameCard.classList.remove(
        "hidden"
    );


    gameOver.classList.add(
        "hidden"
    );


    wrongPanel.classList.add(
        "hidden"
    );


    nextQuestion();

}



/* =========================================================
   BUTTON: SUBMIT
========================================================= */


document
    .getElementById(
        "submitBtn"
    )
    .addEventListener(
        "click",
        checkAnswer
    );



/* =========================================================
   ENTER = SUBMIT
========================================================= */


answerInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();

            checkAnswer();

        }

    }
);



/* =========================================================
   BUTTON: RESTART
========================================================= */


document
    .getElementById(
        "restartBtn"
    )
    .addEventListener(
        "click",
        () => {

            startGame();

        }
    );



/* =========================================================
   BUTTON: AGAIN
========================================================= */


document
    .getElementById(
        "againBtn"
    )
    .addEventListener(
        "click",
        () => {

            startGame();

        }
    );



/* =========================================================
   BUTTON: WRONG WORDS
========================================================= */


document
    .getElementById(
        "wrongBtn"
    )
    .addEventListener(
        "click",
        () => {

            renderWrongWords();

            wrongPanel.classList.remove(
                "hidden"
            );

        }
    );



/* =========================================================
   BUTTON: CLOSE WRONG WORDS
========================================================= */


document
    .getElementById(
        "closeWrongBtn"
    )
    .addEventListener(
        "click",
        () => {

            wrongPanel.classList.add(
                "hidden"
            );

        }
    );



/* =========================================================
   BUTTON: REVIEW WRONG WORDS
========================================================= */


document
    .getElementById(
        "reviewBtn"
    )
    .addEventListener(
        "click",
        () => {

            if (
                wrongWords.length === 0
            ) {

                startGame();

                return;

            }


            /*
                Chỉ làm những từ sai.
            */

            startGame(
                wrongWords
            );

        }
    );



/* =========================================================
   BUTTON: RETRY ALL WRONG
========================================================= */


document
    .getElementById(
        "retryWrongBtn"
    )
    .addEventListener(
        "click",
        () => {

            if (
                wrongWords.length === 0
            ) {

                return;

            }


            startGame(
                wrongWords
            );

        }
    );



/* =========================================================
   INITIALIZE
========================================================= */


renderWrongWords();

updateStats();

startGame();
```
