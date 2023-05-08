
function Login() {
    return (
        <>
            <div className="form">
                <form>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" style={{ marginLeft: "6px" }} required />
                        {/* {renderErrorMessage("uname")} */}
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" style={{ marginLeft: "6px" }} required />
                        {/* {renderErrorMessage("pass")} */}
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;