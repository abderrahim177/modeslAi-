
import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // TODO: Connect your Laravel login API here
      console.log(formData);

      // Example:
      // const response = await axios.post("/api/login", formData);

    } catch (err) {
      setError("Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth with Laravel
    console.log("Google Login");
  };

 
return (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-3">

    <div className="w-full max-w-[360px]">

      {/* Logo */}
      <div className="flex justify-center mb-3">
        <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center">
          <Mail className="text-white" size={19} />
        </div>
      </div>

      {/* Header */}
      <div className="text-center space-y-1 mb-4">
        <h1 className="text-xl font-semibold tracking-tight text-slate-900">
          Welcome back
        </h1>

        <p className="text-xs text-slate-500">
          Enter your credentials to access your account
        </p>
      </div>

      {/* Card */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-slate-200 rounded-md h-9 text-xs font-medium text-slate-700 hover:bg-slate-50 transition"
        >
          <svg viewBox="0 0 48 48" width="17" height="17">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 3.01 13.22l7.98 6.19C12.85 13.72 18.01 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.73 7.18l7.28 5.65c4.25-3.92 7.49-9.71 7.49-17.3z"/>
            <path fill="#FBBC05" d="M10.99 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a24 24 0 0 0 0 21.56l7.98-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.28-5.65c-2.02 1.35-4.6 2.15-8.62 2.15-5.99 0-11.15-4.22-13.01-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Continue with Google
        </button>

        {/* Separator */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"/>
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-[10px] text-slate-400">
              OR CONTINUE WITH EMAIL
            </span>
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-xs text-red-500 mb-3">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-800">
              Email
            </label>

            <div className="relative">
              <Mail
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="name@example.com"
                className="w-full h-9 pl-9 pr-3 rounded-md border border-slate-200 text-xs outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium text-slate-800">
                Password
              </label>

              <a
                href="#forgot"
                className="text-[11px] text-slate-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <div className="relative">
              <Lock
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full h-9 pl-9 pr-9 rounded-md border border-slate-200 text-xs outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                {showPassword ? <EyeOff size={15}/> : <Eye size={15}/>}
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="w-3.5 h-3.5 accent-slate-900 cursor-pointer"
            />

            <label
              htmlFor="remember"
              className="text-xs text-slate-600 cursor-pointer"
            >
              Remember me
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-9 bg-slate-900 text-white rounded-md text-xs font-medium hover:bg-slate-800 transition disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 size={15} className="animate-spin"/>
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>

        </form>

        {/* Register */}
        <p className="text-center text-xs text-slate-500 mt-4">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-slate-900 hover:underline"
          >
            Sign up
          </a>
        </p>

      </div>

      {/* Footer */}
      <p className="text-center text-[10px] text-slate-400 mt-3">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>

    </div>
  </div>
);
}
