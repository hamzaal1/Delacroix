import Blog from "./blog"

function Blogsection() {
    return (
        <div className="min-w-full py-10">
            <div className="container">
                <h3 className="text-3xl font-semibold text-center mb-2">Recent Blog</h3>
                <p
                    className="text-center text-base font-normal"
                >
                    Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center py-6 gap-5">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
            </div>
        </div>
    )
}


export default Blogsection