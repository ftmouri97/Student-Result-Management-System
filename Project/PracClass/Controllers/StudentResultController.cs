using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PracClass.Controllers
{
    [Authorize(Roles = "Admin, Operator")]
    public class StudentResultController : Controller
    {
        // GET: StudentResult
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddStudentResult()
        {
            return View();
        }
        public ActionResult Result()
        {
            return View();
        }
    }
}