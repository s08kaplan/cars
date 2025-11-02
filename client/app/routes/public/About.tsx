import React from 'react'
import SceneText from 'scenes/Scene-Text'
import useLanguageStore from 'src/store/useLanguageStore';

const About = () => {

    const lang = useLanguageStore((s) => s.lang);
    const t = useLanguageStore((s) => s.t);

      const paragraphs = t("about.paragraphs");
      const textArray = Array.isArray(paragraphs) ? paragraphs : [];

  return (
    <section className='bg-black h-full'>
      <SceneText/>
      <article className='text-white p-2 md:p-4'>
        <h2>{t("about.title")}</h2>
       {textArray.map((paragraph, i) => (
        <p
          key={i}
          className="text-base"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
      </article>
      </section>
  )
}

export default About