angular.module("abcApp", [])
    .constant("dataUrl", "/api/")
    .controller("abcCtrl", function ($scope, $http, dataUrl, $interval) {

        console.log('ok')

        $scope.Addbtnshow = true;
        $scope.updatebtnshow = false;


        var pageload = function () {
            $scope.WhenPageLoad = true;
            $http.get(dataUrl + "SubjectApi/getSubjectList")
             .then(function (response) {

                 console.log(response.data)
                 $scope.SubjectList = response.data

             }).catch(function (e, s) {
                 // console.log(e)
             }).then(function () {
                 $scope.WhenPageLoad = false;
             });
        }

        pageload();

        $scope.AddSubject = function () {

            var datalist = {
                SubjectId: $scope.SubjectId,
                SubjectName: $scope.SubjectName,
                CourseId: $scope.CourseId
               
            }

            console.log(datalist)
            $scope.WhenAddbtnClick = true;

            $http.post(dataUrl + "SubjectApi/InsertSubjectList/", datalist)
                 .then(function (response) {

                     pageload();

                     $scope.SubjectId = null;
                     $scope.SubjectName = null;
                     $scope.CourseId = null;
                    

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });

        }

        $scope.StudentEdit = function (a) {
            console.log(a)

            $scope.SubjectId = a.SubjectId;
            $scope.SubjectName = a.SubjectName;
            $scope.CourseId = a.CourseId;
         


            $scope.Addbtnshow = true;
            $scope.updatebtnshow = true;

        }

        $scope.UpdateSubject = function () {

            var datalist = {
                SubjectId: $scope.SubjectId,
                SubjectName: $scope.SubjectName,
                CourseId: $scope.CourseId

            }

            console.log(datalist)

            $scope.WhenAddbtnClick = true;
            $http.put(dataUrl + "SubjectApi/UpdateSubject/", datalist)
                 .then(function (response) {

                     pageload();

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }

        $scope.StudentDelete = function (a) {
            console.log(a.GradeId);

            $http.delete(dataUrl + "SubjectApi/StudentDelete/", { params: { SubjectId: a.SubjectId } })
                 .then(function (response) {

                     pageload();

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }
    });