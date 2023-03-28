import Age from "@/components/Age";
import Race from "@/components/Race";
import State from "@/components/State";
import Summary from "@/components/Summary";
import Rate from "@/components/Rate";
import { GET_FILTERS } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import useDiseases from "@/hooks/useDiseases";
import { useRef } from "react";

function Home() {
  const { data: filter } = useQuery(GET_FILTERS);
  const { types, rates } = useDiseases();
  console.log(types);

  const swiperRef = useRef(null);
  return (
    <main>
      <Summary />
      {/* <Cancer diseases={types as any} /> */}
      <Rate diseases={rates as any} />
      <Race />
      <Age />
      <State />
    </main>
  );
}

export default Home;
