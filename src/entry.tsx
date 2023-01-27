import { Text } from "./components/text";

function Entry() {
  return (
    <div className="mt-20 m-auto w-[40%] text-center border border-gray-500 p-5 rounded shadow">
      <h1 className="text-3xl font-bold">
        You can view components using storybook
      </h1>
      <p>To run storybook: npm run storybook</p>
      <Text name="test" />
    </div>
  );
}

export default Entry;
