import CategoryFilterButton from "./CategoryFilterButton";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
	return (
		<>
			<CategoryFilterButton buttonLabel={"All"} isActive={selectedCategory === "all"} onClick={setSelectedCategory} category="all" />
			<CategoryFilterButton
				buttonLabel={"Workshop / Hackathon"}
				isActive={selectedCategory === "workshop"}
				onClick={setSelectedCategory}
				category="workshop"
			/>
			<CategoryFilterButton buttonLabel={"Party / Dinner"} isActive={selectedCategory === "party"} onClick={setSelectedCategory} category="party" />
			<CategoryFilterButton
				buttonLabel={"Conference / Summit"}
				isActive={selectedCategory === "conference"}
				onClick={setSelectedCategory}
				category="conference"
			/>
			{/* <CategoryFilterButton
                buttonLabel={'Gaming'}
                isActive={selectedCategory === 'gaming'}
                onClick={setSelectedCategory}
                category='gaming'
            /> */}
			<CategoryFilterButton buttonLabel={"Networking"} isActive={selectedCategory === "networking"} onClick={setSelectedCategory} category="networking" />
			<CategoryFilterButton buttonLabel={"Sports"} isActive={selectedCategory === "sports"} onClick={setSelectedCategory} category="sports" />
			<CategoryFilterButton buttonLabel={"Other"} isActive={selectedCategory === "other"} onClick={setSelectedCategory} category="other" />
		</>
	);
};

export default CategoryFilter;
