using Owin;
using Microsoft.Owin;
using System.Web;
using System.Web.Http;

[assembly:OwinStartup(typeof(BookManagement.Configuration.Startup.AppStartup))]

namespace BookManagement.Configuration.Startup
{
    public class AppStartup
    {
        public void Configuration(IAppBuilder app)
        {
            WebApiConfig.Register(app);
            NinjectConfig.Register(app);
        }
    }
}