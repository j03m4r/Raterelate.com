import Day from "./Day";

interface RatingCalendarProps {
    user_id: string;
};

const RatingCalendar: React.FC<RatingCalendarProps> = ({ user_id }) => {
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
            <div className="flex justify-center items-center col-span-4 row-start-1">Jul</div>
            <div className="flex justify-center items-center col-span-5 row-start-1">Aug</div>
            <div className="flex justify-center items-center col-span-4 row-start-1">Sep</div>
            <div className="flex justify-center items-center col-span-4 row-start-1">Oct</div>
            <div className="flex justify-center items-center col-span-6 row-start-1">Nov</div>
            <div className="flex justify-center items-center col-span-4 row-start-1">Dec</div>
            {/* <div className="flex justify-center items-center text-xs mt-[1px] row-start-2 w-3 h-3 md:w-2 md:h-2">S</div>
            <div className="flex justify-center items-center text-xs mt-[1px] row-start-3 w-3 h-3 md:w-2 md:h-2">M</div>
            <div className="flex justify-center items-center text-xs mt-[1px] row-start-4 w-3 h-3 md:w-2 md:h-2">T</div>
            <div className="flex justify-center items-center text-xs mt-[1px] row-start-5 w-3 h-3 md:w-2 md:h-2">W</div>
            <div className="flex justify-center items-center text-xs mt-[1px] row-start-6 w-3 h-3 md:w-2 md:h-2">T</div>
            <div className="flex justify-center items-center text-xs mt-[1px] row-start-7 w-3 h-3 md:w-2 md:h-2">F</div>
            <div className="flex justify-center items-center text-xs mt-[1px] row-start-8 w-3 h-3 md:w-2 md:h-2">S</div> */}
            {days.map((day) => (
                <Day key={day} dayNum={day} mode={'profile'} user_id={user_id} />
            ))}
        </div>
    );
}

export default RatingCalendar;