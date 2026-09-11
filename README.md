# Võ Bá Quốc Đạt — Trang cá nhân

Trang cá nhân (portfolio) giới thiệu hai vai trò: **sinh viên Công nghệ thông tin** tại Đại học Đông Á và **Robotics Instructor & Competition Coach**. Xây dựng bằng React + Vite, có chế độ sáng/tối, hiệu ứng cuộn và chuyển trang mượt.

🔗 Xem trực tiếp: [tinyurl.com/voquocdat](https://tinyurl.com/voquocdat) (link gốc: https://kencongtu24-max.github.io/vo-ba-quoc-dat-portfolio/)

## Tính năng

- Chuyển đổi giữa 2 trang nội dung: **IT** và **Robotics**, mỗi trang có màu accent riêng
- Dark/Light mode, lưu lựa chọn vào `localStorage`, không bị chớp sai theme lúc tải trang
- Hiệu ứng cuộn xuất hiện dần (`Reveal`), chuyển trang fade/slide, nút Back-to-top
- Card phong cách kính mờ (glass) cho kỹ năng, dự án, thành tích, hoạt động, liên hệ
- Nền hiệu ứng Aurora (WebGL qua `ogl`) và text hiệu ứng blur-in
- Tối ưu SEO cơ bản: meta description, Open Graph, Twitter Card, favicon

## Công nghệ sử dụng

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [motion](https://motion.dev/) — animation
- [ogl](https://github.com/oframe/ogl) — nền Aurora WebGL

## Cấu trúc thư mục

```
src/
├── components/       # Navbar, Hero, Footer, các trang IT/Robotics, ThemeToggle...
├── content/          # Component hiệu ứng dùng lại (Aurora, BlurText, SpotlightCard)
├── hooks/            # useTheme
├── data.js           # Nội dung: kỹ năng, dự án, thành tích, liên hệ...
├── App.jsx / App.css # Layout chính & style tổng thể
└── main.jsx          # Entry point
```

## Bắt đầu

```bash
npm install       # cài dependencies
npm run dev       # chạy dev server (Vite)
npm run build     # build production vào thư mục dist/
npm run preview   # xem thử bản build
```

## Chỉnh sửa nội dung

Hầu hết nội dung (kỹ năng, dự án, thành tích thi đấu, thông tin liên hệ...) nằm trong [`src/data.js`](src/data.js) — chỉ cần sửa file này mà không cần đụng vào component.

## Liên hệ

- Email: kencongtu24@gmail.com
- GitHub: [@kencongtu24-max](https://github.com/kencongtu24-max)
- Facebook: [Quốc Đạt](https://web.facebook.com/w.daw.04/)
