import React, { FC, memo } from 'react';
import styles from '../../style/calculator.module.css';
import { Box, OutlinedInput } from '@mui/material';
import { CalculatorKeyboard } from '../index';
import {
    CALCULATOR_FRAME_DATA_TEST_ID,
    CALCULATOR_INPUT_LENGTH,
    CALCULATOR_RANGE_VALUE_DATA_TEST_ID,
    CALCULATOR_TEXT_FIELD_INPUT_DATA_TEST_ID,
    CALCULTATOR_TEXT_INPUT_RANGE_MAX,
    CALCULTATOR_TEXT_INPUT_RANGE_MAX_DATA_TEST_ID,
    CALCULTATOR_TEXT_INPUT_RANGE_MIN,
    CALCULTATOR_TEXT_INPUT_RANGE_MIN_DATA_TEST_ID,
    CALCULTATOR_VALUE_INPUT_RANGE_MAX,
    CALCULTATOR_VALUE_INPUT_RANGE_MIN
} from '../../constant';
import { TCaculatorFrame } from '../../types/calculatorType';
import { handleCalculatorButton } from '../../util/handleCalculatorButton';


const CalculatorFrame: FC<TCaculatorFrame> = ({
    inputValue,
    handleInputChange
}) => {

    const handleButtonClick = (value: string): void => {
        const newValue = handleCalculatorButton(value, inputValue);
        handleInputChange(newValue);
    };

    return (
        <Box
            data-testid={CALCULATOR_FRAME_DATA_TEST_ID}
            className={styles.calculatorFrame}
        >
            <OutlinedInput
                data-testid={CALCULATOR_TEXT_FIELD_INPUT_DATA_TEST_ID}
                className={styles.calculatorTextField}
                type="text"
                value={inputValue}
                readOnly
                inputProps={{
                    style: { textAlign: 'right' }
                }}
            />
            <Box
                data-testid={CALCULATOR_RANGE_VALUE_DATA_TEST_ID}
                className={styles.calculatorRange}
            >
                <span
                    className={Number(inputValue) < CALCULTATOR_VALUE_INPUT_RANGE_MIN ? styles.minValueErr : styles.minValue}
                    data-testid={CALCULTATOR_TEXT_INPUT_RANGE_MIN_DATA_TEST_ID}
                >
                    {CALCULTATOR_TEXT_INPUT_RANGE_MIN}
                </span>
                <span
                    className={(Number(inputValue) > CALCULTATOR_VALUE_INPUT_RANGE_MAX
                        || inputValue.length > CALCULATOR_INPUT_LENGTH) ? styles.maxValueErr : styles.maxValue}
                    data-testid={CALCULTATOR_TEXT_INPUT_RANGE_MAX_DATA_TEST_ID}
                >
                    {CALCULTATOR_TEXT_INPUT_RANGE_MAX}
                </span>
            </Box>
            <Box>
                <CalculatorKeyboard onButtonClick={handleButtonClick} />
            </Box>
        </Box>
    );
};

export default memo(CalculatorFrame);
