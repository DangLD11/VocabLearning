"use strict";

/* =========================================================
   VOCAB STREAK
   Việt → Anh
   260 mục có đánh số
   ========================================================= */


/* =========================================================
   DANH SÁCH TỪ VỰNG
   id = số thứ tự trong danh sách gốc
   vi = nghĩa tiếng Việt
   en = toàn bộ đáp án tiếng Anh
   ========================================================= */

const vocabulary = [

    // 1
    { id: 1, vi: "đột nhập", en: ["break into"] },

    // 2
    { id: 2, vi: "không còn nữa", en: ["no longer", "not anymore"] },

    // 3
    { id: 3, vi: "tài sản", en: ["possession", "property", "valuable", "asset"] },

    // 4
    { id: 4, vi: "gặp gỡ", en: ["meet up with"] },

    // 5
    { id: 5, vi: "giữ liên lạc", en: ["keep in touch"] },

    // 6
    { id: 6, vi: "theo dõi", en: ["keep an eye on", "keep track of"] },

    // 7
    { id: 7, vi: "phần lớn", en: ["majority", "most"] },

    // 8
    { id: 8, vi: "có khả năng xảy ra", en: ["probable"] },
    { id: 8, vi: "có lẽ", en: ["probably"] },

    // 9
    { id: 9, vi: "làm hài lòng", en: ["satisfy"] },
    { id: 9, vi: "hài lòng (cho người)", en: ["satisfied"] },
    { id: 9, vi: "hài lòng (cho vật)", en: ["satisfactory"] },
    { id: 9, vi: "sự hài lòng", en: ["satisfaction"] },

    // 10
    { id: 10, vi: "kẹt xe", en: ["traffic jam", "traffic congestion", "gridlocked"] },

    // 11
    { id: 11, vi: "tuyển dụng", en: ["recruit", "take on", "employ"] },

    // 12
    { id: 12, vi: "biến mất", en: ["disappear", "vanish", "extinct", "dwindle"] },

    // 13
    { id: 13, vi: "dừng lại", en: ["cease", "stop", "halt"] },

    // 14
    { id: 14, vi: "xâm lược", en: ["invasion", "invade"] },

    // 15
    { id: 15, vi: "chiến lược", en: ["strategy", "scheme", "approach"] },

    // 16
    { id: 16, vi: "mục tiêu", en: ["objective"] },

    // 17
    { id: 17, vi: "khách quan", en: ["objective"] },
    { id: 17, vi: "chủ quan", en: ["subjective"] },

    // 18
    { id: 18, vi: "trước khi", en: ["prior to", "before", "in advance"] },

    // 19
    {
        id: 19,
        vi: "chịu trách nhiệm cho",
        en: [
            "in charge of",
            "take over",
            "take responsibility for",
            "responsible for",
            "assume"
        ]
    },

    // 20
    { id: 20, vi: "khó chịu", en: ["offensive", "unpleasant"] },

    // 21
    { id: 21, vi: "đáng ngạc nhiên", en: ["incredible"] },

    // 22
    { id: 22, vi: "học thuyết", en: ["theory"] },

    // 23
    { id: 23, vi: "kỳ lạ", en: ["bizarre"] },

    // 24
    { id: 24, vi: "chẳng ích gì", en: ["there is no point in"] },

    // 25
    { id: 25, vi: "nói lầm bầm", en: ["mumble"] },

    // 26
    {
        id: 26,
        vi: "bắt kịp với",
        en: ["catch up with", "keep up with", "keep pace with"]
    },

    // 27
    { id: 27, vi: "hướng về phía nào", en: ["make for"] },

    // 28
    { id: 28, vi: "tấp xe vào lề", en: ["pull in"] },

    // 29
    { id: 29, vi: "xe cán, tông xe", en: ["run over"] },

    // 30
    { id: 30, vi: "đưa tiễn ai đó", en: ["see so off"] },

    // 31
    { id: 31, vi: "khởi hành", en: ["set out", "set off"] },

    // 32
    { id: 32, vi: "đón ai", en: ["pick so up"] },
    { id: 32, vi: "thả ai xuống", en: ["drop so off"] },

    // 33
    {
        id: 33,
        vi: "nói ra mà không suy nghĩ",
        en: ["off the top of so's head"]
    },

    // 34
    { id: 34, vi: "yêu sâu đắm", en: ["head over heels"] },

    // 35
    { id: 35, vi: "rộng", en: ["broad"] },
    { id: 35, vi: "chiều rộng", en: ["breadth"] },

    // 36
    { id: 36, vi: "mở rộng", en: ["broaden"] },

    // 37
    { id: 37, vi: "cư trú", en: ["inhabit"] },
    { id: 37, vi: "cư dân", en: ["inhabitant"] },
    { id: 37, vi: "(không) có thể sống", en: ["uninhabitable", "inhabitable"] },

    // 38
    { id: 38, vi: "nhận ra, công nhận", en: ["recognize"] },
    { id: 38, vi: "sự công nhận", en: ["recognition"] },

    // 39
    {
        id: 39,
        vi: "(không) có thể nhận ra",
        en: ["unrecognizable", "recognizable"]
    },

    // 40
    { id: 40, vi: "thế giới", en: ["world"] },
    { id: 40, vi: "toàn thế giới", en: ["worldwide"] },

    // 41
    { id: 41, vi: "tiết lộ bí mật", en: ["let the cat out of the bag"] },

    // 42
    { id: 42, vi: "kết thúc công việc", en: ["call it a day"] },

    // 43
    { id: 43, vi: "kịp lúc", en: ["in the nick of time"] },

    // 44
    { id: 44, vi: "hào hứng", en: ["thrill"] },

    // 45
    {
        id: 45,
        vi: "vấn đề nhạy cảm (không dám nói)",
        en: ["the elephant in the room"]
    },

    // 46
    {
        id: 46,
        vi: "trở ngại",
        en: ["hurdle", "impediment", "obstacle", "stumbling block"]
    },

    // 47
    {
        id: 47,
        vi: "thỉnh thoảng",
        en: [
            "once in a blue moon",
            "occasionally",
            "once in a while",
            "from time to time",
            "at times"
        ]
    },

    // 48
    {
        id: 48,
        vi: "đừng than vãn những thứ không thay đổi được",
        en: ["don't cry over spilled milk", "don't cry over spilt milk"]
    },

    // 49
    {
        id: 49,
        vi: "rất vui mừng, hạnh phúc",
        en: ["over the moon", "on cloud nine", "very happy"]
    },

    // 50
    { id: 50, vi: "không khỏe", en: ["under the weather"] },

    // 51
    {
        id: 51,
        vi: "cố gắng, nỗ lực",
        en: ["have a go", "make an attempt to v", "in an effort to v"]
    },

    // 52
    { id: 52, vi: "liên quan", en: ["relevant"] },

    // 53
    { id: 53, vi: "hạn chế", en: ["curb"] },

    // 54
    {
        id: 54,
        vi: "đắt tiền",
        en: ["cost an arm and a leg", "pay through the nose"]
    },

    // 55
    {
        id: 55,
        vi: "ôn lại kiến thức",
        en: ["brush up on", "revise"]
    },

    // 56
    {
        id: 56,
        vi: "mất điện",
        en: ["a power cut", "blackout", "a power outage"]
    },

    // 57
    { id: 57, vi: "bắt đầu làm việc gì", en: ["get round to ving"] },

    // 58
    { id: 58, vi: "dừng tham gia hoạt động", en: ["pull out"] },

    // 59
    { id: 59, vi: "bắt đầu thói quen", en: ["take to"] },

    // 60
    {
        id: 60,
        vi: "chán",
        en: ["fed up with", "bored with", "tired of"]
    },

    // 61
    { id: 61, vi: "tổ chức tiệc", en: ["throw a party"] },

    // 62
    { id: 62, vi: "trầm tư suy nghĩ", en: ["meditative"] },

    // 63
    { id: 63, vi: "vui vẻ", en: ["gleeful"] },

    // 64
    { id: 64, vi: "nghiêm khắc", en: ["stern", "strict"] },

    // 65
    { id: 65, vi: "tuyệt vọng", en: ["desperate"] },

    // 66
    {
        id: 66,
        vi: "trở nên phổ biến",
        en: ["catch on", "become popular", "in vogue"]
    },

    // 67
    { id: 67, vi: "đo lường", en: ["measure", "measurement"] },

    // 68
    { id: 68, vi: "dồi dào", en: ["abundant", "plentiful"] },

    // 69
    { id: 69, vi: "cần thứ gì", en: ["do with sth"] },

    // 70
    { id: 70, vi: "người xem", en: ["onlooker", "viewer"] },

    // 71
    {
        id: 71,
        vi: "đáng kể",
        en: ["considerable", "significant"]
    },

    // 72
    {
        id: 72,
        vi: "dập lửa",
        en: ["put out", "extinguish"]
    },

    // 73
    {
        id: 73,
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
            "pay so a visit"
        ]
    },

    // 74
    {
        id: 74,
        vi: "phát hành / làm nổi bật",
        en: ["bring out"]
    },

    // 75
    {
        id: 75,
        vi: "xuất hiện trong tâm trí ai đó",
        en: ["enter so's mind", "enter so's head"]
    },

    // 76
    {
        id: 76,
        vi: "chợt nghĩ",
        en: ["cross so's mind", "cross so's head"]
    },

    // 77
    { id: 77, vi: "quên mất", en: ["slip so's mind"] },

    // 78
    { id: 78, vi: "trống rỗng", en: ["go blank"] },

    // 79
    {
        id: 79,
        vi: "hy vọng điều gì",
        en: ["in the hope of ving"]
    },

    // 80
    {
        id: 80,
        vi: "công thức nhờ vả",
        en: [
            "have so do sth",
            "get so to v",
            "have sth v3/ed",
            "get sth v3/ed"
        ]
    },

    // 81
    {
        id: 81,
        vi: "thích cái này hơn cái kia",
        en: ["prefer ving to ving"]
    },

    // 82
    { id: 82, vi: "chú ý đến", en: ["take notice of"] },

    // 83
    { id: 83, vi: "bị đuổi (học)", en: ["expelled from"] },

    // 84
    { id: 84, vi: "theo như", en: ["as far as"] },

    // 85
    { id: 85, vi: "miễn là", en: ["as long as"] },

    // 86
    {
        id: 86,
        vi: "hiện tại có thật: S + Vs/es",
        en: ["as if", "as though"]
    },
    {
        id: 86,
        vi: "hiện tại không thật: S + V2/ed",
        en: ["as if", "as though"]
    },
    {
        id: 86,
        vi: "quá khứ không thật: S + had V3/ed",
        en: ["as if", "as though"]
    },

    // 87
    { id: 87, vi: "bùng nổ", en: ["outbreak"] },

    // 88
    { id: 88, vi: "the first/second + to V", en: ["the first/second + to v"] },

    // 89
    { id: 89, vi: "vui vẻ", en: ["light-hearted"] },

    // 90
    { id: 90, vi: "hiền hậu", en: ["warm-hearted"] },

    // 91
    { id: 91, vi: "hào phóng", en: ["big-hearted"] },

    // 92
    { id: 92, vi: "hết lòng", en: ["whole-hearted"] },

    // 93
    { id: 93, vi: "chắc hẳn đã", en: ["must have v3/ed"] },
    { id: 93, vi: "lẽ ra nên", en: ["should have v3/ed"] },
    { id: 93, vi: "có thể đã", en: ["can have v3/ed", "could have v3/ed"] },

    // 94
    {
        id: 94,
        vi: "xem là điều hiển nhiên",
        en: ["take sth for granted"]
    },

    // 95
    { id: 95, vi: "truyền cảm hứng", en: ["thought-provoking"] },

    // 96
    {
        id: 96,
        vi: "quy định, luật lệ",
        en: ["regulation", "rule"]
    },

    // 97
    {
        id: 97,
        vi: "It is Adj + that + S + (should) + Vo",
        en: ["it is adj + that + s + should + vo"]
    },

    // 98
    { id: 98, vi: "cãi lại/trả treo", en: ["talk back to"] },
    { id: 98, vi: "tranh cãi", en: ["fall out"] },

    // 99
    { id: 99, vi: "hồi tưởng", en: ["think back on"] },

    // 100
    { id: 100, vi: "dựa vào", en: ["fall back on"] },

    // 101
    { id: 101, vi: "biểu diễn", en: ["put on a play"] },

    // 102
    { id: 102, vi: "trả thù", en: ["get back at"] },

    // 103
    { id: 103, vi: "nịnh bợ", en: ["make up to"] },

    // 104
    {
        id: 104,
        vi: "mắc bệnh",
        en: ["go down with", "come down with", "contract disease"]
    },

    // 105
    { id: 105, vi: "nghĩ ra", en: ["come up with"] },

    // 106
    { id: 106, vi: "ngã", en: ["fall over"] },

    // 107
    { id: 107, vi: "lùi", en: ["fall back"] },

    // 108
    { id: 108, vi: "rơi", en: ["fall off"] },

    // 109
    {
        id: 109,
        vi: "đối mặt với / gặp phải (khó khăn, trở ngại)",
        en: ["come up against"]
    },

    // 110
    { id: 110, vi: "dự định", en: ["be about to"] },

    // 111
    { id: 111, vi: "thường xuyên", en: ["on a regular basis"] },

    // 112
    { id: 112, vi: "bảo mật", en: ["confidential"] },

    // 113
    {
        id: 113,
        vi: "phá hủy",
        en: ["tear down", "burn down", "pull down"]
    },

    // 114
    { id: 114, vi: "thờ ơ", en: ["indifferent to"] },

    // 115
    { id: 115, vi: "It's (high) time S + V2/ed", en: ["it's (high) time s + v2/ed"] },

    // 116
    { id: 116, vi: "người tị nạn", en: ["refugee"] },

    // 117
    {
        id: 117,
        vi: "S + would rather + hiện tại: V0 than V0",
        en: ["s + would rather + v0 than v0"]
    },
    {
        id: 117,
        vi: "S + V2/ed",
        en: ["s + v2/ed"]
    },
    {
        id: 117,
        vi: "quá khứ: have V3/ed",
        en: ["have v3/ed"]
    },
    {
        id: 117,
        vi: "S + had V3/ed",
        en: ["s + had v3/ed"]
    },

    // 118
    { id: 118, vi: "có thói quen", en: ["in the habit of"] },

    // 119
    {
        id: 119,
        vi: "dù thế nào đi chăng nữa",
        en: [
            "no matter how + adj/adv + s + v",
            "however + adj/adv + s + v",
            "adj/adv + as + s + v"
        ]
    },

    // 120
    {
        id: 120,
        vi: "lẫn nhau",
        en: ["each other", "one another"]
    },

    // 121
    {
        id: 121,
        vi: "món hời/trả giá",
        en: ["bargain"]
    },

    // 122
    { id: 122, vi: "tiết lộ", en: ["reveal"] },

    // 123
    { id: 123, vi: "hoảng loạn", en: ["in panic"] },

    // 124
    { id: 124, vi: "làm cho thông gió", en: ["ventilate"] },

    // 125
    { id: 125, vi: "thoáng mát", en: ["breezy"] },

    // 126
    { id: 126, vi: "có gió lùa", en: ["draughty"] },

    // 127
    {
        id: 127,
        vi: "thực tiễn",
        en: ["utilitarian", "practical", "no-frills"]
    },

    // 128
    { id: 128, vi: "lắp ráp", en: ["assemble"] },

    // 129
    {
        id: 129,
        vi: "lộn xộn",
        en: ["chaos", "clutter", "mess"]
    },

    // 130
    { id: 130, vi: "rõ ràng", en: ["discernible"] },

    // 131
    { id: 131, vi: "tăng lên", en: ["augment"] },

    // 132
    { id: 132, vi: "làm trầm trọng", en: ["exacerbate"] },

    // 133
    {
        id: 133,
        vi: "không thể tránh khỏi/tất yếu",
        en: ["inevitable"]
    },

    // 134
    { id: 134, vi: "sự cạn kiệt", en: ["depletion"] },

    // 135
    { id: 135, vi: "sự tàn phá", en: ["devastation"] },

    // 136
    { id: 136, vi: "sự chìm xuống", en: ["sinking"] },

    // 137
    { id: 137, vi: "nỗ lực", en: ["in a bid + to v"] },

    // 138
    { id: 138, vi: "chiến dịch", en: ["campaign"] },

    // 139
    { id: 139, vi: "tưởng tượng", en: ["envision"] },

    // 140
    { id: 140, vi: "đầu tư", en: ["invest + in"] },

    // 141
    { id: 141, vi: "có lợi cho ai", en: ["do so good"] },

    // 142
    { id: 142, vi: "đi đến kết luận", en: ["come to a conclusion"] },

    // 143
    { id: 143, vi: "trình bày sự việc", en: ["give an account of"] },

    // 144
    { id: 144, vi: "làm cho ai hiểu", en: ["drive it home to so"] },

    // 145
    {
        id: 145,
        vi: "tức giận",
        en: ["get hot under the collar", "become furious"]
    },

    // 146
    {
        id: 146,
        vi: "rõ ràng",
        en: ["obvious", "apparent", "clear"]
    },

    // 147
    {
        id: 147,
        vi: "vượt ngoài tầm kiểm soát",
        en: ["run riot"]
    },

    // 148
    { id: 148, vi: "truyền tải", en: ["convey"] },

    // 149
    { id: 149, vi: "thu nhỏ, co lại", en: ["shrink"] },

    // 150
    {
        id: 150,
        vi: "sa thải",
        en: ["dismiss", "sack", "lay off"]
    },
    { id: 150, vi: "sự sa thải", en: ["dismissal"] },

    // 151
    { id: 151, vi: "người kiêu ngạo", en: ["snob"] },

    // 152
    {
        id: 152,
        vi: "gây ra",
        en: ["bring on", "cause", "result in", "lead to", "trigger"]
    },

    // 153
    {
        id: 153,
        vi: "bận rộn",
        en: [
            "up to so's ears",
            "up to so's neck",
            "overwhelming",
            "swamped with"
        ]
    },

    // 154
    {
        id: 154,
        vi: "mục đích",
        en: ["with a view to ving", "with an eye to ving"]
    },

    // 155
    { id: 155, vi: "phạm tội", en: ["commit a crime"] },

    // 156
    { id: 156, vi: "chọc ai đó", en: ["pull so's leg"] },

    // 157
    {
        id: 157,
        vi: "xem xét, cân nhắc",
        en: ["take into account", "take into consideration"]
    },

    // 158
    {
        id: 158,
        vi: "vô tình gặp",
        en: ["run into", "come across"]
    },

    // 159
    {
        id: 159,
        vi: "bắt buộc",
        en: [
            "oblige",
            "obligation",
            "obligatory",
            "compulsory for",
            "mandatory"
        ]
    },

    // 160
    {
        id: 160,
        vi: "động lực",
        en: ["incentive", "motivation"]
    },

    // 161
    {
        id: 161,
        vi: "đối thủ",
        en: ["opponent", "rival"]
    },

    // 162
    {
        id: 162,
        vi: "xóa bỏ, loại bỏ",
        en: [
            "eliminate",
            "eradicate",
            "get rid of",
            "do away with",
            "phased out"
        ]
    },

    // 163
    { id: 163, vi: "ủy ban", en: ["committee"] },

    // 164
    { id: 164, vi: "cam kết", en: ["pledge"] },

    // 165
    {
        id: 165,
        vi: "người quan trọng",
        en: ["the apple of so's eye"]
    },

    // 166
    {
        id: 166,
        vi: "biết rõ trong lòng bàn tay",
        en: ["the back of so's hand"]
    },

    // 167
    {
        id: 167,
        vi: "sắp nhớ ra",
        en: ["the tip of so's tongue"]
    },

    // 168
    { id: 168, vi: "thay mặt cho", en: ["on behalf of"] },

    // 169
    { id: 169, vi: "học bù", en: ["catch up on"] },

    // 170
    { id: 170, vi: "cân nhắc kỹ", en: ["contemplate + ving"] },

    // 171
    {
        id: 171,
        vi: "phân biệt",
        en: ["differentiate"]
    },
    {
        id: 171,
        vi: "khác",
        en: ["differ"]
    },

    // 172
    { id: 172, vi: "cuộc đình công", en: ["strike"] },

    // 173
    { id: 173, vi: "sự va chạm", en: ["collision"] },

    // 174
    { id: 174, vi: "hối lộ", en: ["bribery"] },

    // 175
    {
        id: 175,
        vi: "kĩ lưỡng, phức tạp",
        en: ["elaborate", "thorough"]
    },

    // 176
    { id: 176, vi: "ban đầu", en: ["initial"] },

    // 177
    { id: 177, vi: "người phạm lỗi", en: ["offender"] },

    // 178
    { id: 178, vi: "khai báo", en: ["make a statement"] },

    // 179
    { id: 179, vi: "bắt cóc", en: ["kidnap"] },

    // 180
    { id: 180, vi: "tống tiền", en: ["blackmail"] },

    // 181
    { id: 181, vi: "thiếu hụt", en: ["deficiency"] },

    // 182
    { id: 182, vi: "bắt giữ", en: ["arrest"] },

    // 183
    { id: 183, vi: "tuyên án", en: ["sentence"] },

    // 184
    {
        id: 184,
        vi: "bất kể",
        en: ["regardless of", "irrespective of"]
    },

    // 185
    { id: 185, vi: "nỗ lực", en: ["pull so's socks up"] },

    // 186
    { id: 186, vi: "che đậy", en: ["disguise"] },

    // 187
    { id: 187, vi: "bạn đồng hành", en: ["companion"] },

    // 188
    { id: 188, vi: "nghiêm trọng", en: ["crippling"] },

    // 189
    {
        id: 189,
        vi: "tiếng kêu của lừa",
        en: ["braying"]
    },
    {
        id: 189,
        vi: "tiếng kêu của cừu",
        en: ["bleating"]
    },

    // 190
    {
        id: 190,
        vi: "đàn cá",
        en: ["shoals of fish", "schools of fish"]
    },
    {
        id: 190,
        vi: "đàn kiến/ong",
        en: ["swarms of ants", "swarms of bees"]
    },
    {
        id: 190,
        vi: "đàn vịt/chim",
        en: ["flocks of ducks", "flocks of birds"]
    },
    {
        id: 190,
        vi: "đàn gia súc",
        en: ["herds of cattle"]
    },

    // 191
    { id: 191, vi: "đống quần áo", en: ["jumble of clothes"] },

    // 192
    { id: 192, vi: "tiền chuộc", en: ["ransom"] },

    // 193
    { id: 193, vi: "ngỗ ngược", en: ["unruly"] },

    // 194
    { id: 194, vi: "đám đông", en: ["mob"] },

    // 195
    {
        id: 195,
        vi: "cản trở",
        en: ["hinder", "deter"]
    },

    // 196
    {
        id: 196,
        vi: "tranh cãi",
        en: [
            "dispute",
            "row",
            "quarrel",
            "argument",
            "squabble"
        ]
    },

    // 197
    { id: 197, vi: "cần thiết", en: ["indispensable"] },

    // 198
    { id: 198, vi: "rút lui", en: ["retreat"] },

    // 199
    { id: 199, vi: "đầu hàng", en: ["surrender"] },

    // 200
    {
        id: 200,
        vi: "thành công",
        en: [
            "come up trumps",
            "bring off",
            "home and dry",
            "succeed",
            "bear fruit"
        ]
    },

    // 201
    { id: 201, vi: "hoài nghi", en: ["skeptical"] },

    // 202
    {
        id: 202,
        vi: "lo lắng",
        en: ["dismay", "consternation"]
    },

    // 203
    {
        id: 203,
        vi: "hợp lý",
        en: ["plausible", "reasonable"]
    },

    // 204
    {
        id: 204,
        vi: "dễ bị tổn thương",
        en: ["susceptible", "vulnerable"]
    },

    // 205
    {
        id: 205,
        vi: "khéo léo",
        en: ["tactful", "diplomatic"]
    },

    // 206
    { id: 206, vi: "lỗi thời", en: ["out of practise"] },

    // 207
    {
        id: 207,
        vi: "sự tưởng tượng",
        en: ["imagination"]
    },
    {
        id: 207,
        vi: "tưởng tượng",
        en: ["imagine"]
    },
    {
        id: 207,
        vi: "giàu trí tưởng tượng",
        en: ["imaginative"]
    },
    {
        id: 207,
        vi: "không có thật",
        en: ["imaginary"]
    },

    // 208
    {
        id: 208,
        vi: "linh hoạt",
        en: ["versatile", "flexible"]
    },

    // 209
    { id: 209, vi: "tiêu hết tiền", en: ["get through"] },

    // 210
    {
        id: 210,
        vi: "giúp ai vượt qua khó khăn",
        en: ["help so out"]
    },

    // 211
    { id: 211, vi: "thuế hải quan", en: ["customs duty"] },

    // 212
    { id: 212, vi: "viễn cảnh", en: ["prospect"] },

    // 213
    { id: 213, vi: "đổi lượt", en: ["take turns"] },

    // 214
    { id: 214, vi: "hít vào", en: ["inhale"] },
    { id: 214, vi: "thở ra", en: ["exhale"] },

    // 215
    { id: 215, vi: "làm ai đó tỉnh lại", en: ["bring so to"] },

    // 216
    {
        id: 216,
        vi: "bất tỉnh",
        en: ["pass out", "faint", "unconscious"]
    },

    // 217
    { id: 217, vi: "hội ý", en: ["confer"] },

    // 218
    { id: 218, vi: "xuất viện", en: ["discharged from"] },

    // 219
    { id: 219, vi: "người nhập cư", en: ["immigrant"] },
    { id: 219, vi: "sự nhập cư", en: ["immigration"] },

    // 220
    { id: 220, vi: "hiểu lầm", en: ["get one's wires crossed"] },

    // 221
    { id: 221, vi: "nuốt lời", en: ["go back on so's word"] },

    // 222
    { id: 222, vi: "hoàn toàn không", en: ["by no means"] },

    // 223
    { id: 223, vi: "chắc chắn", en: ["by all means"] },

    // 224
    { id: 224, vi: "dao động", en: ["fluctuate"] },

    // 225
    {
        id: 225,
        vi: "Many + a/an + N ít → V ít",
        en: ["many + a/an + n + singular verb"]
    },

    // 226
    { id: 226, vi: "hóa ra", en: ["turn out"] },

    // 227
    { id: 227, vi: "là do", en: ["put down to"] },

    // 228
    {
        id: 228,
        vi: "hứng chịu, nhận lấy (lời chỉ trích, chê bai)",
        en: ["come in for"]
    },

    // 229
    { id: 229, vi: "đề xuất", en: ["put forward to"] },

    // 230
    {
        id: 230,
        vi: "tôi đồng ý",
        en: ["you can say that again", "i'll say"]
    },

    // 231
    { id: 231, vi: "thay thế cho ai", en: ["stand in for"] },

    // 232
    { id: 232, vi: "nhìn thoáng qua", en: ["glimpse of"] },

    // 233
    { id: 233, vi: "xem xét kĩ", en: ["vet"] },

    // 234
    { id: 234, vi: "thích nghi", en: ["adapt to"] },

    // 235
    { id: 235, vi: "thừa kế", en: ["come into", "inherit"] },
    { id: 235, vi: "người thừa kế", en: ["heir"] },

    // 236
    { id: 236, vi: "gọi điện cho ai", en: ["call up so"] },

    // 237
    { id: 237, vi: "lọc, khử", en: ["purge"] },

    // 238
    { id: 238, vi: "tuổi thọ", en: ["life expectancy"] },

    // 239
    {
        id: 239,
        vi: "đảm nhận vị trí ai đó",
        en: ["step into so's shoes"]
    },

    // 240
    {
        id: 240,
        vi: "1 người quan trọng",
        en: ["a fat cat"]
    },

    // 241
    {
        id: 241,
        vi: "such (a/an) + adj + N",
        en: ["such (a/an) + adj + n"]
    },
    {
        id: 241,
        vi: "so + adj + (a/an) + N",
        en: ["so + adj + (a/an) + n"]
    },

    // 242
    {
        id: 242,
        vi: "thuộc về trí tuệ",
        en: ["intellectual"]
    },

    // 243
    {
        id: 243,
        vi: "bị lỗi",
        en: ["defective", "faulty"]
    },

    // 244
    { id: 244, vi: "phong trào", en: ["movement"] },

    // 245
    { id: 245, vi: "phát triển hơn", en: ["outgrow"] },

    // 246
    { id: 246, vi: "vượt trội", en: ["outclassed"] },

    // 247
    { id: 247, vi: "đông", en: ["outnumbered"] },

    // 248
    {
        id: 248,
        vi: "nhanh hơn (tốc độ)",
        en: ["outraced"]
    },

    // 249
    {
        id: 249,
        vi: "lấy lại phong độ, khẳng định năng lực",
        en: ["come into so's own"]
    },

    // 250
    {
        id: 250,
        vi: "trọng tài (baseball, tennis)",
        en: ["umpire"]
    },

    // 251
    { id: 251, vi: "người kể lại", en: ["narrator"] },

    // 252
    {
        id: 252,
        vi: "giảm cân cấp tốc",
        en: ["put on a crash diet"]
    },

    // 253
    { id: 253, vi: "ăn ngấu nghiến", en: ["bolt"] },

    // 254
    { id: 254, vi: "đói cồn cào", en: ["hunger pangs"] },

    // 255
    { id: 255, vi: "đặc quyền", en: ["privilege"] },

    // 256
    { id: 256, vi: "khét tiếng", en: ["notorious"] },

    // 257
    { id: 257, vi: "nổi tiếng", en: ["noted"] },

    // 258
    { id: 258, vi: "thì thầm", en: ["put a bug in so's ear"] },

    // 259
    { id: 259, vi: "đe dọa", en: ["threaten"] },

    // 260
    { id: 260, vi: "tò mò", en: ["inquisitive"] }

];


