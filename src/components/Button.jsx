const Button = (props) => {

   const buttonStyle = {
        width: '60px',
        height: '60px',
        backgroundColor: props.color,
        color: 'black',
        fontSize: '1.75rem',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        font: 'bold',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
    }

    const internalClick = () => {
        if(props.color == "white"){
            props.onClick(props.id, props.number)
        }
    }


    return (
        <button onClick={internalClick} style={buttonStyle}>{props.number}</button>
    );
}

export default Button;