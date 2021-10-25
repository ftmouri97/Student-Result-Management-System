angular.module("abcApp", [])
    .constant("dataUrl", "/api/")
    .controller("abcCtrl", function ($scope, $http, dataUrl, $interval) {

        console.log('ok')

        $scope.Addbtnshow = true;
        $scope.updatebtnshow = false;


        var pageload = function () {
            $scope.WhenPageLoad = true;
            $http.get(dataUrl + "StudentInformationApi/getStudentList")
             .then(function (response) {
               
                 console.log(response.data)
                 $scope.StudentInformationList = response.data

             }).catch(function (e, s) {
                 // console.log(e)
             }).then(function () {
                 $scope.WhenPageLoad = false;
             });
        }

        pageload();

        var StudentInfoload = function () {
            $scope.WhenPageLoad = true;
            $http.get(dataUrl + "StudentInformationApi/getStudentList")
             .then(function (response) {

                 console.log(response.data)
                 $scope.StudentInformationList = response.data

             }).catch(function (e, s) {
                 // console.log(e)
             }).then(function () {
                 $scope.WhenPageLoad = false;
             });
        }

        StudentInfoload();

        $scope.AddStudent = function () {

            var datalist = {
                StudentId: $scope.StudentId,
                FirstName: $scope.FirstName,
                LastName: $scope.LastName,
                FathersName: $scope.FathersName,
                MothersName: $scope.MothersName,
                Address: $scope.Address,
                DateOfBirth: $scope.DateOfBirth,
                Gender: $scope.Gender,
                Religion: $scope.Religion,
                Mobile: $scope.Mobile
            }

            console.log(datalist)
            $scope.WhenAddbtnClick = true;

            $http.post(dataUrl + "StudentInformationApi/InsertStudentList/", datalist)
                 .then(function (response) {

                     pageload();

                     $scope.StudentId=null;
                     $scope.FirstName=null;
                     $scope.LastName=null;
                     $scope.FathersName=null;
                     $scope.MothersName=null;
                     $scope.Address=null;
                     $scope.DateOfBirth=null;
                     $scope.Gender=null;
                     $scope.Religion=null;
                     $scope.Mobile=null

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }

        $scope.StudentEdit = function (a) {
            console.log(a)

            $scope.StudentId = a.StudentId;
            $scope.FirstName = a.FirstName;
            $scope.LastName = a.LastName;
            $scope.FathersName = a.FathersName;
            $scope.MothersName = a.MothersName;
            $scope.Address = a.Address;
            $scope.DateOfBirth = a.DateOfBirth;
            $scope.Gender = a.Gender;
            $scope.Religion = a.Religion;
            $scope.Mobile = a.Mobile;


            $scope.Addbtnshow = true;
            $scope.updatebtnshow = true;

        }

        $scope.UpdateStudent = function () {

            var datalist = {
                StudentId: $scope.StudentId,
                FirstName: $scope.FirstName,
                LastName: $scope.LastName,
                FathersName: $scope.FathersName,
                MothersName: $scope.MothersName,
                Address: $scope.Address,
                DateOfBirth: $scope.DateOfBirth,
                Gender: $scope.Gender,
                Religion: $scope.Religion,
                Mobile: $scope.Mobile
            }

            console.log(datalist)
     
            $scope.WhenAddbtnClick = true;
            $http.put(dataUrl + "StudentInformationApi/UpdateStudent/", datalist)
                 .then(function (response) {

                     pageload();

                     $scope.StudentId = null;
                     $scope.FirstName = null;
                     $scope.LastName = null;
                     $scope.FathersName = null;
                     $scope.MothersName = null;
                     $scope.Address = null;
                     $scope.DateOfBirth = null;
                     $scope.Gender = null;
                     $scope.Religion = null;
                     $scope.Mobile = null


                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }




        $scope.StudentDelete = function (a) {
            console.log(a.StudentId);

            $http.delete(dataUrl + "StudentInformationApi/DeleteStudent/", {params:{StudentID:a.StudentId}} )
                 .then(function (response) {

                     pageload();

                 }).catch(function (e, s) {
                     // console.log(e)
                 }).then(function () {
                     $scope.WhenAddbtnClick = false;
                 });
        }
    });