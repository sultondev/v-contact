import "@/assets/styles/rounded-box.scss";
import { Link } from "react-router-dom";

type BoxTypeLink = {
  boxType: "link";
};

// was forced to use path as one of the primary
// props because for some reason conditional types
// doesn't work well

type Props = {
  children: JSX.Element;
  classes?: string;
  handleClick?: () => void;
  path?: string;
} & (BoxTypeLink | { boxType: "wrapper" } | { boxType: "button" });

const RoundedBox: React.FC<Props> = (props: Props) => {
  const { handleClick, children, boxType, path, classes = "" } = props;

  if (boxType === "link" && path) {
    return (
      <Link to={path} className={`rounded-box ${classes || ""}`}>
        {children}
      </Link>
    );
  } else if (boxType === "button") {
    return (
      <button onClick={handleClick} className={`rounded-box ${classes}`}>
        {children}
      </button>
    );
  }

  return (
    <div className={`rounded-box ${classes}`} onClick={handleClick}>
      {children}
    </div>
  );
};

RoundedBox.defaultProps = {
  path: "error",
};

export default RoundedBox;
