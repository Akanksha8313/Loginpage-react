import './Summation.css';
const Form = () => {
    return (
        <>
            <div className="container-fluid m-0 p-0">
                <h1 className="bg-primary text-light p-3 text-center">Welcome!</h1>
            </div>

            <div className="container-fluid text-center d-flex justify-content-center align-items-center  div1">
                <div className=" w-50  text-center d-flex align-items-center flex-column card ">
                    <form className=" pl-4 w-80 " >
                    <div className="form-group">
                            <label for="exampleInputPassword1">Username</label>
                            <input type="text" className="form-control p-2" id="exampleInputPassword1" placeholder="Enter Your Username"/>
                        </div>
                        <div className="form-group ">
                            <label for="exampleInputEmail1" >Email address</label>
                            <input type="email" className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your email"/>
                                
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Username</label>
                            <input type="tel" className="form-control p-2" id="exampleInputPassword1" placeholder="Enter Your Phone Number"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control p-2" id="exampleInputPassword1" placeholder="Enter Your Password"/>
                            <small id="emailHelp" className="form-text text-muted ">We'll never share your email with anyone else.</small>
                        </div>
                       
                        <div className="form-check text-center">
                            <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="submit" className="btn btn-primary">Reset</button>
                    </form>
                </div>
            </div>

        </>
    )
}
export default Form;