/* =========================================================
   CẤU HÌNH
   ========================================================= */

const STORAGE_KEY = "vocabWrongWords";


/* =========================================================
   TRẠNG THÁI GAME
   ========================================================= */

let questionPool = [];
let currentQuestion = null;

let streak = 0;
let correct = 0;

let gameRunning = false;
let checkingAnswer = false;

let gameMode = "normal";

let gameTotal = 0;

let wrongWords = [];


/* =========================================================
   DOM
   ========================================================= */

const promptEl = document.getElementById("prompt");
const answerEl = document.getElementById("answer");

const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");

const wrongBtn = document.getElementById("wrongBtn");
const wrongCountEl = document.getElementById("wrongCount");

const feedbackEl = document.getElementById("feedback");

const streakEl = document.getElementById("streak");
const correctEl = document.getElementById("correct");
const remainingEl = document.getElementById("remaining");
const totalEl = document.getElementById("total");

const gameCard = document.getElementById("gameCard");
const gameOver = document.getElementById("gameOver");

const finalStreakEl = document.getElementById("finalStreak");
const overTextEl = document.getElementById("overText");

const againBtn = document.getElementById("againBtn");
const reviewBtn = document.getElementById("reviewBtn");

const wrongPanel = document.getElementById("wrongPanel");
const closeWrongBtn = document.getElementById("closeWrongBtn");

