import Input from "../input/Input";
import Button from "../btn/btn";
import "./post-add-form.css";

const AddPost = () => {
  return (
    <div className="post-add-form">
      <Input  placeholder="Чтобы вы хотели добавить ?" />
      <Button className="add" text="Добавить" />
    </div>
  );
};

export default AddPost;
