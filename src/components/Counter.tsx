import React, { useEffect, useState } from "react";
import { eventData } from "../data/eventData";
import { getCountdown } from "../utils/getCountdown";

const Counter = () => {

    const eventDate = new Date(eventData.date.iso);
    const [timeLeft, setTimeLeft] = useState(() =>
        getCountdown(eventDate)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getCountdown(eventDate));
        }, 1000);

        return () => clearInterval(interval);
    }, [eventDate]);

    const date = new Date(eventData.date.iso);

    const month = date.toLocaleDateString("es-ES", { month: "long" });
    const weekday = date.toLocaleDateString("es-ES", { weekday: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    return (
        <section className="flex flex-col gap-5 px-10">
            <div className='flex flex-col items-center'>
                <span className='font-bold uppercase text-xl'>{month}</span>
                <div className="flex gap-2 items-center px-5 w-full">
                    <div className="border-y py-1 self-center text-center text-xl font-semibold uppercase w-full">
                        {weekday}
                    </div>
                    <div className="text-7xl">{day}</div>
                    <div className="border-y py-1 self-center text-center text-xl font-semibold w-full">
                        {year}
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <span className="font-bold mb-3 uppercase">Faltan</span>
                <div className="flex gap-1 w-full">
                    <TimeBox label="Días" value={timeLeft.days} />
                    <Separator />
                    <TimeBox label="Horas" value={timeLeft.hours} />
                    <Separator />
                    <TimeBox label="Min" value={timeLeft.minutes} />
                    <Separator />
                    <TimeBox label="Seg" value={timeLeft.seconds} />
                </div>
            </div>
        </section>
    )
}

export default Counter

const TimeBox = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col items-center w-full">
        <span className="text-5xl">{value}</span>
        <span>{label}</span>
    </div>
);

const Separator = () => (
    <div className="text-4xl w-fit self-center">:</div>
);