const wrongListEl = document.getElementById("wrongList");
const retryWrongBtn = document.getElementById("retryWrongBtn");


/* =========================================================
   CHUẨN HÓA
   ========================================================= */

function normalize(text) {

    return String(text ?? "")
        .normalize("NFC")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}


/* =========================================================
   XỬ LÝ ĐÁP ÁN NGƯỜI DÙNG
   ========================================================= */

function parseAnswers(text) {

    return String(text ?? "")
        .split("=")
        .map(item => normalize(item))
        .filter(item => item !== "");
}


/* =========================================================
   KIỂM TRA ĐÁP ÁN
   =========================================================
   
   KHÔNG QUAN TÂM THỨ TỰ.

   Ví dụ:
   
   Đúng:
   possession = property = valuable = asset

   Cũng đúng:
   asset = possession = property = valuable

   Cũng đúng:
   PROPERTY = ASSET = possession = valuable

   Nhưng:
   possession = property

   → SAI vì thiếu đáp án.
   ========================================================= */

function answersAreEqual(userAnswers, correctAnswers) {

    const user = userAnswers
        .map(normalize)
        .filter(Boolean);

    const correct = correctAnswers
        .map(normalize)
        .filter(Boolean);

    // Không đủ / thừa đáp án
    if (user.length !== correct.length) {
        return false;
    }

    // Tạo bản sao
    const remaining = [...correct];

    for (const answer of user) {

        const index = remaining.indexOf(answer);

        // Không tồn tại
        if (index === -1) {
            return false;
        }

        // Xóa đáp án đã dùng
        remaining.splice(index, 1);
    }

    return remaining.length === 0;
}


