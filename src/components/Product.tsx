export const Product = ({ product }) => {
  console.log(product);

  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
            {/*image*/}
            <div className="w-[200px] flex mx-auto justify-center items-center">
                <img className="max-h-[160px] group-hover:scale-110" src={image} alt={title} />
            </div>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};
