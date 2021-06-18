import React, { useState, useEffect } from "react";
import { fetchData } from "../../API";
import Posts from '../Posts/Posts'
import Pagination from '../Pagination/Pagination'
const NewsFeed = () => {
  const [data, setData] = useState([]);
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5);



  useEffect(() => {
    const fetchedData = async () => {
      setData(await fetchData());
    };
    fetchedData();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Posts data={currentPosts}/>
      <Pagination
      postsPerPage={postsPerPage}
      totalPosts={data.length}
      paginate={paginate}
    />
  </>
  );
};

export default NewsFeed;