/* =========================================================
   TRỘN MẢNG
   ========================================================= */

function shuffle(array) {

    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] =
            [result[j], result[i]];
    }

    return result;
}


/* =========================================================
   LOAD TỪ SAI
   ========================================================= */

function loadWrongWords() {

    try {

        const saved =
            localStorage.getItem(STORAGE_KEY);

        if (!saved) {

            wrongWords = [];

            return;
        }

        const parsed =
            JSON.parse(saved);

        if (Array.isArray(parsed)) {

            wrongWords = parsed;

        } else {

            wrongWords = [];
        }

    } catch (error) {

        console.error(
            "Không thể đọc danh sách từ sai:",
            error
        );

        wrongWords = [];
    }
}


/* =========================================================
   SAVE TỪ SAI
   ========================================================= */

function saveWrongWords() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(wrongWords)
        );

    } catch (error) {

        console.error(
            "Không thể lưu từ sai:",
            error
        );
    }

    updateWrongCount();
}


/* =========================================================
   KEY CỦA TỪ
   ========================================================= */

function getQuestionKey(question) {

    if (!question) {
        return "";
    }

    return `${question.id}|${normalize(question.vi)}`;
}


/* =========================================================
   THÊM VÀO TỪ SAI
   ========================================================= */

function addWrongWord(question) {

    if (!question) {
        return;
    }

    const key =
        getQuestionKey(question);

    const exists =
        wrongWords.some(
            item =>
                getQuestionKey(item) === key
        );

    if (!exists) {

        wrongWords.push({
            id: question.id,
            vi: question.vi,
            en: [...question.en]
        });

        saveWrongWords();
    }
}


