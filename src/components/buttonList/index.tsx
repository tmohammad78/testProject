import Button from "../button";


const ButtonList = ({ number }: any) => {
    return (
        <div className="buttonList" style={{
            textAlign: "center"
        }} >
            <Button color="green">Click</Button>
            <Button color="red">Click</Button>
            <Button color="black">Click</Button>
            <Button color="blue">Click</Button>
        </div>
    )
}
export default ButtonList;