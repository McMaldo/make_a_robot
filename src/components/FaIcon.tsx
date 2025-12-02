interface FaIconProps {
  name?: string;
  size?: string;
}

const FaIcon: React.FC<FaIconProps> = ({
  name = "envelope",
  size = "size-6",
}) => {
  const iconName = name.toLowerCase();

  return (
    <svg
      className={`fa-icon ${size} inline-block select-none`}
      aria-hidden="true"
    >
      <use xlinkHref={`/icon/faIcons.svg#${iconName}`} />
    </svg>
  );
};
export default FaIcon;
