"use strict";

/* =========================================================
   VOCAB STREAK
   Việt → Anh
   Nhập đầy đủ tất cả đáp án, ngăn cách bằng dấu =
   Ví dụ:
   tài sản
   → possession = property = valuable = asset

   Không phân biệt:
   - Hoa / thường
   - Thứ tự đáp án

   Có:
   - Chuỗi vô hạn
   - Lưu từ sai
   - Làm lại tất cả từ sai
   - Tự xóa từ khỏi danh sách sai khi làm đúng
   - Lưu bằng localStorage
   ========================================================= */


/* =========================================================
   DANH SÁCH TỪ VỰNG
   ========================================================= */

const vocabulary = [

    {
        vi: "đột nhập",
        en: ["break into"]
    },

    {
        vi: "không còn nữa",
        en: ["no longer", "not anymore"]
    },

    {
        vi: "tài sản",
        en: ["possession", "property", "valuable", "asset"]
    },

    {
        vi: "gặp gỡ",
        en: ["meet up with"]
    },

    {
        vi: "giữ liên lạc",
        en: ["keep in touch"]
    },

    {
        vi: "theo dõi",
        en: ["keep an eye on", "keep track of"]
    },

    {
        vi: "phần lớn",
        en: ["majority", "most"]
    },

    {
        vi: "có khả năng xảy ra",
        en: ["probable"]
    },

    {
        vi: "có lẽ",
        en: ["probably"]
    },

    {
        vi: "làm hài lòng",
        en: ["satisfy"]
    },

    {
        vi: "hài lòng (cho người)",
        en: ["satisfied"]
    },

    {
        vi: "hài lòng (cho vật)",
        en: ["satisfactory"]
    },

    {
        vi: "sự hài lòng",
        en: ["satisfaction"]
    },

    {
        vi: "kẹt xe",
        en: ["traffic jam", "traffic congestion", "gridlocked"]
    },

    {
        vi: "tuyển dụng",
        en: ["recruit", "take on", "employ"]
    },

    {
        vi: "biến mất",
        en: ["disappear", "vanish", "extinct", "dwindle"]
    },

    {
        vi: "dừng lại",
        en: ["cease", "stop", "halt"]
    },

    {
        vi: "xâm lược",
        en: ["invasion", "invade"]
    },

    {
        vi: "chiến lược",
        en: ["strategy", "scheme", "approach"]
    },

    {
        vi: "mục tiêu",
        en: ["objective"]
    },

    {
        vi: "khách quan",
        en: ["objective"]
    },

    {
        vi: "chủ quan",
        en: ["subjective"]
    },

    {
        vi: "trước khi",
        en: ["prior to", "before", "in advance"]
    },

    {
        vi: "chịu trách nhiệm cho",
        en: [
            "in charge of",
            "take over",
            "take responsibility for",
            "responsible for",
            "assume"
        ]
    },

    {
        vi: "khó chịu",
        en: ["offensive", "unpleasant"]
    },

    {
        vi: "đáng ngạc nhiên",
        en: ["incredible"]
    },

    {
        vi: "học thuyết",
        en: ["theory"]
    },

    {
        vi: "kỳ lạ",
        en: ["bizarre"]
    },

    {
        vi: "chẳng ích gì",
        en: ["there is no point in"]
    },

    {
        vi: "nói lầm bầm",
        en: ["mumble"]
    },

    {
        vi: "bắt kịp với",
        en: ["catch up with", "keep up with", "keep pace with"]
    },

    {
        vi: "hướng về phía nào",
        en: ["make for"]
    },

    {
        vi: "tấp xe vào lề",
        en: ["pull in"]
    },

    {
        vi: "xe cán, tông xe",
        en: ["run over"]
    },

    {
        vi: "đưa tiễn ai đó",
        en: ["see someone off"]
    },

    {
        vi: "khởi hành",
        en: ["set out", "set off"]
    },

    {
        vi: "đón ai",
        en: ["pick someone up"]
    },

    {
        vi: "thả ai xuống",
        en: ["drop someone off"]
    },

    {
        vi: "nói ra mà không suy nghĩ",
        en: ["off the top of someone's head"]
    },

    {
        vi: "yêu sâu đắm",
        en: ["head over heels"]
    },

    {
        vi: "rộng",
        en: ["broad"]
    },

    {
        vi: "chiều rộng",
        en: ["breadth"]
    },

    {
        vi: "mở rộng",
        en: ["broaden"]
    },

    {
        vi: "cư trú",
        en: ["inhabit"]
    },

    {
        vi: "cư dân",
        en: ["inhabitant"]
    },

    {
        vi: "không thể sống",
        en: ["uninhabitable"]
    },

    {
        vi: "có thể sống",
        en: ["inhabitable"]
    },

    {
        vi: "nhận ra, công nhận",
        en: ["recognize"]
    },

    {
        vi: "sự công nhận",
        en: ["recognition"]
    },

    {
        vi: "không thể nhận ra",
        en: ["unrecognizable"]
    },

    {
        vi: "có thể nhận ra",
        en: ["recognizable"]
    },

    {
        vi: "thế giới",
        en: ["world"]
    },

    {
        vi: "toàn thế giới",
        en: ["worldwide"]
    },

    {
        vi: "tiết lộ bí mật",
        en: ["let the cat out of the bag"]
    },

    {
        vi: "kết thúc công việc",
        en: ["call it a day"]
    },

    {
        vi: "kịp lúc",
        en: ["in the nick of time"]
    },

    {
        vi: "hào hứng",
        en: ["thrill"]
    },

    {
        vi: "vấn đề nhạy cảm (không dám nói)",
        en: ["the elephant in the room"]
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
        en: ["don't cry over spilled milk", "don't cry over spilt milk"]
    },

    {
        vi: "rất vui mừng, hạnh phúc",
        en: ["over the moon", "on cloud nine", "very happy"]
    },

    {
        vi: "không khỏe",
        en: ["under the weather"]
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
        en: ["relevant"]
    },

    {
        vi: "hạn chế",
        en: ["curb"]
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
        en: ["brush up on", "revise"]
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
        en: ["get round to"]
    },

    {
        vi: "dừng tham gia hoạt động",
        en: ["pull out"]
    },

    {
        vi: "bắt đầu thói quen",
        en: ["take to"]
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
        en: ["throw a party"]
    },

    {
        vi: "trầm tư suy nghĩ",
        en: ["meditative"]
    },

    {
        vi: "vui vẻ",
        en: ["gleeful"]
    },

    {
        vi: "nghiêm khắc",
        en: ["stern", "strict"]
    },

    {
        vi: "tuyệt vọng",
        en: ["desperate"]
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
        en: ["measure", "measurement"]
    },

    {
        vi: "dồi dào",
        en: ["abundant", "plentiful"]
    },

    {
        vi: "cần thứ gì",
        en: ["do with something"]
    },

    {
        vi: "người xem",
        en: ["onlooker", "viewer"]
    },

    {
        vi: "đáng kể",
        en: ["considerable", "significant"]
    },

    {
        vi: "dập lửa",
        en: ["put out", "extinguish"]
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
        en: ["bring out"]
    },

    {
        vi: "xuất hiện trong tâm trí ai đó",
        en: ["enter someone's mind", "enter someone's head"]
    },

    {
        vi: "chợt nghĩ",
        en: ["cross someone's mind", "cross someone's head"]
    },

    {
        vi: "quên mất",
        en: ["slip someone's mind"]
    },

    {
        vi: "trống rỗng",
        en: ["go blank"]
    },

    {
        vi: "hy vọng điều gì",
        en: ["in the hope of"]
    },

    {
        vi: "công thức nhờ vả",
        en: [
            "have someone do something",
            "get someone to do something",
            "have something done",
            "get something done"
        ]
    },

    {
        vi: "thích cái này hơn cái kia",
        en: ["prefer doing something to doing something"]
    },

    {
        vi: "chú ý đến",
        en: ["take notice of"]
    },

    {
        vi: "bị đuổi học",
        en: ["expelled from"]
    },

    {
        vi: "theo như",
        en: ["as far as"]
    },

    {
        vi: "miễn là",
        en: ["as long as"]
    },

    {
        vi: "bùng nổ",
        en: ["outbreak"]
    },

    {
        vi: "vui vẻ",
        en: ["light-hearted"]
    },

    {
        vi: "hiền hậu",
        en: ["warm-hearted"]
    },

    {
        vi: "hào phóng",
        en: ["big-hearted"]
    },

    {
        vi: "hết lòng",
        en: ["whole-hearted"]
    },

    {
        vi: "chắc hẳn đã",
        en: ["must have"]
    },

    {
        vi: "lẽ ra nên",
        en: ["should have"]
    },

    {
        vi: "có thể đã",
        en: ["can have", "could have"]
    },

    {
        vi: "xem là điều hiển nhiên",
        en: ["take something for granted"]
    },

    {
        vi: "truyền cảm hứng",
        en: ["thought-provoking"]
    },

    {
        vi: "quy định, luật lệ",
        en: ["regulation", "rule"]
    },

    {
        vi: "cãi lại / trả treo",
        en: ["talk back to"]
    },

    {
        vi: "tranh cãi",
        en: ["fall out"]
    },

    {
        vi: "hồi tưởng",
        en: ["think back on"]
    },

    {
        vi: "dựa vào",
        en: ["fall back on"]
    },

    {
        vi: "biểu diễn",
        en: ["put on a play"]
    },

    {
        vi: "trả thù",
        en: ["get back at"]
    },

    {
        vi: "nịnh bợ",
        en: ["make up to"]
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
        en: ["come up with"]
    },

    {
        vi: "ngã",
        en: ["fall over"]
    },

    {
        vi: "lùi",
        en: ["fall back"]
    },

    {
        vi: "rơi",
        en: ["fall off"]
    },

    {
        vi: "đối mặt với / gặp phải khó khăn, trở ngại",
        en: ["come up against"]
    },

    {
        vi: "dự định",
        en: ["be about to"]
    },

    {
        vi: "thường xuyên",
        en: ["on a regular basis"]
    },

    {
        vi: "bảo mật",
        en: ["confidential"]
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
        en: ["indifferent to"]
    },

    {
        vi: "người tị nạn",
        en: ["refugee"]
    },

    {
        vi: "có thói quen",
        en: ["in the habit of"]
    },

    {
        vi: "dù thế nào đi chăng nữa",
        en: [
            "no matter how",
            "however",
            "as"
        ]
    },

    {
        vi: "lẫn nhau",
        en: ["each other", "one another"]
    },

    {
        vi: "món hời / trả giá",
        en: ["bargain"]
    },

    {
        vi: "tiết lộ",
        en: ["reveal"]
    },

    {
        vi: "hoảng loạn",
        en: ["in panic"]
    },

    {
        vi: "làm cho thông gió",
        en: ["ventilate"]
    },

    {
        vi: "thoáng mát",
        en: ["breezy"]
    },

    {
        vi: "có gió lùa",
        en: ["draughty"]
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
        en: ["assemble"]
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
        en: ["discernible"]
    },

    {
        vi: "tăng lên",
        en: ["augment"]
    },

    {
        vi: "làm trầm trọng",
        en: ["exacerbate"]
    },

    {
        vi: "không thể tránh khỏi / tất yếu",
        en: ["inevitable"]
    },

    {
        vi: "sự cạn kiệt",
        en: ["depletion"]
    },

    {
        vi: "sự tàn phá",
        en: ["devastation"]
    },

    {
        vi: "sự chìm xuống",
        en: ["sinking"]
    },

    {
        vi: "nỗ lực",
        en: ["in a bid to"]
    },

    {
        vi: "chiến dịch",
        en: ["campaign"]
    },

    {
        vi: "tưởng tượng",
        en: ["envision"]
    },

    {
        vi: "đầu tư",
        en: ["invest in"]
    },

    {
        vi: "có lợi cho ai",
        en: ["do someone good"]
    },

    {
        vi: "đi đến kết luận",
        en: ["come to a conclusion"]
    },

    {
        vi: "trình bày sự việc",
        en: ["give an account of"]
    },

    {
        vi: "làm cho ai hiểu",
        en: ["drive it home to someone"]
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
        en: ["run riot"]
    },

    {
        vi: "truyền tải",
        en: ["convey"]
    },

    {
        vi: "thu nhỏ, co lại",
        en: ["shrink"]
    },

    {
        vi: "sa thải",
        en: [
            "dismiss",
            "sack",
            "lay off",
            "dismissal"
        ]
    },

    {
        vi: "người kiêu ngạo",
        en: ["snob"]
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
        en: ["commit a crime"]
    },

    {
        vi: "chọc ai đó",
        en: ["pull someone's leg"]
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
        en: ["run into", "come across"]
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
        en: ["committee"]
    },

    {
        vi: "cam kết",
        en: ["pledge"]
    },

    {
        vi: "người quan trọng",
        en: ["the apple of someone's eye"]
    },

    {
        vi: "biết rõ trong lòng bàn tay",
        en: ["the back of someone's hand"]
    },

    {
        vi: "sắp nhớ ra",
        en: ["the tip of someone's tongue"]
    },

    {
        vi: "thay mặt cho",
        en: ["on behalf of"]
    },

    {
        vi: "học bù",
        en: ["catch up on"]
    },

    {
        vi: "cân nhắc kỹ",
        en: ["contemplate"]
    },

    {
        vi: "phân biệt",
        en: ["differentiate"]
    },

    {
        vi: "khác",
        en: ["differ"]
    },

    {
        vi: "cuộc đình công",
        en: ["strike"]
    },

    {
        vi: "sự va chạm",
        en: ["collision"]
    },

    {
        vi: "hối lộ",
        en: ["bribery"]
    },

    {
        vi: "kĩ lưỡng, phức tạp",
        en: ["elaborate", "thorough"]
    },

    {
        vi: "ban đầu",
        en: ["initial"]
    },

    {
        vi: "người phạm lỗi",
        en: ["offender"]
    },

    {
        vi: "khai báo",
        en: ["make a statement"]
    },

    {
        vi: "bắt cóc",
        en: ["kidnap"]
    },

    {
        vi: "tống tiền",
        en: ["blackmail"]
    },

    {
        vi: "thiếu hụt",
        en: ["deficiency"]
    },

    {
        vi: "bắt giữ",
        en: ["arrest"]
    },

    {
        vi: "tuyên án",
        en: ["sentence"]
    },

    {
        vi: "bất kể",
        en: [
            "regardless of",
            "irrespective of"
        ]
    },

    {
        vi: "nỗ lực",
        en: ["pull someone's socks up"]
    },

    {
        vi: "che đậy",
        en: ["disguise"]
    },

    {
        vi: "bạn đồng hành",
        en: ["companion"]
    },

    {
        vi: "nghiêm trọng",
        en: ["crippling"]
    },

    {
        vi: "lừa kêu",
        en: ["braying"]
    },

    {
        vi: "cừu kêu",
        en: ["bleating"]
    },

    {
        vi: "đàn cá",
        en: ["shoals of fish", "schools of fish"]
    },

    {
        vi: "đàn kiến / đàn ong",
        en: ["swarms of ants", "swarms of bees"]
    },

    {
        vi: "đàn vịt / đàn chim",
        en: ["flocks of ducks", "flocks of birds"]
    },

    {
        vi: "đàn gia súc",
        en: ["herds of cattle"]
    },

    {
        vi: "đống quần áo",
        en: ["jumble of clothes"]
    },

    {
        vi: "tiền chuộc",
        en: ["ransom"]
    },

    {
        vi: "ngỗ ngược",
        en: ["unruly"]
    },

    {
        vi: "đám đông",
        en: ["mob"]
    },

    {
        vi: "cản trở",
        en: [
            "hinder",
            "deter"
        ]
    },

    {
        vi: "tranh cãi",
        en: [
            "dispute",
            "row",
            "quarrel",
            "argument",
            "squabble"
        ]
    },

    {
        vi: "cần thiết",
        en: ["indispensable"]
    },

    {
        vi: "rút lui",
        en: ["retreat"]
    },

    {
        vi: "đầu hàng",
        en: ["surrender"]
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
        en: ["skeptical"]
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
        en: ["out of practice"]
    },

    {
        vi: "sự tưởng tượng",
        en: ["imagination"]
    },

    {
        vi: "tưởng tượng",
        en: ["imagine"]
    },

    {
        vi: "giàu trí tưởng tượng",
        en: ["imaginative"]
    },

    {
        vi: "không có thật",
        en: ["imaginary"]
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
        en: ["get through"]
    },

    {
        vi: "giúp ai vượt qua khó khăn",
        en: ["help someone out"]
    },

    {
        vi: "thuế hải quan",
        en: ["customs duty"]
    },

    {
        vi: "viễn cảnh",
        en: ["prospect"]
    },

    {
        vi: "đổi lượt",
        en: ["take turns"]
    },

    {
        vi: "hít vào",
        en: ["inhale"]
    },

    {
        vi: "thở ra",
        en: ["exhale"]
    },

    {
        vi: "làm ai đó tỉnh lại",
        en: ["bring someone to"]
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
        en: ["confer"]
    },

    {
        vi: "xuất viện",
        en: ["discharged from"]
    },

    {
        vi: "người nhập cư",
        en: ["immigrant"]
    },

    {
        vi: "sự nhập cư",
        en: ["immigration"]
    },

    {
        vi: "hiểu lầm",
        en: ["get one's wires crossed"]
    },

    {
        vi: "nuốt lời",
        en: ["go back on someone's word"]
    },

    {
        vi: "hoàn toàn không",
        en: ["by no means"]
    },

    {
        vi: "chắc chắn",
        en: ["by all means"]
    },

    {
        vi: "dao động",
        en: ["fluctuate"]
    },

    {
        vi: "hóa ra",
        en: ["turn out"]
    },

    {
        vi: "là do",
        en: ["put down to"]
    },

    {
        vi: "hứng chịu, nhận lấy lời chỉ trích",
        en: ["come in for"]
    },

    {
        vi: "đề xuất",
        en: ["put forward"]
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
        en: ["stand in for"]
    },

    {
        vi: "nhìn thoáng qua",
        en: ["glimpse of"]
    },

    {
        vi: "xem xét kĩ",
        en: ["vet"]
    },

    {
        vi: "thích nghi",
        en: ["adapt to"]
    },

    {
        vi: "thừa kế",
        en: ["come into", "inherit"]
    },

    {
        vi: "người thừa kế",
        en: ["heir"]
    },

    {
        vi: "gọi điện cho ai",
        en: ["call someone up"]
    },

    {
        vi: "lọc, khử",
        en: ["purge"]
    },

    {
        vi: "tuổi thọ",
        en: ["life expectancy"]
    },

    {
        vi: "đảm nhận vị trí ai đó",
        en: ["step into someone's shoes"]
    },

    {
        vi: "một người quan trọng",
        en: ["a fat cat"]
    },

    {
        vi: "thuộc về trí tuệ",
        en: ["intellectual"]
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
        en: ["movement"]
    },

    {
        vi: "phát triển hơn",
        en: ["outgrow"]
    },

    {
        vi: "vượt trội",
        en: ["outclassed"]
    },

    {
        vi: "đông",
        en: ["outnumbered"]
    },

    {
        vi: "nhanh hơn (tốc độ)",
        en: ["outraced"]
    },

    {
        vi: "lấy lại phong độ, khẳng định năng lực",
        en: ["come into someone's own"]
    },

    {
        vi: "trọng tài (baseball, tennis)",
        en: ["umpire"]
    },

    {
        vi: "người kể lại",
        en: ["narrator"]
    },

    {
        vi: "giảm cân cấp tốc",
        en: ["put on a crash diet"]
    },

    {
        vi: "ăn ngấu nghiến",
        en: ["bolt"]
    },

    {
        vi: "đói cồn cào",
        en: ["hunger pangs"]
    },

    {
        vi: "đặc quyền",
        en: ["privilege"]
    },

    {
        vi: "khét tiếng",
        en: ["notorious"]
    },

    {
        vi: "nổi tiếng",
        en: ["noted"]
    },

    {
        vi: "thì thầm",
        en: ["put a bug in someone's ear"]
    },

    {
        vi: "đe dọa",
        en: ["threaten"]
    },

    {
        vi: "tò mò",
        en: ["inquisitive"]
    }

];


