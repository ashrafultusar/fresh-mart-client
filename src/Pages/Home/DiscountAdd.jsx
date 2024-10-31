import img1 from "../../assets/images/banner-ad-1.jpg";
import img2 from "../../assets/images/banner-ad-2.jpg";
import img3 from "../../assets/images/banner-ad-3.jpg";

const DiscountAdd = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"> 
        {/* Left Column */}
        <div
          className="relative col-span-2 bg-cover bg-center  text-white p-20"
          style={{ backgroundImage: `url('${img1}')` }}
        >
          <div className="text-start pt-6">
            <h2 className="text-3xl font-bold mb-2">Items on SALE</h2>
            <p className="text-lg mb-4">Discounts up to 30%</p>
            <button className=" text-md font-bold border-b py-1">Shop Now</button>
          </div>
        </div>

        

        {/* Right Column */}
        <div className="grid grid-rows-2 gap-4">
          {/* Top Right Card */}
          <div
            className="relative bg-cover bg-center p-10 text-white "
            style={{ backgroundImage: `url('${img2}')` }}
          >
            <div className="text-start">
              <h2 className="text-2xl font-bold mb-2">Combo Offers</h2>
              <p className="text-lg mb-4">Discounts up to 50%</p>
              <button className=" text-md font-bold border-b py-1">Shop Now</button>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div
            className="relative bg-cover bg-center p-10  text-white flex  "
            style={{ backgroundImage: `url('${img3}')` }}
          >
            <div className="text-start">
              <h2 className="text-2xl font-bold mb-2">Discount Coupons</h2>
              <p className="text-lg mb-4">Discounts up to 40%</p>
              <button className=" text-md font-bold border-b py-1">Shop Now</button>
            </div>
                      
                      

          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountAdd;
