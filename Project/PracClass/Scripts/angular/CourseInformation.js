angular.module("abcApp", [])
    .constant("dataUrl", "/api/")
    .controller("abcCtrl", function ($scope, $http, dataUrl, $interval) {

        console.log('ok')

        $scope.Addbtnshow = true;
        $scope.updatebtnshow = false;


        var pageload = function () {
            $scope.WhenPageLoad = true;
            $http.get(dataUrl + "CourseInformationApi/getCourseInformationList")
             .then(function (response) {

                 console.log(response.data)
                 $scope.CourseInformationList = response.data

             }).catch(function (e, s) {
                 // console.log(e)
             }).then(function () {
                 $scope.WhenPageLoad = false;
             });
        }

        pageload();


        var Courseload = function () {
         
            $http.get(dataUrl + "CourseInformationApi/getCourseList")
             .then(function (response) {

                 console.log(response.data)
                 $scope.CourseList = response.data

             }).catch(function (e, s) {
                 // console.log(e)
             }).then(function () {
                 $scope.WhenPageLoad = false;
             });
        }

       Courseload();

        $scope.AddCourse = function () {

            var datalist = {
                CourseId: $scope.CourseId,
                CourseName: $scope.CourseName

            }

            console.log(datalist)
            $scope.WhenAddbtnClick = true;

            $http.post(dataUrl + "CourseInformationApi/InsertCourseInformationList/", datalist)
                 .then(function (response) {

                     pageload();

                     $scope.CourseId = null;
                     $scope.CourseName = null;
                     

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });

        }

        $scope.StudentEdit = function (a) {
            console.log(a)

            $scope.CourseId = a.CourseId;
            $scope.CourseName = a.CourseName;
      
            $scope.Addbtnshow = true;
            $scope.updatebtnshow = true;

        }

        $scope.UpdateCourse = function () {

            var datalist = {
                CourseId: $scope.CourseId,
                CourseName: $scope.CourseName

            }

            console.log(datalist)

            $scope.WhenAddbtnClick = true;
            $http.put(dataUrl + "CourseInformationApi/UpdateCourse/", datalist)
                 .then(function (response) {

                     pageload();

                     $scope.CourseId = null;
                     $scope.CourseName = null;


                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }

        $scope.StudentDelete = function (a) {
            console.log(a.CourseId);

            $http.delete(dataUrl + "CourseInformationApi/StudentDelete/", { params: { CourseId: a.CourseId } })
                 .then(function (response) {

                     pageload();

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }
    });