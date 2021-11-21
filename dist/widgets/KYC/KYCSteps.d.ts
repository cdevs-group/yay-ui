/// <reference types="react" />
import { StatusKYC } from "./types";
declare const KYCSteps: ({ texts, status1, status2, status3, }: {
    texts: {
        step: string;
        description1: string;
        description2: string;
        description3: string;
    };
    status1: StatusKYC;
    status2: StatusKYC;
    status3: StatusKYC;
}) => JSX.Element;
export default KYCSteps;
