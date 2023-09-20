import React from "react";
import { Dropdown } from "react-bootstrap";

const SelectCategory = ({
  categories,
  selectedCategory,
  handleCategoryChange,
}) => {
  return (
    <div>
      <Dropdown className="my-3 px-2 ">
        <Dropdown.Toggle variant="red" className="text-dark fs-3 mx-2 px-5" 
        style={{borderRadius:'2rem',background:'white'}}>
          {selectedCategory === "default" ? "Products" : `${selectedCategory}`}
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="py-2 px-3 mx-3 my-2"
          style={{ borderRadius: "2rem" }}
        >
          <Dropdown.Item
            onClick={() => handleCategoryChange("default")}
            active={selectedCategory === "default"}
          >
            Products
          </Dropdown.Item>

          {categories.map((category) => (
            <Dropdown.Item
              key={category}
              onClick={() => handleCategoryChange(category)}
              active={selectedCategory === category}
            >
              {category}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SelectCategory;
