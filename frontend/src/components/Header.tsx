const Header = ({props}:{props:any}) => {

    return (
        <>
            <div className="header-text">
                {props.text}
            </div>
        </>
    )
}
export default Header;