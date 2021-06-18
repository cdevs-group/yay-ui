import React, { useEffect, useMemo, useRef, useState } from "react";
import { Bet } from "../../widgets/HistoryPanel/types";

const useAccordeon = (cards: any) => {
  const [valueAccordeon, setValueAccordeon] = useState<string | null | undefined>();
  const [active, setActive] = useState<Bet>(cards[0]);
  const [heightActiveBlock, setHeightActiveBlock] = useState<number>(0);
  const refHidden = useRef<HTMLDivElement | null>(null);
  const [newCards, setNewCards] = useState(cards);

  const handleToggle = (item: Bet) => {
    if (active && active.id !== item.id) {
      setActive(item);
    }
    if (valueAccordeon && valueAccordeon === item.id) {
      setValueAccordeon && setValueAccordeon(undefined);
    } else {
      setValueAccordeon && setValueAccordeon(item.id);
    }
  };

  useEffect(() => {
    setValueAccordeon && setValueAccordeon(undefined);
  }, []);

  useEffect(() => {
    if (refHidden?.current) {
      setHeightActiveBlock(refHidden?.current?.clientHeight);
    }
  }, [valueAccordeon]);

  const filterCards = useMemo(() => cards.filter((el: any) => el.id !== active.id), [active]);
  const filterActiveCard = useMemo(() => cards.filter((el: any) => el.id === active.id), [active]);

  useEffect(() => {
    setNewCards([...filterActiveCard, ...filterCards]);
  }, [active]);

  return { valueAccordeon, setValueAccordeon, heightActiveBlock, handleToggle, newCards, active, refHidden };
};

export default useAccordeon;
