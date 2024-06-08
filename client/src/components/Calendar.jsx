import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "../helper/axios";

function formatTime(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes}`;
}

function Calendar({
  openPopup,
  setOpenPopup,
  sellerId,
  propertyId,
  booknowForm,
  setBookNowForm,
}) {
  const navigate = useNavigate();
  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [dateToFindSlot, setDateToFindSlot] = useState("");

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  const isDateDisabled = (date) => {
    // Disable dates that are before today
    return date < today;
  };

  const renderCalendar = () => {
    const currentYear = today.getFullYear();
    const currentMonth = selectedMonth;
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const calendar = [];

    // Create the header row
    const headerRow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
      (day) => (
        <th key={day} className="p-2">
          {day}
        </th>
      )
    );

    calendar.push(<tr key="header">{headerRow}</tr>);

    // Create the calendar grid
    let dayCounter = 1 - firstDayOfMonth;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        const date = new Date(currentYear, currentMonth, dayCounter);

        week.push(
          <td
            key={date.toDateString()}
            onClick={() => {
              if (!isDateDisabled(date)) {
                handleDateClick(date);
              }
              setDateToFindSlot(date);
            }}
            className={`py-3 px-8 font-bold ${
              date.toDateString() === selectedDate?.toDateString()
                ? "bg-blue-500 text-white cursor-pointer"
                : ""
            } ${
              isDateDisabled(date)
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-200 cursor-pointer"
            }`}
          >
            {dayCounter > 0 && dayCounter <= daysInMonth ? dayCounter : ""}
          </td>
        );
        dayCounter++;
      }
      calendar.push(<tr key={`week-${i}`}>{week}</tr>);
    }

    return calendar;
  };

  const generateTimeSlots = () => {
    const timeSlots = [];
    const startTime = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      10,
      0
    ); // 10:00 AM
    const endTime = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      17,
      0
    ); // 5:00 PM

    let currentTime = new Date(startTime);
    while (currentTime < endTime) {
      timeSlots.push(currentTime);
      currentTime = new Date(currentTime.getTime() + 60 * 60 * 1000); // Add 1 hour
    }

    return timeSlots;
  };

  useEffect(() => {
    const currentYear = today.getFullYear();
    setSelectedDate(
      new Date(currentYear, selectedMonth, selectedDate.getDate())
    );
    setSelectedTimeSlot(null);
  }, [selectedMonth]);

  const bookSlot = async () => {
    if (selectedTimeSlot) {
      const date = selectedDate.getDate();
      const month = selectedDate.getMonth() + 1;
      const year = selectedDate.getFullYear();
      const bookingDate = `${date}/${month}/${year}`;
      const timeSlot = selectedTimeSlot;
      const bookingData = {
        ...booknowForm,
        propertyId: propertyId,
        sellerId: sellerId,
        date: bookingDate,
        time: timeSlot,
      };
      // console.log("bookingdata=>", bookingData);
      try {
        toast.loading("Please wait for confirmation...");
        const resp = await axios.post("book-site-visit", bookingData);
        // console.log("resp", resp);
        setOpenPopup(!openPopup);

        toast.dismiss();
        toast.success("Your oppointment booked successfully");
        navigate("/");
        setBookNowForm({ name: "", email: "", contact: "" });
        setSelectedTimeSlot(null);
        selectedDate(today);
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Please select time slot");
    }
  };

  // check slots availability
  const [bookedTimeSlotArray, setBookedTimeSlotArray] = useState([]);
  const [dateClick, setDateClick] = useState(false);
  const handleSlotAvailability = async () => {
    setDateClick(true);
    try {
      const date = selectedDate.getDate();
      const month = selectedDate.getMonth() + 1;
      const year = selectedDate.getFullYear();
      const bookingDate = `${date}/${month}/${year}`;
      // console.log(bookingDate);
      const resp = await axios.post("/check-slots-avalibility", {
        date: bookingDate,
      });
      // console.log(resp.data.data);
      setBookedTimeSlotArray(resp.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (dateToFindSlot !== "") {
      handleSlotAvailability();
    } else {
      // console.log("no date selected");
    }
  }, [dateToFindSlot]);

  const timeSlots = generateTimeSlots();
  const timeSlotArr = timeSlots.map((time) => {
    return time.getHours();
  });
  // console.log(timeSlotArr, bookedTimeSlotArray);
  const bookedTimeSlotArray2 = bookedTimeSlotArray.map((item, i) => {
    return Number(item);
  });

  return (
    <div className="calendar-container mt-8 mx-auto w-[98%]  ">
      <div className="bg-blue-900/50 px-4 py-3 rounded-md">
        <div className="mb-10">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="p-2 border rounded cursor-pointer"
          >
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <table
          className="calendar w-full table-auto"
          style={{ borderCollapse: "collapse" }}
        >
          <tbody>{renderCalendar()}</tbody>
        </table>
        <div className="time-slots mt-4">
          <h1 className="py-2 text-black">SLOTS AVAILABILITY</h1>
          {/* {timeSlots.map((timeSlot, index) => (
            <button
              key={index}
            
              className={`time-slot-button p-2 rounded-lg mr-2  ${
                selectedTimeSlot === timeSlot
                  ? "bg-green-500 text-white cursor-pointer"
                  : "bg-gray-200 hover:bg-blue-200 cursor-pointer"
              }`}
            >
              {formatTime(timeSlot)}
            </button>
          ))} */}
          {!dateClick ? (
            <p className="flex flex-col text-red-700">
              <span>You can't book slots for today!</span>
              <span>Please select another date</span>
            </p>
          ) : (
            timeSlotArr.map((item, i) => {
              const buttonColor = bookedTimeSlotArray2.includes(item)
                ? "disabled:cursor-not-allowed opacity-50 text-white bg-red-700 text-md rounded-lg px-5 py-2.5 mr-2 mb-2"
                : "focus:outline-none text-white bg-green-800 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  cursor-pointer";
              const status = bookedTimeSlotArray2.includes(item) ? true : false;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedTimeSlot(item);
                  }}
                  disabled={status}
                  className={`py-2 px-3 rounded-md ${buttonColor}`}
                >
                  {`${item}:00`}
                </button>
              );
            })
          )}
        </div>
      </div>
      <div className="py-4">
        <h1>Your booking information</h1>
        <p>
          <span>
            Date:
            <span>{`${selectedDate.getDate()}/${
              selectedDate.getMonth() + 1
            }/${selectedDate.getFullYear()}`}</span>
          </span>
        </p>
        <p>
          <span>
            Time:
            {`${selectedTimeSlot ? selectedTimeSlot : ""}`}
          </span>
        </p>
      </div>
      <section className="flex justify-center items-center">
        <button
          className="bg-cyan-400 hover:bg-cyan-500 duration-200 px-8 pt-1.5 pb-[7px] rounded-md text-white mt-5 w-full border-b-2 border-b-cyan-500 hover:border-b-cyan-600 disabled:cursor-not-allowed"
          disabled={
            !booknowForm.name ||
            !booknowForm.email ||
            !booknowForm.contact ||
            !selectedTimeSlot
          }
          onClick={bookSlot}
        >
          Book now
        </button>
      </section>
    </div>
  );
}

export default Calendar;