/* =========================================================
   XÓA KHỎI TỪ SAI
   ========================================================= */

function removeWrongWord(question) {

    if (!question) {
        return;
    }

    const key =
        getQuestionKey(question);

    wrongWords =
        wrongWords.filter(
            item =>
                getQuestionKey(item) !== key
        );

    saveWrongWords();
}


/* =========================================================
   CẬP NHẬT SỐ TỪ SAI
   ========================================================= */

function updateWrongCount() {

    if (!wrongCountEl) {
        return;
    }

    wrongCountEl.textContent =
        wrongWords.length;
}


/* =========================================================
   CẬP NHẬT STATS
   ========================================================= */

function updateStats() {

    if (streakEl) {
        streakEl.textContent = streak;
    }

    if (correctEl) {
        correctEl.textContent = correct;
    }

    if (remainingEl) {
        remainingEl.textContent =
            questionPool.length;
    }

    if (totalEl) {
        totalEl.textContent =
            gameTotal;
    }

    updateWrongCount();
}


/* =========================================================
   FEEDBACK
   ========================================================= */

function showFeedback(message, type) {

    if (!feedbackEl) {
        return;
    }

    feedbackEl.textContent =
        message;

    feedbackEl.className =
        "feedback";

    if (type) {

        feedbackEl.classList.add(type);
    }
}


