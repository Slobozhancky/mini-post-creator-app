import Input from "../input/Input";
import Button from "../btn/btn";
import "./search-panel.css";
const SearchPanel = () => {
  return (
    <div className="search-panel">
      <Input className="search-input" placeholder="Поиск по записям" />
      <Button className="all" text="Все" />
      <Button className="likes" text="Понравилось" />
    </div>
  );
};

export default SearchPanel;
