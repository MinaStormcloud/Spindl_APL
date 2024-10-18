namespace Spindl_APL.Server.Helpers
{
    public class ServiceResponse<T>
    {
        public T? Data { get; set; }
        public bool Succeeded { get; set; } = true;
        public List<string>? Errors { get; set; }

        public static ServiceResponse<T> SuccessResponse(T data)
        {
            return new ServiceResponse<T> { Data = data, Succeeded = true };
        }

        public static ServiceResponse<T> FailureResponse(List<string> errors)
        {
            return new ServiceResponse<T> { Succeeded = false, Errors = errors };
        }
    }
}
