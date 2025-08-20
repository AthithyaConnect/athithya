// app/h/add/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import AddStayForm from "./components/AddStay";

const Stay = () => <div>🏠 Add Stay</div>;
const Experience = () => <div>🎉 Add Experience</div>;
const Cuisine = () => <div>🍲 Add Cuisine</div>;

export default function AddInput() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  let content;
  switch (page) {
    case "stay":
      content = <AddStayForm />;
      break;
    case "experience":
      content = <Experience />;
      break;
    case "cuisine":
      content = <Cuisine />;
      break;
    default:
      content = <div>❓ Unknown page</div>;
  }

  return (
    <div className="w-full p-4">
    
      {content}
    </div>
  );
}
