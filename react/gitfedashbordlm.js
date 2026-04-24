import React, { useState, useEffect } from "react";

function Feed() {
  const [feed, setFeed] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const pageSize = 20; // số lượng item mỗi lần tải

  const fetchFeed = async (pageNumber = 1, reset = false) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://127.0.0.1:8000/feed?q=${encodeURIComponent(query)}&page=${pageNumber}&limit=${pageSize}`
      );
      const data = await response.json();

      if (reset) {
        setFeed(data.feed);
      } else {
        setFeed((prev) => [...prev, ...data.feed]);
      }

      if (data.feed.length < pageSize) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (error) {
      console.error("Lỗi khi lấy feed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchFeed(1, true); // reset dữ liệu khi tìm kiếm mới
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchFeed(nextPage);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Nhập từ khóa..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>

      {loading && <p>Đang tải dữ liệu...</p>}

      <div id="feed">
        {feed.map((repo, idx) => (
          <div key={idx} className="card">
            <h3>{repo.name}</h3>
            <p>⭐ Stars: {repo.stars}</p>
            <p>{repo.description || "Không có mô tả"}</p>
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              Xem trên GitHub
            </a>
          </div>
        ))}
      </div>

      {hasMore && !loading && feed.length > 0 && (
        <button onClick={handleLoadMore}>Load more</button>
      )}

      {!hasMore && feed.length > 0 && <p>Đã tải hết dữ liệu</p>}
    </div>
  );
}

export default Feed;
