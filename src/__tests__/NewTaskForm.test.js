import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import App from "../App";

const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  render(
    <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
  );

  fireEvent.change(screen.getByLabelText(/Task/), {
  target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.queryByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.submit(screen.getByTestId("new-task-form"));

  expect(onTaskFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      text: "Pass the tests",
      category: "Code",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  render(<App />);

  const codeCount = screen.queryAllByText(/Code/).length;

  fireEvent.change(screen.getByLabelText(/Task/), {
  target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.queryByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.submit(screen.getByTestId("new-task-form"));

  expect(screen.queryByText(/Pass the tests/)).toBeInTheDocument();

  expect(screen.queryAllByText(/Code/).length).toBe(codeCount + 1);
});
