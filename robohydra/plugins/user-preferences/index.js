var RoboHydraHeadStatic     = require("robohydra").heads.RoboHydraHeadStatic;

exports.getBodyParts = function(conf) {
    return {
        heads: [
            new RoboHydraHeadStatic({
                path: '/users',
                content: require('./responses/user-list-one-result.json')
            })
        ],
        scenarios: {
            userPreferenceUserListNoResults: {
                heads: [
                    new RoboHydraHeadStatic({
                        path: '/users',
                        content: require('./responses/user-list-empty.json')
                    })
                ]
            },

            userPreferenceUserListTwoResults: {
                heads: [
                    new RoboHydraHeadStatic({
                        path: '/users',
                        content: require('./responses/user-list-multiple-results.json')
                    })
                ]
            }
        }
    };
};