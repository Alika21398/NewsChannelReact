import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Category() {
  let { cid } = useParams();
  console.log("cid", cid);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?country=au,us,gb&category=${cid}&apikey=pub_4187034ee846909841f07be0ee7d63ce20e56`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) =>
        // console.log("API Response:", data);
        setData(
          data.results.filter((items) => {
            if (items.image_url) return items;
          })
        )
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [cid]);

  // useEffect(()=>{
  //     const filteredData=data.filter((items)=>{
  //         if(items.image_url)
  //         return items;
  //     })
  //     console.log("filtereddata usin",filteredData)
  //     setData(filteredData);

  // }, [cid])

  console.log("using data", data);
  return (
    <>
      <div className="text-center capitalize text-2xl py-8">{cid}</div>
      <div className="flex flex-wrap gap-10  py-4 px-20">
        <div className="w-[60%]">
          {data?.map((items, index) => {
            return (
              <div className="py-9 flex justify-between border-b " key={index}>
                <h3 className="w-[50%]">
                  <Link to={`/details/${cid}/${items.article_id}`}>
                    {items.title}
                  </Link>
                </h3>
                <div className="border border-black w-[40%] h-[250px] rounded-md">
                  <Link to={`/details/${cid}/${items.article_id}`}>
                    <img
                      className="w-full h-full object-cover"
                      src={items.image_url}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[30%]">
          {data?.map((items, index) => {
            return (
              <div className="flex justify-between border-b py-7" key={index}>
                <div className="w-[45%]">
                  <Link to={`/details/${cid}/${items.article_id}`}>
                    {items.title}
                  </Link>
                </div>
                <div className="w-[33%] h-[100px] border shadow rounded-md border-black ">
                  <Link to={`/details/${cid}/${items.article_id}`}>
                    <img
                      className="w-full h-full object-cover "
                      src={items.image_url}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Category;
