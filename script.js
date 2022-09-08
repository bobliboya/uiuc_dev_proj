/* globals Docute */

new Docute({
    layout: 'left',
    target: '#docute',
    sourcePath: './docs/',
    nav: [{
            title: 'Home',
            link: '/README'
        },
        {
            title: 'About',
            link: '/about'
        }
    ],
    detectSystemDarkTheme: true,
    darkThemeToggler: true,
    highlight: ['java'],
    /* 导航栏 */
    sidebar: [{
            title: 'Unit 1 Primitive Types',
            link: '/unit1'
        }, {
            title: 'Unit 2 Using Objects',
            link: '/unit2'
        }, {
            title: 'Unit 3 Using Objects',
            link: '/unit3'
        }, {
            title: 'Unit 4 Using Objects',
            link: '/unit4'
        }, {
            title: 'Practice Questions',
            children: [{
                    title: '2013 FRQ Questions',
                    link: '/past-exams/apcs-2013-frq-q'
                }, {
                    title: '2013 FRQ Solutions',
                    link: '/past-exams/apcs-2013-frq-s'
                }, {
                    title: '2014 FRQ Questions',
                    link: '/past-exams/apcs-2014-frq-q'
                }, {
                    title: '2014 FRQ Solutions',
                    link: '/past-exams/apcs-2014-frq-s'
                }, {
                    title: '2015 FRQ Questions',
                    link: '/past-exams/apcs-2015-frq-q'
                }, {
                    title: '2015 FRQ Solutions',
                    link: '/past-exams/apcs-2015-frq-s'
                }, {
                    title: '2016 FRQ Questions',
                    link: '/past-exams/apcs-2016-frq-q'
                }, {
                    title: '2016 FRQ Solutions',
                    link: '/past-exams/apcs-2016-frq-s'
                }, {
                    title: '2017 FRQ Questions',
                    link: '/past-exams/apcs-2017-frq-q'
                }, {
                    title: '2017 FRQ Solutions',
                    link: '/past-exams/apcs-2017-frq-s'
                }, {
                    title: '2018 FRQ Questions',
                    link: '/past-exams/apcs-2018-frq-q'
                }, {
                    title: '2018 FRQ Solutions',
                    link: '/past-exams/apcs-2018-frq-s'
                }, {
                    title: '2019 FRQ Questions',
                    link: '/past-exams/apcs-2019-frq-q'
                }, {
                    title: '2019 FRQ Solutions',
                    link: '/past-exams/apcs-2019-frq-s'
                },

            ]
        },


    ],
})