function clearFeedback() {

    if (!feedbackEl) {
        return;
    }

    feedbackEl.textContent = "";

    feedbackEl.className =
        "feedback";
}


/* =========================================================
   HIỂN THỊ CÂU HỎI
   ========================================================= */

function showQuestion() {

    if (!gameRunning) {
        return;
    }

    clearFeedback();

    /*
       Nếu hết câu:

       Normal:
       → trộn lại toàn bộ danh sách
       
       Wrong:
       → hoàn thành ôn từ sai
    */

    if (questionPool.length === 0) {

        if (gameMode === "wrong") {

            finishWrongReview();

            return;
        }

        questionPool =
            shuffle(vocabulary);
    }


    currentQuestion =
        questionPool.pop();


    /*
       HIỂN THỊ SỐ THỨ TỰ

       Ví dụ:

       63. Vui vẻ
    */

    if (promptEl) {

        promptEl.textContent =
            `${currentQuestion.id}. ${currentQuestion.vi}`;
    }


    if (answerEl) {

        answerEl.value = "";

        answerEl.disabled = false;

        answerEl.focus();
    }


    if (submitBtn) {

        submitBtn.disabled = false;
    }


    updateStats();
}


/* =========================================================
   KIỂM TRA CÂU TRẢ LỜI
   ========================================================= */

