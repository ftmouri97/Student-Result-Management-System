angular.module("abcApp", [])
    .constant("dataUrl", "/api/")
    .controller("abcCtrl", function ($scope, $http, dataUrl, $interval) {

        console.log('ok')

        $scope.Addbtnshow = true;
        $scope.updatebtnshow = false;


        var pageload = function () {
            $scope.WhenPageLoad = true;
            $http.get(dataUrl + "StudentResultApi/getStudentResultList")
             .then(function (response) {

                 console.log(response.data)
                 $scope.StudentResultList = response.data

             }).catch(function (e, s) {
                 // console.log(e)
             }).then(function () {
                 $scope.WhenPageLoad = false;
             });
        }

        pageload();



        var subjectload = function () {

            $http.get(dataUrl + "StudentResultApi/getSubjectList")
     .then(function (response) {

         console.log(response.data)
         $scope.Subjectlist = response.data

     }).catch(function (e, s) {
         // console.log(e)
     }).then(function () {
         $scope.WhenPageLoad = false;
     });
        }


        subjectload();


        var Studentload = function () {

            $http.get(dataUrl + "StudentResultApi/getStudentList")
     .then(function (response) {

         console.log(response.data)
         $scope.Studentlist = response.data

     }).catch(function (e, s) {
         // console.log(e)
     }).then(function () {
         $scope.WhenPageLoad = false;
     });
        }


        Studentload();
        $scope.AddStudentResult= function () {

            var datalist = {
               ResultId: $scope.ResultId,
                BatchBaseStudentId: $scope.BatchBaseStudentId,
                SubjectId: $scope.SchoolSubject,
                Number: $scope.Number

            }

            console.log(datalist)
            $scope.WhenAddbtnClick = true;

            $http.post(dataUrl + "StudentResultApi/InsertStudentResultList/", datalist)
                 .then(function (response) {

                     pageload();

                     $scope.ResultId = null;
                     $scope.BatchBaseStudentId = null;
                     $scope.SubjectId = null;
                     $scope.Number = null;

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });

        }



        $scope.StudentEdit = function (a) {
            console.log(a)

            $scope.ResultId = a.ResultId;
            $scope.BatchBaseStudentId = a.BatchBaseStudentId;
            $scope.SubjectId = a.SubjectId;
            $scope.Number = a.Number;


            $scope.Addbtnshow = true;
            $scope.updatebtnshow = true;

        }



        $scope.UpdateStudentResult = function () {

            var datalist = {
                ResultId: $scope.ResultId,
                BatchBaseStudentId: $scope.BatchBaseStudentId,
                SubjectId: $scope.SubjectId,
                Number: $scope.Number

            }

            console.log(datalist)

            $scope.WhenAddbtnClick = true;
            $http.put(dataUrl + "StudentResultApi/UpdateStudentResult/", datalist)
                 .then(function (response) {

                     pageload();

                     $scope.ResultId = null;
                     $scope.BatchBaseStudentId = null;
                     $scope.SubjectId = null;
                     $scope.Number = null;
                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }




        $scope.StudentDelete = function (a) {
            console.log(a.GradeId);

            $http.delete(dataUrl + "StudentResultApi/StudentDelete/", { params: { ResultId: a.ResultId } })
                 .then(function (response) {

                     pageload();

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }

    });