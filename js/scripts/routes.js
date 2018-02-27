define([], function () {
    return {
        defaultRoute: '/unChecked',
        routes: {
            'classNew': {
                templateUrl: 'pages/classnew/view/classnew.html',
                url: '/classNew',
                dependencies: ['../../pages/classnew/ctrl/classnewctrl'],
                allowAnonymous: true
            },
            'classMod': {
                templateUrl: 'pages/classmod/view/classmod.html',
                url: '/classMod',
                dependencies: ['../../pages/classmod/ctrl/classmodctrl'],
                allowAnonymous: true
            },
            'evalList': {
                templateUrl: 'pages/evallist/view/evallist.html',
                url: '/evalList',
                dependencies: ['../../pages/evallist/ctrl/evallistctrl'],
                allowAnonymous: true
            },
            'evalTempl': {
                templateUrl: 'pages/evaltempl/view/evaltempl.html',
                url: '/evalTempl',
                dependencies: ['../../pages/evaltempl/ctrl/evaltemplctrl'],
                allowAnonymous: true
            },
            'unChecked': {
                templateUrl: 'pages/unchecked/view/unchecked.html',
                url: '/unChecked',
                dependencies: ['../../pages/unchecked/ctrl/uncheckedctrl'],
                allowAnonymous: true
            },
            'checked': {
                templateUrl: 'pages/checked/view/checked.html',
                url: '/checked',
                dependencies: ['../../pages/checked/ctrl/checkedctrl'],
                allowAnonymous: true
            },
            'statisticByM': {
                templateUrl: 'pages/statisticbym/view/statisticbym.html',
                url: '/statisticByM',
                dependencies: ['../../pages/statisticbym/ctrl/statisticbymctrl'],
                allowAnonymous: true
            },
            'statisticByS': {
                templateUrl: 'pages/statisticbys/view/statisticbys.html',
                url: '/statisticByS',
                dependencies: ['../../pages/statisticbys/ctrl/statisticbysctrl'],
                allowAnonymous: true
            },
            'statisticByY': {
                templateUrl: 'pages/statisticbyy/view/statisticbyy.html',
                url: '/statisticByY',
                dependencies: ['../../pages/statisticbyy/ctrl/statisticbyyctrl'],
                allowAnonymous: true
            },
            'users': {
                templateUrl: 'pages/users/view/users.html',
                url: '/users',
                dependencies: ['../../pages/users/ctrl/usersctrl'],
                allowAnonymous: true
            },
            'userLimits': {
                templateUrl: 'pages/userlimits/view/userlimits.html',
                url: '/userLimits',
                dependencies: ['../../pages/userlimits/ctrl/userlimitsctrl'],
                allowAnonymous: true
            },
            'personal': {
                templateUrl: 'pages/personal/view/personal.html',
                url: '/personal',
                dependencies: ['../../pages/personal/ctrl/personalctrl'],
                allowAnonymous: true
            },
            'pwdMod': {
                templateUrl: 'pages/pwdmod/view/pwdmod.html',
                url: '/pwdMod',
                dependencies: ['../../pages/pwdmod/ctrl/pwdmodctrl'],
                allowAnonymous: true
            }
        }
    };
});