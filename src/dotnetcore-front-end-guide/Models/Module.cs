namespace dotnetcore_front_end_guide.Models
{
    public class Module
    {
        public string group { get; set; }
        public string name { get; set; }
        public string url { get; set; }
        public ModuleInfo info { get; set; }
    }

    public class ModuleInfo
    {
        public string readme { get; set; }
    }
}
