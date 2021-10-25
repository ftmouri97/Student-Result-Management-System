using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PracClass.Controllers
{
    public class BatchApiController : ApiController
    {
        SQLPROJECTEntities db = new SQLPROJECTEntities();
        [HttpGet]
        [Route("api/BatchApi/getBatchList")]
        public object getBatchList()
        {
            var BatchList = from p in db.Batches
                                    select new
                                    {
                                        p.BatchId,
                                        p.BatchCode,
                                        p.CourseId,
                                        p.StartDate

                                    };



            return BatchList.ToList();



        }





        [HttpPost]
        [Route("api/BatchApi/InsertBatchList")]
        public object InsertBatchList(Batch si)
        {

            db.Batches.Add(si);
            db.SaveChanges();
            return 200;


        }



        [HttpPut]
        [Route("api/BatchApi/UpdateBatch")]
        public object UpdateBatch(Batch si)
        {

            db.Entry(si).State = EntityState.Modified;
            db.SaveChanges();
            return 200;


        }
       [HttpDelete]
        [Route("api/BatchApi/StudentDelete")]
        public object StudentDelete(int BatchId)
        {
            Batch st = db.Batches.Find(BatchId);
            db.Batches.Remove(st);
            db.SaveChanges();
            return 200;


        }

    }
}
