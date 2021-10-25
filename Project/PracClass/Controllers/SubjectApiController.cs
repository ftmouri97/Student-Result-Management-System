using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PracClass.Controllers
{
    public class SubjectApiController : ApiController
    {
        SQLPROJECTEntities db = new SQLPROJECTEntities();
        [HttpGet]
        [Route("api/SubjectApi/getSubjectList")]
        public object getSubjectList()
        {
            var SubjectList = from p in db.Subjects
                                    select new
                                    {
                                        p.SubjectId,
                                        p.SubjectName,
                                        p.CourseId
                                        

                                    };



            return SubjectList.ToList();



        }





        [HttpPost]
        [Route("api/SubjectApi/InsertSubjectList")]
        public object InsertSubjectList(Subject si)
        {

            db.Subjects.Add(si);
            db.SaveChanges();
            return 200;


        }



        [HttpPut]
        [Route("api/SubjectApi/UpdateSubject")]
        public object UpdateSubject(Subject si)
        {

            db.Entry(si).State = EntityState.Modified;
            db.SaveChanges();
            return 200;


        }



        [HttpDelete]
        [Route("api/SubjectApi/StudentDelete")]
        public object StudentDelete(int SubjectId)
        {
            Subject st = db.Subjects.Find(SubjectId);
            db.Subjects.Remove(st);
            db.SaveChanges();
            return 200;


        }
    }
}

    
    

    

    
 