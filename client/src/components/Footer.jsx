import { BsGithub, BsLinkedin, BsSlack } from 'react-icons/bs'
import { Footer } from 'flowbite-react'

export default function FooterCom() {
    return (
        <div className="footer-wrapper">
            <Footer container={true}>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-2">
                        <div>
                            <Footer.Brand
                                src="https://cdnb.artstation.com/p/assets/images/images/012/729/133/large/julian-hammond-gibson-blankhaikulogo4.jpg?1536218888"
                                rounded={true}
                                alt="Ephemera Logo"
                                name="Ephemera"
                            /> 
                        </div>

                    <div className="grid grid-rows-1 gap-8 sm:mt-2 sm:gap-6">
                        <div>
                            <Footer.LinkGroup row={true}>
                                <Footer.Link className="mr-6" href="#">
                                    What is Haiku?
                                </Footer.Link>
                                <Footer.Link className="mr-6" href="#">
                                   About
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Contact
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="Jason Carmichael"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Let's Connect
                            </span>
                
                            <Footer.Icon
                            href="www.linkedin.com/in/jasondcarmichael"
                            icon={BsLinkedin}
                            />
                            <Footer.Icon
                            href="https://github.com/jasondcarmichael"
                            icon={BsGithub}
                            />
                            <Footer.Icon
                            className="mr-15"
                            href="#"
                            icon={BsSlack}
                            />
                    </div>
                    </div>
                </div>
            </Footer>
        </div>
    )
}

