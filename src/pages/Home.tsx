import Section from "../components/Section";

export default function Home() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-4">
      <Section
        title="👋 Hey there!"
        text="Welcome to my personal portfolio. I’m Richie Patil, a developer and creator who loves building clean, fast, and thoughtful digital experiences."
      />
      <Section
        title="🚀 Projects"
        text="A showcase of my favorite projects and experiments, from data visualizations to creative web apps."
      />
      <Section
        title="📬 Get in touch"
        text="You can find me on LinkedIn, Instagram or download my resume. Always open to chat!"
      />
    </div>
  );
}
