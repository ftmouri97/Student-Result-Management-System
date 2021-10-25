angular.module("abcApp", [])
    .constant("dataUrl", "/api/")
    .controller("abcCtrl", function ($scope, $http, dataUrl, $interval) {

        console.log('ok')

        $scope.Addbtnshow = true;
        $scope.updatebtnshow = false;


        var pageload = function () {
            $scope.WhenPageLoad = true;
            $http.get(dataUrl + "BatchApi/getBatchList")
             .then(function (response) {

                 console.log(response.data)
                 $scope.BatchList = response.data

             }).catch(function (e, s) {
                 // console.log(e)
             }).then(function () {
                 $scope.WhenPageLoad = false;
             });
        }

        pageload();

        $scope.AddBatch = function () {

            var datalist = {
                BatchId: $scope.BatchId,
                BatchCode: $scope.BatchCode,
                CourseId: $scope.CourseId,
                StartDate: $scope.StartDate

            }

            console.log(datalist)
            $scope.WhenAddbtnClick = true;

            $http.post(dataUrl + "BatchApi/InsertBatchList/", datalist)
                 .then(function (response) {

                     pageload();

                     $scope.BatchId = null;
                     $scope.BatchCode = null;
                     $scope.CourseId = null;
                     $scope.StartDate = null;

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });

        }

        $scope.StudentEdit = function (a) {
            console.log(a)

            $scope.BatchId = a.BatchId;
            $scope.BatchCode = a.BatchCode;
            $scope.CourseId = a.CourseId;
            $scope.StartDate = a.StartDate;


            $scope.Addbtnshow = true;
            $scope.updatebtnshow = true;

        }

        $scope.UpdateBatch = function () {

            var datalist = {
                BatchId: $scope.BatchId,
                BatchCode: $scope.BatchCode,
                CourseId: $scope.CourseId,
                StartDate: $scope.StartDate

            }

            console.log(datalist)

            $scope.WhenAddbtnClick = true;
            $http.put(dataUrl + "BatchApi/UpdateBatch/", datalist)
                 .then(function (response) {

                     pageload();

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }

        $scope.StudentDelete = function (a) {
            console.log(a.BatchId);

            $http.delete(dataUrl + "BatchApi/StudentDelete/", { params: { BatchId: a.BatchId } })
                 .then(function (response) {

                     pageload();

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }

    });