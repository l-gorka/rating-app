/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FieldOption } from "../../api.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FieldOptionUpdateFormInputValues = {
    title?: string;
    type?: string;
    color?: string;
};
export declare type FieldOptionUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FieldOptionUpdateFormOverridesProps = {
    FieldOptionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FieldOptionUpdateFormProps = React.PropsWithChildren<{
    overrides?: FieldOptionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fieldOption?: FieldOption;
    onSubmit?: (fields: FieldOptionUpdateFormInputValues) => FieldOptionUpdateFormInputValues;
    onSuccess?: (fields: FieldOptionUpdateFormInputValues) => void;
    onError?: (fields: FieldOptionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FieldOptionUpdateFormInputValues) => FieldOptionUpdateFormInputValues;
    onValidate?: FieldOptionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FieldOptionUpdateForm(props: FieldOptionUpdateFormProps): React.ReactElement;
