import { AgeFilter, CountryFilter, LimitFilter, YearFilter } from "@/featurs";

export const Filters = () => {
  return (
    <div className='flex justify-evenly gap-2 flex-wrap md:flex-nowrap'>
      <YearFilter />
      <AgeFilter />
      <CountryFilter />
      <LimitFilter />
    </div>
  );
};
