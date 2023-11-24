export const CategoriesSection = () => {
  const categories = [
    {
      name: "Blouses",
      imgUrl: "/images/categories/blouses.webp",
    },

    {
      name: "Coats",
      imgUrl: "/images/categories/coats.webp",
    },

    {
      name: "Dresses",
      imgUrl: "/images/categories/dress.webp",
    },

    {
      name: "Skirts",
      imgUrl: "/images/categories/skirts.webp",
    },
    {
      name: "sweaterss",
      imgUrl: "/images/categories/sweaters.webp",
    },
    {
      name: "sweats",
      imgUrl: "/images/categories/sweats.webp",
    },
    {
      name: "vests",
      imgUrl: "/images/categories/vests.webp",
    },
  ];

  return (
    <div>
      <h2 className="text-center text-xl mt-6 mb-3 p-2">Browse by Category</h2>
      <div className="grid grid-cols-4">
        {categories.map((category, index) => {
          return <div>{category.name}</div>;
        })}
      </div>
    </div>
  );
};
