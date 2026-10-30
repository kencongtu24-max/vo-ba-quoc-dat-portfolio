export const roles = [
  { key: "it", icon: "💻", label: "Information Technology Student", target: "it" },
  { key: "robo", icon: "🤖", label: "Robotics Instructor & Competition Coach", target: "robotics" },
];

// Short intro shown under the name at the top of the page.
export const headline =
  "Sinh viên Công nghệ Thông tin tại Trường Đại học Đông Á, định hướng Web & Software Development. Tự xây dựng ứng dụng web từ phân tích yêu cầu, thiết kế, lập trình đến triển khai thực tế; đồng thời giảng dạy và huấn luyện đội tuyển Robotics.";

export const aboutInfo = [
  { icon: "🎂", label: "Ngày sinh", value: "02/11/2004" },
  { icon: "📍", label: "Quê quán", value: "Hà Tĩnh" },
  { icon: "🏠", label: "Nơi ở hiện tại", value: "Đà Nẵng" },
];

export const education = [
  { title: "Đại học Đông Á – Đà Nẵng", detail: "Ngành Công nghệ thông tin · Khóa K25" },
];

export const itSkills = [
  {
    cat: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS", "Bootstrap", "React Router", "Recharts"],
  },
  {
    cat: "Backend",
    items: ["Node.js", "Express", "NestJS", "Python", "Django", "Java", "Spring Boot", "Prisma", "TypeORM", "REST API", "JWT"],
  },
  { cat: "Database", items: ["PostgreSQL", "MySQL", "SQL Server", "Qdrant"] },
  {
    cat: "DevOps",
    items: ["Docker", "Nginx", "Caddy", "Cloudflare Tunnel", "Vercel", "Render", "GitHub Actions"],
  },
  { cat: "Testing", items: ["Playwright", "Node Test Runner", "Django Test"] },
  { cat: "Tools", items: ["Git", "GitHub", "FFmpeg"] },
  {
    cat: "AI",
    items: ["Claude API", "OpenAI API", "RAG", "AI Agent", "Whisper", "VieNeu-TTS", "CosyVoice"],
  },
];

