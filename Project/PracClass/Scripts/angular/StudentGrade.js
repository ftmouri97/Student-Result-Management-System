angular.module("abcApp", [])
    .constant("dataUrl", "/api/")
    .controller("abcCtrl", function ($scope, $http, dataUrl, $interval) {

        console.log('ok')

        $scope.Addbtnshow = true;
        $scope.updatebtnshow = false;


        var pageload = function () {
            $scope.WhenPageLoad = true;
            $http.get(dataUrl + "StudentGradeApi/getStudentGradeList")
             .then(function (response) {

                 console.log(response.data)
                 $scope.StudentGradeList = response.data

             }).catch(function (e, s) {
                 // console.log(e)
             }).then(function () {
                 $scope.WhenPageLoad = false;
             });
        }

        pageload();

        $scope.AddStudentGrade = function () {

            var datalist = {
                GradeId: $scope.GradeId,
               NumberFrom: $scope.NumberFrom,
               NumberTo: $scope.NumberTo,
                Grade: $scope.Grade
                
            }

            console.log(datalist)
            $scope.WhenAddbtnClick = true;

            $http.post(dataUrl + "StudentGradeApi/InsertStudentGradeList/", datalist)
                 .then(function (response) {

                     pageload();

                     $scope.GradeId = null;
                     $scope.NumberFrom = null;
                     $scope.NumberTo = null;
                     $scope.Grade = null;
                    
                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });

        }

        $scope.StudentEdit = function (a) {
            console.log(a)

            $scope.GradeId = a.GradeId;
            $scope.NumberFrom = a.NumberFrom;
            $scope.NumberTo = a.NumberTo;
            $scope.Grade = a.Grade;
           

            $scope.Addbtnshow = true;
            $scope.updatebtnshow = true;

        }

        $scope.UpdateStudentGrade = function () {

            var datalist = {
                GradeId: $scope.GradeId,
                NumberFrom: $scope.NumberFrom,
                NumberTo: $scope.NumberTo,
                Grade: $scope.Grade

            }

            console.log(datalist)

            $scope.WhenAddbtnClick = true;
            $http.put(dataUrl + "StudentGradeApi/UpdateStudentGrade/", datalist)
                 .then(function (response) {

                     pageload();

                     $scope.GradeId = null;
                     $scope.NumberFrom = null;
                     $scope.NumberTo = null;
                     $scope.Grade = null;

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }

        $scope.StudentDelete = function (a) {
            console.log(a.GradeId);
            $http.delete(dataUrl + "StudentGradeApi/StudentDelete/", { params: { GradeId: a.GradeId } })
                 .then(function (response) {
                     pageload();
                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }
    });