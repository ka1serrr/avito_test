import { useSeriesQuery } from "@/entities";
import { useParams } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@/shared";
import { Loader2 } from "lucide-react";

export const FilmSeriesDesktop = () => {
  const { id } = useParams();
  const { data, fetchNextPage, hasNextPage, isFetching } = useSeriesQuery(Number(id));

  const content = data?.pages.map(
    (seasons) =>
      seasons?.docs?.map((season) => (
        <>
          <AccordionItem value={String(season.number)}>
            <AccordionTrigger
              className='w-full bg-slate-700 p-2
           text-white font-bold text-2xl'
            >
              {season.number} сезон
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-x-1.5'>
              {season.episodes.map((episod) => (
                <span className='block text-xl'>{episod.name}</span>
              ))}
            </AccordionContent>
          </AccordionItem>
        </>
      )),
  );

  return (
    <Accordion type='single' collapsible className='w-full md:w-1/2'>
      <AccordionItem value='1'>
        <AccordionTrigger>
          <span className='w-full font-bold text-center text-2xl'>Спискок сезонов</span>
        </AccordionTrigger>
        <AccordionContent className='md:px-8'>
          <Accordion type='single' collapsible>
            {content}
          </Accordion>
          <div className='flex items-center justify-center mt-3'>
            {hasNextPage && (
              <Button variant='ghost' onClick={() => fetchNextPage()} disabled={isFetching}>
                {isFetching ? <Loader2 className='animate-spin' /> : "Загрузить ещё"}
              </Button>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
