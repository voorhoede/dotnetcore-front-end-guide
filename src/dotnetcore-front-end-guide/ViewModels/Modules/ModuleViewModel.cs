namespace dotnetcore_front_end_guide.ViewModels.Modules
{
    public class ModuleViewModel
    {
        public string group { get; set; }
        public string name { get; set; }
        public string url { get; set; }
        // Todo : Remove this VM after the demo-viewer.js is minified again, so it does not rely on this naming. Should be ReadMeUrl
        public ModuleInfoViewModel info { get; set; }
    }

    // Todo : Remove this VM after the demo-viewer.js is minified again.
    public class ModuleInfoViewModel
    {
        public string readme { get; set; }
    }
}
