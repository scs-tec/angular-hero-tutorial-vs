using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CustomerManagementPortal.Webapplication.Controllers
{
	public class AppController : Controller
	{
		public IActionResult RootTemplate()
		{
			return PartialView();
		}

		public IActionResult HeroesComponentTemplate()
		{
			return PartialView();
		}

		public IActionResult HeroDetailComponentTemplate()
		{
			return PartialView();
		}
	}
}