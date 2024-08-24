const Header = ({props}:{props:any}) => {

    return (
        <>
            <div className="header-text">
                {props.text}

                {props.text === "Welcome Back!" &&
                    <>
                        <br/>
                        Sign In
                    </>
                }
                {props.text === "Welcome!" &&
                    <>
                        <br/>
                        Sign Up
                    </>
                }
            </div>
        </>
    )
}
export default Header;