import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const { cid } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/latest?country=au,us,gb&category=business,entertainment,crime,health,science&apikey=pub_4187034ee846909841f07be0ee7d63ce20e56`
    )
      .then((res) => {
        return res.json();
      })
      .then((resdata) => {
        setData(
          resdata.results.filter((items) => {
            if (items.image_url) return items;
          })
        );
      });

    //   if(cid){
    //   fetch( `https://newsdata.io/api/1/latest?country=au,us,gb&category=${cid}&apikey=pub_4187034ee846909841f07be0ee7d63ce20e56`
    //   )
    //   .then((res)=>{
    //     return res.json()

    //   }
    //  )
    //   .then((data)=>{
    //     console.log("efectdata",data)
    //     setData(data.results)
    //   })
    // }
  }, [cid]);
  console.log("homedata", data);
  return (
    <>
      <div className="flex flex-wrap  px-20 justify-between ">
        <div className="w-[50%] px-6">
          {data.slice(0, 1).map((items, index) => {
            return (
              <div className=" px-4" key={index}>
                <Link to={`/details/${items.category[0]}/${items.article_id}`}>
                  <img
                    className="w-full  rounded-md"
                    src={items.image_url}
                    alt=""
                  />
                  <h3 className="text-3xl py-4 leading-10 border-b font-medium">
                    {items.title}
                  </h3>
                </Link>
              </div>
            );
          })}
          {data.slice(5, 7).map((items, index) => {
            return (
              <div className="flex gap-4 p-4 border-b" key={index}>
                <div className="w-[45%] h-[170px] aspect-[4/3]">
                  <Link to={`/details/${items.category[0]}/${items.article_id}`}>
                    <img
                      className="w-full h-full rounded-md"
                      src={items.image_url}
                      alt=""
                    />
                  </Link>
                </div>

                <div className="w-[45%] text-xl py-6 border-b font-medium">
                  <Link to={`/details/${items.category[0]}/${items.article_id}`}>
                    {items.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* second column  */}
        <div className="w-[25%] border-x px-6">
          {data.slice(3, 4).map((items, index) => {
            return (
              <div className=" px-4" key={index}>
                <Link to={`/details/${items.category[0]}/${items.article_id}`}>
                  <img
                    className="w-full  rounded-md"
                    src={items.image_url}
                    alt=""
                  />
                  <h3 className="text-2xl  pb-5 pt-2 border-b font-medium">
                    {items.title}
                  </h3>
                </Link>
              </div>
            );
          })}
          {data.slice(2, 8).map((items, index) => {
            return (
              <div className=" p-4" key={index}>
                <Link to={`/details/${items.category[0]}/${items.article_id}`}>
                  <h3 className="text-xl py-6 border-b font-medium">
                    {items.title}
                  </h3>
                </Link>
              </div>
            );
          })}
        </div>
        {/* third column  */}
        <div className="w-[25%] px-6 py-6">
          {data.slice(5, 10).map((items, index) => {
            return (
              <div key={index}>
                <Link to={`/details/${items.category[0]}/${items.article_id}`}>
                  <div className="flex gap-2 px-4">
                    <div className="w-[100px] text-xl pb-6 border-b font-medium">
                      {items.title}
                    </div>
                    <div className="w-[100px] aspect-[4/3]">
                      <img
                        className="w-full rounded-md"
                        src={items.image_url}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* capital part  */}

      <div className="flex px-20 justify-between py-10">
        <div className=" w-[72%]">
          <div className="py-4 border-t-4 border-b-2 border-black text-center font-bold text-xl">
            Capital
          </div>
          <div className="grid grid-cols-3 gap-6 py-4">
            {data.slice(0, 6).map((items, index) => {
              return (
                <div className=" py-5" key={index}>
                  <Link to={`/details/${items.category[0]}/${items.article_id}`}>
                    <div className="h-[170px]">
                      <img
                        className="w-full h-full rounded-md object-cover"
                        src={items.image_url}
                        alt=""
                      />
                    </div>

                    <div className="py-3 text-center font-bold">
                      {items.title}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* trending news part  */}
        <div className="w-[25%]">
          <div className="py-4 border-t-4 border-b-2 border-black text-center font-bold text-xl">
            Trending News
          </div>
          {data.slice(0, 6).map((items, index) => {
            return (
              <div key={index} className="py-4 border-b">
                <Link to={`/details/${items.category[0]}/${items.article_id}`}>
                  {items.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
