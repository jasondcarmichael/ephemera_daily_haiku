export default function Home() {

    return (
        <div className="home-wrapper">
            <div className="hero-section">
            <section className="bg-white dark:bg-gray-900 bg-opacity-70 h-full">
                <div className="max-w-screen-xl px-4 py-8 mx-auto my-1 lg:gap-8 xl:gap-0 lg:py-16">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome to Ephemera</h1>
                        <p className="max-w-2xl mb-6 font-normal text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Maintain your daily creative practice by writing and sharing haiku.</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>       
                </div>
            </section>
            </div>

            <div className="testimonial-section">
            <section className="bg-white dark:bg-gray-900 bg-opacity-80">
                <div className="max-w-screen-xl px-4 py-8 mx-auto my-1 text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                        </svg> 
                        <blockquote>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">"Ephemera is just awesome. The daily prompts and the daily classical haikus have helped me break through writer's block and make a habit of creativity. I've even seen the benefits spill over into my business life."</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-7 h-7 rounded-full" src="https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/user/12.jpg" alt="profile picture"/>
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">Michelle Gough</div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at XYZ inc.</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
            </div>
        </div>
    )
}
