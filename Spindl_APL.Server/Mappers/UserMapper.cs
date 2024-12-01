using Spindl_APL.Server.Data.Entities;
using Spindl_APL.Server.DTOs;

namespace Spindl_APL.Server.Mappers
{
    public static class UserMapper
    {
        public static UserDto ToDto(ApplicationUser user)
        {
            return new UserDto
            {
                UserName = user.UserName,
                FirstName = user.FirstName,
                LastName = user.LastName,
                PhoneNumber = user.PhoneNumber
            };
        }

        public static ApplicationUser ToEntity(UserDto user)
        {
            return new ApplicationUser
            {
                UserName = user.UserName,
                FirstName = user.FirstName ?? "",
                LastName = user.LastName ?? "",
            };
        }
    }
}
