using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PracClass.Controllers
{
    [Authorize]
    public class CourseInformationController : Controller
    {
        [Authorize(Roles = "Admin")]
        // GET: CourseInformation
        public ActionResult Index()
        {
            return View();
        }

        [Authorize(Roles = "Admin")]
        public ActionResult AddNewCourse()
        {
            return View();
        }
    }
}