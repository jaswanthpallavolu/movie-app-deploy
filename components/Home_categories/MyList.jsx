import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import Carousel from "../carousel/Carousel";
import styles from "./mylist.module.css";
import { Loader1 } from "../../utils/loaders/Loading";
// import LazyLoad from "../../utils/lazyLoad/LazyLoad";

export default function MyList() {
  // console.log(`fetched:${list?.map(i => i.title)}`)
  const [myList, setMyList] = useState();
  const movies = useSelector((state) => state.userRatings.movies);
  // const status = useSelector((state) => state.userRatings.status);
  // const [loading, setLoading] = useState(false);
  // const cRef = useRef();
  // const list = useSelector((state) => state.userData.myList);

  // const handleCount = (e) => {

  //   var removeid = e.target.closest("#mylist-action")?.getAttribute("data-id");
  //   if (!removeid) return;
  //   var filtered = myList.filter((id) => id != removeid);
  //   setMyList(filtered);
  // };

  useEffect(() => {
    // const l = document.querySelector("#mylist_carousel");
    // console.dir(cRef);
    // if (status === "loaded") {
    var list = movies.filter((i) => i.myList === true);
    list = list?.map((i) => i.movieId)?.reverse();
    if (JSON.stringify(list) !== JSON.stringify(myList)) setMyList(list);
    // }
  }, [movies]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {myList?.length > 0 ? (
        <div className={styles.mylist}>
          <div className={styles.head}>
            <span></span>
            <div className={styles.name}>my list</div>
          </div>

          {/* {!loading ? ( */}
          <div>
            <Carousel list={myList} key={myList.length} />
          </div>
          {/* ) : (
            <div className={styles.mylistLoader}>
              <Loader1 />
            </div>
          )} */}
        </div>
      ) : (
        <div className={styles.emptyList}>
          <p className={styles.suggest_text}>MyList is Empty</p>
        </div>
      )}
    </>
  );
}
