import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

const Todo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const formSubmitHandle = (data: IForm) => {
    console.log(`할 일 입력! : ${data.toDo}`);
    setValue("toDo", "");
  };

  return (
    <>
      <header>ToDo List</header>
      <form onSubmit={handleSubmit(formSubmitHandle)}>
        <label>할일을 작성하세요</label>
        <input type="text" {...register("toDo", { required: true })} />
        <button>저장</button>
      </form>
    </>
  );
};

export default Todo;
