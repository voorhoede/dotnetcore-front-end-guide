using System.Collections.Generic;
using System.IO;
using System.Linq;
using dotnetcore_front_end_guide.ViewModels.Modules;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;

namespace dotnetcore_front_end_guide.Controllers
{
    public class ModulesController : Controller
    {
        private readonly IUrlHelper _urlHelper;
        private readonly string _modulesRootPath;

        public ModulesController(IHostingEnvironment hostingEnvironment, IActionContextAccessor actionContextAccessor, IUrlHelperFactory urlHelperFactory)
        {
            _urlHelper = urlHelperFactory.GetUrlHelper(actionContextAccessor.ActionContext);
            _modulesRootPath = Path.Combine(hostingEnvironment.ContentRootPath, "Views");
        }

        [Route("/modules/")]
        public IActionResult Modules()
        {
            return Json(GetModules());
        }

        [Route("modules/{group}/{name}")]
        public IActionResult Module(string group, string name)
        {
            return View("Module", $"~/Views/{group}/{name}/{name}.demo.cshtml");
        }

        [Route("modules/{group}/{name}/info")]
        public IActionResult Info(string group, string name)
        {
            string readmePath = Path.Combine(_modulesRootPath, group, name, "README.md");
            if (!System.IO.File.Exists(readmePath))
            {
                return Content(string.Empty);
            }

            using (var reader = new StreamReader(new FileStream(readmePath, FileMode.Open)))
            {
                return View("Info", CommonMark.CommonMarkConverter.Convert(reader.ReadToEnd()));
            }
        }

        private IEnumerable<ModuleViewModel> GetModules()
        {
            foreach (string moduleGroupDirectoryPath in Directory.GetDirectories(_modulesRootPath))
            {
                var moduleGroupDirectoryPathParts = moduleGroupDirectoryPath.Split(Path.DirectorySeparatorChar);
                var moduleGroup = moduleGroupDirectoryPathParts.Last();

                foreach (var moduleDirectoryPath in Directory.GetDirectories(moduleGroupDirectoryPath))
                {
                    var moduleDirectoryPathParts = moduleDirectoryPath.Split(Path.DirectorySeparatorChar);
                    var moduleName = moduleDirectoryPathParts.Last();

                    string[] demofiles = Directory.GetFiles(moduleDirectoryPath, $"{moduleName}.demo.cshtml", SearchOption.TopDirectoryOnly);

                    if (!demofiles.Any())
                    {
                        yield break;
                    }

                    string[] readmeFiles = Directory.GetFiles(moduleDirectoryPath, "README.md", SearchOption.TopDirectoryOnly);
                    yield return new ModuleViewModel()
                    {
                        group = moduleGroup,
                        name = moduleName,
                        info = readmeFiles.Any()
                            ? new ModuleInfoViewModel { readme = _urlHelper.Action("Info", new { group = moduleGroup, name = moduleName }) }
                            : null,

                        url = _urlHelper.Action("Module", new { group = moduleGroup, name = moduleName })
                    };
                }
            }
        }
    }
}
