/// <reference types="react" />
import { StatusKYC } from "../types";
declare const Step: ({ title, description, number, status, }: {
    title: string;
    description: string;
    number: number;
    status: StatusKYC;
}) => JSX.Element;
export default Step;
