import Input from "../input/Input";
import "./post-add-form.scss";

const AddPost = ({onAdd}) => {
  return (
    <div className="post-add-form">
      <Input  placeholder="Чтобы вы хотели добавить ?" />
      <button className="add" onClick={() => onAdd('Hello')}>Добавить</button>
    </div>
  );
};

export default AddPost;
