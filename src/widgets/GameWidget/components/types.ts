import React from "react";

export interface LiveTabProps {
  dataLive: { icon: React.ReactNode; value1: string; value2: string; value3: string; variant: string }[];
  prizePoolText: string;
  prizePool: string;
}

export interface TodayTabProps {
  dataToday: { id: number | string; icon: React.ReactNode; value1: string; value2: string; address: string }[];
}