export const itPersonalProjects = [
  {
    tag: "Ứng dụng AI",
    title: "PersonalAIAgentPro",
    repo: "", // link GitHub mã nguồn, để trống thì ẩn nút
    image: "projects/personalaiagentpro.jpg",
    desc: "Aether — trợ lý AI cá nhân gom trò chuyện AI, AI Agent, kiến thức, công việc, dự án và hỗ trợ lập trình vào một nơi, trên dữ liệu của chính người dùng.",
    features: [
      "AI Chat stream câu trả lời, tự tìm trong kiến thức cá nhân (RAG) và trích nguồn tới đúng đoạn, mục và số trang.",
      "AI Agent lập kế hoạch và gọi công cụ tạo / sửa việc, dự án, kiến thức; mỗi hành động ghi dữ liệu đều chờ người dùng duyệt.",
      "Nhiều người dùng bằng mã mời, xác thực 2 lớp (TOTP), mã hoá API key AES-256-GCM, xuất / nhập dữ liệu JSON, Markdown.",
      "Triển khai Docker Compose với HTTPS, sao lưu tự động, giám sát và cảnh báo; giao diện sáng / tối đạt WCAG 2.2 AA.",
      "Chế độ chat lập trình, trò chuyện bằng giọng nói, thông báo đẩy và cài lên điện thoại (PWA).",
      "Công việc dạng Kanban kéo – thả, việc con, việc lặp lại, nhắc việc; lịch tuần kéo việc đổi hạn; dự án theo dõi tiến độ.",
      "Kho kiến thức: ghi chú, tải PDF / Word, chia đoạn theo mục / trang, tìm kiếm ngữ nghĩa.",
      "Bảng lệnh ⌘K tạo việc bằng câu tự nhiên tiếng Việt.",
    ],
    tools: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Vite",
      "NestJS 11",
      "TypeORM",
      "PostgreSQL 16",
      "Qdrant",
      "Claude API",
      "OpenAI API",
      "Web Push",
      "Docker Compose",
      "Nginx",
      "Caddy",
      "Cloudflare Tunnel",
      "Playwright",
      "GitHub Actions",
    ],
  },
  { tag: "Ứng dụng AI", title: "AIStudyAssistant", desc: "Trợ lý học tập tích hợp AI." },
  {
    tag: "Ứng dụng quản lý",
    title: "FinFlow",
    repo: "", // link GitHub mã nguồn, để trống thì ẩn nút
    desc: "Ứng dụng quản lý chi tiêu cá nhân chạy hoàn toàn trên trình duyệt; dữ liệu lưu cục bộ, không gửi đi đâu.",
    link: "https://quan-ly-chi-tieu-gilt.vercel.app/#/dashboard",
    image: "projects/finflow.jpg",
    features: [
      "Danh mục tuỳ chỉnh biểu tượng, màu; ngân sách theo tháng và theo danh mục, cảnh báo sắp hết / vượt.",
      "Chi cố định hằng tuần / tháng / năm, tự ghi nhận giao dịch khi đến hạn.",
      "Báo cáo theo ngày, tháng, danh mục, so sánh với kỳ trước; mỗi biểu đồ có dạng bảng đi kèm.",
      "Tìm kiếm nhanh ⌘K, giao diện sáng / tối, xuất CSV, PDF, JSON để sao lưu và khôi phục.",
      "Nhiều tài khoản (tiền mặt, ngân hàng, ví điện tử, thẻ), chuyển tiền giữa các tài khoản.",
      "Mục tiêu tiết kiệm: nạp / rút, theo dõi tiến độ, tính số tiền cần góp mỗi tháng.",
      "Tổng quan số dư, thu nhập, chi tiêu, tiết kiệm; biểu đồ 6 tháng, ngân sách và các khoản sắp tới.",
      "Thêm, sửa, xoá thu – chi có hoàn tác; lịch sử giao dịch tìm kiếm không dấu, lọc và sắp xếp.",
    ],
    tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "localStorage"],
  },
  {
    tag: "Ứng dụng quản lý",
    title: "TaskFlow",
    repo: "", // link GitHub mã nguồn, để trống thì ẩn nút
    image: "projects/taskflow.jpg",
    desc: "Hệ thống quản lý dự án và công việc trực tuyến, phân quyền theo vai trò trong từng dự án.",
    features: [
      "Bảng Kanban kéo – thả, tự báo khi người khác vừa cập nhật; lịch công việc theo hạn chót.",
      "Phân quyền 4 vai trò: Chủ dự án, Quản lý, Thành viên, Người xem.",
      "Thông báo trong ứng dụng và qua email khi được giao việc, có bình luận mới hoặc đổi trạng thái.",
      "Bình luận, nhật ký hoạt động, tệp đính kèm có kiểm soát quyền tải và giới hạn dung lượng.",
      "Quản lý công việc: độ ưu tiên, người thực hiện, hạn chót, cảnh báo quá hạn, công việc con và nhãn màu.",
      "Quản lý dự án: thành viên, trạng thái, thời gian, % tiến độ; tìm kiếm và lọc dự án, công việc.",
      "Xuất công việc ra CSV, giao diện sáng / tối, API JSON chỉ đọc và trang quản trị Django.",
      "Đăng ký, đăng nhập, hồ sơ cá nhân; trang tổng quan với thống kê cá nhân.",
    ],
    tools: ["Python", "Django 5.2", "Bootstrap 5", "Django Admin", "JSON API", "Django Test"],
  },
  {
    tag: "Ứng dụng quản lý",
    title: "UniManage",
    repo: "", // link GitHub mã nguồn, để trống thì ẩn nút
    desc: "Hệ thống quản lý sinh viên cấp toàn trường cho 8 vai trò, từ Phòng Đào tạo, Phòng CTSV, Khoa, Cố vấn học tập, Giảng viên đến Cán bộ lớp và Sinh viên; mỗi vai trò thấy và thao tác đúng phạm vi của mình.",
    image: "projects/unimanage.jpg",
    features: [
      "Đăng ký học phần tự phục vụ: kiểm tra trùng môn, trùng lịch, môn tiên quyết, tín chỉ và sĩ số trong transaction.",
      "Nhập điểm thành phần, tự tính điểm tổng kết, điểm chữ, GPA theo cấu hình; khoá điểm theo học phần.",
      "Chuyên cần theo buổi, thời khoá biểu, lịch thi; cảnh báo học vụ quét tự động theo ngưỡng cấu hình.",
      "Rèn luyện, khen thưởng, kỷ luật, học bổng, hoạt động; đơn từ qua nhiều bước duyệt, lưu lịch sử.",
      "Dashboard và báo cáo theo vai trò, xuất Excel, in PDF; nhật ký hoạt động, sao lưu / khôi phục cấu hình.",
      "Quản lý khoa, ngành, khoá, lớp, giảng viên, môn học (có môn tiên quyết); nhập / xuất Excel có kiểm tra trùng.",
      "Hồ sơ sinh viên nhiều tab, tìm kiếm, lọc, chuyển lớp / ngành / trạng thái có lịch sử, in hồ sơ A4.",
      "Thông báo theo phạm vi trường / khoa / khoá / lớp / cá nhân, có mức độ quan trọng và trạng thái đã đọc.",
    ],
    tools: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Recharts",
      "ExcelJS",
      "Node.js",
      "Express",
      "Prisma ORM",
      "PostgreSQL 16",
      "JWT",
      "bcrypt",
      "Vercel",
      "Render",
    ],
  },
  {
    tag: "Ứng dụng quản lý",
    title: "AcademyHub",
    repo: "", // link GitHub mã nguồn, để trống thì ẩn nút
    image: "projects/academyhub.jpg",
    desc: "Hệ thống quản lý trung tâm đào tạo Robotics: lớp học, học viên, giáo viên, học phí và cổng thông tin cho phụ huynh.",
    features: [
      "Điểm danh theo buổi: tự cộng buổi đã dạy, tính % chuyên cần, vắng thì tạo yêu cầu học bù và báo phụ huynh.",
      "Cổng phụ huynh: lịch học, điểm danh, học bạ, ảnh lớp, học phí và nhắn tin với giáo viên.",
      "Học phí: gói học, hoá đơn, công nợ tự tính quá hạn, thu nhiều lần, in phiếu thu; sổ thu – chi theo tháng, xuất CSV.",
      "Phân quyền 5 vai trò (Admin, Quản lý, Giáo viên, Tư vấn viên, Phụ huynh), kiểm tra quyền ở server; nhật ký thao tác trước / sau.",
      "Lịch làm việc theo tuần (lịch dạy, ca làm, lịch hẹn), tự sinh các buổi còn lại của lớp theo lịch cố định.",
      "Chuyển học viên học thử thành học viên chính thức: tạo hồ sơ, xếp lớp và hoá đơn học phí.",
      "Báo cáo học viên, chuyển đổi học thử, chuyên cần, thu – chi, công nợ, giờ dạy; sao lưu CSDL tự động hằng ngày.",
      "Tài liệu theo lớp, tài liệu chung và nội bộ; thông báo trong ứng dụng kèm hàng đợi SMS / Zalo cho phụ huynh.",
    ],
    tools: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "Docker Compose",
      "Caddy",
      "Node Test Runner",
    ],
  },
  { tag: "Ứng dụng quản lý", title: "ClassHub", desc: "Website quản lý lớp học." },
  { tag: "Nền tảng học tập", title: "EduLearn", desc: "Website cung cấp khóa học trực tuyến." },
  {
    tag: "Website giới thiệu",
    title: "HeritageGo Hội An",
    repo: "", // link GitHub mã nguồn, để trống thì ẩn nút
    desc: "Hướng dẫn viên trực tuyến cho Làng gốm Thanh Hà và Làng rau Trà Quế — Công trình thanh niên Chuyển đổi số của Đoàn Thanh niên Trường Đại học Đông Á và Đoàn Thanh niên Phường Hội An Tây.",
    link: "https://huongdanvien.tuoitredaihocdonga.org.vn",
    image: "projects/heritagego.jpg",
    features: [
      "Thuyết minh thu sẵn 5 ngôn ngữ (Việt, Anh, Trung, Nhật, Hàn), khoảng 189 phút âm thanh cho hai làng nghề.",
      "Nghe từng mục hoặc toàn bài; tự mở và cuộn tới mục đang đọc, đổi ngôn ngữ vẫn nghe tiếp đúng mục.",
      "Điều khiển từ màn hình khóa, tai nghe (Media Session) và phím tắt.",
      "Trình phát cố định: tua, chỉnh tốc độ 0,75×–1,5×, tự chuyển mục, nhớ chỗ đang nghe khi mở lại trang.",
      "Thư viện ảnh phóng to, vuốt chuyển ảnh; bản đồ Google Maps có nút chỉ đường.",
      "Nhạc nền acoustic phát lặp, tự tạm dừng khi chuyển tab, bật/tắt và ghi nhớ lựa chọn.",
      "Nút liên hệ Zalo / Gọi điện, màu sắc riêng cho từng làng, hiển thị tốt trên điện thoại.",
    ],
    tools: ["React 18", "Vite 5", "Web Audio API", "Media Session API", "VieNeu-TTS", "CosyVoice 2", "Whisper", "FFmpeg", "Google Maps"],
  },
];

