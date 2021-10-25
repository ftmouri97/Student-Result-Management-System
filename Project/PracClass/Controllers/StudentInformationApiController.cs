using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PracClass.Controllers
{
    public class StudentInformationApiController : ApiController
    {
        SQLPROJECTEntities db = new SQLPROJECTEntities();
        [HttpGet]
        [Route("api/StudentInformationApi/getStudentList")]
        public object getStudentList()
        {
            var Studentlist = from p in db.StudentInformations
                              select new
                              {
                                  p.StudentId,
                                  p.FirstName,
                                  p.LastName,
                                  p.FathersName,
                                  p.MothersName,
                                  p.Address,
                                  p.DateOfBirth,
                                  p.Gender,
                                  p.Religion,
                                  p.Mobile
                              };

            return Studentlist.ToList();

        }

        [HttpGet]
        [Route("api/StudentInformationApi/getStudentList")]
        public object StudentList()
        {
            var Datalist = (from q in db.StudentInformations
                              select new
                              {
                                  q.StudentId,
                                  q.FirstName,
                                  q.LastName,
                                  q.FathersName,
                                  q.MothersName,
                                  q.Address,
                                  q.DateOfBirth,
                                  q.Gender,
                                  q.Religion,
                                  q.Mobile
                              }).DefaultIfEmpty();

            return Datalist.ToList();

        }

        [HttpPost]
        [Route("api/StudentInformationApi/InsertStudentList")]
        public object InsertStudentList(StudentInformation si)
        {

            db.StudentInformations.Add(si);
            db.SaveChanges();
            return 200;
        }

        [HttpPut]
        [Route("api/StudentInformationApi/UpdateStudent")]
        public object UpdateStudent(StudentInformation si)
        {

            db.Entry(si).State = EntityState.Modified;
            db.SaveChanges();
            return 200;
        }

        [HttpDelete]
        [Route("api/StudentInformationApi/DeleteStudent")]
        public object DeleteStudent(int StudentID)
        {
            StudentInformation st = db.StudentInformations.Find(StudentID);
            db.StudentInformations.Remove(st);
            db.SaveChanges();
            return 200;
        }
    }
}

    
    
