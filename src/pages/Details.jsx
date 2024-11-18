import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
  let { id, cid } = useParams();
  console.log("Params:", id, cid);
  const [data, setData] = useState(null);
  const [cdata, setCdata] = useState([]);
  useEffect(() => {
    if (id) {
      fetch(
        `https://newsdata.io/api/1/news?id=${id}&apikey=pub_4187034ee846909841f07be0ee7d63ce20e56`
      )
        .then((res) => {
          return res.json();
        })
        .then((resdata) => {
          console.log(resdata);
          setData(resdata.results[0] || {});
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    if (cid) {
      fetch(
        `https://newsdata.io/api/1/news?category=${cid}&apikey=pub_4187034ee846909841f07be0ee7d63ce20e56`
      )
        .then((res) => {
          return res.json();
        })
        .then((cdata) => {
          // console.log("cdata", cdata)
          setCdata(
            cdata.results.filter(
              (items) => items.image_url && items.description
            ) || []
          );
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [id, cid]);
  //

  // let items=articles.find((a)=>a.id==id);
  console.log("cdataa", cdata);
  return (
    <>
      <div>
        <div className="px-56 py-5">
          <div className="py-3 font-bold text-5xl text-black">
            {data?.title}
          </div>
          <div className="flex items-center gap-5">
            <div className="w-[30px] border">
              <img
                className="rounded-full"
                src="https://nepalnews.com/assets/img/icon3.f8e2c514.svg"
                alt=""
              />
            </div>
            <div className="py-5">
              <h3>RASTRIYA SAMACHAR SAMITI</h3>
            </div>
          </div>
          <div className="py-5">
            <img className="w-full " src={data?.image_url} alt="" />
          </div>
        </div>
        {/* Right side category section  */}

        <div className="w-[80%] ml-auto mr-11 flex  justify-between">
          <div className="w-[60%]">{data?.description}</div>
          <div className="w-[30%]">
            {cdata?.slice(1, 4).map((items, index) => {
              return (
                <div
                  key={index}
                  className=" flex justify-between border-b-2 py-3"
                >
                  <div className="w-[50%]">
                    <Link to={`/details/${cid}/${items.article_id}`}>
                      <h2>{items?.title}</h2>
                    </Link>
                  </div>

                  <div className="w-[30%]">
                    <Link to={`/details/${cid}/${items.article_id}`}>
                      <img className="w-full" src={items?.image_url} alt="" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional News  */}

        <div className="my-5 w-[60%] m-auto">
          <div className=" border-black border-b-[1px] border-t-[2px] py-3  m-auto text-center">
            <h2 className="font-bold text-4xl">Additional News</h2>
          </div>

          <div className="grid grid-cols-2 gap-6 my-5 ">
            {Array.isArray(cdata) &&
              cdata?.slice(2, 6).map((items, index) => {
                return (
                  <div
                    key={index}
                    className="lg-w-[200px] lg-h-[300px]  overflow-hidden"
                  >
                    <Link to={`/details/${cid}/${items.article_id}`}>
                      <div className="w-full h-[250px]">
                        <img
                          className="w-full h-full rounded-md"
                          src={items.image_url}
                          alt=""
                        />
                      </div>
                      <div className="py-3 px-2">
                        <p>{items.description}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
