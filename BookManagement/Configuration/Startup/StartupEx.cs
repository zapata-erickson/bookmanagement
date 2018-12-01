using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BookManagement.Configuration.Startup
{
    public static class StartupEx
    {
        private static Lazy<HttpConfiguration> lzConfiguration = new Lazy<HttpConfiguration>(()=> new HttpConfiguration(),true);

        public static HttpConfiguration GetConfiguration(this IAppBuilder app)
        {
            return lzConfiguration.Value;
        }
    }
}