// Team projects: add { tag, title, desc } here; when empty, "Sắp ra mắt" is shown.
export const itTeamProjects = [];

export const roboSkills = [
  "Robocode",
  "RoboSim",
  "Robocon",
  "Robot Assembly",
  "Robot Programming",
  "3D Design / 3D Printing",
  "Competition Strategy",
];

export const roboActivities = [
  { icon: "🎓", label: "Đào tạo Robotics" },
  { icon: "🧑‍🏫", label: "Robotics 1 vs 1" },
  { icon: "🏆", label: "Huấn luyện thi đấu" },
  { icon: "🗺️", label: "Thiết kế sa bàn" },
  { icon: "🖨️", label: "Thiết kế / in khung 3D" },
  { icon: "💻", label: "Xây dựng & tối ưu Code & Robot" },
];

export const roboExperience = [
  "Trực tiếp giảng dạy và huấn luyện học viên lắp ráp, lập trình, điều khiển và tối ưu robot từ cơ bản đến nâng cao.",
  "Hướng dẫn lập trình trên Robosim, Robocode và môi trường kéo – thả; xây dựng chương trình điều khiển chuyển động, xoay góc, cảm biến, gắp và phân loại vật thể.",
  "Hướng dẫn sử dụng Color Sensor, phân tích và sửa lỗi chương trình, tối ưu code nhằm nâng cao tốc độ, độ chính xác và tính ổn định của robot.",
  "Trực tiếp huấn luyện đội tuyển luyện đề, thi thử và thi đấu, xây dựng chiến thuật, phương án xử lý bài và điều chỉnh robot theo từng sa bàn.",
  "Theo dõi tiến độ, đánh giá năng lực và hỗ trợ học viên phát triển tư duy logic, thuật toán và kỹ năng giải quyết vấn đề.",
  "Đồng hành cùng các đội tuyển tham gia các giải Robotics, Robocode, RoboSim, đạt nhiều thành tích cao tại các cuộc thi cấp địa phương, thành phố Đà Nẵng và khu vực Miền Trung.",
];

