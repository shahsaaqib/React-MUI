import {} from "@mui/material";
// import { DatePicker, TimePicker, DateTimePicker } from "@mui/lab";
// import { SetStateAction, useState } from "react";

// export const MuiDateTimePicker = () => {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState<Date | null>(null);
//   const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

//   console.log({
//     selectedDate,
//     selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
//     selectedDateTime,
//   });
//   return (
//     <Stack spacing={4} sx={{ width: "250px" }}>
//       <DatePicker
//         label="Date Picker"
//         value={selectedDate}
//         onChange={(newValue: SetStateAction<Date | null>) => {
//           setSelectedDate(newValue);
//         }}
//         renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
//           <TextField {...params} />
//         )}
//       />
//       <TimePicker
//         label="Time Picker"
//         value={selectedTime}
//         onChange={(newValue: SetStateAction<Date | null>) => {
//           setSelectedTime(newValue);
//         }}
//         renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
//           <TextField {...params} />
//         )}
//       />
//       <DateTimePicker
//         label="Date Time Picker"
//         value={selectedDateTime}
//         onChange={(newValue: SetStateAction<Date | null>) => {
//           setSelectedDateTime(newValue);
//         }}
//         renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
//           <TextField {...params} />
//         )}
//       />
//     </Stack>
//   );
// };
