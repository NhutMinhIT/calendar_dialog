import React from "react";
import CalendarDialog from "./components/Dialog/CalendarDialog";
import { useCalendar } from "./hook/useCalendar";
import { Box } from "@mui/material";
import { CALENDAR_TEXT_FIELD_LABEL, CALENDER_TEXT_FIELD_DATA_TEST_ID, CALENDER_TEXT_FIELD_ID } from "./constant";
import { convertDateToString } from "./utils";
import styles from "./styles/style.module.css";
import { CustomizedTextField } from "./components";

const Root = (): JSX.Element => {
    const {
        isOpenCalendarDialog,
        selectedDate,
        tempDate,
        handleOpenCalendarDialog,
        handleCloseCalendarDialog,
        handleDateTemp,
        handleConfirmDate,
    } = useCalendar();

    return (
        <Box className={styles.rootPage}>
            <CustomizedTextField
                label={CALENDAR_TEXT_FIELD_LABEL}
                id={CALENDER_TEXT_FIELD_ID}
                data-testid={CALENDER_TEXT_FIELD_DATA_TEST_ID}
                type="text"
                value={selectedDate ? convertDateToString(selectedDate) : ""}
                onClick={handleOpenCalendarDialog}
            />
            <CalendarDialog
                isOpen={isOpenCalendarDialog}
                tempDate={tempDate}
                onDateChangeTemp={handleDateTemp}
                onClose={handleCloseCalendarDialog}
                onConfirm={handleConfirmDate}
            />
        </Box>
    );
};

export default Root;