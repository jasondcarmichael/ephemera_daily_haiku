import { Navbar } from "flowbite-react"

export default function Nav() {
    return (
        <div>
        <Navbar
            fluid={true}
            rounded={true}
            >
            <Navbar.Brand>
                {/* <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                /> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Ephemera
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Account
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Register
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}