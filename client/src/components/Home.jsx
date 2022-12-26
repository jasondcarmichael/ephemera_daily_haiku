import SignIn from "./SignIn"

export default function Home() {
    return (
        <div className="home-wrapper">
            <div>
                <SignIn />
            </div>
            <div>
                <h2>Today is Friday, December 23</h2>
            </div>
            <br></br>
            <div>
                <p> trying to walk straight<br></br>
                    down a path of logicality<br></br>
                    while tipsy<br></br>
                </p>
                <br></br>
                <p>- Meitei 1894-1965</p>
            </div>
        </div>
    )
}