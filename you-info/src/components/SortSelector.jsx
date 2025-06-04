import React from "react";

const SortSelector = ({ selectedSort, onSortChange }) => {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium text-gray-600">Sort by:</label>
      <select
        value={selectedSort}
        onChange={(e) => onSortChange(e.target.value)}
        className="border border-gray-300 rounded-md px-2 py-1 text-sm"
      >
        <option value="default">Default</option>
        <option value="views">Highest Views</option>
        <option value="likes">Most Liked</option>
        <option value="comments">Most Commented</option>
      </select>
    </div>
  );
};

export default SortSelector;
