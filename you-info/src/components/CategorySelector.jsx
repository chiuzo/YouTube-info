import React from "react";

const categories = [
  { value: "", label: "All Categories" },
  { value: "10", label: "Music" },
  { value: "1", label: "Movies" },
  { value: "24", label: "Entertainment" },
  { value: "25", label: "News" },
  { value: "17", label: "Sports" },
  { value: "27", label: "Education" },
  { value: "22", label: "People & Blogs" },
  { value: "26", label: "How-to & Style" },
  { value: "29", label: "Nonprofits" },
  { value: "28", label: "Science & Tech" },
  { value: "20", label: "Gaming" },
  { value: "23", label: "Comedy" },
];

const CategorySelector = ({ selectedCategory, onCategoryChange }) => {
  return (
    <select
      className="p-2 rounded-md border border-gray-300"
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      {categories.map((cat) => (
        <option key={cat.value} value={cat.value}>
          {cat.label}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
