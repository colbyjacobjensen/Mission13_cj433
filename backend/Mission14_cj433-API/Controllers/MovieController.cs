using Mission14_cj433_API.Data;
using Microsoft.AspNetCore.Mvc;

namespace Mission14_cj433_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;

        public MovieController(MoviesDbContext temp) {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            var x = context.Movies
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();

            return x;
        }
    }
}