using Microsoft.AspNetCore.Mvc;
using DotNetBackend.Models;
using System.Collections.Generic;
using System.Linq;

namespace DotNetBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private static readonly List<LoginRequest> users = new List<LoginRequest>
        {
            new LoginRequest { Email = "ushan@gmail.com", Password = "ushan@2001" }
        };

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest loginRequest)
        {
            var user = users.FirstOrDefault(u => u.Email == loginRequest.Email && u.Password == loginRequest.Password);
            if (user != null)
            {
                return Ok(new { message = "Login successful" });
            }
            return Unauthorized(new { message = "Invalid credentials" });
        }
    }
}
