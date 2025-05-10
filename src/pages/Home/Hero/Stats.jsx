import { useEffect, useState } from "react";
import AxiosSecure from "../../../hooks/AxiosSecure";
import CountUp from "react-countup";

const Stats = () => {
  const [stats, setStats] = useState([]);
  const useAxios = AxiosSecure();
  useEffect(() => {
    useAxios.get("/stats").then((res) => {
      setStats(res.data);
      // console.log(res.data);
    });
  }, [useAxios]);
  return (
    <>
      <div className="main-container mt-12 md:mt-20">
        <div className="flex justify-between items-center gap-6 flex-wrap">
          <div className="text-center">
            <p className="text-xl md:text-3xl lg:text-4xl font-bold text-base-content dark:text-white/90">
              <CountUp start={1} end={stats.tutorsCount} />+
            </p>
            <p className="mt-1 text-base text-base-content-secondary">
              Total Tutors
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-3xl lg:text-4xl font-bold text-base-content dark:text-white/90">
              <CountUp start={10} end={stats.reviewCount} />+
            </p>
            <p className="mt-1 text-base text-base-content-secondary">
              Reviews
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-3xl lg:text-4xl font-bold text-base-content dark:text-white/90">
              <CountUp start={1} end={stats.languageCount} />+
            </p>
            <p className="mt-1 text-base text-base-content-secondary">
              Languages
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-3xl lg:text-4xl font-bold text-base-content dark:text-white/90">
              <CountUp start={1} end={stats.usersCount} />+
            </p>
            <p className="mt-1 text-base text-base-content-secondary">
              Total Users
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
