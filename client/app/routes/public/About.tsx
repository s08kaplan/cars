/* import SceneText from "../../../scenes/Scene-Text";
import CarSpinner from "src/components/Spinners/CarSpinner";
import useLanguageStore from "src/store/useLanguageStore";

const About = () => {
  const lang = useLanguageStore((s) => s.lang);
  const t = useLanguageStore((s) => s.t);

  const paragraphs = t("about.paragraphs");
  const textArray = Array.isArray(paragraphs) ? paragraphs : [];

  return (
    <section className="bg-black h-full">
      <SceneText />
      <article className="text-white p-2 md:p-4">
        <h2
          className="slow-visible text-center font-extrabold"
          style={
            {
              "--animation-duration": "5s",
              "--animation-delay": "0s",
            } as React.CSSProperties
          }
        >
          {t("about.title")}
        </h2>
        {textArray.map((paragraph, i) => (
          <p
            key={i}
            className="text-base slow-visible"
            style={
              {
                "--animation-duration": "6s",
                "--animation-delay": "0s",
              } as React.CSSProperties
            }
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </article>
    </section>
  );
};

export default About;
 */

import SceneText from "../../../scenes/Scene-Text";
import CarSpinner from "src/components/Spinners/CarSpinner";
import useLanguageStore from "src/store/useLanguageStore";

const About = () => {
  const lang = useLanguageStore((s) => s.lang);
  const t = useLanguageStore((s) => s.t);

  const paragraphs = t("about.paragraphs");
  const textArray = Array.isArray(paragraphs) ? paragraphs : [];

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* 3D Scene Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12">
        <SceneText />
      </div>

      {/* Main Glassmorphism Article Card */}
      <article className="relative z-10 max-w-4xl mx-auto bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-2xl space-y-6">
        {/* Title */}
        <h2
          className="slow-visible text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center bg-linear-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent pb-2 border-b border-slate-800/60"
          style={
            {
              "--animation-duration": "5s",
              "--animation-delay": "0s",
            } as React.CSSProperties
          }
        >
          {t("about.title")}
        </h2>

        {/* Paragraphs List */}
        <div className="space-y-5 pt-2">
          {textArray.map((paragraph, i) => (
            <p
              key={i}
              className=" bg-transparent! text-slate-300 text-base sm:text-lg leading-relaxed font-normal slow-visible hover:text-white transition-colors duration-200"
              style={
                {
                  "--animation-duration": "6s",
                  "--animation-delay": "0s",
                } as React.CSSProperties
              }
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default About;
