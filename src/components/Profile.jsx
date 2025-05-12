function Profile(){
    return(
        <div className="m-4 flex">
            <img src="/profile.png" alt="Picture of me" className="w-[30%] rounded-xl mr-4"/>

            <div className="flex flex-col text-left justify-center">
                <h1 className="text-5xl font-bold">Kazi Tishan</h1>
                <h2 className="text-2xl pt-4">Undergraduate Student at Stevens Institute of Technology</h2>

                <div className="flex items-center my-0.5">
                    <img src="/location.svg" alt="Location" className="w-7 h-7 mr-2" />
                    <span className="text-xl">Brooklyn, New York</span>
                </div>

                <div className="flex items-center">
                    <img src="/email.svg" alt="Email" className="w-7 h-7 mr-2" />
                    <span className="text-xl">kazitishan12@gmail.com</span>
                </div>
            </div>


        </div>
    );
}

export default Profile;