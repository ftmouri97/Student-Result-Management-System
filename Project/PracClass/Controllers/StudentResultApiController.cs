using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PracClass.Controllers
{
    public class StudentResultApiController : ApiController
    {
        SQLPROJECTEntities db = new SQLPROJECTEntities();
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString);
        [HttpGet]
        [Route("api/StudentResultApi/getStudentResultList")]
        public object getStudentResultList()
        {
            var StudentResultList = from p in db.StudentResults
                                    join pc in db.BatchBaseStudents
                                    on p.BatchBaseStudentId equals pc.BatchBaseStudentId
                                    join tt in db.StudentInformations 
                                    on pc.StudentId equals tt.StudentId
                                    join nn in db.Subjects
                                    on p.SubjectId equals nn.SubjectId
                                    select new
                                   {
                                       p.ResultId,
                                       p.BatchBaseStudentId,
                                       tt.FirstName,
                                 tt.LastName,
                                       p.SubjectId,
                                       nn.SubjectName,
                                       p.Number

                                   };



            return StudentResultList.ToList();



        }

        [HttpGet]
        [Route("api/StudentResultApi/getSubjectList")]
        public object getSubjectList()
        {
            var DataList = (from p in db.Subjects
                                    select new
                                    {
                                        p.SubjectId,
                                        p.SubjectName                                       

                                    }).DefaultIfEmpty();



            return DataList.ToList();



        }




        //=====================GET Root Exam Type============================
        [HttpGet]
        [Route("api/StudentResultApi/getResultList")]
        public object getResultList(int id)
        {

            SqlCommand com = con.CreateCommand();

            
                    com.CommandText = @"select nnn.CourseId, nnn.BatchBaseStudentId, nnn.StudentName,
                                    nnn.CourseName, nnn.averageNumber, nnn.Grade from
(select aa.CourseId, aa.BatchBaseStudentId, (si.FirstName+' '+si.LastName) as StudentName,
                                    bb.CourseName, aa.totalNumber/bb.SubjectCount as averageNumber, b.Grade
                                    from 
                                    (select sj.CourseId,  rs.BatchBaseStudentId, sum(rs.Number) as totalNumber
                                    from Subject as sj
                                    join StudentResult as rs
                                    on sj.SubjectId=rs.SubjectId
                                    group by sj.CourseId, rs.BatchBaseStudentId) as aa

                                    join

                                    (select cif.CourseId, cif.CourseName, count(st.SubjectId) as SubjectCount 
                                    from CourseInformation as cif
                                    join Subject as st
                                    on cif.CourseId=st.CourseId 
                                    group by cif.CourseId, cif.CourseName) as bb
                                    on aa.CourseId=bb.CourseId

                                    join StudentInformation as si
                                    on si.StudentId=aa.BatchBaseStudentId


                                    JOIN  StudentGrade AS b
                                    ON aa.totalNumber/bb.SubjectCount BETWEEN b.NumberFrom AND b.NumberTo) as nnn
				join BatchBaseStudent as bbt
				on nnn.BatchBaseStudentId=bbt.BatchBaseStudentId
				join Batch as bt
				on bt.BatchId=bbt.BatchId
				where bt.BatchId=@BatchId";
          

            SqlDataAdapter da = new SqlDataAdapter(com);
            com.Parameters.AddWithValue("@BatchId", id);
            com.Parameters.AddWithValue("@UserID", User.Identity.GetUserId());

            DataSet ds = new DataSet();
            da.Fill(ds);
            return ds.Tables[0];

        }

        [HttpGet]
        [Route("api/StudentResultApi/getSubjectList")]
        public object getStudentList()
        {
            var DataList = (from q in db.StudentInformations
                            select new
                            {
                                q.StudentId,
                                StudentName=q.FirstName+" "+ q.LastName,
                                

                            }).DefaultIfEmpty();



            return DataList.ToList();



        }



        [HttpPost]
        [Route("api/StudentResultApi/InsertStudentResultList")]
        public object InsertStudentResultList(StudentResult si)
        {

            db.StudentResults.Add(si);
            db.SaveChanges();
            return 200;


        }



        [HttpPut]
        [Route("api/StudentResultApi/UpdateStudentResult")]
        public object UpdateStudentResult(StudentResult si)
        {

            db.Entry(si).State = EntityState.Modified;
            db.SaveChanges();
            return 200;


        }



        [HttpDelete]
        [Route("api/StudentResultApi/StudentDelete")]
        public object StudentDelete(int ResultId)
        {
            StudentResult st = db.StudentResults.Find(ResultId);
            db.StudentResults.Remove(st);
            db.SaveChanges();
            return 200;


        }
    }
}

    
    

    

    