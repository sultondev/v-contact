import "@/assets/styles/rounded-box.scss";

type Props = {
    children: JSX.Element;
    classes?: string;
};

const RoundedBox = (props: Props) => {
    return (
        <div
            className={`rounded-box ${props.classes || ""}`}
        >
            {props.children}
        </div>
    );
};

export default RoundedBox;
