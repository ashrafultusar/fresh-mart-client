import img1 from "../../assets/images/category-thumb-6.jpg";
const Purchase = () => {
  return (
    <div className="container mx-auto my-24 px-3">
      <div className="hero bg-cover bg-center" style={{ backgroundImage: `url('${img1}')` }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">
              Get 25% Discount on your first purchase
            </h1>
            <p className="py-6 opacity-70">
              Just Sign Up & Register it now to become member.
            </p>
          </div>
          <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body text-black">
              <div className="form-control space-y-4">
                <input
                  type="name"
                  placeholder="name"
                  className="pl-2 text-white py-2 "
                  required
                />
                <input
                  type="email"
                  placeholder="email"
                  className="pl-2 text-white py-2 "
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="bg-[#212529] text-white py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
