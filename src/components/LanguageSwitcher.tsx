type LanguageSwitcherProps = {
  switchText: string;
  onChange: (lang: 'en' | 'fa') => void;
};

export default function LanguageSwitcher({ switchText, onChange }: LanguageSwitcherProps) {
  return (
    <div className="absolute top-8 right-8 z-20">
      <button
        onClick={() => onChange(switchText === "English" ? "en" : "fa")}
        className={`relative group bg-white text-black px-6 py-2 text-lg font-bold tracking-tight hover:-translate-x-1 hover:-translate-y-1 transition-transform ${
          switchText === "فارسی" ? "font-anjoman" : "font-clash"
        }`}
      >
        <div className="absolute inset-0 bg-teal-400 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
        {switchText}
      </button>
    </div>
  );
} 