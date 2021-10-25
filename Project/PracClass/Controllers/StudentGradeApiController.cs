using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PracClass.Controllers
{
    public class StudentGradeApiController : ApiController
    {
        SQLPROJECTEntities db = new SQLPROJECTEntities();
        [HttpGet]
        [Route("api/StudentGradeApi/getStudentGradeList")]
        public object getStudentGradeList()
        {
            var StudentGradeList = from p in db.StudentGrades
                              select new
                              {
                                  p.GradeId,
                                  p.NumberFrom,
                                  p.NumberTo,
                                  p.Grade
                                  
                              };

            return StudentGradeList.ToList();
        }

        [HttpPost]
        [Route("api/StudentGradeApi/InsertStudentGradeList")]
        public object InsertStudentGradeList(StudentGrade si)
        {

            db.StudentGrades.Add(si);
            db.SaveChanges();
            return 200;


        }
        [HttpPut]
        [Route("api/StudentGradeApi/UpdateStudentGrade")]
        public object UpdateStudentGrade(StudentGrade si)
        {
            db.Entry(si).State = EntityState.Modified;
            db.SaveChanges();
            return 200;
        }
        [HttpDelete]
        [Route("api/StudentGradeApi/StudentDelete")]
        public object StudentDelete(int GradeId)
        {
            StudentGrade st = db.StudentGrades.Find(GradeId);
            db.StudentGrades.Remove(st);
            db.SaveChanges();
            return 200;
        }
    }
}

    
    

    
