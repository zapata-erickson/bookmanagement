using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Web;

namespace BookManagement.Configuration.Startup
{
    public class JsonFormatter : JsonMediaTypeFormatter
    {
        public JsonFormatter()
        {
            this.SupportedMediaTypes.Add(new System.Net.Http.Headers.MediaTypeHeaderValue("text/html"));
        }

        public override void SetDefaultContentHeaders(Type type, HttpContentHeaders headers, MediaTypeHeaderValue mediaType)
        {
            headers.ContentType = new MediaTypeHeaderValue("application/json");
            base.SetDefaultContentHeaders(type, headers, mediaType);
        }
    }
}