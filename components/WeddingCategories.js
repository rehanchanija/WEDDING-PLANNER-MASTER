import React from "react";
import WeddingCategoryCard from "./Cards/WeddingCategoryCard";

const WeddingCategories = () => {
  return (
    <div id="categories" className="pt-6 w-full flex justify-center xl:px-0 px-4 bg-white">
      <div className=" xl:max-w-[90%] w-full flex flex-col">
        <h1 className="text-2xl sm:p-4 pb-4 text-primary font-semibold">Wedding Categories</h1>
        <div className="flex justify-evenly flex-wrap">
          <WeddingCategoryCard
            color="#d8dffc"
            heading="Wedding Planner"
            desc="Wedding Planner, Event Planner"
            url="venue"
            link="wedding-planner"
          />
          <WeddingCategoryCard
            color="#f4d5c2"
            heading="Wedding Decoration"
            desc="Wedding Decorators, Wedding Venues"
            url="3"
            link="wedding-decoration"
          />
          <WeddingCategoryCard
            color="#dfb2ad"
            heading="Destination wedding"
            desc="Destination wedding location, destination wedding booking, Wedding arrangements"
            url="13"
            link="destination-wedding"
          />
          <WeddingCategoryCard
            color="#cfcdb8"
            heading="Event Planner"
            desc="Corporate Events, Thematic Events, Family Events"
            url="4"
            link="event-planner"
          />
          <WeddingCategoryCard
            color="#dcf7f7"
            heading="Flower Decor"
            desc="Floral theme, flower decorations, Decorators"
            url="1"
            link="flower-decor"
          />
          <WeddingCategoryCard
            color="#f4d5c2"
            heading="Photography, Videography"
            desc="Photographers, Cinema/Video"
            url="2"
            link="photographers-videography-and-pre-wedding"
          />
          <WeddingCategoryCard
            color="#f4d5c2"
            heading="Pre-Wedding"
            desc="Pre-wedding photography, Decoration,Pre-wedding Locations"
            url="17"
            link="pre-wedding"
          />
          <WeddingCategoryCard
            color="#dfb2ad"
            heading=" Birthday Party Planner "
            desc="Birthday theme, birthday decoration, catering, birthday cake"
            url="16"
            link="birthday-party-planner"
          />
           <WeddingCategoryCard
            color="#dfb2ad"
            heading="Wedding Package "
            desc="Location, Decorations, Caterer, Booking, Photographers, Artist"
            url="10"
            link="wedding-package"
          />
        </div>
      </div>
    </div>
  );
};

export default WeddingCategories;
