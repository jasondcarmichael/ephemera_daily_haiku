import { BsFacebook, BsInstagram, BsGithub, BsDribbble} from 'react-icons/bs'
import { Footer } from 'flowbite-react'

export default function FooterCom() {
    return (
        <div className="footer-wrapper">
            <Footer container={true}>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        {/* <div>
                            <Footer.Brand
                                href="https://flowbite.com"
                                src="https://flowbite.com/docs/images/logo.svg"
                                alt="Flowbite Logo"
                                name="Flowbite"
                            />
                        </div> */}
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="learn more" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    What is Haiku?
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Haiku Masters
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow Me" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Github
                                </Footer.Link>
                                <Footer.Link href="#">
                                    LinkedIn
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="About" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Bio
                                </Footer.Link>
                                <Footer.Link href="#">
                                    This Site
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="JDC"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                            href="#"
                            icon={BsFacebook}
                            />
                            <Footer.Icon
                            href="#"
                            icon={BsInstagram}
                            />
                            <Footer.Icon
                            href="#"
                            icon={BsGithub}
                            />
                            <Footer.Icon
                            href="#"
                            icon={BsDribbble}
                            />
                    </div>
                    </div>
                </div>
            </Footer>
        </div>
    )
}