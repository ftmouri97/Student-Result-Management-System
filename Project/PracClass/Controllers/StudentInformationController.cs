using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PracClass.Controllers
{
    [Authorize(Roles = "Admin, Operator")]
    public class StudentInformationController : Controller
    {
        // GET: StudentInformation
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddNewStudent()
        {
            return View();
        }
    }
}