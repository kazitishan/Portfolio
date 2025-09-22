function Profile(){
    return(
        <div className="m-2 sm:m-4 flex flex-col sm:flex-row">
            <img src="/profile.png" alt="Picture of me" className="w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-xl mx-auto sm:mr-4 sm:mt-auto sm:mb-auto mb-4 sm:mb-0"/>
            
            <div className="flex flex-col text-center sm:text-left justify-center flex-wrap">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Kazi Tishan</h1>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl pt-2 sm:pt-4">Undergraduate Student at Stevens Institute of Technology</h2>

                <div className="flex items-center justify-center sm:justify-start my-1 sm:my-0.5 flex-wrap">
                    <img src="/location.svg" alt="Location" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2" />
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl">Brooklyn, New York</span>
                </div>

                <div className="flex items-center justify-center sm:justify-start flex-wrap">
                    <img src="/email.svg" alt="Email" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2" />
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl break-all sm:break-normal">kazitishan12@gmail.com</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;