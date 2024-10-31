import React, {useEffect, useState} from 'react';
import {s} from "./clock.style";
import {Txt} from "@/components/txt/txt";
import {nowToHHMM} from "@/services/date-service";

export function Clock() {
    const [time, setTime] = useState(nowToHHMM());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(nowToHHMM());
        }, 1000);
        return () => clearInterval(interval);
    },[])
    return (
        <>
        <Txt style={s.time}>{nowToHHMM()}</Txt>
        </>
    );
}