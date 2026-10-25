# Võ Bá Quốc Đạt — Trang cá nhân

Portfolio giới thiệu hai vai trò của mình: **sinh viên Công nghệ thông tin** tại Đại học Đông Á và **Robotics Instructor & Competition Coach**. Trang gồm thông tin cá nhân, kỹ năng, các dự án phần mềm đã làm và thành tích huấn luyện Robotics.

🔗 **Xem trực tiếp:** [tinyurl.com/voquocdat](https://tinyurl.com/voquocdat) · link gốc: https://kencongtu24-max.github.io/vo-ba-quoc-dat-portfolio/

![Trang chủ](docs/screenshots/home.jpg)

## Nội dung trang

| Trang | Nội dung |
|---|---|
| **Trang chủ** | Giới thiệu, thông tin cá nhân, lối vào hai trang IT và Robotics |
| **IT** (`#it`) | Kỹ năng theo nhóm (Frontend, Backend, Database, DevOps, Testing, Tools, AI), 6 dự án nổi bật và các dự án khác, mục tiêu |
| **Robotics** (`#robotics`) | Kỹ năng, hoạt động, kinh nghiệm giảng dạy và huấn luyện, thành tích thi đấu, mục tiêu |

### Dự án nổi bật

| Dự án | Mô tả ngắn | Công nghệ chính |
|---|---|---|
| **PersonalAIAgentPro** | Trợ lý AI cá nhân: chat có RAG trích nguồn, AI Agent chờ duyệt, kho kiến thức, công việc | React 19, NestJS, PostgreSQL, Qdrant, Claude / OpenAI API |
| **FinFlow** | Quản lý chi tiêu cá nhân chạy hoàn toàn trên trình duyệt · [xem website](https://quan-ly-chi-tieu-gilt.vercel.app/#/dashboard) | React, TypeScript, Recharts |
| **TaskFlow** | Quản lý dự án và công việc, Kanban, phân quyền 4 vai trò | Django 5.2, Bootstrap 5 |
| **UniManage** | Quản lý sinh viên toàn trường cho 8 vai trò | React 19, Express, Prisma, PostgreSQL |
| **AcademyHub** | Quản lý trung tâm đào tạo Robotics, có cổng phụ huynh | React, Express, PostgreSQL, Docker Compose |
| **HeritageGo Hội An** | Hướng dẫn viên trực tuyến, thuyết minh 5 ngôn ngữ · [xem website](https://huongdanvien.tuoitredaihocdonga.org.vn) | React 18, Web Audio API, Media Session API |

![Thẻ dự án trên trang IT](docs/screenshots/projects.jpg)

## Giao diện

- **Thẻ dự án dạng trưng bày:** ảnh chụp giao diện thật đặt trong khung trình duyệt, xen kẽ trái/phải. Thanh địa chỉ hiện tên miền thật cho dự án có website (kèm nhãn "Đang chạy trực tuyến"), còn dự án chạy trên máy hiện dạng `tenduan.local`.
- **Thu gọn thông minh:** mỗi dự án hiện 3 chức năng nổi bật và tối đa 8 công nghệ, phần còn lại mở bằng "Thêm N chức năng" và ô `+N`.
- **Logo công nghệ** cho nhãn kỹ năng và công nghệ (từ [Simple Icons](https://simpleicons.org/)); logo màu quá tối tự đổi theo màu chữ để đọc được ở cả hai chế độ.
- **Sáng / tối** theo hệ thống hoặc chọn tay, lưu vào `localStorage`, không chớp sai màu khi tải trang.
- Nền Aurora (WebGL), hiệu ứng xuất hiện khi cuộn, thanh tiến độ cuộn, nút lên đầu trang.
- Hiển thị tốt trên điện thoại; tôn trọng chế độ giảm chuyển động (`prefers-reduced-motion`).
- SEO cơ bản: meta description, Open Graph, Twitter Card, favicon.

## Công nghệ sử dụng

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [motion](https://motion.dev/) — animation
- [ogl](https://github.com/oframe/ogl) — nền Aurora WebGL
- [simple-icons](https://github.com/simple-icons/simple-icons) — logo công nghệ
- GitHub Actions + GitHub Pages — tự động build và triển khai

## Cấu trúc thư mục

```
├── public/
│   └── projects/         # Ảnh chụp giao diện các dự án
├── docs/screenshots/     # Ảnh dùng trong README
├── src/
│   ├── components/       # Navbar, Hero, trang IT / Robotics, TechLogo, ThemeToggle...
│   ├── content/          # Component hiệu ứng dùng lại (Aurora, BlurText, SpotlightCard)
│   ├── hooks/            # useTheme
│   ├── data.js           # Toàn bộ nội dung: kỹ năng, dự án, thành tích, liên hệ...
│   ├── techIcons.js      # Ghép tên công nghệ với logo
│   ├── App.jsx / App.css # Layout chính và style
│   └── main.jsx          # Điểm khởi chạy
└── .github/workflows/deploy.yml
```

## Chạy trên máy

Yêu cầu Node.js 20 trở lên.

```bash
npm install       # cài thư viện
npm run dev       # chạy dev server
npm run build     # build bản production vào dist/
npm run preview   # xem thử bản build
```

## Chỉnh sửa nội dung

Hầu hết nội dung nằm trong [`src/data.js`](src/data.js), sửa file này là đủ, không cần đụng vào component.

Mỗi dự án trong `itPersonalProjects` có các trường:

| Trường | Ý nghĩa |
|---|---|
| `tag`, `title`, `desc` | Loại dự án, tên, mô tả ngắn |
| `image` | Ảnh giao diện, đặt trong `public/projects/` (ví dụ `"projects/finflow.jpg"`, tỉ lệ 16:9 hoặc 16:10) |
| `link` | Website đang chạy — có thì hiện nút "Xem website", nhãn "Đang chạy trực tuyến" và tên miền thật trên khung ảnh; để trống thì khung ảnh hiện `tenduan.local` |
| `repo` | Link GitHub mã nguồn — để trống thì nút "Mã nguồn" được ẩn |
| `features` | Danh sách chức năng; **3 dòng đầu luôn hiện ra**, nên đặt điểm mạnh nhất lên đầu |
| `tools` | Công nghệ; 8 mục đầu hiện ra, phần còn lại nằm trong ô `+N` |

Dự án có `features` hiện thành thẻ lớn; dự án chỉ có `tag`, `title`, `desc` nằm trong mục "Dự án khác".

**Thêm logo cho công nghệ mới:** thêm một dòng vào `RULES` trong [`src/techIcons.js`](src/techIcons.js), ví dụ `[/^redis/i, siRedis]` (nhớ import `siRedis` từ `simple-icons`). Công nghệ không có logo sẽ chỉ hiện chữ.

## Triển khai

Mỗi lần push lên nhánh `main`, workflow [`deploy.yml`](.github/workflows/deploy.yml) tự build và đăng lên GitHub Pages. Có thể chạy tay trong tab **Actions** (`workflow_dispatch`).

## Liên hệ

- Email: [vquocdat.tech@gmail.com](mailto:vquocdat.tech@gmail.com)
- GitHub: [@kencongtu24-max](https://github.com/kencongtu24-max)
- Facebook: [Quốc Đạt](https://web.facebook.com/w.daw.04/)
