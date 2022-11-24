import React from "react";

function MyList() {
  return (
    <div className="h-screen pt-28 bg-white">
      <section className="flex flex-col pl-12 pb-24 bg-section-theme bg-center bg-cover">
        <h2 className="ml-8 w-full text-2xl text-c-oasis font-medium">
          <span className="font-bold text-gray-600">My</span> List
        </h2>
        <p className="w-2/3 my-4 text-gray-600 font-medium">
          <span className="text-xl font-extrabold">L</span>e Lorem Ipsum est
          simplement du faux texte employé dans la composition et la mise en
          page avant impression.
        </p>
      </section>
      <section className="bg-c-creamy h-screen">
        {/* fill with data api */}
      </section>
    </div>
  );
}

export default MyList;
