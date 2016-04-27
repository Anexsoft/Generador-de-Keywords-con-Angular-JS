var appKeyword = angular.module('appKeyword', []);

appKeyword.controller('keywordCtrl', function ($scope) {
    $scope.doIt = function () {
        if($scope.keyword1 == null || $scope.keyword2 == null || $scope.keyword3 == null) return;
        
        $scope.keyword = [];

        var k1 = $scope.keyword1.split('\n'),
            k2 = $scope.keyword2.split('\n'),
            k3 = $scope.keyword3.split('\n');

        k1.forEach(function (a) {
            if (a.trim().length > 0) {
                k2.forEach(function (b) {
                    if (b.trim().length > 0) {
                        k3.forEach(function (c) {
                            if (c.trim().length > 0) {
                                $scope.keyword.push(a + ' ' + b + ' ' + c);
                            }
                        })
                    }
                })
            }
        });

        $scope.result = $scope.keyword.join(', ');
        $scope.count = 'Se han generado ' + $scope.keyword.length + ' keywords.';
    }
    
    $scope.example = function(n){
        if(n === 1){
            $scope.keyword1 = 'cover';
            $scope.keyword2 = 'dragon ball\ndbz\nshala head shala';
            $scope.keyword3 = 'rock\npunk\nmetal';            
        }
        
        if(n === 2){
            $scope.keyword1 = 'laravel 5';
            $scope.keyword2 = 'tutorial\nejemplo\neloquent orm ejemplo';
            $scope.keyword3 = 'español';            
        }
        
        if(n === 3){
            $scope.keyword1 = 'entrenar';
            $scope.keyword2 = 'perro\npoddle\npitbull';
            $scope.keyword3 = 'a cagar\ndefecar';            
        }
        
        $scope.doIt();
    }
});