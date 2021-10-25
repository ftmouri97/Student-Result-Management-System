angular.module("resultApp", [])
    .constant("dataUrl", "/api/")
    .controller("resultCtrl", function ($scope, $http, dataUrl, $interval) {

        console.log('ok')

        var getCourseList = function () {
            $scope.WhenPageLoad = true;
            $http.get(dataUrl + "BatchBaseApi/getAllCourseList")
             .then(function (response) {

                 console.log(response.data)
                 $scope.CourseList = response.data

             }).catch(function (e, s) {
                 // console.log(e)
             }).then(function () {
                 $scope.WhenPageLoad = false;
             });
        }
        getCourseList();



        $scope.CourseChage = function () {

            if ($scope.Courseid) {
                $http.get(dataUrl + "BatchBaseApi/getBatchList/" + $scope.Courseid)
                .then(function (response) {

                    console.log(response.data)
                    $scope.BatchList = response.data

                }).catch(function (e, s) {
                    // console.log(e)
                }).then(function () {
                    $scope.WhenPageLoad = false;
                });
            }
        }
        $scope.ChangeBatch = function () {
            $scope.StudentResultList = [];
            if ($scope.BatchId) {
                $scope.WhenPageLoad = true;
                $http.get(dataUrl + "StudentResultApi/getResultList/" + $scope.BatchId)
                 .then(function (response) {

                     console.log(response.data)
                     $scope.StudentResultList = response.data

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenPageLoad = false;
                 });
            }
        }

    });