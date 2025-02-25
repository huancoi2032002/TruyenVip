export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                backgroundButton: '#050505',
                colorTextSidebar: '#748791',
                colorSearch: '#EEF1F3',
                backgroundSearch: '#333D42',
                backgroundLoved: '#2A3236',
                backgroundProfileMenu: '#181C1F',
                backgroundScrollbar: {
                  DEFAULT: '#0E1113',
                  dark: '#0E1113',
                },
                backgroundNav: '#101214',
                backgroundPost: '#18191A',
                iconPublic: '#B0B3B8',
                bgButton:  'rgb(0, 149, 246)',
                colorPluss: 'rbg(168, 168, 168)',
                customBlue: "#1E40AF",      // Màu xanh dương
                customRed: "#EF4444",       // Màu đỏ
                customGreen: "#10B981",     // Màu xanh lá
                customPink: "rgb(255, 105, 180)", // Màu hồng bằng RGB
                customPurple: "hsl(250, 100%, 50%)", // Màu tím bằng HSL
                customTransparent: "rgba(0, 0, 0, 0.3)", // Màu đen trong suốt bằng RGBA
              },
        },
    },
    plugins: [],
};