/* =========================================================
   CẤU HÌNH
   ========================================================= */

const STORAGE_KEY = "vocabWrongWords";

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

const promptElement = document.getElementById("prompt");
const answerInput = document.getElementById("answer");

const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");

const wrongBtn = document.getElementById("wrongBtn");
const wrongCount = document.getElementById("wrongCount");

const feedback = document.getElementById("feedback");

const streakElement = document.getElementById("streak");
const correctElement = document.getElementById("correct");
const remainingElement = document.getElementById("remaining");
const totalElement = document.getElementById("total");

const gameCard = document.getElementById("gameCard");
const gameOver = document.getElementById("gameOver");

const finalStreak = document.getElementById("finalStreak");
const overText = document.getElementById("overText");

const againBtn = document.getElementById("againBtn");
const reviewBtn = document.getElementById("reviewBtn");

const wrongPanel = document.getElementById("wrongPanel");
const closeWrongBtn = document.getElementById("closeWrongBtn");
const wrongList = document.getElementById("wrongList");
const retryWrongBtn = document.getElementById("retryWrongBtn");


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function loadWrongWords() {

    try {

        const data =
            localStorage.getItem(STORAGE_KEY);

        if (!data) {
            return [];
        }

        const parsed =
            JSON.parse(data);

        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed.filter(item =>
            item &&
            typeof item.vi === "string" &&
            Array.isArray(item.en) &&
            item.en.length > 0
        );

    } catch (error) {

        console.error(
            "Lỗi đọc localStorage:",
            error
        );

        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (_) {}

        return [];
    }
}