export const achievements = [
  { tier: "gold", badge: "🥇", title: "Vô Địch", desc: "Vòng loại Khu vực Miền Trung, bảng R1", count: "1 đội" },
  { tier: "gold", badge: "🥇", title: "Vô Địch", desc: "Chung kết Robotics Thành phố Đà Nẵng, bảng R1", count: "1 đội" },
  { tier: "gold", badge: "🥇", title: "Giải Nhất", desc: "Vòng loại Robocode — Phường Ngũ Hành Sơn, bảng R1", count: "1 đội" },
  { tier: "gold", badge: "🥇", title: "Giải Nhất", desc: "Ngày hội STEM — Phường Hòa Khánh, bảng R1", count: "1 đội" },
  { tier: "silver", badge: "🥈", title: "Giải Nhì", desc: "Chung kết Robotics Thành phố Đà Nẵng, bảng R1", count: "2 đội" },
  { tier: "bronze", badge: "🥉", title: "Giải Ba", desc: "Vòng loại Khu vực Miền Trung, bảng R1", count: "1 đội" },
  { tier: "bronze", badge: "🥉", title: "Giải Ba", desc: "Các cuộc thi RoboSim/Robocode Thành phố Đà Nẵng", count: "Nhiều đội" },
  { tier: "encourage", badge: "🏅", title: "Khuyến Khích", desc: "Vòng loại Khu vực Miền Trung, bảng R1", count: "1 đội" },
  { tier: "encourage", badge: "🏅", title: "Giải Khuyến Khích", desc: "Các cuộc thi RoboSim/Robocode Thành phố Đà Nẵng", count: "Nhiều đội" },
];

export const contacts = [
  { label: "Email", value: "vquocdat.tech@gmail.com", href: "mailto:vquocdat.tech@gmail.com", icon: "mail" },
  { label: "Điện thoại", value: "0364 009 204", href: "tel:0364009204", icon: "phone" },
  { label: "GitHub", value: "Quốc Đạt", href: "https://github.com/kencongtu24-max", icon: "github" },
  { label: "Facebook", value: "Quốc Đạt", href: "https://web.facebook.com/w.daw.04/", icon: "facebook" },
];

// Keyed by field: `it` and `robo` each render in their own part of the page.
export const experience = {
  robo: {
    points: roboExperience,
  },
  it: {
    points: [
      "Tự xây dựng các ứng dụng web hoàn chỉnh từ thiết kế, frontend, backend đến triển khai: trợ lý AI, quản lý chi tiêu, quản lý dự án, quản lý sinh viên, quản lý trung tâm đào tạo.",
      "Thực hiện HeritageGo Hội An — công trình thanh niên Chuyển đổi số, thuyết minh 5 ngôn ngữ cho hai làng nghề.",
    ],
  },
};

export const goals = {
  it: {
    tagline: "Build. Learn. Innovate.",
    text: "Tập trung phát triển Web Development & Software Engineering, hướng đến trở thành một Software Developer chuyên nghiệp, luôn sẵn sàng khám phá công nghệ mới và tạo ra những giải pháp thông minh, hiệu quả và có giá trị.",
  },
  robo: {
    tagline: "Design. Program. Compete.",
    text: "Hướng đến xây dựng những robot thông minh, tối ưu và sáng tạo, đồng thời chia sẻ kiến thức và đồng hành cùng học sinh trong quá trình học tập, sáng tạo và chinh phục các cuộc thi Robotics.",
  },
};
