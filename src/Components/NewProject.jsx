import Input from "./Input";

export default function NewProject({}) {
  return (
    <div>
      <menu>
        <li></li>
        <li></li>
      </menu>
      <div>
        <Input label="Title" />
      </div>
      <div>
        <Input label="Description" textArea />
      </div>
      <div>
        <Input label="Due Date" />
      </div>
    </div>
  );
}