function checkAnswer() {

    if (!gameRunning) {
        return;
    }

    if (checkingAnswer) {
        return;
    }

    if (!currentQuestion) {
        return;
    }

    checkingAnswer = true;


    const rawAnswer =
        answerEl
            ? answerEl.value
            : "";


    const userAnswers =
        parseAnswers(rawAnswer);


    const correctAnswers =
        currentQuestion.en;


    /*
       Debug trong F12 → Console
    */

    console.log(
        "================================"
    );

    console.log(
        "Số:",
        currentQuestion.id
    );

    console.log(
        "Tiếng Việt:",
        currentQuestion.vi
    );

    console.log(
        "Bạn nhập:",
        userAnswers
    );

    console.log(
        "Đáp án:",
        correctAnswers
    );


    const isCorrect =
        answersAreEqual(
            userAnswers,
            correctAnswers
        );


    if (isCorrect) {

        handleCorrect();

    } else {

        handleWrong(userAnswers);
    }


    checkingAnswer = false;
}


/* =========================================================
   ĐÚNG
   ========================================================= */

function handleCorrect() {

    streak++;
    correct++;

    removeWrongWord(
        currentQuestion
    );

    showFeedback(
        "✓ Chính xác!",
        "correct"
    );

    updateStats();


    setTimeout(() => {

        if (!gameRunning) {
            return;
        }

        showQuestion();

    }, 350);
}


/* =========================================================
   SAI
   ========================================================= */

function handleWrong(userAnswers) {

    addWrongWord(
        currentQuestion
    );

    gameRunning = false;


    if (answerEl) {

        answerEl.disabled = true;
    }


    if (submitBtn) {

        submitBtn.disabled = true;
    }


    showFeedback(
        "✗ Sai!",
        "wrong"
    );


    setTimeout(() => {

        showGameOver(
            userAnswers
        );

    }, 500);
}


/* =========================================================
   GAME OVER
   ========================================================= */

