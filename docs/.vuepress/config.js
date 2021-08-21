module.exports = {
    title: 'HZSB',
    description: '揭露某超级中学做过的恶事',
    dest: './dist',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '文章', link: '/article/' }
        ]
    },
    plugins: [
        '@vuepress/back-to-top'
    ],
    head: [
        [
            "script",
            {},
            `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?ec57e4b3b7122d9fd489d8fb72e6ce56";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
            `
        ]
    ]
}

