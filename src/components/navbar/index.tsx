const Navbar = () => {
  const current = 3;
  return (
    <div className="h-1/12 flex pt-9 ml-32 items-center">
      <p className="flex-1 text-4xl text-red-500 font-notable">WTG</p>
      <div id="RightSide" className="flex-0 font-inter text-white text-xl">
        <a className="mr-32">Cart</a>
        <a className="mr-32">Shop</a>
        <a className="mr-32 px-6 py-3 rounded-lg bg-green-900">
          Basket ({current})
        </a>
      </div>
    </div>
  );
};

export default Navbar;
