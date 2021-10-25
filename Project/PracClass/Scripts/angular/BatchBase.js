angular.module("abcApp", [])
    .constant("dataUrl", "/api/")
    .controller("abcCtrl", function ($scope, $http, dataUrl, $interval) {

        console.log('ok')

        $scope.Addbtnshow = true;
        $scope.updatebtnshow = false;

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

        $scope.ChangeBatch = function () {
            if ($scope.BatchId) {
                $scope.WhenPageLoad = true;
                $http.get(dataUrl + "BatchBaseApi/getBatchBaseList/" + $scope.BatchId)
                 .then(function (response) {

                     console.log(response.data)
                     $scope.BatchBaseList = response.data

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenPageLoad = false;
                 });
            }

        }

        $scope.AddBatchBase = function () {

            var datalist = {
                BatchBaseStudentId: $scope.BatchBaseStudentId,
                StudentId: $scope.StudentId,
                BatchId: $scope.BatchId
            }

            console.log(datalist)
            $scope.WhenAddbtnClick = true;

            $http.post(dataUrl + "BatchBaseApi/InsertBatchBaseList/", datalist)
                 .then(function (response) {

                     pageload();

                     $scope.BatchBaseStudentId = null;
                     $scope.StudentId = null;
                     $scope.BatchId = null;

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });

        }

        $scope.StudentEdit = function (a) {
            console.log(a)

            $scope.BatchBaseStudentId = a.BatchBaseStudentId;
            $scope.StudentId = a.StudentId;
            $scope.BatchId = a.BatchId;

            $scope.Addbtnshow = true;
            $scope.updatebtnshow = true;

        }

        $scope.UpdateBatchBase = function () {

            var datalist = {
                BatchBaseStudentId: $scope.BatchBaseStudentId,
                StudentId: $scope.StudentId,
                BatchId: $scope.BatchId

            }

            console.log(datalist)

            $scope.WhenAddbtnClick = true;
            $http.put(dataUrl + "BatchBaseApi/UpdateBatchBase/", datalist)
                 .then(function (response) {

                     pageload();

                     $scope.BatchBaseStudentId = null;
                     $scope.StudentId = null;
                     $scope.BatchId = null;

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }

        $scope.StudentDelete = function (a) {
            console.log(a.BatchBaseStudentId);

            $http.delete(dataUrl + "BatchBaseApi/StudentDelete/", { params: { BatchBaseStudentId: a.BatchBaseStudentId } })
                 .then(function (response) {

                     pageload();

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }

        var BatchBaseload = function () {

            $http.get(dataUrl + "BatchBaseApi/getStudentList")
     .then(function (response) {

         console.log(response.data)
         $scope.StudentList = response.data

     }).catch(function (e, s) {
         // console.log(e)
     }).then(function () {
         $scope.WhenPageLoad = false;
     });
        }

        BatchBaseload();

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

    });