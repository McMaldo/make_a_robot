interface TechIconProps {
  name: string;
  size?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, size = "size-11" }) => {
  name = name.replace(" ", "");
  const hoverColor = (name: string) => {
    switch (name) {
      case "React":
      case "Trello":
      case "TypeScript":
      case "Python":
      case "CSS":
      case "MaterialUI":
      case "Antd":
        return "group-hover:bg-[#102330]";
      case "TailwindCSS":
        return "group-hover:bg-[#112625]";
      case "Git":
      case "Zen":
      case "HTML":
      case "Svelte":
        return "group-hover:bg-[#3C261F]";
      case "Figma":
      case "PHP":
      case "Vite":
        return "group-hover:bg-[#2D1F3F]";
      default:
        return "group-hover:bg-[#262430]";
    }
  };

  return (
    <svg
      className={`tech-icon ${name} inline-block ${size} rounded-lg transition-colors select-none bg-btn ${hoverColor(name)}`}
      aria-hidden="true"
    >
      <use xlinkHref={`/icon/techIcons.svg#${name}`}></use>
    </svg>
  );
};
export default TechIcon;
