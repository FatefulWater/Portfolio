import { styles } from "../styles";
import CharacterCanvas from "./canvas/Character";

const About = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#e3ee4d]" />
          <div className="w-1 sm:h-80 h-40 yellow-gradient" />
        </div>

        <div className="">
          <h1 className="text-5xl">Hi, I'm <span className={`${styles.HeaderText}`}> Enrico Renner</span></h1>
          <p className={`${styles.SubText}`}> I'm a self-taught Software Developer with a big affinity for IT, Technology and Science. if your looking for a Software Developer, let me know.</p>
        </div>
      </div>

      <CharacterCanvas />
    </section>
  )
}

export default About;