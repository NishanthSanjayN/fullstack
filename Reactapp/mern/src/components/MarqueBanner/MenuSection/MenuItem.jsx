const MenuItem = ({ item }) => {
    return (
      <div className="dish-box text-center bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="dist-img h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}></div>
        <div className="dish-rating bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto -mt-6">
          {item.rating} <i className="uil uil-star ml-1"></i>
        </div>
        <div className="dish-title p-4">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p className="text-gray-500">{item.calories}</p>
        </div>
        <div className="dish-info flex justify-between px-6 py-2 border-t border-b border-gray-100">
          <div>
            <p className="text-gray-500">Type</p>
            <b className="text-gray-800">{item.type}</b>
          </div>
          <div>
            <p className="text-gray-500">Persons</p>
            <b className="text-gray-800">{item.persons}</b>
          </div>
        </div>
        <div className="dist-bottom-row flex justify-between items-center p-4">
          <b className="text-xl text-orange-600">Rs. {item.price}</b>
          <button className="dish-add-btn bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
            <i className="uil uil-plus"></i>
          </button>
        </div>
      </div>
    );
  };
  
  export default MenuItem;