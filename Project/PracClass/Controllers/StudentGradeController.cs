using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PracClass.Controllers
{

    public class StudentGradeController : Controller
    {
        [Authorize(Roles = "Admin")]
        // GET: StudentGrade
        public ActionResult Index()
        {
            return View();
        }

        [Authorize(Roles = "Admin")]
        public ActionResult AddStudentGrade()
        {
            return View();
        }
    }
}