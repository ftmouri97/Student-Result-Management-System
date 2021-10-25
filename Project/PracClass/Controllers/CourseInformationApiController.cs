using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PracClass.Controllers
{
    public class CourseInformationApiController : ApiController
    {
        SQLPROJECTEntities db = new SQLPROJECTEntities();
        [HttpGet]
        [Route("api/CourseInformationApi/getCourseInformationList")]
        public object getCourseInformationList()
        {
            var CourseInformationList = from p in db.CourseInformations
                              select new
                              {
                                  p.CourseId,
                                  p.CourseName
                              };

            return CourseInformationList.ToList();
        }

        [HttpGet]
        [Route("api/CourseInformationApi/getCourseInformationList")]
        public object CourseList()
        {
            var CList =( from p in db.CourseInformations
                                        select new
                                        {
                                            p.CourseId,
                                            p.CourseName
                                        }).DefaultIfEmpty(); ;
            return CList.ToList();
        }

        [HttpPost]
        [Route("api/CourseInformationApi/InsertCourseInformationList")]
        public object InsertCourseInformationList(CourseInformation si)
        {
            db.CourseInformations.Add(si);
            db.SaveChanges();
            return 200;
        }

        [HttpPut]
        [Route("api/CourseInformationApi/UpdateCourse")]
        public object UpdateCourse(CourseInformation si)
        {
            db.Entry(si).State = EntityState.Modified;
            db.SaveChanges();
            return 200;
        }

        [HttpDelete]
        [Route("api/CourseInformationApi/StudentDelete")]
        public object StudentDelete(int CourseId)
        {
            CourseInformation st = db.CourseInformations.Find(CourseId);
            db.CourseInformations.Remove(st);
            db.SaveChanges();
            return 200;
        }
    }
}
