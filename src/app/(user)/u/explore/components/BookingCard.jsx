"use client";

import React, { useState } from "react";
import { differenceInDays } from "date-fns";
import {
  Button,
  Divider,
  RangeCalendar,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter, useDisclosure,
  ButtonGroup
} from "@heroui/react";
import { ArrowRight, Bag, Minus, Plus } from "phosphor-react";
import { useRouter } from "next/navigation";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function BookingCard() {
  const [persons, setPersons] = useState(1);
  const [pricePerNight] = useState(1200);
  const [daysCount, setDaysCount] = useState(2);
  const router = useRouter();
  const [dates, setDates] = useState({});

  let [value, setValue] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 0, days: 1 }),
  });

  const formatDate = (d) => {
    if (!d) return "";
    const date = d.toDate(getLocalTimeZone());
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleChange = (newRange) => {
    const start = new Date(
      newRange.start.year,
      newRange.start.month - 1,
      newRange.start.day
    );
    const end = new Date(
      newRange.end.year,
      newRange.end.month - 1,
      newRange.end.day
    );
    const diffDays =
      Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    setValue(newRange);
    setDates({
      startDate: formatDate(newRange.start),
      endDate: formatDate(newRange.end),
      startDateRaw: newRange.start,
      endDateRaw: newRange.end,
    });
    setDaysCount(diffDays);
  };

  const handleAddPerson = () => setPersons((prev) => prev + 1);
  const handleRemovePerson = () => setPersons((prev) => Math.max(1, prev - 1));

  const nights =
    dates.startDateRaw && dates.endDateRaw
      ? differenceInDays(
          new Date(
            dates.endDateRaw.year,
            dates.endDateRaw.month - 1,
            dates.endDateRaw.day
          ),
          new Date(
            dates.startDateRaw.year,
            dates.startDateRaw.month - 1,
            dates.startDateRaw.day
          )
        )
      : 0;

  const totalPrice = nights > 0 ? nights * pricePerNight * persons : 0;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="sticky flex flex-col w-full max-w-sm gap-6 p-6 mx-auto my-4 font-sans bg-white border border-gray-200 shadow-xl top-2 top-4 rounded-2xl">
      <div className="flex flex-col justify-between gap-2">
        <h5 className="text-lg font-medium">Add dates and guests</h5>
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-500">Total Guests</p>
          <div className="flex items-center gap-2 ">
            <Button
              isIconOnly
              size="sm"
              variant="flat"
              fullWidth={false}
              onPress={handleRemovePerson}
              className="w-8 h-8"
            >
              <Minus size={16} weight="bold" />
            </Button>
            <span className="text-xl font-medium text-black">
              &nbsp;{persons}&nbsp;
            </span>
            <Button
              isIconOnly
              size="sm"
              variant="flat"
              fullWidth={false}
              onPress={handleAddPerson}
              className="w-8 h-8"
            >
              <Plus size={16} weight="bold" />
            </Button>
          </div>
        </div>
      </div>

      <Divider />

      <div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Total Days</p>
          <p className="text-xl font-bold text-black">
            {daysCount - 1}{" "}
            <span className="text-sm font-normal text-gray-500">days</span>
            &nbsp;&nbsp;
            {daysCount - 2}{" "}
            <span className="text-sm font-normal text-gray-500">nights</span>
          </p>
        </div>

        <div
          onClick={onOpen}
          className="flex items-center justify-between mt-2 text-sm text-gray-700 underline text-underline"
        >
          {value.start && value.end ? (
            <>
              <div>{formatDate(value.start)}</div>
              <span>
                <ArrowRight />
              </span>
              <div>{formatDate(value.end)}</div>
            </>
          ) : (
            <div>Select a date value</div>
          )}
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Click on Start and End Dates
                </ModalHeader>
                <ModalBody>
                  <div className="flex items-center justify-between p-2 mt-2 text-sm text-green-600 bg-green-100 border-gray-200 rounded-2xl">
                    {value.start && value.end ? (
                      <>
                        <div>{formatDate(value.start)}</div>
                        <span>
                          <ArrowRight />
                        </span>
                        <div>{formatDate(value.end)}</div>
                      </>
                    ) : (
                      <div>Select a date value</div>
                    )}
                  </div>
                  <RangeCalendar
                    calendarWidth={"100%"}
                    className="border-2 border-white shadow-none"
                    aria-label="Date (Uncontrolled)"
                    pageBehavior=""
                    minValue={today(getLocalTimeZone())}
                    showMonthAndYearPickers
                    defaultValue={value}
                    color="primary"
                    value={value}
                    onChange={handleChange}
                  />

                  <ButtonGroup
                    fullWidth
                    className="px-3 max-w-full pb-2 pt-3 bg-content1 [&>button]:text-default-500 [&>button]:border-default-200/60"
                    radius="full"
                    size="sm"
                    variant="bordered"
                  >
                    <Button
                      onPress={() => {
                        const newStart = value.start;
                        const newEnd = newStart.add({ days: 1 });
                        const newRange = { start: newStart, end: newEnd };
                        handleChange(newRange);
                        setValue(newRange);
                      }}
                    >
                      1 days
                    </Button>
                    <Button
                      onPress={() => {
                        const newStart = value.start;
                        const newEnd = newStart.add({ days: 2 });
                        const newRange = { start: newStart, end: newEnd };
                        handleChange(newRange);
                        setValue(newRange);
                      }}
                    >
                      2 days
                    </Button>
                    <Button
                      onPress={() => {
                        const newStart = value.start;
                        const newEnd = newStart.add({ days: 3 });
                        const newRange = { start: newStart, end: newEnd };
                        handleChange(newRange);
                        setValue(newRange);
                      }}
                    >
                      3 days
                    </Button>
                    <Button
                      onPress={() => {
                        const newStart = value.start;
                        const newEnd = newStart.add({ days: 5 });
                        const newRange = { start: newStart, end: newEnd };
                        handleChange(newRange);
                        setValue(newRange);
                      }}
                    >
                      5 days
                    </Button>
                  </ButtonGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Save
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
        <Divider/>

 <div className="flex justify-between">
          <p className="text-sm text-gray-500">Total Amount</p>
          <p className="text-xl font-bold text-black">
            <span className="text-lg font-bold">₹</span>
           {totalPrice}
            
          </p>
        </div>
      {/* payment section */}
      <div className="flex items-center w-full gap-2" >
         {/* <Button
              isIconOnly
              variant="bordered"
              size="sm"
              fullWidth={false}
              onPress={handleAddPerson}
              className="w-16 h-12 border rounded-xl"
            >
              <Bag size={24} weight="regular" />
            </Button> */}
            <Button onPress={()=>router.push('/u/cart')}  size="lg" className="w-full" variant="solid" color="primary">
              Continue to Pay
            </Button>
      </div>
    </div>
  );
}
