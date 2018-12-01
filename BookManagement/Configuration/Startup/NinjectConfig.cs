

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Owin;
using Ninject;
using Ninject.Web.Common.OwinHost;
using Ninject.Web.WebApi.OwinHost;
using BookManagement.Data;
using BookManagement.Data.Repositories;
using BookManagement.Data.Services;

namespace BookManagement.Configuration.Startup
{
    public class NinjectConfig
    {
        public static void Register(IAppBuilder app)
        {
            var config = app.GetConfiguration();

            app.UseNinjectMiddleware(CreateKernel);

            app.UseNinjectWebApi(config);
        }

        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();

            RegisterServices(kernel);

            return kernel;
        }

        private static void RegisterServices(StandardKernel kernel)
        {
            kernel.Bind<IBookUnitOfWorkFactory>().To<BookUnitOfWorkFactory>();
            kernel.Bind<IBookService>().To<BookService>();
        }
    }
}