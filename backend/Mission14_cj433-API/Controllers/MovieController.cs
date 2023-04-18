using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mission14_cj433_API.Data;
using Microsoft.AspNetCore.Mvc;

namespace Mission14_cj433_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FoodController : Controller
    {
        private MoviesDbContext context;

        public FoodController(MoviesDbContext temp) {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            var x = context.Movies.ToArray();

            return context.Movies.ToArray();
        }
    }
}