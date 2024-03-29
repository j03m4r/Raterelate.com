'use client';

import AverageDay from "./Day";

interface AverageRatingCalendarProps {
    mode: string;
    user_id: string;
};

const AverageRatingCalendar: React.FC<AverageRatingCalendarProps> = ({ mode, user_id }) => {
    const days = Array(365).fill(0).map((_, i) => i);
    return (
        <div className="select-none w-full h-fit text-forestGreen grid grid-cols-53 grid-rows-8 
        grid-flow-row gap-x-6 gap-y-2 md:gap-x-4 md:gap-y-1 xl:gap-0 overflow-x-scroll xl:overflow-x-hidden">
            <div className="flex justify-center items-center col-span-5 row-start-1 col-start-1">Jan</div>
            <div className="flex justify-center items-center col-span-4 row-start-1">Feb</div>
            <div className="flex justify-center items-center col-span-4 row-start-1">Mar</div>
            <div className="flex justify-center items-center col-span-4 row-start-1">Apr</div>
            <div className="flex justify-center items-center col-span-5 row-start-1">May</div>
            <div className="flex justify-center items-center col-span-4 row-start-1">Jun</div>
            <div className="flex justify-center items-center col-span-5 row-start-1">Jul</div>
            <div className="flex justify-center items-center col-span-5 row-start-1">Aug</div>
            <div className="flex justify-center items-center col-span-4 row-start-1">Sep</div>
            <div className="flex justify-center items-center col-span-5 row-start-1">Oct</div>
            <div className="flex justify-center items-center col-span-4 row-start-1">Nov</div>
            <div className="flex justify-center items-center col-span-4 row-start-1">Dec</div>
            {days.map((day) => (
                <AverageDay key={day} dayNum={day} mode={mode} user_id={user_id} />
            ))}
        </div>
    );
}

export default AverageRatingCalendar;