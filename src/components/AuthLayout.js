import background from "../assets/background.jpg";

export default function AuthLayout({ title, children }) {
  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-[380px] bg-white/10 backdrop-blur-md rounded-2xl border border-white/40 p-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-white text-center mb-8">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}
