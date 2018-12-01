using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BookManagement.Configuration.Startup
{
    public class WebApiConfig
    {
        public static void Register(IAppBuilder app)
        {
            var config = app.GetConfiguration();

            config.Formatters.Add(new JsonFormatter());

            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                 name: "DefaultApi",
                 routeTemplate: "api/{controller}/{id}",
                 defaults: new { id = RouteParameter.Optional }
                );
        }
    }
}