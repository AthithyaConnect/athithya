"use client";
import { useState } from "react";
import Step1State from "./components/Step1";
import Step2Locations from "./components/Step2";
import Step3Dates from "./components/Step3";
import Step4FoodStay from "./components/Step4";
import Step5Checkout from "./components/Step5";
import Step6Map from "./components/Step6";
import { Button } from "@heroui/react";

const steps = [
  {
    title: "Pick Your Preffered  State",
    desc: "Where does your journey begin?",
  },
  { title: "Select a Place", desc: "Choose your dream spot in Uttarakhand." },
  { title: "Pick Travel Dates", desc: "When do you plan to travel?" },
  {
    title: "Curate Food & Stay",
    desc: "Choose experiences that suit your vibe.",
  },
  { title: "Review & Confirm", desc: "Here's what you've planned so far." },
  { title: "Get Your Map", desc: "Your itinerary is ready!" },
];

export default function TripPlanner() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const StepComponent = [
    Step1State,
    Step2Locations,
    Step3Dates,
    Step4FoodStay,
    Step5Checkout,
    Step6Map,
  ][currentStep];

  const next = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="h-full max-w-3xl mx-auto bg-gray-100">
      <div className="flex flex-col items-start p-4 bg-white">
        <h1 className="text-xl font-medium"> AI Trip Planner</h1>
        <p className="text-xs text-center text-gray-600">
          Plan your perfect trip with AI assistance.
        </p>
        <div className="w-full h-1 mt-4 bg-gray-200 rounded-full">
          <div
            className="h-full transition-all rounded-full bg-primary"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
      <div className="p-4 mb-4 ">
        <div className="text-lg font-bold">{steps[currentStep].title}</div>
        <div className="text-sm text-gray-600">{steps[currentStep].desc}</div>
      </div>

      <div className="px-4">
        <StepComponent formData={formData} setFormData={setFormData} />
      </div>

      <div className="flex justify-between p-4">
        <Button
          onPress={prev}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded-full transition 
    ${currentStep === 0 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-neutral-200 text-neutral-700 hover:bg-red-600"}
  `}
          radius="full"
        >
          Previous
        </Button>

        <Button
          onPress={next}
          color="primary"
          radius="full"
          disabled={currentStep === steps.length - 1}
        >
          {currentStep === steps.length - 2 ? "Confirm" : "Next"}
        </Button>
      </div>
    </div>
  );
}
