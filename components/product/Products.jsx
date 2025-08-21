"use client";

import { useState, useEffect } from "react";
import { ProductItem } from "./ProductsSection";
import sal from "sal.js";

const Products = ({ categories, docs, number }) => {
  const [active, setActive] = useState("all");

  return (
    <>
      {!number && (
        <CategoryPills
          categories={categories}
          active={active}
          setActive={setActive}
        />
      )}

      <div className="row rowGap30">
        {docs.map(
          (item, index) =>
            (active === "all" || item.data.category?.id === active) && (
              <ProductItem key={index} data={item} index={index} />
            )
        )}
      </div>
    </>
  );
};

const CategoryPills = ({ categories, active, setActive }) => {
  useEffect(() => {
    sal();
  }, [active]);

  return (
    <>
      <div className="category-pills">
        {[
          {
            id: "all",
            data: {
              heading: "All",
            },
          },
          ...categories,
        ]?.map((item, index) => (
          <div
            key={index}
            onClick={() => setActive(item.id)}
            className={`category-pill
            ${item.id === active ? "active" : ""}
          `}
            data-sal="slide-up"
            data-sal-duration="1200"
            data-sal-delay={index * 100}
          >
            {item.data.heading}
          </div>
        ))}
      </div>

      <style jsx>{`
        .category-pills {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
        }
        .category-pill {
          background-color: #f0f0f0;
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 14px;
          color: #333;
          cursor: pointer;
          transition: all 0.3s;
        }

        .category-pill:hover {
          background-color: var(--color-primary);
          color: #fff;
        }

        .category-pill.active {
          background-color: var(--color-primary);
          color: #fff;
        }

        @media (max-width: 591px) {
          .category-pill {
            padding: 4px 10px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default Products;
