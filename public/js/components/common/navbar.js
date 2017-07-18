let navbar = {
    templateUrl: 'js/components/common/navbar.html',
   controller: ['UsersService', '$state', function(UsersService, $state) {
        'use strict'
         // momentJS clock
    //    this.date = moment().format('MM/DD/YYYY');
    
        angular.extend(this, {
            $onInit() {
                //  date = new moment();
                // date = moment().format('MM/DD/YYYY');
                // $scope.date = new moment();
                UsersService.getCurrent().then((user) => {
                    this.user = user
                }).catch((err) => {

                })
            },
            disconnect() {
                UsersService.disconnect().then(() => {
                    Materialize.toast('Disconnected', 4000, 'toast-warning')
                    this.user = null
                    $state.reload()
                })
            }

        })
    }]
}

export default navbar