function saveWrongWords() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(wrongWords)
        );

    } catch (error) {

        console.error(
            "Lỗi lưu từ sai:",
            error
        );
    }
}


/* =========================================================
   CHUẨN HÓA
   ========================================================= */

function normalize(text) {

    return String(text ?? "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}


/* =========================================================
   PHÂN TÁCH ĐÁP ÁN
   ========================================================= */

function parseAnswers(text) {

    return String(text ?? "")
        .split("=")
        .map(item => normalize(item))
        .filter(item => item.length > 0);
}


/* =========================================================
   SO SÁNH
   ========================================================= */

function answersAreEqual(
    userAnswers,
    correctAnswers
) {

    const user =
        userAnswers
            .map(normalize)
            .filter(Boolean)
            .sort();

    const correct =
        correctAnswers
            .map(normalize)
            .filter(Boolean)
            .sort();

    if (user.length !== correct.length) {
        return false;
    }

    for (let i = 0; i < correct.length; i++) {

        if (user[i] !== correct[i]) {
            return false;
        }
    }

    return true;
}


/* =========================================================
   XÁO TRỘN
   ========================================================= */

function shuffle(array) {

    const result = [...array];

    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            result[i],
            result[j]
        ] = [
            result[j],
            result[i]
        ];
    }

    return result;
}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(text) {

    return String(text ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   CẬP NHẬT THỐNG KÊ
   ========================================================= */

function updateStats() {

    if (streakElement) {
        streakElement.textContent = streak;
    }

    if (correctElement) {
        correctElement.textContent = correct;
    }

    if (totalElement) {
        totalElement.textContent = gameTotal;
    }

    if (remainingElement) {

        let remaining =
            questionPool.length;

        if (currentQuestion) {
            remaining++;
        }

        remainingElement.textContent =
            remaining;
    }

    if (wrongCount) {
        wrongCount.textContent =
            wrongWords.length;
    }
}


/* =========================================================
   TÌM TỪ SAI
   ========================================================= */

function findWrongWord(question) {

    return wrongWords.find(item =>
        normalize(item.vi) ===
        normalize(question.vi)
    );
}


/* =========================================================
   THÊM TỪ SAI
   ========================================================= */

function addWrongWord(
    question,
    userAnswer
) {

    const existing =
        findWrongWord(question);

    if (existing) {

        existing.attempts =
            Number(existing.attempts || 1) + 1;

        existing.lastAnswer =
            userAnswer;

    } else {

        wrongWords.push({

            vi: question.vi,

            en: [...question.en],

            attempts: 1,

            lastAnswer: userAnswer

        });
    }

    saveWrongWords();

    renderWrongWords();

    updateStats();
}


/* =========================================================
   XÓA TỪ SAI KHI LÀM ĐÚNG
   ========================================================= */

function removeWrongWord(question) {

    const oldLength =
        wrongWords.length;

    wrongWords =
        wrongWords.filter(item =>
            normalize(item.vi) !==
            normalize(question.vi)
        );

    if (
        wrongWords.length !==
        oldLength
    ) {

        saveWrongWords();
    }

    renderWrongWords();

    updateStats();
}


/* =========================================================
   HIỂN THỊ CÂU HỎI
   ========================================================= */

function showQuestion(question) {

    currentQuestion =
        question;

    if (promptElement) {

        promptElement.textContent =
            question.vi;
    }

    if (answerInput) {

        answerInput.value = "";

        answerInput.disabled =
            false;

        setTimeout(() => {

            if (
                gameRunning &&
                answerInput
            ) {
                answerInput.focus();
            }

        }, 30);
    }

    if (submitBtn) {
        submitBtn.disabled = false;
    }

    if (feedback) {

        feedback.textContent = "";

        feedback.className =
            "feedback";
    }

    updateStats();
}


/* =========================================================
   CÂU HỎI TIẾP THEO
   ========================================================= */

function nextQuestion() {

    if (!gameRunning) {
        return;
    }


    /* -----------------------------------------
       CHẾ ĐỘ TỪ SAI:
       hết danh sách thì dừng
       ----------------------------------------- */

    if (
        questionPool.length === 0 &&
        gameMode === "wrong"
    ) {

        finishWrongReview();

        return;
    }


    /* -----------------------------------------
       CHẾ ĐỘ THƯỜNG:
       hết thì xáo trộn lại
       => chuỗi vô hạn
       ----------------------------------------- */

    if (
        questionPool.length === 0 &&
        gameMode === "normal"
    ) {

        questionPool =
            shuffle(vocabulary);
    }


    if (questionPool.length > 0) {

        const question =
            questionPool.pop();

        showQuestion(question);

    } else {

        finishWrongReview();
    }
}


/* =========================================================
   KIỂM TRA ĐÁP ÁN
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


    const rawAnswer =
        answerInput
            ? answerInput.value
            : "";


    const userAnswers =
        parseAnswers(rawAnswer);


    /* -----------------------------------------
       KHÔNG NHẬP
       ----------------------------------------- */

    if (userAnswers.length === 0) {

        if (feedback) {

            feedback.textContent =
                "⚠️ Hãy nhập đáp án.";

            feedback.className =
                "feedback wrong";
        }

        if (answerInput) {
            answerInput.focus();
        }

        return;
    }


    checkingAnswer = true;


    const isCorrect =
        answersAreEqual(
            userAnswers,
            currentQuestion.en
        );


    /* =====================================================
       ĐÚNG
       ===================================================== */

    if (isCorrect) {

        streak++;

        correct++;


        // Nếu từng sai thì xóa khỏi danh sách
        removeWrongWord(
            currentQuestion
        );


        if (feedback) {

            feedback.textContent =
                "✓ Chính xác!";

            feedback.className =
                "feedback correct";
        }


        if (answerInput) {
            answerInput.disabled = true;
        }

        if (submitBtn) {
            submitBtn.disabled = true;
        }


        updateStats();


        setTimeout(() => {

            checkingAnswer = false;

            if (!gameRunning) {
                return;
            }

            nextQuestion();

        }, 450);


        return;
    }


    /* =====================================================
       SAI
       ===================================================== */

    addWrongWord(
        currentQuestion,
        rawAnswer
    );


    if (feedback) {

        feedback.textContent =
            "✗ Sai! Chuỗi đã kết thúc.";

        feedback.className =
            "feedback wrong";
    }


    if (answerInput) {
        answerInput.disabled = true;
    }

    if (submitBtn) {
        submitBtn.disabled = true;
    }


    checkingAnswer = false;

    endGame();
}


/* =========================================================
   GAME OVER
   ========================================================= */

function endGame() {

    gameRunning = false;

    checkingAnswer = false;


    if (gameCard) {
        gameCard.classList.add("hidden");
    }

    if (gameOver) {
        gameOver.classList.remove("hidden");
    }


    if (finalStreak) {
        finalStreak.textContent =
            streak;
    }


    if (
        overText &&
        currentQuestion
    ) {

        const correctText =
            currentQuestion.en.join(
                " = "
            );

        const userText =
            answerInput
                ? answerInput.value.trim()
                : "";


        overText.innerHTML = `

            <div>
                <strong>Bạn trả lời:</strong><br>
                ${escapeHTML(
                    userText || "(bỏ trống)"
                )}
            </div>

            <div style="margin-top:12px;">
                <strong>Đáp án đúng:</strong><br>
                ${escapeHTML(correctText)}
            </div>

        `;
    }


    updateStats();
}


/* =========================================================
   KẾT THÚC ÔN TỪ SAI
   ========================================================= */

function finishWrongReview() {

    gameRunning = false;

    checkingAnswer = false;

    currentQuestion = null;


    if (gameCard) {
        gameCard.classList.add("hidden");
    }

    if (gameOver) {
        gameOver.classList.remove("hidden");
    }


    if (finalStreak) {
        finalStreak.textContent =
            streak;
    }


    if (overText) {

        if (wrongWords.length === 0) {

            overText.innerHTML =
                "🎉 Tuyệt vời! Bạn đã xử lý hết tất cả từ sai.";

        } else {

            overText.innerHTML =
                `✓ Đã làm lại xong lượt này.<br>
                 Hiện còn <strong>${wrongWords.length}</strong> từ sai.`;
        }
    }


    updateStats();
}


/* =========================================================
   BẮT ĐẦU GAME
   ========================================================= */

function startGame(
    words = vocabulary,
    mode = "normal"
) {

    if (
        !Array.isArray(words) ||
        words.length === 0
    ) {

        alert(
            "Không có từ vựng để chơi!"
        );

        return;
    }


    streak = 0;

    correct = 0;

    checkingAnswer = false;

    gameRunning = true;

    currentQuestion = null;

    gameMode = mode;


    questionPool =
        shuffle(words);


    gameTotal =
        questionPool.length;


    if (gameCard) {
        gameCard.classList.remove("hidden");
    }

    if (gameOver) {
        gameOver.classList.add("hidden");
    }


    if (feedback) {

        feedback.textContent = "";

        feedback.className =
            "feedback";
    }


    updateStats();

    nextQuestion();
}


/* =========================================================
   CHƠI LẠI TOÀN BỘ
   ========================================================= */

function restartGame() {

    startGame(
        vocabulary,
        "normal"
    );
}


/* =========================================================
   HIỂN THỊ TỪ SAI
   ========================================================= */

function renderWrongWords() {

    if (!wrongList) {
        return;
    }


    if (wrongWords.length === 0) {

        wrongList.innerHTML = `

            <div class="empty-wrong">
                🎉 Không có từ sai!
            </div>

        `;

        if (retryWrongBtn) {
            retryWrongBtn.disabled = true;
        }

        updateStats();

        return;
    }


    if (retryWrongBtn) {
        retryWrongBtn.disabled = false;
    }


    wrongList.innerHTML =
        wrongWords
            .map((item, index) => {

                const answers =
                    item.en.join(" = ");

                const attempts =
                    Number(
                        item.attempts || 1
                    );


                return `

                    <div class="wrong-item">

                        <div class="wrong-number">
                            ${index + 1}
                        </div>

                        <div class="wrong-content">

                            <div class="wrong-vi">
                                ${escapeHTML(item.vi)}
                            </div>

                            <div class="wrong-en">
                                ${escapeHTML(answers)}
                            </div>

                            <div class="wrong-attempts">
                                Sai ${attempts} lần
                            </div>

                        </div>

                    </div>

                `;

            })
            .join("");


    updateStats();
}


/* =========================================================
   MỞ DANH SÁCH TỪ SAI
   ========================================================= */

function openWrongPanel() {

    renderWrongWords();

    if (wrongPanel) {
        wrongPanel.classList.remove("hidden");
    }
}


/* =========================================================
   ĐÓNG DANH SÁCH TỪ SAI
   ========================================================= */

function closeWrongPanel() {

    if (wrongPanel) {
        wrongPanel.classList.add("hidden");
    }
}


/* =========================================================
   LÀM LẠI TẤT CẢ TỪ SAI
   ========================================================= */

function retryWrongWords() {

    if (wrongWords.length === 0) {

        alert(
            "Hiện tại không có từ sai."
        );

        return;
    }


    /*
       Tạo bản sao.

       Ví dụ hiện có:
       10 từ sai

       => chỉ chơi 10 từ đó.
       Không nhảy sang vocabulary.
    */

    const wordsToReview =
        wrongWords.map(item => ({

            vi: item.vi,

            en: [...item.en]

        }));


    closeWrongPanel();


    startGame(
        wordsToReview,
        "wrong"
    );
}


/* =========================================================
   NÚT CHƠI LẠI SAU GAME OVER
   ========================================================= */

function playAgain() {

    startGame(
        vocabulary,
        "normal"
    );
}


/* =========================================================
   NÚT ÔN TỪ SAI SAU GAME OVER
   ========================================================= */

function reviewWrongWords() {

    if (wrongWords.length === 0) {

        alert(
            "Không còn từ sai!"
        );

        return;
    }

    retryWrongWords();
}


/* =========================================================
   ENTER
   ========================================================= */

function handleAnswerKeydown(event) {

    if (event.key === "Enter") {

        event.preventDefault();

        checkAnswer();
    }
}


/* =========================================================
   GÁN SỰ KIỆN
   ========================================================= */

function setupEvents() {

    if (submitBtn) {

        submitBtn.addEventListener(
            "click",
            checkAnswer
        );
    }


    if (answerInput) {

        answerInput.addEventListener(
            "keydown",
            handleAnswerKeydown
        );
    }


    if (restartBtn) {

        restartBtn.addEventListener(
            "click",
            restartGame
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
            retryWrongWords
        );
    }


    if (againBtn) {

        againBtn.addEventListener(
            "click",
            playAgain
        );
    }


    if (reviewBtn) {

        reviewBtn.addEventListener(
            "click",
            reviewWrongWords
        );
    }


    if (wrongPanel) {

        wrongPanel.addEventListener(
            "click",
            function(event) {

                if (
                    event.target ===
                    wrongPanel
                ) {

                    closeWrongPanel();
                }
            }
        );
    }
}


/* =========================================================
   KIỂM TRA DỮ LIỆU
   ========================================================= */

function validateVocabulary() {

    if (!Array.isArray(vocabulary)) {

        console.error(
            "vocabulary không phải array."
        );

        return false;
    }


    if (vocabulary.length === 0) {

        console.error(
            "Danh sách vocabulary đang rỗng."
        );

        return false;
    }


    let valid = true;


    vocabulary.forEach(
        (item, index) => {

            if (
                !item ||
                typeof item.vi !== "string" ||
                item.vi.trim() === ""
            ) {

                console.error(
                    `Từ ${index + 1} thiếu nghĩa tiếng Việt.`
                );

                valid = false;
            }


            if (
                !item ||
                !Array.isArray(item.en) ||
                item.en.length === 0
            ) {

                console.error(
                    `Từ ${index + 1} thiếu đáp án tiếng Anh.`
                );

                valid = false;
            }

        }
    );


    return valid;
}


/* =========================================================
   KHỞI ĐỘNG
   ========================================================= */

function initialize() {

    if (!validateVocabulary()) {
        return;
    }


    wrongWords =
        loadWrongWords();


    setupEvents();

    renderWrongWords();

    updateStats();


    startGame(
        vocabulary,
        "normal"
    );


    console.log(
        "================================="
    );

    console.log(
        "VOCAB STREAK đã khởi động!"
    );

    console.log(
        "Tổng số từ:",
        vocabulary.length
    );

    console.log(
        "Số từ sai:",
        wrongWords.length
    );

    console.log(
        "================================="
    );
}


/* =========================================================
   CHẠY
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialize
    );

} else {

    initialize();
}
