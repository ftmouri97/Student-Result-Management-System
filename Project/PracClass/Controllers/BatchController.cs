using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PracClass.Controllers
{
    [Authorize(Roles = "Admin")]
    public class BatchController : Controller
    {
        // GET: Batch
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddNewBatch()
        {
            return View();
        }
    }
}