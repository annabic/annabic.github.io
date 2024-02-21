import React, { useState } from "react";
import type { MarkdownInstance } from "astro";
import Card from "./Card";

interface Frontmatter {
  section: string;
  title: string;
  description?: string;
}

interface Props {
  posts: Array<MarkdownInstance<Frontmatter>>;
  sections: Record<string, Array<MarkdownInstance<Frontmatter>>>;
}

function CodilityPosts({ posts: allPosts, sections }: Props) {
  const [selectedFilters, setSelectedFilters] = useState<string | undefined>();

  const handleFilterChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const filter = event.currentTarget.getAttribute("data-filter");
    if (filter) {
      setSelectedFilters((prev) => (prev === filter ? undefined : filter));
    }
  };

  const handleAllClick = () => {
    setSelectedFilters(undefined);
  };

  const filteredPosts = !selectedFilters ? allPosts : sections[selectedFilters] ?? [];

  return (
    <>
      <div className="filter-container mt-4 space-x-2" key={selectedFilters + "filters"}>
        <button
          onClick={handleAllClick}
          className={`inline-block cursor-pointer px-3 py-1 text-sm font-semibold ${
            !selectedFilters ? "bg-lime-700 text-white" : "border border-lime-700 text-lime-700"
          } rounded-full hover:bg-lime-800 hover:text-white`}
        >
          All
        </button>
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            onClick={handleFilterChange}
            data-filter={section}
            // disabled={section === selectedFilters}
            className={`inline-block cursor-pointer rounded-full px-3 py-1 text-sm font-semibold disabled:cursor-default ${
              selectedFilters === section
                ? "bg-lime-700 text-white"
                : "border border-lime-700 text-lime-700"
            } hover:bg-lime-800 hover:text-white disabled:hover:bg-lime-700`}
          >
            {section}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4" key={selectedFilters + "posts"}>
        {filteredPosts.map((post) => (
          <Card key={post.url} {...post.frontmatter} url={post.url} />
        ))}
      </div>
    </>
  );
}

export default CodilityPosts;
