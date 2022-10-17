import Input from "../input/Input";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import "./search-panel.css";
const SearchPanel = () => {
  return (
    <div className="search-panel">
      <Input className="search-input" placeholder="Поиск по записям" />
      <PostStatusFilter />
    </div>
  );
};

export default SearchPanel;
