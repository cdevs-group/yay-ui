import { useEffect, useMemo, useRef, useState } from "react";
import { Bet } from "../../widgets/HistoryPanel/types";

const useAccordeon = (cards?: any) => {
  const [valueAccordeon, setValueAccordeon] = useState<string | null | undefined>();
  const [active, setActive] = useState<Bet>();
  const [heightActiveBlock, setHeightActiveBlock] = useState<number>(0);
  const refHidden = useRef<HTMLDivElement | null>(null);
  const [newCards, setNewCards] = useState<Array<Bet>>([]);

  const handleToggleAccordeon = (e: any, item: Bet) => {
    if (active && active.id !== item.id) {
      setActive(item);

      setHeightActiveBlock(e.target?.nextElementSibling?.firstElementChild?.clientHeight);
    }
    if (valueAccordeon && valueAccordeon === item.id) {
      setValueAccordeon && setValueAccordeon(undefined);
    } else {
      setValueAccordeon && setValueAccordeon(item.id);
    }
  };

  useEffect(() => {
    setActive(cards?.[0]);
    setValueAccordeon && setValueAccordeon(undefined);
  }, []);

  useEffect(() => {
    // console.log(el && el.nextElementSibling.firstElementChild.clientHeight)
    // if (el) {
    //   setHeightActiveBlock(el?.nextElementSibling?.firstElementChild?.clientHeight);
    // }
    // if (refHidden?.current) {
    //   setHeightActiveBlock(refHidden?.current?.clientHeight);
    // }
  }, [active, cards.length]);

  const filterCards = useMemo(() => cards?.filter((el: any) => el?.id !== active?.id), [active, cards]);
  const filterActiveCard = useMemo(() => cards?.filter((el: any) => el?.id === active?.id), [active, cards]);

  useEffect(() => {
    setNewCards([...filterActiveCard, ...filterCards]);
  }, [active, cards.length]);

  return { valueAccordeon, setValueAccordeon, heightActiveBlock, handleToggleAccordeon, newCards, active, refHidden };
};

export default useAccordeon;
