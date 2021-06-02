import React from 'react'
import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  FormikErrors,
  FormikState,
  FormikTouched,
  FormikValues,
} from 'formik'

export interface FormInstance {
  initialValues: FormikValues
  initialErrors: FormikErrors<unknown>
  initialTouched: FormikTouched<unknown>
  initialStatus: any
  handleBlur: {
    (e: React.FocusEvent<any>): void
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
  }
  handleChange: {
    (e: React.ChangeEvent<any>): void
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1,
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void
  }
  handleReset: (e: any) => void
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
  resetForm: (
    nextState?: Partial<FormikState<FormikValues>> | undefined,
  ) => void
  setErrors: (errors: FormikErrors<FormikValues>) => void
  setFormikState: (
    stateOrCb:
      | FormikState<FormikValues>
      | ((state: FormikState<FormikValues>) => FormikState<FormikValues>),
  ) => void
  setFieldTouched: (
    field: string,
    touched?: boolean,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<FormikValues>> | Promise<void>
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<FormikValues>> | Promise<void>
  setFieldError: (field: string, value: string | undefined) => void
  setStatus: (status: any) => void
  setSubmitting: (isSubmitting: boolean) => void
  setTouched: (
    touched: FormikTouched<FormikValues>,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<FormikValues>> | Promise<void>
  setValues: (
    values: React.SetStateAction<FormikValues>,
    shouldValidate?: boolean | undefined,
  ) => Promise<FormikErrors<FormikValues>> | Promise<void>
  submitForm: () => Promise<any>
  validateForm: (values?: FormikValues) => Promise<FormikErrors<FormikValues>>
  validateField: (name: string) => Promise<void> | Promise<string | undefined>
  isValid: boolean
  dirty: boolean
  unregisterField: (name: string) => void
  registerField: (name: string, { validate }: any) => void
  getFieldProps: (nameOrOptions: any) => FieldInputProps<any>
  getFieldMeta: (name: string) => FieldMetaProps<any>
  getFieldHelpers: (name: string) => FieldHelperProps<any>
  validateOnBlur: boolean
  validateOnChange: boolean
  validateOnMount: boolean
  values: FormikValues
  errors: FormikErrors<FormikValues>
  touched: FormikTouched<FormikValues>
  isSubmitting: boolean
  isValidating: boolean
  status?: any
  submitCount: number
}
