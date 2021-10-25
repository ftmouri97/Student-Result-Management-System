using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PracClass.Controllers
{
    public class BatchBaseApiController : ApiController
    {
        SQLPROJECTEntities db = new SQLPROJECTEntities();
        [HttpGet]
        [Route("api/BatchBaseApi/getBatchBaseList")]
        public object getBatchBaseList(int id)
        {
            var BatchBaseList = from p in db.BatchBaseStudents
                                join tt in db.StudentInformations
                                on p.StudentId equals tt.StudentId
                                join pc in db.Batches
                                on p.BatchId equals pc.BatchId
                                where p.BatchId==id
                                select new
                                {
                                    p.BatchBaseStudentId,
                                    p.StudentId,
                                    p.BatchId,
                                    tt.FirstName,
                                    tt.LastName,
                                    pc.BatchCode
                                };



            return BatchBaseList.ToList();
        }

        [HttpGet]
        [Route("api/BatchBaseApi/getStudentList")]
        public object getStudentList()
        {
            var DataList = (from q in db.StudentInformations
                            select new
                            {
                                q.StudentId,
                                StudentName = q.FirstName + " " + q.LastName,


                            }).DefaultIfEmpty();

            return DataList.ToList();

        }

        [HttpGet]
        [Route("api/BatchBaseApi/getAllCourseList")]
        public object getAllCourseList()
        {
            var CourseList = (from p in db.CourseInformations
                             select new
                             {
                                 p.CourseId,
                                 p.CourseName
                             }).DefaultIfEmpty();

            return CourseList.ToList();

        }

        [HttpGet]
        [Route("api/BatchBaseApi/getBatchList")]
        public object getBatchList(int id)
        {
            var DataList = (from q in db.Batches
                            join co in db.CourseInformations
                            on q.CourseId equals co.CourseId
                            where co.CourseId == id
                            select new
                            {
                                q.BatchId,
                                q.BatchCode
                               
                            }).DefaultIfEmpty();

            return DataList.ToList();
        }
        [HttpPost]
        [Route("api/BatchBaseApi/InsertBatchBaseList")]
        public object InsertBatchBaseList(BatchBaseStudent si)
        {

            db.BatchBaseStudents.Add(si);
            db.SaveChanges();
            return 200;
        }

        [HttpPut]
        [Route("api/BatchBaseApi/UpdateBatchBase")]
        public object UpdateBatchBase(BatchBaseStudent si)
        {

            db.Entry(si).State = EntityState.Modified;
            db.SaveChanges();
            return 200;
        }

        [HttpDelete]
        [Route("api/BatchBaseApi/StudentDelete")]
        public object StudentDelete(int BatchBaseStudentId)
        {
            BatchBaseStudent st = db.BatchBaseStudents.Find(BatchBaseStudentId);
            db.BatchBaseStudents.Remove(st);
            db.SaveChanges();
            return 200;
        }
    }
}


