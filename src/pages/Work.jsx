import React, { useEffect, useState } from "react";
import WorkHero from "../components/work/WorkHero";
import WorkFilterSearch from "../components/work/WorkFilterSearch";
import WorkData from "../components/work/workData";
import { Oval } from 'react-loader-spinner';
import { div } from "framer-motion/client";

export default function Work() {



  return (
    <>
      <WorkHero />
      <WorkFilterSearch />
      <WorkData />
    </>
  );
}

