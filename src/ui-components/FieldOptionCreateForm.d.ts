/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type FieldOptionCreateFormInputValues = {
    title?: string;
    type?: string;
    color?: string;
};
export declare type FieldOptionCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FieldOptionCreateFormOverridesProps = {
    FieldOptionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FieldOptionCreateFormProps = React.PropsWithChildren<{
    overrides?: FieldOptionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FieldOptionCreateFormInputValues) => FieldOptionCreateFormInputValues;
    onSuccess?: (fields: FieldOptionCreateFormInputValues) => void;
    onError?: (fields: FieldOptionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FieldOptionCreateFormInputValues) => FieldOptionCreateFormInputValues;
    onValidate?: FieldOptionCreateFormValidationValues;
} & React.CSSProperties>;
export default function FieldOptionCreateForm(props: FieldOptionCreateFormProps): React.ReactElement;