function showGameOver(userAnswers) {

    if (gameCard) {

        gameCard.classList.add(
            "hidden"
        );
    }


    if (gameOver) {

        gameOver.classList.remove(
            "hidden"
        );
    }


    if (finalStreakEl) {

        finalStreakEl.textContent =
            streak;
    }


    if (overTextEl) {

        const correctText =
            currentQuestion.en.join(
                " = "
            );


        overTextEl.innerHTML =
            `Đáp án đúng: <strong>${escapeHTML(correctText)}</strong>`;
    }


    updateStats();
}


/* =========================================================
   HOÀN THÀNH ÔN TỪ SAI
   ========================================================= */

function finishWrongReview() {

    gameRunning = false;


    if (gameCard) {

        gameCard.classList.add(
            "hidden"
        );
    }


    if (gameOver) {

        gameOver.classList.remove(
            "hidden"
        );
    }


    if (finalStreakEl) {

        finalStreakEl.textContent =
            streak;
    }


    if (overTextEl) {

        overTextEl.textContent =
            "🎉 Bạn đã hoàn thành toàn bộ danh sách từ sai!";
    }


    updateStats();
}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(text) {

    return String(text)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


/* =========================================================
   GAME BÌNH THƯỜNG
   ========================================================= */

function startNormalGame() {

    gameMode = "normal";

    streak = 0;
    correct = 0;

    checkingAnswer = false;

    gameRunning = true;

    questionPool =
        shuffle(vocabulary);

    gameTotal =
        vocabulary.length;


    if (gameOver) {

        gameOver.classList.add(
            "hidden"
        );
    }


    if (wrongPanel) {

        wrongPanel.classList.add(
            "hidden"
        );
    }


    if (gameCard) {

        gameCard.classList.remove(
            "hidden"
        );
    }


    updateStats();

    showQuestion();
}


/* =========================================================
   ÔN TỪ SAI
   ========================================================= */

function startWrongReview() {

    loadWrongWords();


    if (wrongWords.length === 0) {

        alert(
            "Hiện tại không có từ sai."
        );

        return;
    }


    gameMode = "wrong";

    streak = 0;
    correct = 0;

    checkingAnswer = false;

    gameRunning = true;


    questionPool =
        shuffle(wrongWords);


    gameTotal =
        questionPool.length;


    if (gameOver) {

        gameOver.classList.add(
            "hidden"
        );
    }


    if (wrongPanel) {

        wrongPanel.classList.add(
            "hidden"
        );
    }


    if (gameCard) {

        gameCard.classList.remove(
            "hidden"
        );
    }


    updateStats();

    showQuestion();
}


/* =========================================================
   CHƠI LẠI
   ========================================================= */

function restartGame() {

    startNormalGame();
}


/* =========================================================
   HIỂN THỊ DANH SÁCH TỪ SAI
   ========================================================= */

function renderWrongWords() {

    if (!wrongListEl) {
        return;
    }


    wrongListEl.innerHTML = "";


    if (wrongWords.length === 0) {

        const empty =
            document.createElement(
                "div"
            );

        empty.className =
            "wrong-empty";

        empty.textContent =
            "🎉 Bạn chưa có từ sai nào.";

        wrongListEl.appendChild(
            empty
        );

        return;
    }


    wrongWords.forEach(
        (word, index) => {

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "wrong-item";


            const number =
                document.createElement(
                    "div"
                );

            number.className =
                "wrong-number";

            number.textContent =
                word.id;


            const content =
                document.createElement(
                    "div"
                );

            content.className =
                "wrong-content";


            const vi =
                document.createElement(
                    "div"
                );

            vi.className =
                "wrong-vi";

            vi.textContent =
                `${word.id}. ${word.vi}`;


            const en =
                document.createElement(
                    "div"
                );

            en.className =
                "wrong-en";

            en.textContent =
                word.en.join(
                    " = "
                );


            content.appendChild(vi);
            content.appendChild(en);

            item.appendChild(number);
            item.appendChild(content);

            wrongListEl.appendChild(item);
        }
    );
}


/* =========================================================
   MỞ PANEL TỪ SAI
   ========================================================= */

function openWrongPanel() {

    loadWrongWords();

    renderWrongWords();


    if (wrongPanel) {

        wrongPanel.classList.remove(
            "hidden"
        );
    }
}


/* =========================================================
   ĐÓNG PANEL TỪ SAI
   ========================================================= */

function closeWrongPanel() {

    if (wrongPanel) {

        wrongPanel.classList.add(
            "hidden"
        );
    }
}


/* =========================================================
   ENTER
   ========================================================= */

function handleEnter(event) {

    if (event.key !== "Enter") {
        return;
    }

    event.preventDefault();

    checkAnswer();
}


/* =========================================================
   EVENTS
   ========================================================= */

function setupEvents() {

    if (submitBtn) {

        submitBtn.addEventListener(
            "click",
            checkAnswer
        );
    }


    if (answerEl) {

        answerEl.addEventListener(
            "keydown",
            handleEnter
        );
    }


    if (restartBtn) {

        restartBtn.addEventListener(
            "click",
            restartGame
        );
    }


    if (againBtn) {

        againBtn.addEventListener(
            "click",
            restartGame
        );
    }


    if (reviewBtn) {

        reviewBtn.addEventListener(
            "click",
            startWrongReview
        );
    }


    if (wrongBtn) {

        wrongBtn.addEventListener(
            "click",
            openWrongPanel
        );
    }


    if (closeWrongBtn) {

        closeWrongBtn.addEventListener(
            "click",
            closeWrongPanel
        );
    }


    if (retryWrongBtn) {

        retryWrongBtn.addEventListener(
            "click",
            startWrongReview
        );
    }
}


/* =========================================================
   KHỞI TẠO
   ========================================================= */

function initialize() {

    loadWrongWords();

    setupEvents();

    renderWrongWords();

    updateStats();

    startNormalGame();
}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initialize
);
