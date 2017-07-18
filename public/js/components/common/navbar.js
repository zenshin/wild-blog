let navbar = {
    templateUrl: 'js/components/common/navbar.html',
   controller: ['UsersService', '$state','$scope', '$moment', function(UsersService, $state, $scope , $moment) {
        'use strict'
         // momentJS clock
       this.date = $moment().format('MM/DD/YYYY');
        angular.extend(this, {
            $onInit() {
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
