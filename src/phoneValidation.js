import * as yup from "yup";
import { parsePhoneNumber } from "libphonenumber-js";

const phoneValidationSchema = yup
  .string()
  .required("Phone number is required")
  .test("is-country-code", "Invalid country code", (value) => {
    if (!value) return false; // Required field, so reject empty values
    try {
      // Attempt to parse the phone number, which automatically detects the country code
      parsePhoneNumber(value);

      // Check if the phone number is valid
      return true;
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "INVALID_COUNTRY") {
          return false;
        }
      }
      return true;
    }
  })
  .test("is-too-short", "Phone too short", (value) => {
    if (!value) return false; // Required field, so reject empty values
    try {
      // Attempt to parse the phone number, which automatically detects the country code
      parsePhoneNumber(value);

      // Check if the phone number is valid
      return true;
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "TOO_SHORT") {
          return false;
        }
      }
      return true;
    }
  })
  .test("is-too-long", "Phone too long", (value) => {
    if (!value) return false; // Required field, so reject empty values
    try {
      // Attempt to parse the phone number, which automatically detects the country code
      parsePhoneNumber(value);

      // Check if the phone number is valid
      return true;
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "TOO_LONG") {
          return false;
        }
      }
      return true;
    }
  })
  .test("is-valid-phone", "Invalid phone number", (value) => {
    if (!value) return false; // Required field, so reject empty values

    try {
      // Attempt to parse the phone number, which automatically detects the country code
      const phoneNumber = parsePhoneNumber(value);

      // Check if the phone number is valid
      return phoneNumber.isValid();
    } catch (error) {
      return false; // Invalid number, return false for the test
    }
  });

export default phoneValidationSchema;
