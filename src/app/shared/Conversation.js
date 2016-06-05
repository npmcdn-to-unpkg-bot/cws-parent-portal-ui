/**
 * Created by Husamui on 5/31/16.
 */
angular.module('cws')
    .factory('Conversation', ['API_LINKS','$resource', function(API_LINKS,$resource) {

        var conversation = {};
        conversation.resource = $resource(API_LINKS.baseurl+'conversation/:id', {
            id: '@id',
            box: '@box'
        }, {
            update: {
                method: 'PUT' // this method issues a PUT request
            }
        }, {
            stripTrailingSlashes: false
        });

        // conversation.data = conversation.resource.query({select:'reciver'});





        return conversation


        }]);