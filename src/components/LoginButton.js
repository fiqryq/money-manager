export default function LoginButton({ Login }) {
  return (
    <div
      className="w-36 h-12 rounded-full space-x-2 cursor-pointer hover:bg-gray-200 bg-white flex items-center justify-center"
      onClick={Login}
    >
      <img
        className="w-7 h-7"
        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
        alt="Logo"
      />
      <p className="font-bold text-lg">Login</p>
    </div>
  );
}
